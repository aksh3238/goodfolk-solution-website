import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { servicesData } from '../data/servicesData';
import { VisualMockup } from '../components/VisualMockup';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Cpu,
  ShoppingBag,
  Sparkles,
  Rocket
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useNavigation();

  const principles = [
    {
      num: '01',
      title: 'Clarity Before Creativity',
      desc: 'Every project starts with understanding the problem and the goal.'
    },
    {
      num: '02',
      title: 'Thoughtful Execution',
      desc: 'We pay attention to the details that make a brand feel consistent and considered.'
    },
    {
      num: '03',
      title: 'Collaboration',
      desc: 'We work with clients through clear communication, review and feedback.'
    },
    {
      num: '04',
      title: 'Purposeful Design',
      desc: 'Creative decisions should support the brand and its objectives.'
    }
  ];

  const whoWeWorkWith = [
    {
      title: 'Startups and Emerging Brands',
      desc: 'Early-stage founders who need a cohesive visual identity, packaging, and digital launch assets to make a memorable market debut.',
      icon: Rocket
    },
    {
      title: 'Consumer Product Businesses',
      desc: 'Physical product makers seeking tactile packaging, label architecture, and shelf-presence that commands retailer and consumer trust.',
      icon: ShoppingBag
    },
    {
      title: 'E-commerce Brands',
      desc: 'Direct-to-consumer and marketplace sellers requiring high-converting Amazon A+ layouts, product graphics, and digital advertising collateral.',
      icon: Cpu
    },
    {
      title: 'Established Businesses Seeking Creative Support',
      desc: 'Companies looking to modernize their brand systems, scale ongoing social marketing, or elevate visual communication across touchpoints.',
      icon: Compass
    }
  ];

  return (
    <div className="space-y-0 text-[#2B2521] selection:bg-[#F2C94C]/40">
      {/* Hero Section */}
      <section className="bg-[#FFFDF8] border-b border-[#4B3025]/10 pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#4B3025] bg-[#E9D9A8]/40 px-3 py-1 rounded">
                ABOUT GOODFOLK SOLUTION
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#4B3025] font-['Manrope'] tracking-tight leading-[1.12]">
                Good Ideas Deserve Good People.
              </h1>

              <p className="text-lg sm:text-xl text-[#2B2521]/80 leading-relaxed font-normal">
                Goodfolk Solution brings strategy, creativity and thoughtful design together to help brands communicate clearly and grow with purpose.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-7 py-3 text-sm font-semibold text-[#4B3025] bg-[#F2C94C] hover:bg-[#ebbf3c] active:translate-y-0.5 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2"
                >
                  <span>Talk to Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#4B3025]/15 bg-[#FAF5E8]">
                <VisualMockup type="hero" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY & OUR APPROACH */}
      <section className="py-20 lg:py-28 bg-[#FFFDF8] border-b border-[#4B3025]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Story */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#FAF5E8]/60 border border-[#E9D9A8] space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4B3025] font-['Manrope']">
                FOUNDING PHILOSOPHY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4B3025] font-['Manrope']">
                Our Story
              </h2>
              <p className="text-base sm:text-lg text-[#2B2521]/85 leading-relaxed">
                “Goodfolk Solution was built around a simple belief: thoughtful creative work can make a meaningful difference to a business. We bring branding, design and digital communication together to help businesses express their identity and connect with their audience.”
              </p>
              <p className="text-xs text-[#2B2521]/60 pt-2 border-t border-[#4B3025]/10">
                Operating out of India, we partner with clients across global timezones to produce work with uncompromising attention to detail.
              </p>
            </div>

            {/* Approach */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#FAF5E8]/60 border border-[#E9D9A8] space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4B3025] font-['Manrope']">
                METHODOLOGY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4B3025] font-['Manrope']">
                Our Approach
              </h2>
              <p className="text-base sm:text-lg text-[#2B2521]/85 leading-relaxed">
                “We begin by understanding the business, the audience and the objective. From there, we develop creative solutions that are relevant, consistent and purposeful.”
              </p>
              <p className="text-xs text-[#2B2521]/60 pt-2 border-t border-[#4B3025]/10">
                We avoid surface-level cosmetic trends in favor of enduring design decisions grounded in commercial context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PRINCIPLES */}
      <section className="py-20 lg:py-28 bg-[#FAF5E8]/30 border-b border-[#4B3025]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4B3025] font-['Manrope']">
              HOW WE MAKE DECISIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B3025] font-['Manrope'] tracking-tight">
              Our Principles
            </h2>
            <p className="text-sm text-[#2B2521]/75">
              Four fundamental rules that guide every visual brief, sprint, and delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => (
              <div
                key={p.num}
                className="p-7 rounded-2xl bg-white border border-[#4B3025]/15 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-[#4B3025] bg-[#E9D9A8]/40 px-2 py-0.5 rounded">
                    {p.num}
                  </span>
                  <h3 className="text-lg font-bold text-[#4B3025] font-['Manrope']">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#2B2521]/80 leading-relaxed">
                    “{p.desc}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO (5 Services Links) */}
      <section className="py-20 lg:py-28 bg-[#FFFDF8] border-b border-[#4B3025]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4B3025] font-['Manrope']">
              CORE DISCIPLINES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B3025] font-['Manrope'] tracking-tight">
              What We Do
            </h2>
            <p className="text-base text-[#2B2521]/80 leading-relaxed">
              We specialize across five integrated creative areas, providing businesses with a single partner from brand birth through digital scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((s, idx) => (
              <div
                key={s.id}
                onClick={() => navigate('/services', s.id)}
                className="group cursor-pointer p-6 rounded-2xl bg-[#FAF5E8]/50 border border-[#4B3025]/15 hover:border-[#4B3025]/40 hover:bg-[#FAF5E8] transition-all space-y-4"
              >
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#4B3025]">
                  <span>0{idx + 1}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-[#4B3025] font-['Manrope'] group-hover:text-[#2B2521]">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#2B2521]/80 leading-relaxed">
                  {s.shortDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-20 lg:py-28 bg-[#FAF5E8]/40 border-b border-[#4B3025]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4B3025] font-['Manrope']">
              AUDIENCE &amp; FIT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B3025] font-['Manrope'] tracking-tight">
              Who We Work With
            </h2>
            <p className="text-sm text-[#2B2521]/75">
              We partner best with ambitious leaders who recognize that thoughtful creative work directly affects commercial success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeWorkWith.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-white border border-[#4B3025]/15 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#4B3025] text-[#F2C94C] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#4B3025] font-['Manrope']">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#2B2521]/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#4B3025]/10 text-[11px] font-semibold text-[#4B3025]">
                    Global collaboration ready
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-xs text-[#2B2521]/55 italic">
            *Goodfolk Solution does not claim unauthenticated or fabricated corporate relationships. Client confidentiality is honored under mutual agreements.
          </p>
        </div>
      </section>

      {/* OUR PROCESS (Brief -> Create -> Review & Approve -> Deliver & Pay) */}
      <section className="py-20 bg-[#FFFDF8] border-b border-[#4B3025]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4B3025] font-['Manrope']">
              WORKFLOW
            </span>
            <h2 className="text-3xl font-extrabold text-[#4B3025] font-['Manrope']">
              Our Process
            </h2>
            <p className="text-sm text-[#2B2521]/75">
              Brief → Create → Review &amp; Approve → Deliver &amp; Pay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-[#FAF5E8]/60 border border-[#E9D9A8] space-y-2">
              <span className="text-xs font-mono font-bold text-[#4B3025]">01. BRIEF</span>
              <p className="text-xs text-[#2B2521]/80 leading-relaxed">
                We understand your goals, requirements, and vision.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#FAF5E8]/60 border border-[#E9D9A8] space-y-2">
              <span className="text-xs font-mono font-bold text-[#4B3025]">02. CREATE</span>
              <p className="text-xs text-[#2B2521]/80 leading-relaxed">
                Our team turns your brief into creative solutions.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#FAF5E8]/60 border border-[#E9D9A8] space-y-2">
              <span className="text-xs font-mono font-bold text-[#4B3025]">03. REVIEW &amp; APPROVE</span>
              <p className="text-xs text-[#2B2521]/80 leading-relaxed">
                You review the work and share your feedback for final approval.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#FAF5E8]/60 border border-[#E9D9A8] space-y-2">
              <span className="text-xs font-mono font-bold text-[#4B3025]">04. DELIVER &amp; PAY</span>
              <p className="text-xs text-[#2B2521]/80 leading-relaxed">
                We deliver the approved final files, with payment completed as per agreed terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-24 bg-[#4B3025] text-[#FFFDF8] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFFDF8] font-['Manrope'] tracking-tight">
            Let's Build Something Meaningful.
          </h2>
          <p className="text-base text-[#E9D9A8] max-w-xl mx-auto leading-relaxed">
            Reach out to our creative team to share your brief or discuss ongoing visual support for your brand.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 text-sm font-semibold text-[#4B3025] bg-[#F2C94C] hover:bg-[#ebbf3c] rounded-xl shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
