import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, Mail, Clock, Calendar, Shield, HelpCircle, AlertTriangle, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  // ======================================================
  // GLOBAL TRACKING HOOK INTEGRATED DIRECTLY
  // ======================================================
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
    }
    
    if (!cid) return;
    
    let visitorId = localStorage.getItem('wmit_visitor_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);
    
    let sessionId = sessionStorage.getItem('wmit_session_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);
    
    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };
    
    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(err => {});
    };
    
    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(err => {});
      }
    };
    
    sendInitPayload();
    
    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };
    
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', sendExitPayload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 rounded-t-[32px] mt-12 overflow-hidden shadow-2xl relative" id="global-footer">
      {/* Top Footer Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Business Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-teal-600 text-white p-2.5 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-5 h-5"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M12 5v14" />
                  <path d="M7 11h10" />
                </svg>
              </div>
              <span className="font-sans text-xl font-bold text-white tracking-tight">
                Krishna Medicine House
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              Since {BUSINESS_INFO.established}, we have been the primary beacon of premium, reliable health services and authentic pharmaceuticals in Belaganj, Gaya district.
            </p>
            <div className="space-y-2 pt-2 text-sm font-sans">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 text-teal-500 mr-3 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}<br /><span className="text-teal-400 font-semibold">{BUSINESS_INFO.landmark}</span></span>
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 text-teal-500 mr-3 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-teal-400 transition">{BUSINESS_INFO.phone}</a>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 text-teal-500 mr-3 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-teal-400 transition">{BUSINESS_INFO.email}</a>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-base font-semibold tracking-wider uppercase mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-teal-500 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <Link to="/" className="hover:text-teal-400 transition flex items-center">
                  <span className="text-teal-500 mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-400 transition flex items-center">
                  <span className="text-teal-500 mr-2">›</span> About Pharmacy
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-400 transition flex items-center">
                  <span className="text-teal-500 mr-2">›</span> Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-teal-400 transition flex items-center">
                  <span className="text-teal-500 mr-2">›</span> Medical Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition flex items-center">
                  <span className="text-teal-500 mr-2">›</span> Contact & Location
                </Link>
              </li>
            </ul>

            <h3 className="text-white text-base font-semibold tracking-wider uppercase mt-8 mb-4 relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-teal-500 pb-2">
              Working Hours
            </h3>
            <div className="space-y-2 text-xs text-slate-400 font-sans">
              <p className="flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-2 text-teal-500" />
                Monday - Saturday: 8:00 AM - 10:00 PM
              </p>
              <p className="flex items-center">
                <Clock className="w-3.5 h-3.5 mr-2 text-teal-400" />
                Sunday: 8:00 AM - 8:00 PM
              </p>
            </div>
          </div>

          {/* Column 3: Embedded Google Map */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white text-base font-semibold tracking-wider uppercase relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-teal-500 pb-2">
              Interactive Location Map
            </h3>
            <p className="text-xs text-slate-400 font-sans">
              Located next to the Belaganj Block Office on the main Gaya-Patna Highway (NH-83). Easy access and parking available.
            </p>
            <div className="w-full h-44 rounded-[24px] overflow-hidden border border-slate-800 shadow-inner">
              <iframe
                title="Krishna Medicine House Google Map"
                src={BUSINESS_INFO.googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="filter invert contrast-125 saturate-50"
              ></iframe>
            </div>
            <div className="flex justify-between items-center text-xs pt-1 font-sans">
              <a
                href={BUSINESS_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline flex items-center"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              <span className="text-slate-500">Pincode: 804403, Bihar</span>
            </div>
          </div>

        </div>

        {/* Divider line */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-sans space-y-4 md:space-y-0 text-slate-400">
          
          {/* Legal Document Links */}
          <div className="flex space-x-6">
            <button onClick={() => setActiveModal('privacy')} className="hover:text-teal-400 transition flex items-center">
              <Shield className="w-3.5 h-3.5 mr-1 text-teal-600" /> Privacy Policy
            </button>
            <button onClick={() => setActiveModal('terms')} className="hover:text-teal-400 transition flex items-center">
              <HelpCircle className="w-3.5 h-3.5 mr-1 text-teal-600" /> Terms of Service
            </button>
            <button onClick={() => setActiveModal('disclaimer')} className="hover:text-teal-400 transition flex items-center">
              <AlertTriangle className="w-3.5 h-3.5 mr-1 text-teal-600" /> Medical Disclaimer
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Connect:</span>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-teal-600 hover:text-white p-2 rounded-lg transition text-teal-500 shadow"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com/krishnamedicinehouse"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-blue-600 hover:text-white p-2 rounded-lg transition text-blue-500 shadow"
              aria-label="Facebook"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </div>

        </div>

        {/* Bottom copyright & WMIT credit lines */}
        <div className="border-t border-slate-800/60 mt-6 pt-6 text-center text-xs text-slate-500 font-sans space-y-1">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-slate-400 font-semibold">{BUSINESS_INFO.name}</span>. All rights reserved.
          </p>
          <p>
            {' '}
           <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
          </p>
        </div>

      </div>

      {/* ======================================================
          LEGAL DOCUMENT MODAL DIALOGS
          ====================================================== */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm" onClick={() => setActiveModal(null)}>
          <div className="bg-white text-slate-800 rounded-[24px] max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 shadow-2xl border border-teal-100" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start border-b border-slate-100 pb-3 mb-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center">
                {activeModal === 'privacy' && <Shield className="w-5 h-5 text-teal-600 mr-2" />}
                {activeModal === 'terms' && <HelpCircle className="w-5 h-5 text-teal-600 mr-2" />}
                {activeModal === 'disclaimer' && <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />}
                {activeModal === 'privacy' && 'Privacy Policy'}
                {activeModal === 'terms' && 'Terms of Service'}
                {activeModal === 'disclaimer' && 'Medical Disclaimer'}
              </h3>
              <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-3 text-xs leading-relaxed text-slate-600 font-sans">
              {activeModal === 'privacy' && (
                <>
                  <p className="font-semibold text-slate-900">Effective Date: July 19, 2026</p>
                  <p>At Krishna Medicine House, we prioritize the confidentiality and safety of your health records and contact details.</p>
                  <p><strong>1. Information Collection:</strong> When you purchase drugs, share prescriptions via WhatsApp, or submit contact forms, we store your name, address, contact phone, and doctor prescriptions strictly to process your medical needs.</p>
                  <p><strong>2. Prescription Privacy:</strong> All digital files or paper prescriptions are protected. We never distribute patient history, clinical diagnosis, or therapeutic lists to any marketing third parties.</p>
                  <p><strong>3. Compliance:</strong> We adhere to the Pharmacy Act of India and other national pharmaceutical data protection standards. Your details are safe with us.</p>
                </>
              )}
              {activeModal === 'terms' && (
                <>
                  <p className="font-semibold text-slate-900">Terms of Medicine Dispensation</p>
                  <p>By using this website or ordering from Krishna Medicine House, you agree to comply with the following regulations:</p>
                  <p><strong>1. Prescription Requirements:</strong> Under Schedule H and H1 of the Drugs and Cosmetics Act, certain medical formulations cannot be sold without a physical or digital stamp prescription issued by a qualified registered medical doctor.</p>
                  <p><strong>2. Pricing Policy:</strong> All pricing follows the Maximum Retail Price (MRP) regulated by NPPA (National Pharmaceutical Pricing Authority) of India. Group discounts or senior citizen benefits apply to designated items only.</p>
                  <p><strong>3. Delivery Boundaries:</strong> Delivery is currently restricted to Belaganj and nearby zones within Gaya district. Verification of address and identification may be requested at delivery.</p>
                </>
              )}
              {activeModal === 'disclaimer' && (
                <>
                  <p className="font-bold text-red-600 text-[11px] uppercase tracking-wide">CRITICAL NOTICE: NOT A SUBSTITUTE FOR PROFESSIONAL MEDICAL TREATMENT</p>
                  <p><strong>1. General Information Only:</strong> The information, drug descriptions, benefits, and alternative wellness tips hosted on this website are compiled for general educational and informational guidance only.</p>
                  <p><strong>2. Consult your Doctor:</strong> Never start, change, or discontinue any medical treatment or prescribed dosage based on the information read on this portal. Always seek direct consultation with a qualified MBBS/MD clinical physician regarding any health concerns.</p>
                  <p><strong>3. Emergency:</strong> We are a retail pharmacy store and not an emergency room or hospital. In case of serious acute emergencies, immediately contact the nearest hospital trauma center or government ambulance services in Bihar.</p>
                </>
              )}
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 flex justify-end">
              <button onClick={() => setActiveModal(null)} className="bg-slate-900 hover:bg-slate-800 text-white text-xs px-4 py-2 rounded-lg font-semibold transition">
                I Understand & Accept
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
