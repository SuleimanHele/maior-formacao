import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Section, SectionHeading } from "./primitives";

const faqs = [
  { q: "Como funciona a consultoria?", a: "Iniciamos com um diagnóstico do seu negócio, seguido de um planeamento estratégico personalizado. Depois implementamos, gerimos o tráfego pago, otimizamos as campanhas e acompanhamos os resultados durante 30 dias." },
  { q: "Quanto tempo dura?", a: "A consultoria e o acompanhamento têm a duração de 30 dias corridos, com reuniões estratégicas e suporte contínuo." },
  { q: "É Presencial?", a: "Sim. Todo o acompanhamento, reuniões estratégicas e suporte são realizados presencialmente, com total flexibilidade." },
  { q: "Quem gere as campanhas?", a: "A equipa MAGAF acompanha e orienta a gestão das campanhas de tráfego pago, garantindo otimização contínua e melhores resultados." },
  { q: "Tenho suporte?", a: "Sim. Terá suporte contínuo via WhatsApp durante todo o período da consultoria." },
  { q: "Posso renovar o acompanhamento?", a: "Sim. Após os 30 dias iniciais é possível renovar o acompanhamento para manter a evolução e a estratégia em execução." },
  { q: "Recebo relatórios?", a: "Sim. Enviamos relatórios estratégicos com dados, resultados e próximos passos ao longo da consultoria." },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <Section id="faq">
      <SectionHeading eyebrow="FAQ" title="Perguntas Frequentes" subtitle="As dúvidas mais comuns sobre a consultoria." />
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={f.q} className={`rounded-2xl border transition-colors ${isOpen ? "border-[#E10600]/50 bg-white/[0.04]" : "border-white/10 bg-white/[0.02]"}`}>
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-4 md:py-5"
              >
                <span className="font-semibold text-white text-sm md:text-base">{f.q}</span>
                <span className={`grid place-items-center h-8 w-8 rounded-full shrink-0 transition-colors ${isOpen ? "bg-[#E10600] text-white" : "bg-white/10 text-white/70"}`}>
                  {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 md:px-6 pb-5 text-white/70 text-sm md:text-base leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
