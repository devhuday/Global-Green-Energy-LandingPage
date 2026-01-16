import React from "react";
import { ArrowRight, Sun } from "lucide-react";
import Badge from "../ui/Badge";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-900 pt-20">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-60"
          src="https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/heroSecImg.webp"
          alt="Paneles solares y energía renovable"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-20 flex flex-col justify-center h-full">
        <div className="max-w-2xl">
          <Badge
            text="Líderes en Energía Renovable en Colombia"
            variant="lightSolar"
            className="mb-4 mx-auto"
          />

          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight mb-6">
            Transforma tu consumo,{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-primary">Genera tu propia energía.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            En{" "}
            <span className="font-semibold text-primary-light">
              Global Green Energy SAS
            </span>
            , diseñamos sistemas solares y eólicos que reducen tu factura de
            energía hasta en un{" "}
            <span className="text-primary-light font-bold">100%</span>. Ahorra
            dinero y cuida el planeta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/573136145611?text=Hola,%20quiero%20saber%20cuánto%20puedo%20ahorrar%20con%20energía%20solar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-accent-solar-hover hover:bg-green-500 text-primary-light px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30"
            >
              Cotizar Proyecto
              <ArrowRight size={20} />
            </a>

            <a
              href="#servicios"
              className="flex items-center justify-center gap-2 bg-white hover:bg-white/90 backdrop-blur-md border border-white/90 text-accent-solar-hover px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              Nuestros Servicios
              <Sun size={20} />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-8 text-gray-400 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Certificados RETIE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Beneficios Tributarios</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Garantía de 25 años</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
