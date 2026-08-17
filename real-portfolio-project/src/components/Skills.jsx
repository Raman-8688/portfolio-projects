import React, { useState } from 'react';
import { TiltCard } from './TiltCard';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import { Cpu, Server, Database, Cloud } from 'lucide-react';

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
          <p className="section-sub">Mastery across modern Java microservice ecosystems, frontends, and cloud databases.</p>
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

        {/* Skill Groups Grid */}
        <div className="skills-group-grid">
          {filteredSkills.map((group, groupIdx) => (
            <TiltCard key={groupIdx} className="skill-group-card glass-card">
              <div className="group-header">
                <div className="group-icon" style={{ color: group.color, background: `${group.color}15` }}>
                  <i className={group.icon}></i>
                </div>
                <h3>{group.category}</h3>
              </div>

              <div className="skill-items-list">
                {group.items.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <div className="skill-meta">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-tag">{skill.tag}</span>
                    </div>

                    <div className="skill-progress-bar">
                      <div
                        className="skill-progress-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${group.color}, #a855f7)`
                        }}
                      />
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
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
        }

        .skill-group-card {
          padding: 32px;
        }

        .group-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
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

        .skill-items-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .skill-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }

        .skill-name {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .skill-tag {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .skill-progress-bar {
          height: 6px;
          background: color-mix(in srgb, var(--text-secondary) 15%, transparent);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 1s ease-out;
        }
      `}</style>
    </section>
  );
};
