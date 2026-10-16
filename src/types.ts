export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  visualType: 'branding' | 'creative' | 'performance' | 'video' | 'digital';
  accentSubtitle: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Branding' | 'Packaging' | 'Creative Design' | 'E-commerce' | 'Performance Marketing' | 'Video & Social';
  shortDescription: string;
  isConcept: boolean;
  brief: string;
  approach: string;
  deliverables: string[];
  visualType: 'beverage' | 'cosmetics' | 'apparel' | 'tech' | 'ad_campaign' | 'social_system';
}

export interface InsightArticle {
  id: string;
  title: string;
  category: 'Branding' | 'Packaging' | 'Creative Design' | 'E-commerce' | 'Performance Marketing' | 'Digital Marketing';
  excerpt: string;
  content: string[];
  readTime: string;
  date: string;
  relatedServiceId: string;
  isDraft: boolean;
  keyTakeaways: string[];
}

export interface EnquirySubmission {
  id: string;
  submittedAt: string;
  name: string;
  email: string;
  company: string;
  service: string;
  budget?: string;
  deadline?: string;
  projectDetails: string;
  status: 'Received' | 'In Review' | 'Contacted';
}

export interface FAQItem {
  question: string;
  answer: string;
}
