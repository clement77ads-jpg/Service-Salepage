import React from 'react';
import { BONUSES } from '../constants';
import { Gift } from 'lucide-react';

const Bonuses: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold mb-4">
            <Gift size={20} />
            <span>SPECIAL OFFER HARI INI</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
            Bonus Istimewa (Jika Ambil Sekarang)
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {BONUSES.map((bonus, index) => {
            if (bonus.displayMode === 'image-only') {
              return (
                <div key={index} className="bg-transparent rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={bonus.image} 
                    alt={bonus.title} 
                    className="w-full h-auto block" 
                    loading="lazy" 
                    decoding="async" 
                  />
                </div>
              );
            }
            
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
                <div className="w-full bg-white overflow-hidden">
                  <img 
                    src={bonus.image} 
                    alt={bonus.title} 
                    className="w-full h-auto block" 
                    loading="lazy" 
                    decoding="async" 
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{bonus.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{bonus.description}</p>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-gray-500">Nilai Sebenar: </span>
                    <span className="text-lg font-bold text-red-600 line-through decoration-2 decoration-red-600/50">{bonus.value}</span>
                    <span className="ml-2 bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">PERCUMA</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;