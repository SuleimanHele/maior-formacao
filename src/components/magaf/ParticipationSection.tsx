import { motion } from "framer-motion";
import {
  CreditCard,
  CheckCircle2,
  Backpack,
  MapPin,
  ArrowRight,
  Shield,
  Zap,
  MessageCircle,
  BadgeAlert,
  CarTaxiFront,
  Car,
} from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const WHATSAPP_URL =
  "https://wa.me/244936351564?text=Olá!%20Quero%20confirmar%20a%20minha%20vaga%20na%20formação";

const participationItems = [
  {
    icon: CreditCard,
    title: "Dados Bancários",
    badge: "Pagamento",
    content: (
      <div className="space-y-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-400">
            IBAN
          </p>
          <p className="mt-1 text-sm font-semibold text-white">
            005500009421285610123
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Titular
          </p>
          <p className="mt-1 text-sm font-semibold text-white">MAGAF SU LDA</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Pagamento Xpress
          </p>
          <p className="mt-1 text-sm font-semibold text-red-500">936 351 564</p>
        </div>
      </div>
    ),
  },

  {
    icon: CheckCircle2,
    title: "Confirmação de Vaga",
    badge: "Inscrição",
    content: (
      <div>
        <p className="text-sm text-gray-400">
          Para garantir a tua vaga, envia:
        </p>

        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-red-500/20 bg-gray-900/50 p-3">
            <span className="text-sm leading-relaxed text-gray-300">
              Comprovativo de pagamento (2.000 KZ)
            </span>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                bg-red-500
                px-3
                py-1.5
                text-xs
                font-bold
                text-white
                transition-all
                hover:scale-105
                hover:bg-red-600
              "
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Enviar
            </a>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-red-500/20 bg-gray-900/50 p-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20">
              <CheckCircle2 className="h-3.5 w-3.5 text-red-500" />
            </div>

            <span className="text-sm text-gray-300">
              Nome completo
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2 text-xs text-gray-400">
          <Shield className="h-3.5 w-3.5 text-red-500" />
          Depois disso, serás adicionado(a) ao grupo oficial.
        </div>
      </div>
    ),
  },

  {
    icon: Backpack,
    title: "O que trazer",
    badge: "Preparação",
    content: (
      <div className="space-y-3">
        {[
          "Telefone ou computador",
          "Dados móveis",
          "Bilhete de identidade",
          "Caderneta e lapiseira",
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-2xl border border-red-500/20 bg-gray-900/50 p-3"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20">
              <CheckCircle2 className="h-3.5 w-3.5 text-red-500" />
            </div>

            <span className="text-sm text-gray-300">{item}</span>
          </div>
        ))}
      </div>
    ),
  },

  {
    icon: MapPin,
    title: "Como chegar",
    badge: "Localização",
    content: (
      <div className="space-y-5">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <CarTaxiFront className="h-4 w-4 text-red-500" />
            <p className="text-sm font-semibold text-white">Táxi</p>
          </div>

          <p className="text-sm leading-relaxed text-gray-400">
            Kilamba → última paragem → pedir indicação para o edifício
            G27 → apartamento 02.
          </p>
        </div>

        <div>
          <div className="mb-2 flex items-center gap-2">
            <Car className="h-4 w-4 text-red-500" />
            <p className="text-sm font-semibold text-white">Carro próprio</p>
          </div>

          <p className="text-sm text-gray-400">
            Localização será partilhada no dia da formação.
          </p>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-red-500/30
            bg-red-500/5
            p-4
          "
        >
          <div className="flex items-center gap-2">
            <BadgeAlert className="h-4 w-4 text-red-500" />

            <p className="text-xs font-bold uppercase tracking-wide text-red-400">
              Importante
            </p>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            Teremos uma assistente na portaria para receber e orientar
            todos os participantes.
          </p>
        </div>
      </div>
    ),
  },
];

const ParticipationSection = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 bg-black">
      {/* BACKGROUND - Vermelho */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="section-container relative">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="text-center"
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-red-500/30
              bg-red-500/10
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.15em]
              text-red-400
            "
          >
            <Zap className="h-3.5 w-3.5" />
            Como Participar
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tighter text-white sm:text-5xl">
            Inscrição e{" "}
            <span className="text-red-500">
              Acesso à Formação
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
            Tudo o que precisas para confirmar a tua participação,
            efectuar o pagamento e chegar correctamente ao local da
            formação.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mx-auto mt-14 max-w-6xl">
          <div className="grid gap-5 lg:grid-cols-2">
            {participationItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease,
                  }}
                  className="relative"
                >
                  {/* GLOW Vermelho */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-red-500/20 to-red-600/20 opacity-30 blur-2xl" />

                  {/* CARD */}
                  <div
                    className="
                      relative
                      h-full
                      overflow-hidden
                      rounded-3xl
                      border
                      border-red-500/20
                      bg-gradient-to-br from-gray-900 to-gray-950
                      p-6
                    "
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

                    {/* TOP */}
                    <div className="flex items-center justify-between">
                      <div
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-red-500/30
                          bg-red-500/10
                          px-3
                          py-1.5
                        "
                      >
                        <Icon className="h-4 w-4 text-red-500" />

                        <span className="text-xs font-semibold text-white">
                          {item.title}
                        </span>
                      </div>

                      <span className="text-[10px] uppercase tracking-[0.18em] text-gray-400">
                        {item.badge}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="mt-6">
                      {item.content}
                    </div>

                    {/* FOOTER */}
                    <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
                      <Zap className="h-3.5 w-3.5 text-red-500" />
                      Informação importante para participantes.
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mt-10 text-center"
          >
            <a
              href="https://paygooo.goootrafego.com/checkout/8b7954a6-0f67-4977-bdaf-74fe343568c6"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-red-600
                to-red-500
                px-6
                py-3
                text-sm
                font-bold
                text-white
                transition-transform
                hover:scale-105
                hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]
              "
            >
              Garantir Minha Vaga
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParticipationSection;