import {
  Sun,
  Wind,
  Leaf,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { useState } from "react";
// Asegúrate de que tus rutas de imagen sean correctas
import serviceSolar from "../../assets/SolarService.jpg";
import serviceWind from "../../assets/service-wind.png";
import serviceConsulting from "../../assets/service-consulting.jpg";

const WHATSAPP_NUMBER = "573136145611";

const services = [
  {
    icon: Sun,
    title: "Energía Solar",
    description: "Instalación de paneles solares fotovoltaicos para hogares e industrias. Sistemas conectados a la red y autónomos.",
    features: ["Paneles de alta eficiencia", "Inversores inteligentes", "Monitoreo 24/7"],
    image: serviceSolar,
  },
  {
    icon: Wind,
    title: "Energía Eólica",
    description: "Aerogeneradores para zonas con alto potencial de viento. Energía limpia ideal para fincas y empresas rurales.",
    features: ["Turbinas silenciosas", "Bajo mantenimiento", "Alta durabilidad"],
    image: serviceWind,
  },
  {
    icon: Leaf,
    title: "Consultoría Ambiental",
    description: "Asesoría integral en eficiencia energética, huella de carbono y certificaciones ambientales corporativas.",
    features: ["Auditorías energéticas", "Certificaciones verdes", "Planes de sostenibilidad"],
    image: serviceConsulting,
  },
];

// 1. COMPONENTE REUTILIZABLE PARA LA TARJETA
// Esto asegura coherencia visual total entre móvil y desktop
const ServiceCard = ({ service, className = "" }: { service: (typeof services)[0]; className?: string }) => (
  <Card className={`group relative overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}>
    {/* Imagen Header */}
    <div className="relative h-56 overflow-hidden">
      <img
        src={service.image}
        alt={service.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Overlay degradado para mejorar lectura del icono */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Icono Flotante */}
      <div className="absolute bottom-4 left-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 backdrop-blur-sm shadow-sm text-accent">
          <service.icon className="h-6 w-6" />
        </div>
      </div>
    </div>

    <CardContent className="flex flex-col p-6">
      <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-gray-600">
        {service.description}
      </p>

      {/* Features con diseño más limpio */}
      <ul className="mb-6 space-y-2.5">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-sm text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Botón alineado al fondo */}
      <div className="mt-auto pt-4 border-t border-gray-100">
        <Button
          asChild
          variant="ghost"
          className="group/btn w-full justify-between p-0 font-semibold text-primary hover:bg-transparent hover:text-accent"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola, me interesa el servicio de ${service.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar cotización
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </Button>
      </div>
    </CardContent>
  </Card>
);

export function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="servicios" className="relative py-16 lg:py-24 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      
      {/* Elemento decorativo de fondo (opcional para dar profundidad) */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">
        
        {/* ENCABEZADO DE SECCIÓN */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge
            text="Nuestros Servicios"
            variant="solar"
            className="mb-6 mx-auto"
          />
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Soluciones para <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">tus necesidades</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ofrecemos un portafolio completo en energías renovables y consultoría ambiental, 
            diseñado para potenciar la sostenibilidad en Colombia.
          </p>
        </div>

        {/* 2. LAYOUT MÓVIL (CARRUSEL) */}
        <div className="relative lg:hidden">
          <div className="overflow-hidden px-1 py-4"> {/* Padding evita corte de sombras */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full shrink-0 px-2">
                   <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>

          {/* Controles Carrusel Móvil (Mejor posicionados) */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="rounded-full border border-gray-200 bg-white p-3 text-gray-600 shadow-sm transition-colors hover:bg-gray-50 hover:text-primary"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            {/* Indicadores de puntos */}
            <div className="flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-8 bg-primary" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="rounded-full border border-gray-200 bg-white p-3 text-gray-600 shadow-sm transition-colors hover:bg-gray-50 hover:text-primary"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* 3. LAYOUT DESKTOP (GRID) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 xl:gap-10">
          {services.map((service,_) => (
             <ServiceCard key={service.title} service={service} className="h-full" />
          ))}
        </div>

      </div>
    </section>
  );
}