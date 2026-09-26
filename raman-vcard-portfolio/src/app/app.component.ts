import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ArchitectureShowcaseComponent } from './components/architecture-showcase/architecture-showcase.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SettingsPanelComponent } from './components/settings-panel/settings-panel.component';
import { PortfolioService } from './services/Portfolio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ArchitectureShowcaseComponent,
    ContactComponent,
    FooterComponent,
    SettingsPanelComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  sidebarActive = false;

  constructor(public ps: PortfolioService) {}

  toggleSidebar(): void {
    this.sidebarActive = !this.sidebarActive;
  }
}
