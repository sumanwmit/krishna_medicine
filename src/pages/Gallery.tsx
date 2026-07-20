import { useState } from 'react';
import { Layers, Eye, MessageSquare, ZoomIn } from 'lucide-react';
import { BUSINESS_INFO, GALLERY_ITEMS } from '../data';
import SEO from '../components/SEO';

const categories = ['All', 'Store Front', 'Services', 'Facility', 'Delivery'];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeTab === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeTab);

  return (
    <div id="gallery-page-container">
      <SEO 
        title="Physical Store, Cold Storage & Facility Gallery"
        description="View the physical infrastructure, genuine medicine counters, dedicated vaccine cold storage refrigeration units, and delivery setups at Krishna Medicine House, Belaganj."
        keywords="pharmacy photos Belaganj, Krishna Medicine House images, drug store inside, medical shop pictures Gaya, insulin storage Bihar"
        path="/gallery"
      />

      {/* ======================================================
          HERO BANNER (Geometric Balance Style)
          ====================================================== */}
      <section className="bg-gradient-to-br from-teal-900 to-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden rounded-[32px] mx-4 sm:mx-6 lg:mx-8 my-8 shadow-sm">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-bold text-teal-300 tracking-widest uppercase font-mono">Our Infrastructure</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Our Facility & Services Gallery</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Explore the real physical store layout, hygienic medication counters, and specialized safety storage systems that make us the premier chemical retailer in Gaya district.
          </p>
        </div>
      </section>

      {/* ======================================================
          FILTERED GRID SECTION
          ====================================================== */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto border-b border-slate-100 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition duration-200 ${
                  activeTab === cat
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-50 text-gray-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition duration-300 flex flex-col text-left"
              >
                {/* Photo container */}
                <div className="relative h-60 bg-slate-100 overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-mono tracking-wider font-bold px-3 py-1 rounded-full uppercase">
                    {item.category}
                  </span>
                  
                  {/* Zoom Overlay on hover */}
                  <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => setSelectedImage(item.imageUrl)}
                      className="bg-white text-slate-900 p-3 rounded-full hover:scale-110 transition shadow-lg"
                      aria-label="View Fullscreen"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Caption content */}
                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-gray-950 text-base font-sans line-clamp-1">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================
          INTERACTIVE LIGHTBOX PORTAL MODAL
          ====================================================== */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-slate-300 text-sm font-semibold flex items-center space-x-1"
            >
              <span>Close Lightbox [×]</span>
            </button>
            <img 
              src={selectedImage} 
              alt="Fullscreen Zoomed View" 
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}

      {/* ======================================================
          INFRASTRUCTURE GUARANTEE
          ====================================================== */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Layers className="w-12 h-12 text-emerald-600 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Continuous Sanitization & Hygiene Standards</h2>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto">
            Our physical pharmacy premises are sanitized twice daily. All medicine bins and specialized boxes are kept dust-free, and we restrict entry beyond prescription counters to protect clinical environments from external contamination.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}?text=Hello, I want to inquire about a product stock from your gallery.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl text-xs transition inline-flex items-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Store Front</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
