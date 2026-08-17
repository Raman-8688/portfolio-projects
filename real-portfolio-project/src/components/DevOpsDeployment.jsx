import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audio';
import { Terminal, Play, CornerDownLeft, Sparkles } from 'lucide-react';

export const DevOpsDeployment = ({ onOpenMncModal, onOpenResumeModal }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', text: 'Raman DevOS v2.4 Terminal [Type "help" to view available commands]' },
    { type: 'sys', text: 'System status: HEALTHY (PostgreSQL Multitenant Active · Spring Cloud Gateway UP)' }
  ]);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    sounds.playClick();
    const newHistory = [...history, { type: 'user', text: `$ ${inputVal}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'out',
          text: `Available Terminal Commands:
  • help          : Show this command menu
  • skills        : List core Java, Spring Boot & Angular skills
  • architecture  : Show microservices topology summary
  • projects      : List production projects (Hyderabad Metro AMS, Winfocus Pharma)
  • experience    : Show employment summary
  • curl /health  : Test microservice health endpoint
  • docker-compose: Simulate container deployment pipeline
  • export-resume : Open ATS Resume preview modal
  • mnc-prep      : Open MNC Interview Cheat Sheet modal
  • clear         : Clear terminal console output`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'out',
          text: `Backend  : Java 17, Spring Boot 3.x, Microservices, Eureka, Gateway, Spring Security
Frontend : Angular 19, TypeScript, Signals, RxJS, Glass UI
Database : PostgreSQL (Multitenancy), MSSQL (Stored Procs, Indexes), MySQL
DevOps   : Docker, Kubernetes, Linux/Bash, SVN, Git`
        });
        break;

      case 'architecture':
        newHistory.push({
          type: 'out',
          text: `[TOPOLOGY]: Angular UI (Client) ➔ Spring Cloud Gateway (Port 8080) ➔ Eureka Registry ➔ Auth/Asset/Pharma Microservices ➔ PostgreSQL (Schema-per-Tenant) + MSSQL`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'out',
          text: `1. Hyderabad Metro AMS (Client Live) - MSSQL Stored Procs & Microservices
2. Multi-Tenant Pharma SaaS (Winfocus) - PostgreSQL Schema Routing & Dynamic Language UI
3. Multilanguage AI Converter Tool - Hugging Face AI API Batch Translation`
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'out',
          text: `• Winfocus Solutions Pvt Ltd (Jun 2025 – Present) | Full Stack Developer
• Hyderabad Metro Rail AMS Project (2024) | Full Stack Developer
• JSpiders Training Institute (Jun 2024 – Jan 2025) | Merit Scholarship Recipient`
        });
        break;

      case 'curl /health':
        newHistory.push({
          type: 'out',
          text: `HTTP/1.1 200 OK
{
  "status": "UP",
  "components": {
    "eureka": { "status": "UP" },
    "dbPostgres": { "status": "UP", "activeSchemas": 12 },
    "dbMSSQL": { "status": "UP" },
    "gateway": { "status": "UP", "routes": 8 }
  }
}`
        });
        break;

      case 'docker-compose':
        newHistory.push({
          type: 'out',
          text: `[DOCKER]: Deploying containers...
✔ Container eureka-server       Started (Port 8761)
✔ Container api-gateway         Started (Port 8080)
✔ Container auth-service        Started (Port 8081)
✔ Container asset-ams-service   Started (Port 8082)
✔ Container pharma-inventory    Started (Port 8083)
✔ Container angular-frontend    Started (Port 80)`
        });
        break;

      case 'export-resume':
        onOpenResumeModal();
        newHistory.push({ type: 'out', text: 'Opening ATS Resume Preview Modal...' });
        break;

      case 'mnc-prep':
        onOpenMncModal();
        newHistory.push({ type: 'out', text: 'Opening MNC Technical Interview Cheat Sheet Modal...' });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'err',
          text: `bash: command not found: ${cmd}. Type "help" for a list of valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <section id="devops" className="section-wrapper">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">DevOps & Interactive CLI</span>
          <h2 className="section-title">Interactive <span className="accent-text">DevOps Terminal Simulator</span></h2>
          <p className="section-sub">Type Linux & CLI commands below to inspect project systems, health checks, and pipelines.</p>
          <div className="title-line"></div>
        </div>

        {/* Terminal Window */}
        <div className="terminal-window glass-card">
          {/* Top Title Bar */}
          <div className="terminal-topbar">
            <div className="terminal-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="terminal-title">bash - raman@devos-production:~</div>
            <div className="terminal-quick-help">Type "help"</div>
          </div>

          {/* Console Body */}
          <div className="terminal-body">
            {history.map((item, idx) => (
              <div key={idx} className={`terminal-line line-${item.type}`}>
                {item.text}
              </div>
            ))}

            {/* Command Input Form */}
            <form onSubmit={handleCommand} className="terminal-form">
              <span className="prompt-symbol">raman@devos:~$</span>
              <input
                type="text"
                className="terminal-input"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type a command e.g. help, skills, curl /health..."
                autoComplete="off"
              />
              <button type="submit" className="terminal-submit-btn" title="Run command">
                <CornerDownLeft size={16} />
              </button>
            </form>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>

      <style>{`
        .terminal-window {
          max-width: 960px;
          margin: 0 auto;
          padding: 0;
          overflow: hidden;
          background: #090d16;
          border: 1px solid rgba(59, 130, 246, 0.3);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .terminal-topbar {
          background: #0f172a;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
        }

        .terminal-dots {
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .terminal-title {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text-secondary);
        }

        .terminal-quick-help {
          font-size: 11px;
          color: var(--theme-color);
          font-weight: 700;
        }

        .terminal-body {
          padding: 24px;
          font-family: var(--font-mono);
          font-size: 13.5px;
          line-height: 1.6;
          max-height: 420px;
          overflow-y: auto;
        }

        .terminal-line {
          margin-bottom: 8px;
          white-space: pre-wrap;
        }

        .line-sys { color: #38bdf8; }
        .line-user { color: #f1f5f9; font-weight: 700; }
        .line-out { color: #a78bfa; }
        .line-err { color: #f87171; }

        .terminal-form {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 16px;
        }

        .prompt-symbol {
          color: #10b981;
          font-weight: 700;
        }

        .terminal-input {
          flex-grow: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          font-family: var(--font-mono);
          font-size: 14px;
        }

        .terminal-submit-btn {
          color: var(--text-secondary);
          transition: color 0.2s;
        }

        .terminal-submit-btn:hover {
          color: var(--theme-color);
        }
      `}</style>
    </section>
  );
};
