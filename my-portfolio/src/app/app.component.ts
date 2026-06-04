import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ArchitectureShowcaseComponent } from './components/architecture-showcase/architecture-showcase.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DevopsDeploymentComponent } from './components/devops-deployment/devops-deployment.component';
import { GithubStatsComponent } from './components/github-stats/github-stats.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SettingsPanelComponent } from './components/settings-panel/settings-panel.component';
import { PortfolioService } from './services/Portfolio.service';
import { Section } from './models/Portfolio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ArchitectureShowcaseComponent,
    ProjectsComponent,
    DevopsDeploymentComponent,
    GithubStatsComponent,
    ContactComponent,
    FooterComponent,
    SettingsPanelComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(public ps: PortfolioService) {}

  ngOnInit() {
    const saved = localStorage.getItem('themeColor');
    if (saved) this.ps.setThemeColor(saved);
    const dark = localStorage.getItem('isDark');
    if (dark === 'false' && this.ps.isDarkMode()) this.ps.toggleDarkMode();
  }

  ngAfterViewInit() {
    // ── 1. Scroll-spy: update active nav link based on visible section ──
    const sectionIds: Section[] = [
      'home',
      'about',
      'skills',
      'experience',
      'architecture',
      'projects',
      'devops',
      'github',
      'contact',
    ];

    const scrollSpyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id as Section;
            if (sectionIds.includes(id)) {
              this.ps.activeSection.set(id);
            }
          }
        });
      },
      {
        // Trigger when section occupies at least 30% of the viewport
        // rootMargin negative top removes navbar height from calculation
        threshold: 0.25,
        rootMargin: '-68px 0px -30% 0px',
      },
    );

    setTimeout(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) scrollSpyObserver.observe(el);
      });
    }, 300);

    // ── 2. Scroll animations: [data-aos] elements ──
    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-visible');
            animObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    setTimeout(() => {
      document
        .querySelectorAll('[data-aos]')
        .forEach((el) => animObserver.observe(el));
    }, 300);
  }
}
