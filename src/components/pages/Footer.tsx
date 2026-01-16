import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const logoUrl = "https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/LogoGreenglo2.webp"; // Icon only logo

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
               <img src={logoUrl} alt="Greenglo Logo" className="h-12 w-auto" />
               
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Global Green Energy SAS. Impulsamos el futuro sostenible de Colombia mediante soluciones de energía renovable innovadoras y accesibles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-green-600 transition-colors text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-green-600 transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-green-600 transition-colors text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='hidden md:block'>
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-green-500 inline-block pb-1">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-gray-400 hover:text-green-400 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-green-400 transition-colors">Servicios</a></li>
              <li><a href="#beneficios" className="text-gray-400 hover:text-green-400 transition-colors">Beneficios Legales</a></li>
              <li><a href="#proyectos" className="text-gray-400 hover:text-green-400 transition-colors">Proyectos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Política de Datos</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div className='hidden md:block'>
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-green-500 inline-block pb-1">Servicios</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Paneles Solares On-Grid</li>
              <li className="text-gray-400">Sistemas Híbridos</li>
              <li className="text-gray-400">Energía Eólica</li>
              <li className="text-gray-400">Bombeo Solar</li>
              <li className="text-gray-400">Mantenimiento O&M</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='hidden md:block'>
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-green-500 inline-block pb-1">Contáctanos</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-green-500 mt-1 shrink-0" size={20} />
                <span className="text-gray-400">Calle 9 # 14-74, Comuna 3, Santa Marta, Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-green-500 shrink-0" size={20} />
                <span className="text-gray-400">+57 3136145611</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-green-500 shrink-0" size={20} />
                <span className="text-gray-400">gerencia@greenglo.com.co</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Global Green Energy SAS (Greenglo). Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export {Footer};