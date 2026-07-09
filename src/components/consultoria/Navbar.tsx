import logoMagaf from "@/assets/logo-magaf.jpg";
import { Menu, X, ArrowLeft, CalendarCheck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#investimento", label: "Investimento" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

const PAYMENT_LINK =
  "https://paygooo.goootrafego.com/checkout/1c4576a6-9f95-4920-91c9-f3ab81d0bd20";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="
      fixed top-0 left-0 right-0 z-50
      bg-background/80
      backdrop-blur-xl
      border-b border-border
    ">

      <div className="
        container
        flex
        items-center
        justify-between
        h-16
      ">


        {/* LOGO */}
        <a 
          href="#inicio" 
          className="flex items-center gap-3"
        >

          <img
            src={logoMagaf}
            alt="MAGAF"
            className="h-10 object-contain"
          />


          <div className="leading-tight">

            <div className="
              font-display
              text-base
              font-bold
              text-secondary
            ">
              MAGAF
            </div>


            <div className="
              text-[9px]
              font-medium
              text-muted-foreground
              tracking-wider
              uppercase
            ">
              Centro de Formação Digital
            </div>

          </div>

        </a>



        {/* DESKTOP */}
        <div className="
          hidden md:flex
          items-center
          gap-6
        ">


          {/* VOLTAR AO SITE */}
          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-white

              px-5
              py-2.5

              text-sm
              font-semibold

              text-[#05070F]

              shadow-lg
              shadow-black/10

              border
              border-white/20

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-gray-100
            "
          >

            <ArrowLeft className="h-4 w-4" />

            Voltar ao Site

          </Link>



          {/* LINKS */}
          <div className="
            flex
            items-center
            gap-7
          ">

            {links.map((item) => (

              <a
                key={item.href}
                href={item.href}
                className="
                  text-sm
                  font-medium
                  text-foreground/70

                  hover:text-primary

                  transition-colors
                "
              >
                {item.label}
              </a>

            ))}

          </div>



          {/* CTA */}
          <a
            href={PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-primary

              px-5
              py-2.5

              text-sm
              font-bold

              text-primary-foreground

              shadow-lg
              shadow-primary/20

              transition-all
              duration-300

              hover:scale-105
              hover:bg-[#c5163d]
            "
          >

            <CalendarCheck className="h-4 w-4" />

            Agendar Consultoria

          </a>


        </div>



        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >

          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}

        </button>


      </div>




      {/* MOBILE MENU */}
      {open && (

        <div className="
          md:hidden
          bg-background
          border-t
          border-border
          py-5
        ">

          <div className="
            container
            flex
            flex-col
            gap-5
          ">


            {/* VOLTAR AO SITE */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="
                flex
                items-center
                justify-center
                gap-2

                rounded-xl

                bg-white

                px-5
                py-3

                text-sm
                font-bold

                text-[#05070F]

                shadow-lg

                transition-all

                hover:bg-gray-100
              "
            >

              <ArrowLeft className="h-5 w-5" />

              Voltar ao Site

            </Link>




            {/* LINKS */}
            {links.map((item) => (

              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  text-sm
                  font-medium
                  text-foreground/70
                  hover:text-primary
                "
              >

                {item.label}

              </a>

            ))}




            {/* CTA MOBILE */}
            <a
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="
                flex
                items-center
                justify-center
                gap-2

                rounded-xl

                bg-primary

                px-5
                py-3

                text-sm
                font-bold

                text-primary-foreground
              "
            >

              <CalendarCheck className="h-4 w-4" />

              Agendar Consultoria

            </a>


          </div>

        </div>

      )}

    </nav>
  );
};


export default Navbar;