import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { portfolioData } from '../data/portfolioData';
import { VisualMockup } from '../components/VisualMockup';
import { ArrowRight, Eye, Layers } from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  const { setSelectedProject, navigate } = useNavigation();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = [
    'All',
    'Branding',
    'Packaging',
    'Creative Design',
    'E-commerce',
    'Performance Marketing',
    'Video & Social'
  ];

  const filteredProjects = portfolioData.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Creative Design') {
      return project.category === 'Creative Design' || project.category === 'E-commerce';
    }
    return project.category.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <div className="space-y-0 text-[#2B2521] selection:bg-[#F2C94C]/40">
      {/* Hero Section */}
      <section className="bg-[#FFFDF8] border-b border-[#4B3025]/10 pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#4B3025] bg-[#E9D9A8]/40 px-3 py-1 rounded">
              PORTFOLIO ARCHIVE
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#4B3025] font-['Manrope'] tracking-tight">
              Selected Work
            </h1>

            <p className="text-lg sm:text-xl text-[#2B2521]/80 leading-relaxed">
              Explore creative concepts across branding, packaging, digital campaigns and visual communication.
            </p>
          </div>

          {/* Interactive Filter Controls Bar */}
          <div className="pt-10 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#4B3025] text-[#F2C94C] shadow-sm'
                      : 'bg-[#FAF5E8] text-[#4B3025] hover:bg-[#E9D9A8]/50 border border-[#4B3025]/10'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-[#FAF5E8]/30 border-b border-[#4B3025]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <p className="text-base font-semibold text-[#4B3025]">No projects found in this category.</p>
              <button
                onClick={() => setActiveFilter('All')}
                className="text-xs font-semibold text-[#4B3025] underline"
              >
                Reset to All Projects
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer rounded-2xl bg-white border border-[#4B3025]/15 overflow-hidden hover:border-[#4B3025]/40 transition-all hover:shadow-xl flex flex-col"
                >
                  {/* Card Visual Top */}
                  <div className="relative overflow-hidden bg-[#FAF5E8]">
                    <VisualMockup
                      type={project.visualType}
                      badgeText={project.category.toUpperCase()}
                      className="group-hover:scale-[1.02] transition-transform duration-300"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#4B3025]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                      <div className="space-y-2">
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#4B3025] bg-[#F2C94C] rounded-lg shadow">
                          <Eye className="w-3.5 h-3.5" />
                          <span>Inspect Project Details</span>
                        </span>
                        <p className="text-[11px] text-[#FFFDF8]/90">
                          Click to view brief, approach &amp; deliverables
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-semibold text-[#4B3025] bg-[#E9D9A8]/40 px-2.5 py-0.5 rounded">
                          {project.category}
                        </span>
                        <span className="text-[#2B2521]/60 italic text-[11px]">
                          Agency Concept
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#4B3025] font-['Manrope'] group-hover:text-[#2B2521] transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#2B2521]/75 mt-2 leading-relaxed line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#4B3025]/10 flex items-center justify-between text-xs text-[#4B3025] font-semibold">
                      <span>View case study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Transparent Agency Statement */}
          <div className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#E9D9A8] max-w-2xl mx-auto text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4B3025] uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#4B3025]" />
              <span>Concept Work Transparency</span>
            </div>
            <p className="text-xs text-[#2B2521]/80 leading-relaxed">
              In accordance with our strict agency honesty code, projects displayed above are original conceptual case studies developed by Goodfolk Solution to demonstrate our design systems, art direction, and packaging precision.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 lg:py-24 bg-[#4B3025] text-[#FFFDF8] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFFDF8] font-['Manrope'] tracking-tight">
            Have a project in mind? Let's create something meaningful.
          </h2>
          <p className="text-base text-[#E9D9A8] max-w-xl mx-auto leading-relaxed">
            From initial identity development to multi-channel ad campaigns, we turn business goals into compelling creative work.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 text-sm font-semibold text-[#4B3025] bg-[#F2C94C] hover:bg-[#ebbf3c] rounded-xl shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
