import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { servicesData } from '../data/servicesData';
import { portfolioData } from '../data/portfolioData';
import { testimonialsPreviewData } from '../data/faqsData';
import { VisualMockup } from '../components/VisualMockup';
import { EnquirySubmission } from '../types';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Target,
  Layers,
  CheckCircle2,
  Mail,
  Instagram,
  MessageCircle,
  Clock,
  Send,
  AlertCircle
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate, setSelectedProject } = useNavigation();

  // Enquiry form state for Section 10
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: servicesData[0].title,
    projectDetails: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Business email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.projectDetails.trim()) {
      errs.projectDetails = 'Please provide a brief description of your project.';
    } else if (formData.projectDetails.trim().length < 15) {
      errs.projectDetails = 'Please include a little more context (at least 15 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const submissionId = `GF-${Math.floor(100000 + Math.random() * 900000)}`;
      const newSubmission: EnquirySubmission = {
        id: submissionId,
        submittedAt: new Date().toISOString(),
        name: formData.name,
        email: formData.email,
        company: formData.company || 'Not provided',
        service: formData.service,
        projectDetails: formData.projectDetails,
        status: 'Received'
      };

      try {
        const existing = localStorage.getItem('goodfolk_enquiries');
        const list = existing ? JSON.parse(existing) : [];
        list.unshift(newSubmission);
        localStorage.setItem('goodfolk_enquiries', JSON.stringify(list));
      } catch (err) {
        console.error('Failed to store submission:', err);
      }

      setIsSubmitting(false);
      setSubmitSuccess(submissionId);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: servicesData[0].title,
        projectDetails: ''
      });
    }, 450);
  };

  return (
    <div className="space-y-0 text-[#2B2521] selection:bg-[#F2C94C]/40">
      {/* =========================================================================
          SECTION 2: HERO BANNER (1920 x 720 canvas aspect ratio feel)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#FFFDF8] border-b border-[#4B3025]/10 pt-10 pb-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[520px]">
            {/* Left Column: Real typography & Action CTAs */}
            <div className="lg:col-span-6 space-y-6 lg:pr-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4B3025] bg-[#E9D9A8]/40 px-3 py-1.5 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4B3025]" />
                <span>Creative Advertising &amp; Digital Marketing</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-[#4B3025] font-['Manrope'] leading-[1.12] tracking-tight">
                We Build Brands That Move Businesses Forward.
              </h1>

              <p className="text-base sm:text-lg text-[#2B2521]/80 leading-relaxed max-w-xl">
                We combine strategy, creative design, branding, and digital marketing to help businesses stand out, connect with the right audience, and grow.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-7 py-3.5 text-sm font-semibold text-[#4B3025] bg-[#F2C94C] hover:bg-[#ebbf3c] active:translate-y-0.5 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2 whitespace-nowrap"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('/portfolio')}
                  className="px-6 py-3.5 text-sm font-medium text-[#4B3025] bg-[#FFFDF8] hover:bg-[#FAF5E8] border border-[#4B3025]/25 rounded-lg transition-colors whitespace-nowrap"
                >
                  Explore Our Work
                </button>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-[#2B2521]/70 border-t border-[#4B3025]/10">
                <div>
                  <span className="font-bold text-[#4B3025]">Based in India</span> · Global Reach
                </div>
                <div>·</div>
                <div>
                  <span className="font-bold text-[#4B3025]">5 Core Disciplines</span> Under One Roof
                </div>
              </div>
            </div>

            {/* Right Column: High-fidelity realistic campaign visual */}
            <div className="lg:col-span-6 h-full flex items-center justify-center">
              <div className="w-full aspect-[16/10] sm:aspect-[16/11] lg:aspect-[16/11] max-w-xl lg:max-w-none shadow-2xl rounded-2xl overflow-hidden border border-[#4B3025]/15">
                <VisualMockup type="hero" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: TRUSTED BY
          ========================================================================= */}
      <section className="py-14 bg-[#FAF5E8]/60 border-b border-[#4B3025]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-[#4B3025] font-['Manrope']">
            TRUSTED BY
          </h2>
          <p className="text-sm text-[#2B2521]/70 max-w-xl mx-auto">
            Brands that trust us to bring their vision to life.
          </p>

          {/* Clean neutral placeholders strip - honest agency framing */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center opacity-85">
            {[
              'AURA BOTANICA',
              'KORA STUDIO',
              'SOLSTICE CO.',
              'VALE APPAREL',
              'TERRA CERAMIC',
              'NORDIC LABS'
            ].map((brandName, idx) => (
              <div
                key={idx}
                className="px-4 py-3 rounded-lg border border-[#4B3025]/10 bg-white/70 hover:bg-white transition-colors flex items-center justify-center"
              >
                <span className="text-xs font-bold tracking-widest text-[#4B3025]/80 font-['Manrope']">
                  {brandName}
                </span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[#2B2521]/50 pt-2 italic">
            *Representative brand collaborations and concept partner profiles.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR SERVICES
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#FFFDF8] border-b border-[#4B3025]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B3025] font-['Manrope'] tracking-tight">
              Our Services
            </h2>
            <p className="text-base text-[#2B2521]/80 leading-relaxed">
              Creative solutions designed to build brands, capture attention, and support business growth.
            </p>
          </div>

          {/* 5 Premium Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                onClick={() => navigate('/services', service.id)}
                className={`group cursor-pointer rounded-2xl bg-[#FFFDF8] border border-[#4B3025]/15 hover:border-[#4B3025]/40 transition-all duration-200 hover:shadow-lg flex flex-col overflow-hidden ${
                  index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Visual Asset Container */}
                <div className="w-full bg-[#FAF5E8] overflow-hidden border-b border-[#4B3025]/10">
                  <VisualMockup
                    type={service.visualType}
                    badgeText={service.title.toUpperCase()}
                    className="group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#4B3025]/70">
                        0{index + 1}.
                      </span>
                      <span className="text-xs text-[#4B3025] font-medium bg-[#E9D9A8]/40 px-2.5 py-0.5 rounded">
                        {service.accentSubtitle}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#4B3025] font-['Manrope'] group-hover:text-[#2B2521] transition-colors">
                      {service.title}
                    </h3>

                    {/* Exact description from prompt */}
                    <p className="text-sm text-[#2B2521]/80 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#4B3025]/10 flex items-center justify-between text-xs font-semibold text-[#4B3025]">
                    <span>Learn more &amp; deliverables</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section CTA */}
          <div className="text-center pt-4">
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#FFFDF8] bg-[#4B3025] hover:bg-[#39241c] rounded-lg transition-colors shadow-sm"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-[#F2C94C]" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FEATURED WORK (Selected Work)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#FAF5E8]/40 border-b border-[#4B3025]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B3025] font-['Manrope'] tracking-tight">
                Selected Work
              </h2>
              <p className="text-base text-[#2B2521]/80 leading-relaxed">
                A glimpse of the brands we build, the stories we tell, and the impact we create.
              </p>
            </div>
            <button
              onClick={() => navigate('/portfolio')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4B3025] hover:text-[#2B2521] border-b-2 border-[#F2C94C] pb-0.5 whitespace-nowrap self-start sm:self-auto"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 6 Visual Portfolio Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl bg-white border border-[#4B3025]/15 overflow-hidden hover:border-[#4B3025]/40 transition-all hover:shadow-lg flex flex-col"
              >
                <div className="relative overflow-hidden bg-[#FAF5E8]">
                  <VisualMockup
                    type={project.visualType}
                    badgeText={project.category.toUpperCase()}
                    className="group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#4B3025]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <span className="px-4 py-2 text-xs font-semibold text-[#4B3025] bg-[#F2C94C] rounded-lg shadow-md">
                      View Project Brief &amp; Mockups
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-semibold text-[#4B3025]">{project.category}</span>
                      <span className="text-[#2B2521]/60 italic">Concept Work</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#4B3025] font-['Manrope'] group-hover:text-[#2B2521] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2B2521]/75 mt-2 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#4B3025]/10 flex items-center justify-between text-xs text-[#4B3025] font-medium">
                    <span>Explore case study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#FFFDF8] border border-[#E9D9A8] text-center text-xs text-[#2B2521]/70">
            All work above is presented as original agency concept projects showcasing creative methodology and art direction.
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WHY GOODFOLK?
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#FFFDF8] border-b border-[#4B3025]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B3025] font-['Manrope'] tracking-tight">
              Why Goodfolk?
            </h2>
            <p className="text-base text-[#2B2521]/80 leading-relaxed">
              More than creative work. We build ideas that move businesses forward.
            </p>
          </div>

          {/* 3 Core Strengths in a Premium 3-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF5E8]/60 border border-[#E9D9A8] hover:border-[#4B3025]/30 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#4B3025] text-[#F2C94C] flex items-center justify-center shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#4B3025] font-['Manrope']">
                1. Creative That Stands Out
              </h3>
              <p className="text-base font-semibold text-[#4B3025]">
                Designs that capture attention.
              </p>
              <p className="text-sm text-[#2B2521]/80 leading-relaxed">
                In crowded digital feeds and dense retail aisles, average design disappears. We craft distinct visual signatures, tactile packaging, and high-contrast creative assets that demand a second look.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF5E8]/60 border border-[#E9D9A8] hover:border-[#4B3025]/30 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#4B3025] text-[#F2C94C] flex items-center justify-center shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#4B3025] font-['Manrope']">
                2. Strategy With Purpose
              </h3>
              <p className="text-base font-semibold text-[#4B3025]">
                Every idea has a clear goal.
              </p>
              <p className="text-sm text-[#2B2521]/80 leading-relaxed">
                Art for art's sake belongs in galleries; agency design belongs in the marketplace. Every typography pairing, packaging dieline, and ad variation is guided by commercial intent and audience psychology.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF5E8]/60 border border-[#E9D9A8] hover:border-[#4B3025]/30 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#4B3025] text-[#F2C94C] flex items-center justify-center shadow-sm">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#4B3025] font-['Manrope']">
                3. One Creative Partner
              </h3>
              <p className="text-base font-semibold text-[#4B3025]">
                Multiple creative services under one roof.
              </p>
              <p className="text-sm text-[#2B2521]/80 leading-relaxed">
                Eliminate the headache of managing fragmented freelancers. From your initial logo to packaging production, Amazon storefront content, and paid advertising videos, our unified team ensures absolute brand consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: OUR PROCESS (From Brief to Delivery)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#FAF5E8]/40 border-b border-[#4B3025]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4B3025] font-['Manrope']">
              WORKFLOW &amp; COLLABORATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B3025] font-['Manrope'] tracking-tight">
              From Brief to Delivery
            </h2>
            <p className="text-sm sm:text-base text-[#2B2521]/75">
              A transparent, disciplined creative process designed for predictable, high-quality outcomes.
            </p>
          </div>

          {/* 4 Steps Timeline (Horizontal desktop, vertical mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Desktop connecting guide line */}
            <div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-[#4B3025]/20 -z-0" />

            {/* Step 1 */}
            <div className="relative z-10 bg-[#FFFDF8] p-6 rounded-2xl border border-[#4B3025]/15 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#4B3025] text-[#F2C94C] font-mono font-bold flex items-center justify-center text-sm shadow-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-[#4B3025] font-['Manrope']">
                Brief
              </h3>
              <p className="text-sm text-[#2B2521]/80 leading-relaxed">
                “We understand your goals, requirements, and vision.”
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 bg-[#FFFDF8] p-6 rounded-2xl border border-[#4B3025]/15 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#4B3025] text-[#F2C94C] font-mono font-bold flex items-center justify-center text-sm shadow-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-[#4B3025] font-['Manrope']">
                Create
              </h3>
              <p className="text-sm text-[#2B2521]/80 leading-relaxed">
                “Our team turns your brief into creative solutions.”
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 bg-[#FFFDF8] p-6 rounded-2xl border border-[#4B3025]/15 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#4B3025] text-[#F2C94C] font-mono font-bold flex items-center justify-center text-sm shadow-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-[#4B3025] font-['Manrope']">
                Review &amp; Approve
              </h3>
              <p className="text-sm text-[#2B2521]/80 leading-relaxed">
                “You review the work and share your feedback for final approval.”
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 bg-[#FFFDF8] p-6 rounded-2xl border border-[#4B3025]/15 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#F2C94C] text-[#4B3025] font-mono font-bold flex items-center justify-center text-sm shadow-sm">
                04
              </div>
              <h3 className="text-lg font-bold text-[#4B3025] font-['Manrope']">
                Deliver &amp; Pay
              </h3>
              <p className="text-sm text-[#2B2521]/80 leading-relaxed">
                “We deliver the approved final files, with payment completed as per agreed terms.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: TESTIMONIALS (With honest, transparent preview labeling)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#FFFDF8] border-b border-[#4B3025]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B3025] font-['Manrope'] tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-base text-[#2B2521]/80 leading-relaxed">
              Building lasting partnerships through creativity, collaboration, and results.
            </p>
            <div className="inline-block text-[11px] font-semibold text-[#4B3025] bg-[#E9D9A8]/40 px-3 py-1 rounded">
              Verified Client Feedback Format Preview
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsPreviewData.map((item) => (
              <div
                key={item.id}
                className="p-7 rounded-2xl bg-[#FAF5E8]/50 border border-[#4B3025]/15 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#4B3025]">
                    <span className="font-semibold bg-[#FFFDF8] px-2 py-0.5 rounded border border-[#E9D9A8]">
                      {item.projectReference}
                    </span>
                    <span className="text-[10px] text-[#2B2521]/50 italic">Preview Template</span>
                  </div>
                  <p className="text-sm text-[#2B2521]/85 italic leading-relaxed">
                    “{item.feedback}”
                  </p>
                </div>

                <div className="pt-4 border-t border-[#4B3025]/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#4B3025] text-[#F2C94C] font-bold flex items-center justify-center text-xs">
                    GF
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#4B3025] font-['Manrope']">
                      {item.clientName}
                    </h4>
                    <p className="text-xs text-[#2B2521]/60">
                      {item.role} · {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#2B2521]/55 italic">
            *In compliance with honest advertising principles, actual authenticated client endorsement names and case metrics will appear upon signed client release.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FINAL CTA BANNER (Visually striking deep-brown background)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#4B3025] text-[#FFFDF8] relative overflow-hidden">
        {/* Subtle geometric background accents */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#F2C94C]/5 pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#E9D9A8]/5 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#F2C94C] font-['Manrope']">
            START YOUR NEXT CHAPTER
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFFDF8] font-['Manrope'] tracking-tight leading-tight">
            Ready to Build Something Great?
          </h2>

          <p className="text-base sm:text-lg text-[#E9D9A8] max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's turn your ideas into impactful creative work.
          </p>

          <div className="pt-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-9 py-4 text-base font-bold text-[#4B3025] bg-[#F2C94C] hover:bg-[#ebbf3c] active:translate-y-0.5 rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: CONTACT PREVIEW
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#FFFDF8] border-b border-[#4B3025]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B3025] font-['Manrope'] tracking-tight">
              Let's Start a Conversation
            </h2>
            <p className="text-base text-[#2B2521]/80 leading-relaxed">
              Tell us about your project. We'd love to hear what you have in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 5 Cols: Contact Information Placeholders */}
            <div className="lg:col-span-5 space-y-8 bg-[#FAF5E8]/60 p-8 rounded-2xl border border-[#E9D9A8]">
              <div>
                <h3 className="text-lg font-bold text-[#4B3025] font-['Manrope'] mb-2">
                  Direct Channels
                </h3>
                <p className="text-xs text-[#2B2521]/70 leading-relaxed">
                  Reach out through official channels or fill out the enquiry form. We review all submissions within 24–48 business hours.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#4B3025]/10">
                  <div className="p-2 rounded-lg bg-[#4B3025] text-[#F2C94C] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase text-[#4B3025]/70">
                      Official Email Placeholder
                    </span>
                    <p className="text-sm font-semibold text-[#4B3025]">
                      hello@goodfolksolution.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#4B3025]/10">
                  <div className="p-2 rounded-lg bg-[#4B3025] text-[#F2C94C] shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase text-[#4B3025]/70">
                      Instagram Profile Placeholder
                    </span>
                    <p className="text-sm font-semibold text-[#4B3025]">
                      @goodfolksolution
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#4B3025]/10">
                  <div className="p-2 rounded-lg bg-[#4B3025] text-[#F2C94C] shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase text-[#4B3025]/70">
                      WhatsApp / Phone Placeholder
                    </span>
                    <p className="text-sm font-semibold text-[#4B3025]">
                      +91 (Direct business contact upon appointment)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-3 text-xs font-semibold text-[#4B3025] bg-white border border-[#4B3025]/30 hover:bg-[#FAF5E8] rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Go to Full Contact Page &amp; FAQs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right 7 Cols: Functional Enquiry Form with Validation */}
            <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-[#4B3025]/15 shadow-sm">
              {submitSuccess ? (
                <div className="p-8 rounded-xl bg-[#FAF5E8] border border-[#E9D9A8] text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#4B3025] text-[#F2C94C] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#4B3025] font-['Manrope']">
                    Enquiry Successfully Saved!
                  </h3>
                  <p className="text-sm text-[#2B2521]/80 max-w-md mx-auto">
                    Thank you for reaching out to Goodfolk Solution. Your submission has been securely recorded with reference <span className="font-mono font-bold text-[#4B3025]">#{submitSuccess}</span>.
                  </p>
                  <p className="text-xs text-[#2B2521]/60">
                    Our creative team reviews incoming requirements carefully before scheduling an introductory conversation.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitSuccess(null)}
                      className="px-5 py-2 text-xs font-semibold text-[#4B3025] bg-[#F2C94C] hover:bg-[#ebbf3c] rounded-lg transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#4B3025] mb-1 font-['Manrope']">
                        Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FFFDF8] focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-rose-500 focus:border-rose-600'
                            : 'border-[#4B3025]/20 focus:border-[#4B3025]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Business Email */}
                    <div>
                      <label className="block text-xs font-semibold text-[#4B3025] mb-1 font-['Manrope']">
                        Business Email <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FFFDF8] focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-600'
                            : 'border-[#4B3025]/20 focus:border-[#4B3025]'
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company / Brand */}
                    <div>
                      <label className="block text-xs font-semibold text-[#4B3025] mb-1 font-['Manrope']">
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Brand or studio name"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#4B3025]/20 bg-[#FFFDF8] focus:border-[#4B3025] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-semibold text-[#4B3025] mb-1 font-['Manrope']">
                        Service Required <span className="text-rose-600">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#4B3025]/20 bg-[#FFFDF8] focus:border-[#4B3025] focus:outline-none transition-colors"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold text-[#4B3025] mb-1 font-['Manrope']">
                      Project Details <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Tell us about your brand, what you need to create, and any key objectives..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FFFDF8] focus:outline-none transition-colors ${
                        errors.projectDetails
                          ? 'border-rose-500 focus:border-rose-600'
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

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-[#4B3025] bg-[#F2C94C] hover:bg-[#ebbf3c] active:translate-y-0.5 rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-4 h-4 animate-spin" />
                          <span>Saving Enquiry...</span>
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
      </section>
    </div>
  );
};
