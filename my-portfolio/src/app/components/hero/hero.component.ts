import { Component, OnInit, OnDestroy } from '@angular/core';
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
}
