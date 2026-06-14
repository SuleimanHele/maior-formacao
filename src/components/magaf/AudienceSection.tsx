import {
  Laptop,
  BriefcaseBusiness,
  Rocket,
  Sparkles,
  GraduationCap,
} from "lucide-react";

const audienceItems = [
  {
    icon: Laptop,
    title: "Iniciantes em tecnologia",
    description:
      "Aprenda do zero mesmo sem experiência em programação.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Empreendedores",
    description:
      "Crie aplicações e páginas web para o teu negócio.",
  },
  {
    icon: Rocket,
    title: "Freelancers",
    description:
      "Ganhe dinheiro criando websites e apps para clientes.",
  },
  {
    icon: Sparkles,
    title: "Criadores digitais",
    description:
      "Use IA para acelerar criação de projectos modernos.",
  },
  {
    icon: GraduationCap,
    title: "Estudantes e profissionais",
    description:
      "Aprenda uma habilidade tecnológica altamente valorizada.",
  },
];

const AudienceSection = () => {
  return (
    <section
      id="target-audience"
      className="relative py-24 overflow-hidden bg-black"
    >
      {/* BACKGROUND GLOW - Vermelho */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10 px-4 md:px-6">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-600/30 bg-red-600/10 backdrop-blur-md mb-5">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-red-300">
              Formação Tecnológica com IA
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-white mb-5">
            Para quem está direcionada a{" "}
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              formação
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Uma formação criada para quem deseja entrar no mundo da
            tecnologia e criar aplicações modernas com IA.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
          {audienceItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-gradient-to-b
                  from-gray-900/80
                  to-gray-950/90
                  backdrop-blur-xl
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-red-500/40
                  hover:shadow-[0_0_40px_rgba(239,68,68,0.15)]
                "
              >
                {/* GLOW vermelho no hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-red-500/15 blur-3xl" />
                </div>

                {/* ICON */}
                <div
                  className="
                    relative
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-red-500/30
                    bg-gradient-to-br
                    from-red-500/20
                    to-red-600/10
                    text-red-400
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-3
                    group-hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]
                  "
                >
                  <Icon size={26} strokeWidth={2.2} />
                </div>

                {/* CONTENT */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>

                {/* BORDER EFFECT */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;