import { MedicineProduct, ServiceDetail, GalleryItem, CustomerReview, FAQItem } from './types';

export const BUSINESS_INFO = {
  name: 'Krishna Medicine House',
  category: 'Pharmacy & Healthcare Retailer',
  phone: '+919308597211',
  whatsapp: '+919308597211', // WhatsApp link: https://wa.me/919308597211
  whatsappDisplay: '09308597211',
  address: 'Krishna Medicine House, Main Road, Belaganj, Bihar 804403',
  district: 'Gaya',
  state: 'Bihar',
  pincode: '804403',
  landmark: 'Near Belaganj Block Office, NH-83 Patna-Gaya Road',
  email: 'krishnamedicinehouse@gmail.com',
  workingHours: '08:00 AM - 10:00 PM',
  workingDays: 'Open 7 Days a week (Sunday: 8 AM - 8 PM)',
  googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.375253896585!2d84.99285227546252!2d25.04418657523956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f3238640000001%3A0xc47f0709b4f997da!2sKrishna%20Medicine%20House!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
  googleMapsLink: 'https://maps.google.com/?cid=14159187317374097370', // Example CID
  established: '2008',
  tagline: 'Your Trusted Health & Wellness Partner in Belaganj',
  usp: [
    '100% Authentic & Certified Medicines',
    'Free Home Delivery across Belaganj & Adjacent Villages',
    'Experienced Pharmacist Guidance & Counsel',
    'Cold Chain Maintained for Vaccines & Insulins',
    'Wide Stock of Chronic & Acute Care Drugs',
    'Veterinary & Agricultural Health Supplements'
  ]
};

export const SERVICES: ServiceDetail[] = [
  {
    id: 'prescription-fulfillment',
    title: 'Prescription Dispensing',
    description: 'Accurate and safe dispensing of registered physician prescriptions with professional double-check verification.',
    longDescription: 'We provide accurate and safe dispensing of doctor-prescribed medications. Our registered pharmacist carefully reviews your dosage instructions, screens for drug-drug interactions, and labels every bottle clearly to ensure patient compliance and safety.',
    benefits: [
      'Genuine, batch-tested prescription medications',
      'Detailed explanation of dosages and potential interactions',
      'Special ordering for rare or specialized orphan drugs',
      'Computerized inventory for easy history retrieval'
    ],
    iconName: 'FileText'
  },
  {
    id: 'home-delivery',
    title: 'Express Local Home Delivery',
    description: 'Convenient home delivery of chronic medicines and wellness essentials across Belaganj and nearby villages.',
    longDescription: 'To serve the elderly and remote families in Belaganj and nearby areas, we offer prompt home delivery of vital medicines. Simply upload your prescription via WhatsApp, and our verified executive will deliver the medicines directly to your doorstep.',
    benefits: [
      'Same-day delivery within Belaganj town limits',
      'Safe, hygienic, and tamper-proof packaging',
      'Cash on Delivery & digital UPI payment options accepted',
      'Scheduled monthly refills automatically sent to your door'
    ],
    iconName: 'Truck'
  },
  {
    id: 'health-consultation',
    title: 'Pharmacist Consultation & Vital Checkups',
    description: 'Complimentary blood pressure monitoring, blood sugar testing, and personalized guidance on medicine side effects.',
    longDescription: 'Health is more than just buying pills. Our licensed pharmacist offers basic wellness checks including free Blood Pressure checks, blood glucose monitoring, and personalized wellness counseling regarding dietary precautions for hypertension and diabetes.',
    benefits: [
      'No-waiting quick diagnostic testing checks',
      'Personalized counseling on chronic disease management',
      'Weight tracking and basic nutritional advice',
      'Timely referral guidance to major Gaya/Patna specialist doctors'
    ],
    iconName: 'HeartPulse'
  },
  {
    id: 'chronic-care',
    title: 'Chronic Disease Support Program',
    description: 'Dedicated management and subscription support for diabetes, cardiac, asthma, and thyroid care medicines.',
    longDescription: 'Long-term medication management can be complex. Our Chronic Disease Program offers dedicated support, keeping track of your monthly refill cycle, maintaining standard insulin cold chains, and offering flat group discounts on regular monthly supplies.',
    benefits: [
      'Guaranteed inventory reservation for your monthly items',
      'Strict temperature-controlled cold storage for insulins and vaccines',
      'Refill reminder alerts via SMS or WhatsApp',
      'Affordable generic alternatives suggested with proper compliance checks'
    ],
    iconName: 'Activity'
  },
  {
    id: 'veterinary-healthcare',
    title: 'Veterinary & Poultry Medicines',
    description: 'Specialized healthcare range for livestock, poultry, and dairy animals catering to farmers across Gaya region.',
    longDescription: 'As a local anchor in the agricultural community of Belaganj, we maintain a dedicated department for veterinary therapeutics, cattle feed supplements, dewormers, and livestock productivity enhancers to secure animal health and farm livelihoods.',
    benefits: [
      'Wide stock of cattle, buffalo, goat, and poultry supplements',
      'Leading brands including Virbac, MSCD, and Intas Veterinary',
      'Expert advice on mineral mixtures and lactation boosters',
      'Affordable bulk pricing for local farm owners'
    ],
    iconName: 'PawPrint'
  },
  {
    id: 'ayurvedic-wellness',
    title: 'Ayurvedic & Herbal Wellness',
    description: 'Trusted herbal therapeutics, immunity boosters, and organic wellness remedies from leading brand partners.',
    longDescription: 'Complementing modern science, we supply an extensive range of traditional Ayurvedic medicines. From pure herbs, cough syrups, and general health tonics to immunity-boosting chyawanprash from leading manufacturers like Dabur, Baidyanath, and Patanjali.',
    benefits: [
      'Authentic certified Ayurvedic formulations',
      'Natural wellness alternatives with minimal side-effects',
      'Immunity, stress-relief, and digestive care products',
      'Trusted Ayurvedic guidance available on-request'
    ],
    iconName: 'Leaf'
  }
];

