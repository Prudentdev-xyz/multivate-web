import { useTranslations } from "next-intl";
import { Eyebrow, h2Class } from "./primitives";
import { FaqList } from "./faq-list";

const inlineLink = "font-medium text-primary hover:text-ink";

export function Faq() {
  const t = useTranslations("Faq");

  return (
    <section className="mx-auto flex max-w-[1240px] flex-wrap gap-[clamp(32px,6cqw,96px)] px-[clamp(20px,5cqw,64px)] py-[clamp(72px,9cqw,136px)]">
      <div data-reveal className="min-w-0 flex-[1_1_300px]">
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <h2 className={`${h2Class} mb-4`}>{t("title")}</h2>
        <p className="m-0 text-ink-2">
          {t.rich("more", {
            kazzy: (chunks) => (
              <a href="#kazzy" className={inlineLink}>
                {chunks}
              </a>
            ),
            contact: (chunks) => (
              <a href="#contact" className={inlineLink}>
                {chunks}
              </a>
            ),
          })}
        </p>
      </div>
      <FaqList />
    </section>
  );
}
