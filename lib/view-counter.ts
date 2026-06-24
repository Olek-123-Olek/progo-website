import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "pageviews.json");
const TIME_ZONE = "Europe/Warsaw";

export type ViewStats = {
  today: number;
  month: number;
};

type StoredData = {
  days: Record<string, number>;
  months: Record<string, number>;
};

function dayKey(date = new Date()): string {
  return date.toLocaleDateString("en-CA", { timeZone: TIME_ZONE });
}

function monthKey(date = new Date()): string {
  return dayKey(date).slice(0, 7);
}

function kvConfigured() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

async function kvFetch<T>(pathSuffix: string): Promise<T | null> {
  const base = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!base || !token) return null;

  const res = await fetch(`${base}${pathSuffix}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json() as Promise<T>;
}

async function kvGet(key: string): Promise<number> {
  const data = await kvFetch<{ result: number | null }>(`/get/${key}`);
  if (!data || data.result === null) return 0;
  return Number(data.result);
}

async function kvIncr(key: string): Promise<number> {
  const data = await kvFetch<{ result: number }>(`/incr/${key}`);
  return data?.result ?? 0;
}

function dayStorageKey(date = new Date()) {
  return `progo:views:day:${dayKey(date)}`;
}

function monthStorageKey(date = new Date()) {
  return `progo:views:month:${monthKey(date)}`;
}

async function readLocalData(): Promise<StoredData> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw) as StoredData;
    return {
      days: parsed.days ?? {},
      months: parsed.months ?? {},
    };
  } catch {
    return { days: {}, months: {} };
  }
}

async function writeLocalData(data: StoredData): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

async function readKvStats(): Promise<ViewStats | null> {
  if (!kvConfigured()) return null;

  const [today, month] = await Promise.all([
    kvGet(dayStorageKey()),
    kvGet(monthStorageKey()),
  ]);

  return { today, month };
}

async function incrementKvStats(): Promise<ViewStats | null> {
  if (!kvConfigured()) return null;

  const [today, month] = await Promise.all([
    kvIncr(dayStorageKey()),
    kvIncr(monthStorageKey()),
  ]);

  return { today, month };
}

async function readLocalStats(): Promise<ViewStats> {
  const data = await readLocalData();
  const today = dayKey();
  const month = monthKey();

  return {
    today: data.days[today] ?? 0,
    month: data.months[month] ?? 0,
  };
}

async function incrementLocalStats(): Promise<ViewStats> {
  const data = await readLocalData();
  const today = dayKey();
  const month = monthKey();

  const nextToday = (data.days[today] ?? 0) + 1;
  const nextMonth = (data.months[month] ?? 0) + 1;

  data.days[today] = nextToday;
  data.months[month] = nextMonth;

  await writeLocalData(data);

  return { today: nextToday, month: nextMonth };
}

export async function getViewStats(): Promise<ViewStats> {
  const kvStats = await readKvStats();
  if (kvStats) return kvStats;

  if (!process.env.VERCEL) {
    return readLocalStats();
  }

  return readLocalStats().catch(() => ({ today: 0, month: 0 }));
}

export async function recordView(): Promise<ViewStats> {
  try {
    const kvStats = await incrementKvStats();
    if (kvStats) return kvStats;
  } catch {
    /* fall through */
  }

  if (!process.env.VERCEL) {
    return incrementLocalStats();
  }

  return readLocalStats().catch(() => ({ today: 0, month: 0 }));
}

export function getSessionDayKey(): string {
  return dayKey();
}
