import logoMagaf from "@/assets/logo-magaf.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/95">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <img 
              src={logoMagaf} 
              alt="MAGAF" 
              className="h-10 w-auto object-contain"
            />
            <div className="border-l border-border pl-3">
              <div className="font-display text-base font-bold text-secondary leading-tight">
                MAGAF
              </div>
              <div className="text-[9px] font-medium text-muted-foreground tracking-wider uppercase">
                Centro de Formação Digital
              </div>
            </div>
          </a>
          
          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MAGAF — Centro de Formação Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}