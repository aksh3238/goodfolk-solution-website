import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioItem, InsightArticle } from '../types';

interface NavigationContextType {
  currentPath: string;
  navigate: (path: string, hash?: string) => void;
  selectedProject: PortfolioItem | null;
  setSelectedProject: (project: PortfolioItem | null) => void;
  selectedArticle: InsightArticle | null;
  setSelectedArticle: (article: InsightArticle | null) => void;
  isAdminEnquiriesOpen: boolean;
  setIsAdminEnquiriesOpen: (open: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path === '' ? '/' : path;
    }
    return '/';
  });

  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [isAdminEnquiriesOpen, setIsAdminEnquiriesOpen] = useState<boolean>(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string, hash?: string) => {
    if (typeof window !== 'undefined') {
      const fullUrl = hash ? `${path}#${hash}` : path;
      window.history.pushState(null, '', fullUrl);
      setCurrentPath(path);
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigate,
        selectedProject,
        setSelectedProject,
        selectedArticle,
        setSelectedArticle,
        isAdminEnquiriesOpen,
        setIsAdminEnquiriesOpen
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
