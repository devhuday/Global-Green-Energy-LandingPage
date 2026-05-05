import { useState } from 'react';
import { LandingPage } from '../components/calculator/pageCalculator';
import { CalculationModal } from '../components/calculator/calculationModal';
import { SolarReport } from '../components/calculator/solarReport';
import { calculateSolarReport } from '../utils/solarCalculations';

export const SolarApp = () => {
  const [step, setStep] = useState<'landing' | 'modal' | 'report'>('landing');
  const [formData, setFormData] = useState({ name: '', consumption: '' });
  const [results, setResults] = useState<any>(null);

  const handleCalculate = () => {
    const data = calculateSolarReport(Number(formData.consumption));
    setResults(data);
    setStep('report');
  };

  return (
    <>
      {step === 'landing' && <LandingPage onStart={() => setStep('modal')} />}
      <CalculationModal 
        isOpen={step === 'modal'} 
        onClose={() => setStep('landing')}
        onSubmit={handleCalculate}
        formData={formData}
        setFormData={setFormData}
      />
      {step === 'report' && <SolarReport data={results} onClose={() => setStep('landing')} />}
    </>
  );
};