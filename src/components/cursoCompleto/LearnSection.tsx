import { Sparkles } from "lucide-react";
import { learnItems, platforms } from "../data/content";

export default function LearnSection() {
  return (
    <section className="px-5 py-18 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-primary">CONTEÚDOS</span>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">O QUE VAIS APRENDER?</h2>
          </div>
          <Sparkles className="hidden text-primary sm:block" size={36} />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {learnItems.map(({ icon: Icon, title, subtitle }) => (
            <article
              key={title}
              className="rounded-[12px] border bg-surface p-6 shadow-sm transition-transform hover:-translate-y-1"
            >
              <Icon className="text-primary" size={28} />
              <h3 className="mt-5 text-base font-bold">{title}</h3>
              {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {platforms.map(({ label, items }) => (
            <div key={label} className="overflow-hidden rounded-[12px] border bg-surface">
              <h3 className="bg-primary px-5 py-2.5 text-xs font-bold tracking-wide text-primary-foreground">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2 p-5">
                {items.map((item) => (
                  <span key={item} className="rounded-[8px] bg-muted px-3 py-2 text-sm font-semibold">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}