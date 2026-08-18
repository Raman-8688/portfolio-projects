import React, { useState } from 'react';
import { TiltCard } from './TiltCard';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import { Cpu, Server, Database, Cloud, Sparkles, CheckCircle2 } from 'lucide-react';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...portfolioData.skills.map((s) => s.category)];

  const filteredSkills = activeCategory === 'All'
    ? portfolioData.skills
    : portfolioData.skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-wrapper">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">Full Stack <span className="accent-text">Skills Matrix</span></h2>
          <p className="section-sub">Production expertise across modern Java microservice ecosystems, frontends, and cloud databases.</p>
          <div className="title-line"></div>
        </div>

        {/* Category Filter Tabs */}
        <div className="skill-tabs">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`skill-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => {
                sounds.playClick();
                setActiveCategory(cat);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid - Clean Glass Technology Pills (No Percentage Bars/Lines) */}
        <div className="skills-group-grid">
          {filteredSkills.map((group, groupIdx) => (
            <TiltCard key={groupIdx} className="skill-group-card glass-card">
              <div className="group-header">
                <div className="group-icon" style={{ color: group.color, background: `${group.color}15` }}>
                  <i className={group.icon}></i>
                </div>
                <h3>{group.category}</h3>
              </div>

              <div className="skill-items-grid">
                {group.items.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-pill-card">
                    <div className="pill-top">
                      <CheckCircle2 size={16} style={{ color: group.color }} className="pill-check" />
                      <span className="skill-name">{skill.name}</span>
                    </div>

                    <div className="pill-meta">
                      <span className="skill-tag-sub">{skill.tag}</span>
                      <span className="skill-badge-level" style={{ background: `${group.color}20`, color: group.color }}>
                        {skill.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      <style>{`
        .skill-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 44px;
        }

        .skill-tab {
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          color: var(--text-secondary);
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          transition: all 0.2s ease;
        }

        .skill-tab:hover, .skill-tab.active {
          color: #ffffff;
          background: var(--theme-color);
          border-color: var(--theme-color);
          box-shadow: 0 4px 15px color-mix(in srgb, var(--theme-color) 40%, transparent);
        }

        .skills-group-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 28px;
        }

        .skill-group-card {
          padding: 32px;
        }

        .group-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-color);
        }

        .group-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .group-header h3 {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 800;
        }

        .skill-items-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .skill-pill-card {
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          padding: 12px 16px;
          transition: border-color 0.25s, transform 0.25s, background 0.25s;
        }

        .skill-pill-card:hover {
          border-color: var(--theme-color);
          transform: translateX(4px);
          background: color-mix(in srgb, var(--theme-color) 8%, transparent);
        }

        .pill-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 4px;
        }

        .pill-check {
          flex-shrink: 0;
        }

        .skill-name {
          font-size: 14.5px;
          font-weight: 800;
          color: var(--text-primary);
        }

        .pill-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 26px;
        }

        .skill-tag-sub {
          font-size: 12px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .skill-badge-level {
          font-size: 10.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 2px 8px;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
};
