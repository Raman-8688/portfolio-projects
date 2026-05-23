import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/Portfolio.service';


interface Tech {
  name: string;
  img?: string;
  icon?: string;
  iconColor?: string;
  letter?: string;
  letterColor?: string;
  bg: string;
}

interface SkillCat {
  title: string;
  color: string;
  color2: string;
  techs: Tech[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit, OnDestroy {

  headerVisible = false;
  panelsVisible: boolean[] = [];
  calloutVisible = false;
  private observer!: IntersectionObserver;

  skillCategories: SkillCat[] = [
    {
      title: 'Programming Languages',
      color: '#a78bfa',
      color2: '#7c3aed',
      techs: [
        { name: 'Java',       bg: '#1e1433', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'TypeScript', bg: '#1a2540', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'JavaScript', bg: '#1e1e00', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'SQL',        bg: '#001a1f', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Python',     bg: '#1a2200', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      ]
    },
    {
      title: 'Backend Technologies',
      color: '#34d399',
      color2: '#059669',
      techs: [
        { name: 'Spring Boot', bg: '#0d2010', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'Spring',      bg: '#0a1a0d', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'REST APIs',   bg: '#001524', icon: 'fas fa-plug', iconColor: '#34d399' },
        { name: 'PostgreSQL',  bg: '#001020', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MySQL',       bg: '#001020', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Hibernate',   bg: '#1a0d00', icon: 'fas fa-database', iconColor: '#f59e0b' },
      ]
    },
    {
      title: 'Frontend Technologies',
      color: '#f472b6',
      color2: '#e91e63',
      techs: [
        { name: 'Angular',    bg: '#200010', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { name: 'HTML5',      bg: '#200800', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3',       bg: '#00102a', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'TypeScript', bg: '#0a1428', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'RxJS',       bg: '#200020', icon: 'fas fa-circle-notch', iconColor: '#f472b6' },
      ]
    },
    {
      title: 'Microservices & Architecture',
      color: '#60a5fa',
      color2: '#2563eb',
      techs: [
        { name: 'Eureka',        bg: '#001428', icon: 'fas fa-broadcast-tower', iconColor: '#60a5fa' },
        { name: 'API Gateway',   bg: '#0a0020', icon: 'fas fa-route', iconColor: '#a78bfa' },
        { name: 'Spring Sec',    bg: '#001428', icon: 'fas fa-shield-alt', iconColor: '#34d399' },
        { name: 'Multi-Tenant',  bg: '#001428', icon: 'fas fa-users-cog', iconColor: '#f472b6' },
        { name: 'Microservices', bg: '#000a14', icon: 'fas fa-network-wired', iconColor: '#60a5fa' },
        { name: 'OAuth2 / JWT',  bg: '#0a1428', icon: 'fas fa-key', iconColor: '#fbbf24' },
      ]
    },
    {
      title: 'Developer Tools',
      color: '#fb923c',
      color2: '#ea580c',
      techs: [
        { name: 'Docker',     bg: '#001428', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', bg: '#001020', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'AWS',        bg: '#1a0800', icon: 'fab fa-aws', iconColor: '#ff9900' },
        { name: 'Git',        bg: '#1a0a00', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub',     bg: '#0a0a0a', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'IntelliJ',  bg: '#14001a', icon: 'fas fa-code', iconColor: '#fb923c' },
      ]
    },
    {
      title: 'Database & Design Patterns',
      color: '#fbbf24',
      color2: '#d97706',
      techs: [
        { name: 'PostgreSQL',  bg: '#001020', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'PL/SQL',      bg: '#140000', icon: 'fas fa-file-code', iconColor: '#fbbf24' },
        { name: 'Design Pat.',  bg: '#0a0800', icon: 'fas fa-sitemap', iconColor: '#fbbf24' },
        { name: 'Multi-Schema', bg: '#001000', icon: 'fas fa-layer-group', iconColor: '#34d399' },
        { name: 'Stored Procs', bg: '#140000', icon: 'fas fa-cogs', iconColor: '#fb923c' },
      ]
    }
  ];

  buildTags = [
    'Multi-Tenant SaaS', 'Microservices Architecture', 'Cloud-Native Apps',
    'Enterprise Pharma Systems', 'Real-time Dashboards', 'RESTful APIs',
    'Containerized Deployments', 'Schema-Isolated Databases'
  ];

  constructor(public ps: PortfolioService) {
    this.panelsVisible = new Array(this.skillCategories.length).fill(false);
  }

  ngOnInit(): void {
    this.setupScrollObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }

  private setupScrollObserver(): void {
    setTimeout(() => {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const idx = el.dataset['idx'];
            if (el.dataset['type'] === 'header') this.headerVisible = true;
            else if (el.dataset['type'] === 'panel' && idx !== undefined) this.panelsVisible[+idx] = true;
            else if (el.dataset['type'] === 'callout') this.calloutVisible = true;
          }
        });
      }, { threshold: 0.15 });

      // Observe header
      const header = document.querySelector('.skills-section .section-header');
      if (header) { (header as HTMLElement).dataset['type'] = 'header'; this.observer.observe(header); }

      // Observe panels
      document.querySelectorAll('.skills-section .category-panel').forEach((el, i) => {
        (el as HTMLElement).dataset['type'] = 'panel';
        (el as HTMLElement).dataset['idx'] = String(i);
        this.observer.observe(el);
      });

      // Observe callout
      const callout = document.querySelector('.skills-section .build-callout');
      if (callout) { (callout as HTMLElement).dataset['type'] = 'callout'; this.observer.observe(callout); }
    }, 300);
  }
}