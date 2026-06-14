import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import magafLogo from "@/assets/curso-ia/magaf-logo.png";
import { Menu, X, ArrowRight } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Para Quem É", href: "#target-audience" },
    { label: "Módulos", href: "#modules" },
    { label: "Preços", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappLink =
    "https://wa.me/244936351564?text=Olá!%20Quero%20fazer%20a%20minha%20inscrição%20na%20formação%20de%20Criação%20de%20Aplicações%20e%20Páginas%20Web%20com%20IA";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_0_40px_rgba(255,0,90,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex h-[78px] items-center justify-between px-4 md:px-6">
            {/* LOGO */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-red-600/30 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <img
                  src={magafLogo}
                  alt="MAGAF CENTRO DE FORMAÇÃO DIGITAL"
                  className="relative h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="hidden lg:flex flex-col leading-none">
                <span className="text-[15px] font-black tracking-[0.18em] text-white uppercase">
                  MAGAF
                </span>

                <span className="text-[11px] tracking-[0.25em] text-white/55 uppercase">
                  Centro de Formação Digital
                </span>
              </div>
            </div>

            {/* NAVIGATION */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="relative text-sm font-medium text-white/70 hover:text-white transition-all duration-300 group"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-red-600 to-red-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* ACTIONS */}
            <div className="flex items-center gap-3">
              <Button
                asChild
                className="
                  relative
                  overflow-hidden
                  border
                  border-red-600/20
                  bg-gradient-to-r
                  from-red-600
                  via-red-600
                  to-red-600
                  hover:from-red-600
                  hover:via-red-500
                  hover:to-red-500
                  text-white
                  px-5
                  h-11
                  rounded-xl
                  font-semibold
                  shadow-[0_0_30px_rgba(255,0,90,0.25)]
                  hover:shadow-[0_0_40px_rgba(255,0,90,0.45)]
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                "
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Fazer Inscrição
                  <ArrowRight size={16} />
                </a>
              </Button>

              {/* MOBILE MENU BUTTON */}
              <button
                className="
                  md:hidden
                  flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  hover:bg-white/[0.06]
                  transition-all
                  duration-300
                "
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed top-[78px] left-0 right-0 z-40 md:hidden animate-in slide-in-from-top duration-300">
          <div className="mx-4 rounded-2xl border border-white/[0.08] bg-[#0B0B0F]/95 backdrop-blur-2xl p-5 shadow-2xl">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-white/75
                    hover:text-white
                    hover:bg-white/[0.04]
                    transition-all
                    duration-300
                  "
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-5">
              <Button
                asChild
                className="
                  w-full
                  h-12
                  rounded-xl
                  bg-gradient-to-r
                  from-red-600
                  to-red-600
                  hover:from-red-600
                  hover:to-red-500
                  text-white
                  font-semibold
                  shadow-[0_0_30px_rgba(255,0,90,0.25)]
                "
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fazer Inscrição
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;