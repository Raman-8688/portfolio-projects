import React from 'react';
import { TiltCard } from './TiltCard';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import { ExternalLink, Code2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const Projects = ({ onOpenProjectModal }) => {
  return (
    <section id="projects" className="section-wrapper section-alt">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Featured Portfolio</span>
          <h2 className="section-title">Production <span className="accent-text">Enterprise Projects</span></h2>
          <p className="section-sub">Live client infrastructure and SaaS platforms built with Microservices & Angular.</p>
          <div className="title-line"></div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {portfolioData.projects.map((proj) => (
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
          height: 200px;
          overflow: hidden;
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
        }

        .btn-deep-dive {
          width: 100%;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};
