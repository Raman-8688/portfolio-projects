import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/Portfolio.service';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(public ps: PortfolioService) {}
}