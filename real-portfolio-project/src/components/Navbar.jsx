import React, { useState, useEffect } from 'react';
import { sounds } from '../utils/audio';
import { 
  Code2, 
  Terminal, 
  BookOpenCheck, 
  FileText, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Layers, 
  FolderGit2, 
  User, 
  Briefcase, 
  Cpu, 
  Mail 
} from 'lucide-react';

export const Navbar = ({ 
  activeSection, 
  onNavigate, 
  onOpenMncModal, 
  onOpenTerminal, 
  onOpenResumeModal,
  isDark,
  onToggleTheme 
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(sounds.muted);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
      setIsScrolled(currentScroll > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMuteToggle = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'architecture', label: 'Architecture', icon: Layers },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'devops', label: 'Terminal', icon: Terminal },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Reading Progress Bar */}
      <div 
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="navbar-container">
        {/* Brand Logo */}
        <div className="navbar-brand" onClick={() => onNavigate('home')}>
          <div className="brand-icon">
            <Code2 size={20} className="icon-pulse" />
          </div>
          <span className="brand-name">Raman<span className="accent-dot">.dev</span></span>
          <span className="badge-mnc">MNC Ready</span>
        </div>

        {/* Nav Links */}
        <nav className="navbar-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => {
                  sounds.playClick();
                  onNavigate(item.id);
                }}
              >
                <Icon size={14} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Quick Action Controls */}
        <div className="navbar-actions">
          {/* MNC Cheat Sheet Button */}
          <button 
            className="action-pill btn-mnc"
            onClick={() => {
              sounds.playClick();
              onOpenMncModal();
            }}
            title="MNC Technical Interview Prep Cheat Sheet"
          >
            <BookOpenCheck size={16} />
            <span className="pill-text">MNC Q&A</span>
          </button>

          {/* ATS Resume Modal */}
          <button
            className="action-pill btn-resume"
            onClick={() => {
              sounds.playClick();
              onOpenResumeModal();
            }}
            title="View ATS Resume"
          >
            <FileText size={16} />
            <span className="pill-text">ATS Resume</span>
          </button>

          {/* Sound Mute Toggle */}
          <button
            className="icon-circle-btn"
            onClick={handleMuteToggle}
            title={isMuted ? 'Unmute Web Audio' : 'Mute Web Audio'}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          {/* Theme Toggle */}
          <button
            className="icon-circle-btn"
            onClick={() => {
              sounds.playClick();
              onToggleTheme();
            }}
            title="Toggle Light/Dark Theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: background 0.3s, backdrop-filter 0.3s, box-shadow 0.3s;
        }

        .navbar-header.scrolled {
          background: color-mix(in srgb, var(--card-bg) 85%, transparent);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .scroll-progress-bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--theme-color), #a855f7, #ec4899);
          transition: width 0.1s ease-out;
        }

        .navbar-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }

        .brand-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--theme-color), #8b5cf6);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-name {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .accent-dot {
          color: var(--theme-color);
        }

        .badge-mnc {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 12px;
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 6px;
          background: color-mix(in srgb, var(--card-bg) 60%, transparent);
          border: 1px solid var(--border-color);
          border-radius: 30px;
          padding: 4px 8px;
          backdrop-filter: blur(12px);
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-secondary);
          transition: color 0.2s, background 0.2s;
        }

        .nav-item:hover, .nav-item.active {
          color: var(--text-primary);
          background: color-mix(in srgb, var(--theme-color) 15%, transparent);
        }

        .nav-item.active {
          color: var(--theme-color);
          font-weight: 700;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .action-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn-mnc {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2));
          color: #a78bfa;
          border: 1px solid rgba(139, 92, 246, 0.4);
        }

        .btn-mnc:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
        }

        .btn-resume {
          background: color-mix(in srgb, var(--theme-color) 15%, transparent);
          color: var(--theme-color);
          border: 1px solid color-mix(in srgb, var(--theme-color) 35%, transparent);
        }

        .btn-resume:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px color-mix(in srgb, var(--theme-color) 30%, transparent);
        }

        .icon-circle-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s, border-color 0.2s;
        }

        .icon-circle-btn:hover {
          color: var(--theme-color);
          border-color: var(--theme-color);
        }

        @media (max-width: 992px) {
          .navbar-links {
            display: none;
          }
          .pill-text {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
