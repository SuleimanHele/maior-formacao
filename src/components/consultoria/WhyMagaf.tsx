import { motion } from "framer-motion";
import { Target, TrendingUp, Users, BarChart } from "lucide-react";
import { Section, SectionHeading, fadeUp } from "./primitives";

const items = [
  { icon: Target, title: "Diagnóstico Estratégico", text: "Analisamos profundamente o seu negócio para identificar oportunidades e corrigir falhas." },
  { icon: TrendingUp, title: "Estratégia Personalizada", text: "Criamos um plano totalmente adaptado aos objetivos da sua empresa." },
  { icon: Users, title: "Acompanhamento", text: "Durante 30 dias acompanhamos todas as ações para garantir evolução." },
  { icon: BarChart, title: "Resultados", text: "Tomamos decisões baseadas em dados para maximizar o retorno do investimento." },
];

export function WhyMagaf() {
  return (
    <Section id="porque">
      <SectionHeading eyebrow="Diferencial" title={<>Porque contratar a <span className="text-gradient-red">MAGAF</span>?</>} subtitle="Um método comprovado que combina estratégia, execução e análise para acelerar o seu crescimento." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp} transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl bg-white p-7 shadow-xl overflow-hidden"
          >
            <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-[#E10600]/10 blur-3xl group-hover:bg-[#E10600]/25 transition-colors" />
            <div className="relative">
              <div className="inline-grid place-items-center h-12 w-12 rounded-2xl bg-[#E10600]/10 text-[#E10600]">
                <it.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-black text-neutral-900">{it.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{it.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
