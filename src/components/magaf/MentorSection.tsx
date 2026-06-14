import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Settings,
  Terminal,
  Cpu,
  GitBranch,
  Brain,
  Megaphone,
  Rocket,
  Globe,
  Sparkles,
  ExternalLink,
} from "lucide-react";

import suleimanPhoto from "@/assets/curso-ia/suleimanhele.png";
import gasparPhoto from "@/assets/curso-ia/gaspars-manuel.jpg";

const ease = [0.2, 0, 0, 1] as const;

const suleimanIcons = [
  { Icon: Code2, top: "8%", left: "5%", delay: 0, size: 22 },
  { Icon: Server, top: "70%", left: "2%", delay: 0.8, size: 20 },
  { Icon: Settings, top: "15%", right: "8%", delay: 0.3, size: 18 },
  { Icon: Terminal, bottom: "12%", right: "5%", delay: 1.1, size: 20 },
  { Icon: Cpu, top: "45%", left: "0%", delay: 0.6, size: 18 },
  { Icon: GitBranch, top: "55%", right: "2%", delay: 1.4, size: 18 },
];

const gasparIcons = [
  { Icon: Megaphone, top: "10%", left: "5%", delay: 0, size: 22 },
  { Icon: Brain, top: "70%", left: "2%", delay: 0.8, size: 20 },
  { Icon: Rocket, top: "15%", right: "8%", delay: 0.3, size: 20 },
  { Icon: Globe, bottom: "12%", right: "5%", delay: 1.1, size: 20 },
  { Icon: Sparkles, top: "50%", right: "0%", delay: 0.6, size: 18 },
];

const mentors = [
  {
    name: "Gaspar Manuel C.O",
    role: "Formador Digital • Especialista em Websites e IA aplicada",
    image: gasparPhoto,
    icons: gasparIcons,
    accent: "red",
    description:
      "Gaspar Manuel C.O é Formador Digital especializado em criação de websites, marketing digital e Inteligência Artificial. Atua ajudando empreendedores e empresas a construírem presença digital profissional e a gerar resultados reais online. Com experiência em websites, landing pages e estratégias digitais, já formou e apoiou vários alunos e negócios na criação de soluções digitais e novas fontes de rendimento na internet.",
    tags: [
      "Websites",
      "Landing Pages",
      "Marketing Digital",
      "IA aplicada",
    ],
    stats: [
      {
        title: "100+",
        subtitle: "Alunos formados",
      },
      {
        title: "Web & IA",
        subtitle: "Criação de websites",
      },
      {
        title: "Estratégias",
        subtitle: "Negócios digitais",
      },
    ],
    button: "Falar com o Mentor",
    link: "https://wa.me/244936351564?text=Olá! Quero falar com Gaspar Manuel.",
  },
  {
    name: "Suleiman Hele",
    role: "Full Stack Developer • DevOps • IA & Automação",
    image: suleimanPhoto,
    icons: suleimanIcons,
    accent: "gold",
    description:
      "Engenheiro Informático com foco em desenvolvimento web moderno, Inteligência Artificial e automação digital. Atua na criação de websites profissionais, landing pages de alta conversão e soluções digitais inteligentes. Experiência prática em transformar ideias em produtos digitais funcionais e escaláveis, utilizando tecnologias modernas como ferramentas de IA, no-code/low-code e boas práticas de UI/UX.",
    tags: [
      "Full Stack",
      "DevOps",
      "Docker",
      "IA & Automação",
    ],
    stats: [
      {
        title: "Web Apps",
        subtitle: "Desenvolvimento moderno",
      },
      {
        title: "DevOps",
        subtitle: "Deploy & Infraestrutura",
      },
      {
        title: "IA",
        subtitle: "Automação inteligente",
      },
    ],
    button: "Conhecer Portfólio",
    link: "https://suleimanhele.magaf.org/",
  },
];

const MentorSection = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-black">
      {/* Background Vermelho */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/10 blur-[100px]" />

      <div className="section-container relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-medium tracking-wide text-red-400">
            Mentores da Formação
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tighter text-white sm:text-5xl">
            Aprenda com profissionais do mercado
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Formação desenvolvida por especialistas em tecnologia,
            Inteligência Artificial, tráfego pago e negócios digitais.
          </p>
        </motion.div>

        {/* Mentors */}
        <div className="grid gap-8 lg:grid-cols-2">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease,
              }}
              className="relative"
            >
              <div className="relative h-full overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-gray-900 to-gray-950 p-6 sm:p-8">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-60" />

                {/* Floating Icons */}
                {mentor.icons.map(
                  (
                    { Icon, top, left, right, bottom, delay, size },
                    i
                  ) => (
                    <motion.div
                      key={i}
                      className="absolute text-gray-600/30"
                      style={{ top, left, right, bottom }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + delay,
                      }}
                    >
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          duration: 3 + i * 0.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Icon size={size} strokeWidth={1.5} />
                      </motion.div>
                    </motion.div>
                  )
                )}

                {/* Avatar */}
                <div className="relative flex justify-center">
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-red-500/20 via-transparent to-red-500/20 blur-2xl opacity-60" />

                  <div className="relative h-40 w-40 overflow-hidden rounded-full border border-red-500/30 bg-gradient-to-br from-gray-800 to-gray-900">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="absolute inset-0 h-full w-full object-cover object-top"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                  <div className="absolute -inset-1 rounded-full border border-red-500/20" />
                </div>

                {/* Content */}
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {mentor.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-red-400">
                    {mentor.role}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap justify-center gap-2">
                    {mentor.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/5 px-3 py-1 text-xs font-medium text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-sm leading-relaxed text-gray-300 sm:text-base">
                    {mentor.description}
                  </p>

                  {/* Stats */}
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {mentor.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-red-500/20 bg-red-500/5 p-4"
                      >
                        <h4 className="text-sm font-bold text-white sm:text-base">
                          {stat.title}
                        </h4>

                        <p className="mt-1 text-[11px] text-gray-400">
                          {stat.subtitle}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="mt-6">
                    <a
                      href={mentor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        border
                        border-red-500/30
                        bg-red-500/10
                        px-5
                        py-2.5
                        text-sm
                        font-medium
                        text-white
                        transition-all
                        hover:border-red-500/60
                        hover:bg-red-500/20
                        hover:scale-105
                      "
                    >
                      <ExternalLink className="h-4 w-4 text-red-400" />
                      {mentor.button}
                    </a>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-gray-500">
                    <span className="h-px w-8 bg-gradient-to-r from-transparent to-gray-600" />
                    <span>Formação prática focada no mercado</span>
                    <span className="h-px w-8 bg-gradient-to-l from-transparent to-gray-600" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorSection;