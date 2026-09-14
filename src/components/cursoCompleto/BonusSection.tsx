import { ArrowRight } from "lucide-react";
import { bonusItems } from "../data/content";
import { WhatsAppLink } from "./WhatsAppLink";

export default function BonusSection() {
  return (
    <section className="bg-dark px-5 py-16 text-dark-foreground lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="flex-1">
            <span className="text-xs font-bold text-primary">INCLUÍDO NA FORMAÇÃO</span>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">BÓNUS</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {bonusItems.map(({ icon: Icon, title }) => (
                <article
                  key={title}
                  className="flex items-center gap-3 rounded-[12px] border border-dark-foreground/15 bg-dark-foreground/5 p-5"
                >
                  <Icon className="shrink-0 text-primary" size={24} />
                  <h3 className="text-sm font-semibold">{title}</h3>
                </article>
              ))}
            </div>
          </div>
          <WhatsAppLink className="shrink-0">
            QUERO APROVEITAR <ArrowRight size={18} />
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}