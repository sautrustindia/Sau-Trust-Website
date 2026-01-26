
import React from 'react';

const AboutPage: React.FC = () => {
  const timeline = [
    {
      year: "2021",
      title: "Foundation",
      desc: "Sau Trust was established with a mission to uplift single women in rural Maharashtra. We started with a small team in 2 talukas."
    },
    {
      year: "2022",
      title: "Expansion",
      desc: "Expanded our reach to 20 talukas, launching our first major healthcare and vocational training initiatives."
    },
    {
      year: "2023",
      title: "Impact",
      desc: "Reached a milestone of assisting 3,000 women. Recognized by local governing bodies for our community-driven development model."
    },
    {
      year: "2024",
      title: "Present Day",
      desc: "Now connecting over 80 talukas and serving 6,000+ women annually. We continue to act as a catalyst for dignified futures."
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Mission & Vision */}
      <div className="border-b border-gray-200 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-12 gap-8 mb-32">
            <div className="col-span-12 md:col-span-3">
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-gray-400">
                Our Mission
              </span>
            </div>
            <div className="col-span-12 md:col-span-9">
              <p className="text-[clamp(1.5rem,4vw,3rem)] leading-[1.2] font-bold tracking-tight">
                Sau Trust's mission is to <span className="text-[#3818C1]">uplift single women</span> and their families through sustainable, community-driven development across Maharashtra.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3">
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-gray-400">
                Our Vision
              </span>
            </div>
            <div className="col-span-12 md:col-span-9">
              <p className="text-[clamp(1.5rem,4vw,3rem)] leading-[1.2] font-bold tracking-tight">
                We envision a society where single women are empowered leaders, free from stigma, and economically independent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="mb-16">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-gray-400 mb-4 block">
              Our Journey
            </span>
            <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[1.1] font-bold tracking-tight">
              Timeline
            </h2>
          </div>

          <div className="space-y-0">
            {timeline.map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-8 py-12 border-b border-gray-200">
                <div className="col-span-12 md:col-span-2">
                  <div className="text-5xl md:text-6xl font-bold text-[#3818C1]">{item.year}</div>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <p className="text-[15px] leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
