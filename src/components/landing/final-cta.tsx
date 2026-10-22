import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const ARCS =
  "M80 200A50 50 0 0 1 180 200M50 200A80 80 0 0 1 210 200M20 200A110 110 0 0 1 240 200M-10 200A140 140 0 0 1 270 200M-40 200A170 170 0 0 1 300 200M220 200A50 50 0 0 1 320 200M190 200A80 80 0 0 1 350 200M160 200A110 110 0 0 1 380 200M130 200A140 140 0 0 1 410 200M100 200A170 170 0 0 1 440 200";

export function FinalCta() {
  const t = useTranslations("FinalCta");

  return (
    <section className="relative overflow-hidden bg-dark text-on-dark">
      <svg
        viewBox="0 0 400 200"
        fill="none"
        strokeWidth={10}
        aria-hidden="true"
        className="absolute right-[-6%] -bottom-px w-[clamp(320px,46cqw,680px)] opacity-55"
      >
        <defs>
          <linearGradient id="mvCtaArc" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#3845B5" />
            <stop offset="1" stopColor="#5F8DE1" />
          </linearGradient>
        </defs>
        <path d={ARCS} stroke="url(#mvCtaArc)" />
      </svg>
      <div
        data-reveal
        className="relative mx-auto max-w-[1240px] px-[clamp(20px,5cqw,64px)] pt-[clamp(88px,10cqw,152px)] pb-[clamp(120px,12cqw,180px)]"
      >
        <h2 className="mt-0 mb-5 max-w-[12em] font-serif text-[clamp(42px,5.6cqw,80px)] font-normal leading-[1.03] tracking-[-.025em] text-balance">
          {t.rich("title", { em: (chunks) => <em className="italic">{chunks}</em> })}
        </h2>
        <p className="mt-0 mb-9 max-w-[30em] text-on-dark-2">{t("body")}</p>
        <a
          data-cta
          href="#start"
          className={cn(
            "inline-flex min-h-14 items-center gap-2.5 rounded-full bg-primary px-[30px] text-[17px] font-medium text-white",
            "transition-[background-color,scale] duration-200 hover:bg-[#4552C4] active:scale-[.97]",
          )}
        >
          {t("cta")} <ArrowRight className="size-[1.1em]" strokeWidth={1.75} />
        </a>
      </div>
    </section>
  );
}
