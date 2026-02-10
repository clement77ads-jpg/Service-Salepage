import React from 'react';
import { MonitorSmartphone, Layout, PenTool, Share2, Layers, Zap, XCircle, CheckCircle } from 'lucide-react';

const ProductIntro: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Intro */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">Memperkenalkan Solusi Anda</span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-6">
            FULL SERVICE <br/>VISUAL BISNES
          </h2>
          <p className="text-xl text-gray-600 mb-10">Servis visual lengkap dari A sampai Z khas untuk bisnes local.</p>
          
          <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <img 
              src="https://i.ibb.co/BKZ1cdWg/Gemini-Generated-Image-9cqof09cqof09cqo.png" 
              alt="Full Service Visual Bisnes Overview" 
              className="w-full h-auto block"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
           <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
             <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
               <Layers size={24} />
             </div>
             <h3 className="font-bold text-xl mb-2">Poster Promosi</h3>
             <p className="text-gray-600 text-sm">Visual kemas & jelas yang menangkap perhatian pelanggan. (Bernilai RM199)</p>
           </div>

           <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
             <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
               <MonitorSmartphone size={24} />
             </div>
             <h3 className="font-bold text-xl mb-2">Salespage Khas</h3>
             <p className="text-gray-600 text-sm">1 link landing page mini yang senang nak share di WhatsApp/Bio. (Bernilai RM299)</p>
           </div>

           <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
             <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
               <PenTool size={24} />
             </div>
             <h3 className="font-bold text-xl mb-2">Ayat Promosi</h3>
             <p className="text-gray-600 text-sm">Copywriting siap guna, persuasive & local friendly. (Bernilai RM149)</p>
           </div>

           <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
             <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
               <Layout size={24} />
             </div>
             <h3 className="font-bold text-xl mb-2">Struktur Jualan</h3>
             <p className="text-gray-600 text-sm">Flow maklumat yang bantu customer faham sepantas kilat. (Bernilai RM99)</p>
           </div>

           <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
             <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
               <Share2 size={24} />
             </div>
             <h3 className="font-bold text-xl mb-2">Format Lengkap</h3>
             <p className="text-gray-600 text-sm">Saiz optimum untuk FB, IG Feed, dan WhatsApp Story. (Bernilai RM149)</p>
           </div>

           <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
             <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
               <Zap size={24} />
             </div>
             <h3 className="font-bold text-xl mb-2">Susunan Strategik</h3>
             <p className="text-gray-600 text-sm">Nampak professional, bukan 'cincai' buat pakai app phone. (Bernilai RM199)</p>
           </div>
        </div>

        {/* USP / Contrast Image + Text */}
        <div className="max-w-4xl mx-auto">
             <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 uppercase">
               KENAPA PILIH SERVICE KAMI
             </h2>
             <div className="shadow-2xl rounded-3xl overflow-hidden border border-gray-200 mb-10">
                <img 
                  src="https://i.ibb.co/9mm6GP1y/Gemini-Generated-Image-9ece9a9ece9a9ece-1.png" 
                  alt="Kenapa Pilih Servis Kami Comparison" 
                  className="w-full h-auto block"
                  loading="lazy"
                  decoding="async"
                />
             </div>

             {/* USP Text Breakdown */}
             <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <XCircle className="text-red-500 shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">Tanpa pening fikir design</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <XCircle className="text-red-500 shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">Tak perlu pandai copywriting</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <XCircle className="text-red-500 shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">Tak perlu guna template rawak</span>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-white p-6 rounded-xl border border-green-200 shadow-sm">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={32} />
                    <span className="text-xl font-bold text-gray-900">Hanya hantar info,<br/>kami uruskan A-Z!</span>
                  </div>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default ProductIntro;