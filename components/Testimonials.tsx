import React, { useState, useRef, useEffect } from 'react';
import { TESTIMONIALS, StarIcon, GoogleIcon } from '../constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.ceil(TESTIMONIALS.length / itemsPerPage) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-mjl-dark relative overflow-hidden select-none">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 reveal">
           <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 bg-white/5 rounded-full border border-white/10">
              <GoogleIcon className="text-white w-4 h-4" />
              <span className="text-white text-xs font-bold uppercase tracking-widest">Google Reviews</span>
           </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            O que dizem nossos clientes
          </h2>
          <div className="flex justify-center items-center gap-2 mt-4">
            <span className="text-mjl-gold text-2xl font-bold">5.0</span>
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <StarIcon key={i} className="w-5 h-5 text-mjl-gold" />)}
            </div>
            <span className="text-stone-400 text-sm ml-2">na avaliação geral</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons (Desktop) */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 lg:-left-12 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-mjl-gold hover:border-mjl-gold transition-all duration-300 flex items-center justify-center focus:outline-none hidden md:flex"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-mjl-gold hover:border-mjl-gold transition-all duration-300 flex items-center justify-center focus:outline-none hidden md:flex"
            aria-label="Próximo"
          >
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div 
            className="overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-700 ease-out-expo"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Logic to group items based on itemsPerPage */}
              {Array.from({ length: Math.ceil(TESTIMONIALS.length / itemsPerPage) }).map((_, pageIndex) => (
                <div key={pageIndex} className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2">
                  {TESTIMONIALS.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-white p-6 sm:p-8 rounded-sm shadow-lg border-t-4 border-mjl-gold relative group hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col select-none"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-mjl-dark text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                            {item.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-mjl-dark text-sm line-clamp-1">{item.name}</p>
                            <p className="text-xs text-stone-400">{item.date}</p>
                          </div>
                        </div>
                        <GoogleIcon className="w-5 h-5 text-stone-200 flex-shrink-0" />
                      </div>
                      
                      <div className="flex gap-0.5 mb-4">
                        {[...Array(item.rating)].map((_, i) => (
                           <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                        ))}
                      </div>
                      
                      <p className="text-stone-600 text-sm leading-relaxed italic line-clamp-5">
                        "{item.text}"
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-2 mt-8 sm:mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'bg-mjl-gold w-6' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;