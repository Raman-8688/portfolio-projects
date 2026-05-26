import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section } from '../../models/Portfolio';
import { PortfolioService } from '../../services/Portfolio.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  navItems: { id: Section; label: string }[] = [
    { id: 'home',         label: 'Home' },
    { id: 'about',        label: 'About' },
    { id: 'skills',       label: 'Skills' },
    { id: 'experience',   label: 'Experience' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'projects',     label: 'Projects' },
    { id: 'devops',       label: 'DevOps' },
    { id: 'github',       label: 'GitHub' },
    { id: 'contact',      label: 'Contact' }
  ];

  menuOpen = false;

  constructor(public ps: PortfolioService) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  navigate(section: Section): void {
    this.ps.navigateTo(section);
    this.menuOpen = false; // close mobile menu on click
  }
}