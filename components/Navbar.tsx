import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-heading font-bold text-xl md:text-2xl text-brand-primary tracking-tight">
          VISUAL<span className="text-gray-900">BISNES</span>
        </div>
        
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white text-sm font-bold py-2 px-4 rounded-full transition-colors flex items-center gap-2"
        >
          <span>WhatsApp Kami</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;