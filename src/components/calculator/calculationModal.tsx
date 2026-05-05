import { X, Sun, Zap, BarChart3 } from 'lucide-react';

const CalculationModal = ({ isOpen, onClose, onSubmit, formData, setFormData }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 relative">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600">
          <X size={24} />
        </button>
        <div className="mb-8 text-center">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Sun size={24} />
          </div>
          <h2 className="text-2xl font-bold">Datos del Proyecto</h2>
        </div>
        <div className="space-y-4">
          <input 
            type="text" placeholder="Nombre" 
            className="w-full px-4 py-3 bg-slate-50 border rounded-xl"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <div className="relative">
            <input 
              type="number" placeholder="Consumo mensual (kWh)" 
              className="w-full px-4 py-3 pl-12 bg-slate-50 border rounded-xl font-mono text-lg"
              onChange={(e) => setFormData({...formData, consumption: e.target.value})}
            />
            <Zap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          </div>
          <button 
            onClick={onSubmit}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2"
          >
            <BarChart3 size={20} /> Generar Informe
          </button>
        </div>
      </div>
    </div>
  );
};

export {CalculationModal};