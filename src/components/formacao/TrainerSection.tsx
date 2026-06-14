import { useState } from "react";

import gasparsImg from "@/assets/gaspars-manuel.jpg";
import secondTrainerImg from "@/assets/suleimanhele.png";

import {
  Quote,
  X,
  GraduationCap,
  Brain,
  Target,
  Award,
  Facebook,
  Instagram,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

/**
 * =========================
 * TYPES
 * =========================
 */
type Trainer = {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  quote: string;
  bio: string;
  skills: string[];
  results: string[];
  portfolio: string;

  socials: {
    facebook: string;
    instagram: string;
    whatsapp: string;
  };
};

/**
 * =========================
 * DATA
 * =========================
 */
const trainers: Trainer[] = [
  {
    id: 1,
    name: "Gaspar Manuel CEO",
    role: "Especialista em Gestão, Marketing Digital e Tráfego Pago",
    image: gasparsImg,

    description:
      "Formador Digital e fundador da MAGAF – Centro de Formação Digital.Atua na capacitação de particulares e empresas, ajudando mensalmente mais de 100 pessoas a iniciarem ou desenvolverem a sua presença no digital. Com uma abordagem prática e orientada para resultados, combina experiência em execução, capacidade de ensino e visão estratégica de negócio, tornando-se uma referência em crescimento no ecossistema digital angolano.",

    quote:
      "Não basta aprender marketing digital. É preciso saber aplicar para gerar vendas.",

    bio: "Formador Digital e fundador da MAGAF – Centro de Formação Digital. Atua na capacitação de particulares e empresas, ajudando mensalmente mais de 100 pessoas a iniciarem ou desenvolverem a sua presença no digital.",

    skills: [
      "Meta Ads",
      "Marketing Digital",
      "Tráfego Pago",
      "Funis de Conversão",
      "Vendas Online",
      "Gestão Estratégica",
    ],

    results: [
      "Mais de 500 alunos formados",
      "Empresas ajudadas a aumentar vendas",
      "Estratégias digitais implementadas",
    ],

    portfolio: "http://gasparmanuel.magaf.org",

    socials: {
      facebook:
        "https://www.facebook.com/share/1BQSvfRw1n/?mibextid=wwXIfr",

      instagram: "https://instagram.com",

      whatsapp:
        "https://wa.me/244936351564?text=Olá! Quero falar com Gaspar Manuel.",
    },
  },

 {
  id: 2,
  name: "Suleiman Hele",
  role: "Engenheiro Informático especializado em Desenvolvimento de Websites profissionais e soluções web modernas",

  image: secondTrainerImg,

  description:
    "Engenheiro Informático formado em Cuba 🇨🇺, especializado em desenvolvimento de websites profissionais, Inteligência Artificial aplicada e automação de processos digitais. Atua na criação de soluções web modernas, escaláveis e orientadas para resultados reais no mercado digital.",

  quote:
    "Criar websites hoje não é apenas programar — é combinar tecnologia, design e inteligência artificial para gerar resultados reais.",

  bio:
    "Engenheiro Informático com foco em desenvolvimento web moderno, Inteligência Artificial e automação digital. Atua na criação de websites profissionais, landing pages de alta conversão e soluções digitais inteligentes. Experiência prática em transformar ideias em produtos digitais funcionais e escaláveis, utilizando tecnologias modernas como ferramentas de IA, no-code/low-code e boas práticas de UI/UX.",

  skills: [
    "Desenvolvimento Web Profissional",
    "Inteligência Artificial Aplicada",
    "UI/UX Design Moderno",
    "Automação de Processos",
    "No-Code / Low-Code",
    "Criação de Landing Pages de Alta Conversão",
    "Integração de Ferramentas Web",
  ],

  results: [
    "Desenvolvimento de websites modernos e responsivos",
    "Criação de soluções digitais automatizadas",
    "Projetos web com integração de Inteligência Artificial",
    "Formação prática de alunos em desenvolvimento web",
  ],

  portfolio: "https://suleimanhele.magaf.org/",

  socials: {
    facebook: "https://www.facebook.com/suleimanhele.suleiman/",
    instagram: "https://instagram.com",
    whatsapp:
      "https://wa.me/244930143035?text=Olá! Quero falar com Suleiman Hele.",
  },
},
];

/**
 * =========================
 * COMPONENT
 * =========================
 */
const TrainerSection = () => {
  const [selectedTrainer, setSelectedTrainer] =
    useState<Trainer | null>(null);

  return (
    <>
      <section
        id="formadores"
        className="relative overflow-hidden py-24 bg-muted"
      >
        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 blur-[140px] rounded-full" />

        <div className="container relative z-10">
          {/* HEADER */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <GraduationCap className="h-4 w-4" />
              Formadores MAGAF
            </div>

            <h2 className="font-heading text-4xl md:text-6xl font-black text-foreground mb-6">
              Aprenda com especialistas do mercado
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Formadores experientes focados em aplicação prática,
              resultados reais e crescimento profissional.
            </p>
          </div>

          {/* TRAINERS */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {trainers.map((trainer) => (
              <div
                key={trainer.id}
                onClick={() => setSelectedTrainer(trainer)}
                className="
                  group relative overflow-hidden
                  rounded-[28px]
                  border border-border/50
                  bg-background/90
                  backdrop-blur-xl
                  shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_20px_70px_rgba(255,0,0,0.12)]
                  transition-all duration-500
                  hover:-translate-y-2
                  cursor-pointer
                  p-6 md:p-7
                "
              >
                {/* HOVER EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

                {/* TOP */}
                <div className="relative z-10 flex items-start gap-4 mb-7">
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl shadow-primary/10">
                      <img
                        src={trainer.image}
                        alt={trainer.name}
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                      {trainer.id === 1 ? (
                        <Target className="h-4 w-4" />
                      ) : (
                        <Brain className="h-4 w-4" />
                      )}
                    </div>
                  </div>

                  <div className="flex-1 pt-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {trainer.name}
                    </h3>

                    <p className="text-primary text-sm font-medium">
                      {trainer.role}
                    </p>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="text-muted-foreground mb-7">
                  {trainer.description}
                </p>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-3 mb-7">
                  {trainer.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border border-primary/10
                        bg-primary/5
                        px-4 py-2
                        text-sm font-medium text-primary
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* QUOTE */}
                <div className="relative rounded-3xl border border-border/50 bg-secondary/60 p-5 mb-7">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />

                  <p className="italic text-secondary-foreground">
                    "{trainer.quote}"
                  </p>
                </div>

                {/* BUTTON */}
                <button className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 font-semibold text-primary-foreground">
                  Ver Perfil
                  <ArrowRight className="h-5 w-5" />
                </button>

                <div className="absolute inset-[1px] rounded-[27px] border border-white/5 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          MODAL
      ========================= */}
      {selectedTrainer && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/70
            backdrop-blur-md
            p-4
          "
          onClick={() => setSelectedTrainer(null)}
        >
          <div
            className="
              relative w-full max-w-5xl
              overflow-hidden
              rounded-[32px]
              border border-white/10
              bg-zinc-950
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelectedTrainer(null)}
              className="
                absolute top-5 right-5 z-20
                flex h-11 w-11 items-center justify-center
                rounded-full
                bg-white/10
                text-white
                backdrop-blur-md
                hover:bg-white/20
                transition
              "
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid lg:grid-cols-2">
              {/* IMAGE */}
              <div className="relative min-h-[350px]">
                <img
                  src={selectedTrainer.image}
                  alt={selectedTrainer.name}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h2 className="text-3xl font-black mb-2">
                    {selectedTrainer.name}
                  </h2>

                  <p className="text-zinc-300">
                    {selectedTrainer.role}
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="max-h-[90vh] overflow-y-auto p-7 text-white">
                {/* BIO */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="text-primary h-6 w-6" />

                    <h3 className="text-xl font-bold">
                      Biografia
                    </h3>
                  </div>

                  <p className="text-zinc-300 leading-relaxed">
                    {selectedTrainer.bio}
                  </p>
                </div>

                {/* SKILLS */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">
                    Competências
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {selectedTrainer.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-full
                          border border-primary/20
                          bg-primary/10
                          px-4 py-2
                          text-sm text-primary
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RESULTS */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">
                    Resultados
                  </h3>

                  <div className="space-y-3">
                    {selectedTrainer.results.map((result) => (
                      <div
                        key={result}
                        className="
                          rounded-xl
                          border border-white/10
                          bg-white/5
                          px-4 py-3
                          text-zinc-300
                        "
                      >
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* SOCIAL LINKS */}
                <div className="flex flex-wrap gap-4 pt-2">
                  {/* PORTFOLIO */}
                  <a
                    href={selectedTrainer.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      rounded-full
                      border border-primary/20
                      bg-primary/10
                      px-4 py-2
                      text-sm font-medium text-primary
                      transition-all duration-300
                      hover:bg-primary
                      hover:text-white
                      hover:scale-[1.03]
                    "
                  >
                    <ArrowRight className="h-4 w-4" />
                    Ver Portfólio
                  </a>

                  {/* FACEBOOK */}
                  <a
                    href={selectedTrainer.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex h-11 w-11 items-center justify-center
                      rounded-full
                      border border-white/10
                      bg-white/5
                      text-white/70
                      transition-all duration-300
                      hover:bg-primary
                      hover:text-white
                    "
                  >
                    <Facebook className="h-5 w-5" />
                  </a>

                  {/* INSTAGRAM */}
                  <a
                    href={selectedTrainer.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex h-11 w-11 items-center justify-center
                      rounded-full
                      border border-white/10
                      bg-white/5
                      text-white/70
                      transition-all duration-300
                      hover:bg-primary
                      hover:text-white
                    "
                  >
                    <Instagram className="h-5 w-5" />
                  </a>

                  {/* WHATSAPP */}
                  <a
                    href={selectedTrainer.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex h-11 w-11 items-center justify-center
                      rounded-full
                      border border-white/10
                      bg-white/5
                      text-white/70
                      transition-all duration-300
                      hover:bg-primary
                      hover:text-white
                    "
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrainerSection;