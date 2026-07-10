export const CONTACT_EMAIL = "admin@progo.one";

export const LINKS = {
  platform: "https://progo-davos.vercel.app/login",
  facebook:
    "https://www.facebook.com/groups/2753527658355972/?ref=share&mibextid=wwXIfr&rdid=0uNg9NWaObutmoFf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F17ou2nGA1Q%2F%3Fmibextid%3DwwXIfr",
  email: `mailto:${CONTACT_EMAIL}`,
  contact: "#contact",
} as const;

export const NAV_ITEMS = [
  { key: "problem", href: "#problem" },
  { key: "whyProgo", href: "#why-progo" },
  { key: "howItWorks", href: "#how-it-works" },
  { key: "features", href: "#features" },
  { key: "pricing", href: "#pricing" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" },
] as const;

export const PROBLEM_KEYS = [
  "portals",
  "status",
  "documents",
  "chat",
  "excel",
  "payment",
] as const;

export const SOLUTION_KEYS = [
  "map",
  "plan",
  "driver",
  "docs",
  "messages",
  "accounting",
] as const;

export const FEATURE_KEYS = [
  { key: "map", accent: "cyan", preview: "map" },
  { key: "plan", accent: "cyan", preview: "plan" },
  { key: "driver", accent: "red", preview: "driver" },
  { key: "docs", accent: "cyan", preview: "docs" },
  { key: "messages", accent: "cyan", preview: "messages" },
  { key: "accounting", accent: "red", preview: "accounting" },
  { key: "sos", accent: "red", preview: "sos" },
  { key: "collab", accent: "cyan", preview: "collab" },
  { key: "fleet", accent: "cyan", preview: "fleet" },
  { key: "monitor", accent: "red", preview: "monitor" },
] as const;

export const PRICING_TIERS = [
  { key: "tier1", price: "75", highlight: false },
  { key: "tier2", price: "150", highlight: true },
  { key: "tier3", price: "225", highlight: false },
  { key: "tier4", price: "300", highlight: false },
] as const;

export const BILLING_OPTIONS = [
  { id: "monthly" as const, multiplier: 1 },
  { id: "semiannual" as const, multiplier: 0.9 },
  { id: "yearly" as const, multiplier: 0.8 },
] as const;

export const HOW_IT_WORKS_STEPS = [1, 2, 3, 4] as const;

export const TRUST_ITEM_COUNT = 5;

export const COPYRIGHT_YEAR = 2026;
