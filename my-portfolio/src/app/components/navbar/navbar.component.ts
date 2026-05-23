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
    { id: 'home',       label: 'Home'       },
    { id: 'about',      label: 'About'      },
    { id: 'experience', label: 'Experience' },
    { id: 'skills',     label: 'Skills'     },
    { id: 'projects',   label: 'Projects'   },
    { id: 'contact',    label: 'Contact'    }
  ];

  constructor(public ps: PortfolioService) {}

  navigate(section: Section): void {
    this.ps.navigateTo(section);
  }
}