import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import { BookOpenCheck, X, CheckCircle, ShieldCheck, ChevronRight, Search } from 'lucide-react';

export const MncPrepModal = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const categories = ['All', ...new Set(portfolioData.mncPrepQnA.map((q) => q.category))];

  const filteredQnA = portfolioData.mncPrepQnA.filter((q) => {
    const matchesCat = activeCategory === 'All' || q.category === activeCategory;
    const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          q.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content mnc-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="mnc-modal-header">
          <div className="mnc-icon-badge">
            <BookOpenCheck size={24} />
          </div>
          <div>
            <h2>MNC Technical Interview Cheat Sheet</h2>
            <p>System Architecture Decisions, Multitenancy Routing, MSSQL Tuning & Microservices Resilience</p>
          </div>
        </div>

        {/* Search & Categories Bar */}
        <div className="mnc-filter-bar">
          <div className="mnc-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search interview Q&A..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="mnc-cat-pills">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`cat-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  sounds.playClick();
                  setActiveCategory(cat);
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Q&A List */}
        <div className="mnc-qna-list">
          {filteredQnA.length === 0 ? (
            <div className="empty-search">No interview questions match your search.</div>
          ) : (
            filteredQnA.map((item) => (
              <div key={item.id} className="qna-card">
                <div className="qna-cat-badge">{item.category}</div>
                <h3 className="qna-question">
                  <ChevronRight size={18} className="q-icon" />
                  {item.question}
                </h3>
                <div 
                  className="qna-answer" 
                  dangerouslySetInnerHTML={{ __html: item.answer }} 
                />
              </div>
            ))
          )}
        </div>
      </div>

      <style>{`
        .mnc-modal-box {
          max-width: 920px;
          padding: 40px;
        }

        .mnc-modal-header {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 28px;
        }

        .mnc-icon-badge {
          width: 56px;
          height: 56px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2));
          border: 1px solid rgba(139, 92, 246, 0.4);
          color: #a78bfa;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mnc-modal-header h2 {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 800;
        }

        .mnc-modal-header p {
          font-size: 13.5px;
          color: var(--text-secondary);
        }

        .mnc-filter-bar {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 28px;
        }

        .mnc-search-box {
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-secondary);
        }

        .mnc-search-box input {
          width: 100%;
          padding: 12px 16px 12px 44px;
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 14px;
          outline: none;
        }

        .mnc-cat-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .cat-pill {
          font-size: 12px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 16px;
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          transition: all 0.2s;
        }

        .cat-pill.active, .cat-pill:hover {
          color: #ffffff;
          background: #8b5cf6;
          border-color: #8b5cf6;
        }

        .mnc-qna-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-height: 520px;
          overflow-y: auto;
          padding-right: 6px;
        }

        .qna-card {
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
          border-radius: 18px;
          padding: 24px;
        }

        .qna-cat-badge {
          font-size: 10.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--theme-color);
          margin-bottom: 8px;
        }

        .qna-question {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 800;
          color: var(--text-primary);
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .q-icon {
          color: #8b5cf6;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .qna-answer {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.7;
          padding-left: 26px;
        }

        .empty-search {
          text-align: center;
          padding: 40px;
          color: var(--text-secondary);
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};
