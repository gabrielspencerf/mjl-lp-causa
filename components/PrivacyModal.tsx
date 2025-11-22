import React, { useEffect, useRef } from 'react';
import Button from './Button';
import { IMAGES } from '../constants';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Close on click outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#080504]/80 backdrop-blur-sm transition-opacity duration-500 ease-out-expo animate-in fade-in"
        onClick={handleBackdropClick}
      ></div>

      {/* Modal Content */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-3xl max-h-[85vh] bg-[#140D0A] border border-white/10 rounded-sm shadow-2xl flex flex-col overflow-hidden transform transition-all duration-500 ease-out-expo animate-in zoom-in-95 slide-in-from-bottom-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 bg-[#1a1210]">
          <div className="flex items-center gap-3">
             {IMAGES.LOGO ? (
                <img src={IMAGES.LOGO} alt="Logo" className="h-6 w-auto opacity-80" />
             ) : (
                <span className="text-mjl-gold font-heading font-bold">MJL</span>
             )}
             <div className="h-4 w-px bg-white/10 mx-1"></div>
             <h2 id="privacy-title" className="text-lg font-heading font-bold text-white">Política de Privacidade</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-stone-500 hover:text-white transition-colors p-2 rounded-sm hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-mjl-gold"
            aria-label="Fechar modal"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 text-stone-300 text-sm leading-relaxed space-y-6 scrollbar-thin">
          <p className="text-xs text-stone-500 uppercase tracking-widest mb-4">Última atualização: Outubro de 2023</p>
          
          <div className="space-y-3">
            <h3 className="text-white font-bold font-heading text-base">1. Introdução</h3>
            <p>
              A <strong>MJL Advocacia</strong> preza pela segurança e privacidade de seus clientes e visitantes. Esta Política de Privacidade tem como objetivo esclarecer como coletamos, utilizamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-bold font-heading text-base">2. Coleta de Dados</h3>
            <p>
              Coletamos apenas as informações estritamente necessárias para a prestação de nossos serviços jurídicos ou para responder ao seu contato. Isso pode incluir:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-stone-400">
              <li>Dados de identificação (Nome, CPF, RG);</li>
              <li>Dados de contato (E-mail, Telefone/WhatsApp);</li>
              <li>Informações relativas ao seu caso jurídico específico.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-bold font-heading text-base">3. Uso das Informações</h3>
            <p>
              As informações coletadas são utilizadas exclusivamente para:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-stone-400">
              <li>Prestação de serviços jurídicos e consultoria;</li>
              <li>Comunicação sobre o andamento de processos;</li>
              <li>Resposta a dúvidas enviadas pelo site;</li>
              <li>Cumprimento de obrigações legais.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-bold font-heading text-base">4. Cookies e Navegação</h3>
            <p>
              Utilizamos cookies para melhorar a experiência de navegação e analisar o tráfego do site. Você pode gerenciar suas preferências de cookies diretamente nas configurações do seu navegador.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-bold font-heading text-base">5. Compartilhamento de Dados</h3>
            <p>
              Não vendemos ou comercializamos seus dados. O compartilhamento ocorre apenas quando necessário para a execução do serviço jurídico (ex: com órgãos judiciais) ou por determinação legal.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-bold font-heading text-base">6. Seus Direitos</h3>
            <p>
              Conforme a LGPD, você tem direito a solicitar o acesso, correção, anonimização ou exclusão de seus dados pessoais de nossa base, exceto nos casos previstos em lei.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-bold font-heading text-base">7. Contato</h3>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato através do e-mail: <strong>contato@mjl.adv.br</strong>.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/5 bg-[#1a1210] flex justify-end">
          <Button variant="white" onClick={onClose} className="py-2 px-6 text-xs">
            Entendido
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;