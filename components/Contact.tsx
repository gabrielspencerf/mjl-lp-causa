import React from 'react';
import { CONTACT_INFO } from '../constants';
import Button from './Button';

const Contact: React.FC = () => {
  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).Typebot) {
      (window as any).Typebot.open();
    }
  };

  return (
    <section id="contato" className="relative bg-mjl-darker py-24 sm:py-32 overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-mjl-gold/30 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-mjl-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="reveal">
          <span className="inline-block py-1 px-3 rounded-full bg-mjl-gold/10 border border-mjl-gold/20 text-mjl-gold font-bold uppercase tracking-widest text-[10px] mb-6 font-heading">
            Análise Gratuita do seu Caso
          </span>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Não deixe seu dinheiro <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mjl-gold via-[#C6A168] to-mjl-gold animate-shine">
              na mão da construtora.
            </span>
          </h2>
          
          <p className="text-stone-400 text-lg sm:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            O prazo para reivindicar seus direitos pode estar acabando. 
            Clique no botão abaixo para iniciar o atendimento automático e descobrir quanto você pode recuperar.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a href="#" onClick={handleContact} className="w-full sm:w-auto transform transition-transform hover:scale-105 duration-500">
                <Button fullWidth variant="primary" className="py-5 px-10 text-lg shadow-[0_0_40px_rgba(140,107,61,0.4)]">
                    INICIAR ATENDIMENTO AGORA
                </Button>
            </a>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-stone-500 text-xs font-medium tracking-wide uppercase">
               <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                 <span>Atendimento Online</span>
               </div>
               <div className="flex items-center gap-2">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                 <span>Dados Protegidos</span>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;