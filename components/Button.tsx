import React from 'react';
import { WHATSAPP_LINK } from '../constants';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'whatsapp';
  className?: string;
  fullWidth?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ text, variant = 'primary', className = '', fullWidth = false, href }) => {
  const baseClasses = "inline-flex items-center justify-center font-heading font-bold py-3 px-6 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white shadow-red-500/30 focus:ring-red-500",
    secondary: "bg-brand-primary hover:bg-brand-secondary text-white shadow-blue-500/30 focus:ring-blue-500",
    whatsapp: "bg-[#25D366] hover:bg-[#128C7E] text-white shadow-green-500/30 focus:ring-green-500"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const finalHref = href || WHATSAPP_LINK;

  return (
    <a 
      href={finalHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${widthClass} ${className}`}
    >
      {text}
    </a>
  );
};

export default Button;