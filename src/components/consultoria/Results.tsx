import { motion } from "framer-motion";
import { Section, fadeUp } from "./primitives";

const stats = [
  { value: "30 Dias", label: "de acompanhamento" },
  { value: "100%", label: "Estratégia Personalizada" },
  { value: "Suporte", label: "Presencial" },
  { value: "Marketing", label: "Baseado em Dados" },
];

export function Results() {
  return (
    <Section id="resultados">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp} transition={{ delay: i * 0.07 }}
            className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur p-6 md:p-8 overflow-hidden hover:border-[#E10600]/40 transition-colors"
          >
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#E10600]/15 blur-3xl" />
            <p className="relative text-2xl md:text-4xl font-black text-gradient-red">{s.value}</p>
            <p className="relative mt-2 text-white/70 text-sm md:text-base">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
