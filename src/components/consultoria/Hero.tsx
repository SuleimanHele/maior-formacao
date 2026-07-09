import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, TrendingUp, Target, BarChart3, MousePointerClick, Users } from "lucide-react";
import { CHECKOUT_URL } from "./constants";
import { fadeUp } from "./primitives";

const bullets = [
  "Diagnóstico completo",
  "Estratégia personalizada",
  "Gestão de Tráfego Pago",
  "Otimização contínua",
  "Acompanhamento durante 30 dias",
];

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-5 lg:px-8 overflow-hidden">
      {/* backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 -left-40 w-[520px] h-[520px] rounded-full bg-[#E10600]/25 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-[#E10600]/15 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#05070F_75%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E10600]/40 bg-[#E10600]/10 px-3 py-1.5 text-[11px] font-bold tracking-[0.18em] text-[#ff6b60] uppercase">
            <Sparkles size={13} /> Consultoria Estratégica
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-white">
            Transforme o Marketing da Sua Empresa com{" "}
            <span className="text-gradient-red">Estratégia</span> e Acompanhamento Especializado.
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/70 max-w-xl">
            Receba acompanhamento durante 30 dias para aumentar as vendas, otimizar campanhas, reduzir desperdícios e construir um plano de crescimento sustentável para o seu negócio.
          </p>

          <ul className="mt-8 space-y-3">
            {bullets.map(b => (
              <li key={b} className="flex items-center gap-3 text-white/85">
                <span className="grid place-items-center h-6 w-6 rounded-full bg-[#E10600]/15 border border-[#E10600]/40 shrink-0">
                  <Check size={13} className="text-[#ff6b60]" />
                </span>
                <span className="text-sm md:text-base">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#E10600] px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_30px_rgba(225,6,0,0.55)] hover:shadow-[0_0_50px_rgba(225,6,0,0.8)] hover:bg-[#ff1a10] transition-all">
              Agendar Consultoria <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#servicos" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              Conhecer o Serviço
            </a>
          </div>
        </motion.div>

        <DashboardMock />
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative"
    >
      <div className="absolute -inset-6 bg-[#E10600]/25 blur-3xl rounded-[3rem]" aria-hidden />
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 md:p-6 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-[#E10600]" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <span className="text-[10px] font-semibold tracking-widest text-white/50 uppercase">MAGAF · Dashboard</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <MiniStat icon={<Target size={16} />} label="Google Ads" value="R.O.A.S 5.8x" trend="+22%" />
          <MiniStat icon={<Users size={16} />} label="Meta Ads" value="1,284 Leads" trend="+41%" />
          <MiniStat icon={<BarChart3 size={16} />} label="Analytics" value="94.2k sessões" trend="+18%" />
          <MiniStat icon={<MousePointerClick size={16} />} label="Conversões" value="3.72%" trend="+9%" />
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs text-white/50">ROI Total · 30 dias</p>
              <p className="text-2xl font-black text-white">+ 312%</p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#ff6b60] bg-[#E10600]/15 border border-[#E10600]/40 rounded-full px-2 py-1">
              <TrendingUp size={12}/> em alta
            </span>
          </div>
          <FakeChart />
        </div>
      </div>

      {/* floating cards */}
      <motion.div
        animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}
        className="absolute -left-4 md:-left-10 top-16 hidden sm:flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0b0e1a]/90 backdrop-blur px-3.5 py-2.5 shadow-xl">
        <div className="h-8 w-8 rounded-lg bg-[#E10600]/20 grid place-items-center"><TrendingUp size={16} className="text-[#ff6b60]"/></div>
        <div>
          <p className="text-[10px] text-white/50">Leads hoje</p>
          <p className="text-sm font-bold text-white">+ 128</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.6 }}
        className="absolute -right-4 md:-right-8 bottom-14 hidden sm:flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0b0e1a]/90 backdrop-blur px-3.5 py-2.5 shadow-xl">
        <div className="h-8 w-8 rounded-lg bg-[#E10600]/20 grid place-items-center"><BarChart3 size={16} className="text-[#ff6b60]"/></div>
        <div>
          <p className="text-[10px] text-white/50">CPA otimizado</p>
          <p className="text-sm font-bold text-white">- 34%</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MiniStat({ icon, label, value, trend }: { icon: React.ReactNode; label: string; value: string; trend: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5">
      <div className="flex items-center gap-2 text-white/60 text-[11px] font-medium">
        <span className="text-[#ff6b60]">{icon}</span>{label}
      </div>
      <p className="mt-1.5 text-white font-bold text-sm">{value}</p>
      <p className="text-[10px] text-[#ff6b60] font-semibold mt-0.5">{trend}</p>
    </div>
  );
}

function FakeChart() {
  const bars = [30, 45, 38, 62, 55, 78, 68, 90, 82, 96, 88, 100];
  return (
    <div className="flex items-end gap-1.5 h-20">
      {bars.map((h, i) => (
        <motion.div key={i}
          initial={{ height: 0 }} animate={{ height: `${h}%` }}
          transition={{ duration: 0.9, delay: 0.3 + i * 0.05, ease: "easeOut" }}
          className="flex-1 rounded-t-sm bg-gradient-to-t from-[#E10600] to-[#ff6b60]"
        />
      ))}
    </div>
  );
}
