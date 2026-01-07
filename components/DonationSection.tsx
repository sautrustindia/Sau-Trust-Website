import React from 'react';
import { ArrowRight } from 'lucide-react';

const DonationSection: React.FC = () => {
  const impacts = [
    {
      title: "Livelihood Support",
      description: "Your donation provides sewing machines, vocational tools, and raw materials, enabling single women to start their own businesses and secure long-term financial independence.",
      image: "https://images.unsplash.com/photo-1551269905-1e35f795632a?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Educational Scholarships",
      description: "We cover school fees, uniforms, and books for children of widowed mothers, ensuring that financial hardship doesn't force a child to drop out of school.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Community Development",
      description: "By organizing support groups and community centers, you help create safe spaces where women can find solidarity, legal aid, and emotional support.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div id="donate" className="bg-white py-24 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium mb-16 text-left text-gray-900">
          How Your Donation Helps
        </h2>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
          {impacts.map((item, idx) => (
            <div key={idx} className="flex flex-col h-full group">
              <div className="aspect-[4/3] rounded-sm overflow-hidden mb-8 bg-gray-100 relative">
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-[#3818C1] transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-gray-100 pt-12 flex flex-col items-center text-center">
           <h3 className="text-2xl font-medium text-gray-900 mb-6">Ready to make an impact?</h3>
           <button className="bg-[#3818C1] hover:bg-[#2a1291] text-white px-10 py-4 rounded-full text-lg font-medium transition shadow-lg hover:shadow-xl inline-flex items-center">
             Donate Now <ArrowRight className="ml-2 w-5 h-5" />
           </button>
           <p className="mt-4 text-sm text-gray-400">All donations are tax deductible.</p>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;