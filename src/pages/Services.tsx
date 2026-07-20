import { FileText, Truck, HeartPulse, Activity, PawPrint, Leaf, Check, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data';
import SEO from '../components/SEO';

const iconMap: { [key: string]: any } = {
  FileText: FileText,
  Truck: Truck,
  HeartPulse: HeartPulse,
  Activity: Activity,
  PawPrint: PawPrint,
  Leaf: Leaf
};

export default function Services() {
  return (
    <div id="services-page-container">
      <SEO 
        title="Our Services & Healthcare Solutions"
        description="Explore the range of healthcare and pharmacy services at Krishna Medicine House in Belaganj. From prescription fulfillment and cold chain maintenance to veterinary medicine and home delivery."
        keywords="pharmacy services Belaganj, drug delivery Bihar, insulin cold chain Gaya, veterinary supplements, Ayurvedic medicines Bihar, home delivery medicines Gaya"
        path="/services"
      />

      {/* ======================================================
          HERO BANNER (Geometric Balance Style)
          ====================================================== */}
      <section className="bg-gradient-to-br from-teal-900 to-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden rounded-[32px] mx-4 sm:mx-6 lg:mx-8 my-8 shadow-sm">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-bold text-teal-300 tracking-widest uppercase font-mono">Our Operations</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Dedicated Clinical & Retail Services</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Providing reliable pharmaceutical care, chronic care subscription programs, cold chain integrity, and specialized veterinary products for our community.
          </p>
        </div>
      </section>

      {/* ======================================================
          SERVICES GRID DETAILED LIST
          ====================================================== */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase font-mono">Full Coverage</span>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight font-sans">
              Reliable Healthcare Support Built Around Patient Welfare
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm">
              We uphold clinical standards across all our departments, serving customers in Belaganj town limits and outer blocks of Gaya district.
            </p>
          </div>

          <div className="space-y-12">
            {SERVICES.map((svc, index) => {
              const IconComp = iconMap[svc.iconName] || Activity;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={svc.id}
                  className={`bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  
                  {/* Icon & Quick Abstract Column */}
                  <div className={`lg:col-span-5 space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="bg-emerald-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 font-sans">{svc.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{svc.longDescription}</p>
                    
                    {/* Action trigger */}
                    <div className="pt-3">
                      <a
                        href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}?text=Hello, I want to book/enquire about your ${encodeURIComponent(svc.title)} service.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-5 rounded-xl text-xs transition shadow-sm"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Benefits checklist Column */}
                  <div className={`lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-inner ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <span className="text-[10px] text-emerald-700 font-mono tracking-widest uppercase font-bold block mb-4">
                      Service Coverages & Patient Benefits
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {svc.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start text-xs sm:text-sm text-gray-700">
                          <Check className="w-4 h-4 text-emerald-600 mr-3 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ======================================================
          LOCAL OUTREACH INFO
          ====================================================== */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-tr from-emerald-950 to-emerald-900 rounded-3xl p-8 sm:p-12 text-white text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-2xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-bold text-emerald-400 font-mono tracking-widest uppercase">Village Reach Program</span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Prescription Refill Subscriptions</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Do you or your elderly parents live in remote village blocks around Belaganj? Sign up for our monthly repeat subscription. We reserve your therapeutic dosage items, check batch dates, and deliver them on-time with zero failure.
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">Bela Station Road</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">Fatehpur Crossing</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">Panchanpur Road</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">Belaganj Block Outer</span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col space-y-3 shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold py-3.5 px-6 rounded-xl text-xs text-center transition flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Subscriptions</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}?text=Hello, I want to learn more about your village refill subscription service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold py-3 px-6 rounded-xl text-xs text-center transition"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
