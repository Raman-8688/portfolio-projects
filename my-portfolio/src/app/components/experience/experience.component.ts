import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/Portfolio.service';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit, OnDestroy {

  itemsVisible: boolean[] = [];
  private observer!: IntersectionObserver;

  constructor(public ps: PortfolioService) {
    this.itemsVisible = new Array(this.ps.experiences.length).fill(false);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = (entry.target as HTMLElement).dataset['idx'];
            if (idx !== undefined) this.itemsVisible[+idx] = true;
          }
        });
      }, { threshold: 0.15 });

      document.querySelectorAll('.exp-section .timeline-item').forEach((el, i) => {
        (el as HTMLElement).dataset['idx'] = String(i);
        this.observer.observe(el);
      });
    }, 300);
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }
}