export const MEDICINE_CATEGORIES = [
  'All',
  'Prescription Drugs',
  'OTC Medicines',
  'Wellness & Supplements',
  'Baby & Mother Care',
  'Personal Hygiene',
  'Veterinary & Animal Care',
  'Surgical & Devices'
];

export const POPULAR_PRODUCTS: MedicineProduct[] = [
  {
    id: 'p1',
    name: 'Glimepiride & Metformin Tablets (Diabetes Care)',
    category: 'Prescription Drugs',
    description: 'Effective prescription formula for controlling blood glucose levels in Type-2 Diabetes Mellitus.',
    packaging: 'Strip of 15 Tablets',
    manufacturer: 'Cipla Ltd.',
    availability: 'Prescription Required',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop&referrerpolicy=no-referrer'
  },
  {
    id: 'p2',
    name: 'Telmisartan & Amlodipine Tablets (Blood Pressure)',
    category: 'Prescription Drugs',
    description: 'Prescription medication utilized to treat hypertension (high blood pressure) and protect cardiovascular health.',
    packaging: 'Strip of 10 Tablets',
    manufacturer: 'Sun Pharmaceutical Industries',
    availability: 'Prescription Required',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=600&auto=format&fit=crop&referrerpolicy=no-referrer'
  },
  {
    id: 'p3',
    name: 'Multivitamin and Mineral Capsules with Zinc',
    category: 'Wellness & Supplements',
    description: 'Daily premium nutritional supplement formulated to enhance immunity, reduce fatigue, and boost stamina.',
    packaging: 'Bottle of 30 Capsules',
    manufacturer: 'GSK Healthcare',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1616671276441-2f2c277b8bf4?q=80&w=600&auto=format&fit=crop&referrerpolicy=no-referrer'
  },
  {
    id: 'p4',
    name: 'Digital Upper Arm Blood Pressure Monitor',
    category: 'Surgical & Devices',
    description: 'Fully automatic, high-precision home health monitoring device with wide-range cuff and memory storage.',
    packaging: '1 Unit Box',
    manufacturer: 'Omron Healthcare',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=600&auto=format&fit=crop&referrerpolicy=no-referrer'
  },
  {
    id: 'p5',
    name: 'Nutritional Baby Powder & Formula',
    category: 'Baby & Mother Care',
    description: 'Scientific blend of essential vitamins and protein support for healthy growth of infants.',
    packaging: '400g Tin Container',
    manufacturer: 'Nestlé Health Science',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=600&auto=format&fit=crop&referrerpolicy=no-referrer'
  },
  {
    id: 'p6',
    name: 'Herbal Cough & Sore Throat Syrup',
    category: 'OTC Medicines',
    description: 'Non-drowsy Ayurvedic fast-acting relief formula made from honey, tulsi, mulethi, and ginger.',
    packaging: '100ml Bottle',
    manufacturer: 'Dabur India',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=600&auto=format&fit=crop&referrerpolicy=no-referrer'
  },
  {
    id: 'p7',
    name: 'High-Purity Vitamin C & Zinc Chewable Tablets',
    category: 'Wellness & Supplements',
    description: 'Immunity reinforcement chewables supporting defense mechanism and healthy cell recovery.',
    packaging: 'Strip of 15 Chewables',
    manufacturer: 'Abbott Healthcare',
    availability: 'In Stock',
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?q=80&w=600&auto=format&fit=crop&referrerpolicy=no-referrer'
  },
  {
    id: 'p8',
    name: 'Veterinary Calcium & Dewormer Supplement',
    category: 'Veterinary & Animal Care',
    description: 'Lactation performance and mineral enhancement formula for high-yield dairy cows and buffaloes.',
    packaging: '1 Litre Canister',
    manufacturer: 'Virbac Animal Health',
    availability: 'On Request',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=600&auto=format&fit=crop&referrerpolicy=no-referrer'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Modern Well-Stocked Pharmacy Racks',
    category: 'Store Front',
    imageUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=800&auto=format&fit=crop&referrerpolicy=no-referrer',
    description: 'Our hygienic, temperature-controlled shelves storing authentic medicines from premium global and domestic manufacturers.'
  },
  {
    id: 'g2',
    title: 'Professional Pharmacist Dispensation',
    category: 'Services',
    imageUrl: 'https://images.unsplash.com/photo-1631549916768-4119b2e55c26?q=80&w=800&auto=format&fit=crop&referrerpolicy=no-referrer',
    description: 'Expert, licensed pharmacist double-checking prescriptions and guiding patients regarding strict safety directions.'
  },
  {
    id: 'g3',
    title: 'Cold-Chain Insulin Storage Unit',
    category: 'Facility',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop&referrerpolicy=no-referrer',
    description: 'Dedicated refrigeration equipment keeping critical temperature-sensitive vaccines and insulins perfectly preserved.'
  },
  {
    id: 'g4',
    title: 'Health Vital Testing Station',
    category: 'Services',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop&referrerpolicy=no-referrer',
    description: 'Our complimentary checkup desk where customers get blood pressure, sugar levels, and weight recorded.'
  },
  {
    id: 'g5',
    title: 'Personal & Baby Care Wellness Shelf',
    category: 'Store Front',
    imageUrl: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800&auto=format&fit=crop&referrerpolicy=no-referrer',
    description: 'Wide variety of baby care, maternal nutrition, dental hygiene, and organic skin care essentials.'
  },
  {
    id: 'g6',
    title: 'Express Doorstep Delivery Dispatch',
    category: 'Delivery',
    imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800&auto=format&fit=crop&referrerpolicy=no-referrer',
    description: 'Hygienic home-delivery parcel packing process for regular chronic-care subscriptions in Gaya region.'
  }
];

