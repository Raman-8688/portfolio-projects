import React from 'react';
import { TiltCard } from './TiltCard';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle2, Award, Briefcase, GraduationCap, Building } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="section-wrapper section-alt">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Executive Profile</span>
          <h2 className="section-title">About <span className="accent-text">My Engineering Journey</span></h2>
          <p className="section-sub">1 Year of Production Full Stack Experience delivering high-availability client solutions.</p>
          <div className="title-line"></div>
        </div>

        {/* Counter Stats Grid */}
        <div className="stats-grid">
          {portfolioData.achievements.map((item, idx) => (
            <TiltCard key={idx} className="stat-card">
              <div className="stat-icon-wrap" style={{ color: item.color, background: `${item.color}15` }}>
                <i className={item.icon}></i>
              </div>
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </TiltCard>
          ))}
        </div>

        {/* About Details Grid */}
        <div className="about-main-grid">
          {/* Left: Bio & Enterprise Points */}
          <div className="about-bio-box glass-card">
            <h3 className="bio-title">Full Stack Developer & Systems Engineer</h3>
            <p 
              className="bio-intro" 
              dangerouslySetInnerHTML={{ __html: portfolioData.about.intro }} 
            />

            <div className="points-list">
              {portfolioData.about.points.map((pt, idx) => (
                <div key={idx} className="point-item">
                  <div className="point-icon">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="point-title">{pt.title}</h4>
                    <p className="point-text">{pt.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info Cards Grid */}
          <div className="info-cards-column">
            {portfolioData.about.infoCards.map((card, idx) => (
              <TiltCard key={idx} className="info-card glass-card">
                <div className="info-card-header">
                  <div className="info-icon" style={{ color: card.color, background: `${card.color}15` }}>
                    <i className={card.icon}></i>
                  </div>
                  <span className="info-label">{card.label}</span>
                </div>
                <div className="info-val">{card.value}</div>
              </TiltCard>
            ))}

            <div className="scholarship-banner glass-card">
              <div className="banner-badge">
                <Award size={20} className="icon-gold" />
                <div>
                  <h4>JSpiders Exam Scholarship Awardee</h4>
                  <p>Top percentile scorer in Java Full Stack evaluation in Bangalore.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .accent-text {
          background: linear-gradient(135deg, var(--theme-color), #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 48px;
        }

        .stat-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 24px;
          text-align: center;
        }

        .stat-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin: 0 auto 14px;
        }

        .stat-value {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .about-main-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 32px;
        }

        .bio-title {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .bio-intro {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 28px;
        }

        .points-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .point-item {
          display: flex;
          gap: 14px;
        }

        .point-icon {
          color: var(--theme-color);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .point-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .point-text {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .info-cards-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-card {
          padding: 20px 24px;
        }

        .info-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .info-icon {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

        .info-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .info-val {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .scholarship-banner {
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(139, 92, 246, 0.1));
          border: 1px solid rgba(245, 158, 11, 0.3);
          padding: 20px 24px;
        }

        .banner-badge {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .icon-gold {
          color: #f59e0b;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .banner-badge h4 {
          font-size: 15px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .banner-badge p {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .about-main-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
