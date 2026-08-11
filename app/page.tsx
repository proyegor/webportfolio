"use client";

import SiteHeader from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import Marquee from "@/components/marquee";
import FeaturesSection from "@/components/features-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/example-section";
import CTASection from "@/components/cta-section";
import SiteFooter from "@/components/site-footer";

export default function Component() {
  return (
    <div className="min-h-screen bg-ink-950 text-cream font-sans selection:bg-gold/30 selection:text-cream">
      {/* Navigation */}
      <SiteHeader />

      <main>
        {/* Hero */}
        <HeroSection />

        {/* Marquee strip */}
        <Marquee />

        {/* About */}
        <FeaturesSection />

        {/* Skills */}
        <SkillsSection />

        {/* Projects */}
        <ProjectsSection />

        {/* Contact */}
        <CTASection />
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
