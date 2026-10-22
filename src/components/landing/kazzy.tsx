import { useTranslations } from "next-intl";
import { Eyebrow, h2Class, KazzyMark } from "./primitives";
import { KazzyDemo } from "./kazzy-demo";

export function Kazzy() {
  const t = useTranslations("Kazzy");

  return (
    <section id="kazzy" className="bg-tint">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-[clamp(40px,6cqw,96px)] px-[clamp(20px,5cqw,64px)] py-[clamp(72px,9cqw,136px)]">
        <div data-reveal className="min-w-0 flex-[1_1_400px]">
          <KazzyMark className="mb-7 size-20" strokeWidth={16} />
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className={`${h2Class} mb-5`}>{t("title")}</h2>
          <p className="m-0 max-w-[32em] text-pretty text-ink-2">{t("body")}</p>
        </div>
        <KazzyDemo />
      </div>
    </section>
  );
}
