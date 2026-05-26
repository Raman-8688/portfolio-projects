import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/Portfolio.service';

@Component({
  selector: 'app-architecture-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './architecture-showcase.component.html',
  styleUrl: './architecture-showcase.component.css'
})
export class ArchitectureShowcaseComponent {
  constructor(public ps: PortfolioService) {}

  activeNode: number | null = null;

  steps = [
    {
      title: 'Angular UI Client',
      icon: 'fab fa-angular',
      color: '#dd0031',
      desc: 'Modern, highly responsive client frontend featuring lazy-loaded routes, state signals, and reactive forms.'
    },
    {
      title: 'API Gateway',
      icon: 'fas fa-route',
      color: '#a78bfa',
      desc: 'Central entrance routing client requests. Applies custom JWT authentication filters, CORS, and request rate-limiting.'
    },
    {
      title: 'Spring Boot Services',
      icon: 'fas fa-server',
      color: '#6db33f',
      desc: 'Resilient Microservices registry via Eureka. Includes separate Inventory, Billing, and Core Auth services interacting via OpenFeign.'
    },
    {
      title: 'Database Schema Router',
      icon: 'fas fa-database',
      color: '#336791',
      desc: 'Dynamic PostgreSQL connection routing. Isolates clinics into isolated private schemas per tenant organization.'
    },
    {
      title: 'Docker & Kubernetes',
      icon: 'fab fa-docker',
      color: '#326ce5',
      desc: 'Microservices containerized as Docker layers and orchestrated within a highly fault-tolerant local Kubernetes pod network.'
    },
    {
      title: 'GitHub Actions CI/CD',
      icon: 'fab fa-github-alt',
      color: '#f05032',
      desc: 'Automated continuous integration pipeline testing compile status, compiling images, and pushing to secure deployment registries.'
    }
  ];

  selectNode(index: number | null) {
    this.activeNode = index;
  }
}
