"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const variants = {
  header: {
    group: "flex gap-0.5",
    button: "h-11 min-w-11 rounded-full",
    active: "bg-tint text-primary",
    idle: "bg-transparent text-ink-2 hover:text-ink",
  },
  menu: {
    group: "my-4 flex gap-1",
    button: "h-11 flex-1 rounded-full border border-line",
    active: "bg-tint text-primary",
    idle: "bg-transparent text-ink-2",
  },
  footer: {
    group: "flex gap-0.5 rounded-full border border-line-dark p-0.5",
    button: "h-11 min-w-11 rounded-full",
    active: "bg-on-dark text-dark",
    idle: "bg-transparent text-on-dark-2 hover:text-white",
  },
} as const;

export function LanguageSwitcher({
  variant,
  onSwitch,
}: {
  variant: keyof typeof variants;
  onSwitch?: () => void;
}) {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const v = variants[variant];

  function switchTo(next: Locale) {
    onSwitch?.();
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next, scroll: false });
    });
  }

  return (
    <div role="group" aria-label={t("language")} aria-busy={isPending} className={v.group}>
      {routing.locales.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-pressed={code === locale}
          onClick={() => switchTo(code)}
          className={cn(
            "cursor-pointer font-mono text-xs uppercase tracking-[.06em] transition-colors",
            v.button,
            code === locale ? v.active : v.idle,
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
