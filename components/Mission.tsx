
import React from 'react';

const Mission: React.FC = () => {
  return (
    <div id="about" className="relative bg-white py-32 md:py-48 scroll-mt-20 overflow-hidden border-t border-gray-100">
      {/* Pattern Background adjusted for light theme */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="plus-pattern-light" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 10V30M10 20H30" stroke="#3818C1" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#plus-pattern-light)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-left">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight text-black mb-16 tracking-tight max-w-6xl">
            Sau Trust’s mission is to <span className="text-[#3818C1]">uplift single women</span> and their families through sustainable development across Maharashtra.
          </h2>
          
          <button className="bg-[#3818C1] text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-black transition shadow-2xl">
            Our Mission & Why
          </button>
        </div>

        <div className="mt-48 grid md:grid-cols-4 gap-12 items-start">
          <div className="col-span-1 text-sm font-bold text-[#3818C1] uppercase tracking-[0.3em] md:sticky md:top-32">
            Our story
          </div>
          <div className="col-span-3 space-y-12">
            {/* Image removed as requested, text now takes primary position */}
            <p className="text-5xl md:text-8xl font-black text-gray-100 leading-[1.1] tracking-tighter transition-all duration-700 hover:text-[#3818C1]/10">
               Since 2021, Sau Trust has supported over 6,000 women annually.
            </p>
            <p className="text-3xl md:text-5xl font-light text-gray-900 leading-relaxed tracking-tight max-w-4xl">
              Working across more than <span className="font-semibold text-[#3818C1]">80 blocks</span>, our organization acts as a catalyst for lasting change and independent futures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
