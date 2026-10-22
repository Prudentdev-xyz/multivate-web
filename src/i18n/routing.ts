import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "de", "es"],
  defaultLocale: "en",
  // English lives at "/", the others at "/fr", "/de" and "/es"
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
