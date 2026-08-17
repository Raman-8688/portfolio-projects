import React, { useState, useEffect } from 'react';
import { sounds } from '../utils/audio';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const percent = Math.min(100, Math.max(0, Math.round((currentScroll / totalScroll) * 100)));
      setScrollPercent(percent);
      setIsVisible(currentScroll > 250);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  const strokeDashoffset = 125.6 - (125.6 * scrollPercent) / 100;

  return (
    <button className="scroll-top-btn" onClick={scrollToTop} title={`Back to top (${scrollPercent}%)`}>
      <svg className="progress-ring" width="48" height="48">
        <circle
          className="progress-ring-bg"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="3"
          fill="transparent"
          r="20"
          cx="24"
          cy="24"
        />
        <circle
          className="progress-ring-circle"
          stroke="var(--theme-color)"
          strokeWidth="3"
          strokeDasharray="125.6"
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          r="20"
          cx="24"
          cy="24"
        />
      </svg>
      <ChevronUp size={18} className="scroll-top-icon" />

      <style>{`
        .scroll-top-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          z-index: 900;
          background: color-mix(in srgb, var(--card-bg) 85%, transparent);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
          transition: transform 0.2s, border-color 0.2s;
        }

        .scroll-top-btn:hover {
          transform: translateY(-4px);
          border-color: var(--theme-color);
          color: var(--theme-color);
        }

        .progress-ring {
          position: absolute;
          transform: rotate(-90deg);
        }

        .progress-ring-circle {
          transition: stroke-dashoffset 0.15s ease-out;
        }

        .scroll-top-icon {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </button>
  );
};
