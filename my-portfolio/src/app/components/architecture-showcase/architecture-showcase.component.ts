import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/Portfolio.service';

@Component({
  selector: 'app-architecture-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './architecture-showcase.component.html',
  styleUrl: './architecture-showcase.component.css'
})
export class ArchitectureShowcaseComponent {
  constructor(public ps: PortfolioService) {}

  // Renamed to match the template's `selectedNodeIndex`
  selectedNodeIndex: number | null = null;

  selectNode(index: number | null) {
    this.selectedNodeIndex = this.selectedNodeIndex === index ? null : index;
  }
}
