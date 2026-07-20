import React, { createContext, useContext, useState } from "react";
import {
  STATS as INITIAL_STATS,
  SERVICES as INITIAL_SERVICES,
  PROJECTS as INITIAL_PROJECTS,
  TEAM as INITIAL_TEAM,
  TIMELINE as INITIAL_TIMELINE,
  NEWS as INITIAL_NEWS,
  JOBS as INITIAL_JOBS,
  INDUSTRIES as INITIAL_INDUSTRIES,
  CERTIFICATIONS as INITIAL_CERTIFICATIONS,
  TESTIMONIALS as INITIAL_TESTIMONIALS,
} from "../data/mock";

interface CMSContextType {
  stats: typeof INITIAL_STATS;
  services: typeof INITIAL_SERVICES;
  projects: typeof INITIAL_PROJECTS;
  team: typeof INITIAL_TEAM;
  timeline: typeof INITIAL_TIMELINE;
  news: typeof INITIAL_NEWS;
  jobs: typeof INITIAL_JOBS;
  industries: typeof INITIAL_INDUSTRIES;
  certifications: typeof INITIAL_CERTIFICATIONS;
  testimonials: typeof INITIAL_TESTIMONIALS;
  
  // Actions
  updateProjects: (newProjects: typeof INITIAL_PROJECTS) => void;
  updateServices: (newServices: typeof INITIAL_SERVICES) => void;
  updateNews: (newNews: typeof INITIAL_NEWS) => void;
  updateTeam: (newTeam: typeof INITIAL_TEAM) => void;
  updateJobs: (newJobs: typeof INITIAL_JOBS) => void;
  updateTestimonials: (newTestimonials: typeof INITIAL_TESTIMONIALS) => void;
  updateStats: (newStats: typeof INITIAL_STATS) => void;
  resetToDefaults: () => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

const STORAGE_KEY = "3c_marine_cms_data";

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load CMS data from localStorage", e);
    }
    return {
      stats: INITIAL_STATS,
      services: INITIAL_SERVICES,
      projects: INITIAL_PROJECTS,
      team: INITIAL_TEAM,
      timeline: INITIAL_TIMELINE,
      news: INITIAL_NEWS,
      jobs: INITIAL_JOBS,
      industries: INITIAL_INDUSTRIES,
      certifications: INITIAL_CERTIFICATIONS,
      testimonials: INITIAL_TESTIMONIALS,
    };
  });

  const saveState = (updated: any) => {
    setData(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save CMS data", e);
    }
  };

  const updateProjects = (projects: typeof INITIAL_PROJECTS) => {
    saveState({ ...data, projects });
  };

  const updateServices = (services: typeof INITIAL_SERVICES) => {
    saveState({ ...data, services });
  };

  const updateNews = (news: typeof INITIAL_NEWS) => {
    saveState({ ...data, news });
  };

  const updateTeam = (team: typeof INITIAL_TEAM) => {
    saveState({ ...data, team });
  };

  const updateJobs = (jobs: typeof INITIAL_JOBS) => {
    saveState({ ...data, jobs });
  };

  const updateTestimonials = (testimonials: typeof INITIAL_TESTIMONIALS) => {
    saveState({ ...data, testimonials });
  };

  const updateStats = (stats: typeof INITIAL_STATS) => {
    saveState({ ...data, stats });
  };

  const resetToDefaults = () => {
    const defaults = {
      stats: INITIAL_STATS,
      services: INITIAL_SERVICES,
      projects: INITIAL_PROJECTS,
      team: INITIAL_TEAM,
      timeline: INITIAL_TIMELINE,
      news: INITIAL_NEWS,
      jobs: INITIAL_JOBS,
      industries: INITIAL_INDUSTRIES,
      certifications: INITIAL_CERTIFICATIONS,
      testimonials: INITIAL_TESTIMONIALS,
    };
    saveState(defaults);
  };

  return (
    <CMSContext.Provider
      value={{
        ...data,
        updateProjects,
        updateServices,
        updateNews,
        updateTeam,
        updateJobs,
        updateTestimonials,
        updateStats,
        resetToDefaults,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error("useCMS must be used within a CMSProvider");
  }
  return context;
};
