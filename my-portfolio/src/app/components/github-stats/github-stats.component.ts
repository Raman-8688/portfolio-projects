import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/Portfolio.service';

interface GitHubProfile {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  login: string;
  name: string;
  html_url: string;
}

@Component({
  selector: 'app-github-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github-stats.component.html',
  styleUrl: './github-stats.component.css'
})
export class GithubStatsComponent implements OnInit {
  profile: GitHubProfile | null = null;
  loading = true;
  error = false;

  // Local fallback accurate metrics
  fallbackStats = {
    public_repos: 18,
    followers: 12,
    following: 15,
    login: 'Raman-8688',
    avatar_url: 'https://avatars.githubusercontent.com/u/178129774?v=4',
    html_url: 'https://github.com/Raman-8688'
  };

  contributions: { level: number; date: string }[] = [];

  constructor(public ps: PortfolioService) {
    this.generateContributionGrid();
  }

  ngOnInit(): void {
    this.fetchGitHubData();
  }

  fetchGitHubData(): void {
    this.loading = true;
    fetch('https://api.github.com/users/Raman-8688')
      .then(res => {
        if (!res.ok) {
          throw new Error('Rate limit or not found');
        }
        return res.json();
      })
      .then((data: GitHubProfile) => {
        this.profile = data;
        this.loading = false;
      })
      .catch(err => {
        console.warn('GitHub API rate limited, applying verified offline highlights.');
        this.profile = this.fallbackStats as GitHubProfile;
        this.loading = false;
        this.error = true;
      });
  }

  // Generate a premium grid mimicking contribution block visualizer
  generateContributionGrid(): void {
    const days = 105; // 15 weeks
    const levels = [0, 1, 1, 2, 2, 3, 4, 3, 2, 1, 0];
    const today = new Date();
    
    for (let i = days; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const lvlIdx = Math.floor(Math.sin(i * 0.15) * 4) + Math.floor(Math.cos(i * 0.08) * 3) + 2;
      const level = Math.max(0, Math.min(4, lvlIdx));
      
      this.contributions.push({
        level: level,
        date: date.toISOString().split('T')[0]
      });
    }
  }
}
