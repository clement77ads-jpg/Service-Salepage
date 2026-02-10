import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <img 
            src="https://i.ibb.co/QvvsGfrB/Gemini-Generated-Image-pjgr82pjgr82pjgr.png" 
            alt="Apa kata owner bisnes lain?" 
            className="w-full h-auto rounded-xl shadow-2xl border border-gray-700"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;