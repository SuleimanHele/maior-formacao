import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TrainerSection from "@/components/TrainerSection";
import CoursesSection from "@/components/CoursesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ResultsSection from "@/components/ResultsSection";
import ScheduleSection from "@/components/ScheduleSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <TrainerSection />
      <DifferentialsSection />
      <ResultsSection />
      <ScheduleSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
