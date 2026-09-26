import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/Portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactItems = [
    {
      icon: 'fas fa-envelope',
      label: 'Direct Email',
      value: 'adireddy.h@gmail.com',
      href: 'mailto:adireddy.h@gmail.com',
      bg: 'rgba(14, 165, 233, 0.12)',
      color: '#0ea5e9',
      actionLabel: 'Send Email',
    },
    {
      icon: 'fas fa-phone-alt',
      label: 'Phone / Mobile',
      value: '+91-9182370938',
      href: 'tel:+919182370938',
      bg: 'rgba(16, 185, 129, 0.12)',
      color: '#10b981',
      actionLabel: 'Call Phone',
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/adisekharareddy',
      href: 'https://linkedin.com/in/adisekharareddy',
      bg: 'rgba(99, 102, 241, 0.12)',
      color: '#6366f1',
      actionLabel: 'View Profile',
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Primary Location',
      value: 'Hyderabad, Telangana, India',
      href: 'https://maps.google.com/?q=Hyderabad,India',
      bg: 'rgba(245, 158, 11, 0.12)',
      color: '#f59e0b',
      actionLabel: 'View Location',
    },
  ];

  constructor(public ps: PortfolioService) {}
}