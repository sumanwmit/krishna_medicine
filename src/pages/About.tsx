import { Link } from 'react-router-dom';
import { ShieldCheck, Eye, Compass, Heart, Award, Calendar, Check, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO, TIMELINE } from '../data';
import SEO from '../components/SEO';

export default function About() {
  const values = [
    {
      title: 'Therapeutic Authenticity',
      desc: 'We enforce absolute verification of all batch numbers, active pharma ingredients, and expiry dates before drug storage.',
      icon: ShieldCheck,
      color: 'emerald'
    },
    {
      title: 'Ethical Dispensing',
      desc: 'No drug sales without required physician approvals, ensuring patient compliance and combating self-medication dangers.',
      icon: Heart,
      color: 'teal'
    },
    {
      title: 'Local Village Support',
      desc: 'Ensuring deep outreach to poor or remote agricultural settlements around Gaya with subsidized local deliveries.',
      icon: Compass,
      color: 'blue'
    }
  ];

  return (
    <div id="about-page-container">
      <SEO 
        title="Our Story & Pharmacists Pledge"
        description="Learn about Krishna Medicine House in Belaganj, Bihar. Tracing our history from 2008, our clinical standards, certified cold-chain storage, and pledge of authentic pharmaceuticals."
        keywords="about Krishna Medicine House, pharmacy history Belaganj, Krishna Kumar pharmacist Bihar, Gaya pharmacy store, authentic medicines Belaganj"
        path="/about"
      />

      {/* ======================================================
          HERO BANNER (Geometric Balance Style)
          ====================================================== */}
      <section className="bg-gradient-to-br from-teal-900 to-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden rounded-[32px] mx-4 sm:mx-6 lg:mx-8 my-8 shadow-sm">
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-bold text-teal-300 tracking-widest uppercase font-mono">Who We Are</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Our Story, Standards & Core Beliefs</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Anchored in Belaganj since {BUSINESS_INFO.established}, we are dedicated to setting high benchmarks for pharmaceutical retailing in Gaya, Bihar.
          </p>
        </div>
      </section>

      {/* ======================================================
          BUSINESS STORY Section
          ====================================================== */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Editorial Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase font-mono">The History</span>
            <h2 className="text-2xl sm:text-3.5xl font-bold text-gray-900 tracking-tight leading-snug">
              Providing Genuine Healthcare Access to Gaya’s Rural Corridors Since 2008
            </h2>
            <div className="space-y-4 text-gray-600 text-xs sm:text-sm leading-relaxed">
              <p>
                In 2008, Belaganj was experiencing a lack of reliable medicine distribution. Patients traveling back from hospitals in Patna or Gaya had to search for genuine medications, often ending up with sub-standard products from unchecked outlets. 
              </p>
              <p>
                Seeing this acute crisis, <strong>Krishna Medicine House</strong> was founded on the main Patna-Gaya highway near the block headquarters. With the core mission to retail only 100% genuine pharmaceuticals, we became the first local retailer to establish certified cooling systems for vaccines and insulins, securing lives through uninterrupted quality.
              </p>
              <p>
                Over the years, our operations have evolved to support local agricultural health needs by stocking high-efficacy veterinary supplements, animal therapeutics, and pediatric care brands. We have built strong bonds with families and doctors who rely on our transparency.
              </p>
            </div>

            {/* Quote block */}
            <blockquote className="border-l-4 border-emerald-600 pl-4 italic text-xs sm:text-sm text-emerald-950 font-medium bg-emerald-50/50 p-4 rounded-r-xl">
              &ldquo;We don’t just sell boxes of medicines. We dispense hope, relief, and clinical safety to the community of Belaganj.&rdquo;
            </blockquote>
          </div>

          {/* Side Graphic / Badges */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-2xl border border-slate-200 text-left">
              <h3 className="text-gray-900 font-bold text-base mb-3 flex items-center">
                <Award className="w-5 h-5 text-emerald-600 mr-2" /> Our Core Credentials
              </h3>
              <ul className="space-y-3.5 text-xs text-gray-600">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-3 mt-0.5 shrink-0" />
                  <span>Licensed under Food & Drugs Control Department, Govt. of Bihar.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-3 mt-0.5 shrink-0" />
                  <span>Registered under State Pharmacy Council with on-site certified pharmacists.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-3 mt-0.5 shrink-0" />
                  <span>Full barcode scanning and software bill generation for complete traceability.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-600 mr-3 mt-0.5 shrink-0" />
                  <span>Verified 24/7 power backup systems for critical drug refrigeration.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-emerald-950 text-emerald-100 rounded-2xl text-left">
              <p className="text-2xl font-bold font-mono text-white">100%</p>
              <p className="text-xs font-semibold text-emerald-400 mt-1 uppercase tracking-wider font-mono">No Fake Medicine Policy</p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                We deal directly with recognized brand distributors. Every strip, bottle, and syringe is tracked with computerized batch records.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================
          MISSION & VISION & VALUES
          ====================================================== */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm text-left space-y-4">
              <div className="bg-emerald-50 text-emerald-700 w-12 h-12 rounded-xl flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our Clinical Mission</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                To provide consistent, immediate, and affordable access to authentic prescription drugs and veterinary healthcare products for the families of Belaganj and nearby blocks in Bihar, backed by expert pharmacist counseling and extreme quality control.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm text-left space-y-4">
              <div className="bg-teal-50 text-teal-700 w-12 h-12 rounded-xl flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our Strategic Vision</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                To build a model, digitized rural pharmacy network across the Gaya region that blends fast smartphone prescription bookings, uninterrupted vaccine cold storage, generic medicine advocacy, and veterinary diagnostics.
              </p>
            </div>

          </div>

          {/* Values Grid */}
          <div className="space-y-6 pt-4">
            <h3 className="text-gray-900 text-lg font-bold uppercase tracking-wider text-center font-sans">
              Our Core Operating Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-left space-y-3">
                  <div className="text-emerald-600 bg-emerald-50 w-10 h-10 rounded-lg flex items-center justify-center">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">{v.title}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================
          TIMELINE Section
          ====================================================== */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase font-mono">Our Timeline</span>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Our Growth & Milestones</h2>
            <p className="text-gray-600 text-xs sm:text-sm">
              Tracing our history of consistent service and trust build-up in the Gaya district over the last 18 years.
            </p>
          </div>

          <div className="relative border-l-2 border-emerald-100 pl-6 sm:pl-8 space-y-10 text-left">
            {TIMELINE.map((time, idx) => (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 bg-emerald-600 text-white rounded-full p-1.5 border-4 border-white shadow-md">
                  <Calendar className="w-3 h-3 text-white" />
                </span>
                
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                  <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">{time.year}</span>
                  <h3 className="font-bold text-gray-900 text-base mt-2">{time.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">{time.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================
          OWNER MESSAGE Section (Real Pledge)
          ====================================================== */}
      <section className="py-16 bg-emerald-950 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          {/* Pharmacist photo frame */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-500/40">
              <img
                src="https://images.unsplash.com/photo-1631549916768-4119b2e55c26?q=80&w=600&auto=format&fit=crop&referrerpolicy=no-referrer"
                alt="Krishna Kumar Managing Pharmacist"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 to-transparent p-4">
                <p className="font-bold text-sm text-white">Krishna Kumar</p>
                <p className="text-[10px] text-emerald-400 font-mono tracking-wider">Registered Pharmacist & Founder</p>
              </div>
            </div>
          </div>

          {/* Owner Message copy */}
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase font-mono">Founders Pledge</span>
            <h2 className="text-2xl sm:text-3.5xl font-extrabold text-white tracking-tight">
              &ldquo;Your Safety is Our Highest Responsibility&rdquo;
            </h2>
            <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-300 font-sans">
              <p>
                When we launched Krishna Medicine House, my focus was not on opening a standard business. My drive was to establish a clinical point where everyone from rich city travelers to poor farmers of adjacent villages could expect the exact same world-class medicine quality.
              </p>
              <p>
                In rural Bihar, health literacy can sometimes be challenging. That is why we dedicate extra time at our counter to translate medical dosages, explain insulin cooling steps, and offer cheaper certified generic options so that regular treatments are never skipped due to financial burdens.
              </p>
              <p>
                I personally guarantee that every drug sold at our counter is fully sourced from authorized manufacturing houses. We stand solid behind our community and will continue to expand our digital delivery channels to make healthcare seamless.
              </p>
            </div>
            <div className="pt-2">
              <p className="font-bold text-emerald-400 text-sm">Krishna Kumar</p>
              <p className="text-xs text-slate-400">Founder & Managing Director, Krishna Medicine House</p>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================
          CTA FOOTER
          ====================================================== */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <Award className="w-12 h-12 text-emerald-600 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-sans">
            Have Questions for our Pharmacists?
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Whether you want to check drug alternatives, order chronic care items, or get consultation regarding dosage guidelines, we are ready to assist.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl text-xs transition flex items-center space-x-2 shadow-md shadow-emerald-100"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Prescription WhatsApp Query</span>
            </a>
            <Link
              to="/contact"
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl text-xs transition flex items-center space-x-2"
            >
              <span>View Store Directions</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
