import { checkRateLimit } from "@/lib/kv";
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
    const allowed = await checkRateLimit(`progo:contact:${ip}`, 10, 3600);
    if (!allowed) {
      return Response.json({ ok: false, error: "rate_limit" }, { status: 429 });
    }

    await sendContactEmail(validated.data);

    return Response.json({ ok: true });
  } catch (error) {
    console.error("[contact]", error);
    return Response.json({ ok: false, error: "send_failed" }, { status: 500 });
  }
}
