import { motion } from "framer-motion";
import {
  Check,
  Shield,
  Zap,
  ArrowRight,
  Lock,
  Flame,
  CreditCard,
} from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const inscriptionBenefits = [
  "Acesso à formação presencial",
  "Acesso ao grupo dos inscritos no WhatsApp",
  "Acesso ao manual de acompanhamento",
  "Confirmação imediata da inscrição",
];

const premiumBenefits = [
  "Coffee Break",
  "Certificado",
  "Abertura de conta Visa gratuita",
  "Direito ao manual de formação",
  "Acesso ao grupo de acompanhamento",
];

const PricingSection = () => {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 bg-black"
      id="pricing"
    >
      {/* BACKGROUND EFFECTS - Vermelho */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/15 blur-[150px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/4 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-red-600/10 blur-[130px]" />

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
            <Flame className="h-3.5 w-3.5 text-red-400" />
            Vagas Limitadas
          </span>

          <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tighter text-white">
            Escolha a melhor forma de{" "}
            <span className="text-red-500">
              participar da formação
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-300">
            Aprenda a criar websites e aplicações modernas com
            Inteligência Artificial através de uma formação prática,
            presencial e focada no mercado actual.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* CARD 1 - Inscrição */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease,
              }}
              className="relative"
            >
              {/* GLOW Vermelho */}
              <div className="absolute -inset-1 rounded-3xl bg-red-500/20 blur-2xl" />

              <div
                className="
                  relative
                  h-full
                  overflow-hidden
                  rounded-3xl
                  border
                  border-red-500/20
                  bg-gradient-to-br from-gray-900 to-gray-950
                  p-8
                "
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

                {/* TOP */}
                <div className="flex items-center justify-between">
                  <span
                    className="
                      rounded-full
                      border
                      border-red-500/30
                      bg-red-500/10
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-red-400
                    "
                  >
                    <CreditCard className="mr-1 inline h-3 w-3" />
                    Inscrição
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.18em] text-gray-400">
                    Entrada
                  </span>
                </div>

                {/* PRICE */}
                <div className="mt-8">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-white tabular-nums">
                      5.000
                    </span>
                    <span className="text-xl font-bold text-red-500">KZ</span>
                  </div>

                  <p className="mt-3 text-sm text-gray-300">
                    Reserve agora a tua vaga na formação presencial.
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Pagamento inicial para confirmação da inscrição.
                  </p>
                </div>

                {/* BENEFITS */}
                <div className="mt-9">
                  <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Benefícios Inclusos
                  </p>

                  <div className="space-y-4">
                    {inscriptionBenefits.map((benefit, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: i * 0.05,
                        }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500/20">
                          <Check
                            className="h-3 w-3 text-red-500"
                            strokeWidth={3}
                          />
                        </span>

                        <span className="text-sm leading-relaxed text-gray-300">
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA - Botão personalizado */}
                <a
                  href="https://wa.me/244936351564?text=Olá!%20Quero%20fazer%20minha%20inscrição%20na%20formação"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-9
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-gradient-to-r
                    from-red-600
                    to-red-500
                    py-4
                    text-base
                    font-bold
                    text-white
                    shadow-lg
                    transition-all
                    hover:scale-[1.02]
                    hover:shadow-red-500/30
                    group/btn
                  "
                >
                  Fazer Inscrição
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>

                {/* FOOTER */}
                <div className="mt-5 flex items-center justify-center gap-5 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Shield className="h-3 w-3 text-red-500" />
                    Pagamento Seguro
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Zap className="h-3 w-3 text-red-500" />
                    Confirmação Imediata
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CARD 2 - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease,
              }}
              className="relative"
            >
              {/* PREMIUM GLOW - Vermelho mais intenso */}
              <div
                className="
                  absolute
                  -inset-1
                  rounded-3xl
                  bg-gradient-to-br
                  from-red-600
                  via-red-500
                  to-red-600
                  opacity-40
                  blur-2xl
                "
              />

              <div
                className="
                  relative
                  h-full
                  overflow-hidden
                  rounded-3xl
                  border-2
                  border-red-500/40
                  bg-gradient-to-br from-gray-900 to-black
                  p-8
                "
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80" />

                {/* TOP */}
                <div className="flex items-center justify-between">
                  <span
                    className="
                      rounded-full
                      border
                      border-red-500/30
                      bg-red-500/15
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-red-400
                    "
                  >
                    Plano Completo
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.18em] text-red-400">
                    Best Value
                  </span>
                </div>

                {/* PRICE */}
                <div className="mt-8">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-white tabular-nums">
                      50.000
                    </span>
                    <span className="text-xl font-bold text-red-500">KZ</span>
                  </div>

                  <p className="mt-3 text-sm text-gray-300">
                    Acesso completo à formação e benefícios premium.
                  </p>
                </div>

                {/* BENEFITS */}
                <div className="mt-9">
                  <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Tudo Incluso
                  </p>

                  <div className="space-y-4">
                    {premiumBenefits.map((benefit, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: i * 0.05,
                        }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500/20">
                          <Check
                            className="h-3 w-3 text-red-500"
                            strokeWidth={3}
                          />
                        </span>

                        <span className="text-sm leading-relaxed text-gray-300">
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA - Botão personalizado */}
                <a
                  href="https://paygooo.goootrafego.com/checkout/8b7954a6-0f67-4977-bdaf-74fe343568c6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-9
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-gradient-to-r
                    from-red-600
                    to-red-500
                    py-4
                    text-base
                    font-bold
                    text-white
                    shadow-lg
                    shadow-red-500/20
                    transition-all
                    hover:scale-[1.02]
                    hover:shadow-red-500/40
                    group/btn
                  "
                >
                  Garantir Minha Vaga
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>

                {/* FOOTER */}
                <div className="mt-5 flex items-center justify-center gap-5 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Shield className="h-3 w-3 text-red-500" />
                    Pagamento Seguro
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Zap className="h-3 w-3 text-red-500" />
                    Acesso Imediato
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Lock className="h-3 w-3 text-red-500" />
                    SSL
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;