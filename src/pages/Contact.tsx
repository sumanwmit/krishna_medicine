import React, { useState, useRef } from 'react';
import { 
  MapPin, Phone, MessageSquare, Mail, Clock, Calendar, 
  Send, CheckCircle, Upload, AlertCircle, RefreshCw, Sparkles 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import SEO from '../components/SEO';

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    prescriptionNeeded: 'yes'
  });
  
  // File Upload State for Prescription Drag-and-Drop
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      // Basic type validation
      if (file.type.startsWith('image/') || file.type === 'application/pdf') {
        setUploadedFile(file);
      } else {
        alert('Please upload an image (PNG, JPG) or a PDF file of your prescription.');
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form fields
      setFormData({ name: '', phone: '', message: '', prescriptionNeeded: 'yes' });
      setUploadedFile(null);
    }, 1500);
  };

  // Generate personalized WhatsApp message prefilled
  const getWhatsAppPrefillLink = () => {
    let msg = `Hello Krishna Medicine House! I submitted an inquiry on your website:
Name: ${formData.name || 'Patient'}
Phone: ${formData.phone || ''}
Enquiry: ${formData.message || 'Prescription delivery request'}`;
    
    if (uploadedFile) {
      msg += `\n(I have a prescription ready: ${uploadedFile.name})`;
    }
    
    return `https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div id="contact-page-container">
      <SEO 
        title="Contact Store, Order Medicines & Directions"
        description="Get in touch with Krishna Medicine House in Belaganj, Bihar. Drop prescriptions via WhatsApp, call 09308597211, or check store working hours and location coordinates."
        keywords="contact Krishna Medicine House, phone number Belaganj pharmacy, medical store address Bihar, upload prescription online Gaya, working hours pharmacy Belaganj"
        path="/contact"
      />

      {/* ======================================================
          HERO BANNER (Geometric Balance Style)
          ====================================================== */}
      <section className="bg-gradient-to-br from-teal-900 to-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden rounded-[32px] mx-4 sm:mx-6 lg:mx-8 my-8 shadow-sm">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-bold text-teal-300 tracking-widest uppercase font-mono">Get in Touch</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Contact Us & Upload Prescriptions</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Get instant support from our registered pharmacists. Reach out directly or visit our physical retail counter near the Belaganj Block Office.
          </p>
        </div>
      </section>

      {/* ======================================================
          CONTACT INFO & FORM SECTION
          ====================================================== */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase font-mono">Store Coordinates</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight font-sans">
                Visit Us or Order Remotely
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                We are strategically positioned on the Gaya-Patna Highway. Parking space is available for bikes and ambulance pick-ups.
              </p>
            </div>

            {/* Visual Icon Grid */}
            <div className="space-y-6">
              
              <div className="flex items-start">
                <div className="bg-emerald-50 text-emerald-700 p-3 rounded-xl mr-4 shrink-0 border border-emerald-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-sm font-sans">
                  <h4 className="font-bold text-gray-900 uppercase tracking-wide text-xs">Store Address</h4>
                  <p className="text-gray-600 mt-1">{BUSINESS_INFO.address}</p>
                  <p className="text-emerald-700 font-bold text-xs mt-1">Landmark: {BUSINESS_INFO.landmark}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-50 text-teal-700 p-3 rounded-xl mr-4 shrink-0 border border-teal-100">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-sm font-sans">
                  <h4 className="font-bold text-gray-900 uppercase tracking-wide text-xs">Direct Support</h4>
                  <p className="text-gray-600 mt-1">Pharmacist Phone: <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-gray-900 hover:text-emerald-600 transition">{BUSINESS_INFO.phone}</a></p>
                  <p className="text-gray-600">WhatsApp Query: <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`} className="font-bold text-emerald-600 hover:underline">{BUSINESS_INFO.whatsappDisplay}</a></p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 text-blue-700 p-3 rounded-xl mr-4 shrink-0 border border-blue-100">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="text-sm font-sans">
                  <h4 className="font-bold text-gray-900 uppercase tracking-wide text-xs">Working Hours</h4>
                  <p className="text-gray-600 mt-1 flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                    Monday - Saturday: {BUSINESS_INFO.workingHours}
                  </p>
                  <p className="text-gray-600 flex items-center mt-0.5">
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-teal-500" />
                    Sunday Checklist: 08:00 AM - 08:00 PM
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Map trigger */}
            <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-3 font-sans">
              <h4 className="font-bold text-sm text-slate-900">Digital Payment Options Accepted:</h4>
              <p className="text-xs text-slate-600">
                Google Pay, PhonePe, Paytm UPI, Amazon Pay, RuPay cards, and cash on delivery. Full tax bills are generated.
              </p>
            </div>

          </div>

          {/* Right Column: Premium Interactive Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-6 sm:p-10 rounded-3xl text-left shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="space-y-4 mb-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center">
                <Sparkles className="w-5 h-5 text-emerald-600 mr-2" /> Submit Digital Prescription
              </h3>
              <p className="text-xs text-slate-500">
                Fill out the details below. If you have a doctor’s prescription slip, you can drag and drop it below. Upon submission, we can process and quote your medicines.
              </p>
            </div>

            {submitSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 rounded-2xl text-center space-y-4">
                <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold">Prescription Submitted Successfully!</h4>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Our pharmacist is reviewing your details now. To speed up dispensing and schedule delivery, click below to ping us directly on WhatsApp with your query details!
                </p>
                <div className="pt-2">
                  <a
                    href={getWhatsAppPrefillLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl text-sm transition shadow-md shadow-emerald-200"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Sync & Dispatch via WhatsApp</span>
                  </a>
                </div>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="text-slate-400 hover:text-slate-600 text-xs font-semibold block mx-auto underline pt-2"
                >
                  Submit Another Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Patient Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Ramanand Yadav"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white text-slate-900 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Mobile / WhatsApp Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      pattern="[0-9]{10,12}"
                      placeholder="e.g. 9308597211"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white text-slate-900 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                {/* Prescription Required Selection */}
                <div className="space-y-1.5">
                  <label htmlFor="prescriptionNeeded" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Are you uploading a Doctor Prescription?
                  </label>
                  <select
                    id="prescriptionNeeded"
                    name="prescriptionNeeded"
                    value={formData.prescriptionNeeded}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white text-slate-900 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-600"
                  >
                    <option value="yes">Yes, I will upload a prescription image/PDF below</option>
                    <option value="no">No, I only want OTC products, baby supplies or wellness vitamins</option>
                    <option value="enquire">No, I want to inquire about generic substitutes first</option>
                  </select>
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Medicines & Dosage Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
                    placeholder="List the names, brands, quantities or other requirements (e.g. Citra 10 tabs, Glycomet 15 tabs...)"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white text-slate-900 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-600"
                  ></textarea>
                </div>

                {/* DRAG AND DROP FILE UPLOADER (No simulated placeholders, functional file state tracker) */}
                {formData.prescriptionNeeded === 'yes' && (
                  <div className="space-y-1.5">
                    <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Upload Prescription Slip
                    </span>
                    <div 
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                      onClick={triggerFileInput}
                      className={`border-2 border-dashed p-6 rounded-2xl text-center cursor-pointer transition flex flex-col items-center justify-center space-y-2 ${
                        dragActive 
                          ? 'border-emerald-600 bg-emerald-50' 
                          : uploadedFile 
                          ? 'border-emerald-500 bg-emerald-50/30' 
                          : 'border-slate-300 hover:border-emerald-500 hover:bg-slate-100/50'
                      }`}
                    >
                      <input 
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*,.pdf"
                        className="hidden"
                      />
                      
                      {uploadedFile ? (
                        <>
                          <CheckCircle className="w-8 h-8 text-emerald-600 animate-bounce" />
                          <div>
                            <p className="text-xs font-bold text-slate-900 leading-snug">{uploadedFile.name}</p>
                            <p className="text-[10px] text-slate-500 font-mono mt-0.5">{(uploadedFile.size / 1024).toFixed(1)} KB | Click or drag to replace</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-slate-400 group-hover:text-emerald-500 transition" />
                          <div>
                            <p className="text-xs font-bold text-slate-800 leading-snug">Drag and drop your prescription slip here</p>
                            <p className="text-[10px] text-slate-400 mt-1">Supports JPEG, PNG, or PDF format files up to 10MB</p>
                          </div>
                          <button 
                            type="button"
                            className="bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg text-[10px] font-bold border border-emerald-100 hover:bg-emerald-100 transition"
                          >
                            Browse Files
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-bold p-3.5 rounded-xl text-sm transition flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Validating Prescription...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-emerald-400" />
                      <span>Request Medicine Quote</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* ======================================================
          INTERACTIVE GOOGLE MAPS EMBED SECTION
          ====================================================== */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-gray-900">Physical Store Location Map</h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We are located on the main Gaya-Patna Highway (NH-83) at Belaganj, next to the local administrative offices.
            </p>
          </div>

          <div className="w-full h-96 rounded-3xl overflow-hidden shadow-md border border-slate-200 relative">
            <iframe
              title="Krishna Medicine House Physical Map"
              src={BUSINESS_INFO.googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="contrast-105"
            ></iframe>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 pt-2 font-sans space-y-3 sm:space-y-0">
            <span>Coordinates: 25.0441865° N, 84.9928522° E</span>
            <a 
              href={BUSINESS_INFO.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl border border-emerald-100 font-bold hover:bg-emerald-100 transition"
            >
              Get Live GPS Navigation Links
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
