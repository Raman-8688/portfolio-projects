import React, { useState, useEffect } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { ArchitectureShowcase } from './components/ArchitectureShowcase';
import { Projects } from './components/Projects';
import { DevOpsDeployment } from './components/DevOpsDeployment';
import { GithubStats } from './components/GithubStats';
import { Contact } from './components/Contact';
import { MncPrepModal } from './components/MncPrepModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(true);
  const [isMncModalOpen, setIsMncModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Toggle dark/light theme class on document body
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light-theme');
    } else {
      document.documentElement.classList.add('light-theme');
    }
  }, [isDark]);

  // ScrollSpy Intersection Observer
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'experience', 'architecture', 'projects', 'devops', 'github', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: '-70px 0px -30% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      {/* Background Interactive Particle Constellation */}
      <ParticleCanvas />

      {/* Sticky Navbar with Reading Progress */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenMncModal={() => setIsMncModalOpen(true)}
        onOpenTerminal={() => handleNavigate('devops')}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />

      {/* Main Page Sections */}
      <main>
        <Hero
          onNavigate={handleNavigate}
          onOpenMncModal={() => setIsMncModalOpen(true)}
          onOpenTerminal={() => handleNavigate('devops')}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />
        <About />
        <Skills />
        <Experience />
        <ArchitectureShowcase />
        <Projects onOpenProjectModal={(proj) => setSelectedProject(proj)} />
        <DevOpsDeployment
          onOpenMncModal={() => setIsMncModalOpen(true)}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />
        <GithubStats />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Button */}
      <ScrollToTop />

      {/* Modals */}
      <MncPrepModal
        isOpen={isMncModalOpen}
        onClose={() => setIsMncModalOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