export const REVIEWS: CustomerReview[] = [
  {
    id: 'r1',
    name: 'Ramanand Yadav',
    location: 'Belaganj Market',
    rating: 5,
    comment: 'The most trusted medicine shop in Belaganj. They always have 100% genuine medicines. What I like most is that they keep insulins in a proper refrigerator, unlike other rural shops where power cuts ruin the quality. Exceptional home delivery service!',
    date: '10 days ago'
  },
  {
    id: 'r2',
    name: 'Anjali Kumari',
    location: 'Bela Railway Colony',
    rating: 5,
    comment: 'I order my grandmother’s monthly heart and diabetes medicines from Krishna Medicine House. They deliver right to our house near the station. The pharmacist is very helpful, explains the dosage clearly, and lists any food precautions.',
    date: '1 month ago'
  },
  {
    id: 'r3',
    name: 'Dr. S. K. Pathak',
    location: 'Gaya-Patna NH-83 Bypass',
    rating: 5,
    comment: 'As a local medical practitioner, I confidently advise my patients to purchase from Krishna Medicine House. They adhere strictly to drug storage regulations, maintain clean batch records, and never sell expired or unprescribed dangerous drugs. Highly professional!',
    date: '3 weeks ago'
  },
  {
    id: 'r4',
    name: 'Mahendra Singh',
    location: 'Fatehpur Village',
    rating: 5,
    comment: 'They have a fantastic inventory of veterinary medicines and cow feed vitamins! It is very hard to find cattle dewormers of brand quality locally, but Krishna Medicine House stocks everything. Excellent service for village dairy farmers.',
    date: '2 months ago'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How can I order medicines for home delivery in Belaganj?',
    answer: 'It is very simple! Just click the WhatsApp icon on our website or text us at 09308597211 with a photo of your prescription. Our team will verify it, pack your order hygienically, and deliver it to your address with custom bill statements.',
    category: 'Delivery'
  },
  {
    question: 'Are all your products and medicines authentic?',
    answer: 'Absolutely. We source all our stocks directly from certified distributors of top pharmaceutical brands like Cipla, Sun Pharma, Abbott, Dr. Reddy’s, Dabur, and GSK. We maintain full invoice traceability and batch numbers for safety.',
    category: 'Product'
  },
  {
    question: 'Do you require a doctor’s prescription for medicine dispensation?',
    answer: 'Yes, as per FDA and Government regulations, Schedule H, H1, and G medications (including antibiotics, chronic heart/diabetes medications, and strong pain relievers) strictly require a valid prescription. OTC products, vitamins, herbal supplements, and basic surgical items do not require a prescription.',
    category: 'Policy'
  },
  {
    question: 'Do you maintain cold storage for insulin and vaccines?',
    answer: 'Yes. We have a heavy-duty commercial refrigeration unit backed by an uninterrupted 24/7 power backup system. This guarantees that life-saving vaccines, insulins, and specialized injections are kept between 2°C and 8°C continuously.',
    category: 'Facility'
  },
  {
    question: 'Can you source rare medicines that are not easily available?',
    answer: 'Yes, we have custom networks with premier super-distributors in Gaya and Patna. If you need rare oncological, hormonal, or orphan disease medications, submit your request, and we will try to procure it within 24 to 48 hours.',
    category: 'Product'
  },
  {
    question: 'What are your working hours and weekly off days?',
    answer: 'We are open 7 days a week for your healthcare convenience. Our hours are 08:00 AM to 10:00 PM from Monday to Saturday. On Sundays, we are open from 08:00 AM to 08:00 PM.',
    category: 'General'
  }
];

export const TIMELINE = [
  {
    year: '2008',
    title: 'The Humble Inception',
    description: 'Krishna Medicine House was founded in Belaganj by local pharmacist entrepreneurs with a small retail setup and a promise of selling only 100% genuine medicines.'
  },
  {
    year: '2012',
    title: 'Cold Chain & Vital Station Setup',
    description: 'Upgraded facilities to include advanced refrigeration for insulins/vaccines and a free blood pressure and blood sugar check station for the general public.'
  },
  {
    year: '2017',
    title: 'Farmers & Livestock Range',
    description: 'Launched the veterinary and agricultural health division, catering to livestock owners and local dairy farms across Gaya-Patna highway villages.'
  },
  {
    year: '2021',
    title: 'Pandemic Emergency Anchor',
    description: 'Served as an uninterrupted essential service anchor for Belaganj, supplying masks, high-demand oxygen equipment, sanitizers, and antivirals with door-to-door delivery.'
  },
  {
    year: '2026',
    title: 'Digital Portal & Subscription Expansion',
    description: 'Introduced monthly repeat medicine refill schedules and online WhatsApp bookings to make authentic healthcare affordable and accessible from home.'
  }
];
