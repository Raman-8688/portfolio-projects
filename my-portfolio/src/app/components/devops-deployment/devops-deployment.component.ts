import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/Portfolio.service';

@Component({
  selector: 'app-devops-deployment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './devops-deployment.component.html',
  styleUrl: './devops-deployment.component.css'
})
export class DevopsDeploymentComponent {
  constructor(public ps: PortfolioService) {}

  activeStep = 0;
  
  pipelineSteps = [
    {
      title: 'Local Code Push',
      icon: 'fab fa-git-alt',
      status: 'success',
      desc: 'Commit and push trigger from IntelliJ IDEA environment to the GitHub central repository.'
    },
    {
      title: 'GitHub Actions Build',
      icon: 'fas fa-tasks',
      status: 'success',
      desc: 'Lint rules checked, Maven compile executed, and standard Junit unit test blocks successfully passed.'
    },
    {
      title: 'Docker Packaging',
      icon: 'fab fa-docker',
      status: 'success',
      desc: 'Multi-stage Docker builds packing the Java JAR file into optimized container layers (~140MB size).'
    },
    {
      title: 'Kubernetes Rolling Update',
      icon: 'fas fa-dharmachakra',
      status: 'success',
      desc: 'K8s pulls the new image and executes a zero-downtime rolling update across active pods.'
    }
  ];

  pods = [
    { name: 'pharma-core-pod-1', status: 'Healthy', color: '#10b981', uptime: '99.9%' },
    { name: 'pharma-core-pod-2', status: 'Healthy', color: '#10b981', uptime: '99.9%' },
    { name: 'pharma-gateway-pod', status: 'Healthy', color: '#10b981', uptime: '99.9%' }
  ];

  triggerPipeline() {
    this.activeStep = 0;
    const interval = setInterval(() => {
      if (this.activeStep < this.pipelineSteps.length - 1) {
        this.activeStep++;
      } else {
        clearInterval(interval);
      }
    }, 1800);
  }

  ngOnInit() {
    this.triggerPipeline();
  }
}
