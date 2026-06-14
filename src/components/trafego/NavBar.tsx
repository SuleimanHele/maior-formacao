import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Zap, ArrowLeft } from "lucide-react";
import logoMagaf from "@/assets/logo-magaf.jpg";

const navItems = [
  { label: "Para Quem É", href: "#target-audience" },
  { label: "Módulos", href: "#modules" },
  { label: "Preços", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Link to="#" className="flex items-center gap-3">
            <img
              src={logoMagaf}
              alt="MAGAF"
              className="h-10 w-10 object-contain rounded-md"
            />

            <div className="leading-tight">
              <div className="font-heading text-base font-bold text-secondary">
                MAGAF
              </div>

              <div className="text-[9px] font-medium text-muted-foreground tracking-wider uppercase">
                Centro de Formação Digital
              </div>
            </div>
          </Link>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">

          {/* VOLTAR AO SITE */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Site
          </Link>

          {/* LINKS */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* CTA DESKTOP */}
        <a
          href="#inscricao"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:bg-[#c5163d]"
        >
          <Zap className="h-3.5 w-3.5" />
          Inscrever-se
        </a>

        {/* HAMBURGER */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col gap-5 px-5 py-5">

            {/* VOLTAR */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 text-sm font-medium border-b border-border pb-3"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao Site
            </Link>

            {/* LINKS */}
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* CTA MOBILE */}
            <a
              href="#inscricao"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
            >
              <Zap className="h-4 w-4" />
              Inscrever-se
            </a>

          </div>
        </div>
      )}
    </header>
  );
}