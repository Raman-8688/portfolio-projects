import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class ProjectsComponent implements OnInit, OnDestroy {
  activeFilter = 'all';
  filteredProjects: Project[] = [];
  headerVisible = false;
  cardsVisible: boolean[] = [];
  private observer!: IntersectionObserver;

  filters = [
    { id: 'all', label: 'All', icon: 'fas fa-th' },
    {
      id: 'microservices',
      label: 'Microservices',
      icon: 'fas fa-network-wired',
    },
    { id: 'angular', label: 'Angular', icon: 'fab fa-angular' },
    { id: 'cloud', label: 'Cloud/DevOps', icon: 'fas fa-cloud' },
    { id: 'database', label: 'Database', icon: 'fas fa-database' },
  ];

  // Different animation styles per card position
  animClasses = ['slide-up', 'slide-left', 'slide-right', 'zoom-in', 'flip-in'];
  getAnimClass(i: number): string {
    return this.animClasses[i % this.animClasses.length];
  }

  isVisible(arr: any[], i: number): boolean {
    return arr.length > i;
  }

  constructor(public ps: PortfolioService) {}

  ngOnInit(): void {
    this.filteredProjects = this.ps.projects;
    this.cardsVisible = new Array(this.filteredProjects.length).fill(false);
    setTimeout(() => this.setupObserver(), 200);
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
    this.cardsVisible = [];
    setTimeout(() => {
      this.filteredProjects =
        filter === 'all'
          ? this.ps.projects
          : this.ps.projects.filter((p) => p.tags.includes(filter));
      this.cardsVisible = new Array(this.filteredProjects.length).fill(false);
      setTimeout(() => this.setupObserver(), 100);
    }, 200);
  }

  private setupObserver(): void {
    if (this.observer) this.observer.disconnect();
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const idx = el.dataset['idx'];
            if (el.dataset['type'] === 'header') this.headerVisible = true;
            else if (idx !== undefined) this.cardsVisible[+idx] = true;
          }
        });
      },
      { threshold: 0.1 },
    );

    const header = document.querySelector('.projects-section .section-header');
    if (header) {
      (header as HTMLElement).dataset['type'] = 'header';
      this.observer.observe(header);
    }

    document
      .querySelectorAll('.projects-section .proj-card')
      .forEach((el, i) => {
        (el as HTMLElement).dataset['idx'] = String(i);
        this.observer.observe(el);
      });
  }
}
