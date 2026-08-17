import React from 'react';
import { TiltCard } from './TiltCard';
import { portfolioData } from '../data/portfolioData';
import { Github, GitCommit, GitFork, Star, ExternalLink } from 'lucide-react';

export const GithubStats = () => {
  return (
    <section id="github" className="section-wrapper section-alt">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Open Source & Metrics</span>
          <h2 className="section-title">GitHub <span className="accent-text">Activity & Stats</span></h2>
          <p className="section-sub">Live repository metrics and open-source software contributions.</p>
          <div className="title-line"></div>
        </div>

        <div className="github-content-grid">
          {/* Main GitHub Stats Card */}
          <TiltCard className="github-card glass-card">
            <div className="github-card-header">
              <div className="gh-avatar-wrap">
                <Github size={28} />
              </div>
              <div>
                <h3>{portfolioData.personal.shortName}'s GitHub Ecosystem</h3>
                <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="gh-link">
                  github.com/Raman-8688 <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="gh-metrics-row">
              <div className="gh-metric-box">
                <GitCommit size={20} className="icon-blue" />
                <div className="gh-val">500+</div>
                <div className="gh-lbl">Commits Pushed</div>
              </div>
              <div className="gh-metric-box">
                <Star size={20} className="icon-yellow" />
                <div className="gh-val">Production</div>
                <div className="gh-lbl">Client Repos</div>
              </div>
              <div className="gh-metric-box">
                <GitFork size={20} className="icon-purple" />
                <div className="gh-val">Clean</div>
                <div className="gh-lbl">Git/SVN Workflows</div>
              </div>
            </div>

            <div className="gh-banner">
              <p>Active code repositories showcasing Java 17 Microservices, Angular 19 Standalone components, and AI Converter tooling.</p>
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="btn-primary">
                <Github size={16} />
                <span>Visit GitHub Profile</span>
              </a>
            </div>
          </TiltCard>
        </div>
      </div>

      <style>{`
        .github-card {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
        }

        .github-card-header {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 32px;
        }

        .gh-avatar-wrap {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--theme-color), #8b5cf6);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .github-card-header h3 {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 800;
        }

        .gh-link {
          font-size: 13px;
          color: var(--theme-color);
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-weight: 600;
        }

        .gh-metrics-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }

        .gh-metric-box {
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 20px;
          text-align: center;
        }

        .icon-blue { color: #3b82f6; }
        .icon-yellow { color: #f59e0b; }
        .icon-purple { color: #8b5cf6; }

        .gh-val {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 800;
          margin: 8px 0 2px;
        }

        .gh-lbl {
          font-size: 12px;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .gh-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: color-mix(in srgb, var(--theme-color) 8%, transparent);
          border: 1px solid color-mix(in srgb, var(--theme-color) 20%, transparent);
          border-radius: 16px;
          padding: 24px;
        }

        .gh-banner p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .gh-metrics-row {
            grid-template-columns: 1fr;
          }
          .gh-banner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};
