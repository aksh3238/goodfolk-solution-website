import React, { useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { VisualMockup } from './VisualMockup';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProjectModal: React.FC = () => {
  const { selectedProject, setSelectedProject, navigate } = useNavigation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, setSelectedProject]);

  if (!selectedProject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#2B2521]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FFFDF8] rounded-2xl shadow-2xl border border-[#4B3025]/15 text-[#2B2521]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#FFFDF8]/95 backdrop-blur border-b border-[#4B3025]/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#4B3025] bg-[#E9D9A8]/40 px-2.5 py-1 rounded">
              {selectedProject.category}
            </span>
            {selectedProject.isConcept && (
              <span className="text-xs text-[#4B3025]/70 italic">
                Agency Concept Case Study
              </span>
            )}
          </div>
          <button
            onClick={() => setSelectedProject(null)}
            className="p-1.5 rounded-lg text-[#2B2521]/70 hover:text-[#4B3025] hover:bg-[#E9D9A8]/30 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4B3025] font-['Manrope'] mb-2">
              {selectedProject.title}
            </h2>
            <p className="text-base text-[#2B2521]/80 leading-relaxed">
              {selectedProject.shortDescription}
            </p>
          </div>

          {/* Visual Presentation */}
          <div className="rounded-xl overflow-hidden shadow-md border border-[#4B3025]/10 bg-[#FAF5E8]">
            <VisualMockup type={selectedProject.visualType} className="max-h-[420px]" />
          </div>

          {/* Brief & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FAF5E8]/60 p-6 rounded-xl border border-[#E9D9A8]">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#4B3025] mb-2 font-['Manrope']">
                The Brief &amp; Objective
              </h3>
              <p className="text-sm text-[#2B2521]/90 leading-relaxed">
                {selectedProject.brief}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#4B3025] mb-2 font-['Manrope']">
                Creative Approach
              </h3>
              <p className="text-sm text-[#2B2521]/90 leading-relaxed">
                {selectedProject.approach}
              </p>
            </div>
          </div>

          {/* Visual Deliverables */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#4B3025] mb-3 font-['Manrope']">
              Deliverables &amp; Output
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {selectedProject.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#2B2521]/90 bg-[#FFFDF8] p-3 rounded-lg border border-[#E9D9A8]">
                  <CheckCircle2 className="w-4 h-4 text-[#4B3025] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="pt-4 border-t border-[#4B3025]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#2B2521]/60">
              Honest creative direction. Concept case study designed to demonstrate creative capability.
            </p>
            <button
              onClick={() => {
                setSelectedProject(null);
                navigate('/contact');
              }}
              className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold text-[#4B3025] bg-[#F2C94C] hover:bg-[#ebbf3c] rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Discuss a Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
