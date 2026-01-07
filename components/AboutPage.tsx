
import React from 'react';

const AboutPage: React.FC = () => {
  const timeline = [
    {
      year: "2021",
      title: "Foundation",
      desc: "Sau Trust was established with a mission to uplift single women in rural Maharashtra. We started with a small team in 2 talukas.",
      color: "text-[#1e1b4b]", // Dark purple/black
      bg: "bg-white"
    },
    {
      year: "2022",
      title: "Expansion",
      desc: "Expanded our reach to 20 talukas, launching our first major healthcare and vocational training initiatives.",
      color: "text-[#3818C1]", // Brand purple
      bg: "bg-gray-50"
    },
    {
      year: "2023",
      title: "Impact",
      desc: "Reached a milestone of assisting 3,000 women. Recognized by local governing bodies for our community-driven development model.",
      color: "text-[#1e1b4b]",
      bg: "bg-white"
    },
    {
      year: "2024",
      title: "Present Day",
      desc: "Now connecting over 80 talukas and serving 6,000+ women annually. We continue to act as a catalyst for dignified futures.",
      color: "text-[#3818C1]",
      bg: "bg-gray-50"
    }
  ];

  return (
    <div className="pt-20">
      {/* Section 1: Mission & Vision */}
      <div className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Mission */}
          <div className="grid md:grid-cols-4 gap-12 group">
            <div className="md:col-span-1 flex flex-col items-start md:sticky md:top-32 h-fit">
              <h2 className="text-xl md:text-2xl font-medium text-gray-900 relative inline-block">
                Our Mission
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3818C1] transition-all duration-500 ease-out group-hover:w-full"></span>
              </h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-4xl md:text-5xl font-medium leading-tight text-gray-900 tracking-tight transition-opacity duration-700 hover:opacity-90">
                Sau Trust’s mission is to uplift single women and their families through sustainable, community-driven development across Maharashtra.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="grid md:grid-cols-4 gap-12 group">
            <div className="md:col-span-1 flex flex-col items-start md:sticky md:top-32 h-fit">
              <h2 className="text-xl md:text-2xl font-medium text-gray-900 relative inline-block">
                Our Vision
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3818C1] transition-all duration-500 ease-out group-hover:w-full"></span>
              </h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-4xl md:text-5xl font-medium leading-tight text-gray-900 tracking-tight transition-opacity duration-700 hover:opacity-90">
                We envision a society where single women are empowered leaders, free from stigma, and economically independent. Working across 80+ talukas, we act as a catalyst for lasting change.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Section 2: Timeline */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900">Our Timeline</h2>
        </div>
        
        <div className="flex flex-col">
          {timeline.map((item, idx) => (
            <div key={idx} className={`${item.bg} py-24 border-b border-gray-100 group`}>
              <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className={`text-8xl md:text-[10rem] font-semibold leading-none tracking-tighter ${item.color} transition-transform duration-700 group-hover:scale-105 origin-left`}>
                  {item.year}
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
