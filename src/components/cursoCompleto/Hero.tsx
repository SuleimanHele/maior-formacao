import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  MessageCircle,
  MapPin,
  CheckCircle,
  Sparkles,
  Gift,
  Megaphone,
  Target,
  Bot,
  PackageOpen,
  Globe2,
  ShoppingBag,
  CreditCard,
} from "lucide-react";
import campaignImage from "@/assets/FormacaoPresencial.webp";
import CourseModal, { type CourseInfo } from "./CourseModal";

const WHATSAPP_LINK =
  "https://wa.me/244936351564?text=Ol%C3%A1%21%20Quero%20fazer%20a%20minha%20inscri%C3%A7%C3%A3o%20na%20forma%C3%A7%C3%A3o%20da%20MAGAF.";

const PAYGO_LINK =
  "https://paygooo.goootrafego.com/checkout/4722a3ac-c6e3-4905-bb53-7022d5c7683e";

const learnItems: {
  icon: typeof Megaphone;
  label: string;
  info: CourseInfo;
}[] = [
  {
    icon: Megaphone,
    label: "Marketing Digital",
    info: {
      title: "📱 Marketing Digital",
      description:
        "Aprenda a posicionar marcas no ambiente digital, criar conteúdos estratégicos, gerir redes sociais e transformar presença online em oportunidades de negócio.",
      topics: [
        "Posicionamento de marca digital",
        "Criação de conteúdo estratégico",
        "Gestão de redes sociais",
        "Presença online que gera negócio",
      ],
    },
  },
  {
    icon: Target,
    label: "Tráfego Pago",
    info: {
      title: "🎯 Tráfego Pago",
      description:
        "Aprenda a criar, configurar e gerir campanhas publicitárias no Meta Ads para alcançar o público certo, gerar clientes e aumentar as vendas.",
      topics: [
        "Criação de campanhas no Meta Ads",
        "Configuração e gestão de anúncios",
        "Segmentação do público certo",
        "Geração de clientes e vendas",
      ],
    },
  },
  {
    icon: PackageOpen,
    label: "Importação",
    info: {
      title: "🌍 Importação",
      description:
        "Aprenda a encontrar fornecedores, pesquisar produtos, negociar e realizar compras internacionais através de plataformas como Alibaba e AliExpress.",
      topics: [
        "🇺🇸 eBay · Amazon · Back Market",
        "🇨🇳 Taobao · 1688 · Xianyu · SHEIN",
        "Encontrar fornecedores e negociar",
        "Pesquisa de produtos e compras internacionais",
      ],
    },
  },
  {
    icon: Bot,
    label: "Inteligência Artificial",
    info: {
      title: "🤖 Inteligência Artificial",
      description:
        "Aprenda a utilizar ferramentas de IA para criar conteúdos, automatizar tarefas, melhorar processos e aumentar a produtividade dos negócios.",
      topics: [
        "Criação de conteúdo com IA",
        "Automação de tarefas",
        "Melhoria de processos",
        "Aumento de produtividade nos negócios",
      ],
    },
  },
];

