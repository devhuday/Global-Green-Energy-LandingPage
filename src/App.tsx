import './App.css'
import { Header } from './components/Header';
import { Hero} from './components/Hero';
import { ServicesSection } from './components/ServicesG';
import { ClientsSection } from './components/Clients';
import {AboutSection} from './components/About';
import { ContactAdSection } from './components/ContactAD';
import {SavingsChart} from './components/SavingsCharts';
import { Footer } from './components/Footer';
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
      <Footer/>
    </>
  )
}

export default App
