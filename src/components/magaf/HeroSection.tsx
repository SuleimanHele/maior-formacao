import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ParticleField from "./ParticleField";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);

    if (element) {
      const headerHeight = 80;

      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={ref}
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        bg-background
        px-4
        sm:px-6
        pt-28
        pb-20
      "
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-[#050505]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-[#080808] to-black" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-15" />

      {/* GLOWS */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-primary/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <ParticleField />

      {/* CONTENT */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-5xl"
      >
        <div className="flex flex-col items-center text-center">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              mb-8
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-primary/30
              bg-primary/10
              px-5
              py-2
              backdrop-blur-md
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>

            <span className="badge-mono text-primary">
              FORMAÇÃO COMPLETA
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.2, 0, 0, 1] }}
            className="
              text-center
              text-5xl
              sm:text-6xl
              lg:text-7xl
              font-extrabold
              tracking-tighter
              leading-[0.95]
              text-white
            "
          >
            Criação de
            <span className="block">Páginas Web</span>
            <span className="text-primary">com IA</span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="
              mt-7
              max-w-2xl
              text-center
              text-base
              sm:text-lg
              leading-relaxed
              text-white/80
            "
          >
            Aprende a criar websites, landing pages e aplicações modernas
            com Inteligência Artificial de forma rápida, profissional e sem
            precisar programar.
          </motion.p>

          {/* FEATURES */}
          <div className="mt-8 space-y-3">
            {[
              "Criação de websites modernos",
              "Inteligência Artificial aplicada ao design",
              "Desenvolvimento rápido e profissional",
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm text-white/90">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="
              mt-10
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-4
            "
          >
            <button
              onClick={() => scrollToSection("#pricing")}
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-primary
                px-8
                py-3
                text-base
                font-bold
                text-white
                shadow-lg shadow-primary/30
                transition-all
                hover:scale-[1.02]
                hover:bg-primary/90
              "
            >
              Garantir Minha Vaga
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollToSection("#modules")}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-white/[0.03]
                px-8
                py-3
                text-base
                font-bold
                text-white
                backdrop-blur-md
                transition-all
                hover:scale-[1.02]
                hover:border-primary/40
                hover:bg-primary/10
              "
            >
              Ver Conteúdo
            </button>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;