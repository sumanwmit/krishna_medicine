import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, HeartPulse, Clock, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Medical Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Banner Bar for Trust & Local Info */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-900/50 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-teal-400" />
              Hours: {BUSINESS_INFO.workingHours} (Open Daily)
            </span>
            <span className="flex items-center">
              <HeartPulse className="w-3.5 h-3.5 mr-1 text-teal-400" />
              Landmark: {BUSINESS_INFO.landmark}
            </span>
          </div>
          <div className="flex items-center space-x-4 font-medium">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition flex items-center">
              <Phone className="w-3 h-3 mr-1 text-teal-400" /> {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Header */}
      <header
        id="main-navigation-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-emerald-100/55 py-3'
            : 'bg-white/80 backdrop-blur-sm border-b border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group" id="brand-logo-link">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-extrabold text-lg shadow-sm shadow-emerald-200 transition duration-300 group-hover:scale-105">
                KMH
              </div>
              <div className="text-left">
                <span className="font-sans text-lg font-extrabold text-slate-900 tracking-tight block leading-tight">
                  Krishna Medicine House
                </span>
                <span className="text-[10px] font-mono font-semibold text-slate-500 tracking-widest uppercase block mt-0.5">
                  Health & Wellness • Belaganj
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8" id="desktop-navbar">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm py-1.5 transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'font-bold text-emerald-700 border-b-2 border-emerald-600'
                      : 'font-medium text-slate-600 hover:text-emerald-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Action Button */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md shadow-emerald-200 hover:bg-emerald-700 transition flex items-center space-x-2"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>{BUSINESS_INFO.whatsappDisplay}</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 p-2 rounded-lg hover:bg-emerald-50 focus:outline-none transition"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-emerald-100 shadow-lg px-4 pt-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition ${
                  isActive(item.href)
                    ? 'text-emerald-700 bg-emerald-50 font-semibold'
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-emerald-50 flex flex-col space-y-2 px-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center space-x-2 bg-emerald-50 text-emerald-700 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-100 transition"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store: {BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-emerald-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Prescription</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
