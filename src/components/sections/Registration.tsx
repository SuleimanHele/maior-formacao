import { WHATSAPP_URL } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export default function Registration() {
  // Usando o WA_LINK da constante
  

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-12">
      <div className="mb-8 text-center">
        <p className="text-xs uppercase tracking-widest text-gold">Como participar</p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          Inscrição e <span className="text-primary">Acesso</span> à Formação
        </h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto">
          Siga os passos abaixo para garantir a sua vaga na formação
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {/* Dados Bancários */}
        <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-full bg-primary/10 p-2">
              <span className="text-xl">🏦</span>
            </div>
            <h3 className="text-lg font-bold">Dados Bancários</h3>
          </div>
          
          <div className="space-y-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                IBAN
              </p>
              <p className="mt-1 font-mono text-sm font-semibold">005500009421285610123</p>
            </div>
            
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Titular
              </p>
              <p className="mt-1 text-sm font-semibold">MAGAF SU LDA</p>
            </div>
            
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Pagamento Xpress
              </p>
              <p className="mt-1 text-lg font-bold text-primary">936 351 564</p>
            </div>
          </div>
        </div>

        {/* Confirmação de Vaga */}
        <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-full bg-green-500/10 p-2">
              <span className="text-xl">✓</span>
            </div>
            <h3 className="text-lg font-bold">Confirmação de Vaga</h3>
          </div>
          
          <p className="mb-3 text-sm text-muted-foreground">
            Para garantir a tua vaga, envia:
          </p>
          
          <ul className="space-y-3 text-sm">
            <li className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="flex items-center gap-2">
                <span>•</span>
                <span>Comprovativo de pagamento (2.000 KZ)</span>
              </span>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-bold text-white transition-all hover:scale-105 hover:bg-green-600"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Enviar via WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span>•</span>
              <span>Nome completo</span>
            </li>
          </ul>
          
          <div className="mt-4 rounded-lg bg-primary/5 p-3">
            <p className="text-xs text-muted-foreground">
              📱 Depois disso, serás adicionado(a) ao grupo oficial dos inscritos.
            </p>
          </div>
        </div>

        {/* O que trazer */}
        <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-full bg-primary/10 p-2">
              <span className="text-xl">🎒</span>
            </div>
            <h3 className="text-lg font-bold">O que trazer</h3>
          </div>
          
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              Telefone ou computador
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              Dados móveis
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              Bilhete de identidade
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              Caderneta e lapiseira
            </li>
          </ul>
        </div>

        {/* Como chegar */}
        <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-full bg-primary/10 p-2">
              <span className="text-xl">📍</span>
            </div>
            <h3 className="text-lg font-bold">Como chegar</h3>
          </div>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold">🚖 Táxi:</p>
              <p className="text-sm text-muted-foreground">
                Kilamba → última paragem → pedir indicação para o edifício G27
              </p>
            </div>
            
            <div>
              <p className="text-sm font-semibold">🚗 Carro próprio:</p>
              <p className="text-sm text-muted-foreground">
                Localização será partilhada no dia da formação
              </p>
            </div>
          </div>
          
          <div className="mt-4 rounded-lg border border-gold/30 bg-gold/5 p-3">
            <p className="text-xs font-semibold text-gold">⚠️ Importante</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Teremos uma assistente na portaria para receber e orientar todos os participantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}