import { BadgeCheck, BookOpen, Compass, UserPlus } from "lucide-react";
import { useTranslations } from "next-intl";
import { Eyebrow, h2Class } from "./primitives";

const steps = [
  { key: "signUp", Icon: UserPlus },
  { key: "choose", Icon: Compass },
  { key: "learn", Icon: BookOpen },
  { key: "certified", Icon: BadgeCheck },
] as const;

export function HowItWorks() {
  const t = useTranslations("HowItWorks");

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5cqw,64px)] py-[clamp(72px,9cqw,136px)]">
        <div data-reveal className="mb-14">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className={h2Class}>{t("title")}</h2>
        </div>
        <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-8 gap-y-10 p-0">
          {steps.map(({ key, Icon }, i) => (
            <li key={key} data-reveal data-delay={i * 90} className="border-t-[1.5px] border-ink pt-5">
              <div className="mb-5 flex items-center justify-between">
                <span aria-hidden="true" className="font-serif text-[56px] leading-none text-sky">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="grid size-12 place-items-center rounded-full bg-background text-electric">
                  <Icon className="size-[22px]" strokeWidth={1.6} />
                </span>
              </div>
              <h3 className="mt-0 mb-2 text-xl font-semibold">{t(`steps.${key}.title`)}</h3>
              <p className="m-0 text-base text-pretty text-ink-2">{t(`steps.${key}.body`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
