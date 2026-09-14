import { WalletCards } from "lucide-react";
import { quickInfo } from "../data/content";

export default function QuickInfo() {
  return (
    <section
      aria-label="Informações rápidas"
      className="relative z-20 mx-auto -mt-px max-w-7xl px-5 lg:-mt-8 lg:px-8"
    >
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[12px] border bg-border shadow-[0_14px_40px_color-mix(in_oklab,var(--foreground)_10%,transparent)] sm:grid-cols-3 lg:grid-cols-5">
        {quickInfo.map(({ icon: Icon, value, label }, index) => (
          <div
            key={value}
            className={`flex min-h-28 items-center gap-3 bg-surface p-4 ${
              index === 4 ? "col-span-2 sm:col-span-1" : ""
            }`}
          >
            <Icon className="shrink-0 text-primary" size={24} />
            <div>
              <strong className="block text-base font-bold sm:text-lg">{value}</strong>
              {label && (
                <span className="text-[11px] font-semibold text-muted-foreground">{label}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}