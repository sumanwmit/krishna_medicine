export interface MedicineProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  price?: string; // Optional, often priced on request or prescription
  packaging: string;
  manufacturer: string;
  availability: 'In Stock' | 'On Request' | 'Prescription Required';
  image: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
