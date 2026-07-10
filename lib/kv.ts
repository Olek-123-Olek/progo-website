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

export async function checkRateLimit(
  key: string,
  limit: number,
  windowSec: number,
): Promise<boolean> {
  const kv = getKvClient();
  if (!kv) return true;

  try {
    const count = await kv.incr(key);
    if (count === 1) await kv.expire(key, windowSec);
    return count <= limit;
  } catch {
    return true;
  }
}
