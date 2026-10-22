import Image from "next/image";
import { ArrowRight, CircleCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { ArchLines, archRadius, outlinePill, primaryPill } from "./primitives";
import heroPhoto from "../../../public/images/hero.jpg";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="top"
      className="mx-auto flex max-w-[1240px] flex-wrap items-start gap-[clamp(56px,7cqw,104px)] px-[clamp(20px,5cqw,64px)] pt-[clamp(32px,6cqw,88px)] pb-[clamp(72px,9cqw,136px)]"
    >
      <div className="min-w-0 flex-[1_1_520px] pt-[clamp(0px,3cqw,48px)]">
        <div className="mb-6 font-mono text-xs uppercase tracking-[.14em] text-primary">{t("eyebrow")}</div>
        <h1 className="m-0 font-serif text-[clamp(44px,6.3cqw,90px)] font-normal leading-[1.02] tracking-[-.025em] text-balance">
          {t.rich("title", {
            em: (chunks) => <em className="text-primary italic">{chunks}</em>,
          })}
        </h1>
        <p className="mt-7 mb-0 max-w-[34em] text-[clamp(17px,1.3cqw,19px)] text-pretty text-ink-2">{t("body")}</p>
        <div data-cta className="mt-9 flex flex-wrap gap-3">
          <a href="#start" className={cn(primaryPill, "min-h-[54px] gap-2.5 px-7 text-[17px]")}>
            {t("primaryCta")} <ArrowRight className="size-[1.1em]" strokeWidth={1.75} />
          </a>
          <a href="#courses" className={cn(outlinePill, "min-h-[54px] px-7 text-[17px]")}>
            {t("secondaryCta")}
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-2">
          {[t("proofPayment"), t("proofLearners")].map((line) => (
            <span key={line} className="flex items-center gap-2">
              <CircleCheck className="size-[18px] text-electric" strokeWidth={1.75} />
              {line}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-[clamp(0px,4cqw,72px)] w-full min-w-[260px] flex-[0_1_440px]">
        <ArchLines rings={3} opacity={0.55} fadeFrom="45%" fadeTo="80%" />
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 translate-x-[clamp(14px,2cqw,28px)] translate-y-[clamp(14px,2cqw,28px)] bg-[linear-gradient(165deg,#1A1F62_20%,#3845B5_70%,#5F8DE1)]",
            archRadius,
          )}
        />
        <div className={cn("relative aspect-[4/5] overflow-hidden bg-surface", archRadius)}>
          <Image
            src={heroPhoto}
            alt={t("photoAlt")}
            fill
            priority
            sizes="(min-width: 1024px) 440px, (min-width: 768px) 45vw, 100vw"
            className="object-cover object-[50%_40%]"
          />
        </div>
      </div>
    </section>
  );
}
