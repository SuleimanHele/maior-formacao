export function Brand() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="MAGAF — início">
      <span className="grid h-10 w-10 place-items-center rounded-[8px] bg-primary text-lg font-bold text-primary-foreground">
        M
      </span>
      <span className="leading-none">
        <strong className="block text-xl font-bold tracking-[0]">MAGAF</strong>
        <span className="mt-1 block text-[10px] font-medium text-muted-foreground sm:text-xs">
          Centro de Formação Digital
        </span>
      </span>
    </a>
  );
}