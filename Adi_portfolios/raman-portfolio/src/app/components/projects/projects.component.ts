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
  activeFilter = 'all';
  filteredProjects: Project[] = [];
  selectedProject: Project | null = null;

  filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'microservices', label: 'Microservices' },
    { id: 'angular', label: 'Angular' },
    { id: 'database', label: 'Database & SQL' },
  ];

  constructor(public ps: PortfolioService) {}

  ngOnInit(): void {
    this.filteredProjects = this.ps.projects;
  }

  setFilter(filterId: string): void {
    this.activeFilter = filterId;
    if (filterId === 'all') {
      this.filteredProjects = this.ps.projects;
    } else {
      this.filteredProjects = this.ps.projects.filter(p => p.tags.includes(filterId));
    }
  }

  onFilterSelect(event: Event): void {
    const val = (event.target as HTMLSelectElement).value;
    this.setFilter(val);
  }

  openModal(project: Project): void {
    this.selectedProject = project;
  }

  closeModal(): void {
    this.selectedProject = null;
  }
}
