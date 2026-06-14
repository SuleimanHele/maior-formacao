import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/sections/Navbar";
import {HeroSection }from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components//sections/FeaturesSection";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { RequirementsSection } from "@/components/sections/RequirementsSection";
import { LocationDetailsSection } from "@/components/sections/LocationDetailsSection";
import { InvestmentSection } from "@/components/sections/InvestmentSection";

import Registration from "@/components/sections/Registration";
import { MentorSection } from "@/components/sections/MentorSection";
import { FAQSection } from "@/components/sections/FAQSection";
import ContactSection from "@/components/formacao/ContactSection";
import WhatsAppButton from "@/components/formacao/WhatsAppButton";




const Vendedor= () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <HeroSection />
      <TargetAudienceSection />
      <RequirementsSection />
      <FeaturesSection />
      <LocationDetailsSection />
      <Registration />
      <InvestmentSection />
      <MentorSection />
      <FAQSection />
      <ContactSection />
      <WhatsAppButton />
     
    </main>
  );
}
export default Vendedor;