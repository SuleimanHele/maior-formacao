import { MessageCircle, CheckCircle2 } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function PaymentSection() {
  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-3xl tracking-wide">
            FORMAS DE <span className="text-primary">PAGAMENTO</span>
          </h3>
          <p className="mt-3 text-white/70 text-sm">Confirma a tua vaga via transferência ou Pagamento Express.</p>
        </div>
        <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-6">
          <div className="text-[11px] font-bold tracking-[0.3em] text-primary">IBAN</div>
          <div className="mt-2 font-mono text-lg break-all">0055 0000 9421 2856 1012 3</div>
        </div>
        <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-6">
          <div className="text-[11px] font-bold tracking-[0.3em] text-primary">PAGAMENTO XPRESS</div>
          <div className="mt-2 font-mono text-lg">936 351 564</div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <MessageCircle className="h-6 w-6 text-primary-foreground" />
            </span>
            <p className="text-sm md:text-base">
              Envia o <span className="font-bold">comprovativo + nome completo</span> para entrar no grupo dos inscritos.
              <CheckCircle2 className="inline-block ml-2 h-4 w-4 text-primary" />
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-bold uppercase tracking-wider text-sm hover:opacity-90 transition"
          >
            Enviar Comprovativo
          </a>
        </div>
      </div>
    </section>
  );
}
