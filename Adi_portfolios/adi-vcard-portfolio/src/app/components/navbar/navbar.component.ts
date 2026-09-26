import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section, NAV_ITEMS, NavItem } from '../../models/Portfolio';
import { PortfolioService } from '../../services/Portfolio.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  readonly navItems: NavItem[] = NAV_ITEMS;

  constructor(public ps: PortfolioService) {}

  navigate(sectionId: Section): void {
    this.ps.navigateTo(sectionId);
  }
}