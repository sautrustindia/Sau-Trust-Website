import React from 'react';
import { Flag } from 'lucide-react';

const PrayerFlagBanner: React.FC = () => {
  return (
    <div className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden min-h-[500px] flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?q=80&w=2070&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 p-8 max-w-2xl">
          <div className="flex justify-center mb-6">
            <Flag className="text-white w-16 h-16" strokeWidth={1} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Prayer Flag Project
          </h2>
          <p className="text-lg text-gray-100 mb-10">
            Follow your Prayer Flag as our RadiatingHope mountaineers summit some of the highest peaks on Earth.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrayerFlagBanner;
