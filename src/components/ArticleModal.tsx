import React, { useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { X, Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react';

export const ArticleModal: React.FC = () => {
  const { selectedArticle, setSelectedArticle, navigate } = useNavigation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedArticle(null);
    };
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedArticle, setSelectedArticle]);

  if (!selectedArticle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#2B2521]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FFFDF8] rounded-2xl shadow-2xl border border-[#4B3025]/15 text-[#2B2521]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#FFFDF8]/95 backdrop-blur border-b border-[#4B3025]/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#4B3025] bg-[#E9D9A8]/40 px-2.5 py-1 rounded">
              {selectedArticle.category}
            </span>
            {selectedArticle.isDraft ? (
              <span className="text-xs text-[#4B3025] font-medium bg-[#F2C94C]/30 px-2 py-0.5 rounded">
                Draft Working Notes
              </span>
            ) : (
              <span className="text-xs text-[#2B2521]/70 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {selectedArticle.readTime}
              </span>
            )}
          </div>
          <button
            onClick={() => setSelectedArticle(null)}
            className="p-1.5 rounded-lg text-[#2B2521]/70 hover:text-[#4B3025] hover:bg-[#E9D9A8]/30 transition-colors"
            aria-label="Close article modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Article Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#4B3025] font-['Manrope'] leading-tight">
              {selectedArticle.title}
            </h1>
            <div className="flex items-center gap-4 text-xs text-[#2B2521]/60 pt-1">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#4B3025]" />
                {selectedArticle.date}
              </span>
              <span>·</span>
              <span>Published by Goodfolk Solution Editorial</span>
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-[#FAF5E8] p-5 rounded-xl border border-[#E9D9A8] space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4B3025] font-['Manrope']">
              <BookOpen className="w-4 h-4 text-[#4B3025]" />
              <span>Core Takeaways</span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#2B2521]/90">
              {selectedArticle.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#F2C94C] font-bold">―</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-[#2B2521]/90 leading-relaxed font-normal">
            {selectedArticle.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Footer Callout */}
          <div className="mt-8 pt-6 border-t border-[#4B3025]/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FAF5E8]/40 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 rounded-b-2xl">
            <div>
              <p className="text-xs font-semibold text-[#4B3025]">
                Need tailored creative guidance for your brand?
              </p>
              <p className="text-xs text-[#2B2521]/70">
                Discuss our {selectedArticle.category} capabilities with the Goodfolk team.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  navigate('/services', selectedArticle.relatedServiceId);
                }}
                className="px-4 py-2 text-xs font-medium text-[#4B3025] bg-white border border-[#4B3025]/20 hover:bg-[#FAF5E8] rounded-lg transition-colors whitespace-nowrap"
              >
                View Related Service
              </button>
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  navigate('/contact');
                }}
                className="px-4 py-2 text-xs font-semibold text-[#4B3025] bg-[#F2C94C] hover:bg-[#ebbf3c] rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
