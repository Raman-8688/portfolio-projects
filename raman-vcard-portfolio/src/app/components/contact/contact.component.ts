import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/Portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  form = { name: '', email: '', message: '' };
  sending = false;
  formSuccess = false;

  constructor(public ps: PortfolioService) {}

  isFormValid(): boolean {
    return (
      this.form.name.trim().length > 0 &&
      this.form.email.trim().length > 0 &&
      this.form.message.trim().length > 0
    );
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (!this.isFormValid()) return;

    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.formSuccess = true;
      this.form = { name: '', email: '', message: '' };
      setTimeout(() => (this.formSuccess = false), 5000);
    }, 1000);
  }
}