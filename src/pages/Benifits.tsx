import { ArrowUpRight, Leaf, Droplets, Sun, Calendar } from 'lucide-react';


const WhyChooseUs = () => {
  return (
    <section className="bg-[#052e16] py-12 lg:py-20 px-4 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section: Más compacto en móvil */}
        <div className="text-center mb-10 lg:mb-16 px-2">
          <span className="text-green-400 font-medium text-sm lg:text-lg tracking-wide uppercase">
            ¿Por qué elegir GreenGlo?
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mt-3 leading-tight">
            Confianza en Energía <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-600">
              Renovable
            </span>
          </h2>
        </div>

        {/* CONTENEDOR HÍBRIDO:
           - Móvil: flex + overflow-x-auto (Scroll horizontal)
           - Desktop (lg): grid (Rejilla estática)
        */}
        <div className="
          flex flex-col gap-6 
          lg:grid lg:grid-cols-4 lg:items-stretch
        ">
          
          {/* Bloque 1: Texto Intro + CTA (Siempre visible arriba en móvil) */}
          <div className="flex flex-col justify-center lg:pr-8 space-y-6 lg:space-y-8 text-center lg:text-left mb-4 lg:mb-0">
            <h3 className="text-2xl lg:text-3xl font-semibold text-white leading-snug">
              Energía eficiente, <br className="lg:hidden"/> inteligente y sostenible.
            </h3>
            
            <button className="group flex items-center justify-between bg-green-600 hover:bg-green-500 text-white font-medium py-3 px-5 lg:py-4 lg:px-6 rounded-full transition-all duration-300 w-full lg:max-w-xs shadow-[0_0_20px_rgba(34,197,94,0.3)] mx-auto lg:mx-0">
              <span>Agendar Cita</span>
              <span className="bg-white/20 p-1.5 lg:p-2 rounded-full group-hover:bg-white/30 transition-colors">
                <ArrowUpRight size={18} />
              </span>
            </button>
          </div>

          {/* WRAPPER DEL SCROLL HORIZONTAL (Solo afecta a móvil/tablet)
             En desktop se comporta como un fragmento normal del grid.
          */}
          <div className="
            flex gap-4 overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 
            lg:contents lg:pb-0 lg:mx-0 lg:px-0
            scrollbar-hide
          ">
            
            {/* Tarjeta 1: Ahorro */}
            <div className="
              min-w-[85%] md:min-w-[45%] lg:min-w-0 lg:w-auto 
              snap-center 
              bg-white rounded-3xl p-6 lg:p-8 
              flex flex-col justify-between 
              hover:-translate-y-2 transition-transform duration-300 shadow-xl
            ">
              <div>
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 lg:mb-6">
                  <Leaf className="text-green-600" size={20} />
                </div>
                <p className="text-gray-600 text-base lg:text-lg mb-1 leading-tight">
                  Ahorra costos hasta un
                </p>
                <h4 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-1">70%</h4>
                <p className="text-xs text-gray-500">del valor de referencia</p>
              </div>
              
              <div className="mt-6 lg:mt-8">
                <span className="text-4xl lg:text-5xl font-bold text-gray-900 block mb-4 lg:mb-6">89.0%</span>
                <div className="inline-block bg-blue-100 text-blue-800 text-[10px] lg:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Salud del Suelo
                </div>
              </div>
            </div>

            {/* Tarjeta 2: Eficiencia Hídrica (Highlight) */}
            <div className="
              min-w-[85%] md:min-w-[45%] lg:min-w-0 lg:w-auto 
              snap-center
              bg-linear-to-br from-green-500 to-emerald-600 rounded-3xl p-6 lg:p-8 
              flex flex-col justify-between text-white 
              shadow-[0_10px_30px_rgba(16,185,129,0.4)]
            ">
              <div>
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 lg:mb-6 backdrop-blur-sm">
                  <Droplets className="text-white" size={20} />
                </div>
                <p className="text-green-50 text-base lg:text-lg mb-2 leading-tight">
                  Pivote central
                </p>
                <h4 className="text-2xl lg:text-3xl font-bold leading-tight">
                  Hasta 84% <br/> Ahorro de Agua
                </h4>
              </div>

              <div className="mt-6 lg:mt-8">
                <div className="border border-white/30 rounded-xl p-3 lg:p-4 backdrop-blur-md bg-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Profundidad Veter</span>
                  <div className="h-1 w-full bg-white/30 mt-2 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-3/4 rounded-full"></div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                   <Leaf size={14} />
                   <span className="text-xs lg:text-sm font-medium">100% Natural</span>
                </div>
              </div>
            </div>

            {/* Tarjeta 3: Panel Solar */}
            <div className="
              min-w-[85%] md:min-w-[45%] lg:min-w-0 lg:w-auto 
              snap-center
              bg-white rounded-3xl p-4 
              flex flex-col shadow-xl
            ">
              <div className="flex justify-between items-center mb-3 px-1">
                 <Sun className="text-yellow-500" size={20}/>
                 <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                   Radiación
                 </span>
              </div>
              
              <div className="relative grow rounded-xl overflow-hidden mb-3 h-40 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=3272&auto=format&fit=crop" 
                  alt="Panel Solar" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-mono text-gray-800 flex items-center gap-1 shadow-sm">
                   <Calendar size={10}/> 27/12/25
                </div>
              </div>

              <div className="px-1 pb-1">
                <p className="text-gray-500 text-[10px] mb-0.5">Captación actual</p>
                <h4 className="text-xl lg:text-2xl font-bold text-gray-900 truncate">10M LUX</h4>
              </div>
            </div>

            {/* Spacer invisible para dar aire al final del scroll en móvil */}
            <div className="min-w-4 lg:hidden"></div>

          </div>
        </div>
      </div>
      
      {/* Estilo inline para ocultar scrollbar si no usas plugin */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};


export { WhyChooseUs as BenefitsSection };