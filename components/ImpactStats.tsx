
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ImpactStatsProps {
  onNavigate?: (page: 'home' | 'about' | 'activities') => void;
}

const ImpactStats: React.FC<ImpactStatsProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white py-20 md:py-32 text-black border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 md:gap-8">
           
           {/* Stats Group */}
           <div className="flex flex-col md:flex-row gap-12 md:gap-0 w-full md:w-auto flex-grow">
             {/* Stat 1 */}
             <div className="flex flex-col justify-center md:pr-12 md:border-r border-gray-100">
               <span className="text-7xl md:text-9xl font-black leading-none mb-3 tracking-tighter text-[#3818C1]">6000</span>
               <span className="text-lg text-gray-500 font-medium uppercase tracking-widest text-xs">Women Assisted</span>
             </div>

             {/* Stat 2 */}
             <div className="flex flex-col justify-center md:px-12 md:border-r border-gray-100">
               <span className="text-7xl md:text-9xl font-black leading-none mb-3 tracking-tighter text-black">80</span>
               <span className="text-lg text-gray-500 font-medium uppercase tracking-widest text-xs">Talukas Connected</span>
             </div>

             {/* Stat 3 */}
             <div className="flex flex-col justify-center md:pl-12">
               <span className="text-7xl md:text-9xl font-black leading-none mb-3 tracking-tighter text-[#3818C1]">5+</span>
               <span className="text-lg text-gray-500 font-medium uppercase tracking-widest text-xs">Years of Impact</span>
             </div>
           </div>

           {/* Button Action */}
           <div className="md:pl-12 flex-shrink-0">
             <button 
                onClick={() => onNavigate && onNavigate('activities')}
                className="group bg-black text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#3818C1] transition shadow-xl flex items-center gap-3 whitespace-nowrap"
              >
                See our Activities
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
           </div>

        </div>
      </div>
    </div>
  );
};

export default ImpactStats;
