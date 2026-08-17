import React, { useState } from 'react';
import { sounds } from '../utils/audio';
import { X, Code2, CheckCircle2, Copy, Check, Database, Server, ShieldCheck, Layers } from 'lucide-react';

export const ProjectDetailModal = ({ project, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      sounds.playSuccess();
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content project-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {/* Header */}
        <div className="proj-modal-header">
          <div className="proj-modal-badge" style={{ background: project.color }}>
            {project.badge}
          </div>
          <h2>{project.title}</h2>
          <p>{project.subtitle}</p>
        </div>

        {/* Tech Specs Table */}
        <div className="tech-specs-box glass-card">
          <h3><Layers size={18} /> Architectural Specifications</h3>
          <div className="specs-grid">
            {Object.entries(project.techSpecs || {}).map(([key, val]) => (
              <div key={key} className="spec-row">
                <span className="spec-key">{key.toUpperCase()}:</span>
                <span className="spec-val">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features List */}
        <div className="proj-features-section">
          <h3>Key System Achievements</h3>
          <div className="proj-features-list">
            {project.highlights.map((hl, idx) => (
              <div key={idx} className="feature-item">
                <CheckCircle2 size={18} style={{ color: project.color }} />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Code Snippet Box */}
        {project.codeSnippet && (
          <div className="code-snippet-box">
            <div className="code-header">
              <span className="code-title"><Code2 size={16} /> Technical Code Highlight</span>
              <button className="copy-code-btn" onClick={handleCopyCode}>
                {copiedCode ? <Check size={14} className="icon-green" /> : <Copy size={14} />}
                <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>
            <pre className="code-content">
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        )}
      </div>

      <style>{`
        .project-modal-box {
          max-width: 900px;
          padding: 40px;
        }

        .proj-modal-badge {
          display: inline-block;
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 14px;
          border-radius: 12px;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .proj-modal-header h2 {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .proj-modal-header p {
          font-size: 15px;
          color: var(--text-secondary);
          margin-bottom: 28px;
        }

        .tech-specs-box {
          padding: 24px;
          margin-bottom: 28px;
        }

        .tech-specs-box h3 {
          font-size: 16px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          color: var(--theme-color);
        }

        .specs-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .spec-row {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 12px;
          font-size: 13.5px;
        }

        .spec-key {
          font-weight: 800;
          color: var(--text-secondary);
          font-size: 11px;
          letter-spacing: 0.5px;
        }

        .spec-val {
          color: var(--text-primary);
          font-weight: 600;
        }

        .proj-features-section {
          margin-bottom: 28px;
        }

        .proj-features-section h3 {
          font-size: 17px;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .proj-features-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14px;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .feature-item svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .code-snippet-box {
          background: #090d16;
          border: 1px solid var(--border-color);
          border-radius: 16px;
          overflow: hidden;
        }

        .code-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
          background: #0f172a;
          border-bottom: 1px solid var(--border-color);
        }

        .code-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          color: var(--text-secondary);
        }

        .copy-code-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
          transition: color 0.2s;
        }

        .copy-code-btn:hover {
          color: var(--theme-color);
        }

        .code-content {
          padding: 20px;
          font-family: var(--font-mono);
          font-size: 13px;
          color: #a78bfa;
          overflow-x: auto;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};
