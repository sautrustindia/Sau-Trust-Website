
import React from 'react';
import { Heart, Sun, ArrowRight } from 'lucide-react';

const SocietySection: React.FC = () => {
  return (
    <div className="relative py-32 px-6 overflow-hidden bg-white">
      {/* Background with Subtle Pattern instead of heavy image overlay */}
      <div className="absolute inset-0 bg-[#3818C1]/[0.02] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
           <div className="inline-block border-2 border-[#3818C1] text-[#3818C1] px-6 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-10">
              Monthly Giving Program
           </div>
           <h2 className="text-6xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter text-black">
             Join the <br/><span className="text-[#3818C1]">Society.</span>
           </h2>
           <p className="text-xl text-gray-600 leading-relaxed max-w-lg mb-12">
             The Society is a passionate community of monthly givers who are dedicated to restoring dignity and hope to single women and widows.
           </p>
           <button className="bg-[#3818C1] text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-black transition shadow-2xl hover:shadow-purple-200/50 transform hover:-translate-y-1 inline-flex items-center group">
             Become a member <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
           </button>
        </div>

        <div className="grid gap-8">
           {/* Benefit Card 1 */}
           <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:border-[#3818C1]/30 transition-all duration-500 group cursor-default shadow-sm hover:shadow-xl">
              <div className="flex flex-col sm:flex-row items-start gap-8">
                 <div className="bg-[#3818C1] text-white p-5 rounded-3xl shrink-0 group-hover:rotate-6 transition-transform duration-500">
                    <Heart size={32} fill="currentColor" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold mb-3 text-black">Sustainable Impact</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Monthly donations allow us to invest in long-term programs like vocational training centers and ongoing healthcare camps.
                    </p>
                 </div>
              </div>
           </div>

           {/* Benefit Card 2 */}
           <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:border-[#3818C1]/30 transition-all duration-500 group cursor-default shadow-sm hover:shadow-xl">
              <div className="flex flex-col sm:flex-row items-start gap-8">
                 <div className="bg-black text-white p-5 rounded-3xl shrink-0 group-hover:-rotate-6 transition-transform duration-500">
                    <Sun size={32} fill="currentColor" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold mb-3 text-black">Community & Updates</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Join a network of changemakers. Receive quarterly impact reports and personal stories from the women you support.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SocietySection;
