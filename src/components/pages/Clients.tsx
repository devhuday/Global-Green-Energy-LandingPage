import { Quote, Eye, MapPin, Zap, TrendingDown, Calendar } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

// Asegúrate de que las rutas sean correctas
import testimonialCarlos from "../../assets/testimonial-carlos.jpg";
import testimonialMaria from "../../assets/testimonial-maria.jpg";
import testimonialRoberto from "../../assets/testimonial-roberto.jpg";
import projectComercial from "../../assets/project-carlos.jpg";
import projectResidencial from "../../assets/project-maria.jpg";
import projectAgro from "../../assets/project-roberto.jpeg";

const testimonials = [
  {
    id: 1,
    quote: "Gracias a Greenglo redujimos nuestra factura de luz en un 90%. La inversión se recuperó en menos de 3 años.",
    author: "Antonio Jose Coba",
    role: "Residente",
    company: "Conjunto Residencial los lagos",
    avatar: testimonialCarlos,
    project: {
      image: projectComercial,
      name: "Planta Residencial Solar",
      location: "Santa Marta, Magdalena",
      capacity: "9.3 kW",
      type: "Sistema Solar Fotovoltaico",
      savings: "95% Reducción",
      year: "2024",
    },
  },
  {
    id: 2,
    quote: "Excelente servicio desde la cotización hasta la instalación. El monitoreo remoto nos da tranquilidad total.",
    author: "María Flores Rojas",
    role: "Gerente",
    company: "Papeleria y Miscelánea tayrona",
    avatar: testimonialMaria,
    project: {
      image: projectResidencial,
      name: "Sistema comercial solar",
      location: "santa marta, Magdalena",
      capacity: "22 kW",
      type: "Sistema Solar Fotovoltaico",
      savings: "92% Ahorro",
      year: "2023",
    },
  },
  {
    id: 3,
    quote: "Los beneficios tributarios de la Ley 1715 hicieron que la inversión fuera mucho más atractiva. Gran asesoría.",
    author: "Roberto Pérez",
    role: "Director general",
    company: "clinica Solab",
    avatar: testimonialRoberto,
    project: {
      image: projectAgro,
      name: "sistema insdustrial solar",
      location: "Santa marta, Magdalena",
      capacity: "34 kW",
      type: "Sistema Solar Fotovoltaico",
      savings: "75% Ahorro",
      year: "2024",
    },
  },
];

const clients = [
  "Grupo Empresarial del Caribe",
  "Cooperativa de Caficultores",
  "Universidad del Valle",
  "Hospital San José",
  "Centro Comercial La Florida",
  "Alcaldía de Villavicencio",
];

// Sub-componente para la tarjeta de testimonio (DRY)
const TestimonialCard = ({ testimonial, onOpen }: { testimonial: typeof testimonials[0]; onOpen: (testimonial: typeof testimonials[0]) => void }) => (
  <div id="clientes" className="group relative flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100">
    {/* Icono de Comilla Decorativo */}
    <Quote className="absolute right-6 top-6 h-12 w-12 text-primary/10 rotate-180" />

    <div>
      {/* Header: Autor */}
      <div className="mb-6 flex items-center gap-4">
        <div className="relative">
          <img
            src={testimonial.avatar}
            alt={testimonial.author}
            className="h-16 w-16 rounded-full object-cover ring-2 ring-primary/20"
          />
          <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-[10px]">
            <Quote size={12} fill="currentColor" />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-900">{testimonial.author}</h4>
          <p className="text-xs font-medium uppercase tracking-wide text-primary">
            {testimonial.role}
          </p>
          <p className="text-xs text-gray-500">{testimonial.company}</p>
        </div>
      </div>

      {/* Quote Body */}
      <blockquote className="mb-6 text-gray-600 italic leading-relaxed relative z-10">
        "{testimonial.quote}"
      </blockquote>
    </div>

    {/* Footer: Action */}
    <div className="mt-auto border-t border-gray-100 pt-6">
      <Button
        variant="ghost"
        onClick={() => onOpen(testimonial)}
        className="group/btn w-full justify-between bg-gray-50 text-gray-700 hover:bg-primary hover:text-white transition-all"
      >
        <span className="flex items-center gap-2">
          <Eye className="h-4 w-4" />
          Ver Caso de Éxito
        </span>
        <span className="text-xs opacity-0 group-hover/btn:opacity-100 transition-opacity">
          Click para detalle
        </span>
      </Button>
    </div>
  </div>
);

