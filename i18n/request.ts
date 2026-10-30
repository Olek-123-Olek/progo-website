import { readFile } from "fs/promises";
import path from "path";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

async function loadMessages(locale: string) {
  const filePath = path.join(process.cwd(), "messages", `${locale}.json`);
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw) as Record<string, unknown>;
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    // Read from disk so new message keys are picked up without a stale Webpack JSON module cache.
    messages: await loadMessages(locale),
  };
});
