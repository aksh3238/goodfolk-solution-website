import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowUpRight, Mail, Instagram, MessageCircle, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate, setIsAdminEnquiriesOpen } = useNavigation();

  return (
    <footer className="bg-[#4B3025] text-[#FFFDF8] border-t border-[#4B3025]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#F2C94C] flex items-center justify-center text-[#4B3025] font-bold text-base">
                G
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#FFFDF8] font-['Manrope']">
                Goodfolk Solution
              </span>
            </div>
            
            <p className="text-[#E9D9A8] text-base leading-relaxed max-w-sm">
              We build brands that move businesses forward. Full-service creative advertising, branding, packaging, and digital marketing agency based in India, collaborating with forward-thinking businesses worldwide.
            </p>

            <div className="pt-2 text-xs text-[#E9D9A8]/70">
              <p>Domain: <span className="text-[#FFFDF8] font-medium">goodfolksolution.in</span></p>
              <p className="mt-1">Headquarters: India · Global Client Delivery</p>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#F2C94C] font-['Manrope'] mb-4">
              EXPLORE
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="text-[#FFFDF8]/80 hover:text-[#F2C94C] transition-colors focus-visible:outline-none"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="text-[#FFFDF8]/80 hover:text-[#F2C94C] transition-colors focus-visible:outline-none"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/portfolio')}
                  className="text-[#FFFDF8]/80 hover:text-[#F2C94C] transition-colors focus-visible:outline-none"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/insights')}
                  className="text-[#FFFDF8]/80 hover:text-[#F2C94C] transition-colors focus-visible:outline-none"
                >
                  Insights &amp; Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-[#FFFDF8]/80 hover:text-[#F2C94C] transition-colors focus-visible:outline-none"
                >
                  Contact &amp; Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#F2C94C] font-['Manrope'] mb-4">
              SERVICES
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigate('/services', 'branding-packaging')}
                  className="text-left text-[#FFFDF8]/80 hover:text-[#F2C94C] transition-colors focus-visible:outline-none"
                >
                  Branding &amp; Packaging
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services', 'creative-design')}
                  className="text-left text-[#FFFDF8]/80 hover:text-[#F2C94C] transition-colors focus-visible:outline-none"
                >
                  Creative Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services', 'performance-marketing-creatives')}
                  className="text-left text-[#FFFDF8]/80 hover:text-[#F2C94C] transition-colors focus-visible:outline-none"
                >
                  Performance Marketing Creatives
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services', 'video-production-editing')}
                  className="text-left text-[#FFFDF8]/80 hover:text-[#F2C94C] transition-colors focus-visible:outline-none"
                >
                  Video Production &amp; Editing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services', 'digital-marketing-social-media')}
                  className="text-left text-[#FFFDF8]/80 hover:text-[#F2C94C] transition-colors focus-visible:outline-none"
                >
                  Digital Marketing &amp; Social
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect & Legal */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#F2C94C] font-['Manrope'] mb-4">
              CONNECT
            </h3>
            <ul className="space-y-2.5 text-sm mb-6">
              <li>
                <a
                  href="mailto:hello@goodfolksolution.in"
                  className="group flex items-center gap-2 text-[#FFFDF8]/80 hover:text-[#F2C94C] transition-colors"
                  title="Official business email placeholder"
                >
                  <Mail className="w-4 h-4 text-[#F2C94C]" />
                  <span>Email</span>
                  <span className="text-[11px] text-[#E9D9A8]/60">[Placeholder]</span>
                </a>
              </li>
              <li>
                <a
                  href="#instagram"
                  onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                  className="group flex items-center gap-2 text-[#FFFDF8]/80 hover:text-[#F2C94C] transition-colors"
                  title="Official Instagram placeholder"
                >
                  <Instagram className="w-4 h-4 text-[#F2C94C]" />
                  <span>Instagram</span>
                  <span className="text-[11px] text-[#E9D9A8]/60">[Placeholder]</span>
                </a>
              </li>
              <li>
                <a
                  href="#whatsapp"
                  onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                  className="group flex items-center gap-2 text-[#FFFDF8]/80 hover:text-[#F2C94C] transition-colors"
                  title="WhatsApp business contact placeholder"
                >
                  <MessageCircle className="w-4 h-4 text-[#F2C94C]" />
                  <span>WhatsApp</span>
                  <span className="text-[11px] text-[#E9D9A8]/60">[Placeholder]</span>
                </a>
              </li>
            </ul>

            <h3 className="text-xs font-bold tracking-widest uppercase text-[#F2C94C] font-['Manrope'] mb-3">
              LEGAL
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate('/privacy')}
                  className="text-[#FFFDF8]/70 hover:text-[#F2C94C] transition-colors focus-visible:outline-none"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/terms')}
                  className="text-[#FFFDF8]/70 hover:text-[#F2C94C] transition-colors focus-visible:outline-none"
                >
                  Terms &amp; Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#FFFDF8]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E9D9A8]/70">
          <p>© 2026 Goodfolk Solution. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <button
              onClick={() => setIsAdminEnquiriesOpen(true)}
              className="flex items-center gap-1.5 text-[#E9D9A8]/60 hover:text-[#F2C94C] transition-colors"
              title="Agency Enquiry Pipeline &amp; Submissions Manager"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Agency Submissions Vault</span>
            </button>
            <span>goodfolksolution.in</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
