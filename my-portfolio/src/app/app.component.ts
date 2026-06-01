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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet,
    NavbarComponent, HeroComponent, AboutComponent,
    SkillsComponent, ExperienceComponent, ArchitectureShowcaseComponent,
    ProjectsComponent, DevopsDeploymentComponent, GithubStatsComponent,
    ContactComponent, FooterComponent, SettingsPanelComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(public ps: PortfolioService) {}

  ngOnInit() {
    // Apply saved theme on boot
    const saved = localStorage.getItem('themeColor');
    if (saved) this.ps.setThemeColor(saved);
    const dark = localStorage.getItem('isDark');
    if (dark === 'false' && this.ps.isDarkMode()) this.ps.toggleDarkMode();
  }

  ngAfterViewInit() {
    // Global scroll animation observer — watches all [data-aos] elements
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-visible');
            io.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    // Small delay so Angular finishes rendering all components
    setTimeout(() => {
      document.querySelectorAll('[data-aos]').forEach(el => io.observe(el));
    }, 200);
  }
}
