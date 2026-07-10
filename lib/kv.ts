import { createClient, type VercelKV } from "@vercel/kv";

let kvClient: VercelKV | null | undefined;

export function getKvClient(): VercelKV | null {
  if (kvClient !== undefined) return kvClient;

  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    kvClient = null;
    return null;
  }

  kvClient = createClient({ url, token });
  return kvClient;
}

export async function peekRateLimit(key: string, limit: number): Promise<boolean> {
  const kv = getKvClient();
  if (!kv) return true;

  try {
    const count = await kv.get<number>(key);
    return (count ?? 0) < limit;
  } catch {
    return true;
  }
}

export async function recordRateLimitHit(key: string, windowSec: number): Promise<void> {
  const kv = getKvClient();
  if (!kv) return;

  try {
    const count = await kv.incr(key);
    if (count === 1) await kv.expire(key, windowSec);
  } catch {
    // ignore
  }
}
