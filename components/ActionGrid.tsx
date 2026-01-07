import React from 'react';
import { ArrowRight } from 'lucide-react';

const ActionGrid: React.FC = () => {
  const actions = [
    {
      title: 'Climbing Adventures',
      image: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=1000&auto=format&fit=crop',
    },
    {
      title: 'Become a member',
      image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1000&auto=format&fit=crop',
    },
    {
      title: 'Volunteer',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1000&auto=format&fit=crop',
    }
  ];

  return (
    <div id="get-involved" className="bg-white py-24 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
           <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
             Empower Single Women to Rise Strong
           </h2>
           <div>
             <p className="text-lg font-medium text-gray-900 mb-4">
               There are many meaningful ways to support our mission. You can join our community programs, partner with us in the field, donate to uplift single women, or volunteer your time and skills.
             </p>
             <p className="text-gray-500 leading-relaxed">
               By engaging with our initiatives or contributing financially, you help create opportunities in education, healthcare, livelihood, and empowerment. Your support fuels lasting change and strengthens the lives of thousands of single women and their families.
             </p>
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {actions.map((action, idx) => (
            <div key={idx} className="group relative h-80 rounded-lg overflow-hidden cursor-pointer">
              <img 
                src={action.image} 
                alt={action.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-6 left-6">
                 <h3 className="text-white text-xl font-medium">{action.title}</h3>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-between text-white text-sm font-medium opacity-80 group-hover:opacity-100 transition">
                  <span>Learn more</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionGrid;