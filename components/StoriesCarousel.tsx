import React from 'react';
import { STORIES } from '../constants';
import { ArrowLeft, ArrowRight, PlayCircle } from 'lucide-react';

const StoriesCarousel: React.FC = () => {
  return (
    <div className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-semibold">Inspiring Stories</h2>
          <div className="hidden md:flex items-center space-x-3">
             <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium">See all</button>
             <button className="p-2 rounded-full border border-gray-300 hover:border-black transition">
               <ArrowLeft size={20} />
             </button>
             <button className="p-2 rounded-full border border-gray-300 hover:border-black transition">
               <ArrowRight size={20} />
             </button>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0">
          {STORIES.map((story) => (
            <div key={story.id} className="min-w-[280px] md:min-w-[350px] relative rounded-xl overflow-hidden aspect-[3/4] group cursor-pointer">
              <img 
                src={story.image} 
                alt={story.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute top-4 right-4 text-white opacity-80 group-hover:opacity-100 transition group-hover:scale-110 duration-300">
                 {/* Simulate Play Icon */}
                 <div className="bg-white/20 backdrop-blur-md p-2 rounded-full">
                   <PlayCircle fill="white" className="text-transparent" size={32} />
                 </div>
              </div>

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-1">{story.title}</h3>
                <p className="text-xs text-gray-300">{story.date}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="md:hidden mt-6 flex justify-center">
             <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium w-full">See all</button>
        </div>
      </div>
    </div>
  );
};

export default StoriesCarousel;
