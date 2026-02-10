import React from 'react';
import { CheckCircle2, Store, Scissors, MapPin, Briefcase } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const audiences = [
    { label: "Cafe & Restoran Kecil", icon: <Store size={24} /> },
    { label: "Salon & Barber", icon: <Scissors size={24} /> },
    { label: "Kedai & Servis Local", icon: <MapPin size={24} /> },
    { label: "Agent & Bisnes Kecil", icon: <Briefcase size={24} /> }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl font-bold text-gray-900 mb-10">
          Pakej Ini Sesuai Untuk Siapa?
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {audiences.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-brand-secondary hover:shadow-md transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex items-center space-x-2 text-green-600 mb-2">
                 <CheckCircle2 size={16} />
                 <span className="text-xs font-bold uppercase tracking-wider">Yes</span>
              </div>
              <span className="font-heading font-semibold text-gray-800 text-lg leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;