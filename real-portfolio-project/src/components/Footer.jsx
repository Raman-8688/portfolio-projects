import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import { Code2, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="footer-section">
      <div className="section-container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-icon">
              <Code2 size={20} />
            </div>
            <h3>{portfolioData.personal.name}</h3>
            <p>Java Full Stack Developer | Spring Boot & Microservices Specialist</p>
          </div>

          <div className="footer-nav">
            <button onClick={() => { sounds.playClick(); onNavigate('home'); }}>Home</button>
            <button onClick={() => { sounds.playClick(); onNavigate('about'); }}>About</button>
            <button onClick={() => { sounds.playClick(); onNavigate('skills'); }}>Skills</button>
            <button onClick={() => { sounds.playClick(); onNavigate('experience'); }}>Experience</button>
            <button onClick={() => { sounds.playClick(); onNavigate('architecture'); }}>Architecture</button>
            <button onClick={() => { sounds.playClick(); onNavigate('projects'); }}>Projects</button>
            <button onClick={() => { sounds.playClick(); onNavigate('contact'); }}>Contact</button>
          </div>

          <div className="footer-socials">
            <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" title="GitHub"><Github size={18} /></a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" title="LinkedIn"><Linkedin size={18} /></a>
            <a href={`mailto:${portfolioData.personal.email}`} title="Email"><Mail size={18} /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All Rights Reserved.</p>
          <p className="footer-mnc-tag">Engineered with <Heart size={14} className="icon-red" /> for MNC Interview Preparation.</p>
        </div>
      </div>

      <style>{`
        .footer-section {
          padding: 60px 24px 30px;
          border-top: 1px solid var(--border-color);
          position: relative;
          z-index: 2;
        }

        .footer-container {
          padding: 40px;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          padding-bottom: 32px;
          border-bottom: 1px solid var(--border-color);
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .footer-brand h3 {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 800;
        }

        .footer-brand p {
          font-size: 13px;
          color: var(--text-secondary);
        }

        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-nav button {
          font-size: 13.5px;
          font-weight: 600;
          color: var(--text-secondary);
          transition: color 0.2s;
        }

        .footer-nav button:hover {
          color: var(--theme-color);
        }

        .footer-socials {
          display: flex;
          gap: 12px;
        }

        .footer-socials a {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: color 0.2s, border-color 0.2s;
        }

        .footer-socials a:hover {
          color: var(--theme-color);
          border-color: var(--theme-color);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          font-size: 13px;
          color: var(--text-secondary);
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-mnc-tag {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .icon-red { color: #ef4444; }

        @media (max-width: 768px) {
          .footer-top, .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
