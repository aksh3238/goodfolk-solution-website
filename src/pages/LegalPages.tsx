import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#2B2521]">
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4B3025] hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Homepage</span>
      </button>

      <div className="space-y-3 border-b border-[#4B3025]/10 pb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#4B3025] font-['Manrope']">
          LEGAL &amp; COMPLIANCE
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#4B3025] font-['Manrope']">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#2B2521]/60">
          Last updated: October 2026 · Goodfolk Solution (goodfolksolution.in)
        </p>
      </div>

      <div className="space-y-6 text-sm sm:text-base text-[#2B2521]/85 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#4B3025] font-['Manrope']">
            1. Overview &amp; Data Collection
          </h2>
          <p>
            Goodfolk Solution operates the website goodfolksolution.in. We respect your privacy and are committed to protecting personal information submitted through our contact and project enquiry forms. We collect your name, business email, company name, and project briefs solely for evaluating project suitability and responding to your enquiries.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#4B3025] font-['Manrope']">
            2. Use of Information
          </h2>
          <p>
            Information collected via our website is never sold, rented, or traded with third-party advertising brokers. It is used strictly by Goodfolk Solution team members to prepare quotations, evaluate creative deliverables, and coordinate communications.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#4B3025] font-['Manrope']">
            3. Data Retention &amp; Local Storage
          </h2>
          <p>
            Enquiry data submitted on our prototype interface is logged locally in browser storage for immediate review. When connecting to production databases, records are protected with industry-standard encryption protocols.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#4B3025] font-['Manrope']">
            4. Contact
          </h2>
          <p>
            For privacy inquiries or to request removal of your submission record, contact hello@goodfolksolution.in.
          </p>
        </section>
      </div>
    </div>
  );
};

export const TermsPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#2B2521]">
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4B3025] hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Homepage</span>
      </button>

      <div className="space-y-3 border-b border-[#4B3025]/10 pb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#4B3025] font-['Manrope']">
          TERMS OF ENGAGEMENT
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#4B3025] font-['Manrope']">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs text-[#2B2521]/60">
          Last updated: October 2026 · Goodfolk Solution (goodfolksolution.in)
        </p>
      </div>

      <div className="space-y-6 text-sm sm:text-base text-[#2B2521]/85 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#4B3025] font-['Manrope']">
            1. Creative Services &amp; Scope
          </h2>
          <p>
            Goodfolk Solution provides branding, packaging, creative design, video editing, and digital marketing services. All engagements are governed by agreed scope documents detailing specific deliverables, revision rounds, timelines, and commercial consideration.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#4B3025] font-['Manrope']">
            2. Payment Terms &amp; Advance Deposits
          </h2>
          <p>
            As per our four-stage process (Brief → Create → Review &amp; Approve → Deliver &amp; Pay), creative exploration commences following the receipt of an agreed commencement deposit. Final production source files (vector dielines, raw project files, master exports) are released upon completion of final milestone payments as stipulated in project agreements.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#4B3025] font-['Manrope']">
            3. Intellectual Property
          </h2>
          <p>
            Upon receipt of final payment, approved final deliverables transfer in ownership to the client for agreed commercial usage. Concept work, unused design explorations, and preliminary sketches remain the property of Goodfolk Solution.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#4B3025] font-['Manrope']">
            4. Concept Presentation Notice
          </h2>
          <p>
            Work displayed on goodfolksolution.in marked as “Concept Work” represents agency creative case studies developed to demonstrate aesthetic methodology and packaging precision, and does not claim unauthorized corporate endorsement.
          </p>
        </section>
      </div>
    </div>
  );
};
