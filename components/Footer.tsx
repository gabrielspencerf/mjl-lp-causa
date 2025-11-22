import React from 'react';

interface FooterProps {
  onOpenPrivacy: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative w-full bg-[#050303] text-stone-600 py-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8">
          
          {/* Minimal Legal Info */}
          <div className="text-center space-y-2">
            <div className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">
              &copy; {currentYear} MJL Advocacia
            </div>
            <div className="text-[9px] text-mjl-gold/60 tracking-wider">
              OAB/RS 78.751
            </div>
          </div>

          {/* Creative Lane Seal (Selo Animado) */}
          <div className="relative">
            <a 
              href="https://creativelane.io" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 opacity-40 hover:opacity-100 transition-all duration-700 hover:scale-110"
              aria-label="Assessorado por Creative Lane"
            >
              {/* Text Ring (Rotating) */}
              <svg 
                viewBox="0 0 100 100" 
                className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]"
              >
                <path 
                  id="sealPath" 
                  d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" 
                  fill="none" 
                />
                <text className="fill-stone-400 text-[9px] font-bold uppercase tracking-[0.18em] group-hover:fill-mjl-gold transition-colors duration-500">
                  <textPath href="#sealPath" startOffset="50%" textAnchor="middle">
                    Assessorado por • Creative Lane •
                  </textPath>
                </text>
              </svg>

              {/* Inner Badge (Static) */}
              <div className="absolute inset-[30%] rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-mjl-gold/10 group-hover:border-mjl-gold/50 transition-all duration-500 shadow-lg">
                 <div className="flex flex-col items-center justify-center leading-none">
                    <span className="font-heading font-bold text-stone-500 text-[9px] sm:text-[10px] group-hover:text-white transition-colors">CL</span>
                 </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;