import { MessagesSquare, Shuffle, Signpost } from "lucide-react";
import { useTranslations } from "next-intl";
import { Eyebrow, h2Class } from "./primitives";

const problems = [
  { key: "scattered", Icon: Shuffle },
  { key: "guidance", Icon: MessagesSquare },
  { key: "path", Icon: Signpost },
] as const;

export function Problem() {
  const t = useTranslations("Problem");

  return (
    <section className="mx-auto flex max-w-[1240px] flex-wrap gap-[clamp(32px,6cqw,96px)] px-[clamp(20px,5cqw,64px)] pb-[clamp(72px,9cqw,136px)]">
      <div data-reveal className="min-w-0 flex-[1_1_320px]">
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <h2 className={h2Class}>{t("title")}</h2>
      </div>
      <div className="flex min-w-0 flex-[1.6_1_520px] flex-col">
        {problems.map(({ key, Icon }, i) => (
          <div
            key={key}
            data-reveal
            data-delay={i * 90}
            className="grid grid-cols-[auto_minmax(0,1fr)] gap-5 border-t border-line py-7"
          >
            <div className="grid size-[52px] place-items-center rounded-[999px_999px_12px_12px] bg-tint text-electric">
              <Icon className="size-6" strokeWidth={1.6} />
            </div>
            <div>
              <h3 className="mt-1 mb-2 font-serif text-[26px] font-medium leading-[1.15]">{t(`items.${key}.title`)}</h3>
              <p className="m-0 max-w-[36em] text-pretty text-ink-2">{t(`items.${key}.body`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
