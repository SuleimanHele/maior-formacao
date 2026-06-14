export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <div>
          <span className="text-xl font-black">
            <span className="text-primary">MAGAF</span>
          </span>
          <p className="text-xs text-muted-foreground">Centro de Formação Digital</p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} MAGAF. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
