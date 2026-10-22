import { MapPin, MessageCircle, UsersRound } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import type { Mentor } from "@/content/mentors";
import { ArcPair, Eyebrow, h2Class, outlinePill, primaryPill } from "./primitives";

export function Mentors({ mentors }: { mentors: Mentor[] }) {
  const t = useTranslations("Mentors");

  return (
    <section id="mentors" className="border-t border-line">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5cqw,64px)] py-[clamp(72px,9cqw,136px)]">
        <div data-reveal className="mb-12 max-w-[680px]">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className={`${h2Class} mb-4`}>{t("title")}</h2>
          <p className="m-0 text-pretty text-ink-2">{t("body")}</p>
        </div>

        {mentors.length > 0 ? (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6">
            {mentors.map((m, i) => (
              <div
                key={m.name}
                data-reveal
                data-delay={i * 90}
                className="flex flex-col rounded-[18px] border border-line bg-card p-6"
              >
                <div
                  aria-hidden="true"
                  className="mb-5 grid size-16 place-items-center rounded-[999px_999px_16px_16px] bg-tint font-serif text-[26px] text-ink"
                >
                  {m.initials}
                </div>
                <div className="text-lg font-semibold">{m.name}</div>
                <div className="mt-0.5 text-[15px] text-ink-2">{t(`roles.${m.roleKey}`)}</div>
                <div className="mt-3.5 mb-5 flex items-center gap-1.5 font-mono text-xs uppercase tracking-[.08em] text-ink-2">
                  <MapPin className="size-4 text-electric" strokeWidth={1.75} />
                  {m.city}
                </div>
                <a href="#message" className={cn(outlinePill, "mt-auto min-h-11 justify-center gap-2 text-[15px]")}>
                  <MessageCircle className="size-[1.1em]" strokeWidth={1.75} />
                  {t("message")}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative flex flex-col items-start gap-4 overflow-hidden rounded-3xl border-[1.5px] border-dashed border-line bg-card p-[clamp(32px,5cqw,64px)]">
            <ArcPair
              left="#3845B5"
              className="absolute right-[-40px] -bottom-px w-[clamp(220px,32cqw,420px)] opacity-[.18]"
            />
            <div className="grid size-14 place-items-center rounded-[999px_999px_14px_14px] bg-tint text-electric">
              <UsersRound className="size-[26px]" strokeWidth={1.6} />
            </div>
            <h3 className="relative m-0 max-w-[16em] font-serif text-[clamp(28px,3cqw,40px)] font-normal leading-[1.1]">
              {t("empty.title")}
            </h3>
            <p className="relative m-0 max-w-[32em] text-ink-2">{t("empty.body")}</p>
            <a data-cta href="#notify" className={cn(primaryPill, "relative min-h-12 px-[22px] text-base")}>
              {t("empty.cta")}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
