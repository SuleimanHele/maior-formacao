import logoMagaf from "@/assets/logo-magaf.jpg";
import { Menu, X, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const WHATSAPP_LINK =
  "https://wa.me/244936351564?text=Olá! Quero saber mais sobre a formação da MAGAF.";

const navLinks = [
  { name: "Início", href: "#" },
  { name: "Para quem É", href: "#sobre" },
  { name: "Detalhes", href: "#detalhes" },
  { name: "Módulos", href: "#modulos" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // 👇 removemos "Início" apenas no mobile
  const mobileNavLinks = navLinks.filter((link) => link.name !== "Início");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16">

        {/* LOGO (sem navegação para evitar sair da página) */}
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

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">

          {/* BOTÃO VOLTAR AO SITE */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao site
          </Link>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* CTA */}
          <a
            href="https://paygooo.goootrafego.com/checkout/8b7954a6-0f67-4977-bdaf-74fe343568c6"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 hover:scale-[1.03] transition"
          >
            Inscrever-se
          </a>
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

            {/* BOTÃO VOLTAR AO SITE */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-sm font-medium border-b pb-3"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao site
            </Link>

            {/* 👇 MOBILE SEM "INÍCIO" */}
            {mobileNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition"
              >
                {link.name}
              </a>
            ))}

            {/* CTA MOBILE */}
            <a
              href="https://paygooo.goootrafego.com/checkout/8b7954a6-0f67-4977-bdaf-74fe343568c6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground text-center"
            >
              Inscrever-se agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;