import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/Portfolio.service';
import { MncQnA } from '../../models/Portfolio';

@Component({
  selector: 'app-mnc-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mnc-modal.component.html',
  styleUrl: './mnc-modal.component.css'
})
export class MncModalComponent {
  activeCategory = 'All';
  searchTerm = '';

  constructor(public ps: PortfolioService) {}

  @HostListener('document:keydown.escape')
  onEscape() {
    this.close();
  }

  get categories(): string[] {
    const cats = Array.from(new Set(this.ps.mncPrepQnA.map(q => q.category)));
    return ['All', ...cats];
  }

  get filteredQnA(): MncQnA[] {
    return this.ps.mncPrepQnA.filter(q => {
      const matchesCat = this.activeCategory === 'All' || q.category === this.activeCategory;
      const term = this.searchTerm.toLowerCase().trim();
      const matchesSearch = !term ||
        q.question.toLowerCase().includes(term) ||
        q.answer.toLowerCase().includes(term);
      return matchesCat && matchesSearch;
    });
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }

  close() {
    this.ps.closeMncModal();
  }
}
