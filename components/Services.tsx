import React, { useState, useRef } from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="atuacao" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 reveal">
          <span className="text-mjl-gold font-bold uppercase tracking-[0.2em] text-xs mb-3 block font-heading">Soluções Jurídicas</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-mjl-dark mb-6">Como podemos te ajudar?</h2>
          <p className="text-stone-600 text-lg font-light px-4">
            Atuamos nas principais dores de quem comprou imóvel na planta ou pronto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: any, index: number }> = ({ service, index }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white p-8 sm:p-10 rounded-sm border border-stone-100 transition-all duration-500 ease-out-expo hover:shadow-card-hover hover:-translate-y-2 reveal overflow-hidden"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(140,107,61,0.08), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <div className="w-12 h-12 bg-mjl-goldDim rounded-sm flex items-center justify-center text-mjl-gold mb-6 sm:mb-8 group-hover:bg-mjl-gold group-hover:text-white transition-colors duration-500 ease-out-expo">
          <service.icon strokeWidth={1.5} className="w-6 h-6" />
        </div>
        
        <h3 className="text-lg sm:text-xl font-heading font-bold text-mjl-dark mb-4 group-hover:text-mjl-gold transition-colors duration-300 ease-out-expo">
          {service.title}
        </h3>
        
        <ul className="space-y-3">
          {service.items.map((item: string, i: number) => (
            <li key={i} className="flex items-start text-stone-600 text-sm leading-relaxed group-hover:text-stone-900 transition-colors duration-300 ease-out-expo">
              <span className="mr-3 text-mjl-gold mt-1.5 w-1 h-1 rounded-full bg-mjl-gold flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;