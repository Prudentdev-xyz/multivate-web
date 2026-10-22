import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import * as rootParams from "next/root-params";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  // Server Actions and Route Handlers can't read root params, so they pass
  // the locale explicitly. Everything else reads it from the [locale] segment.
  const requested = locale ?? (await rootParams.locale());
  if (!hasLocale(routing.locales, requested)) notFound();

  return {
    locale: requested,
    messages: (await import(`../../messages/${requested}.json`)).default,
  };
});
