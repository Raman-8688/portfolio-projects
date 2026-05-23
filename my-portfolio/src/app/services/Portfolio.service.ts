import { Injectable, signal } from '@angular/core';
import { Section, ThemeColor, Achievement, Experience, SkillCategory, Project, SocialLink } from '../models/Portfolio';


@Injectable({ providedIn: 'root' })
export class PortfolioService {

  // ─── Reactive Signals ───────────────────────────────────────
  activeSection = signal<Section>('home');
  isDarkMode = signal<boolean>(false);
  themeColor = signal<ThemeColor>('#00bcd4');
  settingsPanelOpen = signal<boolean>(false);

  // ─── Personal Info ──────────────────────────────────────────
  name = 'Ramanjaneyulu Boya';
  shortName = 'Raman';
  titles = [
    'Full Stack Developer',
    'Microservices Architect',
    'Spring Boot Expert',
    'Angular Developer',
    'Cloud & DevOps Engineer',
    'Database Specialist'
  ];
  email = 'ramanms8688@gmail.com';
  phone = '8688505451';
  location = 'Kurnool, Andhra Pradesh';
  github = 'https://github.com/Raman-8688';
  linkedin = 'https://linkedin.com/in/b-ramanjaneyulu-155021258';
  yearsExp = '1+';

  // ─── Hero Intro (concise, powerful) ─────────────────────────
  heroTagline = 'Building enterprise-grade systems that scale.';
  heroSub = 'Full Stack Developer specializing in <strong>Microservices Architecture</strong>, <strong>Spring Boot</strong>, <strong>Angular</strong> and <strong>Cloud Deployments</strong> — currently crafting a multi-tenant Pharma platform at Winfocus Solutions.';

  // ─── Stats / Achievements counters ──────────────────────────
  achievements: Achievement[] = [
    { icon: 'fas fa-code-branch', value: '3+',    label: 'Projects Delivered',     color: '#00bcd4' },
    { icon: 'fas fa-layer-group', value: '10+',   label: 'Microservices Built',     color: '#7c3aed' },
    { icon: 'fas fa-database',    value: '5+',    label: 'DB Schemas Designed',     color: '#059669' },
    { icon: 'fas fa-cloud',       value: 'AWS',   label: 'Cloud Deployments',       color: '#f59e0b' }
  ];

  // ─── About ──────────────────────────────────────────────────
  aboutIntro = 'I am a <strong>Full Stack Developer</strong> with hands-on experience building production-grade <strong>Microservices architectures</strong> deployed on <strong>AWS</strong> using <strong>Docker & Kubernetes</strong>.';

  aboutPoints = [
    { icon: 'fas fa-building',       text: 'Working at <strong>Winfocus Solutions Pvt Ltd</strong> — architecting a full-fledged multi-tenant Pharma platform with Angular + Java microservices + PostgreSQL.' },
    { icon: 'fas fa-network-wired',  text: 'Implemented <strong>Eureka Server, API Gateway, Spring Security, OAuth2</strong> — building resilient service meshes with global exception handling.' },
    { icon: 'fas fa-users-cog',      text: 'Designed a <strong>Multi-Tenant architecture</strong> — single application serving multiple organizations via dynamic schema routing (public/private schema isolation).' },
    { icon: 'fas fa-cloud-upload-alt', text: 'Deployed applications using <strong>Docker, Kubernetes</strong> and <strong>AWS</strong> — containerized microservices with CI/CD pipelines.' },
    { icon: 'fas fa-database',       text: 'Deep expertise in <strong>PostgreSQL, MySQL, PL/SQL</strong> — stored procedures, query optimization, multi-schema data isolation strategies.' }
  ];

  infoCards = [
    { icon: 'fas fa-map-marker-alt',  label: 'Location',   value: 'Kurnool, Andhra Pradesh',       bg: '#e0f7fa', color: '#00acc1' },
    { icon: 'fas fa-building',        label: 'Company',    value: 'Winfocus Solutions Pvt Ltd',     bg: '#e8f5e9', color: '#43a047' },
    { icon: 'fas fa-graduation-cap',  label: 'Education',  value: 'Newtons Institute of Engineering', bg: '#fff3e0', color: '#fb8c00' },
    { icon: 'fas fa-trophy',          label: 'Scholarship', value: 'JSpiders — Competitive Exam',   bg: '#f3e5f5', color: '#8e24aa' },
    { icon: 'fas fa-bullseye',        label: 'Goal',       value: 'Top MNC in 1–1.5 years',         bg: '#fce4ec', color: '#e91e63' }
  ];

