import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/Portfolio';
import { PortfolioService } from '../../services/Portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  activeFilter = 'All';
  filteredProjects: Project[] = [];
  selectedProject: Project | null = null;

  categories = [
    'All',
    'Enterprise E-Commerce & Retail POS',
    'Transportation & Fleet Logistics',
    'Enterprise Logistics & ERP',
    'Real-Time Video & Streaming',
  ];

  constructor(public ps: PortfolioService) {}

  ngOnInit(): void {
    this.filteredProjects = this.ps.projects;
  }

  setFilter(category: string): void {
    this.activeFilter = category;
    if (category === 'All') {
      this.filteredProjects = this.ps.projects;
    } else {
      this.filteredProjects = this.ps.projects.filter(
        (p) => p.category === category
      );
    }
  }

  openModal(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }
}
