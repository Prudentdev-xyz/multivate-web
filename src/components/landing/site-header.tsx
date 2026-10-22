"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./language-switcher";
import { useLandingUi } from "./landing-ui";
import logo from "../../../public/brand/logo-light.png";

const navItems = [
  { href: "#courses", key: "courses" },
  { href: "#mentors", key: "mentors" },
  { href: "#teach", key: "teach" },
] as const;

export function SiteHeader() {
  const t = useTranslations("Nav");
  const { menuOpen, setMenuOpen } = useLandingUi();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The menu only exists below 768px, and Escape should close it
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setMenuOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    mq.addEventListener("change", onChange);
    window.addEventListener("keydown", onKey);
    return () => {
      mq.removeEventListener("change", onChange);
      window.removeEventListener("keydown", onKey);
    };
  }, [setMenuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color] duration-250 ease-out",
        scrolled ? "border-line bg-[rgba(255,253,246,.97)]" : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1240px] items-center gap-[clamp(12px,3cqw,40px)] px-[clamp(20px,5cqw,64px)] py-2.5">
        <a
          href="#top"
          aria-label={t("home")}
          className="block aspect-[3401/2921] h-[clamp(36px,3.1cqw,44px)] flex-none overflow-hidden"
        >
          <Image src={logo} alt="Multivate" priority sizes="80px" className="block h-auto w-full" />
        </a>

        {/* Desktop */}
        <div className="hidden md:contents">
          <nav className="flex gap-2">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="flex min-h-11 items-center px-3 text-base font-medium text-ink transition-colors hover:text-primary"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
          <div className="flex-1" />
          <LanguageSwitcher variant="header" />
          <a href="#login" className="flex min-h-11 items-center px-2 text-base font-medium text-ink hover:text-primary">
            {t("login")}
          </a>
          <a
            href="#start"
            className="flex min-h-12 items-center rounded-full bg-primary px-[22px] text-base font-medium text-white transition-[background-color,scale] duration-200 hover:bg-ink active:scale-[.97]"
          >
            {t("getStarted")}
          </a>
        </div>

        {/* Mobile */}
        <div className="contents md:hidden">
          <div className="flex-1" />
          <a
            href="#start"
            className="flex min-h-11 items-center rounded-full bg-primary px-4 text-[15px] font-medium text-white transition-[scale] active:scale-[.97]"
          >
            {t("getStarted")}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={t("menu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-line bg-card text-ink"
          >
            {menuOpen ? <X className="size-5" strokeWidth={1.75} /> : <Menu className="size-5" strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full flex flex-col border-b border-line bg-background px-5 pt-2 pb-6 md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={closeMenu}
              className="flex min-h-[52px] items-center border-b border-line font-serif text-2xl text-ink"
            >
              {t(item.key)}
            </a>
          ))}
          <LanguageSwitcher variant="menu" />
          <a
            href="#login"
            onClick={closeMenu}
            className="flex min-h-12 items-center justify-center rounded-full border-[1.5px] border-ink font-medium text-ink"
          >
            {t("login")}
          </a>
        </div>
      )}
    </header>
  );
}
