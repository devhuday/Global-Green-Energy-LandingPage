import './App.css'
import { Header } from './components/pages/Header';
import { Hero} from './components/pages/Hero';
import { ServicesSection } from './components/pages/ServicesG';
import { ClientsSection } from './components/pages/Clients';
import {AboutSection} from './components/pages/About';
import { ContactAdSection } from './components/pages/ContactAD';
import {SavingsChart} from './components/pages/SavingsCharts';
import { Footer } from './components/pages/Footer';
import { SolarCalculator } from './components/pages/SolarCalculator';
import { ContactForm } from './components/pages/Contact';
function App() {

  return (
    <>
      <Header />
      <Hero />
      <AboutSection /> 
      <ServicesSection />
      <ContactAdSection />
      <ClientsSection />
      <SavingsChart />
      <SolarCalculator />
      <ContactForm />
      <Footer/>
    </>
  )
}

export default App
