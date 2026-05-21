import {
  MapPin,
  CalendarDays,
  Clock3,
  Headphones,
  AlertTriangle,
  MessageCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/244936351564?text=Olá! Quero garantir a minha vaga na formação da MAGAF.";

const WHATSAPP_BOOKING =
  "https://wa.me/244936351564?text=Olá! Quero fazer uma marcação para a formação da MAGAF.";

const cards = [
  {
    id: 1,
    title: "DIAS DE FORMAÇÃO",

    icon: CalendarDays,

    content: [
      {
        label: "Dias",
        value: "Sexta, Sábado e Domingo",
      },

      {
        label: "Horário",
        value: "09H às 15H",
      },
    ],
  },

  {
    id: 2,
    title: "LOCAL",

    icon: MapPin,

    content: [
      {
        label: "Local",
        value: "Kilamba — G27",
      },

      {
        label: "Apartamento",
        value: "Apartamento 02",
      },
    ],
  },

  {
    id: 3,
    title: "SUPORTE",

    icon: Headphones,

    content: [
      {
        label: "Dias",
        value: "Segunda até Quinta",
      },

      {
        label: "Horário",
        value: "10H às 15H",
      },
    ],
  },
];

const ScheduleSection = () => {
  return (
    <section
      id="turmas"
      className="relative overflow-hidden py-20 bg-muted"
    >

      {/* GLOW */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 blur-[120px] rounded-full" />

      <div className="container relative z-10">

        {/* HEADER */}

        <div className="text-center max-w-2xl mx-auto mb-14">

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary mb-5">

            <Sparkles className="h-4 w-4" />

            Informações da Formação
          </div>

          <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground mb-5">
            Dias de <span className="text-primary">Formação</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Organização profissional, suporte contínuo e acompanhamento prático.
          </p>
        </div>

        {/* SMALL CARDS */}

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className="group relative overflow-hidden rounded-[24px] border border-border/50 bg-card/90 backdrop-blur-xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(255,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
              >

                {/* HOVER */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

                {/* ICON */}

                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/10 text-primary mb-5">

                  <Icon className="h-5 w-5" />
                </div>

                {/* TITLE */}

                <h3 className="relative z-10 text-base font-black text-card-foreground mb-5 leading-tight">
                  {card.title}
                </h3>

                {/* CONTENT */}

                <div className="relative z-10 space-y-4">

                  {card.content.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-border/50 bg-background/70 p-3"
                    >

                      <div className="flex items-center gap-2 text-primary text-xs font-semibold mb-2">

                        <Clock3 className="h-3.5 w-3.5" />

                        {item.label}
                      </div>

                      <p className="text-sm font-semibold text-card-foreground leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* BORDER */}

                <div className="absolute inset-[1px] rounded-[23px] border border-white/5 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* ALERT */}

        <div className="text-center mb-8">

          <div className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-5 py-3 text-sm text-primary font-medium">

            <AlertTriangle className="h-4 w-4 shrink-0" />

            Vagas limitadas para melhor acompanhamento.
          </div>
        </div>

        {/* BUTTONS */}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02]"
          >

            <MessageCircle
              className="h-4 w-4"
              fill="currentColor"
            />

            Garantir vaga

            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>

          <a
            href={WHATSAPP_BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-primary/20 bg-background/80 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >

            <CalendarDays className="h-4 w-4" />

            Fazer marcação

            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;