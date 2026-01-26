
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ImpactStatsProps {
  onNavigate?: (page: 'home' | 'about' | 'activities') => void;
}

const ImpactStats: React.FC<ImpactStatsProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#3818C1] text-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-3 gap-8">
              <div className="border-r border-white/20 pr-8">
                <div className="text-6xl md:text-7xl font-bold mb-2">6K+</div>
                <div className="text-[11px] tracking-[0.15em] uppercase text-white/60">Women Assisted</div>
              </div>

              <div className="border-r border-white/20 pr-8">
                <div className="text-6xl md:text-7xl font-bold mb-2">80+</div>
                <div className="text-[11px] tracking-[0.15em] uppercase text-white/60">Talukas</div>
              </div>

              <div>
                <div className="text-6xl md:text-7xl font-bold mb-2">5+</div>
                <div className="text-[11px] tracking-[0.15em] uppercase text-white/60">Years</div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 flex items-center justify-end">
            <button
              onClick={() => onNavigate && onNavigate('activities')}
              className="group bg-white text-[#3818C1] px-8 py-4 text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-colors inline-flex items-center gap-3"
            >
              Our Activities
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;
