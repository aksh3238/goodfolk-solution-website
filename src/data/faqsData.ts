import { FAQItem } from '../types';

export const servicesFAQs: FAQItem[] = [
  {
    question: 'What services does Goodfolk Solution offer?',
    answer: 'Goodfolk Solution provides five core creative solutions: Branding & Packaging (brand identity, logo design, packaging), Creative Design (social posts, Amazon A+ content, website assets), Performance Marketing Creatives (ad creatives designed to drive conversions), Video Production & Editing (promotional videos, reels, product films), and Digital Marketing & Social Media Management (content planning and campaign coordination).'
  },
  {
    question: 'Can I hire Goodfolk for a single project?',
    answer: 'Yes. While we often partner with brands on recurring or comprehensive creative retainers, we frequently execute focused standalone engagements such as a complete brand identity package, product packaging packaging rollout, or a dedicated performance ad creative testing batch.'
  },
  {
    question: 'Do you work with businesses outside India?',
    answer: 'Yes. While headquartered in India, Goodfolk Solution collaborates with businesses and brand founders worldwide. Our communication workflows, digital deliverables, and scheduling are built to support global time zones across North America, Europe, the Middle East, and Asia-Pacific.'
  },
  {
    question: 'How do project timelines work?',
    answer: 'Timelines vary directly based on project scope and deliverables. A standalone packaging design or ad creative sprint typically spans 1 to 3 weeks, whereas an end-to-end brand identity and packaging architecture system generally requires 4 to 8 weeks. Accurate timelines are established during the quotation stage following an in-depth review of your brief.'
  },
  {
    question: 'How are quotations and payments handled?',
    answer: 'Every quote is tailored to the agreed scope of work, technical requirements, and usage rights. Following scope agreement, engagements proceed under structured milestone terms (typically an initial project commencement advance with the balance payable upon approved file delivery), documented in a formal agreement.'
  },
  {
    question: 'Can you provide multiple creative services for one brand?',
    answer: 'Yes, this is one of our primary advantages as a unified creative partner. For example, we frequently develop an identity and packaging system, followed immediately by Amazon A+ e-commerce assets and paid advertising campaign creatives to ensure seamless aesthetic continuity across all touchpoints.'
  }
];

export const contactFAQs: FAQItem[] = [
  {
    question: 'What information should I include in my enquiry?',
    answer: 'To help us understand your vision, share a brief description of your business, the core service you need, any existing brand links or references, your approximate timeline or launch target, and your estimated budget range if known.'
  },
  {
    question: 'How do you determine project pricing?',
    answer: 'We quote on a scope-based model rather than generic flat rates. Pricing reflects the complexity of deliverables, number of visual variations, timeline urgency, and production requirements. We do not publish fixed rate cards because every brand challenge is distinct.'
  },
  {
    question: 'Do you require an advance payment?',
    answer: 'Yes. In accordance with professional creative agency standards, all confirmed engagements require a scheduled advance deposit before creative exploration and production work begins, with agreed milestone or final delivery payments upon completion.'
  },
  {
    question: 'Can I discuss multiple services in one enquiry?',
    answer: 'Absolutely. Select your primary service requirement in the form dropdown and outline any secondary services (such as packaging plus performance ad creatives) in the project details field. We will structure a cohesive combined proposal.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes. We frequently collaborate with international founders and marketing directors. Invoicing is processed smoothly through international commercial wire / payment arrangements compliant with export service regulations.'
  }
];

export interface TestimonialPreview {
  id: string;
  clientName: string;
  role: string;
  company: string;
  feedback: string;
  projectReference: string;
  isPlaceholderPreview: boolean;
}

export const testimonialsPreviewData: TestimonialPreview[] = [
  {
    id: 't-1',
    clientName: 'Partner Feedback Placeholder #1',
    role: 'Founder & Managing Director',
    company: 'Consumer Goods Brand (Preview)',
    feedback: 'Goodfolk brought remarkable clarity and editorial precision to our brand identity and packaging rollout. Their disciplined process from brief to delivery meant every asset was thoughtful and shelf-ready.',
    projectReference: 'Complete Identity & Packaging System',
    isPlaceholderPreview: true
  },
  {
    id: 't-2',
    clientName: 'Partner Feedback Placeholder #2',
    role: 'Head of Marketing',
    company: 'DTC E-commerce Studio (Preview)',
    feedback: 'The performance ad creative variations designed by Goodfolk transformed our visual narrative. They understand commercial aesthetics and how to make product benefits stand out in high-speed mobile feeds.',
    projectReference: 'Paid Performance Creative Campaign',
    isPlaceholderPreview: true
  },
  {
    id: 't-3',
    clientName: 'Partner Feedback Placeholder #3',
    role: 'Co-Founder & Creative Lead',
    company: 'Specialty Beverage Co. (Preview)',
    feedback: 'Having one creative partner handle packaging, promotional video editing, and digital assets kept our brand language completely coherent from day one. Thoughtful, communicative, and reliable.',
    projectReference: 'Beverage Packaging & Promotional Video',
    isPlaceholderPreview: true
  }
];
