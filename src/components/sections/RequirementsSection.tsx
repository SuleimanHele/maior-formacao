import { Laptop, Wifi, Keyboard, Heart, MapPin, Star } from "lucide-react";
import { InfoCard } from "@/components/sections/InfoCard";

const items = [
  { icon: Laptop, title: "Computador ou Smartphone", description: "Podes participar utilizando qualquer dispositivo." },
  { icon: Heart, title: "Vontade de Aprender", description: "A formação é prática e orientada para resultados." },
  { icon: MapPin, title: "Participar na Formação Presencial", description: "Aprendizagem acompanhada pelo formador." },
  { icon: Star, title: "Não Precisas Saber Programar", description: "Todo o conteúdo será ensinado do zero." },
];

export function RequirementsSection() {
  return (
    <section id="detalhes" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-gold">Comece Agora</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl text-black">
            Tudo o Que Precisas Para <span className="text-primary">Começar</span>
          </h2>
          <div className="mt-3 mx-auto h-1 w-16 bg-primary rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <InfoCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}