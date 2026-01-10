import { useState } from "react";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoUrl from "../../assets/LogoGreenglo_1.png";
// 1. Importamos el componente Transition de Headless UI
import { Transition } from "@headlessui/react";
import { Fragment } from 'react'; // Necesario para Headless UI en algunas versiones

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

const WHATSAPP_NUMBER = "573001234567";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola, me gustaría cotizar un proyecto de energía renovable.");

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    // Añadí 'relative' aquí para asegurar que el menú móvil se posicione correctamente si decidimos hacerlo absoluto luego
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-main/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 relative z-10 bg-white/95 backdrop-blur-md">
          {/* ... (Esta parte del logo y navbar desktop sigue igual que en la respuesta anterior) ... */}
          <a href="#" className="shrink-0" data-testid="link-logo">
            <img src={logoUrl} alt="Greenglo S.A.S" className="h-10 md:h-12 w-auto" />
          </a>

          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-md font-heading font-normal text-muted hover:text-primary active-elevate-2 rounded-md transition-colors"
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button
                onClick={handleWhatsAppClick}
                className="hidden sm:flex gap-2 bg-[#28c060] text-white border-[#25D366]"
                data-testid="button-header-whatsapp"
              >
                <SiWhatsapp className="w-4 h-4" />
                <span className="hidden font-heading font-medium md:inline">Cotizar Ahora</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {/* Añadí una pequeña transición al icono también */}
                <span className="sr-only">Abrir menú principal</span>
                {mobileMenuOpen ? (
                    <X className="w-5 h-5 transition-transform duration-200 rotate-90 scale-110" />
                ) : (
                    <Menu className="w-5 h-5 transition-transform duration-200" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* 2. Reemplazamos el renderizado condicional simple {mobileMenuOpen && (...)} por <Transition> */}
        <Transition
          as={Fragment}
          show={mobileMenuOpen}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 -translate-y-4 scale-95"
          enterTo="opacity-100 translate-y-0 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0 scale-100"
          leaveTo="opacity-0 -translate-y-4 scale-95"
        >
          <div className="lg:hidden border-t border-border py-4 absolute left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg px-4 md:px-8">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-foreground hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={handleWhatsAppClick}
                className="mt-4 w-full gap-2 bg-[#2d7f4b] text-white border-[#25D366] justify-center py-3"
                data-testid="button-mobile-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5" />
                Cotizar por WhatsApp
              </Button>
            </nav>
          </div>
        </Transition>
      </div>
    </header>
  );
}