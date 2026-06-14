import NavBar from "@/components/trafego/NavBar";
import Hero from "@/components/trafego/Hero";
import Audience from "@/components/trafego/Audience";
import Included from "@/components/trafego/Included";
import Modules from "@/components/trafego/Modules";
import EventDetails from "@/components/trafego/EventDetails";
import Registration from "@/components/trafego/Registration";
import Pricing from "@/components/trafego/Pricing";
import Mentor from "@/components/trafego/Mentor";
import Faq from "@/components/trafego/Faq";
import FinalCta from "@/components/trafego/FinalCta";
import ContactSection from "@/components/formacao/ContactSection";
import WhatsAppButton from "@/components/formacao/WhatsAppButton";

export default function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <NavBar />
      <Hero />
      <Audience />
      <Included />
      <Modules />
      <EventDetails />
      <Registration />
      <Pricing />
      <Mentor />
      <Faq />
      <FinalCta />
      <ContactSection />
      <WhatsAppButton />
    </main>
  );
}
