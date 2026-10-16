import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { servicesData } from '../data/servicesData';
import { contactFAQs } from '../data/faqsData';
import { EnquirySubmission } from '../types';
import {
  Mail,
  Instagram,
  MessageCircle,
  MapPin,
  ChevronDown,
  CheckCircle2,
  Clock,
  Send,
  AlertCircle,
  FileCheck,
  ShieldAlert
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { navigate, setIsAdminEnquiriesOpen } = useNavigation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: servicesData[0].title,
    budget: '',
    deadline: '',
    projectDetails: '',
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Business email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid business email address.';
    }
    if (!formData.projectDetails.trim()) {
      errs.projectDetails = 'Please provide details about your project or goals.';
    } else if (formData.projectDetails.trim().length < 20) {
      errs.projectDetails = 'Please provide at least 20 characters of project context.';
    }
    if (!formData.consent) {
      errs.consent = 'Please agree to the privacy policy to submit your enquiry.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const refCode = `GF-${Math.floor(100000 + Math.random() * 900000)}`;
      const submission: EnquirySubmission = {
        id: refCode,
        submittedAt: new Date().toISOString(),
        name: formData.name,
        email: formData.email,
        company: formData.company || 'Not provided',
        service: formData.service,
        budget: formData.budget || 'To be discussed',
        deadline: formData.deadline || 'Flexible',
        projectDetails: formData.projectDetails,
        status: 'Received'
      };

      try {
        const stored = localStorage.getItem('goodfolk_enquiries');
        const list = stored ? JSON.parse(stored) : [];
        list.unshift(submission);
        localStorage.setItem('goodfolk_enquiries', JSON.stringify(list));
      } catch (err) {
        console.error('Storage error:', err);
      }

      setIsSubmitting(false);
      setSubmissionId(refCode);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: servicesData[0].title,
        budget: '',
        deadline: '',
        projectDetails: '',
        consent: false
      });
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="space-y-0 text-[#2B2521] selection:bg-[#F2C94C]/40">
      {/* Hero Section */}
      <section className="bg-[#FFFDF8] border-b border-[#4B3025]/10 pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#4B3025] bg-[#E9D9A8]/40 px-3 py-1 rounded">
              GET IN TOUCH
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#4B3025] font-['Manrope'] tracking-tight">
              Let's Start a Conversation.
            </h1>

            <p className="text-lg sm:text-xl text-[#2B2521]/80 leading-relaxed font-normal">
              Tell us about your project, your goals and what you need help creating. We'll use the details to understand your requirements and plan the next step.
            </p>
          </div>
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <section className="py-16 lg:py-24 bg-[#FFFDF8] border-b border-[#4B3025]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#4B3025] font-['Manrope']">
                  DIRECT CONTACT
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4B3025] font-['Manrope']">
                  Agency Coordinates
                </h2>
                <p className="text-xs sm:text-sm text-[#2B2521]/75 leading-relaxed">
                  We maintain transparent channels for prospective brand partners. Submit an enquiry for project reviews or reach out via official handles.
                </p>
              </div>

              {/* Verified Placeholders List */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#FAF5E8]/60 border border-[#E9D9A8] flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#4B3025] text-[#F2C94C] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase text-[#4B3025]/70">
                      Official Email Placeholder
                    </span>
                    <p className="text-sm font-bold text-[#4B3025]">
                      hello@goodfolksolution.in
                    </p>
                    <p className="text-[11px] text-[#2B2521]/60 mt-0.5">
                      Monitored daily for client briefs &amp; agency queries.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF5E8]/60 border border-[#E9D9A8] flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#4B3025] text-[#F2C94C] shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase text-[#4B3025]/70">
                      Instagram Profile Placeholder
                    </span>
                    <p className="text-sm font-bold text-[#4B3025]">
                      @goodfolksolution
                    </p>
                    <p className="text-[11px] text-[#2B2521]/60 mt-0.5">
                      Visual moodboards and studio updates.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF5E8]/60 border border-[#E9D9A8] flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#4B3025] text-[#F2C94C] shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase text-[#4B3025]/70">
                      WhatsApp / Phone Placeholder
                    </span>
                    <p className="text-sm font-bold text-[#4B3025]">
                      +91 (Dedicated Business Line upon Scope Agreement)
                    </p>
                    <p className="text-[11px] text-[#2B2521]/60 mt-0.5">
                      Direct agency communication during active projects.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF5E8]/60 border border-[#E9D9A8] flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#4B3025] text-[#F2C94C] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase text-[#4B3025]/70">
                      Location &amp; Delivery
                    </span>
                    <p className="text-sm font-bold text-[#4B3025]">
                      India · Serving Brands Worldwide
                    </p>
                    <p className="text-[11px] text-[#2B2521]/60 mt-0.5">
                      Remote digital workflows aligned with global time zones.
                    </p>
                  </div>
                </div>
              </div>

              {/* What Happens Next? Box */}
              <div className="p-6 rounded-2xl bg-[#4B3025] text-[#FFFDF8] space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F2C94C] font-['Manrope']">
                  <FileCheck className="w-4 h-4 text-[#F2C94C]" />
                  <span>WHAT HAPPENS NEXT?</span>
                </div>
                <ol className="space-y-3 text-xs sm:text-sm text-[#E9D9A8]/90">
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-[#F2C94C]">1.</span>
                    <span>We review your enquiry and initial requirements.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-[#F2C94C]">2.</span>
                    <span>We clarify project goals and deliverables through a short discovery exchange.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-[#F2C94C]">3.</span>
                    <span>We prepare a transparent quotation, milestone structure, and timeline.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-[#F2C94C]">4.</span>
                    <span>Work begins after scope, deliverables, and payment terms are mutually agreed.</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Right Column: Complete Validated Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#4B3025]/15 shadow-md space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#4B3025] font-['Manrope'] mb-1">
                    Project Enquiry Form
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2B2521]/70">
                    Fields marked with <span className="text-rose-600">*</span> are required.
                  </p>
                </div>

                {submissionId ? (
                  <div className="p-8 rounded-xl bg-[#FAF5E8] border border-[#E9D9A8] text-center space-y-4 animate-in fade-in">
                    <div className="w-14 h-14 rounded-full bg-[#4B3025] text-[#F2C94C] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#4B3025] font-['Manrope']">
                      Thank You! Your Enquiry Has Been Saved.
                    </h4>
                    <p className="text-sm text-[#2B2521]/80 max-w-md mx-auto leading-relaxed">
                      Your submission has been securely recorded with confirmation code{' '}
                      <span className="font-mono font-bold text-[#4B3025] bg-[#E9D9A8]/50 px-2 py-0.5 rounded">
                        #{submissionId}
                      </span>
                      .
                    </p>
                    <p className="text-xs text-[#2B2521]/60 max-w-md mx-auto">
                      We will review your requirements and respond to your email within 1–2 business days.
                    </p>
                    <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                      <button
                        onClick={() => setSubmissionId(null)}
                        className="px-6 py-2.5 text-xs font-semibold text-[#4B3025] bg-[#F2C94C] hover:bg-[#ebbf3c] rounded-lg transition-colors"
                      >
                        Submit Another Enquiry
                      </button>
                      <button
                        onClick={() => setIsAdminEnquiriesOpen(true)}
                        className="px-4 py-2.5 text-xs font-medium text-[#4B3025] border border-[#4B3025]/20 hover:bg-white rounded-lg transition-colors"
                      >
                        Inspect Submission in Vault
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4.5">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#4B3025] mb-1 font-['Manrope']">
                          Your Name <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FFFDF8] focus:outline-none transition-colors ${
                            errors.name ? 'border-rose-500' : 'border-[#4B3025]/20 focus:border-[#4B3025]'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#4B3025] mb-1 font-['Manrope']">
                          Business Email <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@brand.com"
                          className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FFFDF8] focus:outline-none transition-colors ${
                            errors.email ? 'border-rose-500' : 'border-[#4B3025]/20 focus:border-[#4B3025]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Company & Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#4B3025] mb-1 font-['Manrope']">
                          Company / Brand
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Nordic Botanics DTC"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#4B3025]/20 bg-[#FFFDF8] focus:outline-none focus:border-[#4B3025]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#4B3025] mb-1 font-['Manrope']">
                          Service Required <span className="text-rose-600">*</span>
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#4B3025]/20 bg-[#FFFDF8] focus:outline-none focus:border-[#4B3025]"
                        >
                          {servicesData.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Budget & Deadline (Optional) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#4B3025] mb-1 font-['Manrope']">
                          Approximate Budget (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          placeholder="e.g. ₹1.5L – ₹3L or $2.5k – $5k"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#4B3025]/20 bg-[#FFFDF8] focus:outline-none focus:border-[#4B3025]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#4B3025] mb-1 font-['Manrope']">
                          Preferred Deadline (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.deadline}
                          onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                          placeholder="e.g. End of November 2026"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#4B3025]/20 bg-[#FFFDF8] focus:outline-none focus:border-[#4B3025]"
                        />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className="block text-xs font-bold text-[#4B3025] mb-1 font-['Manrope']">
                        Project Details <span className="text-rose-600">*</span>
                      </label>
                      <textarea
                        rows={5}
                        value={formData.projectDetails}
                        onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                        placeholder="Tell us about your brand vision, key challenges, target audience, and what specific deliverables you are looking for..."
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FFFDF8] focus:outline-none transition-colors ${
                          errors.projectDetails
                            ? 'border-rose-500'
                            : 'border-[#4B3025]/20 focus:border-[#4B3025]'
                        }`}
                      />
                      {errors.projectDetails && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.projectDetails}
                        </p>
                      )}
                    </div>

                    {/* Consent Checkbox */}
                    <div className="pt-1">
                      <label className="flex items-start gap-2.5 text-xs text-[#2B2521]/80 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.consent}
                          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                          className="mt-0.5 rounded text-[#4B3025] focus:ring-[#F2C94C]"
                        />
                        <span>
                          I agree to Goodfolk Solution processing this enquiry in accordance with the{' '}
                          <button
                            type="button"
                            onClick={() => navigate('/privacy')}
                            className="underline text-[#4B3025] font-semibold hover:text-[#2B2521]"
                          >
                            Privacy Policy
                          </button>
                          .
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.consent}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-9 py-3.5 text-sm font-semibold text-[#4B3025] bg-[#F2C94C] hover:bg-[#ebbf3c] active:translate-y-0.5 rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <Clock className="w-4 h-4 animate-spin" />
                            <span>Submitting Enquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Enquiry</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact FAQs Section */}
      <section className="py-20 bg-[#FAF5E8]/40 border-b border-[#4B3025]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4B3025] font-['Manrope']">
              CLARIFICATIONS &amp; POLICIES
            </span>
            <h2 className="text-3xl font-extrabold text-[#4B3025] font-['Manrope']">
              Enquiry FAQs
            </h2>
            <p className="text-sm text-[#2B2521]/75">
              Honest explanations regarding scope, advance payments, and quotes.
            </p>
          </div>

          <div className="space-y-3">
            {contactFAQs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#4B3025]/15 bg-white overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#4B3025] hover:bg-[#FAF5E8]/40 transition-colors focus-visible:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#4B3025] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#2B2521]/85 leading-relaxed border-t border-[#4B3025]/10 bg-[#FAF5E8]/20">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
