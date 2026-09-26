import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/Portfolio.service';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SkillsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  constructor(public ps: PortfolioService) {}
}