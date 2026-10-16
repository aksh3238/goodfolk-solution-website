import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { servicesData } from '../data/servicesData';
import { servicesFAQs } from '../data/faqsData';
import { VisualMockup } from '../components/VisualMockup';
import {
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Info,
  Calendar,
  X
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showPromoBanner, setShowPromoBanner] = useState(true);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-0 text-[#2B2521] selection:bg-[#F2C94C]/40">
      {/* Optional Promotional / Consultation Banner Area */}
      {showPromoBanner && (
        <aside aria-label="Agency consultation notice" className="bg-[#FAF5E8] border-b border-[#E9D9A8] py-3 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs text-[#4B3025]">
            <div className="flex items-center gap-2">
              <span className="font-bold uppercase tracking-wider bg-[#F2C94C]/50 px-2 py-0.5 rounded">
                Agency Notice
              </span>
              <span>
                Currently accepting new creative briefs for upcoming quarter launches. Complimentary 30-minute scope review included.
              </span>
            </div>
            <button
              onClick={() => setShowPromoBanner(false)}
              className="text-[#4B3025]/60 hover:text-[#4B3025] p-1 rounded transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </aside>
      )}

      {/* Hero Section */}
      <section className="bg-[#FFFDF8] border-b border-[#4B3025]/10 pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#4B3025] bg-[#E9D9A8]/40 px-3 py-1 rounded">
              OUR CAPABILITIES
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#4B3025] font-['Manrope'] tracking-tight leading-[1.15]">
              Creative Solutions for Ambitious Brands.
            </h1>

            <p className="text-lg sm:text-xl text-[#2B2521]/80 leading-relaxed font-normal">
              From brand identity to digital campaigns, we create thoughtful creative solutions that help businesses stand out and grow.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="px-7 py-3 text-sm font-semibold text-[#4B3025] bg-[#F2C94C] hover:bg-[#ebbf3c] active:translate-y-0.5 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Detailed Service Sections */}
      <section className="py-16 lg:py-24 bg-[#FFFDF8] border-b border-[#4B3025]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 pt-6 border-t border-[#4B3025]/10 first:border-0 first:pt-0"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Mockup Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="rounded-2xl overflow-hidden border border-[#4B3025]/15 shadow-md bg-[#FAF5E8]">
                      <VisualMockup
                        type={service.visualType}
                        badgeText={service.title.toUpperCase()}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Text & Deliverables Column */}
                  <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-[#4B3025] bg-[#E9D9A8]/50 px-2 py-0.5 rounded">
                          0{index + 1}
                        </span>
                        <span className="text-xs font-semibold text-[#4B3025]/80">
                          {service.accentSubtitle}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-[#4B3025] font-['Manrope']">
                        {service.title}
                      </h2>

                      {/* Exact prompt short description */}
                      <p className="text-base font-semibold text-[#4B3025]/90">
                        “{service.shortDescription}”
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#2B2521]/80 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Deliverables List */}
                    <div className="space-y-3 bg-[#FAF5E8]/60 p-5 rounded-xl border border-[#E9D9A8]">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#4B3025] font-['Manrope']">
                        Key Deliverables &amp; Scope
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2B2521]/90">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#4B3025] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => navigate('/contact')}
                        className="px-6 py-2.5 text-xs font-semibold text-[#4B3025] bg-[#F2C94C] hover:bg-[#ebbf3c] active:translate-y-0.5 rounded-lg transition-colors flex items-center gap-2"
                      >
                        <span>Discuss Your {service.title} Project</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* From Brief to Delivery Process Section */}
      <section className="py-20 bg-[#FAF5E8]/50 border-b border-[#4B3025]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4B3025] font-['Manrope']">
              HOW WE WORK
            </span>
            <h2 className="text-3xl font-extrabold text-[#4B3025] font-['Manrope']">
              From Brief to Delivery
            </h2>
            <p className="text-sm text-[#2B2521]/75">
              Clear stages, transparent feedback milestones, and structured handoffs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white border border-[#4B3025]/15 space-y-2">
              <span className="text-xs font-mono font-bold text-[#4B3025]">STAGE 01</span>
              <h3 className="text-base font-bold text-[#4B3025] font-['Manrope']">Brief</h3>
              <p className="text-xs text-[#2B2521]/80 leading-relaxed">
                We understand your goals, requirements, and vision through targeted briefing discussions.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-[#4B3025]/15 space-y-2">
              <span className="text-xs font-mono font-bold text-[#4B3025]">STAGE 02</span>
              <h3 className="text-base font-bold text-[#4B3025] font-['Manrope']">Create</h3>
              <p className="text-xs text-[#2B2521]/80 leading-relaxed">
                Our team turns your brief into creative solutions with iterative moodboards and design sprints.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-[#4B3025]/15 space-y-2">
              <span className="text-xs font-mono font-bold text-[#4B3025]">STAGE 03</span>
              <h3 className="text-base font-bold text-[#4B3025] font-['Manrope']">Review &amp; Approve</h3>
              <p className="text-xs text-[#2B2521]/80 leading-relaxed">
                You review the work and share your feedback for final revision rounds and sign-off.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-[#4B3025]/15 space-y-2">
              <span className="text-xs font-mono font-bold text-[#4B3025]">STAGE 04</span>
              <h3 className="text-base font-bold text-[#4B3025] font-['Manrope']">Deliver &amp; Pay</h3>
              <p className="text-xs text-[#2B2521]/80 leading-relaxed">
                We deliver the approved final production files, with payment completed as per agreed terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services FAQs Accordion */}
      <section className="py-20 lg:py-24 bg-[#FFFDF8] border-b border-[#4B3025]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4B3025] font-['Manrope']">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl font-extrabold text-[#4B3025] font-['Manrope']">
              Services &amp; Engagement FAQs
            </h2>
            <p className="text-sm text-[#2B2521]/75">
              Straightforward answers regarding our capabilities, timelines, and collaboration model.
            </p>
          </div>

          <div className="space-y-3">
            {servicesFAQs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#4B3025]/15 bg-[#FAF5E8]/30 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#4B3025] hover:bg-[#FAF5E8] transition-colors focus-visible:outline-none"
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
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#2B2521]/85 leading-relaxed border-t border-[#4B3025]/10 bg-white/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#4B3025] text-[#FFFDF8] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFDF8] font-['Manrope']">
            Ready to Build Something Great?
          </h2>
          <p className="text-base text-[#E9D9A8] max-w-xl mx-auto leading-relaxed">
            Have a project in mind? Let's turn your ideas into impactful creative work.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 text-sm font-semibold text-[#4B3025] bg-[#F2C94C] hover:bg-[#ebbf3c] rounded-xl shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
