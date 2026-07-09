import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "./constants";
import { Section, SectionHeading, fadeUp } from "./primitives";

const includes = ["Diagnóstico", "Estratégia", "Reuniões", "Relatórios", "Suporte", "Otimização"];

export function Investment() {
  return (
    <Section id="investimento">
      <SectionHeading eyebrow="Investimento" title="Consultoria" subtitle="Um investimento que se paga com estratégia, otimização e crescimento." />

      <motion.div
        initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="relative max-w-3xl mx-auto"
      >
        <div className="absolute -inset-6 bg-[#E10600]/25 blur-3xl rounded-[3rem]" aria-hidden />
        <div className="relative rounded-3xl bg-white p-8 md:p-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 h-32 w-32 bg-[#E10600]/10 rounded-full blur-3xl" />
          <div className="relative">
            <div className="grid sm:grid-cols-2 gap-6 pb-6 border-b border-neutral-200">
              <div>
                <p className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Marcação</p>
                <p className="mt-2 text-3xl md:text-4xl font-black text-neutral-900">10.000 <span className="text-lg text-neutral-500">Kz</span></p>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest text-[#E10600] uppercase">Consultoria e Acompanhamento</p>
                <p className="mt-2 text-3xl md:text-3xl font-black text-neutral-900">Apartir de 100.000 <span className="text-lg text-neutral-500">Kz</span></p>
                <p className="text-sm text-neutral-500 mt-1">Duração: 30 dias</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-3">Inclui</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {includes.map(i => (
                  <div key={i} className="flex items-center gap-2 text-sm text-neutral-800">
                    <Check size={14} className="text-[#E10600] shrink-0" /> {i}
                  </div>
                ))}
              </div>
            </div>

            <a href={CHECKOUT_URL} target="_blank" rel="noopener"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E10600] px-6 py-4 text-sm font-bold text-white shadow-[0_10px_30px_-10px_rgba(225,6,0,0.6)] hover:bg-[#ff1a10] transition-colors">
              Agendar Consultoria <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
