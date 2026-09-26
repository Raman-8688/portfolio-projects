import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section, NAV_ITEMS, NavItem } from '../../models/Portfolio';
import { PortfolioService } from '../../services/Portfolio.service';

@Component({
  selector: 'app-settings-panel',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './settings-panel.component.html',
  styleUrl: './settings-panel.component.css',
})
export class SettingsPanelComponent {
  readonly navItems: NavItem[] = NAV_ITEMS;
  readonly themeColors: string[] = [
    '#ffdb70',
    '#00bcd4',
    '#7c3aed',
    '#059669',
    '#3b82f6',
    '#e91e63',
    '#f59e0b',
  ];

  constructor(public ps: PortfolioService) {}

  navigate(sectionId: Section): void {
    this.ps.navigateTo(sectionId);
    this.ps.settingsPanelOpen.set(false);
  }
}
