/**
 * Central legal / privacy contact configuration.
 * Fill real entity details before App Store submission when available.
 * Do not invent registration numbers, VAT IDs, or postal addresses.
 */
export const LEGAL = {
  /** Display name used as controller / service brand until a registered entity is confirmed. */
  companyName:
    process.env.LEGAL_COMPANY_NAME?.trim() || "ProGo",

  /** Postal address — leave empty until confirmed. */
  address: process.env.LEGAL_ADDRESS?.trim() || "",

  /** General legal / admin contact. */
  email: process.env.LEGAL_EMAIL?.trim() || "admin@progo.one",

  /** Data protection / privacy requests. */
  dataProtectionEmail:
    process.env.DATA_PROTECTION_EMAIL?.trim() || "admin@progo.one",

  /** ISO date shown as "Last updated" on privacy pages. */
  privacyLastUpdated: "2026-08-02",

  /** Canonical public URLs for App Store Connect. */
  privacyPath: "/privacy",
  privacyChoicesPath: "/privacy-choices",
} as const;

export const PRIVACY_REQUEST_MAILTO = `mailto:${LEGAL.dataProtectionEmail}?subject=${encodeURIComponent("Privacy Request")}`;
