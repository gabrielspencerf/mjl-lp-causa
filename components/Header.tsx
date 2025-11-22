import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).Typebot) {
      (window as any).Typebot.open();
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-700 ease-out-expo ${
        scrolled 
          ? 'bg-[#0a0605]/90 backdrop-blur-md py-3 shadow-2xl border-b border-white/5' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Autoridade */}
          <div className="flex-shrink-0 relative z-50">
            <a href="#" className="flex items-center gap-2 md:gap-3 group focus:outline-none">
              {IMAGES.LOGO ? (
                 <img 
                   src={IMAGES.LOGO} 
                   alt="MJL Advocacia" 
                   width="150" 
                   height="40"
                   fetchPriority="high"
                   className="h-6 xs:h-7 md:h-10 w-auto object-contain transition-transform duration-500 ease-out-expo group-hover:scale-105" 
                 />
              ) : (
                <>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 border border-mjl-gold flex items-center justify-center rounded-sm bg-mjl-gold/10 group-hover:bg-mjl-gold transition-colors duration-500 ease-out-expo">
                    <span className="font-heading text-base lg:text-xl text-mjl-gold font-bold group-hover:text-mjl-dark transition-colors">M</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-lg lg:text-2xl text-white leading-none tracking-tight font-bold group-hover:text-mjl-gold transition-colors duration-500">MJL</span>
                  </div>
                </>
              )}
            </a>
          </div>

          {/* CTA Button - Única ação possível (Sem Menu) */}
          <div className="flex items-center">
            <a href="#" onClick={handleContact}>
              <Button variant="primary" className="px-3 py-2 xs:px-5 md:px-8 md:py-3 text-[10px] xs:text-xs md:text-sm shadow-glow tracking-widest">
                FALAR COM ADVOGADO
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;