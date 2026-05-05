// --- Lógica de Negocio y Cálculos ---

export const calculateSolarReport = (consumption: number) => {
  // Constantes de ingeniería
  const PANEL_WATTAGE = 620; 
  const HSP_AVG = 4.2; 
  const PERFORMANCE_RATIO = 0.90; 
  const ENERGY_PRICE = 1055; 
  const INFLATION_RATE = 0.06; 
  
  // Dimensionamiento
  const dailyConsumption = consumption / 30;
  const targetKwp = dailyConsumption / (HSP_AVG * PERFORMANCE_RATIO);
  const systemSize = Math.ceil(targetKwp * 10) / 10;
  
  const numPanels = Math.ceil((systemSize * 1000) / PANEL_WATTAGE);
  const areaRequired = Math.ceil(numPanels * 2.2); 
  
  // Financiero
  const installCost = systemSize * 4500000; 
  const monthlyBillBefore = consumption * ENERGY_PRICE;
  const solarGenerationMonthly = systemSize * HSP_AVG * 30 * PERFORMANCE_RATIO;
  const monthlySavingsInitial = Math.min(consumption, solarGenerationMonthly) * ENERGY_PRICE;
  
  const yearlySavingsInitial = monthlySavingsInitial * 12;
  
  // Proyección de Flujo de Caja
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
        accumulatedSavings += (solarGenerationMonthly * 12) * currentEnergyPrice;
        netFlow = accumulatedSavings - installCost;
        annotation = "Inversión Inicial";
    } else {
        const yearGeneration = (solarGenerationMonthly * 12) * (1 - (0.005 * i));
        const yearSavings = yearGeneration * currentEnergyPrice;
        accumulatedSavings += yearSavings;
        currentEnergyPrice *= (1 + INFLATION_RATE);
        netFlow = accumulatedSavings - installCost;

        if (netFlow >= 0 && breakEvenYear === 0) {
          breakEvenYear = i + 1;
          annotation = `Retorno: ${i} años`;
        }
    }
    cashFlowData.push({ year: year.toString(), flujoNeto: netFlow, annotation });
  }

  // Datos Mensuales para Gráfico
  const monthlyData = Array.from({ length: 12 }, (_, i) => ({
    month: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'][i],
    solar: solarGenerationMonthly * (0.9 + Math.random() * 0.2), // Simulación de varianza
    consumo: consumption
  }));

  return {
    systemSize, numPanels, areaRequired, installCost,
    monthlyBillBefore, yearlySavings: yearlySavingsInitial,
    monthlySavings: monthlySavingsInitial, roi: breakEvenYear || '>15',
    co2Saved: (solarGenerationMonthly * 12 * 0.475).toFixed(0),
    treesEquivalent: Math.floor((solarGenerationMonthly * 12 * 0.475) / 20),
    cashFlowData, monthlyData,
    percentCovered: Math.min(100, Math.round((solarGenerationMonthly/consumption)*100))
  };
};

export const formatCOP = (value: number) => 
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value);