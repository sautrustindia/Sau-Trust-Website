import React from 'react';
import { EVENTS } from '../constants';

const EventsList: React.FC = () => {
  return (
    <div id="events" className="bg-white py-24 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-8">Upcoming events</h2>
        
        <div className="mb-12">
          <span className="inline-block border border-black px-4 py-2 rounded-full text-sm font-medium">
            Climbing Adventures
          </span>
        </div>

        <div className="divide-y divide-gray-100">
          {EVENTS.map((event) => (
            <div key={event.id} className="py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
              <div className="flex gap-6">
                <div className="flex flex-col items-center justify-center w-16 h-16 bg-gray-50 rounded-lg shrink-0">
                   <span className="text-xs font-semibold text-gray-500 uppercase">{event.month}</span>
                   <span className="text-xl font-bold text-gray-900">{event.day}</span>
                   <span className="text-[10px] text-gray-400">{event.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-1">{event.dateRange}</p>
                  <p className="font-medium text-gray-900">{event.price}</p>
                </div>
              </div>
              
              <button className="border border-gray-200 text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white hover:border-black transition whitespace-nowrap self-start md:self-center">
                Save my spot
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsList;