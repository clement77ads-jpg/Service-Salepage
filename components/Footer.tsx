import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 pb-24 md:pb-12 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-heading font-bold text-2xl mb-4">FULL SERVICE VISUAL BISNES</h3>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Membantu usahawan tempatan menaikkan imej bisnes ke tahap professional dengan harga mampu milik.
        </p>
        
        <div className="mb-8">
            <a 
              href={WHATSAPP_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#25D366] hover:text-[#128C7E] font-semibold transition-colors"
            >
              <span className="mr-2">📲</span> WhatsApp Kami: 011-1770 3243
            </a>
        </div>

        <div className="text-sm text-gray-600 border-t border-gray-800 pt-8">
          &copy; {new Date().getFullYear()} Visual Bisnes Pro. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;