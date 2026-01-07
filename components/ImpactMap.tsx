import React from 'react';

const ImpactMap: React.FC = () => {
  return (
    <div className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative min-h-[500px] flex flex-col items-center justify-center text-center">
        
        {/* Placeholder for Dotted Map - Using a CSS pattern or simple SVG could work, 
            but an image is safest for this specific dotted aesthetic in the screenshot */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <svg viewBox="0 0 1000 500" className="w-full h-full text-gray-400 fill-current">
              {/* Simplified world map path representation */}
              <path d="M150,150 Q200,100 250,150 T350,150 T450,150 T550,150 T650,150 T750,150 T850,150" stroke="currentColor" strokeWidth="5" strokeDasharray="5,10" fill="none" />
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="100" fill="currentColor" opacity="0.1">WORLD MAP</text>
              {/* In a real scenario, we would use a proper geojson projection here or a dotted map image asset */}
           </svg>
           <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2560px-World_map_-_low_resolution.svg.png" 
              alt="World Map Background" 
              className="w-full h-full object-contain opacity-20 grayscale"
           />
        </div>

        <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
            Over 30 hospitals
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
            Have received radiation equipment thanks to our Centers of Excellence, donors and volunteers.
          </p>
          
          <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition shadow-lg">
            Join our Society
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImpactMap;
