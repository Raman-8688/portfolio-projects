import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/Portfolio.service';
import { TypewriterService } from '../../services/Typewriter.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, OnDestroy {
  constructor(
    public ps: PortfolioService,
    public tw: TypewriterService
  ) {}

  ngOnInit(): void {
    this.tw.start(this.ps.titles);
  }

  ngOnDestroy(): void {
    this.tw.stop();
  }
}