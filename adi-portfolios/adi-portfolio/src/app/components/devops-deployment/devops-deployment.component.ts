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
    { type: 'sys', text: 'Adi DevOS v2.4 Terminal [Type "help" to view available commands]' },
    { type: 'sys', text: 'System status: HEALTHY (Spring Boot Microservices Active · PhonePe UPI Webhooks UP)' }
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
      title: 'Jenkins CI/CD Build',
      icon: 'fas fa-tasks',
      status: 'success',
      desc: 'Lint rules checked, Maven compile executed, and standard JUnit unit tests passed.'
    },
    {
      title: 'AWS Cloud Packaging',
      icon: 'fab fa-aws',
      status: 'success',
      desc: 'Maven build packaging executable Spring Boot JAR and deploying to AWS EC2 & S3 storage.'
    },
    {
      title: 'Tomcat Deployment',
      icon: 'fas fa-server',
      status: 'success',
      desc: 'Tomcat web server executes zero-downtime rolling update across active production nodes.'
    }
  ];

  pods = [
    { name: 'retail-pos-service-1', status: 'Healthy', color: '#10b981', uptime: '99.9%' },
    { name: 'transport-logistics-2', status: 'Healthy', color: '#10b981', uptime: '99.9%' },
    { name: 'phonepe-payment-gateway', status: 'Healthy', color: '#10b981', uptime: '99.9%' }
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
  • architecture  : Show enterprise microservices topology summary
  • projects      : List production projects (PhonePe Retail Hub, Fleet Logistics, OFBiz Railways ERP)
  • experience    : Show employment summary (10+ Years Exp)
  • curl /health  : Test microservice cluster health endpoint
  • docker-compose: Simulate container & Tomcat service deployment pipeline
  • export-resume : Open ATS 1-Page Printable Resume modal
  • mnc-prep      : Open Technical Interview Cheat Sheet modal
  • clear         : Clear terminal console output`
        });
        break;

      case 'skills':
        this.history.push({
          type: 'out',
          text: `Backend  : Java, Spring Boot, Microservices, Spring Security, Apache OFBiz, OpenTaps, MyBatis, REST APIs, PhonePe UPI
Frontend : Angular, TypeScript, HTML5, CSS3, JavaScript, Agora Live Video SDK, WhatsApp Web API
Database : PostgreSQL, Oracle, Query Optimization (60% Speedup), Schema Design
Tools    : AWS (EC2, S3), Git, Maven, Jenkins CI/CD, Tomcat, Postman`
        });
        break;

      case 'architecture':
        this.history.push({
          type: 'out',
          text: `[TOPOLOGY]: Angular UI (Client) ➔ Spring Security REST API Layer ➔ Microservices Mesh ➔ PhonePe UPI / Agora RTC ➔ PostgreSQL + Oracle DB`
        });
        break;

      case 'projects':
        this.history.push({
          type: 'out',
          text: `1. E-Commerce & Retail Admin Hub with PhonePe UPI Integration
2. Transportation & Ride Fleet Logistics Platform (WhatsApp Automated Alerts)
3. Apache OFBiz Railway ERP & Warehouse Management System (South Central & Southern Railways)
4. Real-Time Video Calling & Live Streaming Merchant Hub (Agora RTC SDK)`
        });
        break;

      case 'experience':
        this.history.push({
          type: 'out',
          text: `• My Hub Technologies Ltd (May 2023 – Present) | Senior Java Developer
• Winfocus Solutions Pvt. Ltd. (Sep 2016 – Apr 2023) | Software Engineer
• Education: JNTU University, Anantapur (B.E. Computer Science)`
        });
        break;

      case 'curl /health':
        this.history.push({
          type: 'out',
          text: `HTTP/1.1 200 OK
{
  "status": "UP",
  "components": {
    "springBootApp": { "status": "UP" },
    "dbPostgres": { "status": "UP", "activeConnections": 45 },
    "dbOracle": { "status": "UP" },
    "phonepeGateway": { "status": "UP", "webhooks": "ACTIVE" },
    "agoraVideoRTC": { "status": "UP" }
  }
}`
        });
        break;

      case 'docker-compose':
        this.history.push({
          type: 'out',
          text: `[DEPLOY]: Deploying enterprise modules...
✔ Container e-commerce-pos       Started (Port 8080)
✔ Container transport-fleet     Started (Port 8081)
✔ Container phonepe-gateway     Started (Port 8082)
✔ Container ofbiz-erp-railway   Started (Port 8083)
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
