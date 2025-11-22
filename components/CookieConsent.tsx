import React, { useState, useEffect } from 'react';
import Button from './Button';

interface CookieConsentProps {
  onOpenPrivacy: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onOpenPrivacy }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Verifica se já existe consentimento no localStorage
    const consent = localStorage.getItem('cookieConsent');
    
    if (!consent) {
      setShouldRender(true);
      // Pequeno delay para a animação de entrada ficar fluida após o carregamento da página
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    // Aguarda a animação de saída terminar para remover do DOM e salvar a preferência
    setTimeout(() => {
      localStorage.setItem('cookieConsent', 'true');
      setShouldRender(false);
    }, 700);
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-[100] transition-transform duration-700 ease-out-expo ${
        isVisible ? 'translate-y-0' : 'translate-y-[110%]'
      }`}
      role="alert"
      aria-live="polite"
    >
      <div className="bg-[#0f0a08]/95 backdrop-blur-md border-t border-white/5 shadow-[0_-10px_50px_-10px_rgba(0,0,0,0.8)] px-4 py-6 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-stone-300 text-sm leading-relaxed font-light">
              <span className="font-bold text-white block sm:inline mb-1 sm:mb-0 sm:mr-1">Sua privacidade importa.</span>
              Utilizamos cookies para aprimorar a experiência de navegação e analisar o tráfego do site. Ao continuar, você concorda com nossa política de uso de dados e termos.
              <button 
                onClick={(e) => { e.preventDefault(); onOpenPrivacy(); }}
                className="ml-1 underline decoration-mjl-gold/50 hover:decoration-mjl-gold text-mjl-gold hover:text-white transition-all cursor-pointer focus:outline-none"
              >
                (ler política)
              </button>
            </p>
          </div>

          {/* Botão */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <Button 
              variant="primary" 
              onClick={handleAccept}
              className="w-full md:w-auto py-3 px-8 text-xs shadow-glow"
            >
              Aceitar e Continuar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;