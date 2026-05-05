// 
import { X, TrendingUp, Sun, Battery, DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { formatCOP } from '../../utils/solarCalculations';

const SolarReport = ({ data, onClose }: any) => (
  <div className="fixed inset-0 bg-slate-100 z-50 overflow-y-auto p-6">
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header con botón cerrar */}
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Informe Técnico</h2>
        <button onClick={onClose} className="p-2 bg-slate-100 rounded-full"><X /></button>
      </div>

      {/* Grid de KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KPICard title="Ahorro Anual" value={formatCOP(data.yearlySavings)} icon={<DollarSign />} color="emerald" />
        <KPICard title="Retorno" value={`${data.roi} Años`} icon={<TrendingUp />} color="blue" />
        <KPICard title="Sistema" value={`${data.systemSize} kWp`} icon={<Sun />} color="amber" />
        <KPICard title="Paneles" value={`${data.numPanels} Und`} icon={<Battery />} color="indigo" />
      </div>

      {/* Gráfico de Flujo de Caja */}
      <div className="bg-white p-8 rounded-3xl shadow-sm h-[400px]">
        <h3 className="font-bold mb-6">Proyección de Ahorro a 15 Años</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.cashFlowData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis tickFormatter={(v) => `$${v/1000000}M`} />
            <Tooltip />
            <Bar dataKey="flujoNeto">
              {data.cashFlowData.map((entry: any, i: number) => (
                <Cell key={i} fill={entry.flujoNeto < 0 ? '#cbd5e1' : '#10b981'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

const KPICard = ({ title, value, icon }: any) => (
  <div className="bg-white p-6 rounded-3xl shadow-sm border-b-4 border-emerald-500">
    <div className="flex items-center gap-3 text-slate-500 mb-2">{icon} <span className="text-sm font-bold">{title}</span></div>
    <div className="text-3xl font-black">{value}</div>
  </div>
);

export {SolarReport};