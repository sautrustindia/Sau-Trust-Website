
import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'activities') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, page: 'home' | 'about' | 'activities', sectionId?: string) => {
    e.preventDefault();
    onNavigate(page);
    if (sectionId && page === 'home') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer id="contact" className="scroll-mt-20 bg-white border-t border-gray-100">
      {/* CTA Section - Solid Purple Background */}
      <div className="relative h-[400px] flex items-center overflow-hidden bg-[#3818C1]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
           <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none">Ready to help us on <br/>our <span className="opacity-60">mission?</span></h2>
           <button onClick={() => onNavigate('home')} className="inline-block bg-white text-[#3818C1] px-10 py-5 rounded-full font-bold text-lg hover:bg-black hover:text-white transition shadow-2xl transform hover:-translate-y-1">
             Join Sau Trust
           </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="bg-white pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-1">
            <button 
              onClick={() => onNavigate('home')}
              className="mb-8 hover:opacity-80 transition"
            >
              <img 
                src="logo.png" 
                alt="Sau Trust Logo" 
                className="h-16 md:h-24 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('.text-fallback')) {
                    const fallback = document.createElement('div');
                    fallback.className = "text-fallback flex flex-col leading-none font-black uppercase tracking-tighter text-3xl text-left text-[#3818C1]";
                    fallback.innerHTML = '<span>Sau</span><span class="text-black">Trust</span>';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </button>
            <p className="text-gray-500 max-w-xs leading-relaxed font-medium">
              Uplifting single women and families through sustainable, community-driven development across Maharashtra.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black mb-8 text-sm uppercase tracking-widest opacity-40">Organization</h3>
            <ul className="space-y-4 text-gray-900 font-bold">
              <li><button onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#3818C1] transition-colors">Our mission</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#3818C1] transition-colors">Board of Directors</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-[#3818C1] transition-colors">Contact us</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-black mb-8 text-sm uppercase tracking-widest opacity-40">Our activities</h3>
            <ul className="space-y-4 text-gray-900 font-bold">
              <li><button onClick={(e) => handleLinkClick(e, 'home', 'donate')} className="hover:text-[#3818C1] transition-colors">Donate</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'activities')} className="hover:text-[#3818C1] transition-colors">Vocational Training</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'activities')} className="hover:text-[#3818C1] transition-colors">Success Stories</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-black mb-8 text-sm uppercase tracking-widest opacity-40">Connect</h3>
            <ul className="space-y-4 text-gray-900 font-bold">
              <li><a href="#" className="hover:text-[#3818C1] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#3818C1] transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-[#3818C1] transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto border-t border-gray-100 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 text-sm text-gray-400 font-medium">
            <span className="text-black font-bold">Sau Trust © 2025</span>
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>

          <div className="text-xs text-gray-400 font-medium text-center md:text-right">
             All donations are tax deductible under Section 80G.<br/>
             Empowering women, strengthening communities.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
