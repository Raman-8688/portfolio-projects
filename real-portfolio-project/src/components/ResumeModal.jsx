import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import { FileText, X, Printer, Copy, Check, Download, Briefcase, GraduationCap, MapPin, Mail, Phone } from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [copiedSummary, setCopiedSummary] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    sounds.playClick();
    window.print();
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(portfolioData.atsResume.summary);
    sounds.playSuccess();
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const resume = portfolioData.atsResume;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content resume-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn no-print" onClick={onClose}>
          <X size={20} />
        </button>

        {/* Action Controls Bar */}
        <div className="resume-actions-bar no-print">
          <div className="resume-modal-title">
            <FileText size={20} className="icon-purple" />
            <span>MNC ATS Resume Preview (1-Page Formatted)</span>
          </div>

          <div className="btn-group">
            <button className="btn-secondary" onClick={handleCopySummary}>
              {copiedSummary ? <Check size={14} className="icon-green" /> : <Copy size={14} />}
              <span>{copiedSummary ? 'Copied' : 'Copy Summary'}</span>
            </button>

            <a
              href="/resume.pdf"
              download="Ramanjaneyulu_Boya_Resume.pdf"
              className="btn-secondary btn-download-pdf"
              onClick={() => sounds.playClick()}
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            <button className="btn-primary" onClick={handlePrint}>
              <Printer size={14} />
              <span>Print 1-Page PDF</span>
            </button>
          </div>
        </div>

        {/* Scrollable Modal Resume View */}
        <div className="resume-scroll-container">
          <div className="ats-paper" id="printable-resume">
            {/* Header */}
            <div className="paper-header">
              <h1 className="paper-name">{portfolioData.personal.name}</h1>
              <div className="paper-subtitle">Java Full Stack & Microservices Developer | 1 Year Exp</div>
              <div className="paper-contact-line">
                <span>{portfolioData.personal.email}</span> • 
                <span>{portfolioData.personal.phone}</span> • 
                <span>{portfolioData.personal.location}</span> • 
                <span>github.com/Raman-8688</span> • 
                <span>linkedin.com/in/b-ramanjaneyulu-155021258</span>
              </div>
            </div>

            <div className="paper-divider"></div>

            {/* Professional Summary */}
            <div className="paper-section">
              <h2 className="section-head">PROFESSIONAL SUMMARY</h2>
              <p className="summary-text">{resume.summary}</p>
            </div>

            {/* Core Technical Skills */}
            <div className="paper-section">
              <h2 className="section-head">TECHNICAL SKILLS MATRIX</h2>
              <div className="skills-grid-ats">
                {resume.skillsCategorized?.map((sk, idx) => (
                  <div key={idx} className="skill-cat-row">
                    <span className="sk-cat-name">{sk.category}:</span>
                    <span className="sk-cat-items">{sk.items}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Production Experience */}
            <div className="paper-section">
              <h2 className="section-head">PRODUCTION EXPERIENCE</h2>
              {resume.experience.map((exp, idx) => (
                <div key={idx} className="exp-block">
                  <div className="exp-head-row">
                    <div>
                      <span className="exp-title-text">{exp.role}</span> — <span className="exp-company-text">{exp.company}</span>
                    </div>
                    <div className="exp-right-meta">
                      <span className="exp-period-text">{exp.period}</span> | <span className="exp-loc-text">{exp.location}</span>
                    </div>
                  </div>
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education & Certifications */}
            <div className="paper-section">
              <h2 className="section-head">EDUCATION & CERTIFICATIONS</h2>
              <div className="edu-block">
                <p><strong>Education:</strong> {resume.education}</p>
                <p><strong>Certifications:</strong> {resume.certifications}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .resume-modal-box {
          max-width: 940px;
          max-height: 92vh;
          display: flex;
          flex-direction: column;
          padding: 28px 36px;
        }

        .resume-actions-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-color);
          flex-shrink: 0;
        }

        .resume-modal-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 800;
        }

        .btn-group {
          display: flex;
          gap: 8px;
        }

        .btn-download-pdf {
          color: var(--theme-color) !important;
          border-color: color-mix(in srgb, var(--theme-color) 40%, transparent) !important;
        }

        /* Scrollable container inside modal */
        .resume-scroll-container {
          overflow-y: auto;
          flex-grow: 1;
          padding-right: 8px;
        }

        .resume-scroll-container::-webkit-scrollbar {
          width: 6px;
        }
        .resume-scroll-container::-webkit-scrollbar-thumb {
          background: var(--theme-color);
          border-radius: 6px;
        }

        /* ATS Paper Container */
        .ats-paper {
          background: #ffffff;
          color: #0f172a;
          border-radius: 12px;
          padding: 36px 42px;
          font-family: 'Inter', 'DM Sans', sans-serif;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          line-height: 1.5;
        }

        .paper-header {
          text-align: center;
          margin-bottom: 12px;
        }

        .paper-name {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.4px;
          margin-bottom: 3px;
        }

        .paper-subtitle {
          font-size: 13.5px;
          font-weight: 700;
          color: #2563eb;
          margin-bottom: 6px;
        }

        .paper-contact-line {
          font-size: 11.5px;
          color: #475569;
          font-weight: 500;
        }

        .paper-divider {
          height: 1.5px;
          background: #cbd5e1;
          margin: 12px 0 16px;
        }

        .paper-section {
          margin-bottom: 16px;
        }

        .section-head {
          font-size: 12px;
          font-weight: 800;
          color: #1e293b;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          border-bottom: 1.5px solid #cbd5e1;
          padding-bottom: 4px;
          margin-bottom: 8px;
        }

        .summary-text {
          font-size: 12.5px;
          color: #334155;
          line-height: 1.5;
        }

        .skills-grid-ats {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 12px;
        }

        .skill-cat-row {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 10px;
        }

        .sk-cat-name {
          font-weight: 700;
          color: #0f172a;
        }

        .sk-cat-items {
          color: #334155;
        }

        .exp-block {
          margin-bottom: 14px;
        }

        .exp-head-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12.5px;
          margin-bottom: 4px;
        }

        .exp-title-text {
          font-weight: 800;
          color: #0f172a;
        }

        .exp-company-text {
          font-weight: 700;
          color: #2563eb;
        }

        .exp-right-meta {
          font-size: 11.5px;
          color: #64748b;
          font-weight: 600;
        }

        .exp-bullets {
          padding-left: 20px;
          margin: 0;
        }

        .exp-bullets li {
          font-size: 12px;
          color: #334155;
          line-height: 1.5;
          margin-bottom: 3px;
        }

        .edu-block {
          font-size: 12px;
          color: #334155;
          line-height: 1.6;
        }

        /* ── PERFECT FULL-LENGTH 1-PAGE PRINT MEDIA STYLES ───── */
        @media print {
          @page {
            size: A4 portrait;
            margin: 8mm 12mm;
          }

          /* Suppress all non-printable page elements */
          .no-print,
          .navbar-header,
          .modal-overlay > *:not(.modal-content),
          .modal-close-btn,
          .resume-actions-bar,
          .scroll-top-btn,
          footer,
          section,
          canvas {
            display: none !important;
          }

          html, body {
            background: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
            height: auto !important;
            overflow: visible !important;
          }

          .modal-overlay {
            position: static !important;
            background: transparent !important;
            padding: 0 !important;
            backdrop-filter: none !important;
          }

          .modal-content {
            box-shadow: none !important;
            border: none !important;
            background: transparent !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            animation: none !important;
            max-height: none !important;
            overflow: visible !important;
          }

          .resume-scroll-container {
            overflow: visible !important;
            padding: 0 !important;
          }

          .ats-paper {
            padding: 0 !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            width: 100% !important;
            color: #000000 !important;
          }

          .paper-name {
            font-size: 22pt !important;
            color: #000000 !important;
          }

          .paper-subtitle {
            font-size: 11pt !important;
            color: #1d4ed8 !important;
          }

          .paper-contact-line {
            font-size: 9.5pt !important;
          }

          .section-head {
            font-size: 10pt !important;
            border-bottom: 1px solid #94a3b8 !important;
            margin-bottom: 5px !important;
          }

          .summary-text, .sk-cat-name, .sk-cat-items, .edu-block p, .exp-bullets li {
            font-size: 9.8pt !important;
            line-height: 1.4 !important;
          }

          .exp-title-text, .exp-company-text {
            font-size: 10.5pt !important;
          }

          .exp-right-meta {
            font-size: 9.5pt !important;
          }
        }
      `}</style>
    </div>
  );
};
