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

const trainers = [
  {
    id: 1,
    name: "Gaspar Manuel",
    role: "Especialista em Gestão, Marketing Digital e Tráfego Pago",
    image: gasparsImg,

    description:
      "Ajuda empreendedores e negócios a aumentarem vendas usando estratégias digitais modernas, tráfego pago e posicionamento online.",

    quote:
      "Não basta aprender marketing digital. É preciso saber aplicar para gerar vendas.",

    bio: "Profissional com experiência em gestão estratégica, marketing digital, vendas online e tráfego pago. Especializado em ajudar negócios e empreendedores a crescer usando estratégias modernas e posicionamento digital.",

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
  },

  {
    id: 2,
    name: "Suleiman Hele",
    role: "Especialista em Inteligência Artificial e Desenvolvimento Digital",
    image: secondTrainerImg,

    description:
      "Especializado em ferramentas de IA, automação e criação de soluções digitais modernas para empresas e profissionais.",

    quote:
      "A Inteligência Artificial está a transformar os negócios digitais modernos.",

    bio: "Especialista em Inteligência Artificial, automação e desenvolvimento digital. Trabalha com criação de websites, aplicações modernas e soluções digitais inteligentes.",

    skills: [
      "Inteligência Artificial",
      "Automação",
      "Desenvolvimento Web",
      "UI/UX",
      "No-Code",
      "Ferramentas IA",
    ],

    results: [
      "Soluções digitais modernas",
      "Automação de processos",
      "Projectos criados com IA",
    ],
  },
];

const TrainerSection = () => {
  const [selectedTrainer, setSelectedTrainer] = useState<any>(null);

  return (
    <>
      <section className="relative overflow-hidden py-24 bg-muted">

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
                className="group relative overflow-hidden rounded-[28px] border border-border/50 bg-background/90 backdrop-blur-xl shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_70px_rgba(255,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 cursor-pointer p-6 md:p-7"
              >

                {/* HOVER EFFECT */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

                {/* TOP CONTENT */}

                <div className="relative z-10 flex items-start gap-4 mb-7">

                  {/* PROFILE IMAGE */}

                  <div className="relative shrink-0">

                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl shadow-primary/10">

                      <img
                        src={trainer.image}
                        alt={trainer.name}
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* ICON BADGE */}

                    <div className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">

                      {trainer.id === 1 ? (
                        <Target className="h-4 w-4" />
                      ) : (
                        <Brain className="h-4 w-4" />
                      )}
                    </div>
                  </div>

                  {/* INFO */}

                  <div className="flex-1 pt-1">

                    <h3 className="text-2xl font-bold text-foreground mb-2 leading-tight">
                      {trainer.name}
                    </h3>

                    <p className="text-primary text-sm font-medium leading-relaxed">
                      {trainer.role}
                    </p>
                  </div>
                </div>

                {/* DESCRIPTION */}

                <p className="relative z-10 text-muted-foreground leading-relaxed mb-7">
                  {trainer.description}
                </p>

                {/* SKILLS */}

                <div className="relative z-10 flex flex-wrap gap-3 mb-7">

                  {trainer.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* QUOTE */}

                <div className="relative rounded-3xl border border-border/50 bg-secondary/60 p-5 overflow-hidden mb-7">

                  <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />

                  <p className="relative z-10 italic text-secondary-foreground leading-relaxed text-sm md:text-base">
                    "{trainer.quote}"
                  </p>
                </div>

                {/* BUTTON */}

                <button className="relative z-10 inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02]">
                  Ver Perfil
                  <ArrowRight className="h-5 w-5" />
                </button>

                {/* PREMIUM BORDER */}

                <div className="absolute inset-[1px] rounded-[27px] border border-white/5 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          MODAL
      ========================================= */}

      {selectedTrainer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">

          <div className="relative w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950 shadow-2xl animate-in fade-in zoom-in duration-300">

            {/* CLOSE */}

            <button
              onClick={() => setSelectedTrainer(null)}
              className="absolute top-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition"
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

                <div className="absolute bottom-8 left-8 right-8">

                  <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                    {selectedTrainer.name}
                  </h2>

                  <p className="text-zinc-300 text-base md:text-lg">
                    {selectedTrainer.role}
                  </p>
                </div>
              </div>

              {/* CONTENT */}

              <div className="max-h-[90vh] overflow-y-auto p-7 md:p-9 text-white">

                {/* BIO */}

                <div className="mb-9">

                  <div className="flex items-center gap-3 mb-5">

                    <Award className="text-primary h-6 w-6" />

                    <h3 className="text-2xl font-bold">
                      Biografia Profissional
                    </h3>
                  </div>

                  <p className="text-zinc-300 leading-relaxed">
                    {selectedTrainer.bio}
                  </p>
                </div>

                {/* SKILLS */}

                <div className="mb-9">

                  <h3 className="text-2xl font-bold mb-5">
                    Competências
                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {selectedTrainer.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RESULTS */}

                <div className="mb-9">

                  <h3 className="text-2xl font-bold mb-5">
                    Resultados Alcançados
                  </h3>

                  <div className="space-y-3">

                    {selectedTrainer.results.map((result: string) => (
                      <div
                        key={result}
                        className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-zinc-300"
                      >
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* SOCIALS */}

                <div className="flex flex-wrap gap-4 pt-2">

                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-primary transition"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>

                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-primary transition"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center gap-3 rounded-2xl bg-green-500 px-5 py-3 font-semibold text-white hover:bg-green-600 transition"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
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