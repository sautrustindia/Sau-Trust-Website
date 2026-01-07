
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black">
      {/* Background Image with Dark Overlay - Cinematic Black & White Aesthetic */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 transform scale-105 animate-subtle-zoom grayscale"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1605330310230-6725227d8199?q=80&w=2070&auto=format&fit=crop')` }}
      >
        {/* Deep layered dark overlays to focus on the subject and make text pop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-3xl pt-20">
          <div className="flex items-center space-x-4 mb-8">
            <span className="w-12 h-[2px] bg-[#3818C1]"></span>
            <span className="text-white/80 font-bold tracking-[0.2em] text-sm uppercase">Empowering Futures</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tighter mb-10">
            Helping women<br />
            <span className="text-[#3818C1]">rise again</span> with<br />
            strength & dignity.
          </h1>
          
          <div className="flex flex-wrap gap-5">
            <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-[#3818C1] hover:text-white transition shadow-xl transform hover:-translate-y-1">
              Explore Our Work
            </button>
            <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition shadow-md backdrop-blur-sm">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Subtle bottom scroll detail */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center gap-2">
          <div className="w-[1px] h-12 bg-white/20"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">Scroll to explore</span>
        </div>
      </div>
      
      <style>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.08); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Hero;
