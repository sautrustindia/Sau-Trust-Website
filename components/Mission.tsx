
import React from 'react';

const Mission: React.FC = () => {
  return (
    <div id="about" className="bg-white py-24 md:py-32 scroll-mt-20 border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-3">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-gray-400">
              Our Mission
            </span>
          </div>

          <div className="col-span-12 md:col-span-9">
            <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[1.1] font-bold tracking-tight mb-12">
              Sau Trust's mission is to <span className="text-[#3818C1]">uplift single women</span> and their families through sustainable development across Maharashtra.
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div>
                <div className="text-6xl font-bold text-[#3818C1] mb-4">6,000+</div>
                <p className="text-[13px] leading-relaxed text-gray-600">
                  Women supported annually since our establishment in 2021, providing education, employment, and community support.
                </p>
              </div>

              <div>
                <div className="text-6xl font-bold text-gray-900 mb-4">80+</div>
                <p className="text-[13px] leading-relaxed text-gray-600">
                  Talukas connected across Maharashtra, acting as a catalyst for lasting change and independent futures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
