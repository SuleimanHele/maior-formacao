
import NavBar from "@/components/magaf/NavBar";
import HeroSection from "@/components/magaf/HeroSection";
import AudienceSection from "@/components/magaf/AudienceSection";
import WhatYouCanBuild from "@/components/magaf/WhatYouCanBuild";
import ModulesSection from "@/components/magaf/ModulesSection";
import MentorSection from "@/components/magaf/MentorSection";
import ScheduleSection from "@/components/magaf/ScheduleSection";
import PricingSection from "@/components/magaf/PricingSection";
import ParticipationSection from "@/components/magaf/ParticipationSection"; // <- IMPORTAR
import ContactSection from "@/components/formacao/ContactSection";
import FAQSection from "@/components/magaf/FAQSection";
import WhatsAppButton from "@/components/formacao/WhatsAppButton";

import ClosingCTASection from "@/components/magaf/ClosingCTASection";
import CustomCursor from "@/components/magaf/CustomCursor";



const Index = () => {
  return (
    
      <div className="min-h-screen bg-background cursor-none md:cursor-none">
        <CustomCursor />

        {/* HEADER */}
        
        <NavBar />

        {/* HERO */}
        <HeroSection />

        {/* PARA QUEM É */}
        <AudienceSection />

        {/* O QUE VAI CONSEGUIR CRIAR */}
        <WhatYouCanBuild />

        {/* MÓDULOS / O QUE VAI APRENDER */}
        <div id="modules">
          <ModulesSection />
        </div>

        {/* DIAS / LOCAL / SUPORTE */}
        <ScheduleSection />

        {/* PREÇOS */}
        <div id="pricing">
          <PricingSection />
        </div>

        {/* INSCRIÇÃO E PARTICIPAÇÃO */}
        <ParticipationSection />

        {/* MENTOR */}
        <MentorSection />

        {/* FAQ */}
        <div id="faq">
          <FAQSection />
        </div>

        <ClosingCTASection />

        {/* FOOTER */}
         <ContactSection />

        {/* WHATSAPP FLOAT */}
        <WhatsAppButton />
      </div>
    
  );
};

export default Index;