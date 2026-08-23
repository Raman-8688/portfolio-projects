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
  ShieldCheck,
  MapPin,
  Briefcase
} from 'lucide-react';

export const Hero = ({ onNavigate, onOpenMncModal, onOpenTerminal, onOpenResumeModal }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'PostgreSQL Multitenancy & AI Developer',
    'Java Full Stack Developer',
    'Microservices Architecture Specialist',
    'Angular 19 + Spring Boot 3 Engineer'
  ];

  useEffect(() => {
    const fullText = titles[titleIndex];
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === fullText) {
      speed = 2200;
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
      {/* Large Encapsulated Main Glass Card Container matching Screenshot */}
      <div className="hero-main-card glass-card">
        <div className="hero-grid-inner">
          {/* Left Column - Main Intro & Actions */}
          <div className="hero-left-content">
            {/* Green Pill Badge */}
            <div className="pill-badge-green">
              <Sparkles size={13} className="icon-green-sparkle" />
              <span>Available for Enterprise MNC Opportunities</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-name-heading">
              Hi, I'm <br />
              <span className="gradient-text-blue-pink">{portfolioData.personal.name}</span>
            </h1>

            {/* Typewriter Title */}
            <div className="typewriter-container">
              <span className="tw-text-blue">{currentText}</span>
              <span className="tw-cursor-blink">|</span>
            </div>

            {/* Paragraph Description matching Screenshot */}
            <p className="hero-description-text">
              Full Stack Engineer specializing in <strong>Microservices Architecture</strong>, <strong>Spring Boot 3.x</strong>, <strong>Angular 19</strong>, <strong>PostgreSQL Multitenancy</strong>, and <strong>AI Integration</strong> — delivering real production software for enterprise clients.
            </p>

            {/* Button Actions Grid matching Screenshot */}
            <div className="hero-button-actions">
              <div className="btn-row-top">
                <button 
                  className="btn-purple-gradient" 
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
                  className="btn-secondary btn-dark-glass" 
                  onClick={() => {
                    sounds.playClick();
                    onOpenMncModal();
                  }}
                >
                  <BookOpenCheck size={18} className="icon-purple-light" />
                  <span>MNC Interview Q&A</span>
                </button>
              </div>

              <div className="btn-row-bottom">
                <button 
                  className="btn-secondary btn-dark-glass" 
                  onClick={() => {
                    sounds.playClick();
                    onOpenTerminal();
                  }}
                >
                  <Terminal size={18} />
                  <span>DevOps Terminal</span>
                </button>
              </div>
            </div>

            {/* Social Icons & Location Footer Bar matching Screenshot */}
            <div className="hero-footer-socials">
              <a 
                href={portfolioData.personal.github} 
                target="_blank" 
                rel="noreferrer"
                className="social-round-btn"
                title="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a 
                href={portfolioData.personal.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="social-round-btn"
                title="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <button 
                className="social-round-btn"
                onClick={() => {
                  sounds.playClick();
                  onOpenResumeModal();
                }}
                title="View ATS Resume"
              >
                <FileText size={16} />
              </button>
              <span className="footer-pipe-line"></span>
              <span className="location-text">📍 Kurnool, Andhra Pradesh, India</span>
            </div>
          </div>

          {/* Right Column - Profile Card matching Screenshot */}
          <div className="hero-right-visual">
            <TiltCard className="profile-inner-card glass-card">
              <div className="profile-img-box">
                <img 
                  src={profileImg} 
                  alt={portfolioData.personal.name}
                  className="profile-avatar-img" 
                />
                <div className="profile-img-shade"></div>
              </div>

              <div className="profile-info-box">
                <div className="badge-experience-green">
                  <ShieldCheck size={14} />
                  <span>1 Year Production Experience</span>
                </div>

                <h3 className="profile-user-name">{portfolioData.personal.name}</h3>
                <p className="profile-user-role">Full Stack Engineer @ WinFocus Solutions</p>

                <div className="tech-badge-pills">
                  <span className="pill-item">Spring Boot 3</span>
                  <span className="pill-item">Angular 19</span>
                  <span className="pill-item">PostgreSQL</span>
                  <span className="pill-item">Docker</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>

      {/* Bottom Center Scroll Hint matching Screenshot */}
      <div 
        className="scroll-down-indicator" 
        onClick={() => {
          sounds.playClick();
          onNavigate('about');
        }}
      >
        <ChevronDown size={20} className="bounce-arrow" />
        <span>Scroll to Explore</span>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          padding-top: 110px;
          padding-bottom: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2; /* Foreground section */
        }

        /* Large Encapsulated Main Glass Card Container (Z-Index 5: Above Orbs) */
        .hero-main-card {
          max-width: 1200px;
          width: 100%;
          margin: 0 24px;
          padding: 48px;
          position: relative;
          z-index: 5;
          background: rgba(10, 15, 29, 0.88);
          backdrop-filter: blur(36px);
          -webkit-backdrop-filter: blur(36px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 28px;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .hero-grid-inner {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 48px;
          align-items: center;
        }

        .pill-badge-green {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 20px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10b981;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .icon-green-sparkle {
          color: #10b981;
        }

        .hero-name-heading {
          font-family: var(--font-display);
          font-size: 54px;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 14px;
          color: #ffffff;
        }

        .typewriter-container {
          font-family: var(--font-mono);
          font-size: 20px;
          font-weight: 700;
          color: #38bdf8;
          margin-bottom: 20px;
          min-height: 32px;
        }

        .tw-cursor-blink {
          animation: blinkCursor 0.8s infinite;
          margin-left: 4px;
          color: #ec4899;
        }

        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-description-text {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 620px;
        }

        .hero-button-actions {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 36px;
        }

        .btn-row-top {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .btn-row-bottom {
          display: flex;
        }

        .btn-dark-glass {
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
        }

        .btn-dark-glass:hover {
          border-color: #38bdf8;
          color: #38bdf8;
        }

        .icon-purple-light {
          color: #c084fc;
        }

        .hero-footer-socials {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .social-round-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .social-round-btn:hover {
          transform: translateY(-3px);
          color: #38bdf8;
          border-color: #38bdf8;
          box-shadow: 0 4px 15px rgba(56, 189, 248, 0.3);
        }

        .footer-pipe-line {
          width: 24px;
          height: 1px;
          background: rgba(255, 255, 255, 0.15);
        }

        .location-text {
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        /* Right Profile Card */
        .profile-inner-card {
          padding: 0;
          overflow: hidden;
          background: rgba(15, 23, 42, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.4);
        }

        .profile-img-box {
          position: relative;
          height: 320px;
          overflow: hidden;
          background: #0f172a;
        }

        .profile-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.5s ease;
        }

        .profile-inner-card:hover .profile-avatar-img {
          transform: scale(1.05);
        }

        .profile-img-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15, 23, 42, 1), transparent 60%);
        }

        .profile-info-box {
          padding: 24px;
        }

        .badge-experience-green {
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

        .profile-user-name {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .profile-user-role {
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .tech-badge-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .pill-item {
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 8px;
          background: rgba(56, 189, 248, 0.12);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.2);
        }

        .scroll-down-indicator {
          margin-top: 36px;
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

        .scroll-down-indicator:hover {
          color: #38bdf8;
        }

        .bounce-arrow {
          animation: bounceArrow 2s infinite;
        }

        @keyframes bounceArrow {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }

        @media (max-width: 992px) {
          .hero-main-card {
            padding: 28px;
          }
          .hero-grid-inner {
            grid-template-columns: 1fr;
          }
          .hero-name-heading {
            font-size: 40px;
          }
        }
      `}</style>
    </section>
  );
};
