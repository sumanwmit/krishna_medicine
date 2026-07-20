import { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Desktop & Tablet Floating Sidebar Actions (Bottom Right) */}
      <div className="fixed bottom-20 right-5 z-40 hidden sm:flex flex-col space-y-3">
        
        {/* Direct Phone Float */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center group relative"
          aria-label="Call Store"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-14 bg-blue-900 text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap font-medium pointer-events-none shadow-md">
            Call Store: {BUSINESS_INFO.phone}
          </span>
        </a>

        {/* WhatsApp Float with pulse effect */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center group relative animate-bounce"
          style={{ animationDuration: '3s' }}
          aria-label="WhatsApp Us"
        >
          <span className="absolute -inset-0.5 bg-emerald-400 rounded-full animate-ping opacity-30"></span>
          <MessageSquare className="w-5 h-5 relative z-10" />
          <span className="absolute right-14 bg-emerald-900 text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap font-medium pointer-events-none shadow-md">
            WhatsApp Prescription
          </span>
        </a>

        {/* Scroll To Top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="bg-slate-800 hover:bg-slate-700 text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* 2. Mobile Bottom Sticky Conversion CTA Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-emerald-100 shadow-xl px-4 py-3 flex items-center justify-between space-x-3">
        {/* Call Now Action */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 px-3 rounded-xl text-xs font-bold hover:from-blue-700 hover:to-indigo-700 active:scale-95 transition flex items-center justify-center space-x-1.5 shadow-md shadow-blue-200"
        >
          <Phone className="w-4 h-4" />
          <span>Call: {BUSINESS_INFO.whatsappDisplay}</span>
        </a>

        {/* WhatsApp Upload Action */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-2.5 px-3 rounded-xl text-xs font-bold hover:from-emerald-600 hover:to-teal-700 active:scale-95 transition flex items-center justify-center space-x-1.5 shadow-md shadow-emerald-200"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Rx</span>
        </a>

        {/* Back To Top on Mobile (Small float) */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="bg-slate-900 text-white p-2.5 rounded-xl shadow-md border border-slate-800 flex items-center justify-center"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
}
