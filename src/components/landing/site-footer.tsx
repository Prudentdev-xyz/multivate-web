import Image from "next/image";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon, XIcon, YouTubeIcon } from "./primitives";
import logoDark from "../../../public/brand/logo-dark.jpg";

const socials = [
  { href: "#instagram", label: "Instagram", Icon: InstagramIcon },
  { href: "#linkedin", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "#x", label: "X", Icon: XIcon },
  { href: "#youtube", label: "YouTube", Icon: YouTubeIcon },
  { href: "#whatsapp", label: "WhatsApp", Icon: WhatsAppIcon },
];

const columnHeading = "mb-3 font-mono text-xs uppercase tracking-[.14em] text-on-dark-2";
const footerLink = "flex min-h-10 items-center text-on-dark transition-colors hover:text-white";
const footerText = "flex min-h-10 items-center text-on-dark-2";

export function SiteFooter() {
  const t = useTranslations("Footer");

  return (
    <footer id="contact" className="border-t border-line-dark bg-dark text-on-dark">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5cqw,64px)] pt-[clamp(56px,6cqw,88px)] pb-8">
        <div className="flex flex-wrap gap-x-[clamp(32px,5cqw,80px)] gap-y-12">
          <div className="min-w-0 flex-[1_1_240px]">
            <Image src={logoDark} alt={t("logoAlt")} sizes="170px" className="block h-auto w-[170px] mix-blend-lighten" />
          </div>
          <div className="grid min-w-0 flex-[3_1_560px] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8">
            <div>
              <div className={columnHeading}>{t("learn")}</div>
              <a href="#courses" className={footerLink}>{t("germanCourses")}</a>
              <a href="#courses" className={footerLink}>{t("techSkills")}</a>
              <a href="#kazzy" className={footerLink}>{t("kazzy")}</a>
            </div>
            <div>
              <div className={columnHeading}>{t("community")}</div>
              <a href="#mentors" className={footerLink}>{t("mentors")}</a>
              <a href="#teach" className={footerLink}>{t("teach")}</a>
              <a href="#about" className={footerLink}>{t("about")}</a>
            </div>
            <div>
              <div className={columnHeading}>{t("contact")}</div>
              <a href="mailto:hello@multivate.ng" className={footerLink}>hello@multivate.ng</a>
              <span className={footerText}>{t("phone")}</span>
              <span className={footerText}>{t("location")}</span>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-line-dark pt-6">
          <nav aria-label={t("social")} className="flex gap-1">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid size-11 place-items-center rounded-full text-xl text-on-dark transition-colors hover:bg-line-dark hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </nav>
          <LanguageSwitcher variant="footer" />
        </div>

        <div className="mt-6 flex flex-wrap justify-between gap-3 text-sm text-on-dark-2">
          <span>{t("copyright")}</span>
          <span className="flex gap-5">
            <a href="#privacy" className="text-on-dark-2 transition-colors hover:text-white">{t("privacy")}</a>
            <a href="#terms" className="text-on-dark-2 transition-colors hover:text-white">{t("terms")}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