  // ─── Experience Timeline ─────────────────────────────────────
  experiences: Experience[] = [
    {
      company: 'Winfocus Solutions Pvt Ltd',
      role: 'Full Stack Developer',
      period: 'Jan 2025 – Present',
      location: 'Andhra Pradesh, India',
      type: 'Full Time',
      logo: 'fas fa-capsules',
      color: '#00bcd4',
      description: 'Architecting and delivering a production-grade multi-tenant Pharma Management System using Angular + Java Microservices + PostgreSQL.',
      achievements: [
        'Built <strong>full-fledged microservices</strong> Pharma application — separate services for inventory, billing, users, reporting',
        'Implemented <strong>Multi-Tenant architecture</strong> — dynamic schema routing per organization login (public DB for config, private schema per tenant)',
        'Integrated <strong>Eureka Server + API Gateway</strong> for service discovery and centralized routing',
        'Configured <strong>Spring Security + Auth</strong> with role-based access control across all services',
        'Implemented <strong>Global Exception Handling</strong> across all microservices for consistent error responses',
        'Deployed application using <strong>Docker containers</strong> and managed with <strong>Kubernetes</strong>',
        'Angular frontend with lazy-loaded modules, reactive forms, interceptors, guards'
      ],
      techUsed: ['Angular', 'Java', 'Spring Boot', 'Microservices', 'PostgreSQL', 'Eureka', 'API Gateway', 'Spring Security', 'Docker', 'Kubernetes', 'AWS']
    },
    {
      company: 'Metro Project',
      role: 'Full Stack Developer',
      period: '2024',
      location: 'India',
      type: 'Project',
      logo: 'fas fa-train',
      color: '#7c3aed',
      description: 'Developed metro operations management system with real-time tracking, scheduling and backend API integrations.',
      achievements: [
        'Built <strong>real-time schedule management</strong> with Spring Boot REST APIs',
        'Developed Angular frontend with <strong>dynamic dashboards</strong> and route visualization',
        'Integrated <strong>PostgreSQL</strong> for fare and schedule data management',
        'Implemented <strong>role-based dashboards</strong> for admin, operator and passenger portals'
      ],
      techUsed: ['Angular', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Java']
    },
    {
      company: 'JSpiders Training Institute',
      role: 'Java Full Stack Trainee',
      period: 'Jun 2024 – Jan 2025',
      location: 'Bangalore, India',
      type: 'Training',
      logo: 'fas fa-graduation-cap',
      color: '#059669',
      description: 'Earned competitive scholarship. Built Bank Management System as capstone project. Mastered Java, Spring Boot, SQL, and Angular.',
      achievements: [
        'Awarded <strong>scholarship via competitive examination</strong>',
        'Built <strong>Bank Management System</strong> — full-stack Spring Boot + SQL',
        'Mastered <strong>Core Java, OOP, Collections, Streams, Lambdas</strong>',
        'Learned <strong>Microservices patterns</strong>: Eureka, Feign, Circuit Breaker'
      ],
      techUsed: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Angular']
    }
  ];

  // ─── Skills ─────────────────────────────────────────────────
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: 'fas fa-laptop-code',
      color: '#00bcd4',
      skills: [
        { name: 'Angular', percentage: 80 },
        { name: 'TypeScript', percentage: 78 },
        { name: 'HTML5 / CSS3', percentage: 90 },
        { name: 'RxJS', percentage: 70 }
      ]
    },
    {
      title: 'Backend',
      icon: 'fas fa-server',
      color: '#7c3aed',
      skills: [
        { name: 'Java', percentage: 85 },
        { name: 'Spring Boot', percentage: 82 },
        { name: 'Microservices', percentage: 78 },
        { name: 'REST APIs', percentage: 85 }
      ]
    },
    {
      title: 'Microservices & Architecture',
      icon: 'fas fa-network-wired',
      color: '#e91e63',
      skills: [
        { name: 'Eureka Server', percentage: 80 },
        { name: 'API Gateway', percentage: 78 },
        { name: 'Spring Security', percentage: 75 },
        { name: 'Multi-Tenant Design', percentage: 80 }
      ]
    },
    {
      title: 'Database',
      icon: 'fas fa-database',
      color: '#059669',
      skills: [
        { name: 'PostgreSQL', percentage: 85 },
        { name: 'MySQL', percentage: 82 },
        { name: 'PL/SQL', percentage: 75 },
        { name: 'Query Optimization', percentage: 78 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      color: '#f59e0b',
      skills: [
        { name: 'Docker', percentage: 75 },
        { name: 'Kubernetes', percentage: 70 },
        { name: 'AWS', percentage: 72 },
        { name: 'Git / GitHub', percentage: 85 }
      ]
    },
    {
      title: 'Architecture Patterns',
      icon: 'fas fa-sitemap',
      color: '#ff5722',
      skills: [
        { name: 'Microservices', percentage: 78 },
        { name: 'Multi-Tenancy', percentage: 80 },
        { name: 'Design Patterns', percentage: 75 },
        { name: 'CI/CD Concepts', percentage: 70 }
      ]
    }
  ];

  // ─── Tech Tags (for skills visual) ──────────────────────────
  techTags = [
    { name: 'Java',           color: '#f59e0b' },
    { name: 'Spring Boot',    color: '#6db33f' },
    { name: 'Angular',        color: '#dd0031' },
    { name: 'TypeScript',     color: '#3178c6' },
    { name: 'PostgreSQL',     color: '#336791' },
    { name: 'MySQL',          color: '#00758f' },
    { name: 'Docker',         color: '#2496ed' },
    { name: 'Kubernetes',     color: '#326ce5' },
    { name: 'AWS',            color: '#ff9900' },
    { name: 'Eureka',         color: '#6db33f' },
    { name: 'API Gateway',    color: '#7c3aed' },
    { name: 'Spring Security',color: '#6db33f' },
    { name: 'Microservices',  color: '#e91e63' },
    { name: 'PL/SQL',         color: '#f80000' },
    { name: 'Git',            color: '#f05032' },
    { name: 'REST APIs',      color: '#00bcd4' }
  ];

  // ─── Projects ───────────────────────────────────────────────
  projects: Project[] = [
    {
      title: 'Multi-Tenant Pharma Platform',
      institution: 'Winfocus Solutions Pvt Ltd',
      timeline: 'Jan 2025 – Present',
      techStack: 'Angular · Java · Spring Boot · Microservices · PostgreSQL · Docker · K8s',
      description: 'Enterprise-grade multi-tenant Pharma Management System. Multiple organizations share one application with complete data isolation per tenant.',
      highlights: [
        '🏗️ Microservices architecture — 10+ independent services',
        '🔐 Multi-tenant: dynamic schema routing per org login',
        '🛡️ Spring Security + OAuth2 + Role-based access',
        '🌐 Eureka + API Gateway for service mesh',
        '🐳 Dockerized & deployed on Kubernetes + AWS',
        '⚡ Global Exception Handling across all services'
      ],
      tags: ['angular', 'microservices', 'cloud', 'database'],
      skills: [
        { name: 'Angular', level: 78 },
        { name: 'Microservices', level: 82 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Docker/K8s', level: 74 }
      ],
      accent: '#00bcd4',
      badge: '🏆 Production'
    },
    {
      title: 'Microservices Architecture Project',
      institution: 'Personal Project',
      timeline: '2024',
      techStack: 'Spring Boot · Eureka · API Gateway · Spring Security · Docker',
      description: 'Personal deep-dive microservices implementation showcasing all enterprise patterns — service discovery, gateway routing, auth, circuit breakers.',
      highlights: [
        '🔍 Eureka Server for service discovery',
        '🚪 API Gateway with routing and filters',
        '🔒 Spring Security with JWT auth',
        '💥 Global exception handling strategy',
        '🐳 Full Docker containerization',
        '📊 Centralized logging and monitoring'
      ],
      tags: ['microservices', 'cloud'],
      skills: [
        { name: 'Spring Boot', level: 84 },
        { name: 'Eureka/Gateway', level: 80 },
        { name: 'Spring Security', level: 76 },
        { name: 'Docker', level: 74 }
      ],
      accent: '#7c3aed',
      badge: '⚙️ Architecture'
    },
    {
      title: 'Metro Operations System',
      institution: 'Work Project',
      timeline: '2024',
      techStack: 'Angular · Spring Boot · PostgreSQL · REST APIs',
      description: 'Metro operations management with real-time scheduling, role-based portals for admin, operator and passenger with dynamic dashboards.',
      highlights: [
        '🚇 Real-time schedule and route management',
        '👥 Multi-role dashboards (Admin/Operator/Passenger)',
        '📊 Dynamic reporting and analytics',
        '🔗 RESTful API integration with Angular',
        '🗃️ PostgreSQL with optimized queries'
      ],
      tags: ['angular', 'database'],
      skills: [
        { name: 'Angular', level: 78 },
        { name: 'Spring Boot', level: 80 },
        { name: 'PostgreSQL', level: 82 }
      ],
      accent: '#7c3aed',
      badge: '🚇 Transport'
    },
    {
      title: 'Bank Management System',
      institution: 'JSpiders Capstone',
      timeline: 'Oct 2024 – Jan 2025',
      techStack: 'Java · Spring Boot · MySQL · HTML/CSS/JS',
      description: 'Full-stack banking application with account management, transactions, validations, and complete backend Spring Boot + SQL integration.',
      highlights: [
        '🏦 Account creation and management',
        '💳 Deposit, withdrawal, transfer features',
        '✅ Form validations and error handling',
        '🗃️ MySQL with stored procedures',
        '🔒 Basic authentication and session management'
      ],
      tags: ['database'],
      skills: [
        { name: 'Java', level: 78 },
        { name: 'Spring Boot', level: 74 },
        { name: 'MySQL', level: 82 }
      ],
      accent: '#059669',
      badge: '🏦 Finance'
    },
    {
      title: 'Cricket Player Prediction AI',
      institution: 'College Final Project',
      timeline: 'Nov 2023 – May 2024',
      techStack: 'Angular · Python · Scikit-learn · SQL · REST APIs',
      description: 'ML-powered sports analytics predicting cricket player performance using multiple algorithms with Angular dashboard and SQL data pipeline.',
      highlights: [
        '🏏 Player performance prediction using ML',
        '🤖 Multiple Scikit-learn algorithms compared',
        '📊 Angular dashboard with dynamic charts',
        '🗃️ SQL data pipeline for player stats',
        '📈 Accuracy metrics and model evaluation'
      ],
      tags: ['angular', 'database'],
      skills: [
        { name: 'Angular', level: 68 },
        { name: 'Python/ML', level: 72 },
        { name: 'PostgreSQL', level: 76 }
      ],
      accent: '#ff5722',
      badge: '🤖 AI/ML'
    }
  ];

  // ─── Social Links ────────────────────────────────────────────
  socialLinks: SocialLink[] = [
    { icon: 'fab fa-linkedin',  url: 'https://linkedin.com/in/b-ramanjaneyulu-155021258', label: 'LinkedIn' },
    { icon: 'fab fa-github',    url: 'https://github.com/Raman-8688',                      label: 'GitHub'   },
    { icon: 'fab fa-twitter',   url: '#',                                                   label: 'Twitter'  },
    { icon: 'fab fa-youtube',   url: '#',                                                   label: 'YouTube'  }
  ];

  themeColors = [
    '#00bcd4', '#4db6ac', '#2196F3', '#7c3aed',
    '#e91e63', '#FF5722', '#009688', '#3F51B5',
    '#f59e0b', '#059669'
  ];

  // ─── Actions ────────────────────────────────────────────────
  navigateTo(section: Section): void {
    this.activeSection.set(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleDarkMode(): void {
    this.isDarkMode.update(v => !v);
  }

  setThemeColor(color: ThemeColor): void {
    this.themeColor.set(color);
    document.documentElement.style.setProperty('--theme-color', color);
  }

  toggleSettings(): void {
    this.settingsPanelOpen.update(v => !v);
  }
}