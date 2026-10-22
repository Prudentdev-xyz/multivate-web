"use client";

import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useTranslations } from "next-intl";

const faqKeys = ["cost", "transfer", "certificate", "levels", "language", "mentors"] as const;

/** Single-open accordion; the first answer starts expanded. */
export function FaqList() {
  const t = useTranslations("Faq.items");
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div data-reveal className="min-w-0 flex-[1.6_1_520px] border-b border-line">
      {faqKeys.map((key, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-${key}`;
        return (
          <div key={key} className="border-t border-line">
            <h3 className="m-0">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex min-h-[68px] w-full cursor-pointer items-center justify-between gap-5 border-0 bg-transparent py-4 text-left text-lg font-medium text-ink"
              >
                {t(`${key}.q`)}
                {isOpen ? (
                  <Minus className="size-5 flex-none text-electric" strokeWidth={1.75} />
                ) : (
                  <Plus className="size-5 flex-none text-electric" strokeWidth={1.75} />
                )}
              </button>
            </h3>
            {isOpen && (
              <p id={panelId} className="m-0 pr-10 pb-6 text-pretty text-ink-2">
                {t(`${key}.a`)}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
