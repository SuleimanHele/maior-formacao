import { ArrowRight } from "lucide-react";
import { WhatsAppLink } from "./WhatsAppLink";

export default function FinalCTA() {
  return (
    <section className="bg-primary px-5 py-14 text-primary-foreground lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">ESTÁS PRONTO(A) PARA COMEÇAR?</h2>
          <p className="mt-3 max-w-3xl text-sm text-primary-foreground/85 sm:text-base">
            Aprende Marketing Digital, Tráfego Pago, Importação e Inteligência Artificial.
          </p>
        </div>
        <WhatsAppLink variant="dark" className="w-full shrink-0 sm:w-auto">
          INSCREVER-ME AGORA <ArrowRight size={18} />
        </WhatsAppLink>
      </div>
    </section>
  );
}