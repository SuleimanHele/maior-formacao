import Navbar from "@/components/formacao/Navbar";
import HeroSection from "@/components/formacao/HeroSection";
import AboutSection from "@/components/formacao/AboutSection";
import TrainerSection from "@/components/formacao/TrainerSection";
import CoursesSection from "@/components/formacao/CoursesSection";
import RecordedCoursesSection from "@/components/formacao/RecordedCoursesSection";
import DifferentialsSection from "@/components/formacao/DifferentialsSection";
import ResultsSection from "@/components/formacao/ResultsSection";
import ScheduleSection from "@/components/formacao/ScheduleSection";
import FAQSection from "@/components/formacao/FAQSection";
import CTASection from "@/components/formacao/CTASection";
import ContactSection from "@/components/formacao/ContactSection";
import WhatsAppButton from "@/components/formacao/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <RecordedCoursesSection />
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
