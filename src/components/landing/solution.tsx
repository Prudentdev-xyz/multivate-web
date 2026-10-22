import Image from "next/image";
import { Award, BookOpenText, MessageSquareText, UsersRound } from "lucide-react";
import { useTranslations } from "next-intl";
import { Eyebrow, h2Class } from "./primitives";
import solutionPhoto from "../../../public/images/solution.jpg";

const pillars = [
  { key: "courses", Icon: BookOpenText },
  { key: "mentors", Icon: UsersRound },
  { key: "kazzy", Icon: MessageSquareText },
  { key: "certificates", Icon: Award },
] as const;

export function Solution() {
  const t = useTranslations("Solution");

  return (
    <section className="bg-surface">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-[clamp(40px,6cqw,96px)] px-[clamp(20px,5cqw,64px)] py-[clamp(72px,9cqw,136px)]">
        <div data-reveal className="relative aspect-[4/3] min-w-0 flex-[1_1_420px] overflow-hidden rounded-[20px] bg-line">
          <Image
            src={solutionPhoto}
            alt={t("photoAlt")}
            fill
            sizes="(min-width: 1024px) 500px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-[1.1_1_460px]">
          <div data-reveal>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className={`${h2Class} mb-10`}>{t("title")}</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-10 gap-y-8">
            {pillars.map(({ key, Icon }, i) => (
              <div key={key} data-reveal data-delay={i * 90} className="border-t-[1.5px] border-ink pt-5">
                <div className="mb-2 flex items-center gap-3">
                  <Icon className="size-6 text-electric" strokeWidth={1.6} />
                  <h3 className="m-0 text-[19px] font-semibold">{t(`items.${key}.title`)}</h3>
                </div>
                <p className="m-0 text-base text-pretty text-ink-2">{t(`items.${key}.body`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
