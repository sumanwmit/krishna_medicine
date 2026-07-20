import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, CheckCircle, ArrowRight, ShieldCheck, Truck, Clock, 
  HelpCircle, MessageSquare, Phone, ChevronRight, Star, 
  HeartPulse, Activity, Sparkles, Send, BellRing, CornerDownRight 
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES, POPULAR_PRODUCTS, REVIEWS, FAQS, MEDICINE_CATEGORIES } from '../data';
import SEO from '../components/SEO';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Filter products based on category selector
  const filteredProducts = activeCategory === 'All' 
    ? POPULAR_PRODUCTS 
    : POPULAR_PRODUCTS.filter(p => p.category === activeCategory);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 5000);
    }
  };

  return (
    <div id="home-page-container">
      <SEO 
        title="Authentic Pharmacy in Belaganj | Genuine Medicines"
        description="Krishna Medicine House in Belaganj, Bihar, is your trusted local medical store for genuine prescription drugs, wellness products, and veterinary medicines. Home delivery available!"
        keywords="pharmacy Belaganj, medical store Gaya Bihar, buy medicines Belaganj, local pharmacy NH-83, Krishna Medicine House, authentic drugs Bihar, veterinary medicine Belaganj"
        path="/"
      />

      {/* ======================================================
          HERO SECTION (Geometric Balance Layout Pattern)
          ====================================================== */}
      <section className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Hero Left: Content (Col Span 7) */}
            <div className="lg:col-span-7 flex flex-col justify-center bg-emerald-800 text-white p-8 sm:p-12 rounded-[32px] relative overflow-hidden shadow-sm">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-emerald-700/50 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-1 space-y-6 text-left">
                <span className="inline-block px-3.5 py-1.5 bg-emerald-500/20 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-400/30 text-emerald-200">
                  Licensed Retail Chemist & Druggist
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                  Your Health, Our Sacred <br />
                  <span className="text-emerald-300">Commitment in Belaganj</span>
                </h1>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl font-sans">
                  Providing 100% authentic medicines, reliable storage conditions, and direct pharmacist consultation. Located centrally near the Belaganj Block Office on the Patna-Gaya Highway (NH-83).
                </p>
                
                {/* Micro Bullet Badges inside container */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-sans">
                  <div className="flex items-center space-x-2 text-xs font-medium text-emerald-100">
                    <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>100% Certified Genuine</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-medium text-emerald-100">
                    <Truck className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>Express Local Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-medium text-emerald-100">
                    <Clock className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>Cold Chain Safeguarded</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-emerald-900 px-6 sm:px-8 py-3.5 rounded-xl font-bold shadow-lg hover:translate-y-[-2px] transition-all text-center text-sm flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>Order via WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="border border-emerald-400/50 text-white px-6 sm:px-8 py-3.5 rounded-xl font-bold hover:bg-emerald-700/50 transition-all text-center text-sm flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>Call Store: {BUSINESS_INFO.whatsappDisplay}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Hero Right: Stats & About Preview (Col Span 5) */}
            <div className="lg:col-span-5 grid grid-rows-1 sm:grid-rows-2 gap-6">
              {/* Card 1: Compliance & Local Presence info */}
              <div className="bg-white p-6 sm:p-8 rounded-[32px] shadow-sm border border-slate-100 flex flex-col justify-center text-left">
                <div className="flex gap-4 items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0">
                    <HeartPulse className="w-6 h-6 text-emerald-600 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-none text-slate-900">18+ Years Service</h3>
                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-mono">Serving Since {BUSINESS_INFO.established}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Krishna Medicine House is dedicated to high-quality healthcare retail and wholesale in Bihar, ensuring authenticity in every dose, with uninterrupted cold storage for critical vaccines and insulins.
                </p>
                {/* Active banner inline */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-sans">
                  <span className="flex items-center text-slate-500">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-ping"></span>
                    Open Daily
                  </span>
                  <span className="text-slate-600 font-semibold">Hours: {BUSINESS_INFO.workingHours}</span>
                </div>
              </div>

              {/* Card 2: Micro statistics and client metrics */}
              <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-[32px] flex items-center justify-between shadow-md">
                <div className="flex flex-col text-left flex-1">
                  <span className="text-emerald-400 text-2xl sm:text-3xl font-extrabold">99%</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-tighter font-mono font-bold mt-1">Customer Trust</span>
                </div>
                <div className="h-12 w-px bg-slate-800 mx-4 shrink-0"></div>
                <div className="flex flex-col text-left flex-1">
                  <span className="text-emerald-400 text-2xl sm:text-3xl font-extrabold">100%</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-tighter font-mono font-bold mt-1">Genuine Drugs</span>
                </div>
                <div className="h-12 w-px bg-slate-800 mx-4 shrink-0"></div>
                <div className="flex flex-col text-left flex-1">
                  <span className="text-emerald-400 text-2xl sm:text-3xl font-extrabold">15k+</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-tighter font-mono font-bold mt-1">Happy Clients</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================
          ABOUT PREVIEW SECTION
          ====================================================== */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="absolute top-4 left-4 inset-0 border-2 border-emerald-600 rounded-2xl -z-10 translate-x-2 translate-y-2"></div>
            <img
              src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=800&auto=format&fit=crop&referrerpolicy=no-referrer"
              alt="Krishna Medicine House Physical Store Racks"
              className="rounded-2xl shadow-xl w-full object-cover h-[350px]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Embedded Mini Highlight */}
            <div className="absolute bottom-4 right-4 bg-emerald-900 text-white p-4 rounded-xl shadow-lg text-left max-w-xs border border-emerald-800">
              <span className="font-mono text-[10px] text-emerald-400 font-bold block uppercase tracking-widest">Est. 2008</span>
              <p className="text-xs font-semibold mt-1">Belaganjs first store equipped with uninterrupted cold storage for insulins.</p>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase font-mono">About Our Pharmacy</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight font-sans">
              Serving Belaganj with Integrity, Authenticity & Expert Care
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-sans">
              Founded in 2008, <strong>Krishna Medicine House</strong> was created to bridge the gap between quality healthcare and rural patients in the Gaya-Patna Highway region. For nearly two decades, we have maintained a strict zero-compromise policy on medicine authenticity, dealing directly with authorized brand partners.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm font-sans">
              Whether you need regular chronic medications for heart and sugar care, premium pediatric/baby nutrition, specialized veterinary formulations, or basic diagnostic vital tests, our licensed pharmacy professionals are always here to serve you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex items-center space-x-3 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-bold text-emerald-950">Licensed Pharmacists</span>
              </div>
              <div className="flex items-center space-x-3 bg-teal-50 p-3 rounded-xl border border-teal-100">
                <CheckCircle className="w-5 h-5 text-teal-600" />
                <span className="text-xs font-bold text-teal-950">Cold Chain Safeguarded</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-emerald-700 font-bold hover:text-emerald-800 transition text-sm"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================
          SERVICES PREVIEW
          ====================================================== */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase font-mono">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Comprehensive Health & Pharmacy Services
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Tailored medical solutions to serve everyday patient requirements in Gaya, Bihar. Click below to view detailed benefits of each service.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((svc) => (
              <div 
                key={svc.id} 
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="bg-emerald-50 text-emerald-700 w-12 h-12 rounded-xl flex items-center justify-center mb-5 font-bold">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{svc.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">{svc.description}</p>
                </div>
                <div className="border-t border-slate-100 pt-4 mt-2 flex justify-between items-center text-xs">
                  <Link to="/services" className="text-emerald-700 font-bold hover:underline">
                    View Benefits & Coverage
                  </Link>
                  <ChevronRight className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-xl text-sm transition"
            >
              <span>Explore All Our Healthcare Services</span>
              <ArrowRight className="w-4 h-4 ml-2 text-emerald-400" />
            </Link>
          </div>

        </div>
      </section>

      {/* ======================================================
          WHY CHOOSE US SECTION (USP Cards)
          ====================================================== */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase font-mono">The Krishna USP</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight font-sans">
              Why Doctors & Patients Alike Trust Krishna Medicine House
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              In a region where medical quality is vital, we go above and beyond simple retail sales. We operate with standard clinical hygiene, rigorous checkups, and verified inventory networks.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-emerald-50 p-2 rounded-lg text-emerald-700 mr-3 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Direct Distributor Sourcing</h4>
                  <p className="text-xs text-gray-600 mt-0.5">We bypass middlemen to prevent counter-feits and keep prices lower than standard market rates.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-50 p-2 rounded-lg text-emerald-700 mr-3 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Heavy Duty Cold Storage Network</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Continuous refrigeration system with automatic heavy inverter backups keeping medications optimally preserved.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-50 p-2 rounded-lg text-emerald-700 mr-3 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Localized Farmer Services</h4>
                  <p className="text-xs text-gray-600 mt-0.5">We maintain the most complete counter for veterinary and agricultural supplements to support Belaganj farming families.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Graphic Bento Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-6 rounded-2xl border border-emerald-100 text-left space-y-3">
              <ShieldCheck className="w-10 h-10 text-emerald-700" />
              <h3 className="font-bold text-emerald-950 text-base">Full License</h3>
              <p className="text-xs text-emerald-900 leading-relaxed">Operated by fully licensed retail druggists registered under the Pharmacy Council guidelines.</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 p-6 rounded-2xl border border-teal-100 text-left space-y-3">
              <Truck className="w-10 h-10 text-teal-700" />
              <h3 className="font-bold text-teal-950 text-base">Village Delivery</h3>
              <p className="text-xs text-teal-900 leading-relaxed">Direct delivery networks covering distant local agricultural blocks and railroad crossings.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-2xl border border-blue-100 text-left space-y-3">
              <Clock className="w-10 h-10 text-blue-700" />
              <h3 className="font-bold text-blue-950 text-base">Open 365 Days</h3>
              <p className="text-xs text-blue-900 leading-relaxed">Uninterrupted healthcare service, including key government holidays and Sundays.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-2xl border border-slate-200 text-left space-y-3">
              <HeartPulse className="w-10 h-10 text-slate-700" />
              <h3 className="font-bold text-slate-950 text-base">Community Vital Check</h3>
              <p className="text-xs text-slate-900 leading-relaxed">Complimentary vitals checks (BP & Sugar) for elderly citizens who visit our physical counter.</p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          PRODUCTS CATALOG (Categorized Lead Grid)
          ====================================================== */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase font-mono">Popular Catalog</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Featured Medicines & Healthcare Supplies
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm">
              We stock products from leading brand partners. Use the filter below to explore our major catalog segments. Select any item to enquire via WhatsApp or Call.
            </p>
          </div>

          {/* Category Selectors */}
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {MEDICINE_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition duration-200 ${
                  activeCategory === category
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-white text-gray-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 bg-slate-100 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-2 right-2 bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-100">
                      {product.category}
                    </span>
                  </div>
                  <div className="p-4 text-left space-y-2">
                    <span className="text-[10px] text-gray-400 font-mono tracking-wider block uppercase">{product.manufacturer}</span>
                    <h3 className="text-sm font-bold text-gray-900 line-clamp-2 h-10">{product.name}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{product.description}</p>
                    <div className="bg-slate-50 p-2 rounded-lg text-[11px] text-gray-600 font-sans space-y-0.5">
                      <p><strong>Packing:</strong> {product.packaging}</p>
                      <p className="flex items-center">
                        <strong>Availability:</strong> 
                        <span className={`ml-1 font-bold ${product.availability === 'In Stock' ? 'text-emerald-600' : 'text-blue-600'}`}>
                          {product.availability}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}?text=Hello, I want to enquire about ${encodeURIComponent(product.name)} from Krishna Medicine House.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================
          CUSTOMER REVIEWS SECTION (No invented names, localized)
          ====================================================== */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase font-mono">Patient Feedbacks</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Verified Reviews From Local Patrons
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm">
              We compile and summarize feedback from local residents, physicians, and farmers across Belaganj block who trust our store for therapeutic needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((review) => (
              <div 
                key={review.id}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1 text-amber-500 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed mb-6">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>
                <div className="border-t border-slate-200 pt-4 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <span className="text-[10px] text-gray-400 font-mono uppercase">{review.location}</span>
                  </div>
                  <span className="text-gray-400 text-[10px]">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================
          FAQ ACCORDION SECTION
          ====================================================== */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase font-mono">Any Queries?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm">
              Find answers to common questions about prescription guidelines, delivery services, storage standards, and hours of operation.
            </p>
          </div>

          <div className="space-y-4 text-left">
            {FAQS.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 flex justify-between items-center font-bold text-sm sm:text-base text-gray-900 hover:bg-slate-50 transition text-left focus:outline-none"
                >
                  <span className="flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <span className="text-emerald-600 font-extrabold text-lg ml-4">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                
                {openFaq === index && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-slate-100 bg-emerald-50/20 font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================
          NEWSLETTER & DIGITAL INSIGHTS
          ====================================================== */}
      <section className="py-16 bg-gradient-to-tr from-emerald-950 via-teal-900 to-emerald-900 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-2xl"></div>
        <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest font-mono flex items-center">
              <BellRing className="w-4 h-4 mr-2 text-teal-400" />
              Monthly Health Reminders
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans">
              Stay Informed on Wellness & Pharmacy News
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Subscribe to get tips from pharmacists regarding vaccination schedules, chronic dosage routines, and exclusive discounts for local senior citizens in Belaganj.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-white/10 text-white placeholder-slate-400 border border-white/20 p-3.5 rounded-xl text-sm focus:outline-none focus:border-teal-400 flex-grow"
                />
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-emerald-950 font-bold p-3.5 rounded-xl text-sm transition flex items-center justify-center space-x-2 shrink-0 shadow-md shadow-emerald-950/25"
                >
                  <Send className="w-4 h-4" />
                  <span>Subscribe</span>
                </button>
              </div>
              <p className="text-[10px] text-slate-400">
                We respects your privacy. No spam, ever. Unsubscribe with a single click.
              </p>
            </form>

            {newsletterSuccess && (
              <div className="mt-4 bg-emerald-900/80 border border-emerald-500 text-emerald-200 p-3 rounded-xl text-xs flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Thank you! You have subscribed to monthly health tips successfully.</span>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ======================================================
          CONTACT DIRECT CAL ACTION
          ====================================================== */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-sm">
          <HeartPulse className="w-12 h-12 text-emerald-600 mx-auto" />
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight font-sans">
            Need Immediate Medicine Assistance?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
            Have a question about a prescription or stock availability? Call our on-duty pharmacist directly or text us on WhatsApp for lightning-fast responses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-8 rounded-xl text-sm transition flex items-center space-x-2 shadow-md shadow-emerald-200"
            >
              <Phone className="w-4 h-4" />
              <span>Call Pharmacist Now</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-50 border border-emerald-200 text-emerald-700 font-bold py-3.5 px-8 rounded-xl text-sm transition flex items-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat Service</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
