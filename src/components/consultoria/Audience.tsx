import { motion } from "framer-motion";
import { Building2, Rocket, Sparkles, Store, Briefcase, HandCoins } from "lucide-react";
import { Section, SectionHeading, fadeUp } from "./primitives";

const items = [
  { icon: Building2, title: "Empresas" },
  { icon: Rocket, title: "Empreendedores" },
  { icon: Sparkles, title: "Startups" },
  { icon: Store, title: "Lojas" },
  { icon: Briefcase, title: "Prestadores de Serviços" },
  { icon: HandCoins, title: "Equipas Comerciais" },
];

export function Audience() {
  return (
    <Section id="publico">
      <SectionHeading eyebrow="Público-Alvo" title="Para quem é" subtitle="A consultoria é ideal para quem quer crescer com estratégia e método." />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp} transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center hover:border-[#E10600]/40 hover:bg-white/[0.05] transition-all"
          >
            <div className="mx-auto grid place-items-center h-12 w-12 rounded-xl bg-[#E10600]/15 border border-[#E10600]/30 text-[#ff6b60] mb-3">
              <it.icon size={22} />
            </div>
            <p className="text-white font-semibold text-sm md:text-base">{it.title}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
