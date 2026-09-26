import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/Portfolio.service';

@Component({
  selector: 'app-resume-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-modal.component.html',
  styleUrl: './resume-modal.component.css'
})
export class ResumeModalComponent {
  copiedSummary = false;

  constructor(public ps: PortfolioService) {}

  @HostListener('document:keydown.escape')
  onEscape() {
    this.close();
  }

  get resume() {
    return this.ps.atsResume;
  }

  handlePrint() {
    window.print();
  }

  handleCopySummary() {
    if (this.resume && this.resume.summary) {
      navigator.clipboard.writeText(this.resume.summary);
      this.copiedSummary = true;
      setTimeout(() => (this.copiedSummary = false), 2500);
    }
  }

  close() {
    this.ps.closeResumeModal();
  }
}
