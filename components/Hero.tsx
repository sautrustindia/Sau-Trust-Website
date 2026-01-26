
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Text */}
          <div className="col-span-12 md:col-span-7">
            <div className="mb-12">
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-gray-400">Est. 2021</span>
            </div>

            <h1 className="text-[clamp(3rem,8vw,7rem)] leading-[0.95] font-bold tracking-tight mb-12">
              Helping women<br />
              <span className="text-[#3818C1]">rise again</span><br />
              with dignity
            </h1>

            <div className="max-w-md mb-16">
              <p className="text-[15px] leading-relaxed text-gray-600">
                Sau Trust uplifts single women and their families through sustainable,
                community-driven development across Maharashtra.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#3818C1] text-white px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-black transition-colors">
                Our Work
              </button>
              <button className="border border-gray-900 text-gray-900 px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-gray-900 hover:text-white transition-colors">
                Donate
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-span-12 md:col-span-5 relative">
            <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1605330310230-6725227d8199?q=80&w=2070&auto=format&fit=crop"
                alt="Empowering Women"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#3818C1] text-white p-6">
                <div className="text-4xl font-bold mb-1">6,000+</div>
                <div className="text-xs tracking-[0.15em] uppercase">Women Assisted Annually</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
