import React, { useState } from "react";
import { Phone, Mail, User, MessageSquare, ArrowUp } from "lucide-react";
import { WpButton } from "../ui/buttonWhatsapp";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.whatsapp) {
      console.log("Form submitted:", formData);
      alert(
        "¡Gracias por tu interés! Nos pondremos en contacto contigo pronto."
      );
      setFormData({ name: "", email: "", whatsapp: "" });
    } else {
      alert("Por favor completa todos los campos");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-full flex md:grid flex-col md:grid-cols-2 items-center justify-center bg-gray-800 p-8 pb-12  overflow-hidden">
      {/* Solar Panel Background with Gradient Overlay */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />

      <div>
        <div className="flex flex-col max-w-lg mx-auto mb-12 relative z-10">
          <div className="justify-center text-center">
            <h2 className="text-4xl md:text-4xl lg:text-6xl font-heading font-bold text-background mb-6">
              ¿Listo para Comenzar tu
              <span className="text-green-400 block">
                Transición Energética?
              </span>
            </h2>
            <p className="text-lg text-green-100/80 mb-8">
              Solicita tu cotización gratuita y un asesor especializado te
              contactará en menos de 24 horas. Sin compromiso.
            </p>

            <WpButton
              variant="neonWhite"
              className="w-full sm:w-auto shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="relative z-20 w-full max-w-md">
        <div className="bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-700/50">
          {/* Header */}
          <div className="mb-6">
            <div className="inline-block bg-green-600 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-lg mb-4 uppercase tracking-wide">
              Contáctanos Gratis
            </div>
            <p className="text-white/80 text-sm sm:text-base flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-400" />
              <a
                href="https://wa.me/573136145611?text=Quiero%20una%20simulación%20de%20ahorro%20para%20mi%20negocio"
                className="hover:text-green-400 transition-colors"
              >
                +57 3136145611
              </a>
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="sr-only">
                Tu Nombre
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu Nombre"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-12 pr-4 py-3 sm:py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="sr-only">
                Tu Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Tu Email"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-12 pr-4 py-3 sm:py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* WhatsApp Input */}
            <div>
              <label htmlFor="whatsapp" className="sr-only">
                WhatsApp
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="Número de WhatsApp"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-12 pr-4 py-3 sm:py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 sm:py-4 px-6 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-green-500/50 text-base sm:text-lg"
            >
              Solicitar Ahora
            </button>
          </div>

          {/* Additional Info */}
          <p className="text-gray-400 text-xs sm:text-sm text-center mt-6">
            🌞 Ahorra hasta un 95% en tu factura eléctrica con energía solar
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all transform hover:scale-110 z-30"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
}
