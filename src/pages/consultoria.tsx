import { createFileRoute } from "@tanstack/react-router";
import  Navbar  from "@/components/consultoria/Navbar";
import { Hero } from "@/components/consultoria/Hero";
import { WhyMagaf } from "@/components/consultoria/WhyMagaf";
import { Services } from "@/components/consultoria/Services";
import { HowItWorks } from "@/components/consultoria/HowItWorks";
import { Benefits } from "@/components/consultoria/Benefits";
import { Investment } from "@/components/consultoria/Investment";
import { Audience } from "@/components/consultoria/Audience";
import { Results } from "@/components/consultoria/Results";
import { FAQ } from "@/components/consultoria/FAQ";
import { FinalCTA } from "@/components/consultoria/FinalCTA";
import WhatsAppButton from "@/components/formacao/WhatsAppButton";
import ContactSection from "@/components/formacao/ContactSection";
import { Footer } from "@/components/consultoria/Footer";



function Index() {
  return (
    <div className="min-h-screen bg-[#05070F] text-white antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WhyMagaf />
        <Services />
        <HowItWorks />
        <Benefits />
        <Investment />
        <Audience />
        <Results />
        <FAQ />
        <FinalCTA />
      </main>
      <ContactSection />
      <WhatsAppButton />
    </div>
  );
}
export default Index;