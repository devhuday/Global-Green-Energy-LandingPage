import React, { useState, useEffect } from 'react';
import { 
  X, Zap, TrendingUp, Leaf, DollarSign, 
  BarChart3, Sun, Battery, ArrowRight, CheckCircle2,
  PiggyBank, ArrowUpRight, Home, UtilityPole, Lightbulb
} from 'lucide-react';
import { 
  Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Cell, Area, AreaChart, ComposedChart, ReferenceLine, LabelList
} from 'recharts';

// --- COMPONENTES AUXILIARES ---

const CustomBarLabel = (props: any) => {
  if (!props || !props.payload || !props.payload.annotation) return null;

  const { x, y, width, value, payload } = props;
  const yPosition = value >= 0 ? y - 10 : y + 20;
  
  return (
    <text 
      x={x + width / 2} 
      y={yPosition} 
      fill="#475569" 
      textAnchor="middle" 
      fontSize={11}
      fontWeight="600"
      dy={value >= 0 ? -5 : 12}
    >
      {payload.annotation}
    </text>
  );
};

// Componente Visualizador del Sistema (NUEVO)
const SystemVisualizer = ({ systemSize }: { systemSize: number }) => {
  const [scenario, setScenario] = useState<'surplus' | 'mixed' | 'night'>('surplus');

  // Configuración de estilos para las líneas según el escenario
  const getLineStyles = (path: 'solarToHome' | 'gridToHome' | 'solarToGrid') => {
    const baseStyle = "transition-all duration-00 stroke-2";
    const active = "stroke-emerald-400 stroke-dasharray-10 animate-flow";
    const passive = "stroke-slate-400";
    const gridActive = "stroke-blue-400 stroke-dasharray-10 animate-flow";

    switch (scenario) {
      case 'surplus':
        // Solar alimenta casa y sobra a la red
        if (path === 'solarToHome') return ` ${active}`;
        if (path === 'solarToGrid') return ` ${active}`;
        return `${baseStyle} `; // gridToHome inactivo
      case 'mixed':
        // Solar y Red alimentan casa
        if (path === 'solarToHome') return `${baseStyle} ${active}`;
        if (path === 'gridToHome') return `${baseStyle} ${gridActive}`;
        return `${baseStyle} ${passive}`;
      case 'night':
        // Solo Red alimenta casa
        if (path === 'gridToHome') return ` ${gridActive}`;
        return `${baseStyle} `;
      default:
        return baseStyle;
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Cómo funciona tu sistema</h3>
        <p className="text-slate-500 text-sm">Interactúa para ver el flujo de energía</p>
      </div>

      {/* Selector de Escenarios */}
      <div className="flex justify-center mb-10">
        <div className="bg-slate-100 p-1 rounded-xl inline-flex gap-1">
          {[
            { id: 'surplus', label: 'Generando Excedente' },
            { id: 'mixed', label: 'Uso Mixto' },
            { id: 'night', label: 'Noche' }
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setScenario(mode.id as any)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                scenario === mode.id 
                  ? 'bg-white text-emerald-600 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {/* Diagrama Visual */}
      <div className="relative max-w-lg mx-auto h-[280px]">
        {/* Estilos de animación inline para las líneas SVG */}
        <style>{`
          @keyframes flow {
            from { stroke-dashoffset: 20; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes flow-reverse {
            from { stroke-dashoffset: 0; }
            to { stroke-dashoffset: 20; }
          }
          .animate-flow { animation: flow 1s linear infinite; }
          .animate-flow-reverse { animation: flow-reverse 1s linear infinite; }
          .stroke-dasharray-10 { stroke-dasharray: 10; }
        `}</style>

        {/* SVG Container para las líneas */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* Trazados Base (Gris claro fondo) */}
          <path d="M 100 200 L 256 200 L 256 100" fill="none" stroke="#f1f5f9" strokeWidth="4" />
          <path d="M 412 200 L 256 200" fill="none" stroke="#f1f5f9" strokeWidth="4" />

          {/* Líneas Animadas */}
          {/* Solar -> Junction -> Home */}
          <path 
            d="M 100 200 L 256 200 L 256 100" 
            fill="none" 
            className={getLineStyles('solarToHome')}
            strokeWidth="2"
          />
          {/* Grid -> Junction -> Home */}
          <path 
            d="M 412 200 L 256 200 L 256 100" 
            fill="none" 
            className={getLineStyles('gridToHome')}
            strokeWidth="3"
          />
          {/* Solar -> Grid (Export) */}
          <path 
            d="M 100 200 L 412 200" 
            fill="none" 
            className={getLineStyles('solarToGrid')}
            strokeWidth="3"
            opacity={scenario === 'surplus' ? 1 : 0}
          />
        </svg>

        {/* Nodos (Iconos) */}
        
        {/* HOGAR (Top Center) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
          <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-100 mb-2">
            <Home className="text-white w-10 h-10" />
          </div>
          <span className="font-bold text-slate-700 text-sm pb-3 ">HOGAR</span>
        </div>

        {/* SOLAR (Bottom Left) */}
        <div className={`absolute bottom-0 left-0 flex flex-col items-center z-10 transition-opacity duration-300 ${scenario === 'night' ? 'opacity-40 grayscale' : 'opacity-100'}`}>
          <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-100 mb-2">
            <Sun className="text-white w-10 h-10" />
          </div>
          <span className="font-bold text-slate-700 text-sm">SOLAR</span>
          <span className="text-xs text-slate-500 font-mono">{systemSize} kWp</span>
        </div>

        {/* RED (Bottom Right) */}
        <div className="absolute bottom-0 right-0 flex flex-col items-center z-10">
          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg mb-2 transition-colors duration-300 ${scenario === 'surplus' ? 'bg-emerald-500 shadow-emerald-100' : 'bg-blue-500 shadow-blue-100'}`}>
            <UtilityPole className="text-white w-10 h-10" />
          </div>
          <span className="font-bold text-slate-700 text-sm">RED</span>
        </div>

      </div>
    </div>
  );
};

const formatCOP = (value: number) => 
  new Intl.NumberFormat('es-CO', { 
    style: 'currency', 
    currency: 'COP', 
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  }).format(value);

const formatCompact = (value: number) => {
  if (Math.abs(value) >= 1000000) {
    return `$${(value / 1000000).toFixed(0)}M`;
  }
  return `$${(value / 1000).toFixed(0)}k`;
};

// --- COMPONENTE PRINCIPAL ---

const SolarCalculator = () => {
  const [showModal, setShowModal] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [animateReport, setAnimateReport] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'hogar',
    consumption: '',
    city: ''
  });

  const [reportData, setReportData] = useState<any>(null);

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateReport = () => {
    if (!formData.consumption || isNaN(parseFloat(formData.consumption))) return;

    const consumption = parseFloat(formData.consumption);
    
    // Constantes de ingeniería
    const PANEL_WATTAGE = 620; 
    const HSP_AVG = 4.2; 
    const PERFORMANCE_RATIO = 0.90; 
    const ENERGY_PRICE = 1050; 
    const INFLATION_RATE = 0.06; 
    
    // Dimensionamiento
    const dailyConsumption = consumption / 30;
    const targetKwp = dailyConsumption / (HSP_AVG * PERFORMANCE_RATIO);
    const systemSize = Math.ceil(targetKwp * 10) / 10;
    
    const numPanels = Math.ceil((systemSize * 1000) / PANEL_WATTAGE);
    const areaRequired = Math.ceil(numPanels * 2.2); 
    
    // Financiero
    const installCost = systemSize * 3700000; 
    const monthlyBillBefore = consumption * ENERGY_PRICE;
    const solarGenerationMonthly = systemSize * HSP_AVG * 30 * PERFORMANCE_RATIO;
    const monthlySavingsInitial = Math.min(consumption, solarGenerationMonthly) * ENERGY_PRICE;
    
    const yearlySavingsInitial = monthlySavingsInitial * 12;
    
    // Proyección de Flujo de Caja Neto
    const cashFlowData = [];
    let accumulatedSavings = 0;
    let currentEnergyPrice = ENERGY_PRICE;
    let breakEvenYear = 0;
    const currentYear = new Date().getFullYear() + 1;

    for (let i = 0; i < 15; i++) { 
      const year = currentYear + i;
      let netFlow = 0;
      let annotation = null;

      if (i === 0) {
          const yearGeneration = (solarGenerationMonthly * 12);
          const yearSavings = yearGeneration * currentEnergyPrice;
          accumulatedSavings += yearSavings;
          netFlow = accumulatedSavings - installCost;
          annotation = "Inversión Inicial";
      } else {
          const yearGeneration = (solarGenerationMonthly * 12) * (1 - (0.005 * i));
          const yearSavings = yearGeneration * currentEnergyPrice;
          accumulatedSavings += yearSavings;
          
          currentEnergyPrice = currentEnergyPrice * (1 + INFLATION_RATE);
          netFlow = accumulatedSavings - installCost;

          if (netFlow >= 0 && breakEvenYear === 0) {
            breakEvenYear = i + 1; 
            const prevFlow = Math.abs(accumulatedSavings - yearSavings - installCost);
            const fraction = prevFlow / yearSavings;
            const months = Math.round(fraction * 12);
            annotation = `Retorno: ${i} años, ${months} m`;
          }
      }

      if (i === 14) {
          annotation = `Ahorro Neto: ${formatCompact(netFlow)}`;
      }

      cashFlowData.push({
        year: year.toString(),
        flujoNeto: netFlow,
        annotation: annotation,
      });
    }

    const roi = breakEvenYear > 0 ? (breakEvenYear).toFixed(1) : '>15';
    
    // Impacto
    const yearlyGeneration = solarGenerationMonthly * 12;
    const co2Saved = (yearlyGeneration * 0.475).toFixed(0);
    const treesEquivalent = Math.floor(parseFloat(co2Saved) / 20);

    // Datos Mensuales
    const monthlyData = [
      { month: 'Ene', solar: solarGenerationMonthly * 1.1, consumo: consumption },
      { month: 'Feb', solar: solarGenerationMonthly * 1.15, consumo: consumption },
      { month: 'Mar', solar: solarGenerationMonthly * 1.05, consumo: consumption },
      { month: 'Abr', solar: solarGenerationMonthly * 0.95, consumo: consumption },
      { month: 'May', solar: solarGenerationMonthly * 0.90, consumo: consumption },
      { month: 'Jun', solar: solarGenerationMonthly * 0.88, consumo: consumption },
      { month: 'Jul', solar: solarGenerationMonthly * 0.92, consumo: consumption },
      { month: 'Ago', solar: solarGenerationMonthly * 1.0, consumo: consumption },
      { month: 'Sep', solar: solarGenerationMonthly * 0.98, consumo: consumption },
      { month: 'Oct', solar: solarGenerationMonthly * 0.95, consumo: consumption },
      { month: 'Nov', solar: solarGenerationMonthly * 0.90, consumo: consumption },
      { month: 'Dic', solar: solarGenerationMonthly * 1.05, consumo: consumption },
    ];
    
    setReportData({
      systemSize,
      numPanels,
      areaRequired,
      installCost,
      monthlyBillBefore,
      yearlySavings: yearlySavingsInitial, 
      monthlySavings: monthlySavingsInitial,
      roi,
      co2Saved,
      treesEquivalent,
      cashFlowData,
      monthlyData,
      percentCovered: Math.min(100, Math.round((solarGenerationMonthly/consumption)*100))
    });
    
    setShowModal(false);
    setShowReport(true);
    setTimeout(() => setAnimateReport(true), 100);
  };

  const handleSubmit = () => {
    if (formData.name && formData.consumption) {
      calculateReport();
    }
  };

  return (
    <div className=" bg-slate-50 font-sans text-slate-900">
      {/* Landing Section */}
      <div className="flex flex-row items-center justify-center min-h-screen p-4 relative overflow-hidden gap-4">
        
        <div className="text-center z-10 max-w-3xl">
          
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight text-slate-900">
            Genera tu propia <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-accent">energía ilimitada</span>
          </h1>
          
          <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
            Descubre cuánto puedes ahorrar instalando paneles solares. Informe técnico detallado en segundos.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="group relative bg-slate-900 hover:bg-slate-800 text-white font-bold py-5 px-10 rounded-2xl text-xl shadow-2xl hover:shadow-emerald-500/20 transition-all transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <Zap className="text-accent group-hover:scale-110 transition-transform" fill="currentColor" />
              <span>Calcular mi Ahorro</span>
              <ArrowRight className="opacity-50 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
        <div className='hidden md:flex'>
          <img 
          src="https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/solap_1.webp" 
          alt="" 
          className='relative w-full max-w-md object-cover lg:max-w-md rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] aspect-4/3 lg:aspect-square'
          />
        </div>
      </div>

      {/* Input Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-2 z-40 animate-in fade-in duration-200">
          <div className="bg-white rounded-4xl max-w-lg w-full p-8 shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={20} className="text-slate-400" />
            </button>
            
            <div className="mb-8">
              <div className="w-12 h-12 bg-accent-act rounded-xl flex items-center justify-center mb-4 text-accent-soft">
                <Sun size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Datos del Proyecto</h2>
              <p className="text-slate-500">Configura los parámetros para tu simulación.</p>
            </div>
            
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Ciudad</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                        placeholder="Ej: Santa Marta"
                    />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Consumo Promedio (kWh)</label>
                <div className="relative">
                  <input
                    type="number"
                    name="consumption"
                    value={formData.consumption}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pl-12 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all font-mono text-lg"
                    placeholder="0"
                  />
                  <Zap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium">kWh/mes</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">Puedes encontrar este dato en tu factura de energía.</p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={!formData.consumption}
                  className="w-full bg-emerald-600 disabled:bg-slate-200 disabled:text-slate-400 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2"
                >
                  <BarChart3 size={20} />
                  Generar Informe Técnico
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Report View */}
      {showReport && reportData && (
        <div className="fixed inset-0 bg-slate-100/90 backdrop-blur-sm z-50 overflow-y-auto">
          <div className={`min-h-screen transition-all duration-700 ${animateReport ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Header */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-40 bg-opacity-90 backdrop-blur-md">
              <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                        <Zap className="text-emerald-600" />
                    </div>
                    <div>
                        <h2 className="text-slate-900 font-bold text-lg">Informe de Viabilidad Solar</h2>
                        <p className="text-slate-500 text-sm">Proyecto para: <span className="font-semibold">{formData.name}</span></p>
                    </div>
                </div>
                <button
                  onClick={() => setShowReport(false)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-600 p-2 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="max-w-7xl mx-auto p-6 pb-20 space-y-8">
              
              {/* KPIs */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Card 1 */}
                <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group hover:border-emerald-200 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <PiggyBank size={80} className="text-emerald-500" />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-emerald-100 p-2.5 rounded-xl text-emerald-600"><DollarSign size={20} /></div>
                        <span className="font-bold text-slate-600">Ahorro Anual Estimado</span>
                    </div>
                    <div className="text-4xl font-black mb-2 text-slate-900 tracking-tight">
                        {formatCOP(reportData.yearlySavings)}
                    </div>
                    <div className="flex items-center gap-1 text-sm font-semibold text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded-full">
                        <ArrowUpRight size={14} />
                        <span>Proyección Año 1</span>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600"><TrendingUp size={20} /></div>
                        <span className="font-bold text-slate-600">Retorno de Inversión</span>
                    </div>
                    <div className="text-4xl font-black mb-2 text-slate-900">
                        {reportData.roi} <span className="text-xl text-slate-400 font-bold">Años</span>
                    </div>
                    <div className="text-sm text-slate-500">Punto de equilibrio financiero</div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-amber-50 p-2.5 rounded-xl text-amber-500"><Sun size={20} /></div>
                        <span className="font-bold text-slate-600">Potencia Sistema</span>
                    </div>
                    <div className="text-4xl font-black mb-2 text-slate-900">
                        {reportData.systemSize} <span className="text-xl text-slate-400 font-bold">kWp</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-500">
                        <CheckCircle2 size={14} className="text-emerald-500"/> 
                        <span>Cubre {reportData.percentCovered}% de tu consumo</span>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-indigo-50 p-2.5 rounded-xl text-indigo-500"><Battery size={20} /></div>
                        <span className="font-bold text-slate-600">Equipamiento</span>
                    </div>
                    <div className="text-4xl font-black mb-2 text-slate-900">
                        {reportData.numPanels} <span className="text-xl text-slate-400 font-bold">Paneles</span>
                    </div>
                    <div className="text-sm text-slate-500">Espacio requerido: ~{reportData.areaRequired} m²</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Gráfico de Flujo de Caja */}
                <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-center mb-10">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">Ahorros Totales Acumulados</h3>
                            <p className="text-slate-500 text-sm">Proyección a 15 años comparando inversión vs. energía generada</p>
                        </div>
                    </div>
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart 
                                data={reportData.cashFlowData}
                                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis 
                                    dataKey="year" 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{fill: '#64748b', fontSize: 12}} 
                                    dy={10} 
                                />
                                <YAxis 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{fill: '#64748b', fontSize: 11}}
                                    tickFormatter={formatCompact}
                                />
                                <Tooltip 
                                    cursor={{fill: '#f8fafc'}}
                                    contentStyle={{backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', color: '#1e293b', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                                    itemStyle={{color: '#1e293b', fontWeight: 'bold'}}
                                    formatter={(val: number | undefined) => val !== undefined ? [formatCOP(val), 'Flujo Neto'] : ['', 'Flujo Neto']}
                                />
                                <ReferenceLine y={0} stroke="#cbd5e1" />
                                <Bar dataKey="flujoNeto" radius={[4, 4, 4, 4]} barSize={24}>
                                    {reportData.cashFlowData.map((entry: any, index: number) => (
                                        <Cell 
                                            key={`cell-${index}`} 
                                            fill={entry.flujoNeto < 0 ? '#cbd5e1' : '#10b981'} 
                                        />
                                    ))}
                                    <LabelList dataKey="annotation" content={<CustomBarLabel />} />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Columna Derecha */}
                <div className="space-y-6">
                    
                    {/* Impacto Ambiental */}
                    <div className="bg-emerald-50/50 rounded-3xl p-8 border border-emerald-100">
                        <h3 className="font-bold text-emerald-900 mb-6 flex items-center gap-2">
                            <Leaf size={20} className="text-emerald-600"/> Impacto Ambiental
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-emerald-50">
                                <span className="text-3xl">🌲</span>
                                <div>
                                    <div className="text-2xl font-bold text-slate-900">{reportData.treesEquivalent}</div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">Árboles Plantados</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-emerald-50">
                                <span className="text-3xl">☁️</span>
                                <div>
                                    <div className="text-2xl font-bold text-slate-900">{reportData.co2Saved} kg</div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">CO2 Evitado / Año</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Resumen Económico */}
                    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -mr-4 -mt-4"></div>
                        <h3 className="font-bold text-slate-900 mb-6 relative z-10">Resumen Financiero</h3>
                        
                        <div className="space-y-4 relative z-10">
                            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                                <span className="text-slate-500 text-sm">Inversión Estimada</span>
                                <span className="font-bold text-slate-900">{formatCOP(reportData.installCost)}</span>
                            </div>
                            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                                <span className="text-slate-500 text-sm">Factura Promedio Actual</span>
                                <span className="font-semibold text-red-500">{formatCOP(reportData.monthlyBillBefore)}</span>
                            </div>
                            
                            <div className="pt-2 bg-slate-50 p-4 rounded-xl mt-2">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-slate-600 text-sm font-medium">Nueva Factura Estimada</span>
                                </div>
                                <div className="flex justify-between items-end">
                                    <span className="text-xs text-slate-400">Mensual aprox.</span>
                                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                                        {formatCOP(Math.max(0, reportData.monthlyBillBefore - reportData.monthlySavings))}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grafico Generación Mensual */}
                <div className="lg:col-span-3 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">Producción Solar vs. Consumo</h3>
                            <p className="text-slate-500 text-sm">Comportamiento estimado durante un año típico</p>
                        </div>
                        <div className="flex gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-1 bg-emerald-500/20 border-t-2 border-emerald-500 rounded"></div>
                                <span className="font-bold text-slate-600">Generación Solar</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <div className="w-8 h-1 bg-slate-200 border-t-2 border-slate-400 border-dashed rounded"></div>
                                <span className="font-bold text-slate-600">Tu Consumo</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={reportData.monthlyData}>
                                <defs>
                                    <linearGradient id="colorSolar" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                                <YAxis hide />
                                <Tooltip 
                                    contentStyle={{backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                                    formatter={(val: number | undefined) => val !== undefined ? [`${Math.round(val)} kWh`, ''] : ['', '']}
                                />
                                <Area type="monotone" dataKey="solar" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorSolar)" name="Generación" />
                                <Line type="monotone" dataKey="consumo" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Consumo" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* NUEVA SECCIÓN: Visualizador del Sistema */}
                <div className="lg:col-span-3">
                  <SystemVisualizer systemSize={reportData.systemSize} />
                </div>

              </div>

              {/* Footer Gradient Claro */}
              <div className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl shadow-slate-200">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-400 to-transparent"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para comenzar a ahorrar?</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Esta simulación es un estimado preliminar. Agenda una visita técnica gratuita para validar tu estructura.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-10 rounded-xl transition-all hover:scale-105 shadow-lg shadow-emerald-500/30">
                            Agendar Visita Técnica
                        </button>
                        <button 
                            onClick={() => window.print()}
                            className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-xl transition-all border border-white/20 backdrop-blur-sm"
                        >
                            Descargar PDF
                        </button>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export {SolarCalculator};