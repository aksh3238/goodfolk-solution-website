import React from 'react';

interface VisualMockupProps {
  type: 'hero' | 'branding' | 'creative' | 'performance' | 'video' | 'digital' | 'beverage' | 'cosmetics' | 'apparel' | 'tech' | 'ad_campaign' | 'social_system';
  className?: string;
  badgeText?: string;
}

export const VisualMockup: React.FC<VisualMockupProps> = ({ type, className = '', badgeText }) => {
  // Render specific meticulously crafted visual scenes
  switch (type) {
    case 'hero':
      return (
        <div className={`relative w-full h-full overflow-hidden rounded-xl bg-gradient-to-br from-[#E9D9A8]/40 via-[#FFFDF8] to-[#E9D9A8]/20 border border-[#4B3025]/10 shadow-xl ${className}`}>
          {/* Subtle architectural grid pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#4B3025_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <svg className="w-full h-full object-cover" viewBox="0 0 960 640" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFDF8" />
                <stop offset="50%" stopColor="#FAF5E8" />
                <stop offset="100%" stopColor="#E9D9A8" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="amberGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6C4533" />
                <stop offset="40%" stopColor="#4B3025" />
                <stop offset="100%" stopColor="#2E1B14" />
              </linearGradient>
              <linearGradient id="amberHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F2C94C" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="paperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFDF8" />
                <stop offset="100%" stopColor="#EFE8D3" />
              </linearGradient>
              <filter id="softShadow" x="-15%" y="-15%" width="130%" height="130%">
                <feDropShadow dx="0" dy="24" stdDeviation="20" floodColor="#2B2521" floodOpacity="0.18" />
              </filter>
              <filter id="crispShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#2B2521" floodOpacity="0.12" />
              </filter>
            </defs>

            {/* Studio tabletop backdrop */}
            <rect width="960" height="640" fill="url(#heroBg)" />

            {/* Natural warm sunlight angle cast */}
            <path d="M0 0 L540 0 L280 640 L0 640 Z" fill="#F2C94C" fillOpacity="0.08" />

            {/* Secondary packaging box in background */}
            <g filter="url(#softShadow)">
              <rect x="520" y="110" width="260" height="380" rx="6" fill="#4B3025" />
              <rect x="524" y="114" width="252" height="372" rx="4" fill="none" stroke="#F2C94C" strokeWidth="1" strokeOpacity="0.3" />
              {/* Foil debossed typography */}
              <text x="650" y="240" fill="#F2C94C" fontSize="13" letterSpacing="0.25em" textAnchor="middle" fontFamily="Manrope" fontWeight="600">GOODFOLK SOLUTION</text>
              <line x1="610" y1="260" x2="690" y2="260" stroke="#F2C94C" strokeWidth="1" strokeOpacity="0.6" />
              <text x="650" y="285" fill="#FFFDF8" fontSize="18" letterSpacing="0.05em" textAnchor="middle" fontFamily="Manrope" fontWeight="700">CREATIVE STUDIO</text>
              <text x="650" y="320" fill="#E9D9A8" fontSize="10" letterSpacing="0.15em" textAnchor="middle" fontFamily="Inter">PREMIUM BRANDING &amp; PACKAGING</text>
              <text x="650" y="440" fill="#FFFDF8" fillOpacity="0.5" fontSize="9" letterSpacing="0.2em" textAnchor="middle" fontFamily="Inter">EST. 2026 · WORLDWIDE</text>
            </g>

            {/* Luxury Amber Glass Apothecary Bottle */}
            <g filter="url(#softShadow)">
              {/* Dropper Cap */}
              <rect x="365" y="140" width="70" height="38" rx="4" fill="#2B2521" />
              <rect x="382" y="95" width="36" height="48" rx="18" fill="#1A1513" />
              {/* Bottle Neck */}
              <path d="M375 178 L375 210 L425 210 L425 178 Z" fill="url(#amberGlass)" />
              {/* Bottle Body */}
              <rect x="325" y="210" width="150" height="320" rx="16" fill="url(#amberGlass)" />
              {/* Refraction Highlight */}
              <path d="M333 220 C333 220 338 360 338 510 C335 510 330 500 330 220 Z" fill="url(#amberHighlight)" />
              
              {/* Tactile Textured Product Label */}
              <rect x="338" y="270" width="124" height="190" rx="2" fill="url(#paperGrad)" />
              <rect x="344" y="276" width="112" height="178" rx="1" fill="none" stroke="#4B3025" strokeWidth="0.75" strokeOpacity="0.2" />
              <circle cx="400" cy="305" r="8" fill="#F2C94C" fillOpacity="0.2" />
              <circle cx="400" cy="305" r="4" fill="#4B3025" />
              <text x="400" y="332" fill="#4B3025" fontSize="11" letterSpacing="0.18em" textAnchor="middle" fontFamily="Manrope" fontWeight="700">BOTANICAL</text>
              <text x="400" y="347" fill="#4B3025" fontSize="7" letterSpacing="0.14em" textAnchor="middle" fontFamily="Inter" fontWeight="500">FACIAL ESSENCE</text>
              <line x1="375" y1="360" x2="425" y2="360" stroke="#4B3025" strokeWidth="0.5" strokeOpacity="0.4" />
              <text x="400" y="378" fill="#4B3025" fillOpacity="0.75" fontSize="6.5" textAnchor="middle" fontFamily="Inter">COLD-PRESSED ORGANIC FORMULA</text>
              <text x="400" y="392" fill="#4B3025" fillOpacity="0.75" fontSize="6.5" textAnchor="middle" fontFamily="Inter">50 ML / 1.7 FL. OZ.</text>
              <text x="400" y="432" fill="#4B3025" fontSize="6" letterSpacing="0.1em" textAnchor="middle" fontFamily="Inter">BATCH NO. 04 / INDIA</text>
            </g>

            {/* Overlapping Tactile Stationery / Editorial Identity Cards */}
            <g filter="url(#crispShadow)">
              <rect x="150" y="360" width="220" height="140" rx="3" fill="#FFFDF8" stroke="#E9D9A8" strokeWidth="1" transform="rotate(-7 150 360)" />
              <g transform="rotate(-7 150 360)">
                <text x="175" y="400" fill="#4B3025" fontSize="13" fontFamily="Manrope" fontWeight="700">Goodfolk Solution</text>
                <text x="175" y="418" fill="#4B3025" fillOpacity="0.6" fontSize="8" fontFamily="Inter">Creative Advertising &amp; Strategy</text>
                <circle cx="330" cy="395" r="10" fill="#F2C94C" />
                <path d="M326 395 L334 395 M330 391 L330 399" stroke="#4B3025" strokeWidth="1.5" strokeLinecap="round" />
                <text x="175" y="465" fill="#4B3025" fillOpacity="0.8" fontSize="8" fontFamily="Inter">goodfolksolution.in</text>
                <text x="175" y="480" fill="#4B3025" fillOpacity="0.5" fontSize="7.5" fontFamily="Inter">Mumbai · Delhi · Global</text>
              </g>
            </g>

            {/* Minimalist Color Swatch Palette Card */}
            <g filter="url(#crispShadow)">
              <rect x="120" y="210" width="160" height="110" rx="4" fill="#FFFDF8" stroke="#E9D9A8" strokeWidth="1" transform="rotate(5 120 210)" />
              <g transform="rotate(5 120 210)">
                <rect x="135" y="225" width="24" height="24" rx="2" fill="#4B3025" />
                <rect x="165" y="225" width="24" height="24" rx="2" fill="#F2C94C" />
                <rect x="195" y="225" width="24" height="24" rx="2" fill="#E9D9A8" />
                <rect x="225" y="225" width="24" height="24" rx="2" fill="#2B2521" />
                <text x="135" y="270" fill="#4B3025" fontSize="8" fontFamily="Manrope" fontWeight="600">BRAND PALETTE</text>
                <text x="135" y="285" fill="#4B3025" fillOpacity="0.6" fontSize="7" fontFamily="Inter">PANTONE WARM HARMONY</text>
                <text x="135" y="300" fill="#4B3025" fillOpacity="0.4" fontSize="6.5" fontFamily="Inter">CMYK / RGB / DIGITAL</text>
              </g>
            </g>
          </svg>

          {/* Natural photographic grain overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#4B3025]/30 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-[#4B3025]/80 font-medium">
            <span className="bg-[#FFFDF8]/90 backdrop-blur-sm px-2.5 py-1 rounded border border-[#E9D9A8]">Art Direction &amp; Packaging Suite</span>
            <span className="bg-[#FFFDF8]/90 backdrop-blur-sm px-2.5 py-1 rounded border border-[#E9D9A8]">Concept Visual Studio</span>
          </div>
        </div>
      );

    case 'branding':
    case 'cosmetics':
      return (
        <div className={`relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-[#FFFDF8] via-[#FAF5E8] to-[#E9D9A8]/40 border border-[#4B3025]/10 ${className}`}>
          <svg className="w-full h-full object-cover" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cosmeticBottle" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4B3025" />
                <stop offset="100%" stopColor="#2E1B14" />
              </linearGradient>
            </defs>
            <rect width="600" height="450" fill="#FAF5E8" />
            <path d="M0 0 L320 0 L180 450 L0 450 Z" fill="#F2C94C" fillOpacity="0.08" />
            
            {/* Rigid Box */}
            <rect x="310" y="70" width="210" height="310" rx="6" fill="#4B3025" />
            <rect x="314" y="74" width="202" height="302" rx="4" fill="none" stroke="#F2C94C" strokeWidth="1" strokeOpacity="0.4" />
            <text x="415" y="170" fill="#F2C94C" fontSize="12" letterSpacing="0.2em" textAnchor="middle" fontFamily="Manrope" fontWeight="600">NORDIC BOTANICS</text>
            <text x="415" y="200" fill="#FFFDF8" fontSize="16" letterSpacing="0.04em" textAnchor="middle" fontFamily="Manrope" fontWeight="700">CERAMIDE REPAIR</text>
            <text x="415" y="225" fill="#E9D9A8" fontSize="9" letterSpacing="0.1em" textAnchor="middle" fontFamily="Inter">RESTORATIVE NIGHT SERUM</text>

            {/* Bottle */}
            <rect x="150" y="130" width="120" height="240" rx="14" fill="url(#cosmeticBottle)" />
            <rect x="180" y="85" width="60" height="45" rx="4" fill="#2B2521" />
            {/* Label */}
            <rect x="160" y="180" width="100" height="140" rx="3" fill="#FFFDF8" />
            <circle cx="210" cy="210" r="6" fill="#F2C94C" />
            <text x="210" y="235" fill="#4B3025" fontSize="9" letterSpacing="0.15em" textAnchor="middle" fontFamily="Manrope" fontWeight="700">NORDIC</text>
            <text x="210" y="250" fill="#4B3025" fontSize="7" letterSpacing="0.1em" textAnchor="middle" fontFamily="Inter">FACIAL SERUM</text>
            <text x="210" y="295" fill="#4B3025" fillOpacity="0.6" fontSize="6" textAnchor="middle" fontFamily="Inter">50 ML · PURE ORGANIC</text>

            {/* Linen card */}
            <rect x="70" y="270" width="160" height="100" rx="3" fill="#FFFDF8" stroke="#E9D9A8" strokeWidth="1" transform="rotate(-9 70 270)" />
            <text x="85" y="300" fill="#4B3025" fontSize="10" fontFamily="Manrope" fontWeight="700" transform="rotate(-9 70 270)">Identity Spec</text>
            <text x="85" y="320" fill="#4B3025" fillOpacity="0.6" fontSize="7" fontFamily="Inter" transform="rotate(-9 70 270)">Debossed foil on 450gsm</text>
          </svg>
          <div className="absolute top-3 right-3 bg-[#4B3025] text-[#F2C94C] text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded">
            {badgeText || 'PACKAGING &amp; IDENTITY'}
          </div>
        </div>
      );

    case 'creative':
    case 'apparel':
      return (
        <div className={`relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-[#FFFDF8] via-[#FAF5E8] to-[#E9D9A8]/40 border border-[#4B3025]/10 ${className}`}>
          <svg className="w-full h-full object-cover" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="450" fill="#FAF5E8" />
            
            {/* Tablet frame */}
            <rect x="80" y="50" width="340" height="340" rx="16" fill="#2B2521" />
            <rect x="92" y="62" width="316" height="316" rx="10" fill="#FFFDF8" />
            
            {/* E-commerce UI Grid */}
            <rect x="110" y="80" width="280" height="30" rx="4" fill="#E9D9A8" fillOpacity="0.4" />
            <text x="125" y="100" fill="#4B3025" fontSize="11" fontFamily="Manrope" fontWeight="700">AERIS ACTIVE / A+ CONTENT</text>
            
            {/* Product Feature Modules */}
            <rect x="110" y="125" width="130" height="140" rx="6" fill="#4B3025" />
            <text x="175" y="190" fill="#F2C94C" fontSize="10" letterSpacing="0.1em" textAnchor="middle" fontFamily="Manrope" fontWeight="600">ZERO FRICTION</text>
            <text x="175" y="210" fill="#FFFDF8" fontSize="8" textAnchor="middle" fontFamily="Inter">Seamless Knit Ergonomics</text>

            <rect x="255" y="125" width="135" height="140" rx="6" fill="#EFE8D3" stroke="#4B3025" strokeWidth="0.5" />
            <text x="322" y="185" fill="#4B3025" fontSize="10" letterSpacing="0.1em" textAnchor="middle" fontFamily="Manrope" fontWeight="700">THERMAL MESH</text>
            <text x="322" y="205" fill="#4B3025" fillOpacity="0.7" fontSize="8" textAnchor="middle" fontFamily="Inter">Engineered Airflow Channels</text>

            {/* Lower row */}
            <rect x="110" y="280" width="280" height="80" rx="6" fill="#4B3025" fillOpacity="0.06" />
            <text x="130" y="315" fill="#4B3025" fontSize="10" fontFamily="Manrope" fontWeight="700">4-Way Compression Stretch</text>
            <text x="130" y="335" fill="#4B3025" fillOpacity="0.7" fontSize="8" fontFamily="Inter">Direct-to-consumer high converting visual module</text>

            {/* Smartphone asset */}
            <rect x="390" y="140" width="140" height="250" rx="14" fill="#2B2521" />
            <rect x="396" y="146" width="128" height="238" rx="10" fill="#4B3025" />
            <rect x="410" y="170" width="100" height="120" rx="6" fill="#FFFDF8" />
            <text x="460" y="225" fill="#4B3025" fontSize="8" fontFamily="Manrope" fontWeight="700" textAnchor="middle">FEED STORY</text>
            <rect x="410" y="300" width="100" height="24" rx="4" fill="#F2C94C" />
            <text x="460" y="316" fill="#4B3025" fontSize="8" fontFamily="Inter" fontWeight="700" textAnchor="middle">Shop Collection</text>
          </svg>
          <div className="absolute top-3 right-3 bg-[#4B3025] text-[#F2C94C] text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded">
            {badgeText || 'E-COMMERCE &amp; DESIGN'}
          </div>
        </div>
      );

    case 'performance':
    case 'ad_campaign':
      return (
        <div className={`relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-[#FFFDF8] via-[#FAF5E8] to-[#E9D9A8]/40 border border-[#4B3025]/10 ${className}`}>
          <svg className="w-full h-full object-cover" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="450" fill="#FAF5E8" />
            
            {/* Ad Frame 1 (4:5 Ratio) */}
            <rect x="70" y="55" width="200" height="340" rx="10" fill="#4B3025" />
            <rect x="85" y="75" width="170" height="190" rx="6" fill="#FFFDF8" />
            <circle cx="170" cy="150" r="40" fill="#F2C94C" fillOpacity="0.25" />
            <rect x="145" y="125" width="50" height="50" rx="8" fill="#4B3025" />
            <text x="170" y="155" fill="#F2C94C" fontSize="16" fontFamily="Manrope" fontWeight="800" textAnchor="middle">LUMIN</text>
            <text x="170" y="245" fill="#4B3025" fontSize="9" letterSpacing="0.1em" fontFamily="Manrope" fontWeight="700" textAnchor="middle">ARCHITECTURAL LIGHT</text>

            <text x="95" y="295" fill="#FFFDF8" fontSize="12" fontFamily="Manrope" fontWeight="700">Warm Precision Lighting</text>
            <text x="95" y="315" fill="#E9D9A8" fontSize="8.5" fontFamily="Inter">Designed for serene focus spaces.</text>
            
            <rect x="95" y="335" width="150" height="32" rx="4" fill="#F2C94C" />
            <text x="170" y="355" fill="#4B3025" fontSize="9.5" fontFamily="Inter" fontWeight="700" textAnchor="middle">Shop Launch Edition</text>

            {/* Ad Frame 2 (Story Format 9:16) */}
            <rect x="300" y="45" width="180" height="360" rx="12" fill="#2B2521" />
            <rect x="306" y="51" width="168" height="348" rx="8" fill="#FFFDF8" />
            
            <rect x="320" y="70" width="140" height="170" rx="6" fill="#4B3025" />
            <text x="390" y="155" fill="#F2C94C" fontSize="11" letterSpacing="0.15em" fontFamily="Manrope" fontWeight="700" textAnchor="middle">HOOK VARIANT B</text>
            <text x="390" y="175" fill="#FFFDF8" fontSize="8" fontFamily="Inter" textAnchor="middle">Visual Contrast Testing</text>

            <rect x="320" y="255" width="140" height="60" rx="4" fill="#E9D9A8" fillOpacity="0.3" />
            <text x="330" y="280" fill="#4B3025" fontSize="9" fontFamily="Manrope" fontWeight="700">High-Retention Creative</text>
            <text x="330" y="298" fill="#4B3025" fillOpacity="0.7" fontSize="7.5" fontFamily="Inter">Optimized for feed acquisition</text>

            <rect x="320" y="330" width="140" height="32" rx="4" fill="#4B3025" />
            <text x="390" y="350" fill="#F2C94C" fontSize="9" fontFamily="Inter" fontWeight="700" textAnchor="middle">Explore Visuals</text>
          </svg>
          <div className="absolute top-3 right-3 bg-[#4B3025] text-[#F2C94C] text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded">
            {badgeText || 'PERFORMANCE ADS'}
          </div>
        </div>
      );

    case 'video':
      return (
        <div className={`relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-[#FFFDF8] via-[#FAF5E8] to-[#E9D9A8]/40 border border-[#4B3025]/10 ${className}`}>
          <svg className="w-full h-full object-cover" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="450" fill="#2B2521" />
            
            {/* Video timeline frame */}
            <rect x="50" y="50" width="500" height="260" rx="8" fill="#1A1513" stroke="#4B3025" strokeWidth="1" />
            
            {/* Viewport content */}
            <circle cx="300" cy="180" r="45" fill="#F2C94C" fillOpacity="0.15" />
            <polygon points="290,165 320,180 290,195" fill="#F2C94C" />
            
            <text x="300" y="250" fill="#FFFDF8" fontSize="12" letterSpacing="0.08em" fontFamily="Manrope" fontWeight="600" textAnchor="middle">PRODUCT FILM / SEQUENCE 04</text>
            <text x="300" y="270" fill="#E9D9A8" fontSize="9" fontFamily="Inter" textAnchor="middle">4K CINEMATIC COLOR GRADE · 24 FPS</text>

            {/* Timeline bar */}
            <rect x="50" y="330" width="500" height="70" rx="6" fill="#4B3025" />
            <rect x="65" y="345" width="120" height="40" rx="4" fill="#2B2521" />
            <rect x="195" y="345" width="140" height="40" rx="4" fill="#F2C94C" fillOpacity="0.3" stroke="#F2C94C" strokeWidth="1" />
            <rect x="345" y="345" width="90" height="40" rx="4" fill="#2B2521" />
            <rect x="445" y="345" width="90" height="40" rx="4" fill="#2B2521" />
            
            {/* Scrubber needle */}
            <line x1="260" y1="325" x2="260" y2="400" stroke="#F2C94C" strokeWidth="2" />
            <polygon points="255,325 265,325 260,335" fill="#F2C94C" />
          </svg>
          <div className="absolute top-3 right-3 bg-[#4B3025] text-[#F2C94C] text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded">
            {badgeText || 'MOTION &amp; EDITING'}
          </div>
        </div>
      );

    case 'digital':
    case 'social_system':
      return (
        <div className={`relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-[#FFFDF8] via-[#FAF5E8] to-[#E9D9A8]/40 border border-[#4B3025]/10 ${className}`}>
          <svg className="w-full h-full object-cover" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="450" fill="#FAF5E8" />
            
            {/* Content Planner Board */}
            <rect x="60" y="50" width="480" height="350" rx="10" fill="#FFFDF8" stroke="#4B3025" strokeWidth="0.5" />
            <rect x="80" y="70" width="440" height="36" rx="4" fill="#4B3025" />
            <text x="100" y="93" fill="#FFFDF8" fontSize="12" fontFamily="Manrope" fontWeight="700">30-DAY CONTENT SYSTEM &amp; CADENCE</text>
            <text x="440" y="93" fill="#F2C94C" fontSize="10" fontFamily="Inter" fontWeight="600">OCTOBER 2026</text>

            {/* Grid of 6 social posts */}
            <rect x="80" y="125" width="135" height="120" rx="4" fill="#EFE8D3" stroke="#4B3025" strokeWidth="0.5" />
            <text x="147" y="175" fill="#4B3025" fontSize="9" fontFamily="Manrope" fontWeight="700" textAnchor="middle">01. BRAND STORY</text>
            <text x="147" y="195" fill="#4B3025" fillOpacity="0.6" fontSize="7" fontFamily="Inter" textAnchor="middle">Carousel Architecture</text>

            <rect x="232" y="125" width="135" height="120" rx="4" fill="#4B3025" />
            <text x="299" y="175" fill="#F2C94C" fontSize="9" fontFamily="Manrope" fontWeight="700" textAnchor="middle">02. PRODUCT FOCUS</text>
            <text x="299" y="195" fill="#FFFDF8" fontSize="7" fontFamily="Inter" textAnchor="middle">High Contrast Studio Post</text>

            <rect x="385" y="125" width="135" height="120" rx="4" fill="#EFE8D3" stroke="#4B3025" strokeWidth="0.5" />
            <text x="452" y="175" fill="#4B3025" fontSize="9" fontFamily="Manrope" fontWeight="700" textAnchor="middle">03. PROCESS REEL</text>
            <text x="452" y="195" fill="#4B3025" fillOpacity="0.6" fontSize="7" fontFamily="Inter" textAnchor="middle">Behind The Scenes 9:16</text>

            {/* Row 2 */}
            <rect x="80" y="260" width="135" height="120" rx="4" fill="#4B3025" />
            <text x="147" y="310" fill="#F2C94C" fontSize="9" fontFamily="Manrope" fontWeight="700" textAnchor="middle">04. TESTIMONIAL</text>
            <text x="147" y="330" fill="#FFFDF8" fontSize="7" fontFamily="Inter" textAnchor="middle">Verified Partner Quote</text>

            <rect x="232" y="260" width="135" height="120" rx="4" fill="#EFE8D3" stroke="#4B3025" strokeWidth="0.5" />
            <text x="299" y="310" fill="#4B3025" fontSize="9" fontFamily="Manrope" fontWeight="700" textAnchor="middle">05. PACKAGING DROP</text>
            <text x="299" y="330" fill="#4B3025" fillOpacity="0.6" fontSize="7" fontFamily="Inter" textAnchor="middle">Unboxing Teaser</text>

            <rect x="385" y="260" width="135" height="120" rx="4" fill="#4B3025" />
            <text x="452" y="310" fill="#F2C94C" fontSize="9" fontFamily="Manrope" fontWeight="700" textAnchor="middle">06. EDITORIAL INSIGHT</text>
            <text x="452" y="330" fill="#FFFDF8" fontSize="7" fontFamily="Inter" textAnchor="middle">Design Philosophy</text>
          </svg>
          <div className="absolute top-3 right-3 bg-[#4B3025] text-[#F2C94C] text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded">
            {badgeText || 'CONTENT CALENDAR'}
          </div>
        </div>
      );

    case 'beverage':
      return (
        <div className={`relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-[#FFFDF8] via-[#FAF5E8] to-[#E9D9A8]/40 border border-[#4B3025]/10 ${className}`}>
          <svg className="w-full h-full object-cover" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="450" fill="#FAF5E8" />
            
            {/* Studio Can 1 */}
            <rect x="160" y="90" width="120" height="270" rx="20" fill="#4B3025" />
            <rect x="180" y="75" width="80" height="20" rx="6" fill="#2B2521" />
            <rect x="165" y="130" width="110" height="180" rx="4" fill="#E9D9A8" />
            <text x="220" y="180" fill="#4B3025" fontSize="12" letterSpacing="0.15em" fontFamily="Manrope" fontWeight="800" textAnchor="middle">SOLSTICE</text>
            <text x="220" y="200" fill="#4B3025" fontSize="8" letterSpacing="0.1em" fontFamily="Inter" textAnchor="middle">COLD BREW</text>
            <circle cx="220" cy="235" r="14" fill="#F2C94C" />
            <text x="220" y="239" fill="#4B3025" fontSize="10" fontFamily="Manrope" fontWeight="700" textAnchor="middle">01</text>
            <text x="220" y="275" fill="#4B3025" fontSize="7" fontFamily="Inter" textAnchor="middle">DARK ROAST · 350ML</text>

            {/* Studio Can 2 */}
            <rect x="320" y="90" width="120" height="270" rx="20" fill="#2B2521" />
            <rect x="340" y="75" width="80" height="20" rx="6" fill="#1A1513" />
            <rect x="325" y="130" width="110" height="180" rx="4" fill="#FFFDF8" />
            <text x="380" y="180" fill="#4B3025" fontSize="12" letterSpacing="0.15em" fontFamily="Manrope" fontWeight="800" textAnchor="middle">SOLSTICE</text>
            <text x="380" y="200" fill="#4B3025" fontSize="8" letterSpacing="0.1em" fontFamily="Inter" textAnchor="middle">COLD BREW</text>
            <circle cx="380" cy="235" r="14" fill="#F2C94C" />
            <text x="380" y="239" fill="#4B3025" fontSize="10" fontFamily="Manrope" fontWeight="700" textAnchor="middle">02</text>
            <text x="380" y="275" fill="#4B3025" fontSize="7" fontFamily="Inter" textAnchor="middle">CITRUS BLEND · 350ML</text>
          </svg>
          <div className="absolute top-3 right-3 bg-[#4B3025] text-[#F2C94C] text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded">
            {badgeText || 'CRAFT PACKAGING'}
          </div>
        </div>
      );

    case 'tech':
    default:
      return (
        <div className={`relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-[#FFFDF8] via-[#FAF5E8] to-[#E9D9A8]/40 border border-[#4B3025]/10 ${className}`}>
          <svg className="w-full h-full object-cover" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="450" fill="#FAF5E8" />
            <rect x="100" y="70" width="400" height="280" rx="8" fill="#4B3025" />
            <rect x="120" y="90" width="360" height="240" rx="4" fill="#FFFDF8" />
            <text x="300" y="180" fill="#4B3025" fontSize="18" fontFamily="Manrope" fontWeight="800" textAnchor="middle" letterSpacing="0.1em">ATELIER KORA</text>
            <text x="300" y="210" fill="#4B3025" fillOpacity="0.6" fontSize="10" fontFamily="Inter" textAnchor="middle">ARCHITECTURE &amp; INTERIOR SPACES</text>
            <line x1="240" y1="230" x2="360" y2="230" stroke="#F2C94C" strokeWidth="2" />
            <text x="300" y="260" fill="#4B3025" fillOpacity="0.5" fontSize="8" fontFamily="Inter" textAnchor="middle">BRAND SYSTEM SPECIFICATION · 2026</text>
          </svg>
          <div className="absolute top-3 right-3 bg-[#4B3025] text-[#F2C94C] text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded">
            {badgeText || 'BRAND IDENTITY'}
          </div>
        </div>
      );
  }
};
