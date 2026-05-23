import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/Portfolio.service';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  form = { name: '', email: '', subject: '', message: '' };
  submitted = false;
  sending = false;
  formSuccess = false;
  formError = false;

  contactItems = [
    { icon: 'fas fa-envelope',      label: 'Email',    value: 'ramanms8688@gmail.com',       href: 'mailto:ramanms8688@gmail.com', bg: '#e0f7fa', color: '#00acc1' },
    { icon: 'fas fa-phone-alt',     label: 'Phone',    value: '8688505451',                  href: 'tel:8688505451',               bg: '#e8f5e9', color: '#43a047' },
    { icon: 'fas fa-map-marker-alt',label: 'Location', value: 'Kurnool, Andhra Pradesh',     href: '#',                            bg: '#fff3e0', color: '#fb8c00' },
    { icon: 'fab fa-github',        label: 'GitHub',   value: 'github.com/Raman-8688',       href: 'https://github.com/Raman-8688', bg: '#f3e5f5', color: '#8e24aa' },
    { icon: 'fab fa-linkedin',      label: 'LinkedIn', value: 'linkedin.com/in/b-ramanjaneyulu', href: 'https://linkedin.com/in/b-ramanjaneyulu-155021258', bg: '#e3f2fd', color: '#1565c0' }
  ];

  constructor(public ps: PortfolioService) {}

  onSubmit(): void {
    this.submitted = true;
    this.formError = false;
    this.formSuccess = false;

    if (!this.form.name || !this.form.email || !this.form.message) {
      this.formError = true;
      return;
    }

    this.sending = true;

    // Simulate sending
    setTimeout(() => {
      this.sending = false;
      this.formSuccess = true;
      this.form = { name: '', email: '', subject: '', message: '' };
      this.submitted = false;

      setTimeout(() => this.formSuccess = false, 5000);
    }, 1500);
  }
}