import React from 'react';
import Button from './Button';
import { WHATSAPP_LINK } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        
        {/* Urgency Text */}
        <div className="max-w-3xl mx-auto mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Slot Sangat Terhad!
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-gray-600 leading-relaxed">
            <p className="mb-4">
              Nilai keseluruhan pakej ini lebih <span className="font-bold text-gray-900">RM1,500</span>.
              Kami buka <span className="font-bold text-red-600">Fast Action Promo</span> khas untuk owner bisnes yang nak cepat siap & terus guna.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="max-w-md mx-auto">
             <Button 
                text="WhatsApp Sekarang" 
                variant="whatsapp" 
                fullWidth={true} 
                className="text-lg py-4 shadow-xl hover:scale-105 transition-transform animate-pulse"
                href={WHATSAPP_LINK}
              />
              <div className="mt-6 p-4 bg-white/50 rounded-lg border border-gray-100">
                <p className="text-sm text-gray-500 mb-1">
                  Ada masalah dengan link? Save nombor ini:
                </p>
                <p className="font-mono font-bold text-gray-800 text-lg select-all">
                  011-1770 3243
                </p>
              </div>
        </div>

        <div className="text-center mt-12 text-sm text-gray-500">
            Disclaimer: Hasil mungkin berbeza mengikut bisnes. Slot bergantung kepada kekosongan semasa.
        </div>
      </div>
    </section>
  );
};

export default Pricing;