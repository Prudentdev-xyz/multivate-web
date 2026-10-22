"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useLandingUi } from "./landing-ui";
import { KazzyMark } from "./primitives";

/**
 * Floating "Ask Kazzy" shortcut. On mobile it steps aside while a primary
 * call to action ([data-cta]) is on screen or the menu is open, so it never
 * covers the button the visitor is about to tap.
 */
export function KazzyFab() {
  const t = useTranslations("Fab");
  const { menuOpen } = useLandingUi();
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      }
      setCtaVisible(visible.size > 0);
    });
    document.querySelectorAll("[data-cta]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const hiddenOnMobile = ctaVisible || menuOpen;

  return (
    <a
      href="#kazzy"
      aria-label={t("label")}
      className={cn(
        "fixed right-5 bottom-5 z-60 flex h-14 min-w-14 items-center gap-2.5 rounded-full bg-ink p-2 text-[15px] font-medium text-on-dark shadow-[0_12px_32px_-12px_rgba(16,17,35,.5)] transition-[opacity,translate,scale] duration-250 ease-out hover:text-white active:scale-[.96]",
        hiddenOnMobile && "max-md:pointer-events-none max-md:translate-y-3 max-md:opacity-0",
      )}
    >
      <KazzyMark className="size-10" background="#101123" />
      <span className="hidden pr-2.5 md:inline">{t("label")}</span>
    </a>
  );
}
