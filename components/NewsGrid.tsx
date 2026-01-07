import React from 'react';
import { NEWS } from '../constants';

const NewsGrid: React.FC = () => {
  return (
    <div id="news" className="bg-white py-24 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="text-4xl font-semibold text-gray-900">Latest news</h2>
          <p className="text-gray-500 max-w-md">
            Learn more about our Cancer Care efforts, Mountaineering adventures, and other news and updates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {NEWS.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug group-hover:text-blue-600 transition">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsGrid;