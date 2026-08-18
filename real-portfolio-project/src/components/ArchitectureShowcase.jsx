import React, { useState } from 'react';
import { TiltCard } from './TiltCard';
import { sounds } from '../utils/audio';
import { Layers, ShieldCheck, Cpu, Database, Server, Terminal, Workflow, ArrowRight } from 'lucide-react';

export const ArchitectureShowcase = () => {
  const [selectedNode, setSelectedNode] = useState(0);

  const nodes = [
    {
      id: 'angular-ui',
      title: 'Angular UI',
      sub: 'Client App',
      category: 'FRONTEND',
      color: '#dd0031',
      details: 'Built with Angular 19 Standalone Components, Signal State Management, Dynamic Multilanguage Pipes, and Reactive Forms. Intercepts HTTP requests to inject JWT Auth Headers and Tenant Context headers.'
    },
    {
      id: 'api-gateway',
      title: 'API Gateway',
      sub: 'Spring Cloud Gateway',
      category: 'ROUTING',
      color: '#8b5cf6',
      details: 'Centralized edge gateway performing CORS configuration, Global Exception Handling, JWT token validation, rate limiting, and dynamic load-balanced request forwarding to microservice instances.'
    },
    {
      id: 'microservices',
      title: 'Microservices',
      sub: 'Spring Boot + Eureka',
      category: 'BACKEND',
      color: '#10b981',
      details: 'Decoupled Spring Boot microservices (Auth, Employee, Department, Notification, Order, Inventory) incorporating Spring Data JPA, Spring Security RBAC, NVIDIA AI integration, and Eureka discovery.'
    },
    {
      id: 'postgres-db',
      title: 'PostgreSQL',
      sub: 'Multi-tenant Schema',
      category: 'DATA LAYER',
      color: '#3b82f6',
      details: 'PostgreSQL dynamic Schema-per-Tenant isolation for Winfocus Pharma SaaS, alongside MSSQL enterprise databases equipped with Stored Procedures, Non-Clustered Indexes, and Synonyms for Hyderabad Metro AMS.'
    },
    {
      id: 'docker-k8s',
      title: 'Docker / K8s',
      sub: 'Orchestration',
      category: 'CONTAINERS',
      color: '#0284c7',
      details: 'Containerized Docker microservice images orchestrated across Kubernetes pods with rolling updates, environment secret injection, and automated health checks.'
    }
  ];

  const activeNode = nodes[selectedNode];

  return (
    <section id="architecture" className="section-wrapper">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">System Design</span>
          <h2 className="section-title">Enterprise <span className="accent-text">Architecture</span></h2>
          <p className="section-sub">Production microservice topology — click any node to explore implementation details</p>
          <div className="title-line"></div>
        </div>

        {/* SVG Flow Diagram Wrapper matching Screenshot */}
        <div className="arch-diagram-wrapper glass-card">
          <svg className="arch-svg" viewBox="0 0 1020 220" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="flowLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dd0031" stopOpacity="0.8" />
                <stop offset="35%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Top Feedback Loop Arc: CI/CD Trigger */}
            <path
              d="M 880 50 Q 880 18 510 18 Q 300 18 290 50"
              fill="none"
              stroke="rgba(240, 80, 50, 0.4)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <text x="510" y="14" fill="rgba(240,80,50,0.7)" fontSize="9.5" fontFamily="monospace" text-anchor="middle">
              CI/CD deploy trigger
            </text>

            {/* Connection Lines */}
            <line x1="165" y1="110" x2="215" y2="110" stroke="url(#flowLineGrad)" strokeWidth="2" strokeDasharray="5 3" />
            <text x="190" y="104" fill="rgba(167,139,250,0.7)" fontSize="8.5" fontFamily="monospace" text-anchor="middle">HTTP</text>

            <line x1="365" y1="110" x2="415" y2="110" stroke="url(#flowLineGrad)" strokeWidth="2" strokeDasharray="5 3" />
            <text x="390" y="104" fill="rgba(167,139,250,0.7)" fontSize="8.5" fontFamily="monospace" text-anchor="middle">JWT</text>

            <line x1="565" y1="110" x2="615" y2="110" stroke="url(#flowLineGrad)" strokeWidth="2" strokeDasharray="5 3" />
            <line x1="765" y1="110" x2="815" y2="110" stroke="url(#flowLineGrad)" strokeWidth="2" strokeDasharray="5 3" />

            {/* Glowing Packet */}
            <circle r="4.5" fill="#38bdf8">
              <animateMotion path="M 165,110 L 815,110" dur="4s" repeatCount="indefinite" />
            </circle>

            {/* Node 0: Angular UI */}
            <g className="svg-node-group" onClick={() => { sounds.playClick(); setSelectedNode(0); }} style={{ cursor: 'pointer' }}>
              <rect x="20" y="50" width="145" height="120" rx="14" fill={selectedNode === 0 ? 'rgba(221,0,49,0.18)' : 'rgba(221,0,49,0.06)'} stroke={selectedNode === 0 ? '#dd0031' : 'rgba(221,0,49,0.4)'} strokeWidth={selectedNode === 0 ? '2' : '1'} />
              <circle cx="92.5" cy="85" r="18" fill="rgba(221,0,49,0.15)" stroke="#dd0031" strokeWidth="1" />
              <text x="92.5" y="118" textAnchor="middle" fill="#dd0031" fontSize="8" fontWeight="800" fontFamily="monospace" letterSpacing="0.8">FRONTEND</text>
              <text x="92.5" y="136" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="800" fontFamily="var(--font-display)">Angular UI</text>
              <text x="92.5" y="152" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="500">Client App</text>
            </g>

            {/* Node 1: API Gateway */}
            <g className="svg-node-group" onClick={() => { sounds.playClick(); setSelectedNode(1); }} style={{ cursor: 'pointer' }}>
              <rect x="220" y="50" width="145" height="120" rx="14" fill={selectedNode === 1 ? 'rgba(139,92,246,0.18)' : 'rgba(139,92,246,0.06)'} stroke={selectedNode === 1 ? '#8b5cf6' : 'rgba(139,92,246,0.4)'} strokeWidth={selectedNode === 1 ? '2' : '1'} />
              <circle cx="292.5" cy="85" r="18" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" strokeWidth="1" />
              <text x="292.5" y="118" textAnchor="middle" fill="#a78bfa" fontSize="8" fontWeight="800" fontFamily="monospace" letterSpacing="0.8">ROUTING</text>
              <text x="292.5" y="136" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="800" fontFamily="var(--font-display)">API Gateway</text>
              <text x="292.5" y="152" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="500">Spring Cloud Gateway</text>
            </g>

            {/* Node 2: Microservices */}
            <g className="svg-node-group" onClick={() => { sounds.playClick(); setSelectedNode(2); }} style={{ cursor: 'pointer' }}>
              <rect x="420" y="50" width="145" height="120" rx="14" fill={selectedNode === 2 ? 'rgba(16,185,129,0.18)' : 'rgba(16,185,129,0.06)'} stroke={selectedNode === 2 ? '#10b981' : 'rgba(16,185,129,0.4)'} strokeWidth={selectedNode === 2 ? '2' : '1'} />
              <circle cx="492.5" cy="85" r="18" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1" />
              <text x="492.5" y="118" textAnchor="middle" fill="#10b981" fontSize="8" fontWeight="800" fontFamily="monospace" letterSpacing="0.8">BACKEND</text>
              <text x="492.5" y="136" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="800" fontFamily="var(--font-display)">Microservices</text>
              <text x="492.5" y="152" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="500">Spring Boot + Eureka</text>
            </g>

            {/* Node 3: PostgreSQL */}
            <g className="svg-node-group" onClick={() => { sounds.playClick(); setSelectedNode(3); }} style={{ cursor: 'pointer' }}>
              <rect x="620" y="50" width="145" height="120" rx="14" fill={selectedNode === 3 ? 'rgba(59,130,246,0.18)' : 'rgba(59,130,246,0.06)'} stroke={selectedNode === 3 ? '#3b82f6' : 'rgba(59,130,246,0.4)'} strokeWidth={selectedNode === 3 ? '2' : '1'} />
              <circle cx="692.5" cy="85" r="18" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth="1" />
              <text x="692.5" y="118" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="800" fontFamily="monospace" letterSpacing="0.8">DATA LAYER</text>
              <text x="692.5" y="136" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="800" fontFamily="var(--font-display)">PostgreSQL</text>
              <text x="692.5" y="152" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="500">Multi-tenant Schema</text>
            </g>

            {/* Node 4: Docker / K8s */}
            <g className="svg-node-group" onClick={() => { sounds.playClick(); setSelectedNode(4); }} style={{ cursor: 'pointer' }}>
              <rect x="820" y="50" width="145" height="120" rx="14" fill={selectedNode === 4 ? 'rgba(2,132,199,0.18)' : 'rgba(2,132,199,0.06)'} stroke={selectedNode === 4 ? '#0284c7' : 'rgba(2,132,199,0.4)'} strokeWidth={selectedNode === 4 ? '2' : '1'} />
              <circle cx="892.5" cy="85" r="18" fill="rgba(2,132,199,0.15)" stroke="#0284c7" strokeWidth="1" />
              <text x="892.5" y="118" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="800" fontFamily="monospace" letterSpacing="0.8">CONTAINERS</text>
              <text x="892.5" y="136" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="800" fontFamily="var(--font-display)">Docker / K8s</text>
              <text x="892.5" y="152" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="500">Orchestration</text>
            </g>
          </svg>

          <div className="diagram-click-hint">
            <span>👆 Click any node to explore its implementation details</span>
          </div>
        </div>

        {/* Selected Node Inspector Panel */}
        <TiltCard className="node-inspector-panel glass-card">
          <div className="inspector-header">
            <div className="inspector-icon" style={{ color: activeNode.color, background: `${activeNode.color}20` }}>
              <Workflow size={24} />
            </div>
            <div>
              <span className="inspector-badge" style={{ color: activeNode.color }}>{activeNode.category} COMPONENT</span>
              <h3>{activeNode.title} — {activeNode.sub}</h3>
            </div>
          </div>

          <p className="inspector-desc">{activeNode.details}</p>

          <div className="inspector-meta-row">
            <div className="meta-pill">
              <ShieldCheck size={14} className="icon-green" />
              <span>Production Validated</span>
            </div>
            <div className="meta-pill">
              <Layers size={14} className="icon-purple" />
              <span>{activeNode.category}</span>
            </div>
          </div>
        </TiltCard>
      </div>

      <style>{`
        .arch-diagram-wrapper {
          padding: 24px;
          margin-bottom: 28px;
          overflow-x: auto;
        }

        .arch-svg {
          width: 100%;
          min-width: 900px;
          height: auto;
        }

        .diagram-click-hint {
          text-align: center;
          margin-top: 12px;
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .node-inspector-panel {
          padding: 32px;
        }

        .inspector-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .inspector-icon {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .inspector-badge {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .inspector-header h3 {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 800;
        }

        .inspector-desc {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .inspector-meta-row {
          display: flex;
          gap: 16px;
        }

        .meta-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 12px;
          background: color-mix(in srgb, var(--card-bg) 80%, transparent);
          border: 1px solid var(--border-color);
        }

        .icon-green { color: #10b981; }
        .icon-purple { color: #8b5cf6; }
      `}</style>
    </section>
  );
};
