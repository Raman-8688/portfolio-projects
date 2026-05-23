import { Component } from '@angular/core';
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
    SettingsPanelComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public ps: PortfolioService) {
    document.documentElement.style.setProperty('--theme-color', ps.themeColor());
  }
}