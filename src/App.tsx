/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage, TermsPage } from './pages/LegalPages';
import { ProjectModal } from './components/ProjectModal';
import { ArticleModal } from './components/ArticleModal';
import { AdminEnquiryModal } from './components/AdminEnquiryModal';

const AppContent: React.FC = () => {
  const { currentPath } = useNavigation();

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/services':
        return <ServicesPage />;
      case '/portfolio':
        return <PortfolioPage />;
      case '/about':
        return <AboutPage />;
      case '/insights':
        return <InsightsPage />;
      case '/contact':
        return <ContactPage />;
      case '/privacy':
        return <PrivacyPolicyPage />;
      case '/terms':
        return <TermsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF8] text-[#2B2521] font-['Inter']">
      <Header />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer />

      {/* Global Interactive Overlays */}
      <ProjectModal />
      <ArticleModal />
      <AdminEnquiryModal />
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
