import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { ArchLines, archRadius, Eyebrow, h2Class, primaryPill } from "./primitives";
import instructorPhoto from "../../../public/images/instructor.jpg";

const benefitKeys = ["earn", "handled", "format", "reach"] as const;

export function Teach() {
  const t = useTranslations("Teach");

  return (
    <section
      id="teach"
      className="mx-auto flex max-w-[1240px] flex-wrap-reverse items-center gap-[clamp(48px,7cqw,104px)] px-[clamp(20px,5cqw,64px)] py-[clamp(72px,9cqw,136px)]"
    >
      <div data-reveal className="relative w-full min-w-[260px] flex-[0_1_420px]">
        <ArchLines rings={2} opacity={0.5} fadeFrom="40%" fadeTo="75%" />
        <div className={cn("relative aspect-[4/5] overflow-hidden bg-surface", archRadius)}>
          <Image
            src={instructorPhoto}
            alt={t("photoAlt")}
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
            className="object-cover object-[22%_50%]"
          />
        </div>
      </div>
      <div data-reveal className="min-w-0 flex-[1_1_480px]">
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <h2 className={`${h2Class} mb-5`}>{t("title")}</h2>
        <p className="mt-0 mb-8 max-w-[34em] text-ink-2">{t("body")}</p>
        <ul className="m-0 mb-10 flex list-none flex-col p-0">
          {benefitKeys.map((key) => (
            <li key={key} className="flex items-start gap-3.5 border-t border-line py-3.5">
              <Check className="mt-[3px] size-5 flex-none text-electric" strokeWidth={1.75} />
              <span>{t(`benefits.${key}`)}</span>
            </li>
          ))}
        </ul>
        <a data-cta href="#apply" className={cn(primaryPill, "min-h-[54px] gap-2.5 px-7 text-[17px]")}>
          {t("cta")} <ArrowRight className="size-[1.1em]" strokeWidth={1.75} />
        </a>
      </div>
    </section>
  );
}
