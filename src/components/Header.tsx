import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath, navigate } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Homepage', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About Us', path: '/about' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FFFDF8]/95 backdrop-blur-md border-b border-[#4B3025]/10 shadow-sm py-3.5'
          : 'bg-[#FFFDF8] border-b border-[#4B3025]/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element in display face) */}
          <button
            onClick={() => handleNavClick('/')}
            className="group flex items-center gap-2.5 text-left whitespace-nowrap shrink-0 focus-visible:outline-none"
            aria-label="Goodfolk Solution Home"
          >
            <div className="w-8 h-8 rounded-lg bg-[#4B3025] flex items-center justify-center text-[#F2C94C] font-bold text-base transition-transform group-hover:scale-105">
              G
            </div>
            <span className="text-xl font-bold tracking-tight text-[#4B3025] font-['Manrope']">
              Goodfolk Solution
            </span>
          </button>

          {/* Zone 2: Navigation Links (Text with subtle hover underlines, single-line) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#2B2521]/80">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors hover:text-[#4B3025] focus-visible:outline-none ${
                    isActive ? 'text-[#4B3025] font-semibold' : ''
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F2C94C] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA Button (Golden Yellow) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('/contact')}
              className="px-5 py-2.5 text-sm font-semibold text-[#4B3025] bg-[#F2C94C] hover:bg-[#ebbf3c] active:translate-y-0.5 rounded-lg transition-all shadow-sm hover:shadow whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('/contact')}
              className="px-3.5 py-1.5 text-xs font-semibold text-[#4B3025] bg-[#F2C94C] rounded-md whitespace-nowrap"
            >
              Let's Talk
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4B3025] hover:bg-[#E9D9A8]/30 rounded-lg transition-colors focus-visible:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-[#4B3025]/10 bg-[#FFFDF8]">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#E9D9A8]/40 text-[#4B3025] font-semibold'
                        : 'text-[#2B2521] hover:bg-[#E9D9A8]/20'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#4B3025]" />}
                  </button>
                );
              })}
              <div className="pt-2">
                <button
                  onClick={() => handleNavClick('/contact')}
                  className="w-full py-3 text-center text-sm font-semibold text-[#4B3025] bg-[#F2C94C] hover:bg-[#ebbf3c] rounded-lg transition-colors"
                >
                  Let's Talk — Start a Project
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
