import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/Portfolio.service';
import { TypewriterService } from '../../services/Typewriter.service';
import { GithubStatsComponent } from '../github-stats/github-stats.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, GithubStatsComponent],
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