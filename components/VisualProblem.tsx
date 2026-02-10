import React from 'react';
import { Palette } from 'lucide-react';

const VisualProblem: React.FC = () => {
  return (
    <section className="pt-16 pb-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pernah Rasa Macam Ni?
          </h2>
          <p className="text-gray-500">Jangan biarkan masalah ni membunuh sales bisnes anda.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-red-50 rounded-2xl p-6 md:p-10 border border-red-100 text-center hover:shadow-lg transition-shadow">
             <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
               <Palette size={32} />
             </div>
             <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Visual Nampak Serabut</h3>
             <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto text-lg">
              Poster sendiri buat tapi nampak tak kemas. Customer keliru, tak faham apa yang ditawarkan, dan terus scroll laju-laju.
            </p>
            <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                <img 
                    src="https://i.ibb.co/B2Hckn7y/Gemini-Generated-Image-6zwcua6zwcua6zwc.png" 
                    alt="Visual Nampak Serabut" 
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

export default VisualProblem;