import { getKvClient } from "@/lib/kv";
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

async function readKvStats(): Promise<ViewStats> {
  const kv = getKvClient();
  if (!kv) throw new Error("KV not configured");

  const [today, month] = await Promise.all([
    kv.get<number>(dayStorageKey()),
    kv.get<number>(monthStorageKey()),
  ]);

  return { today: today ?? 0, month: month ?? 0 };
}

async function incrementKvStats(): Promise<ViewStats> {
  const kv = getKvClient();
  if (!kv) throw new Error("KV not configured");

  const [today, month] = await Promise.all([
    kv.incr(dayStorageKey()),
    kv.incr(monthStorageKey()),
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
  if (getKvClient()) {
    try {
      return await readKvStats();
    } catch {
      /* fall through to local */
    }
  }

  if (!process.env.VERCEL) {
    return readLocalStats();
  }

  return { today: 0, month: 0 };
}

export async function recordView(): Promise<ViewStats> {
  if (getKvClient()) {
    try {
      return await incrementKvStats();
    } catch {
      /* fall through */
    }
  }

  if (!process.env.VERCEL) {
    return incrementLocalStats();
  }

  return { today: 0, month: 0 };
}

export function getSessionDayKey(): string {
  return dayKey();
}
