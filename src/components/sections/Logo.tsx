export function Logo() {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="inline-block h-9 w-9 bg-primary" aria-hidden />
      <div className="leading-none">
        <div className="font-display text-3xl tracking-wide text-secondary">
          MA<span className="text-primary">GAF</span>
        </div>
        <div className="text-[10px] font-semibold tracking-[0.25em] text-muted-foreground mt-1">
          CENTRO DE FORMAÇÃO DIGITAL
        </div>
      </div>
    </div>
  );
}
