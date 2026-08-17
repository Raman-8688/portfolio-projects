import React, { useState, useEffect } from 'react';
import { TiltCard } from './TiltCard';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import profileImg from '../assets/navi_blue.png';
import { 
  Terminal, 
  BookOpenCheck, 
  FolderGit2, 
  FileText, 
  Github, 
  Linkedin, 
  ChevronDown,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const Hero = ({ onNavigate, onOpenMncModal, onOpenTerminal, onOpenResumeModal }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = portfolioData.personal.titles;

  useEffect(() => {
    const fullText = titles[titleIndex];
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === fullText) {
      speed = 2200; // Pause at end
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      speed = 400;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && currentText !== fullText) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      } else if (isDeleting && currentText !== '') {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else if (!isDeleting && currentText === fullText) {
        setIsDeleting(true);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex, titles]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-glow orb-1"></div>
      <div className="hero-glow orb-2"></div>

      <div className="section-container hero-container">
        {/* Left Column - Intro & Actions */}
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} className="icon-sparkle" />
            <span>Available for Enterprise MNC Opportunities</span>
          </div>

          <h1 className="hero-name">
            Hi, I'm <br />
            <span className="gradient-text">{portfolioData.personal.name}</span>
          </h1>

          <div className="typewriter-box">
            <span className="tw-text">{currentText}</span>
            <span className="tw-cursor">|</span>
          </div>

          <p 
            className="hero-sub" 
            dangerouslySetInnerHTML={{ __html: portfolioData.personal.heroSub }} 
          />

          {/* MNC Action Buttons */}
          <div className="hero-actions">
            <button 
              className="btn-primary" 
              onClick={() => {
                sounds.playClick();
                onNavigate('projects');
              }}
            >
              <FolderGit2 size={18} />
              <span>Explore Live Projects</span>
              <ArrowRight size={16} />
            </button>

            <button 
              className="btn-secondary btn-highlight" 
              onClick={() => {
                sounds.playClick();
                onOpenMncModal();
              }}
            >
              <BookOpenCheck size={18} className="icon-purple" />
              <span>MNC Interview Q&A</span>
            </button>

            <button 
              className="btn-secondary" 
              onClick={() => {
                sounds.playClick();
                onOpenTerminal();
              }}
            >
              <Terminal size={18} />
              <span>DevOps Terminal</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="social-links-bar">
            <a 
              href={portfolioData.personal.github} 
              target="_blank" 
              rel="noreferrer"
              className="social-icon-btn"
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a 
              href={portfolioData.personal.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="social-icon-btn"
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <button 
              className="social-icon-btn"
              onClick={() => {
                sounds.playClick();
                onOpenResumeModal();
              }}
              title="View ATS Resume"
            >
              <FileText size={18} />
            </button>
            <span className="social-line"></span>
            <span className="location-tag">📍 {portfolioData.personal.location}</span>
          </div>
        </div>

        {/* Right Column - 3D Tilt Profile Showcase */}
        <div className="hero-visual">
          <TiltCard className="profile-tilt-card">
            <div className="profile-card-inner">
              <div className="profile-image-wrap">
                <img 
                  src={profileImg} 
                  alt={portfolioData.personal.name}
                  className="profile-img" 
                />
                <div className="profile-overlay-gradient"></div>
              </div>

              <div className="profile-card-info">
                <div className="profile-role-badge">
                  <ShieldCheck size={16} />
                  <span>1 Year Production Experience</span>
                </div>
                <h3>{portfolioData.personal.name}</h3>
                <p>Full Stack Engineer @ Winfocus Solutions</p>
                <div className="tech-pills">
                  <span>Spring Boot 3</span>
                  <span>Angular 19</span>
                  <span>PostgreSQL</span>
                  <span>Docker</span>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>

      {/* Scroll Hint */}
      <div 
        className="scroll-hint-btn" 
        onClick={() => {
          sounds.playClick();
          onNavigate('about');
        }}
      >
        <ChevronDown size={22} className="bounce" />
        <span>Scroll to Explore</span>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          padding-top: 130px;
          padding-bottom: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          pointer-events: none;
          z-index: 0;
        }
        .orb-1 {
          width: 450px;
          height: 450px;
          top: 10%;
          left: -5%;
          background: rgba(59, 130, 246, 0.18);
        }
        .orb-2 {
          width: 400px;
          height: 400px;
          bottom: 10%;
          right: -5%;
          background: rgba(139, 92, 246, 0.15);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 30px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.25);
          color: var(--theme-color);
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .icon-sparkle {
          color: #ec4899;
          animation: spin 6s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hero-name {
          font-family: var(--font-display);
          font-size: 52px;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 16px;
        }

        .typewriter-box {
          font-family: var(--font-mono);
          font-size: 20px;
          font-weight: 700;
          color: var(--theme-color);
          margin-bottom: 20px;
          min-height: 32px;
        }

        .tw-cursor {
          animation: blink 0.8s infinite;
          margin-left: 4px;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-sub {
          font-size: 16px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 36px;
        }

        .btn-highlight {
          border-color: rgba(139, 92, 246, 0.4);
          color: #a78bfa;
        }

        .icon-purple {
          color: #a78bfa;
        }

        .social-links-bar {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .social-icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, color 0.2s, border-color 0.2s;
        }

        .social-icon-btn:hover {
          transform: translateY(-3px);
          color: var(--theme-color);
          border-color: var(--theme-color);
        }

        .social-line {
          width: 30px;
          height: 1px;
          background: var(--border-color);
        }

        .location-tag {
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .profile-card-inner {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .profile-image-wrap {
          position: relative;
          height: 320px;
          overflow: hidden;
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.5s ease;
        }

        .profile-card-inner:hover .profile-img {
          transform: scale(1.05);
        }

        .profile-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, var(--card-bg), transparent 60%);
        }

        .profile-card-info {
          padding: 24px;
        }

        .profile-role-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          color: #10b981;
          background: rgba(16, 185, 129, 0.12);
          padding: 4px 12px;
          border-radius: 12px;
          margin-bottom: 12px;
        }

        .profile-card-info h3 {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .profile-card-info p {
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tech-pills span {
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 8px;
          background: color-mix(in srgb, var(--theme-color) 12%, transparent);
          color: var(--theme-color);
        }

        .scroll-hint-btn {
          margin: 40px auto 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          color: var(--text-secondary);
          font-size: 12px;
          font-weight: 600;
          transition: color 0.2s;
        }

        .scroll-hint-btn:hover {
          color: var(--theme-color);
        }

        .bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
          }
          .hero-name {
            font-size: 40px;
          }
        }
      `}</style>
    </section>
  );
};
