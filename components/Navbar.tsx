
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'about' | 'activities') => void;
  currentPage: 'home' | 'about' | 'activities';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'about' | 'activities', sectionId?: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    
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
    <div className="fixed top-0 w-full z-50">
      {/* Top Banner */}
      <div className="bg-[#3818C1] text-white text-[10px] sm:text-xs py-2 text-center font-medium px-4">
        <span className="bg-white/20 px-1.5 py-0.5 rounded mr-2 uppercase text-[9px] tracking-wider font-bold">Donate</span>
        Support our mission to empower single women and widows across Maharashtra. →
      </div>

      {/* Main Nav */}
      <nav className={`transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-gray-100' : 'bg-white/80 backdrop-blur-sm py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo - Sized specifically for the wide aspect ratio of the new asset */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center hover:opacity-90 transition-opacity group"
          >
            <div className="h-12 md:h-16 flex items-center py-1">
              <img 
                src="logo.png" 
                alt="Sau Trust Logo" 
                className="h-full w-auto object-contain"
                onError={(e) => {
                  // Fallback to text if image not found
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('.text-fallback')) {
                    const fallback = document.createElement('div');
                    fallback.className = "text-fallback flex flex-col leading-none font-black uppercase tracking-tighter text-xl text-[#3818C1]";
                    fallback.innerHTML = '<span>Sau</span><span class="text-black">Trust</span>';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10 text-[13px] font-bold text-gray-900 uppercase tracking-[0.15em]">
            <button 
              onClick={() => handleNavClick('about')}
              className={`flex items-center hover:text-[#3818C1] transition-colors ${currentPage === 'about' ? 'text-[#3818C1]' : ''}`}
            >
              About <ChevronDown size={14} className="ml-1 opacity-50" />
            </button>
            <button 
              onClick={() => handleNavClick('activities')} 
              className={`flex items-center hover:text-[#3818C1] transition-colors ${currentPage === 'activities' ? 'text-[#3818C1]' : ''}`}
            >
              Our activities <ChevronDown size={14} className="ml-1 opacity-50" />
            </button>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => handleNavClick('home', 'donate')}
              className="bg-[#3818C1] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-black transition shadow-lg hover:shadow-[#3818C1]/20 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Donate now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#3818C1] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 p-8 flex flex-col space-y-6 shadow-2xl animate-in slide-in-from-top duration-300">
             <button onClick={() => handleNavClick('about')} className="text-left py-2 text-2xl text-gray-900 font-bold border-b border-gray-50">About Us</button>
             <button onClick={() => handleNavClick('activities')} className="text-left py-2 text-2xl text-gray-900 font-bold border-b border-gray-50">Our Activities</button>
             <button onClick={() => handleNavClick('home', 'donate')} className="bg-[#3818C1] text-white px-6 py-4 rounded-full w-full text-center font-bold text-lg shadow-xl">Donate Now</button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
