
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
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="hover:opacity-70 transition-opacity"
          >
            <img
              src="/sau_trust_logo_-_purple.png"
              alt="Sau Trust"
              className="h-10 w-auto object-contain"
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <button
              onClick={() => handleNavClick('about')}
              className={`text-[11px] font-medium tracking-[0.15em] uppercase hover:text-[#3818C1] transition-colors ${currentPage === 'about' ? 'text-[#3818C1]' : 'text-gray-900'}`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('activities')}
              className={`text-[11px] font-medium tracking-[0.15em] uppercase hover:text-[#3818C1] transition-colors ${currentPage === 'activities' ? 'text-[#3818C1]' : 'text-gray-900'}`}
            >
              Activities
            </button>
            <button
              onClick={() => handleNavClick('home', 'donate')}
              className="bg-[#3818C1] text-white px-6 py-3 text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-black transition-colors"
            >
              Donate
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-8 pb-4 border-t border-gray-200 mt-6">
            <div className="flex flex-col gap-6">
              <button onClick={() => handleNavClick('about')} className="text-left text-sm font-medium tracking-wide uppercase text-gray-900">About</button>
              <button onClick={() => handleNavClick('activities')} className="text-left text-sm font-medium tracking-wide uppercase text-gray-900">Activities</button>
              <button onClick={() => handleNavClick('home', 'donate')} className="bg-[#3818C1] text-white px-6 py-3 text-sm font-medium tracking-wide uppercase text-center">Donate</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
