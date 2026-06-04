import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/Portfolio.service';

// NOTE: Run `npm install @emailjs/browser` then add your IDs below.
// Free plan: https://www.emailjs.com/ — 200 emails/month, no backend needed.
declare const emailjs: any;

const EMAILJS_SERVICE_ID = 'service_ocru37q';
const EMAILJS_TEMPLATE_ID = 'template_k4pvtlf';
const EMAILJS_PUBLIC_KEY = '3l5df2OSRtLUSFVOa';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  form = { name: '', email: '', subject: '', message: '' };
  submitted = false;
  sending = false;
  formSuccess = false;
  formError = false;
  formErrorMsg = 'Please fill in all required fields.';

  contactItems = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'ramanms8688@gmail.com',
      href: 'mailto:ramanms8688@gmail.com',
      bg: 'rgba(0,188,212,0.1)',
      color: '#00acc1',
    },
    {
      icon: 'fas fa-phone-alt',
      label: 'Phone',
      value: '8688505451',
      href: 'tel:8688505451',
      bg: 'rgba(16,185,129,0.1)',
      color: '#10b981',
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Kurnool, Andhra Pradesh',
      href: '#',
      bg: 'rgba(245,158,11,0.1)',
      color: '#f59e0b',
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'github.com/Raman-8688',
      href: 'https://github.com/Raman-8688',
      bg: 'rgba(139,92,246,0.1)',
      color: '#8b5cf6',
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/b-ramanjaneyulu',
      href: 'https://linkedin.com/in/b-ramanjaneyulu-155021258',
      bg: 'rgba(59,130,246,0.1)',
      color: '#3b82f6',
    },
  ];

  constructor(public ps: PortfolioService) {}

  ngOnInit(): void {
    // Initialize EmailJS with your public key
    if (typeof emailjs !== 'undefined') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;
    this.formError = false;
    this.formSuccess = false;

    if (!this.form.name || !this.form.email || !this.form.message) {
      this.formErrorMsg = 'Please fill in all required fields.';
      this.formError = true;
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.form.email)) {
      this.formErrorMsg = 'Please enter a valid email address.';
      this.formError = true;
      return;
    }

    this.sending = true;

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: this.form.name,
          from_email: this.form.email,
          subject: this.form.subject || 'Portfolio Contact',
          message: this.form.message,
          reply_to: this.form.email,
        },
        EMAILJS_PUBLIC_KEY,
      );

      this.sending = false;
      this.formSuccess = true;
      this.form = { name: '', email: '', subject: '', message: '' };
      this.submitted = false;
      setTimeout(() => (this.formSuccess = false), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      this.sending = false;
      this.formErrorMsg =
        'Failed to send. Please email me directly at ramanms8688@gmail.com';
      this.formError = true;
    }
  }
}
