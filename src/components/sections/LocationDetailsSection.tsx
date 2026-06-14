import { Calendar, Clock, MapPin, GraduationCap, Users } from "lucide-react";

export function LocationDetailsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-widest text-gold">
          Quando e Onde
        </p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          DETALHES DA <span className="text-primary">FORMAÇÃO</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          Tudo o que precisas saber para participar
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* DIAS DE FORMAÇÃO */}
          <div className="rounded-2xl bg-secondary text-secondary-foreground p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary mb-4">
              <Calendar className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-3">
              DIAS DE FORMAÇÃO
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-3 w-3 text-primary" />
                <span className="text-sm font-semibold">19 de Junho de 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3 text-primary" />
                <span className="text-sm font-semibold">Sexta-feira</span>
              </div>
              <div className="mt-3 pt-2 border-t border-white/10">
                <p className="text-2xl font-black text-white">10h às 15h</p>
              </div>
            </div>
          </div>

          {/* DIAS DE ACOMPANHAMENTO */}
          <div className="rounded-2xl bg-secondary text-secondary-foreground p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary mb-4">
              <Users className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-3">
              ACOMPANHAMENTO
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-3 w-3 text-primary" />
                <span className="text-sm font-semibold">Após a formação</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3 text-primary" />
                <span className="text-sm font-semibold">1 mês de suporte</span>
              </div>
              <div className="mt-3 pt-2 border-t border-white/10">
                <p className="text-sm text-white/80">Acompanhamento via WhatsApp</p>
              </div>
            </div>
          </div>

          {/* LOCAL */}
          <div className="rounded-2xl bg-secondary text-secondary-foreground p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary mb-4">
              <MapPin className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-3">
              LOCAL
            </h3>
            <div className="space-y-1">
              <p className="text-lg font-black text-white">Kilamba — G27</p>
              <p className="text-sm text-white/70">Apartamento 02</p>
              <p className="text-xs text-white/50 mt-2">Luanda, Angola</p>
            </div>
          </div>
        </div>

        {/* Badge de data especial */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              📅 19 de Junho de 2026 • Sexta-feira • 10h às 15h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}