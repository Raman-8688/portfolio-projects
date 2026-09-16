import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/Portfolio.service';
import { SkillCategoryGroup } from '../../models/Portfolio';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  activeCategory = 'All';

  get categories(): string[] {
    return ['All', ...this.ps.skillsMatrix.map((s) => s.category)];
  }

  get filteredSkills(): SkillCategoryGroup[] {
    if (this.activeCategory === 'All') {
      return this.ps.skillsMatrix;
    }
    return this.ps.skillsMatrix.filter((s) => s.category === this.activeCategory);
  }

  setCategory(cat: string): void {
    this.activeCategory = cat;
  }

  constructor(public ps: PortfolioService) {}
}

