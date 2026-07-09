import { motion } from "framer-motion";
import { UserPlus, ShoppingCart, DollarSign, Sliders, Database, Sprout } from "lucide-react";
import { Section, SectionHeading, fadeUp } from "./primitives";

const items = [
  { icon: UserPlus, title: "Mais Clientes" },
  { icon: ShoppingCart, title: "Mais Vendas" },
  { icon: DollarSign, title: "Maior Retorno do Investimento" },
  { icon: Sliders, title: "Campanhas Otimizadas" },
  { icon: Database, title: "Marketing Baseado em Dados" },
  { icon: Sprout, title: "Crescimento Sustentável" },
];

export function Benefits() {
  return (
    <Section id="beneficios">
      <SectionHeading eyebrow="Benefícios" title="O que você ganha" subtitle="Resultados concretos ao longo dos 30 dias de acompanhamento." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp} transition={{ delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 overflow-hidden hover:border-[#E10600]/40 transition-colors"
          >
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#E10600]/10 blur-3xl group-hover:bg-[#E10600]/30 transition-colors" />
            <div className="relative flex items-center gap-4">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-[#E10600]/15 border border-[#E10600]/30 text-[#ff6b60]">
                <it.icon size={22} />
              </div>
              <h3 className="text-white font-bold">{it.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
