import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "./constants";

export function FinalCTA() {
  return (
    <section className="relative px-5 lg:px-8 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-6xl rounded-[2rem] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#E10600] via-[#c00500] to-[#8a0400]" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.3), transparent 50%)"
        }} />
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

        <div className="relative px-6 md:px-14 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
            Está na hora de fazer o seu negócio crescer.
          </h2>
          <p className="mt-5 text-white/90 md:text-lg max-w-2xl mx-auto">
            Agende hoje a sua consultoria e receba um plano estratégico desenvolvido especificamente para a realidade da sua empresa.
          </p>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm md:text-base font-black text-[#E10600] shadow-2xl hover:scale-[1.03] transition-transform">
            Agendar Consultoria <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
