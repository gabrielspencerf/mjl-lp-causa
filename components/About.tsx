import React from 'react';
import { MapPinIcon, IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-mjl-light overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-32">
          <div className="relative order-1 lg:order-1 group reveal">
            <div className="absolute -top-4 -left-4 sm:-top-10 sm:-left-10 w-32 h-32 sm:w-64 sm:h-64 bg-mjl-gold/10 rounded-full blur-2xl sm:blur-3xl group-hover:bg-mjl-gold/20 transition-all duration-700 ease-out-expo"></div>
            <img 
              src={IMAGES.OFFICE_PHOTO}
              alt="Escritório de Advocacia Imobiliária"
              className="relative rounded-sm shadow-2xl w-full object-cover aspect-[4/3] z-10 filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-out-expo"
              loading="lazy"
            />
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 h-48 bg-mjl-dark z-0"></div>
            
            {/* Stats Box */}
            <div className="absolute -bottom-4 right-0 sm:-bottom-8 sm:-right-8 bg-white p-4 sm:p-8 shadow-xl z-20 max-w-[140px] sm:max-w-[220px] border-t-4 border-mjl-gold hover:-translate-y-1 transition-transform duration-500 ease-out-expo">
              <p className="font-heading text-2xl sm:text-5xl text-mjl-dark font-bold">Imob</p>
              <p className="text-[8px] sm:text-xs text-stone-500 uppercase tracking-widest mt-1 sm:mt-2 font-bold">Especialidade Exclusiva</p>
            </div>
          </div>
          
          <div className="order-2 lg:order-2 reveal delay-200">
            <span className="text-mjl-gold font-bold tracking-widest uppercase text-xs mb-2 sm:mb-4 block font-heading">Sobre o Escritório</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-mjl-dark mb-6 sm:mb-8 leading-tight">
              Defendendo quem sonha com a <br/>
              <span className="text-mjl-gold">Casa Própria</span>.
            </h2>
            <div className="space-y-4 sm:space-y-6 text-stone-600 leading-relaxed text-base sm:text-lg font-light">
              <p>
                A <strong className="text-mjl-dark font-semibold">MJL Advocacia</strong> se consolidou como referência em <strong className="text-mjl-dark">Direito Imobiliário</strong> ao combater as práticas abusivas de construtoras e bancos.
              </p>
              <p>
                Sabemos que um imóvel é o maior investimento da vida de uma família. Quando a obra atrasa, quando aparecem defeitos ou quando o contrato se torna impagável, nós entramos para equilibrar o jogo e recuperar o que é seu por direito.
              </p>
              <div className="flex items-center pt-4 text-mjl-dark font-medium">
                <MapPinIcon className="w-5 h-5 text-mjl-gold mr-3 flex-shrink-0" />
                <span className="font-heading text-sm font-semibold tracking-wide uppercase">Atendimento Nacional (Digital) e Presencial em POA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="relative bg-mjl-dark rounded-sm sm:rounded-2xl p-6 sm:p-16 overflow-hidden reveal">
          <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
             <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-white">
                <rect x="0" y="0" width="100" height="100" />
             </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            <div className="lg:col-span-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 shadow-2xl group max-w-sm mx-auto lg:max-w-none">
                <img 
                   src={IMAGES.LAWYER_PHOTO}
                   alt="Germano Mejler" 
                   className="w-full h-full object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105"
                   loading="lazy"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-mjl-dark via-transparent to-transparent opacity-90"></div>
                 <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="h-1 w-8 sm:w-12 bg-mjl-gold mb-3 sm:mb-4 transition-all duration-500 ease-out-expo group-hover:w-24"></div>
                    <p className="text-white font-heading font-bold text-xl sm:text-2xl">Germano Mejler</p>
                    <p className="text-mjl-gold text-[10px] sm:text-xs uppercase tracking-widest mt-1 font-medium">Sócio Fundador</p>
                 </div>
              </div>
            </div>
            
            <div className="lg:col-span-8 text-white/90">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-white">Estratégia contra Construtoras</h3>
              <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
                <div className="space-y-4">
                   <p className="text-stone-300 leading-relaxed text-sm sm:text-base">
                     Germano Mejler (OAB/RS 78.751) direcionou sua carreira para o Direito Imobiliário após perceber a fragilidade do consumidor diante de grandes incorporadoras.
                   </p>
                   <p className="text-stone-300 leading-relaxed text-sm sm:text-base">
                     Sua atuação é focada em resultados financeiros: indenizações por atraso, reversão de multas de distrato e reparação de danos construtivos.
                   </p>
                </div>
                <div className="space-y-6 sm:space-y-8">
                  <div className="border-l border-mjl-gold pl-4 sm:pl-6 hover:pl-8 transition-all duration-500 ease-out-expo">
                    <h4 className="text-white font-heading font-bold text-base sm:text-lg mb-2">Expertise</h4>
                    <p className="text-sm text-stone-400">Distrato, Atraso de Obra e Vícios Construtivos.</p>
                  </div>
                  <div className="border-l border-mjl-gold pl-4 sm:pl-6 hover:pl-8 transition-all duration-500 ease-out-expo">
                    <h4 className="text-white font-heading font-bold text-base sm:text-lg mb-2">Missão</h4>
                    <p className="text-sm text-stone-400">Garantir que o sonho do imóvel não vire pesadelo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;