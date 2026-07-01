import {
  MapPin,
  CalendarDays,
  Clock3,
  Headphones,
  AlertTriangle,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Monitor,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

const CHECKOUT_LINK =
  "https://paygooo.goootrafego.com/checkout/8b7954a6-0f67-4977-bdaf-74fe343568c6";

const WHATSAPP_BOOKING =
  "https://wa.me/244936351564?text=Olá! Quero fazer uma marcação para a formação da MAGAF.";

type ScheduleCardItem = {
  label: string;
  value: string;
  icon?: LucideIcon;
};

type ScheduleCard = {
  id: number;
  title: string;
  icon: LucideIcon;
  items: ScheduleCardItem[];
};

const cards: ScheduleCard[] = [
  {
    id: 1,
    title: "Dias de Formação",
    icon: CalendarDays,
    items: [
      {
        label: "Dias",
        value: "Sexta, Sábado e Domingo",
        icon: CalendarDays,
      },
      {
        label: "Horário",
        value: "10H às 15H",
        icon: Clock3,
      },
    ],
  },

  {
    id: 2,
    title: "Local da Formação",
    icon: MapPin,
    items: [
      {
        label: "Local",
        value: "Luanda-Angola\nKilamba — G27",
        icon: MapPin,
      },
      {
        label: "Sala",
        value: "Apartamento 02",
        icon: MapPin,
      },
    ],
  },

 {
  id: 3,
  title: "Suporte aos Alunos",
  icon: Headphones,
  items: [
    {
      label: "Dias",
      value: "Segunda até Quinta",
      icon: Headphones,
    },
    {
      label: "Horário",
      value: "10H às 15H",
      icon: Clock3,
    },
    {
      label: "Modalidade",
      value: "Presencial e Online",
      icon: Monitor, // ou Monitor / Laptop dependendo do teu design system
    },
  ],
}
];

const ScheduleSection = () => {
  return (
    <section
      id="turmas"
      className="relative overflow-hidden py-24 bg-[#F5F5F5]"
    >
      {/* GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#E10600]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#E10600]/10 blur-[140px] rounded-full" />

      <div className="container max-w-[1280px] mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#E10600]/20 bg-[#E10600]/10 px-4 py-2 text-xs font-medium text-[#E10600] mb-5">

            <Sparkles className="h-4 w-4" />
            Informações da Formação

          </div>

          <h2 className="text-3xl md:text-5xl font-black text-[#0B0B0B] mb-5">
            Dias de <span className="text-[#E10600]">Formação</span>
          </h2>

          <p className="text-[#4B4B4B] leading-relaxed">
            Organização clara, acompanhamento contínuo e foco total em
            resultados reais.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className="
                  group relative overflow-hidden
                  rounded-2xl
                  border border-[#E5E5E5]
                  bg-white
                  p-6
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:border-[#E10600]/20
                "
              >

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#E10600]/5 via-transparent to-transparent" />

                {/* HEADER */}
                <div className="relative z-10 flex items-center gap-3 mb-6">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E10600]/10 text-[#E10600]">

                    <Icon className="h-5 w-5" />

                  </div>

                  <h3 className="text-lg font-bold text-[#0B0B0B]">
                    {card.title}
                  </h3>

                </div>

                {/* ITEMS */}
                <div className="relative z-10 space-y-4">

                  {card.items.map((item) => {
                    const ItemIcon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="
                          rounded-xl
                          border border-[#E5E5E5]
                          bg-[#F8FAFC]
                          p-4
                        "
                      >

                        <div className="flex items-center gap-2 text-xs font-semibold text-[#E10600] mb-2">

                          {ItemIcon && (
                            <ItemIcon className="h-4 w-4" />
                          )}

                          {item.label}

                        </div>

                        <p className="whitespace-pre-line text-sm font-semibold text-[#0B0B0B] leading-relaxed">
                          {item.value}
                        </p>

                      </div>
                    );
                  })}

                </div>

              </div>
            );
          })}

        </div>

        {/* ALERT */}
        <div className="text-center mb-10">

          <div
            className="
              relative inline-flex items-center gap-3
              overflow-hidden
              rounded-xl
              border border-[#E10600]/30
              bg-[#E10600]/10
              px-5 py-3
              text-sm
              font-semibold
              text-[#E10600]
              animate-pulse
              shadow-[0_0_25px_rgba(225,6,0,0.18)]
              backdrop-blur-sm
            "
          >

            {/* SHINE */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E10600]/10 to-transparent animate-[shine_3s_linear_infinite]" />

            {/* DOT */}
            <span className="relative flex h-3 w-3">

              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E10600] opacity-75" />

              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#E10600]" />

            </span>

            <AlertTriangle className="h-4 w-4 shrink-0" />

            <span className="relative z-10">
              Vagas limitadas para garantir acompanhamento individual.
            </span>

          </div>

        </div>        

      </div>
    </section>
  );
};

export default ScheduleSection;