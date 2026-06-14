import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}

export function Feature({ icon: Icon, title, children }: FeatureProps) {
  return (
    <div className="flex items-stretch gap-0 rounded-md overflow-hidden ring-1 ring-border bg-card">
      <div className="flex items-center justify-center bg-primary px-4 shrink-0">
        <Icon className="h-7 w-7 text-primary-foreground" strokeWidth={2.2} />
      </div>
      <div className="bg-secondary text-secondary-foreground px-5 py-4 flex-1">
        <div className="font-display text-lg tracking-wide leading-tight">{title}</div>
        <p className="text-sm text-white/75 mt-1 leading-snug">{children}</p>
      </div>
    </div>
  );
}
