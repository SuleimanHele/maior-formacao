import type { ReactNode } from "react";
import { whatsappUrl } from "../data/content";

type Variant = "primary" | "light" | "dark";

interface Props {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  light: "bg-surface text-foreground hover:bg-muted",
  dark: "bg-dark text-dark-foreground hover:bg-foreground/85",
};

export  function WhatsAppLink({ children, variant = "primary", className = "" }: Props) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-sm font-bold transition-all hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}