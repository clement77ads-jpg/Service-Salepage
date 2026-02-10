import React, { useState, useEffect } from 'react';
import Button from './Button';
import { WHATSAPP_LINK } from '../constants';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pricingSection = document.getElementById('pricing');
      let isPricingVisible = false;

      if (pricingSection) {
        const rect = pricingSection.getBoundingClientRect();
        // Check if pricing section is entering the viewport
        if (rect.top < window.innerHeight - 100) {
          isPricingVisible = true;
        }
      }

      // Show after scrolling past hero (approx 500px) but hide if pricing section is visible
      if (scrollY > 500 && !isPricingVisible) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Using transform translation for better performance than unmounting
  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 md:hidden transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="flex flex-col gap-2">
        <Button 
          text="WhatsApp Sekarang" 
          variant="whatsapp" 
          fullWidth={true} 
          href={WHATSAPP_LINK}
        />
      </div>
    </div>
  );
};

export default StickyCTA;