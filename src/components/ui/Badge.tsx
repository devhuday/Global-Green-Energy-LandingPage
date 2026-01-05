import { Leaf, type LucideIcon } from 'lucide-react';

// 1. Definimos los estilos para cada "tema" o color
const variants = {
  solar: "bg-accent-solar/10 border-accent-solar-hover text-accent-solar-hover",
  blue:  "bg-blue-500/10 border-blue-500 text-blue-600",
  green: "bg-green-500/20 border-green-500 text-green-400",
  red:   "bg-red-500/10 border-red-500 text-red-600",
  lightSolar: "bg-accent-solar/20 border-accent-solar text-accent-solar",
};


type BadgeVariant = keyof typeof variants;

interface BadgeProps {
  text: string;
  icon?: LucideIcon;
  variant?: BadgeVariant; 
  className?: string;
}

export const Badge = ({ 
  text, 
  icon: Icon = Leaf, 
  variant = "solar", 
  className = "" 
}: BadgeProps) => {
  return (
    <div 
     
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border font-semibold text-[14px] tracking-wide ${variants[variant]} ${className}`}
    >
      <Icon 
        className="w-4 h-4" 
        strokeWidth={2} 
      />
      <span>
        {text}
      </span>
    </div>
  );
};

export default Badge;