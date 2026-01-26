
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ActivitiesPage: React.FC = () => {
  const categories = [
    { 
      title: "Education", 
      icon: "🎓", 
      desc: "Providing scholarships, books, and educational resources to children of single mothers to ensure they stay in school."
    },
    { 
      title: "Employment", 
      icon: "💼", 
      desc: "Vocational training in tailoring, handicrafts, and digital literacy to help women achieve financial independence."
    },
    { 
      title: "Remarriage", 
      icon: "💍", 
      desc: "Counseling services and safe matchmaking platforms to support widows and single women seeking new partners."
    },
    { 
      title: "Relief", 
      icon: "🤝", 
      desc: "Emergency financial aid, food supplies, and medical assistance for women facing sudden crisis situations."
    },
    { 
      title: "Community Events", 
      icon: "🎉", 
      desc: "Regular gatherings, festivals, and support group meetings to build solidarity and reduce social isolation."
    }
  ];

  const stories = [
    {
      title: "Sunita's Journey to Independence",
      subtitle: "From struggle to successful entrepreneur",
      desc: "After losing her husband, Sunita faced immense financial pressure with two young children. Through Sau Trust's Employment program, she learned tailoring and received a sewing machine. Today, she runs her own boutique in her village, employing three other women. Her children are back in school, and she has regained her standing in the community. Sunita's story is a testament to the power of skill-building and resilience, showing that with the right support, new beginnings are possible.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Breaking Barriers: Priya's Education",
      subtitle: "First graduate in the family",
      desc: "Priya, the daughter of a widowed farm laborer, dreamed of becoming a nurse but lacked the funds. Our Education initiative stepped in with a full scholarship covering her tuition and books. Despite societal pressure to marry early, Priya persisted. She recently graduated with distinction and now works at a district hospital. Her success has inspired other girls in her taluka to pursue higher education regardless of their circumstances, proving that education is the key to breaking the cycle of poverty.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Finding Love Again",
      subtitle: "A story of second chances",
      desc: "Rukmini thought her life was over after her partner passed away. Isolated and depressed, she attended one of our Community Events where she met our counselors. Slowly, she opened up to the idea of remarriage. Through our vetted matching platform, she met a supportive partner. They recently celebrated their first anniversary. Rukmini now advocates for widow remarriage, challenging deep-seated taboos in her region and demonstrating that everyone deserves love and companionship.",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero */}
      <div className="border-b border-gray-200 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-gray-400 mb-8 block">
            Our Work
          </span>
          <h1 className="text-[clamp(3rem,8vw,7rem)] leading-[0.95] font-bold tracking-tight mb-8">
            Our<br />
            <span className="text-[#3818C1]">Activities</span>
          </h1>
          <p className="text-[15px] leading-relaxed text-gray-600 max-w-2xl">
            We take a holistic approach to empowerment, addressing the social, economic, and emotional needs through five key pillars.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="border border-gray-200 p-8 hover:border-[#3818C1] transition-colors group">
                <div className="text-4xl font-bold text-[#3818C1] mb-6">0{idx + 1}</div>
                <h3 className="text-2xl font-bold mb-4">{cat.title}</h3>
                <p className="text-[13px] leading-relaxed text-gray-600">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gray-50 py-24 md:py-32 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="mb-16">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-gray-400 mb-4 block">
              Impact Stories
            </span>
            <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[1.1] font-bold tracking-tight">
              Success Stories
            </h2>
          </div>

          <div className="space-y-24">
            {stories.map((story, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-12 md:col-span-5">
                  <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                <div className="col-span-12 md:col-span-7">
                  <div className="text-4xl font-bold text-[#3818C1] mb-6">0{idx + 1}</div>
                  <h3 className="text-3xl font-bold mb-4">{story.title}</h3>
                  <p className="text-lg font-medium text-gray-500 mb-6">{story.subtitle}</p>
                  <p className="text-[15px] leading-relaxed text-gray-600">
                    {story.desc}
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

export default ActivitiesPage;
