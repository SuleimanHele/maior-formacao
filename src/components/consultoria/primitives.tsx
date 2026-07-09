import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative py-20 md:py-28 px-5 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: ReactNode; subtitle?: string; center?: boolean }) {
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className={center ? "text-center max-w-3xl mx-auto mb-14" : "max-w-3xl mb-14"}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-[#E10600]/40 bg-[#E10600]/10 px-3 py-1 text-xs font-semibold tracking-widest text-[#ff6b60] uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-white">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-white/70 md:text-lg">{subtitle}</p>}
    </motion.div>
  );
}

export function GlowBackdrop({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[680px] h-[680px] rounded-full bg-[#E10600]/20 blur-[140px]" />
    </div>
  );
}
