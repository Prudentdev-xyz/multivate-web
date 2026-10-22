import { ArrowRight } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import { featuredCourses } from "@/content/courses";
import { ArcPair, Eyebrow, h2Class } from "./primitives";

export function Courses() {
  const t = useTranslations("Courses");
  const format = useFormatter();

  return (
    <section id="courses" className="mx-auto max-w-[1240px] px-[clamp(20px,5cqw,64px)] py-[clamp(72px,9cqw,136px)]">
      <div data-reveal className="mb-12 flex flex-wrap items-end justify-between gap-5">
        <div className="max-w-[640px]">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className={h2Class}>{t("title")}</h2>
        </div>
        <a href="#all-courses" className="flex min-h-11 items-center gap-2 font-medium text-primary hover:text-ink">
          {t("viewAll")} <ArrowRight className="size-[1.1em]" strokeWidth={1.75} />
        </a>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
        {featuredCourses.map((course, i) => (
          <article
            key={course.id}
            data-reveal
            data-delay={i * 90}
            className="flex flex-col overflow-hidden rounded-[18px] border border-line bg-card transition-[translate,border-color] duration-250 ease-out hover:-translate-y-[3px] hover:border-sky"
          >
            <div className="relative aspect-video overflow-hidden bg-ink">
              <ArcPair className="absolute -bottom-px w-[85%]" style={{ left: course.arcLeft }} />
              <div aria-hidden="true" className="absolute top-3.5 left-[18px] font-serif text-[52px] leading-none text-on-dark">
                {course.level}
              </div>
              <div className="absolute top-[18px] right-[18px] font-mono text-[11px] uppercase tracking-[.12em] text-on-dark">
                {t("subject")}
              </div>
            </div>
            <div className="flex flex-1 flex-col px-5 pt-5 pb-3">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="rounded-md bg-tint px-2 py-1 font-mono text-xs tracking-[.06em] text-primary">{course.level}</span>
                <span className="font-mono text-[13px] text-ink-2">{t("lessons", { count: course.lessons })}</span>
              </div>
              <h3 className="mt-0 mb-5 font-serif text-2xl font-medium leading-[1.15] text-balance">{t(`items.${course.id}`)}</h3>
              <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-2">
                <span className="text-lg font-semibold">
                  {format.number(course.priceNgn, {
                    style: "currency",
                    currency: "NGN",
                    currencyDisplay: "narrowSymbol",
                    maximumFractionDigits: 0,
                  })}
                </span>
                <a href="#course" className="flex min-h-11 items-center gap-1.5 text-[15px] font-medium text-primary hover:text-ink">
                  {t("viewCourse")} <ArrowRight className="size-[1.1em]" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
