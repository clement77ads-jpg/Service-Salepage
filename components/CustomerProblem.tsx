import React from 'react';
import { MessageCircleQuestion } from 'lucide-react';

const CustomerProblem: React.FC = () => {
  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-red-50 rounded-2xl p-6 md:p-10 border border-red-100 text-center hover:shadow-lg transition-shadow">
             <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
               <MessageCircleQuestion size={32} />
             </div>
             <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Customer Asyik Tanya Soalan Sama</h3>
             <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto text-lg">
              Owner buang masa jawab soalan harga, menu dan servis berulang kali setiap hari sebab info tak jelas.
            </p>
            <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                <img 
                    src="https://i.ibb.co/JFRCXNjd/Gemini-Generated-Image-kfog4mkfog4mkfog.png" 
                    alt="Customer Asyik Tanya Soalan Sama" 
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerProblem;