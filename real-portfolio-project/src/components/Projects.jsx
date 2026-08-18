import React, { useState } from 'react';
import { TiltCard } from './TiltCard';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import { ExternalLink, Code2, Sparkles, CheckCircle2, ArrowRight, Github, Globe } from 'lucide-react';

export const Projects = ({ onOpenProjectModal }) => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Live Client Projects', 'Full-Stack Microservices', 'AI & Deployed Apps'];

  const filteredProjects = activeTab === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="section-wrapper section-alt">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Featured Portfolio</span>
          <h2 className="section-title">Production & <span className="accent-text">GitHub Projects</span></h2>
          <p className="section-sub">Live client infrastructure, multi-tenant SaaS platforms, and AI-integrated microservices.</p>
          <div className="title-line"></div>
        </div>

        {/* Category Tabs */}
        <div className="project-tabs">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`project-tab ${activeTab === cat ? 'active' : ''}`}
              onClick={() => {
                sounds.playClick();
                setActiveTab(cat);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((proj) => (
            <TiltCard key={proj.id} className="project-card glass-card">
              <div className="project-img-container">
                <img src={proj.image} alt={proj.title} className="project-cover-img" />
                <div className="project-badge-overlay" style={{ background: proj.color }}>
                  {proj.badge}
                </div>
              </div>

              <div className="project-body">
                <span className="project-category">{proj.category}</span>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-subtitle">{proj.subtitle}</p>

                <div className="project-highlights">
                  {proj.highlights.slice(0, 3).map((hl, hlIdx) => (
                    <div key={hlIdx} className="hl-item">
                      <CheckCircle2 size={15} style={{ color: proj.color }} />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="project-card-footer">
                  <div className="proj-links-row">
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="proj-btn btn-live"
                        onClick={() => sounds.playClick()}
                        title="Open Live Application"
                      >
                        <Globe size={15} />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="proj-btn btn-github"
                        onClick={() => sounds.playClick()}
                        title="View GitHub Repository"
                      >
                        <Github size={15} />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>

                  <button
                    className="btn-primary btn-deep-dive"
                    style={{ background: `linear-gradient(135deg, ${proj.color}, #8b5cf6)` }}
                    onClick={() => {
                      sounds.playClick();
                      onOpenProjectModal(proj);
                    }}
                  >
                    <Code2 size={16} />
                    <span>Deep-Dive & Code</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      <style>{`
        .project-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 40px;
        }

        .project-tab {
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          color: var(--text-secondary);
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          transition: all 0.2s ease;
        }

        .project-tab:hover, .project-tab.active {
          color: #ffffff;
          background: var(--theme-color);
          border-color: var(--theme-color);
          box-shadow: 0 4px 15px color-mix(in srgb, var(--theme-color) 40%, transparent);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 32px;
        }

        .project-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .project-img-container {
          position: relative;
          height: 210px;
          overflow: hidden;
          background: #0f172a;
        }

        .project-cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-cover-img {
          transform: scale(1.06);
        }

        .project-badge-overlay {
          position: absolute;
          top: 16px;
          right: 16px;
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .project-body {
          padding: 28px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .project-category {
          font-size: 11px;
          font-weight: 800;
          color: var(--theme-color);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 6px;
        }

        .project-title {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .project-subtitle {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .project-highlights {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .hl-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .hl-item svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .project-card-footer {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .proj-links-row {
          display: flex;
          gap: 10px;
        }

        .proj-btn {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 9px 14px;
          border-radius: 10px;
          font-size: 12.5px;
          font-weight: 700;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }

        .btn-live {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .btn-live:hover {
          background: rgba(16, 185, 129, 0.25);
          transform: translateY(-2px);
        }

        .btn-github {
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }

        .btn-github:hover {
          border-color: var(--theme-color);
          color: var(--theme-color);
          transform: translateY(-2px);
        }

        .btn-deep-dive {
          width: 100%;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};
