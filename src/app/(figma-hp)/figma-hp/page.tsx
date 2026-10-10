import { SiteHeader } from "@/components/figma-hp/site-header";
import { HeroSection } from "@/components/figma-hp/hero-section";
import { PartnersSection } from "@/components/figma-hp/partners-section";
import { MissionSection } from "@/components/figma-hp/mission-section";
import { ServicesSection } from "@/components/figma-hp/services-section";
import { NewsSection } from "@/components/figma-hp/news-section";
import { CtaSection } from "@/components/figma-hp/cta-section";
import { SiteFooter } from "@/components/figma-hp/site-footer";

export default function FigmaHpPage() {
  return (
    <div className="flex min-h-full w-full flex-col items-start bg-white">
      <SiteHeader />
      <main className="flex w-full flex-col items-start">
        <HeroSection />
        <PartnersSection />
        <MissionSection />
        <ServicesSection />
        <NewsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
