
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
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Breaking Barriers: Priya's Education",
      subtitle: "First graduate in the family",
      desc: "Priya, the daughter of a widowed farm laborer, dreamed of becoming a nurse but lacked the funds. Our Education initiative stepped in with a full scholarship covering her tuition and books. Despite societal pressure to marry early, Priya persisted. She recently graduated with distinction and now works at a district hospital. Her success has inspired other girls in her taluka to pursue higher education regardless of their circumstances, proving that education is the key to breaking the cycle of poverty.",
      image: "https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Finding Love Again",
      subtitle: "A story of second chances",
      desc: "Rukmini thought her life was over after her partner passed away. Isolated and depressed, she attended one of our Community Events where she met our counselors. Slowly, she opened up to the idea of remarriage. Through our vetted matching platform, she met a supportive partner. They recently celebrated their first anniversary. Rukmini now advocates for widow remarriage, challenging deep-seated taboos in her region and demonstrating that everyone deserves love and companionship.",
      image: "https://images.unsplash.com/photo-1621644026330-81f725350c33?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero - Light Theme */}
      <div className="bg-white text-black py-24 md:py-40 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <span className="w-12 h-[2px] bg-[#3818C1]"></span>
            <span className="text-[#3818C1] font-bold tracking-widest text-sm uppercase">Impactful Work</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.9]">
            Our <br/><span className="text-[#3818C1]">Activities</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-gray-500 leading-relaxed font-light">
            We take a holistic approach to empowerment, addressing the social, economic, and emotional needs through five key pillars.
          </p>
        </div>
      </div>

      {/* Section 1: Categories */}
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-black tracking-tight">Areas of Focus</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, idx) => (
            <div key={idx} className="group bg-white rounded-[2rem] p-10 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#3818C1]/20">
              <div className="flex justify-between items-start mb-10">
                <div className="text-6xl p-6 bg-gray-50 rounded-3xl group-hover:bg-[#3818C1] group-hover:text-white transition-all duration-500">{cat.icon}</div>
                <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#3818C1] group-hover:text-white transition-all duration-500">
                   <ArrowRight className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-black mb-5">{cat.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg group-hover:text-gray-900 transition-colors">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Success Stories */}
      <div className="bg-gray-50/50 py-32 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-32 text-black text-center tracking-tighter">Success Stories</h2>
          
          <div className="space-y-48">
            {stories.map((story, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-20 md:gap-32 items-center group`}>
                
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative">
                    <div className="absolute inset-0 bg-[#3818C1]/0 group-hover:bg-[#3818C1]/5 transition-colors duration-500 z-10" />
                    <img 
                      src={story.image} 
                      alt={story.title} 
                      className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 space-y-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="w-16 h-[2px] bg-[#3818C1]"></span>
                    <span className="text-[#3818C1] font-bold tracking-[0.3em] text-xs uppercase">Impact Case</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight tracking-tight">
                    {story.title}
                  </h3>
                  
                  <p className="text-2xl font-medium text-[#3818C1]/60">
                    {story.subtitle}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed text-xl pt-4 font-light">
                    {story.desc}
                  </p>
                  
                  <div className="pt-8">
                     <button className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-[#3818C1] transition shadow-lg flex items-center group">
                       Read full story <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                     </button>
                  </div>
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
