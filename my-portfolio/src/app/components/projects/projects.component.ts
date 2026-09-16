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
  activeFilter = 'All';
  filteredProjects: Project[] = [];
  selectedProject: Project | null = null;
  headerVisible = false;
  cardsVisible: boolean[] = [];
  private observer!: IntersectionObserver;

  categories = [
    'All',
    'Live Client Projects',
    'Full-Stack Microservices',
    'Live Deployed & PWA',
    'AI & Deployed Apps',
  ];

  constructor(public ps: PortfolioService) {}

  ngOnInit(): void {
    this.filteredProjects = this.ps.projects;
    this.cardsVisible = new Array(this.filteredProjects.length).fill(false);
    setTimeout(() => this.setupObserver(), 200);
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
    document.body.style.overflow = '';
  }

  setFilter(category: string): void {
    this.activeFilter = category;
    this.cardsVisible = [];
    setTimeout(() => {
      if (category === 'All') {
        this.filteredProjects = this.ps.projects;
      } else {
        this.filteredProjects = this.ps.projects.filter(
          (p) =>
            p.category === category ||
            (category === 'Live Client Projects' &&
              (p.category?.includes('Client') || p.category?.includes('Production')))
        );
      }
      this.cardsVisible = new Array(this.filteredProjects.length).fill(false);
      setTimeout(() => this.setupObserver(), 100);
    }, 150);
  }

  openModal(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = '';
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
      { threshold: 0.1 }
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