export function ClientsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);

  return (
    <section id="clientes" className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Encabezado de Sección */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge text="Testimonios" variant="solar" className="mb-6 mx-auto" />
          <h2 className="mb-6 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Lo que dicen <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Nuestros Clientes</span>
          </h2>
          <p className="text-lg text-gray-600">
            Historias reales de ahorro y sostenibilidad implementadas por Greenglo en toda Colombia.
          </p>
        </div>

        {/* Grid de Testimonios */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              onOpen={setSelectedTestimonial}
            />
          ))}
        </div>

        {/* Sección de Logos de Clientes (Trust Strip) */}
        <div className="border-t border-gray-100 pt-16">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-400 mb-8">
            Empresas que confían en nosotros
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70 hover:opacity-100 transition-opacity">
            {clients.map((client, index) => (
              <div
                key={index}
                className="rounded-full bg-gray-50 px-6 py-3 text-sm font-bold text-gray-500 border border-gray-100 shadow-sm whitespace-nowrap"
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* MODAL / DIALOG - Rediseñado */}
        <Dialog
          open={!!selectedTestimonial}
          onOpenChange={(open) => !open && setSelectedTestimonial(null)}
        >
          <DialogContent className="max-w-3xl p-0 overflow-hidden bg-white rounded-3xl gap-0 border-0">
            {selectedTestimonial && (
              <div className="flex flex-col md:flex-row">
                
                {/* Columna Izquierda: Imagen */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                  <img
                    src={selectedTestimonial.project.image}
                    alt={selectedTestimonial.project.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <Badge text={selectedTestimonial.project.year} className="bg-white/20 text-white border-none backdrop-blur-md mb-2 self-start" />
                    <h3 className="text-white font-bold text-xl leading-tight">
                      {selectedTestimonial.project.name}
                    </h3>
                    <p className="text-gray-300 text-sm flex items-center gap-1 mt-1">
                      <MapPin size={14} />
                      {selectedTestimonial.project.location}
                    </p>
                  </div>
                </div>

                {/* Columna Derecha: Datos */}
                <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col">
                  <DialogHeader className="mb-6 text-left">
                    <DialogTitle className="text-2xl font-bold text-gray-900">
                      Detalles del Proyecto
                    </DialogTitle>
                    <p className="text-gray-500 text-sm">
                      Realizado para <span className="font-semibold text-primary">{selectedTestimonial.company}</span>
                    </p>
                  </DialogHeader>

                  {/* Grid de Estadísticas */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2 text-gray-700 mb-1">
                        <Zap size={16} strokeWidth={2} />
                        <span className="text-xs font-bold uppercase">Capacidad</span>
                      </div>
                      <p className="text-lg font-bold text-gray-900">{selectedTestimonial.project.capacity}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-accent/8 border border-accent/30">
                      <div className="flex items-center gap-2 text-accent mb-1">
                        <TrendingDown size={16} />
                        <span className="text-xs font-bold uppercase">Ahorro</span>
                      </div>
                      <p className="text-lg font-bold text-gray-900">{selectedTestimonial.project.savings}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 col-span-2">
                       <div className="flex items-center gap-2 text-gray-500 mb-1">
                        <Calendar size={16} />
                        <span className="text-xs font-bold uppercase">Tipo de Sistema</span>
                      </div>
                      <p className="font-medium text-gray-900">{selectedTestimonial.project.type}</p>
                    </div>
                  </div>

                  <div className="mt-auto">
                     <p className="text-sm text-gray-400 italic">
                        "{selectedTestimonial.quote}"
                     </p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
}