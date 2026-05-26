import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent }        from './components/navbar/navbar.component';
import { HeroComponent }          from './components/hero/hero.component';
import { AboutComponent }         from './components/about/about.component';
import { ExperienceComponent }    from './components/experience/experience.component';
import { SkillsComponent }        from './components/skills/skills.component';
import { ProjectsComponent }      from './components/projects/projects.component';
import { ContactComponent }       from './components/contact/contact.component';
import { FooterComponent }        from './components/footer/footer.component';
import { SettingsPanelComponent } from './components/settings-panel/settings-panel.component';
import { PortfolioService } from './services/Portfolio.service';

// New Sections
import { ArchitectureShowcaseComponent } from './components/architecture-showcase/architecture-showcase.component';
import { DevopsDeploymentComponent }     from './components/devops-deployment/devops-deployment.component';
import { GithubStatsComponent }         from './components/github-stats/github-stats.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    SettingsPanelComponent,
    ArchitectureShowcaseComponent,
    DevopsDeploymentComponent,
    GithubStatsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public ps: PortfolioService) {
    document.documentElement.style.setProperty('--theme-color', ps.themeColor());
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'about', 'skills', 'experience', 'architecture', 'projects', 'devops', 'github', 'contact'];
    // Offset by header height + padding
    const scrollPosition = window.scrollY + 120;

    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.ps.activeSection.set(section as any);
          break;
        }
      }
    }
  }
}