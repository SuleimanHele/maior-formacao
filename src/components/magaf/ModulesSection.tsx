import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, BookOpen } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const modules = [
  {
    num: "01",
    title: "Entender a Internet de Forma Simples",
    level: "Iniciante",
    lessons: [
      "Entender o que é um website",
      "Aprender como a internet funciona de forma simples",
      "Conhecer as partes principais de um site",
      "Perceber como a Inteligência Artificial ajuda na criação de websites",
      "Desenvolver pensamento básico de construção web",
    ],
  },
  {
    num: "02",
    title: "Introdução à Inteligência Artificial e Criação de Prompts",
    level: "Iniciante",
    lessons: [
      "Entender o que é a IA",
      "Compreender o funcionamento básico da IA",
      "Criar prompts correctamente",
      "Diferenças entre IA generativa e pesquisa tradicional",
      "Boas práticas de prompts",
      "Erros comuns ao usar IA",
      "Usar IA para gerar ideias, textos e websites",
      "Aprender a conversar com IA de forma estratégica",
    ],
  },
  {
    num: "03",
    title: "Criação de Websites com Inteligência Artificial",
    level: "Intermédio",
    lessons: [
      "Entender como funcionam plataformas modernas de criação web com IA",
      "Aprender a criar conta e configurar o ambiente de trabalho",
      "Compreender limites e possibilidades das ferramentas",
      "Entender funcionamento de créditos e planos",
      "Aprender diferenças entre plano gratuito e pago",
      "Criar websites usando prompts simples",
      "Editar textos, imagens e layouts",
      "Entender a estrutura de páginas modernas",
      "Aprender a publicar websites online",
      "Criar o primeiro website funcional sem programação",
    ],
  },
  {
    num: "04",
    title: "Domínio, Hospedagem e Publicar o Site na Internet",
    level: "Avançado",
    lessons: [
      "Como colocar websites online",
      "O que é domínio e hospedagem",
      "Compreender a importância do domínio profissional para marcas e negócios",
      "Como publicar um site sem complicação técnica",
      "Como partilhar projectos profissionais",
      "Como deixar o website acessível para qualquer pessoa na internet",
    ],
  },
];

const levelColor: Record<string, string> = {
  Iniciante: "bg-gray-800 text-gray-300 border-gray-700",
  Intermédio: "bg-red-500/10 text-red-400 border-red-500/30",
  Avançado: "bg-red-500/15 text-red-300 border-red-500/40",
};

const ModuleItem = ({
  mod,
  index,
}: {
  mod: (typeof modules)[0];
  index: number;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.025, ease }}
      className={`
        overflow-hidden rounded-2xl border transition-all duration-300
        bg-gradient-to-br from-gray-900 to-gray-950
        ${open 
          ? "border-red-500/60 shadow-[0_0_30px_rgba(239,68,68,0.2)]" 
          : "border-red-500/30 hover:border-red-500/50"
        }
      `}
    >
      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <div className="flex min-w-0 items-center gap-3">
          <span className="badge-mono w-7 shrink-0 text-sm font-bold text-red-500">
            {mod.num}
          </span>

          <span className="truncate text-sm font-semibold tracking-tight text-white sm:text-base">
            {mod.title}
          </span>

          <span
            className={`hidden shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-medium sm:inline-flex ${
              levelColor[mod.level]
            }`}
          >
            {mod.level}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span className="hidden items-center gap-1 text-xs text-gray-400 sm:flex">
            <BookOpen className="h-3 w-3" />
            {mod.lessons.length}
          </span>

          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              open ? "rotate-180 text-red-500" : "text-gray-400"
            }`}
          />
        </div>
      </button>

      {/* BODY */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <div className="border-t border-red-500/30 bg-black/30 px-5 py-4">
              <ul className="space-y-2.5">
                {mod.lessons.map((lesson, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                    {lesson}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ModulesSection = () => {
  return (
    <section
      id="modules"
      className="relative overflow-hidden py-24 sm:py-32 bg-black"
    >
      {/* EFEITOS DE FUNDO VERMELHOS */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-red-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-red-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-red-600/5 blur-[100px]" />

      <div className="section-container relative">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-center text-3xl font-extrabold tracking-tighter text-white sm:text-5xl"
        >
          Programa da{" "}
          <span className="text-red-500">Formação</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="mx-auto mt-4 max-w-xl text-center text-gray-400"
        >
          Aprende desde os fundamentos da internet até à criação e publicação
          de websites profissionais com Inteligência Artificial.
        </motion.p>

        <div className="mx-auto mt-12 max-w-6xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {modules.map((mod, i) => (
              <ModuleItem key={mod.num} mod={mod} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;