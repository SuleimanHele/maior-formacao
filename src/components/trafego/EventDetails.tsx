import { Calendar, HeadphonesIcon, MapPin } from "lucide-react";

const items = [
  {
    icon: Calendar,
    label: "Dias de Formação",
    value: ["-Turma de Sexta", "-Turma de Sábado"],
    sub: "10H às 15H",
  },
  {
    icon: HeadphonesIcon,
    label: "Dias de Acompanhamento",
    value: "Segunda a Quinta",
    sub: "10H às 15H",
  },
  {
    icon: MapPin,
    label: "Local",
    value: "Kilamba — G27",
    sub: "Apartamento 02",
  },
] as const;

export default function EventDetails() {
  return (
    <section id="detalhes" className="relative z-10 mx-auto max-w-7xl px-5 py-16">

      {/* HEADER */}
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-widest text-primary">
          Quando e onde
        </p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          Detalhes da formação
        </h2>
      </div>

      {/* CONTAINER */}
      <div className="overflow-hidden rounded-3xl border border-primary/30 bg-card p-8 shadow-sm sm:p-10">

        <div className="grid gap-8 md:grid-cols-3">

          {items.map((it) => (
            <div
              key={it.label}
              className="
                flex items-start gap-4
                rounded-2xl

                /* 🔴 VERDE MAIS FORTE */
                bg-primary/10
                border border-primary/40

                p-5
                transition-all

                hover:bg-primary/20
                hover:border-primary
                hover:shadow-md
              "
            >
              {/* ICON */}
              <div className="rounded-xl bg-primary/20 p-3 transition-colors group-hover:bg-primary/30">
                <it.icon className="h-6 w-6 text-primary" />
              </div>

              {/* CONTENT */}
              <div>
                <p className="text-xs uppercase tracking-widest text-primary">
                  {it.label}
                </p>

                <div className="mt-1 text-xl font-black sm:text-2xl leading-tight text-foreground">
                  {Array.isArray(it.value) ? (
                    <div className="flex flex-col">
                      {it.value.map((item, i) => (
                        <span key={i}>{item}</span>
                      ))}
                    </div>
                  ) : (
                    it.value
                  )}
                </div>

                <p className="text-sm text-muted-foreground">
                  {it.sub}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}