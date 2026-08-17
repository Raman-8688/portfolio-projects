import React from 'react';
import { TiltCard } from './TiltCard';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="section-wrapper section-alt">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Career History</span>
          <h2 className="section-title">Production <span className="accent-text">Experience Timeline</span></h2>
          <p className="section-sub">Real-world track record building live systems for clients and SaaS products.</p>
          <div className="title-line"></div>
        </div>

        {/* Timeline List */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {portfolioData.experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot-wrap">
                <div className="timeline-dot" style={{ background: exp.color }}>
                  <Briefcase size={16} color="#fff" />
                </div>
              </div>

              <TiltCard className="timeline-content glass-card">
                <div className="exp-badge-bar">
                  <span className="exp-badge" style={{ background: `${exp.color}15`, color: exp.color, borderColor: `${exp.color}30` }}>
                    {exp.badge}
                  </span>
                  <div className="exp-period">
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h3 className="exp-company">{exp.company}</h3>
                <div className="exp-role-row">
                  <span className="exp-role">{exp.role}</span>
                  <span className="exp-location"><MapPin size={12} /> {exp.location}</span>
                </div>

                <p className="exp-desc">{exp.description}</p>

                <div className="exp-achievements">
                  {exp.achievements.map((ach, achIdx) => (
                    <div key={achIdx} className="achievement-bullet">
                      <CheckCircle2 size={16} className="bullet-icon" style={{ color: exp.color }} />
                      <span dangerouslySetInnerHTML={{ __html: ach }} />
                    </div>
                  ))}
                </div>

                <div className="exp-tech-tags">
                  {exp.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-tag">{t}</span>
                  ))}
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .timeline-line {
          position: absolute;
          top: 20px;
          bottom: 20px;
          left: 24px;
          width: 3px;
          background: linear-gradient(180deg, var(--theme-color), #8b5cf6, #10b981);
          border-radius: 2px;
        }

        .timeline-item {
          display: flex;
          gap: 32px;
          position: relative;
          z-index: 2;
        }

        .timeline-dot-wrap {
          flex-shrink: 0;
        }

        .timeline-dot {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        }

        .timeline-content {
          flex-grow: 1;
          padding: 32px;
        }

        .exp-badge-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .exp-badge {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 4px 12px;
          border-radius: 12px;
          border: 1px solid transparent;
        }

        .exp-period {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .exp-company {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .exp-role-row {
          display: flex;
          gap: 16px;
          align-items: center;
          font-size: 14px;
          margin-bottom: 16px;
        }

        .exp-role {
          font-weight: 700;
          color: var(--theme-color);
        }

        .exp-location {
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .exp-desc {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .exp-achievements {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .achievement-bullet {
          display: flex;
          gap: 12px;
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-primary);
        }

        .bullet-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }

        .exp-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          font-size: 11.5px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 8px;
          background: color-mix(in srgb, var(--text-secondary) 12%, transparent);
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 19px;
          }
          .timeline-dot {
            width: 40px;
            height: 40px;
          }
          .timeline-item {
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
};
