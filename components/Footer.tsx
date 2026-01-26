
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
    <footer id="contact" className="scroll-mt-20 bg-white border-t border-gray-200">
      {/* CTA Section */}
      <div className="bg-[#3818C1] py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-8">
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-bold tracking-tight text-white mb-8">
                Ready to help us<br />
                on our mission?
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 flex justify-end">
              <button onClick={() => onNavigate('home')} className="bg-white text-[#3818C1] px-8 py-4 text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-colors">
                Join Sau Trust
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-3">
              <button
                onClick={() => onNavigate('home')}
                className="mb-8 hover:opacity-70 transition-opacity"
              >
                <img
                  src="/sau_trust_logo_-_purple.png"
                  alt="Sau Trust"
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.text-fallback')) {
                      const fallback = document.createElement('div');
                      fallback.className = "text-fallback text-2xl font-bold tracking-tight text-[#3818C1]";
                      fallback.textContent = 'SAU TRUST';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </button>
              <p className="text-[13px] leading-relaxed text-gray-600 max-w-xs">
                Uplifting single women and families through sustainable, community-driven development.
              </p>
            </div>

            <div className="col-span-6 md:col-span-3">
              <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-gray-400 mb-6">Organization</h3>
              <ul className="space-y-3 text-[13px]">
                <li><button onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#3818C1] transition-colors">Our Mission</button></li>
                <li><button onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#3818C1] transition-colors">About Us</button></li>
                <li><button onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-[#3818C1] transition-colors">Contact</button></li>
              </ul>
            </div>

            <div className="col-span-6 md:col-span-3">
              <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-gray-400 mb-6">Activities</h3>
              <ul className="space-y-3 text-[13px]">
                <li><button onClick={(e) => handleLinkClick(e, 'home', 'donate')} className="hover:text-[#3818C1] transition-colors">Donate</button></li>
                <li><button onClick={(e) => handleLinkClick(e, 'activities')} className="hover:text-[#3818C1] transition-colors">Vocational Training</button></li>
                <li><button onClick={(e) => handleLinkClick(e, 'activities')} className="hover:text-[#3818C1] transition-colors">Success Stories</button></li>
              </ul>
            </div>

            <div className="col-span-12 md:col-span-3">
              <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-gray-400 mb-6">Connect</h3>
              <ul className="space-y-3 text-[13px]">
                <li><a href="#" className="hover:text-[#3818C1] transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-[#3818C1] transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-[#3818C1] transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[11px] text-gray-400">
              © 2025 Sau Trust. All rights reserved.
            </div>
            <div className="flex gap-8 text-[11px] text-gray-400">
              <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
