import { peekRateLimit, recordRateLimitHit } from "@/lib/kv";
import { sendContactEmail, validateContactPayload } from "@/lib/contact";

export const dynamic = "force-dynamic";

function clientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = validateContactPayload(body);

    if (!validated.ok) {
      return Response.json({ ok: false, error: validated.error }, { status: 400 });
    }

    if (!validated.data.privacyAccepted) {
      return Response.json({ ok: false, error: "privacy_required" }, { status: 400 });
    }

    const ip = clientIp(request);
    const rateKey = `progo:contact:v2:${ip}`;
    const allowed = await peekRateLimit(rateKey, 15);
    if (!allowed) {
      return Response.json({ ok: false, error: "rate_limit" }, { status: 429 });
    }

    await sendContactEmail(validated.data);
    await recordRateLimitHit(rateKey, 3600);

    return Response.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown_error";
    console.error("[contact]", message);
    return Response.json({ ok: false, error: "send_failed" }, { status: 500 });
  }
}
