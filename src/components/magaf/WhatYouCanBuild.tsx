import { motion } from "framer-motion";

const ease = [0.2, 0, 0, 1] as const;

const items = [
  "Landing Pages Profissionais",
  "Lojas Online com Carrinho",
  "Dashboards Interativos",
  "Sistemas de Gestão",
  "Formulários Inteligentes",
  "Catálogos Digitais",
  "Chatbots com IA",
  "Portfólios Criativos",
  "Blogs Dinâmicos",
  "Sistemas de Reservas",
  "Aplicações Web",
  "Ferramentas de Automação",
];

const WhatYouCanBuild = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Efeitos de fundo vermelhos */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="section-container text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-3xl font-bold tracking-tighter text-white sm:text-4xl"
        >
          O que podes construir com <span className="text-red-500">IA</span>
        </motion.h2>
        
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {items.map((item, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04, ease }}
              whileHover={{ 
                scale: 1.08, 
                borderColor: "rgba(239, 68, 68, 0.4)", 
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                transition: { duration: 0.2 } 
              }}
              className="rounded-full border border-red-500/20 bg-gray-900/50 px-4 py-2 text-sm text-gray-300 magnetic-hover cursor-default transition-all duration-300 hover:text-white hover:border-red-500/40"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanBuild;