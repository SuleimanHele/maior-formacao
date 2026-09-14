import { ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import { WhatsAppLink } from "./WhatsAppLink";

export default function EnrollmentSection() {
  return (
    <section className="bg-surface px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <span className="text-xs font-bold text-primary">INSCRIÇÕES ABERTAS</span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">GARANTE A TUA VAGA</h2>
          <div className="mt-7 grid grid-cols-2 gap-3">
            <div className="rounded-[12px] bg-muted p-5">
              <span className="text-xs font-semibold text-muted-foreground">INSCRIÇÃO</span>
              <strong className="mt-1 block text-2xl">5.000 Kz</strong>
            </div>
            <div className="rounded-[12px] bg-primary p-5 text-primary-foreground">
              <span className="text-xs font-semibold">FORMAÇÃO</span>
              <strong className="mt-1 block text-2xl">50.000 Kz</strong>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">A inscrição garante a tua vaga.</p>
        </div>

        <div className="rounded-[12px] bg-muted p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex gap-3">
              <CalendarDays className="shrink-0 text-primary" />
              <p>
                <strong className="block">10 de Outubro</strong>
                <span className="text-sm text-muted-foreground">Todos os sábados</span>
              </p>
            </div>
            <div className="flex gap-3">
              <Clock3 className="shrink-0 text-primary" />
              <p>
                <strong className="block">12h às 15h</strong>
                <span className="text-sm text-muted-foreground">1 mês</span>
              </p>
            </div>
            <div className="flex gap-3 sm:col-span-2">
              <MapPin className="shrink-0 text-primary" />
              <p>
                <strong className="block">Viana Executive Center</strong>
                <span className="text-sm leading-6 text-muted-foreground">
                  Ao lado do Hotel Horizonte
                  <br />
                  3.º andar, Sala do Qualifica
                </span>
              </p>
            </div>
          </div>
          <WhatsAppLink className="mt-7 w-full">
            FAZER MINHA INSCRIÇÃO <ArrowRight size={18} />
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}