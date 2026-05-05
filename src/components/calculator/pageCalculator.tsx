import { Zap, ArrowRight } from 'lucide-react';
import Badge from '../ui/Badge';

const LandingPage = ({ onStart }: { onStart: () => void }) => (
  <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] p-6 gap-8">
    <div className="text-center md:text-start max-w-2xl">
      <Badge text="calcula tu ahorro" variant="solar" className="mb-4" />
      <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-slate-900">
        Genera tu propia <span className="text-emerald-600">energía ilimitada</span>
      </h1>
      <p className="text-xl text-slate-500 mb-10">
        Descubre cuánto puedes ahorrar instalando paneles solares en segundos.
      </p>
      <button onClick={onStart} className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-5 px-10 rounded-2xl text-xl shadow-xl transition-all flex items-center gap-4 mx-auto md:mx-0">
        <Zap fill="currentColor" />
        <span>Calcular mi Ahorro</span>
        <ArrowRight className="opacity-50" />
      </button>
    </div>
    <img 
      src="https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/solap_1.webp" 
      className="hidden md:block w-full max-w-md rounded-3xl shadow-2xl object-cover aspect-square" 
    />
  </div>
);

export { LandingPage };