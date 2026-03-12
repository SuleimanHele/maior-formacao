import { MapPin, Calendar, Clock, AlertTriangle, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/244936351564?text=Olá! Quero garantir a minha vaga na formação da MAGAF.";

const locations = [
  {
    place: "Kilamba – G27 Apartamento 02",
    day: "Todas as sextas-feiras",
    time: "09h às 15h",
  },
  {
    place: "Viana – Grafanil",
    day: "Todos os sábados",
    time: "09h às 15h",
  },
];

const ScheduleSection = () => {
  return (
    <section id="turmas" className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Próximas <span className="text-primary">Turmas</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-10">
          {locations.map((loc) => (
            <div key={loc.place} className="rounded-2xl bg-card border border-border p-8 hover:border-primary/30 hover:shadow-lg transition-all">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-card-foreground font-medium">{loc.place}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">{loc.day}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">{loc.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-5 py-3 text-sm text-primary font-medium">
            <AlertTriangle className="h-4 w-4" />
            As vagas são limitadas para garantir melhor acompanhamento.
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Garantir minha vaga
            </a>
            <a
              href={WHATSAPP_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-10 py-4 text-lg font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Calendar className="h-5 w-5" />
              Fazer marcação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
