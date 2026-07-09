import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contacto" className="relative border-t border-white/10 bg-[#05070F] px-5 lg:px-8 pt-16 pb-10">
      <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-[#E10600] grid place-items-center font-black text-white shadow-[0_0_20px_rgba(225,6,0,0.55)]">M</div>
            <div>
              <p className="font-extrabold text-white text-lg leading-none">MAGAF</p>
              <p className="text-[10px] tracking-widest text-white/50 uppercase mt-1">Centro de Formação Digital</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/60 leading-relaxed">
            Consultoria e formação em marketing digital para acelerar o crescimento do seu negócio.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {[Instagram, Facebook, Linkedin].map((Ic, i) => (
              <a key={i} href="#" className="grid place-items-center h-9 w-9 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-[#E10600]/50 hover:bg-[#E10600]/10 transition-colors">
                <Ic size={16}/>
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold tracking-widest text-[#ff6b60] uppercase mb-4">Navegação</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#inicio" className="hover:text-white">Início</a></li>
            <li><a href="#como-funciona" className="hover:text-white">Como Funciona</a></li>
            <li><a href="#beneficios" className="hover:text-white">Benefícios</a></li>
            <li><a href="#investimento" className="hover:text-white">Investimento</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold tracking-widest text-[#ff6b60] uppercase mb-4">Serviços</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Consultoria de Marketing</li>
            <li>Gestão de Tráfego Pago</li>
            <li>Estratégia Digital</li>
            <li>Formação</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold tracking-widest text-[#ff6b60] uppercase mb-4">Contacto</p>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2"><Mail size={15} className="text-[#ff6b60]"/> contacto@magaf.ao</li>
            <li className="flex items-center gap-2"><Phone size={15} className="text-[#ff6b60]"/> +244 900 000 000</li>
            <li className="flex items-center gap-2"><MapPin size={15} className="text-[#ff6b60]"/> Luanda, Angola</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <p>© {new Date().getFullYear()} MAGAF Centro de Formação Digital. Todos os direitos reservados.</p>
        <p>Consultoria e Acompanhamento de Marketing e Gestão de Tráfego</p>
      </div>
    </footer>
  );
}
