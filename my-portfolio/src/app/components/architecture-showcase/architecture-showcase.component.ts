import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/Portfolio.service';
import { ArchitectureNodeDetail } from '../../models/Portfolio';

@Component({
  selector: 'app-architecture-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './architecture-showcase.component.html',
  styleUrls: ['./architecture-showcase.component.css']
})
export class ArchitectureShowcaseComponent {
  selectedNode = 0;

  nodes: ArchitectureNodeDetail[] = [
    {
      id: 'angular-ui',
      title: 'Angular UI',
      sub: 'Client App',
      category: 'FRONTEND',
      color: '#dd0031',
      details:
        'Built with Angular 19 Standalone Components, Signal State Management, Dynamic Multilanguage Pipes, and Reactive Forms. Intercepts HTTP requests to inject JWT Auth Headers and Tenant Context headers.'
    },
    {
      id: 'api-gateway',
      title: 'API Gateway',
      sub: 'Spring Cloud Gateway',
      category: 'ROUTING',
      color: '#8b5cf6',
      details:
        'Centralized edge gateway performing CORS configuration, Global Exception Handling, JWT token validation, rate limiting, and dynamic load-balanced request forwarding to microservice instances.'
    },
    {
      id: 'microservices',
      title: 'Microservices',
      sub: 'Spring Boot + Eureka',
      category: 'BACKEND',
      color: '#10b981',
      details:
        'Decoupled Spring Boot microservices (Auth, Employee, Department, Notification, Order, Inventory) incorporating Spring Data JPA, Spring Security RBAC, NVIDIA AI integration, and Eureka discovery.'
    },
    {
      id: 'postgres-db',
      title: 'PostgreSQL',
      sub: 'Multi-tenant Schema',
      category: 'DATA LAYER',
      color: '#3b82f6',
      details:
        'PostgreSQL dynamic Schema-per-Tenant isolation for Winfocus Pharma SaaS, alongside MSSQL enterprise databases equipped with Stored Procedures, Non-Clustered Indexes, and Synonyms for Hyderabad Metro AMS.'
    },
    {
      id: 'docker-k8s',
      title: 'Docker / K8s',
      sub: 'Orchestration',
      category: 'CONTAINERS',
      color: '#0284c7',
      details:
        'Containerized Docker microservice images orchestrated across Kubernetes pods with rolling updates, environment secret injection, and automated health checks.'
    }
  ];

  get activeNode(): ArchitectureNodeDetail {
    return this.nodes[this.selectedNode];
  }

  selectNode(idx: number): void {
    this.selectedNode = idx;
  }

  constructor(public ps: PortfolioService) {}
}