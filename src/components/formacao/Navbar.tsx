import logoMagaf from "@/assets/logo-magaf.jpg";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Formações", href: "#formacoes" },
  { label: "Consultoria", href: "#consultoria" },
  { label: "Formadores", href: "#formadores" },
  { label: "Turmas", href: "#turmas" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16">

        {/* LOGO */}
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={logoMagaf}
            alt="MAGAF"
            className="h-10 object-contain"
          />

          <div className="leading-tight">
            <div className="font-display text-base font-bold text-secondary">
              MAGAF
            </div>

            <div className="text-[9px] font-medium text-muted-foreground tracking-wider uppercase">
              Centro de Formação Digital
            </div>
          </div>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-background border-t border-border py-5">
          <div className="container flex flex-col gap-4">

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition"
              >
                {item.label}
              </a>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;