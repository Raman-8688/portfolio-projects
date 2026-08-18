import React from 'react';
import { TiltCard } from './TiltCard';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/navi_blue.png';
import { Github, ExternalLink, GitCommit, GitPullRequest, Code2, Sparkles, Activity } from 'lucide-react';

export const GithubStats = () => {
  // Contribution matrix simulation grid (7 columns x 5 rows)
  const heatmapCols = [
    [3, 4, 2, 4, 3],
    [2, 3, 4, 1, 4],
    [4, 2, 3, 4, 3],
    [1, 4, 2, 3, 4],
    [3, 3, 4, 4, 2],
    [4, 2, 3, 4, 4],
    [2, 4, 4, 3, 1]
  ];

  const getColorClass = (val) => {
    switch (val) {
      case 4: return 'lvl-4';
      case 3: return 'lvl-3';
      case 2: return 'lvl-2';
      default: return 'lvl-1';
    }
  };

  return (
    <section id="github" className="section-wrapper section-alt">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Open Source Presence</span>
          <h2 className="section-title">Developer <span className="accent-text">Activity</span></h2>
          <p className="section-sub">Real-time open source statistics and core repository highlights</p>
          <div className="title-line"></div>
        </div>

        {/* GitHub Dual Card Layout matching Screenshot */}
        <div className="github-main-grid">
          {/* Left Column: Profile Card */}
          <TiltCard className="gh-profile-card glass-card">
            <div className="gh-avatar-row">
              <img src={profileImg} alt={portfolioData.personal.name} className="gh-user-avatar" />
              <div>
                <h3 className="gh-user-name">{portfolioData.personal.name}</h3>
                <span className="gh-user-handle">@Raman-8688</span>
              </div>
            </div>

            {/* Metrics Counters */}
            <div className="gh-stats-row">
              <div className="stat-box">
                <div className="stat-num">11</div>
                <div className="stat-lbl">REPOS</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">1</div>
                <div className="stat-lbl">FOLLOWERS</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">200+</div>
                <div className="stat-lbl">COMMITS</div>
              </div>
            </div>

            {/* View GitHub Profile Button */}
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="btn-primary btn-github-full"
            >
              <Github size={18} />
              <span>View GitHub Profile</span>
            </a>
          </TiltCard>

          {/* Right Column: Contribution Activity Card */}
          <TiltCard className="gh-activity-card glass-card">
            <div className="activity-card-header">
              <div className="act-title">
                <Activity size={18} className="icon-blue" />
                <span>Contribution Activity</span>
              </div>
              <div className="act-badge">
                <span className="live-dot"></span>
                <span>Live Syncing</span>
              </div>
            </div>

            {/* Heatmap Grid Matrix */}
            <div className="heatmap-container">
              <div className="heatmap-grid">
                {heatmapCols.map((col, cIdx) => (
                  <div key={cIdx} className="heatmap-col">
                    {col.map((val, rIdx) => (
                      <div key={rIdx} className={`heatmap-cell ${getColorClass(val)}`} />
                    ))}
                  </div>
                ))}
              </div>

              <div className="heatmap-legend">
                <span>Less</span>
                <span className="cell-sample lvl-1"></span>
                <span className="cell-sample lvl-2"></span>
                <span className="cell-sample lvl-3"></span>
                <span className="cell-sample lvl-4"></span>
                <span>More</span>
              </div>
            </div>

            {/* Workflow Tags Row */}
            <div className="workflow-tags-row">
              <span className="tag-pill">⏱ Daily commits</span>
              <span className="tag-pill">&lt;/&gt; Java & TypeScript</span>
              <span className="tag-pill">🔀 Feature branch workflow</span>
              <span className="tag-pill">🤖 AI projects</span>
            </div>
          </TiltCard>
        </div>
      </div>

      <style>{`
        .github-main-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 28px;
          max-width: 1060px;
          margin: 0 auto;
        }

        .gh-profile-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .gh-avatar-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
        }

        .gh-user-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--theme-color);
        }

        .gh-user-name {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 800;
          line-height: 1.2;
        }

        .gh-user-handle {
          font-size: 13px;
          color: var(--theme-color);
          font-weight: 600;
        }

        .gh-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 28px;
        }

        .stat-box {
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          padding: 14px 10px;
          text-align: center;
        }

        .stat-num {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 800;
          color: var(--text-primary);
        }

        .stat-lbl {
          font-size: 10px;
          font-weight: 700;
          color: var(--text-secondary);
          letter-spacing: 0.5px;
        }

        .btn-github-full {
          width: 100%;
          justify-content: center;
          padding: 12px;
          background: #3b82f6;
          border-radius: 14px;
        }

        .gh-activity-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .activity-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-color);
        }

        .act-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 800;
        }

        .act-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          color: #10b981;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          animation: pulseDot 2s infinite;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }

        .heatmap-container {
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 24px;
        }

        .heatmap-grid {
          display: flex;
          gap: 10px;
          margin-bottom: 16px;
        }

        .heatmap-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .heatmap-cell {
          width: 16px;
          height: 16px;
          border-radius: 4px;
          transition: transform 0.2s;
        }

        .heatmap-cell:hover {
          transform: scale(1.2);
        }

        .lvl-1 { background: rgba(59, 130, 246, 0.2); }
        .lvl-2 { background: rgba(59, 130, 246, 0.45); }
        .lvl-3 { background: rgba(59, 130, 246, 0.75); }
        .lvl-4 { background: #3b82f6; }

        .heatmap-legend {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 6px;
          font-size: 11px;
          color: var(--text-secondary);
        }

        .cell-sample {
          width: 12px;
          height: 12px;
          border-radius: 3px;
        }

        .workflow-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag-pill {
          font-size: 11.5px;
          font-weight: 600;
          color: var(--text-secondary);
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          padding: 5px 12px;
          border-radius: 20px;
        }

        @media (max-width: 992px) {
          .github-main-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
