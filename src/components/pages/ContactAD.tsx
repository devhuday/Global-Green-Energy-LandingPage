import { WpButton } from "../ui/buttonWhatsapp"; // Asegúrate de que la ruta sea correcta

export const ContactAdSection = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden">
      
      {/* Fondo con degradado sutil y patrón decorativo */}
      <div className="absolute inset-0 bg-slate-900 -z-10" />
      
      {/* Contenedor Principal: Aumentado a max-w-6xl para dar espacio a las 2 columnas */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* GRID: 1 columna en móvil, 2 columnas en desktop (lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* COLUMNA 1: Contenido de Texto */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-10 space-y-5">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-100 tracking-tight leading-tight">
                ¿Tienes dudas sobre tu <br className="hidden lg:block" />
                <span className="text-accent-solar-hover">proyecto solar?</span>
              </h2>
              <p className="text-lg text-gray-100 max-w-2xl mx-auto lg:mx-0">
                No estás solo en esto. Nuestros ingenieros expertos están disponibles 
                para asesorarte y encontrar la solución energética perfecta para ti.
              </p>
            </div>

            {/* Botón y texto de confianza */}
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <WpButton 
                variant="outline" 
                className="w-full sm:w-auto shadow-xl" 
              />
              
              <p className="flex items-center gap-2 text-sm text-accent-solar-hover font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Respuesta en menos de 1 minuto
              </p>
            </div>
          </div>

          {/* COLUMNA 2: Imagen (Link añadido) */}
          <div className="hidden relative order-1 lg:order-2 md:flex justify-center lg:justify-end">
            {/* Elemento decorativo detrás de la imagen */}
            <div className="absolute -inset-4 bg-green-200/30 rounded-full blur-2xl -z-10 transform translate-x-4 translate-y-4"></div>
            
            <img
              src="https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/IMG_20240311_113605.webp" 
              alt="Ingeniero de Greenglo asesorando"
              className="relative w-full max-w-md object-cover lg:max-w-md rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] aspect-4/3 lg:aspect-square"
            />
          </div>

        </div>
      </div>
    </section>
  );
};