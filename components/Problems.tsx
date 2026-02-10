import React from 'react';
import { PenTool } from 'lucide-react';

const Problems: React.FC = () => {
  return (
    <section className="pb-16 pt-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Problem 3 */}
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
              <PenTool size={32} />
            </div>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">Tak Pandai Ayat Promosi</h3>
            <p className="text-gray-600 leading-relaxed">
              Nak promote bisnes tapi ayat tak yakin, takut nampak tak professional. Tulis panjang-panjang, orang tak baca pun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;