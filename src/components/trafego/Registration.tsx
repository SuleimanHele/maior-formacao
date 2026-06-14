import { WHATSAPP_URL } from "@/lib/constants";

export default function Registration() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-12">

      {/* HEADER */}
      <div className="mb-8 text-center">
        <p className="text-xs uppercase tracking-widest text-primary">
          Como participar
        </p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          Inscrição e Acesso à Formação
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">

        {/* CARD 1 */}
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
          <h3 className="text-lg font-bold mb-3">💳 Dados Bancários</h3>

          <p className="text-sm text-muted-foreground mb-1">IBAN:</p>
          <p className="font-semibold text-sm">005500009421285610123</p>

          <p className="text-sm text-muted-foreground mt-3 mb-1">Titular:</p>
          <p className="font-semibold text-sm">MAGAF SU LDA</p>

          <p className="text-sm text-muted-foreground mt-3 mb-1">
            Pagamento Xpress:
          </p>
          <p className="font-semibold text-sm">936 351 564</p>
        </div>

        {/* CARD 2 */}
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
          <h3 className="text-lg font-bold mb-3">✔️ Confirmação de Vaga</h3>

          <p className="text-sm text-muted-foreground mb-3">
            Para garantir a tua vaga, envia:
          </p>

          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-between gap-2">
              <span>
                • Enviar comprovativo de pagamento (2.000 KZ) via WhatsApp
              </span>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-1
                  rounded-full
                  bg-primary
                  px-3 py-1
                  text-[11px] font-bold text-white
                  transition-transform hover:scale-105
                "
              >
                Enviar
              </a>
            </li>

            <li>• Nome completo</li>
          </ul>

          <p className="mt-4 text-xs text-muted-foreground">
            Depois disso, serás adicionado(a) ao grupo oficial dos inscritos.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
          <h3 className="text-lg font-bold mb-3">🎒 O que trazer</h3>

          <ul className="space-y-1.5 text-sm">
            <li>• Telefone ou computador</li>
            <li>• Dados móveis</li>
            <li>• Bilhete de identidade</li>
            <li>• Caderneta e lapiseira</li>
          </ul>
        </div>

        {/* CARD 4 */}
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
          <h3 className="text-lg font-bold mb-3">📍 Como chegar</h3>

          <p className="text-sm font-semibold">🚖 Táxi:</p>
          <p className="text-sm text-muted-foreground mb-3">
            Kilamba → última paragem → pedir indicação para o edifício G27.
          </p>

          <p className="text-sm font-semibold">🚗 Carro próprio:</p>
          <p className="text-sm text-muted-foreground mb-4">
            Localização será partilhada no dia da formação.
          </p>

          <div className="rounded-lg border border-primary/30 bg-primary/10 p-3">
            <p className="text-xs font-semibold text-primary">
              ⚠️ Importante
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Teremos uma assistente na portaria para receber e orientar todos os participantes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}