import './App.css'
import { useVisibleSections } from './lib/IntersectionObserver';
import { Header } from './components/Header';
import { Hero} from './components/Hero';
import { ServicesSection } from './components/ServicesG';
import { BenefitsSection } from './components/Benifits';
import { ClientsSection } from './components/Clients';
import {AboutSection} from './components/About';
import { ContactAdSection } from './components/ContactAD';
import {SavingsChart} from './components/SavingsCharts';
import { Footer } from './components/Footer';
function App() {
  const visibleSections = useVisibleSections();
  interface ScrollableElement extends HTMLElement{
    getBoundingClientRect(): DOMRect;
  }
  const scrollToSection = (id: string): void => {
    const element: ScrollableElement | null = document.getElementById(id) as ScrollableElement;
    if (element) {
        const offset: number = 80;
        const elementPosition: number = element.getBoundingClientRect().top;
        const offsetPosition: number = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};
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
