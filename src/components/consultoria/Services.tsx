import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "./constants";
import { Section, SectionHeading, fadeUp } from "./primitives";

const included = [
  "Análise completa do negócio",
  "Estratégia de marketing personalizada",
  "Acompanhamento da gestão de tráfego pago",
  "Otimização de campanhas",
  "Geração de clientes",
  "Estratégias de vendas",
  "Relatórios",
  "Suporte via WhatsApp",
  "Reuniões estratégicas",
];

export function Services() {
  const [open, setOpen] = useState(false);
  return (
    <Section id="servicos">
      <SectionHeading eyebrow="Serviços Incluídos" title="O acompanhamento inclui" subtitle="Tudo que precisa para escalar o marketing da sua empresa com previsibilidade." />

      <motion.div
        initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="relative max-w-4xl mx-auto"
      >
        <div className="absolute -inset-4 bg-[#E10600]/20 blur-3xl rounded-[3rem]" aria-hidden />
        <div className="relative rounded-3xl bg-white p-8 md:p-10 shadow-2xl">
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {included.map(item => (
              <div key={item} className="flex items-start gap-3">
                <span className="grid place-items-center h-6 w-6 rounded-full bg-[#E10600]/10 mt-0.5 shrink-0">
                  <Check size={13} className="text-[#E10600]" />
                </span>
                <span className="text-neutral-800 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between border-t border-neutral-200 pt-6">
            <p className="text-sm text-neutral-500">Consultoria completa de 30 dias.</p>
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E10600] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_30px_-10px_rgba(225,6,0,0.6)] hover:bg-[#ff1a10] transition-colors"
            >
              Ver detalhes <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && <DetailsModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </Section>
  );
}

function DetailsModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm p-4 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-7 md:p-10 shadow-2xl"
      >
        <button onClick={onClose} aria-label="Fechar" className="absolute top-4 right-4 h-9 w-9 rounded-full grid place-items-center text-neutral-500 hover:bg-neutral-100">
          <X size={18} />
        </button>

        <span className="inline-flex text-[11px] font-bold tracking-[0.18em] text-[#E10600] uppercase">Consultoria MAGAF</span>
        <h3 className="mt-2 text-2xl md:text-3xl font-black text-neutral-900">Consultoria e Acompanhamento de Marketing e Gestão de Tráfego</h3>

        <p className="mt-4 text-neutral-600 leading-relaxed">
          A nossa consultoria foi criada para empresas e empreendedores que pretendem crescer de forma estratégica, aumentar as vendas e obter melhores resultados no digital.
        </p>
        <p className="mt-3 text-neutral-600 leading-relaxed">
          Durante um mês acompanhamos o seu negócio de perto, analisamos as campanhas, definimos estratégias, corrigimos falhas e orientamos todas as ações de marketing para maximizar o retorno do investimento.
        </p>

        <Block title="O que está incluído" items={[
          "Análise completa do negócio",
          "Estratégia de marketing personalizada",
          "Acompanhamento da gestão de tráfego pago",
          "Otimização de campanhas",
          "Geração de clientes",
          "Estratégias de vendas",
          "Suporte contínuo",
        ]} />

        <Block title="Benefícios" items={[
          "Crescimento estratégico",
          "Mais vendas",
          "Melhor ROI",
          "Correção de falhas",
          "Decisões baseadas em dados",
        ]} />

        <Block title="Público" items={[
          "Empresas", "Empreendedores", "Gestores de Marketing", "Startups", "Pequenos negócios", "Qualquer pessoa que queira crescer no digital.",
        ]} />

        <div className="mt-6 rounded-2xl bg-neutral-50 p-5 border border-neutral-200">
          <p className="text-xs font-bold tracking-widest text-[#E10600] uppercase">Investimento</p>
          <div className="mt-2 grid sm:grid-cols-3 gap-3 text-sm">
            <div><p className="text-neutral-500">Marcação</p><p className="font-black text-neutral-900">10.000 Kz</p></div>
            <div><p className="text-neutral-500">Consultoria</p><p className="font-black text-neutral-900">Apartir de 100.000 Kz</p></div>
            <div><p className="text-neutral-500">Duração</p><p className="font-black text-neutral-900">30 dias</p></div>
          </div>
        </div>

        <a href={CHECKOUT_URL} target="_blank" rel="noopener"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E10600] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#ff1a10] transition-colors">
          Agendar Consultoria <ArrowRight size={16} />
        </a>
      </motion.div>
    </motion.div>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-6">
      <h4 className="text-xs font-bold tracking-widest text-[#E10600] uppercase">{title}</h4>
      <ul className="mt-2 space-y-1.5">
        {items.map(i => (
          <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
            <Check size={14} className="mt-1 text-[#E10600] shrink-0" /> {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
