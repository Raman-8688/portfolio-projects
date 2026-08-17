import React, { useState } from 'react';
import { TiltCard } from './TiltCard';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    sounds.playSuccess();
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sounds.playSuccess();
    setSentSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSentSuccess(false), 5000);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">Get In <span className="accent-text">Touch</span></h2>
          <p className="section-sub">Open for Java Full Stack Developer, Microservices Engineer & MNC opportunities.</p>
          <div className="title-line"></div>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-info-col">
            <TiltCard className="contact-card glass-card">
              <h3>Contact Details</h3>
              <p className="contact-intro">Feel free to reach out directly via email, phone, or LinkedIn for technical discussions and MNC interview scheduling.</p>

              <div className="contact-items-list">
                <div className="contact-item">
                  <div className="contact-icon"><Mail size={18} /></div>
                  <div className="contact-meta">
                    <span className="meta-lbl">Email Address</span>
                    <a href={`mailto:${portfolioData.personal.email}`} className="meta-val">{portfolioData.personal.email}</a>
                  </div>
                  <button className="copy-btn" onClick={handleCopyEmail} title="Copy Email">
                    {copiedEmail ? <Check size={16} className="icon-green" /> : <Copy size={16} />}
                  </button>
                </div>

                <div className="contact-item">
                  <div className="contact-icon"><Phone size={18} /></div>
                  <div className="contact-meta">
                    <span className="meta-lbl">Phone Number</span>
                    <a href={`tel:${portfolioData.personal.phone}`} className="meta-val">{portfolioData.personal.phone}</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon"><MapPin size={18} /></div>
                  <div className="contact-meta">
                    <span className="meta-lbl">Current Location</span>
                    <span className="meta-val">{portfolioData.personal.location}</span>
                  </div>
                </div>
              </div>

              <div className="contact-socials-row">
                <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="social-pill">
                  <Github size={16} /> <span>GitHub</span>
                </a>
                <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="social-pill">
                  <Linkedin size={16} /> <span>LinkedIn</span>
                </a>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-col">
            <form onSubmit={handleSubmit} className="contact-form glass-card">
              <h3>Send a Message</h3>

              {sentSuccess && (
                <div className="form-success-banner">
                  <Check size={18} /> Thank you! Your message has been sent successfully.
                </div>
              )}

              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Technical Recruiter / Interviewer"
                />
              </div>

              <div className="form-group">
                <label>Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. recruiter@company.com"
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Full Stack Developer Position"
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Raman, we reviewed your microservices portfolio..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit-btn">
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 32px;
        }

        .contact-card, .contact-form {
          padding: 36px;
        }

        .contact-card h3, .contact-form h3 {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .contact-intro {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .contact-items-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 32px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 16px 20px;
        }

        .contact-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: color-mix(in srgb, var(--theme-color) 15%, transparent);
          color: var(--theme-color);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-meta {
          flex-grow: 1;
        }

        .meta-lbl {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          display: block;
        }

        .meta-val {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .copy-btn {
          color: var(--text-secondary);
          padding: 6px;
          transition: color 0.2s;
        }

        .copy-btn:hover {
          color: var(--theme-color);
        }

        .contact-socials-row {
          display: flex;
          gap: 12px;
        }

        .social-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          transition: border-color 0.2s, color 0.2s;
        }

        .social-pill:hover {
          border-color: var(--theme-color);
          color: var(--theme-color);
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .form-group input, .form-group textarea {
          width: 100%;
          background: color-mix(in srgb, var(--card-bg) 90%, transparent);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 12px 16px;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--theme-color);
        }

        .form-success-banner {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10b981;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 13.5px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .form-submit-btn {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
