import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { insightsData } from '../data/insightsData';
import {
  Search,
  Clock,
  Calendar,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const InsightsPage: React.FC = () => {
  const { setSelectedArticle, navigate } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Honest newsletter subscription state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [newsletterError, setNewsletterError] = useState('');

  const categories = [
    'All',
    'Branding',
    'Packaging',
    'Creative Design',
    'E-commerce',
    'Performance Marketing',
    'Digital Marketing'
  ];

  const filteredArticles = insightsData.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = insightsData[0];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterError('Please provide a valid email address.');
      setNewsletterStatus('error');
      return;
    }

    try {
      const existing = localStorage.getItem('goodfolk_newsletter_subscribers');
      const list = existing ? JSON.parse(existing) : [];
      if (!list.includes(newsletterEmail)) {
        list.push({ email: newsletterEmail, subscribedAt: new Date().toISOString() });
        localStorage.setItem('goodfolk_newsletter_subscribers', JSON.stringify(list));
      }
      setNewsletterStatus('success');
      setNewsletterEmail('');
      setNewsletterError('');
    } catch {
      setNewsletterError('Could not record subscription in local storage.');
      setNewsletterStatus('error');
    }
  };

  return (
    <div className="space-y-0 text-[#2B2521] selection:bg-[#F2C94C]/40">
      {/* Hero Section */}
      <section className="bg-[#FFFDF8] border-b border-[#4B3025]/10 pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#4B3025] bg-[#E9D9A8]/40 px-3 py-1 rounded">
              EDITORIAL &amp; PERSPECTIVES
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#4B3025] font-['Manrope'] tracking-tight">
              Insights for Brands That Want to Grow.
            </h1>

            <p className="text-lg sm:text-xl text-[#2B2521]/80 leading-relaxed font-normal">
              Practical perspectives on branding, design, packaging and digital creativity to help businesses make more thoughtful decisions.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="pt-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#4B3025]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles or topics..."
                className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm rounded-lg border border-[#4B3025]/20 bg-white focus:outline-none focus:border-[#4B3025] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#2B2521]/50 hover:text-[#4B3025]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-[#4B3025] text-[#F2C94C] shadow-sm'
                        : 'bg-[#FAF5E8] text-[#4B3025] hover:bg-[#E9D9A8]/50 border border-[#4B3025]/10'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Section (shown when no specific search is active) */}
      {!searchQuery && selectedCategory === 'All' && featuredArticle && (
        <section className="py-12 bg-[#FAF5E8]/40 border-b border-[#4B3025]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              onClick={() => setSelectedArticle(featuredArticle)}
              className="group cursor-pointer rounded-2xl bg-white border border-[#4B3025]/15 p-6 sm:p-10 hover:border-[#4B3025]/40 transition-all hover:shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3 text-xs">
                  <span className="font-bold text-[#4B3025] bg-[#F2C94C]/40 px-2.5 py-1 rounded">
                    FEATURED ESSAY
                  </span>
                  <span className="text-[#4B3025] font-semibold">
                    {featuredArticle.category}
                  </span>
                  <span>·</span>
                  <span className="text-[#2B2521]/60 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#4B3025]" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4B3025] font-['Manrope'] group-hover:text-[#2B2521] transition-colors leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm sm:text-base text-[#2B2521]/80 leading-relaxed max-w-2xl">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#4B3025]">
                  <span>Read full perspective</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div className="lg:col-span-4 bg-[#FAF5E8] p-6 rounded-xl border border-[#E9D9A8] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4B3025] font-['Manrope']">
                  <BookOpen className="w-4 h-4 text-[#4B3025]" />
                  <span>Key Discussion Points</span>
                </div>
                <ul className="space-y-2 text-xs text-[#2B2521]/85">
                  {featuredArticle.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#F2C94C] font-bold">―</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 lg:py-24 bg-[#FFFDF8] border-b border-[#4B3025]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-[#4B3025] font-['Manrope']">
              {searchQuery ? `Search results for "${searchQuery}"` : 'All Articles & Notes'}
            </h2>
            <span className="text-xs text-[#2B2521]/60">
              Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="py-16 text-center space-y-3 bg-[#FAF5E8]/30 rounded-xl border border-dashed border-[#4B3025]/20">
              <p className="text-sm font-semibold text-[#4B3025]">No articles matched your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="text-xs font-semibold text-[#4B3025] underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group cursor-pointer rounded-2xl bg-white border border-[#4B3025]/15 p-6 hover:border-[#4B3025]/40 transition-all hover:shadow-lg flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#4B3025] bg-[#E9D9A8]/40 px-2 py-0.5 rounded">
                        {article.category}
                      </span>
                      {article.isDraft ? (
                        <span className="text-[11px] font-semibold text-[#4B3025] bg-[#F2C94C]/30 px-2 py-0.5 rounded">
                          Unpublished Draft
                        </span>
                      ) : (
                        <span className="text-[#2B2521]/60 flex items-center gap-1 text-[11px]">
                          <Clock className="w-3 h-3 text-[#4B3025]" />
                          {article.readTime}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-[#4B3025] font-['Manrope'] group-hover:text-[#2B2521] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#2B2521]/75 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#4B3025]/10 flex items-center justify-between text-xs text-[#2B2521]/60">
                    <span className="flex items-center gap-1 text-[11px]">
                      <Calendar className="w-3 h-3 text-[#4B3025]" />
                      {article.date}
                    </span>
                    <span className="text-[#4B3025] font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      Read note
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Honest Newsletter / Perspectives Subscription Box */}
      <section className="py-16 bg-[#FAF5E8]/60 border-b border-[#4B3025]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4B3025] font-['Manrope']">
            EDITORIAL DISPATCH
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4B3025] font-['Manrope']">
            Receive Our Perspectives
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2521]/75 max-w-lg mx-auto">
            Practical creative notes on brand positioning, shelf packaging, and conversion creatives. Stored securely and transparently in our local subscriber registry.
          </p>

          {newsletterStatus === 'success' ? (
            <div className="p-4 rounded-xl bg-white border border-[#4B3025]/20 max-w-md mx-auto text-xs text-[#4B3025] flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Thank you! Your email has been added to our subscriber registry.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter business email"
                className="flex-1 px-4 py-2.5 text-xs sm:text-sm rounded-lg border border-[#4B3025]/20 bg-white focus:outline-none focus:border-[#4B3025]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#4B3025] bg-[#F2C94C] hover:bg-[#ebbf3c] rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          {newsletterError && (
            <p className="text-xs text-rose-600 flex items-center justify-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {newsletterError}
            </p>
          )}

          <p className="text-[11px] text-[#2B2521]/50 italic">
            No spam. We never share subscriber records with third parties.
          </p>
        </div>
      </section>
    </div>
  );
};
