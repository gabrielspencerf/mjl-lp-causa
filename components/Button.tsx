import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  variant?: 'primary' | 'outline' | 'white' | 'outline-light';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ fullWidth, variant = 'primary', children, className = '', ...props }) => {
  // Using cubic-bezier for ultra-smooth interaction
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-500 ease-out-expo rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden group";
  
  const variants = {
    // Primary: Gradient Gold
    primary: `
      bg-gradient-to-r from-mjl-gold via-[#C6A168] to-mjl-gold 
      bg-[length:200%_auto] 
      text-white 
      hover:bg-[right_center] 
      shadow-lg 
      hover:shadow-[0_0_25px_rgba(140,107,61,0.4)] 
      hover:tracking-[0.15em]
      focus-visible:ring-mjl-gold 
      border border-transparent
    `,
    // Outline: Gold border, for light backgrounds
    outline: `
      bg-transparent 
      border border-mjl-gold 
      text-mjl-gold 
      hover:bg-mjl-gold 
      hover:text-mjl-darker 
      hover:shadow-glow 
      focus-visible:ring-mjl-gold
      hover:tracking-[0.15em]
    `,
    // Outline Light: White border, for dark backgrounds (like Hero)
    'outline-light': `
      bg-transparent 
      border border-white/30 
      text-stone-300 
      hover:bg-white 
      hover:text-mjl-dark 
      hover:border-white
      hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
      focus-visible:ring-white
      hover:tracking-[0.15em]
    `,
    // White: Clean card style
    white: `
      bg-white 
      text-mjl-dark 
      hover:bg-gray-50 
      shadow-md 
      hover:shadow-xl 
      hover:-translate-y-1
      focus-visible:ring-white 
      border border-transparent
    `
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Shine effect overlay for primary buttons */}
      {variant === 'primary' && (
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine pointer-events-none" />
      )}
    </button>
  );
};

export default Button;