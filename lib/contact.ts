import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/lib/constants";

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  role?: string;
  message: string;
  locale?: string;
  privacyAccepted: boolean;
};

const ROLE_LABELS: Record<string, Record<string, string>> = {
  carrier: { en: "Carrier", de: "Spediteur", pl: "Przewoźnik", uk: "Перевізник", fr: "Transporteur", it: "Vettore" },
  shipper: { en: "Shipper / Client", de: "Versender / Kunde", pl: "Nadawca / Klient", uk: "Відправник / Клієнт", fr: "Expéditeur / Client", it: "Mittente / Cliente" },
  producer: { en: "Producer", de: "Produzent", pl: "Producent", uk: "Виробник", fr: "Producteur", it: "Produttore" },
  forwarder: { en: "Forwarder", de: "Forwarder", pl: "Spedytor", uk: "Експедитор", fr: "Transitaire", it: "Spedizioniere" },
  other: { en: "Other", de: "Sonstiges", pl: "Inne", uk: "Інше", fr: "Autre", it: "Altro" },
};

function roleLabel(role: string | undefined, locale: string): string {
  if (!role) return "—";
  return ROLE_LABELS[role]?.[locale] ?? ROLE_LABELS[role]?.en ?? role;
}

export function validateContactPayload(body: unknown): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "invalid_body" };
  }

  const record = body as Record<string, unknown>;

  if (typeof record.website === "string" && record.website.trim()) {
    return { ok: false, error: "spam" };
  }

  const name = typeof record.name === "string" ? record.name.trim() : "";
  const email = typeof record.email === "string" ? record.email.trim() : "";
  const message = typeof record.message === "string" ? record.message.trim() : "";
  const company = typeof record.company === "string" ? record.company.trim() : "";
  const role = typeof record.role === "string" ? record.role.trim() : "";
  const locale = typeof record.locale === "string" ? record.locale.trim() : "en";
  const privacyAccepted = record.privacyAccepted === true;

  if (!name || name.length < 2 || name.length > 120) {
    return { ok: false, error: "invalid_name" };
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return { ok: false, error: "invalid_email" };
  }

  if (!message || message.length < 5 || message.length > 4000) {
    return { ok: false, error: "invalid_message" };
  }

  if (company.length > 120) {
    return { ok: false, error: "invalid_company" };
  }

  const allowedRoles = ["carrier", "shipper", "producer", "forwarder", "other", ""];
  if (!allowedRoles.includes(role)) {
    return { ok: false, error: "invalid_role" };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      company: company || undefined,
      role: role || undefined,
      message,
      locale,
      privacyAccepted,
    },
  };
}

export async function sendContactEmail(data: ContactPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL ?? CONTACT_EMAIL;
  const from =
    process.env.RESEND_FROM_EMAIL ?? "ProGo Website <onboarding@resend.dev>";

  const role = roleLabel(data.role, data.locale ?? "en");
  const company = data.company ?? "—";

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `ProGo contact — ${data.name}${data.company ? ` (${data.company})` : ""}`,
    text: [
      `New contact form submission from progo.one`,
      ``,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${company}`,
      `Role: ${role}`,
      `Locale: ${data.locale ?? "en"}`,
      ``,
      `Message:`,
      data.message,
    ].join("\n"),
    html: `
      <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#0f172a">
        <h2 style="margin:0 0 16px;color:#0891b2">New ProGo contact form submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:560px">
          <tr><td style="padding:8px 0;color:#64748b;width:120px">Name</td><td style="padding:8px 0"><strong>${escapeHtml(data.name)}</strong></td></tr>
          <tr><td style="padding:8px 0;color:#64748b">Email</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
          <tr><td style="padding:8px 0;color:#64748b">Company</td><td style="padding:8px 0">${escapeHtml(company)}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b">Role</td><td style="padding:8px 0">${escapeHtml(role)}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b">Locale</td><td style="padding:8px 0">${escapeHtml(data.locale ?? "en")}</td></tr>
        </table>
        <h3 style="margin:24px 0 8px;color:#0891b2">Message</h3>
        <p style="margin:0;white-space:pre-wrap;background:#f8fafc;padding:16px;border-radius:8px;border:1px solid #e2e8f0">${escapeHtml(data.message)}</p>
      </div>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