const bonusItems = [
  { icon: Globe2, label: "Website com IA" },
  { icon: ShoppingBag, label: "Técnicas de Venda" },
  { icon: CreditCard, label: "Abertura de Conta Visa" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const itemStagger: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const [selected, setSelected] = useState<CourseInfo | null>(null);

  return (
    <>
      <section
        id="inicio"
        className="relative overflow-hidden bg-white text-gray-900"
      >
        {/* GLOWS decorativos suaves */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#E10600]/10 blur-3xl"
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.2, ease: "easeOut" }}
          className="pointer-events-none absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-[#E10600]/10 blur-3xl"
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-24 md:grid-cols-2 md:gap-8 md:px-8 md:pb-24 md:pt-28">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            {/* BADGE */}
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[#E10600]/30 bg-[#E10600]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#E10600] backdrop-blur-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E10600] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#E10600]" />
              </span>
              Formação Presencial · Viana, Luanda
            </motion.span>

            {/* TÍTULO */}
            <motion.h5
              variants={fadeUp}
              className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
            >
              A Maior Formação de{" "}
              <span className="text-[#E10600]">Marketing Digital</span>,{" "}
              <span className="text-[#E10600]">Tráfego Pago</span>,{" "}
              <span className="text-[#E10600]">Importação</span> e{" "}
              <span className="text-[#E10600]">Inteligência Artificial</span>
            </motion.h5>

            {/* O QUE VAIS APRENDER */}
            <motion.div
              variants={fadeUp}
              className="mt-8 w-full max-w-xl rounded-2xl border border-[#E10600]/30 bg-[#E10600]/5 p-5 transition-colors hover:border-[#E10600]/60"
            >
              <div className="mb-4 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#E10600]" />
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#E10600]">
                  O que vais aprender
                </p>
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 gap-3"
              >
                {learnItems.map(({ icon: Icon, label, info }) => (
                  <motion.button
                    key={label}
                    type="button"
                    onClick={() => setSelected(info)}
                    variants={itemStagger}
                    whileHover={{ y: -3, borderColor: "#E10600" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-2 rounded-xl border border-[#E10600]/20 bg-white px-3 py-2.5 text-left text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-[#E10600]/5"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-[#E10600]" />
                    {label}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>

            {/* BÓNUS */}
            <motion.div
              variants={fadeUp}
              className="mt-4 w-full max-w-xl rounded-2xl border border-[#E10600]/40 bg-gradient-to-br from-[#E10600]/10 to-[#E10600]/5 p-5 transition-colors hover:border-[#E10600]/70"
            >
              <div className="mb-4 flex items-center gap-2">
                <Gift className="h-4 w-4 text-[#E10600]" />
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#E10600]">
                  Bónus incluídos
                </p>
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-wrap gap-2"
              >
                {bonusItems.map(({ icon: Icon, label }) => (
                  <motion.span
                    key={label}
                    variants={itemStagger}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#E10600]/30 bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-sm transition-colors hover:bg-[#E10600]/5"
                  >
                    <Icon className="h-3.5 w-3.5 text-[#E10600]" />
                    {label}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* BLOCO DE DATA */}
            <motion.div
  variants={fadeUp}
  className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-3"
>
  <motion.div
    animate={{ rotate: [0, -6, 6, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      repeatDelay: 4,
      ease: "easeInOut",
    }}
    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E10600]/10"
  >
    <CalendarDays className="h-5 w-5 text-[#E10600]" />
  </motion.div>
  <div className="text-left">
    <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
      Início da Formação
    </p>
    <p className="text-lg font-black leading-none text-gray-900">
      10 de Outubro
    </p>
    <p className="text-xs text-gray-500">
      Todos os sábados · 12h às 15h
    </p>
    <p className="mt-1 text-[11px] font-bold text-[#E10600]">
      Duração: 1 mês
    </p>
  </div>
</motion.div>

            {/* PREÇOS + CTA */}
<motion.div
  variants={fadeUp}
  className="mt-8 grid w-full max-w-xl gap-3 sm:grid-cols-2"
>
  {/* CARD INSCRIÇÃO */}
  <motion.a
    href={PAYGO_LINK}
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.03, y: -3 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="group flex flex-col items-start gap-2 rounded-2xl bg-[#E10600] p-5 text-left text-white shadow-[0_10px_30px_-10px_rgba(225,6,0,0.6)]"
  >
    <span className="text-[10px] font-bold uppercase tracking-wider text-white/80">
      Inscrição
    </span>
    <span className="text-3xl font-black leading-none">
      5.000 Kz
    </span>
    <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-white/90">
      Garantir minha vaga
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
    </span>
  </motion.a>

  {/* CARD FORMAÇÃO */}
  <motion.div
    whileHover={{ scale: 1.03, y: -3 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="flex flex-col items-start gap-2 rounded-2xl border-2 border-[#E10600] bg-white p-5 text-left text-gray-900"
  >
    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E10600]">
      Formação
    </span>
    <span className="text-3xl font-black leading-none text-[#E10600]">
      50.000 Kz
    </span>
    <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-gray-600">
      <MessageCircle className="h-3.5 w-3.5 text-[#E10600]" />
      Paga-se no dia da formação
    </span>
  </motion.div>
</motion.div>

            {/* TRUST POINTS */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
            >
              {[
                "Vagas Limitadas",
                "Certificado incluído",
                "Acompanhamento personalizado",
              ].map((item) => (
                <motion.span
                  key={item}
                  variants={itemStagger}
                  whileHover={{ y: -2 }}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-700"
                >
                  <CheckCircle className="h-3.5 w-3.5 text-[#E10600]" />
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* COLUNA DIREITA — IMAGEM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-[#E10600]/10 blur-2xl" />

            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl"
            >
              <img
                src={campaignImage}
                alt="Formadores da MAGAF"
                width={1024}
                height={1280}
                fetchPriority="high"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-5 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E10600]/60 backdrop-blur-sm">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-white/80">
                      📍 Local da Formação
                    </p>
                    <p className="text-sm font-bold leading-tight">
                      Viana Executive Center — 3.º andar, Sala do Qualifica
                    </p>
                    <p className="text-xs text-white/70">Viana, Luanda</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#E10600]" />
      </section>

      {/* MODAL */}
      <CourseModal
        open={!!selected}
        onClose={() => setSelected(null)}
        course={selected}
      />
    </>
  );
}