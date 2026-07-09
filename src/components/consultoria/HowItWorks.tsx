import { motion } from "framer-motion";
import { Search, ClipboardList, Rocket, LineChart, SlidersHorizontal, Trophy } from "lucide-react";
import { Section, SectionHeading, fadeUp } from "./primitives";

const steps = [
  { icon: Search, label: "Diagnóstico" },
  { icon: ClipboardList, label: "Planeamento Estratégico" },
  { icon: Rocket, label: "Implementação" },
  { icon: LineChart, label: "Gestão de Tráfego" },
  { icon: SlidersHorizontal, label: "Otimização" },
  { icon: Trophy, label: "Resultados" },
];

export function HowItWorks() {
  return (
    <Section id="como-funciona">
      <SectionHeading eyebrow="Metodologia" title="Como Funciona" subtitle="Um processo simples, transparente e orientado a resultados." />
      <div className="relative">
        <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E10600]/60 to-transparent" aria-hidden />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp} transition={{ delay: i * 0.07 }}
              className="relative text-center"
            >
              <div className="mx-auto grid place-items-center h-16 w-16 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur relative">
                <div className="absolute -inset-1 rounded-2xl bg-[#E10600]/25 blur-xl opacity-70" aria-hidden />
                <s.icon size={24} className="relative text-white" />
              </div>
              <p className="mt-4 text-[11px] font-bold tracking-widest text-[#ff6b60] uppercase">Passo {i + 1}</p>
              <p className="mt-1 text-sm md:text-base font-semibold text-white">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
