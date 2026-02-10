import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Top Warning Bar */}
      <div className="bg-brand-primary text-white text-center py-3 px-4 text-sm md:text-base font-medium">
        <p>⚠️ Untuk owner bisnes local yang nak visual bisnes nampak professional tanpa pening fikir design & ayat!</p>
      </div>

      <div className="container mx-auto px-4 pt-10 pb-8 md:pb-10">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 text-sm font-bold tracking-wide mb-4">
            LIMITED TIME OFFER
          </span>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            FULL SERVICE <span className="text-brand-primary">VISUAL BISNES</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Kami urus design, ayat & susunan maklumat supaya customer terus faham dan <span className="highlight font-semibold text-gray-900">senang buat keputusan.</span>
          </p>

          {/* Hero Image / Mockup */}
          <div className="relative mt-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
               <img 
                src="https://i.ibb.co/cS5Tnp14/Gemini-Generated-Image-apz7msapz7msapz7-1.png" 
                alt="Product Mockup Visual Bisnes" 
                className="w-full h-auto block transform transition hover:scale-105 duration-700"
                fetchPriority="high"
                width="800"
                height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;