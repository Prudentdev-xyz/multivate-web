"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { KazzyMark } from "./primitives";

const questionKeys = ["germanToStudy", "a1ToA2", "blockedAccount"] as const;

/** Preview of the Kazzy chat: picking a suggestion fills the prompt field. */
export function KazzyDemo() {
  const t = useTranslations("Kazzy");
  const [question, setQuestion] = useState<number | null>(null);

  return (
    <div
      data-reveal
      data-delay="120"
      className="min-w-0 flex-[1_1_440px] rounded-3xl border border-line bg-card p-[clamp(20px,3cqw,32px)] shadow-[0_1px_0_rgba(26,31,98,.04),0_24px_48px_-32px_rgba(26,31,98,.35)]"
    >
      <div className="flex items-center gap-3 border-b border-line pb-5">
        <KazzyMark className="size-10" />
        <div>
          <div className="leading-[1.2] font-semibold">{t("name")}</div>
          <div className="font-mono text-[11px] uppercase tracking-[.1em] text-ink-2">{t("role")}</div>
        </div>
      </div>

      <div className="mt-5 mb-3 font-mono text-xs uppercase tracking-[.12em] text-ink-2">{t("tryAsking")}</div>
      <div className="flex flex-col items-start gap-2.5">
        {questionKeys.map((key, i) => (
          <button
            key={key}
            type="button"
            aria-pressed={question === i}
            onClick={() => setQuestion(i)}
            className={cn(
              "min-h-11 cursor-pointer rounded-full border px-[18px] py-2.5 text-left text-[15px] text-ink transition-[border-color,scale] duration-200 hover:border-primary active:scale-[.98]",
              question === i ? "border-primary bg-tint" : "border-line bg-background",
            )}
          >
            {t(`questions.${key}`)}
          </button>
        ))}
      </div>

      <div data-cta className="mt-6 flex flex-wrap gap-2.5">
        <div
          aria-live="polite"
          className={cn(
            "flex min-h-[52px] flex-[1_1_220px] items-center rounded-full border border-line bg-background px-[18px] text-[15px]",
            question === null ? "text-ink-2" : "text-ink",
          )}
        >
          {question === null ? t("placeholder") : t(`questions.${questionKeys[question]}`)}
        </div>
        <button
          type="button"
          onClick={() => setQuestion((q) => q ?? 0)}
          className="flex min-h-[52px] cursor-pointer items-center gap-2 rounded-full bg-primary px-6 text-base font-medium text-white transition-[background-color,scale] duration-200 hover:bg-ink active:scale-[.97]"
        >
          {t("ask")} <ArrowUpRight className="size-[1.1em]" strokeWidth={1.75} />
        </button>
      </div>
      <p className="mt-4 mb-0 text-[13px] text-ink-2">{t("disclaimer")}</p>
    </div>
  );
}
