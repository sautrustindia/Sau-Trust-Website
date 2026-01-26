
import React from 'react';

const SocietySection: React.FC = () => {
  return (
    <div id="donate" className="bg-white py-24 md:py-32 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-gray-400 mb-8 block">
              Support Our Mission
            </span>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-bold tracking-tight mb-12">
              Join the<br />
              <span className="text-[#3818C1]">Society</span>
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-600 mb-12 max-w-md">
              A passionate community of monthly givers dedicated to restoring dignity and hope to single women and widows.
            </p>
            <button className="bg-[#3818C1] text-white px-8 py-4 text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-black transition-colors">
              Become a Member
            </button>
          </div>

          <div className="col-span-12 md:col-span-7 grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8">
              <div className="text-4xl font-bold text-[#3818C1] mb-6">01</div>
              <h3 className="text-xl font-bold mb-4">Sustainable Impact</h3>
              <p className="text-[13px] leading-relaxed text-gray-600">
                Monthly donations allow us to invest in long-term programs like vocational training centers and ongoing healthcare camps.
              </p>
            </div>

            <div className="border border-gray-200 p-8">
              <div className="text-4xl font-bold text-[#3818C1] mb-6">02</div>
              <h3 className="text-xl font-bold mb-4">Community & Updates</h3>
              <p className="text-[13px] leading-relaxed text-gray-600">
                Join a network of changemakers. Receive quarterly impact reports and personal stories from the women you support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocietySection;
