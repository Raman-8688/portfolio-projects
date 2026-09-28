import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Project } from '../../models/Portfolio';
import { PortfolioService } from '../../services/Portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  activeFilter = 'all';
  searchQuery = '';
  filteredProjects: Project[] = [];
  selectedProject: Project | null = null;

  filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'microservices', label: 'Microservices & Spring' },
    { id: 'angular', label: 'Angular Frontends' },
    { id: 'database', label: 'Database & SQL' },
  ];

  constructor(public ps: PortfolioService) {}

  ngOnInit(): void {
    this.applyFilters();
  }

  setFilter(filterId: string): void {
    this.activeFilter = filterId;
    this.applyFilters();
  }

  onFilterSelect(event: Event): void {
    const val = (event.target as HTMLSelectElement).value;
    this.setFilter(val);
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.applyFilters();
  }

  private applyFilters(): void {
    let result = this.ps.projects;

    if (this.activeFilter !== 'all') {
      result = result.filter((p) => p.tags.includes(this.activeFilter));
    }

    if (this.searchQuery.trim() !== '') {
      const q = this.searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.techStack.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.institution.toLowerCase().includes(q)
      );
    }

    this.filteredProjects = result;
  }

  openModal(project: Project): void {
    this.selectedProject = project;
  }

  closeModal(): void {
    this.selectedProject = null;
  }
}
