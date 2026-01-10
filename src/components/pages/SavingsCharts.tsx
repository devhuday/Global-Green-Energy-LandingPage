import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface SavingsCardProps {
  category: string;
  image: string;
  savingsPercentage: string;
  priceBefore: string;
  priceAfter: string;
  consumption: string;
  systemSize: string;
}

const SavingsCard: React.FC<SavingsCardProps> = ({
  category,
  image,
  savingsPercentage,
  priceBefore,
  priceAfter,
  consumption,
  systemSize,
}) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col transition-transform hover:scale-[1.02] duration-300">
      {/* Top Image Area */}
      
      <div className="relative h-56">
        <img src={image} alt={category} className="w-full h-full  object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
        
        {/* Savings Badge */}
        <div className="absolute top-4 right-4 bg-[#65a30d] text-white font-bold px-3 py-1 rounded-full text-lg shadow-lg">
          {savingsPercentage}
        </div>
        
        {/* Category Label */}
        <div className="absolute bottom-4 left-4 bg-[#65a30d] text-white font-semibold px-4 py-1 rounded-lg shadow-md text-sm">
          {category}
        </div>
      </div>

      {/* Pricing Area */}
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-gray-400 text-sm font-medium mb-1">Antes</p>
            <p className="text-[#e11d48] text-xl font-bold line-through tracking-tight">
              {priceBefore}
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm font-medium mb-1 text-right">Después</p>
            <p className="text-[#16a34a] text-2xl font-extrabold tracking-tight">
              {priceAfter}
            </p>
          </div>
        </div>

        {/* Specs Area */}
        <div className="mt-auto border-t border-gray-100 pt-6 grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-1">Consumo</p>
            <p className="text-gray-700 font-semibold text-sm">{consumption}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-1">Sistema</p>
            <p className="text-gray-700 font-semibold text-sm">{systemSize}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SavingsChart: React.FC = () => {
  const cards = [
    {
      category: 'Hogar',
      image: 'https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/DJI_20251024161539_0142_D%20(4).webp',
      savingsPercentage: '-95%',
      priceBefore: '$650.000',
      priceAfter: '$15.000',
      consumption: '900 kWh/mes',
      systemSize: '8 kWp',
    },
    {
      category: 'Comercio',
      image: 'https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/PlantaCigma.webp',
      savingsPercentage: '-95%',
      priceBefore: '$1.500.000',
      priceAfter: '$75.000',
      consumption: '1.300 kWh/mes',
      systemSize: '10 kWp',
    },
    {
      category: 'Industria',
      image: 'https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/20240319_101301%20(2).webp',
      savingsPercentage: '-80%',
      priceBefore: '$8.000.000',
      priceAfter: '$2.200.000',
      consumption: '5.500 kWh/mes',
      systemSize: '34 kWp',
    },
  ];

  return (
    <section id='proyectos' className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Calcula tu <span className="text-[#65a30d]">Ahorro Potencial</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed font-normal">
            Mira cómo nuestros clientes en Colombia han reducido significativamente sus facturas de energía con nuestras soluciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <SavingsCard key={index} {...card} />
          ))}
        </div>

        <div className="mt-16 text-center">
          
          <a
            href="https://wa.me/573136145611?text=Quiero%20una%20simulación%20de%20ahorro%20para%20mi%20negocio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all transform hover:scale-105 mb-2"
          >
            <FontAwesomeIcon icon={faWhatsapp} className='text-3xl' />
            Solicitar cotizacion Personalizada
          </a>
          <p className="text-gray-500 text-[10px] font-medium italic">
            * Valores estimados basados en el promedio de radiación solar en Colombia y tarifas vigentes. *
          </p>
        </div>
      </div>
    </section>
  );
};

