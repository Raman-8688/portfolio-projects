import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section } from '../../models/Portfolio';
import { PortfolioService } from '../../services/Portfolio.service';

@Component({
  selector: 'app-settings-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings-panel.component.html',
  styleUrl: './settings-panel.component.css',
})
export class SettingsPanelComponent {
  navItems: { id: Section; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'About', icon: 'fas fa-user' },
    { id: 'experience', label: 'Experience', icon: 'fas fa-briefcase' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-code' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-folder' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' },
  ];

  constructor(public ps: PortfolioService) {}

  navigate(section: Section): void {
    this.ps.navigateTo(section);
    this.ps.settingsPanelOpen.set(false);
  }
}
