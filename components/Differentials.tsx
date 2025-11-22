import React, { useState, useRef } from 'react';
import { DIFFERENTIALS } from '../constants';
import Button from './Button';

const Differentials: React.FC = () => {
  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).Typebot) {
      (window as any).Typebot.open();
    }
  };

  return (
    <section id="diferenciais" className="py-16 sm:py-24 bg-mjl-light relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-1 space-y-6 sm:space-y-8 reveal">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-mjl-dark leading-tight">
              Por que contratar a <span className="text-mjl-gold">MJL</span>?
            </h2>
            <p className="text-mjl-gray text-base sm:text-lg leading-relaxed font-light">
              Processar construtoras exige técnica. Não deixe seu patrimônio na mão de generalistas. Atuamos com precisão para recuperar seus valores.
            </p>
            <a href="#" onClick={handleContact} className="inline-block w-full sm:w-auto">
              <Button variant="primary" fullWidth className="shadow-lg">Analisar meu Caso</Button>
            </a>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIFFERENTIALS.map((diff, index) => (
              <DifferentialCard key={index} diff={diff} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const DifferentialCard: React.FC<{ diff: any, index: number }> = ({ diff, index }) => {
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
      className="relative bg-white p-6 sm:p-8 rounded-sm shadow-card border-l-4 border-mjl-gold hover:-translate-y-2 transition-all duration-500 ease-out-expo group reveal overflow-hidden"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
       {/* Spotlight Effect */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(140,107,61,0.1), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-sm bg-mjl-dark text-mjl-gold flex items-center justify-center mb-6 group-hover:bg-mjl-gold group-hover:text-white transition-colors duration-500 ease-out-expo">
          <diff.icon strokeWidth={1.5} className="w-6 h-6" />
        </div>
        <h3 className="text-lg sm:text-xl font-heading font-bold text-mjl-dark mb-3">{diff.title}</h3>
        <p className="text-mjl-gray text-sm leading-relaxed">
          {diff.description}
        </p>
      </div>
    </div>
  );
};

export default Differentials;