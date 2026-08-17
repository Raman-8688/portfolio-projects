import React, { useState } from 'react';
import { TiltCard } from './TiltCard';
import { sounds } from '../utils/audio';
import { Layers, Code, CheckCircle, ArrowRight, ShieldCheck, Database, Server, Terminal } from 'lucide-react';

export const ArchitectureShowcase = () => {
  const [selectedNode, setSelectedNode] = useState(0);

  const nodes = [
    {
      id: 'angular-ui',
      title: 'Angular 19 Frontend',
      role: 'Client App & Dynamic UI',
      icon: 'fab fa-angular',
      color: '#dd0031',
      details: 'Built with Angular 19 Standalone Components, Signal State Management, Dynamic Multilanguage Pipes, and Reactive Forms. Intercepts HTTP requests to inject JWT Auth Headers and Tenant Context headers.'
    },
    {
      id: 'api-gateway',
      title: 'Spring Cloud API Gateway',
      role: 'Routing & Security',
      icon: 'fas fa-network-wired',
      color: '#8b5cf6',
      details: 'Centralized edge gateway performing CORS configuration, Global Exception Handling, JWT token validation, rate limiting, and dynamic load-balanced request forwarding to microservice instances.'
    },
    {
      id: 'eureka-discovery',
      title: 'Netflix Eureka Server',
      role: 'Service Discovery Mesh',
      icon: 'fas fa-satellite-dish',
      color: '#10b981',
      details: 'High-availability service registry where Auth, Asset Register, Inventory, Billing, and Report microservices dynamically register IP ports on boot for seamless service-to-service communication.'
    },
    {
      id: 'microservices',
      title: 'Spring Boot 3 Microservices',
      role: 'Core Business Logic Mesh',
      icon: 'fas fa-cubes',
      color: '#3b82f6',
      details: 'Decoupled Spring Boot microservices incorporating Spring Data JPA, Spring Security RBAC, shared DTO common libraries, REST API controllers, and resilient fallback patterns.'
    },
    {
      id: 'multi-db',
      title: 'PostgreSQL & MSSQL Databases',
      role: 'Persistence & Multitenancy',
      icon: 'fas fa-database',
      color: '#f59e0b',
      details: 'PostgreSQL dynamic Schema-per-Tenant isolation for Winfocus Pharma SaaS, alongside MSSQL enterprise databases equipped with Stored Procedures, Non-Clustered Indexes, and Synonyms for Hyderabad Metro AMS.'
    },
    {
      id: 'devops-k8s',
      title: 'Docker & Kubernetes (K8s)',
      role: 'Container Pipeline',
      icon: 'fab fa-docker',
      color: '#00bcd4',
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
          <h2 className="section-title">Enterprise <span className="accent-text">Microservices Topology</span></h2>
          <p className="section-sub">Production architecture flow — click any node to explore implementation specifications.</p>
          <div className="title-line"></div>
        </div>

        {/* SVG Flow Diagram Wrapper */}
        <div className="arch-diagram-wrapper glass-card">
          <svg className="arch-svg" viewBox="0 0 1060 220" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dd0031" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Connection Lines */}
            <line x1="160" y1="110" x2="220" y2="110" stroke="url(#lineGrad)" strokeWidth="2.5" strokeDasharray="6 4" />
            <line x1="370" y1="110" x2="430" y2="110" stroke="url(#lineGrad)" strokeWidth="2.5" strokeDasharray="6 4" />
            <line x1="580" y1="110" x2="640" y2="110" stroke="url(#lineGrad)" strokeWidth="2.5" strokeDasharray="6 4" />
            <line x1="790" y1="110" x2="850" y2="110" stroke="url(#lineGrad)" strokeWidth="2.5" strokeDasharray="6 4" />

            {/* Animated Glowing Packet */}
            <circle r="5" fill="#38bdf8">
              <animateMotion path="M 160,110 L 850,110" dur="4s" repeatCount="indefinite" />
            </circle>

            {/* Nodes Grid inside SVG */}
            {nodes.slice(0, 5).map((node, idx) => {
              const xPos = 20 + idx * 210;
              const isSelected = selectedNode === idx;

              return (
                <g 
                  key={node.id} 
                  className="svg-node-group"
                  onClick={() => {
                    sounds.playClick();
                    setSelectedNode(idx);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <rect
                    x={xPos}
                    y="45"
                    width="140"
                    height="130"
                    rx="18"
                    fill={isSelected ? `${node.color}25` : 'var(--card-bg)'}
                    stroke={isSelected ? node.color : 'var(--border-color)'}
                    strokeWidth={isSelected ? '2.5' : '1'}
                    className="svg-node-rect"
                  />
                  <circle
                    cx={xPos + 70}
                    cy="85"
                    r="22"
                    fill={`${node.color}20`}
                    stroke={node.color}
                    strokeWidth="1.5"
                  />
                  <text
                    x={xPos + 70}
                    y={130}
                    textAnchor="middle"
                    fill="var(--text-primary)"
                    fontSize="12"
                    fontWeight="700"
                    fontFamily="var(--font-display)"
                  >
                    {node.title.split(' ')[0]}
                  </text>
                  <text
                    x={xPos + 70}
                    y={148}
                    textAnchor="middle"
                    fill="var(--text-secondary)"
                    fontSize="10"
                    fontWeight="500"
                  >
                    {node.role.split('&')[0]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Node Inspector Panel */}
        <TiltCard className="node-inspector-panel glass-card">
          <div className="inspector-header">
            <div className="inspector-icon" style={{ color: activeNode.color, background: `${activeNode.color}20` }}>
              <i className={activeNode.icon}></i>
            </div>
            <div>
              <span className="inspector-badge" style={{ color: activeNode.color }}>Node Component Details</span>
              <h3>{activeNode.title}</h3>
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
              <span>{activeNode.role}</span>
            </div>
          </div>
        </TiltCard>
      </div>

      <style>{`
        .arch-diagram-wrapper {
          padding: 20px;
          margin-bottom: 28px;
          overflow-x: auto;
        }

        .arch-svg {
          width: 100%;
          min-width: 900px;
          height: auto;
        }

        .svg-node-rect {
          transition: all 0.3s ease;
        }

        .svg-node-group:hover .svg-node-rect {
          filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.4));
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
          font-size: 24px;
        }

        .inspector-badge {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .inspector-header h3 {
          font-family: var(--font-display);
          font-size: 22px;
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
