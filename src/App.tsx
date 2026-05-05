import './App.css'
import { Header } from './pages/Header';
import { Hero} from './pages/Hero';
import { ServicesSection } from './pages/Services';
import { ClientsSection } from './pages/Clients';
import {AboutSection} from './pages/About';
import { ContactAdSection } from './pages/ContactAD';
import {ProyectsClients} from './pages/Proyects';
import { Footer } from './pages/Footer';
import { SolarCalculator } from './pages/SolarCalculator';
import { ContactForm } from './pages/Contact';
function App() {

  return (
    <>
      <Header />
      <Hero />
      <AboutSection /> 
      <ServicesSection />
      <ContactAdSection />
      <ClientsSection />
      <ProyectsClients />
      <SolarCalculator />
      <ContactForm />
      <Footer/>
    </>
  )
}

export default App
