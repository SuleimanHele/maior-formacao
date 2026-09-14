import Navbar from "@/components/cursoCompleto/Navbar";
import Hero from "@/components/cursoCompleto/Hero";
import Footer from "@/components/cursoCompleto/Footer";
import FloatingWhatsApp from "@/components/cursoCompleto/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}