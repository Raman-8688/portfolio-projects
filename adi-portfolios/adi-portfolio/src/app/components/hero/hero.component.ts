import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/Portfolio.service';
import { TypewriterService } from '../../services/Typewriter.service';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  constructor(
    public ps: PortfolioService,
    public tw: TypewriterService,
  ) {}

  ngOnInit(): void {
    this.tw.start(this.ps.titles);
  }

  ngOnDestroy(): void {
    this.tw.stop();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    if (el) {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
    }
  }
}
