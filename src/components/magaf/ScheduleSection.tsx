import {
  CalendarDays,
  MapPin,
  Headphones,
  Clock3,
} from "lucide-react";

const scheduleItems = [
  {
    icon: CalendarDays,
    title: "DIAS DE FORMAÇÃO",
    badge: "Presencial",
    content: [
      { label: "Dia", value: "Domingo" },
      { label: "Horário", value: "10H às 15H", highlight: true },
    ],
  },
  {
    icon: MapPin,
    title: "LOCAL",
    badge: "Kilamba",
    content: [
      { label: "Localização", value: "Kilamba — G27" },
      { label: "Apartamento", value: "Apartamento 02" },
    ],
  },
  {
    icon: Headphones,
    title: "SUPORTE E ACOMPANHAMENTO",
    badge: "Suporte",
    content: [
      { label: "Dias", value: "Segunda até Quinta" },
      { label: "Horário", value: "10H às 15H", highlight: true },
    ],
  },
];

const ScheduleSection = () => {
  return (
    <section
      id="schedule"
      className="relative py-24 overflow-hidden bg-black"
    >
      {/* BACKGROUND SYSTEM */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[140px]" />

      <div className="section-container relative z-10">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 backdrop-blur-md">
            <Clock3 size={14} className="text-red-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-300">
              Formação Presencial
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Dias de{" "}
            <span className="text-red-500">Formação</span>
          </h2>

          <p className="mt-4 text-sm text-white/60 sm:text-base">
            Organiza-te para participar da formação presencial.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {scheduleItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group relative overflow-hidden
                  rounded-2xl border
                  border-white/10
                  bg-gradient-to-b from-white/[0.04] to-white/[0.02]
                  backdrop-blur-xl
                  p-6
                  transition-all duration-300

                  hover:-translate-y-1
                  hover:border-red-500/40
                  hover:shadow-[0_0_35px_rgba(239,68,68,0.18)]
                "
              >
                {/* ICON + BADGE */}
                <div className="mb-5 flex items-start justify-between">
                  <div
                    className="
                      flex h-11 w-11 items-center justify-center
                      rounded-xl border border-red-500/20
                      bg-red-500/10 text-red-400
                      transition-all duration-300
                      group-hover:scale-105
                      group-hover:bg-red-500/20
                    "
                  >
                    <Icon size={20} strokeWidth={2.1} />
                  </div>

                  <span className="rounded-full border border-red-500/20 bg-red-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-red-300">
                    {item.badge}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mb-5 text-base font-semibold text-white">
                  {item.title}
                </h3>

                {/* CONTENT */}
                <div className="space-y-4">
                  {item.content.map((content, i) => (
                    <div
                      key={i}
                      className="border-b border-white/10 pb-3 last:border-0 last:pb-0"
                    >
                      <p className="text-[11px] uppercase tracking-widest text-white/40">
                        {content.label}
                      </p>

                      <p
                        className={`mt-1 font-medium ${
                          content.highlight
                            ? "text-red-400 text-lg"
                            : "text-white/70 text-sm"
                        }`}
                      >
                        {content.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* INNER BORDER */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;