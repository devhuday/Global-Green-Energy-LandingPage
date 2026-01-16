import React from "react";
import { ArrowUpRight, Check, MoveRight, UserCheck } from "lucide-react";
import Badge from "../ui/Badge";

const featuresList = [
  "Instalación de Sistemas Solares",
  "Soluciones de Almacenamiento energetico",
  "soluciones ambientales sostenibles",
  "Soporte por Chat y Llamada 24x7",
];

const phoneNumber = "573136145611";
const message =
  "Hola! Me gustaría obtener más información sobre sus servicios de energía solar.";

const AboutSection: React.FC = () => {
  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  return (
    <section id="inicio" className="relative  py-10 lg:py-18 bg-linear-to-b from-white to-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 md:gap-12 lg:gap-16 ">
          {/* COLUMNA IZQUIERDA - IMÁGENES */}
          <div className="relative order-3 md:order-1 pt-5 md:pt-20 pr-8 pb-8 sm:pr-16 sm:pb-16 lg:pr-12 lg:pb-20">
            {/* Imagen Principal */}
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 group">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                src="https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/greenglo-03.webp"
                alt="Instalación solar GreenGlo al atardecer"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Imagen Overlay */}
            <div className="absolute bottom-5 md:bottom-10 right-0 w-3/5 h-2.2/5 z-20">
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src="https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/greenglo-02.webp"
                  alt="Hogar moderno con energía solar"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Badge decorativo flotante */}
            <div className="absolute top-2 md:top-15 left-2  bg-white rounded-2xl shadow-lg px-6 py-3 z-30 border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-gray-900 font-semibold text-sm">
                  Global Green Energy SAS
                </span>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA - CONTENIDO */}
          <div className="space-y-6 order-1 md:order-2">
            <Badge
              text="Acerca De Nosotros"
              variant="solar"
              className="mb-4 mx-auto"
            />

            {/* Título Principal */}
            <h2 className="text-[40px] sm:text-5xl lg:text-5xl font-heading font-extrabold text-gray-900 leading-tight">
              Impulsando el futuro con{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-primary">
                GreenGlo SAS
              </span>
            </h2>

            {/* Descripción */}
            <p className="text-gray-600 text-md lg:text-md leading-relaxed">
              En GreenGlo SAS, transformamos la manera en que el mundo consume
              energía. Somos líderes en la implementación de soluciones solares
              sostenibles, comprometidos con la innovación y la eficiencia para
              hogares y empresas, en temas solares, eólicos y ambientales.
            </p>

            {/* Lista de Características */}
            <div className=" hidden md:grid grid-cols-2 sm:grid-cols-2 gap-2 pt-2">
              {featuresList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent/20 transition-all duration-300 group"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
                    <Check
                      className="w-4 h-4 text-accent-solar-hover group-hover:text-white transition-colors duration-300"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-gray-800 font-normal text-md leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Botón CTA deskot */}
            <button
              className="hidden group relative md:inline-flex items-center gap-4 px-4 py-2 bg-primary text-white rounded-4xl font-semibold text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              onClick={handleClick}
            >
              <span className="bg-white/20 p-1.5 lg:p-2 rounded-full group-hover:bg-white/30 transition-colors">
                <ArrowUpRight size={18} />
              </span>

              <span className="relative z-10">Mas informacion</span>
              <MoveRight className="w-0 h-10 group-hover:w-6 transition-all duration-300 relative z-10" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center md:hidden mb-5 order-2">
            <button onClick={handleClick} className=" mt-2 group relative inline-flex items-center gap-4 px-4 py-2 bg-primary text-white rounded-4xl font-semibold text-base shadow-lg shadow-primary/30   max-h-xl w-70">
              <span className="bg-white/20 p-1.5 lg:p-2 rounded-full group-hover:bg-white/30 transition-colors">
                <ArrowUpRight size={18} />
              </span>
              <span className="relative ms-5 z-10">Mas informacion</span>
            </button>
            <a href="#clientes" className=" mt-5 group relative inline-flex items-center gap-4 px-4 py-2 bg-primary-light text-white rounded-4xl font-semibold text-base shadow-lg shadow-accent/25 max-h-xl w-70">
              <span className="bg-accent/20 p-1.5 lg:p-2 rounded-full group-hover:bg-accent/40 transition-colors">
                <UserCheck size={18} className="text-accent" />
              </span>
              <span className="relative text-accent ms-9 z-10">Testimonios</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
