import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-architecture-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './architecture-showcase.component.html',
  styleUrls: ['./architecture-showcase.component.css']
})
export class ArchitectureShowcaseComponent {
  selectedNodeIndex: number | null = null;

  architectureNodes = [
    {
      title: 'Angular UI',
      type: 'FRONTEND',
      color: '#dd0031',
      icon: 'fab fa-angular',
      purpose: 'Single-page application delivering responsive user interface with real-time updates and state management.',
      techStack: ['Angular 17', 'TypeScript', 'RxJS', 'NgRx', 'Tailwind CSS'],
      responsibilities: [
        '<strong>Client-side rendering</strong> — Optimized SPA with lazy loading',
        '<strong>State management</strong> — NgRx for predictable state',
        '<strong>Real-time updates</strong> — WebSocket integration for live data',
        '<strong>Progressive Web App</strong> — Offline capability and installable'
      ]
    },
    {
      title: 'API Gateway',
      type: 'ROUTING',
      color: '#a78bfa',
      icon: 'fas fa-route',
      purpose: 'Single entry point for all client requests, handling authentication, routing, and cross-cutting concerns.',
      techStack: ['Spring Cloud Gateway', 'Netty', 'JWT', 'Resilience4j', 'Spring Security'],
      responsibilities: [
        '<strong>JWT validation</strong> — Token authentication and authorization',
        '<strong>Request routing</strong> — Dynamic service discovery with Eureka',
        '<strong>Rate limiting</strong> — Protect downstream services from abuse',
        '<strong>Circuit breaker</strong> — Fallback strategies for service failures'
      ]
    },
    {
      title: 'Microservices',
      type: 'BACKEND',
      color: '#6db33f',
      icon: 'fas fa-microservices',
      purpose: 'Domain-driven microservices handling business logic, each with independent deployment and scaling.',
      techStack: ['Spring Boot 3', 'Spring Cloud', 'Eureka Client', 'RabbitMQ', 'MongoDB', 'Redis'],
      responsibilities: [
        '<strong>Business logic</strong> — Domain-driven design per service',
        '<strong>Service discovery</strong> — Register with Eureka server',
        '<strong>Event-driven</strong> — Async communication via RabbitMQ',
        '<strong>Caching strategy</strong> — Redis for high-performance queries'
      ]
    },
    {
      title: 'PostgreSQL',
      type: 'DATA LAYER',
      color: '#336791',
      icon: 'fas fa-database',
      purpose: 'Primary relational database with multi-tenant architecture and ACID compliance.',
      techStack: ['PostgreSQL 15', 'Hibernate', 'Flyway', 'PgBouncer', 'TimescaleDB'],
      responsibilities: [
        '<strong>Multi-tenant schema</strong> — Row-level security per tenant',
        '<strong>Migration management</strong> — Version-controlled with Flyway',
        '<strong>Connection pooling</strong> — PgBouncer for efficient connections',
        '<strong>Time-series data</strong> — TimescaleDB for metrics and analytics'
      ]
    },
    {
      title: 'Docker / K8s',
      type: 'CONTAINERS',
      color: '#326ce5',
      icon: 'fab fa-docker',
      purpose: 'Containerization and orchestration for consistent deployment across environments.',
      techStack: ['Docker', 'Kubernetes', 'Helm', 'Istio', 'Prometheus', 'Grafana'],
      responsibilities: [
        '<strong>Container orchestration</strong> — Auto-scaling and self-healing',
        '<strong>Service mesh</strong> — Istio for traffic management and security',
        '<strong>Observability</strong> — Prometheus metrics and Grafana dashboards',
        '<strong>Rolling updates</strong> — Zero-downtime deployments'
      ]
    },
    {
      title: 'GitHub Actions',
      type: 'CI/CD',
      color: '#f05032',
      icon: 'fab fa-github',
      purpose: 'Automated pipeline for build, test, and deployment with quality gates.',
      techStack: ['GitHub Actions', 'SonarQube', 'Docker Hub', 'AKS', 'Snyk'],
      responsibilities: [
        '<strong>Automated testing</strong> — Unit, integration, and E2E tests',
        '<strong>Security scanning</strong> — Snyk vulnerability detection',
        '<strong>Build & push</strong> — Multi-stage Docker builds',
        '<strong>Deployment</strong> — Helm charts to AKS cluster'
      ]
    }
  ];

  selectNode(index: number) {
    this.selectedNodeIndex = this.selectedNodeIndex === index ? null : index;
  }
}