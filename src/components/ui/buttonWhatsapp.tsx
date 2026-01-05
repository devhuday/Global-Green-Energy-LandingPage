

type ButtonVariant = 'outline' | 'neon' | 'blue' | 'minimal' | 'neonWhite';

interface WpButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
  
  variant?: ButtonVariant;
  title?: string;
  subtitle?: string;
}

// Iconos (Separados para limpieza)
const ArrowForwardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// 2. Configuración de estilos por variante
const variantStyles = {
  outline: {
    container: "bg-white rounded-2xl hover:bg-gray-50 border-2 border-primary hover:border-green-600 text-gray-900 shadow-lg hover:shadow-xl",
    iconBg: "bg-primary group-hover:bg-green-600 text-white",
    titleColor: "text-gray-900",
    subtitleColor: "text-gray-600",
    arrowColor: "text-primary group-hover:text-green-600",
    hasGlow: false,
  },
  neon: {
    container: "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white shadow-lg hover:shadow-2xl hover:shadow-green-500/20 ring-1 ring-green-500/30 hover:ring-green-400/50",
    iconBg: "bg-green-500/20 group-hover:bg-green-500/30 ring-1 ring-green-500/50 text-green-400",
    titleColor: "text-white",
    subtitleColor: "text-green-400",
    arrowColor: "text-green-400",
    hasGlow: true,
  },
  neonWhite: {
    container: "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-900 hover:to-black text-white shadow-lg hover:shadow-2xl hover:shadow-accent/20 ring-1 ring-accent/30 hover:ring-accent/50",
    iconBg: "bg-accent/20 group-hover:bg-accent/30 ring-1 ring-accent/50 text-accent-solar",
    titleColor: "text-white",
    subtitleColor: "text-accent-solar",
    arrowColor: "text-accent-solar",
    hasGlow: true,
  },
  blue: {
    container: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl",
    iconBg: "bg-white/20 group-hover:bg-white/30 text-white",
    titleColor: "text-white",
    subtitleColor: "text-white/90",
    arrowColor: "text-white",
    hasGlow: false,
  },
  minimal: {
    container: "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300 shadow-md hover:shadow-lg",
    iconBg: "bg-green-500 text-white",
    titleColor: "text-gray-900",
    subtitleColor: "text-gray-600",
    arrowColor: "text-gray-600",
    hasGlow: false,
  }
};

export const WpButton = ({
  phoneNumber = "573136145611",
  message = "Hola! Me gustaría obtener más información sobre sus servicios de energía solar.",
  variant = "outline", // Variante por defecto
  title = "Contactar por WhatsApp",
  subtitle = "Chatea con nosotros",
  className = "",
}: WpButtonProps) => {
  
  const styles = variantStyles[variant];

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className={`
        group relative overflow-hidden
        rounded-full px-8 py-4
        flex items-center gap-4
        w-full max-w-md
        transform hover:scale-105
        transition-all duration-300 ease-out
        ${styles.container}
        ${className}
      `}
    >
      {/* Efecto Glow (Solo para neon) */}
      {styles.hasGlow && (
        <div className="absolute inset-0 bg-linear-to-r from-green-500/0 via-green-500/10 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}

      {/* Icono */}
      <div className={`shrink-0 rounded-full p-2 transition-colors ${styles.iconBg} relative z-10`}>
        <WhatsAppIcon />
      </div>

      {/* Texto */}
      <div className="flex-1 text-left relative z-10">
        <div className={`text-sm mb-0.5 ${styles.subtitleColor}`}>{subtitle}</div>
        <div className={`text-lg font-bold leading-tight ${styles.titleColor}`}>{title}</div>
      </div>

      {/* Flecha */}
      <div className={`shrink-0 group-hover:translate-x-1 transition-transform duration-300 relative z-10 ${styles.arrowColor}`}>
        <ArrowForwardIcon />
      </div>
    </button>
  );
};

