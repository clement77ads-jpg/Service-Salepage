import React from 'react';
import { PenTool } from 'lucide-react';

const CopywritingProblem: React.FC = () => {
  return (
    <section className="py-4 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-red-50 rounded-2xl p-6 md:p-10 border border-red-100 text-center hover:shadow-lg transition-shadow">
             <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
               <PenTool size={32} />
             </div>
             <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Tak Pandai Ayat Promosi</h3>
             <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto text-lg">
              Nak promote bisnes tapi ayat tak yakin, takut nampak tak professional. Tulis panjang-panjang, orang tak baca pun.
            </p>
            <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                <img 
                    src="https://i.ibb.co/3mgqsTnB/Gemini-Generated-Image-rlvpxnrlvpxnrlvp.png" 
                    alt="Tak Pandai Ayat Promosi" 
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

export default CopywritingProblem;