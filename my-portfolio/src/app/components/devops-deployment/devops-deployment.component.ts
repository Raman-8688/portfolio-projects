import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/Portfolio.service';

interface TerminalLine {
  type: 'sys' | 'user' | 'out' | 'err';
  text: string;
}

@Component({
  selector: 'app-devops-deployment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './devops-deployment.component.html',
  styleUrl: './devops-deployment.component.css'
})
export class DevopsDeploymentComponent implements AfterViewChecked {
  @ViewChild('terminalEnd') terminalEndRef!: ElementRef;

  inputVal = '';
  shouldScroll = false;

  history: TerminalLine[] = [
    { type: 'sys', text: 'Raman DevOS v2.4 Terminal [Type "help" to view available commands]' },
    { type: 'sys', text: 'System status: HEALTHY (PostgreSQL Schema Multitenancy Active · Spring Cloud Gateway UP)' }
  ];

  quickCommands = [
    'help',
    'skills',
    'architecture',
    'projects',
    'curl /health',
    'docker-compose',
    'export-resume',
    'mnc-prep',
    'clear'
  ];

  activeTab: 'terminal' | 'pipeline' = 'terminal';

  // CI/CD Pipeline Simulation
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
      desc: 'Lint rules checked, Maven compile executed, and standard JUnit unit tests passed.'
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
      desc: 'K8s pulls the new image and executes zero-downtime rolling update across active pods.'
    }
  ];

  pods = [
    { name: 'pharma-core-pod-1', status: 'Healthy', color: '#10b981', uptime: '99.9%' },
    { name: 'pharma-core-pod-2', status: 'Healthy', color: '#10b981', uptime: '99.9%' },
    { name: 'pharma-gateway-pod', status: 'Healthy', color: '#10b981', uptime: '99.9%' }
  ];

  constructor(public ps: PortfolioService) {}

  ngAfterViewChecked() {
    if (this.shouldScroll && this.terminalEndRef) {
      this.terminalEndRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
      this.shouldScroll = false;
    }
  }

  handleCommand(cmdInput?: string) {
    const rawCmd = cmdInput !== undefined ? cmdInput : this.inputVal;
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    this.history.push({ type: 'user', text: `$ ${rawCmd.trim()}` });

    switch (cmd) {
      case 'help':
        this.history.push({
          type: 'out',
          text: `Available Terminal Commands:
  • help          : Show this command menu
  • skills        : List core Java, Spring Boot & Angular engineering skills
  • architecture  : Show microservices topology summary
  • projects      : List production projects (Hyderabad Metro AMS, Winfocus Pharma, MemoryVerse)
  • experience    : Show employment summary
  • curl /health  : Test microservice cluster health endpoint
  • docker-compose: Simulate container deployment pipeline
  • export-resume : Open ATS 1-Page Printable Resume modal
  • mnc-prep      : Open Technical Interview Cheat Sheet modal
  • clear         : Clear terminal console output`
        });
        break;

      case 'skills':
        this.history.push({
          type: 'out',
          text: `Backend  : Java 17, Spring Boot 3.x, Microservices, Eureka, Gateway, Spring Security
Frontend : Angular 19, TypeScript, Reactive Signals, RxJS
Database : PostgreSQL (Multitenancy), MSSQL (Stored Procs, Indexes), MySQL
DevOps   : Docker, Kubernetes, Linux/Bash, SVN, Git, Vercel`
        });
        break;

      case 'architecture':
        this.history.push({
          type: 'out',
          text: `[TOPOLOGY]: Angular UI (Client) ➔ Spring Cloud Gateway (Port 8080) ➔ Eureka Registry ➔ Auth/Asset/Pharma Microservices ➔ PostgreSQL (Schema-per-Tenant) + MSSQL`
        });
        break;

      case 'projects':
        this.history.push({
          type: 'out',
          text: `1. MemoryVerse - Live PWA Storytelling Platform (memory-verse-ashy.vercel.app)
2. Hyderabad Metro AMS (Client Live) - MSSQL Stored Procs & Microservices
3. Multi-Tenant Pharma SaaS (Winfocus) - PostgreSQL Schema Routing & Dynamic Language UI
4. NexusCore ERP Work Hub - Microservices Mesh with Eureka & Spring Cloud Gateway
5. Secure AI Assistant - OAuth2 & JWT Proxied AI Integration`
        });
        break;

      case 'experience':
        this.history.push({
          type: 'out',
          text: `• Winfocus Solutions Pvt Ltd (Jun 2025 – Present) | Full Stack Developer
• Hyderabad Metro Rail AMS Project (2024) | Full Stack Developer
• JSpiders Training Institute (Jun 2024 – Jan 2025) | Merit Scholarship Recipient`
        });
        break;

      case 'curl /health':
        this.history.push({
          type: 'out',
          text: `HTTP/1.1 200 OK
{
  "status": "UP",
  "components": {
    "eureka": { "status": "UP" },
    "dbPostgres": { "status": "UP", "activeSchemas": 12 },
    "dbMSSQL": { "status": "UP" },
    "gateway": { "status": "UP", "routes": 8 }
  }
}`
        });
        break;

      case 'docker-compose':
        this.history.push({
          type: 'out',
          text: `[DOCKER]: Deploying containers...
✔ Container eureka-server       Started (Port 8761)
✔ Container api-gateway         Started (Port 8080)
✔ Container auth-service        Started (Port 8081)
✔ Container asset-ams-service   Started (Port 8082)
✔ Container pharma-inventory    Started (Port 8083)
✔ Container angular-frontend    Started (Port 80)`
        });
        break;

      case 'export-resume':
        this.ps.openResumeModal();
        this.history.push({ type: 'out', text: 'Opening ATS Resume Preview Modal...' });
        break;

      case 'mnc-prep':
        this.ps.openMncModal();
        this.history.push({ type: 'out', text: 'Opening Technical Interview Cheat Sheet Modal...' });
        break;

      case 'clear':
        this.history = [];
        this.inputVal = '';
        return;

      default:
        this.history.push({
          type: 'err',
          text: `bash: command not found: ${cmd}. Type "help" for a list of valid commands.`
        });
        break;
    }

    this.inputVal = '';
    this.shouldScroll = true;
  }

  runQuickCommand(cmd: string) {
    this.handleCommand(cmd);
  }

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
}
