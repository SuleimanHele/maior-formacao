import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const faqItems = [
  {
    q: "Quais são os métodos de pagamento?",
    a: "Aceitamos transferência bancária e pagamento móvel via WhatsApp.",
  },
  {
    q: "A formação é presencial ou online?",
    a: "A formação é totalmente presencial com acompanhamento prático.",
  },
  {
    q: "Preciso de experiência prévia?",
    a: "Não. A formação começa do zero até níveis avançados.",
  },
  {
    q: "Recebo certificado?",
    a: "Sim, todos os participantes recebem certificado de participação.",
  },
  {
    q: "Quanto tempo dura a formação?",
    a: "A formação é intensiva com duração definida por módulos práticos.",
  },
  {
    q: "Há suporte depois da formação?",
    a: "Sim, tens 1 mês de acompanhamento pós-formação.",
  },
  {
    q: "Preciso de computador?",
    a: "Recomendado, mas também podes acompanhar com smartphone.",
  },
  {
    q: "Como faço a inscrição?",
    a: "Faz o pagamento e envia o comprovativo via WhatsApp.",
  },
];

const FAQItem = ({
  q,
  a,
  index,
}: {
  q: string;
  a: string;
  index: number;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.04, ease }}
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        open 
          ? "border-red-500/50 bg-red-500/5" 
          : "border-red-500/20 bg-gray-900/50 hover:border-red-500/30"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-sm font-medium text-white sm:text-base">
          {q}
        </span>

        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
            open
              ? "rotate-45 border-red-500 bg-red-500 text-white"
              : "border-red-500/30 bg-red-500/10 text-red-400"
          }`}
        >
          <Plus className="h-4 w-4" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-gray-400">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQSection() {
  return (
    <section id="faq" className="relative overflow-hidden py-12 sm:py-16 bg-black">
      {/* Efeito de fundo vermelho */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-72 w-72 rounded-full bg-red-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-red-500/10 blur-[100px]" />

      <div className="section-container relative">
        <h2 className="text-center text-3xl font-extrabold tracking-tighter text-white sm:text-5xl">
          Perguntas <span className="text-red-500">Frequentes</span>
        </h2>

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {faqItems.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}