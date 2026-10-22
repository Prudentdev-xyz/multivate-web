import { mentors } from "@/content/mentors";
import { Courses } from "@/components/landing/courses";
import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Kazzy } from "@/components/landing/kazzy";
import { KazzyFab } from "@/components/landing/kazzy-fab";
import { LandingUiProvider } from "@/components/landing/landing-ui";
import { Mentors } from "@/components/landing/mentors";
import { Problem } from "@/components/landing/problem";
import { ScrollReveal } from "@/components/landing/scroll-reveal";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { Solution } from "@/components/landing/solution";
import { Teach } from "@/components/landing/teach";

export default function LandingPage() {
  return (
    <LandingUiProvider>
      {/* Inline-size container so the design's fluid cqw sizing tracks the page width */}
      <div className="@container overflow-x-clip text-[17px] leading-[1.55]">
        <SiteHeader />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <Courses />
          <Mentors mentors={mentors} />
          <HowItWorks />
          <Teach />
          <Kazzy />
          <Faq />
          <FinalCta />
        </main>
        <SiteFooter />
      </div>
      <KazzyFab />
      <ScrollReveal />
    </LandingUiProvider>
  );
}
