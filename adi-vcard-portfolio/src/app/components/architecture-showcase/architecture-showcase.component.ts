import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/Portfolio.service';
import { DevopsDeploymentComponent } from '../devops-deployment/devops-deployment.component';

@Component({
  selector: 'app-architecture-showcase',
  standalone: true,
  imports: [CommonModule, DevopsDeploymentComponent],
  templateUrl: './architecture-showcase.component.html',
  styleUrls: ['./architecture-showcase.component.css']
})
export class ArchitectureShowcaseComponent {
  selectedNodeIndex: number | null = 0;

  architectureNodes = [
    {
      title: 'Angular SPA',
      type: 'FRONTEND',
      color: '#00bcd4',
      purpose: 'Single-page application delivering responsive user interface with dynamic state management, reactive forms, and route guards.',
      techStack: ['Angular 19', 'TypeScript', 'RxJS', 'Signals', 'CSS Grid/Flexbox'],
      responsibilities: [
        '<strong>Client-side rendering</strong> — Module-level lazy loading & reactive signals',
        '<strong>State management</strong> — Signals & RxJS observables for data flow',
        '<strong>Multilanguage UI</strong> — DB-driven dynamic label rendering'
      ]
    },
    {
      title: 'API Gateway',
      type: 'ROUTING & AUTH',
      color: '#7c3aed',
      purpose: 'Single entry point for all client requests, handling authentication, dynamic route discovery, and cross-cutting security.',
      techStack: ['Spring Cloud Gateway', 'JWT', 'Resilience4j', 'Spring Security'],
      responsibilities: [
        '<strong>JWT validation</strong> — Token authentication and authorization filters',
        '<strong>Dynamic routing</strong> — Integrated service discovery via Eureka',
        '<strong>Circuit breaker</strong> — Resilience4j fallbacks for service fault tolerance'
      ]
    },
    {
      title: 'Spring Boot Microservices',
      type: 'BACKEND',
      color: '#059669',
      purpose: 'Domain-driven microservices handling business logic, each with independent deployment and schema isolation.',
      techStack: ['Java 17/21', 'Spring Boot 3', 'Eureka Client', 'Spring Security'],
      responsibilities: [
        '<strong>Domain isolation</strong> — Separate services for Auth, Admin, Inventory, Billing, Reports',
        '<strong>Service discovery</strong> — Registration with Eureka server',
        '<strong>Inter-service calls</strong> — Synchronous Feign clients with fallback handling'
      ]
    },
    {
      title: 'PostgreSQL & MSSQL Data Layer',
      type: 'DATA LAYER',
      color: '#f59e0b',
      purpose: 'Enterprise databases with multi-tenant schema-per-tenant isolation and PL/SQL stored procedures.',
      techStack: ['PostgreSQL', 'MSSQL', 'MySQL', 'Hibernate/JPA', 'PgBouncer'],
      responsibilities: [
        '<strong>Multi-tenant schema routing</strong> — Schema-per-tenant PostgreSQL isolation',
        '<strong>Stored procedures</strong> — MSSQL procedures for batch processing and audit trails',
        '<strong>Performance tuning</strong> — Indexes, synonyms, and connection pooling'
      ]
    },
    {
      title: 'Docker & Kubernetes Cloud Orchestration',
      type: 'DEVOPS & CLOUD',
      color: '#e91e63',
      purpose: 'Containerization and cloud deployment manifests ensuring zero-downtime rolling updates.',
      techStack: ['Docker', 'Kubernetes', 'Nginx Ingress', 'Git/SVN'],
      responsibilities: [
        '<strong>Containerization</strong> — Multi-stage alpine Docker builds',
        '<strong>K8s manifests</strong> — Deployments, Services, ConfigMaps, and Secrets',
        '<strong>Version control</strong> — Git and SVN repository workflows'
      ]
    }
  ];

  constructor(public ps: PortfolioService) {}

  selectNode(index: number) {
    this.selectedNodeIndex = this.selectedNodeIndex === index ? null : index;
  }
}