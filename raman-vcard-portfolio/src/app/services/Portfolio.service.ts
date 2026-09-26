import { Injectable, signal } from '@angular/core';
import {
  Section,
  NavItem,
  NAV_ITEMS,
  ThemeColor,
  Achievement,
  Experience,
  SkillCategory,
  Project,
  SocialLink,
} from '../models/Portfolio';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  // ─── Reactive Signals & Navigation ──────────────────────────
  activeSection = signal<Section>('about');
  isDarkMode = signal<boolean>(true);
  themeColor = signal<ThemeColor>('#ffdb70');
  settingsPanelOpen = signal<boolean>(false);

  readonly navItems: NavItem[] = NAV_ITEMS;

  // ─── Personal Profile (Source of Truth) ─────────────────────
  name = 'Ramanjaneyulu Boya';
  shortName = 'Raman';
  titles = [
    'Java Full Stack Developer',
    'Microservices Engineer',
    'Angular + Spring Boot Specialist',
    'Multi-Tenant Architect',
  ];
  email = 'ramanms8688@gmail.com';
  phone = '+91 8688505451';
  location = 'Kurnool, AP, India';
  github = 'https://github.com/Raman-8688';
  linkedin = 'https://linkedin.com/in/b-ramanjaneyulu-155021258';
  yearsExp = '1+';
  currentEmployer = 'Winfocus Solutions';

  heroTagline = 'Building enterprise-grade microservices and multi-tenant platforms that scale.';
  heroSub =
    'Full Stack Developer specializing in <strong>Spring Boot Microservices</strong>, <strong>Angular SPAs</strong>, <strong>PostgreSQL Multi-Tenancy</strong>, and <strong>Docker/K8s Cloud Deployments</strong> — currently crafting a production Pharma platform at Winfocus Solutions.';

  socialLinks: SocialLink[] = [
    { icon: 'fab fa-github', url: 'https://github.com/Raman-8688', label: 'GitHub' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/b-ramanjaneyulu-155021258', label: 'LinkedIn' },
    { icon: 'fas fa-envelope', url: 'mailto:ramanms8688@gmail.com', label: 'Email' },
    { icon: 'fas fa-phone-alt', url: 'tel:+918688505451', label: 'Phone' },
  ];

  // ─── Key Achievements Counters ──────────────────────────────
  achievements: Achievement[] = [
    {
      icon: 'fas fa-train',
      value: 'Live',
      label: 'Hyderabad Metro Rail Project',
      color: '#7c3aed',
    },
    {
      icon: 'fas fa-layer-group',
      value: '10+',
      label: 'Microservices Built',
      color: '#00bcd4',
    },
    {
      icon: 'fas fa-database',
      value: '3',
      label: 'Enterprise DB Engines',
      color: '#059669',
    },
    {
      icon: 'fas fa-robot',
      value: 'AI',
      label: 'Hugging Face AI Integrated',
      color: '#ffdb70',
    },
  ];

  // ─── About Profile Data ──────────────────────────────────────
  aboutIntro =
    'I am a <strong>Java Full Stack Developer</strong> with 1+ year of hands-on industry experience building high-throughput production systems — from a <strong>live Hyderabad Metro Rail asset management system</strong> to a <strong>multi-tenant Pharma microservices platform</strong> — utilizing Spring Boot, Angular, PostgreSQL, and cloud containers.';

  aboutPoints = [
    {
      icon: 'fas fa-train',
      text: 'Contributed to <strong>AMS (Asset Management System)</strong> — a live client system actively used by <strong>Hyderabad Metro Rail</strong>. Engineered inventory screens, MSSQL stored procedures, indexes/synonyms, and production features based on direct client requirements. Tech: <strong>Angular · Java · Spring Boot · MSSQL</strong>.',
    },
    {
      icon: 'fas fa-capsules',
      text: 'Currently at <strong>Winfocus Solutions (since June 2024)</strong> building a production <strong>multi-tenant Pharma platform</strong> — separate microservices (Inventory, Billing, Users, Reports) with dynamic PostgreSQL schema-per-tenant isolation and <strong>multilanguage dynamic UI</strong>.',
    },
    {
      icon: 'fas fa-language',
      text: 'Developed an internal <strong>Multilanguage Converter Tool</strong> (Angular + AI) that automates Angular project localization — scans HTML/TS files, uses <strong>Hugging Face AI</strong> for batch translation, and generates database SQL INSERT queries.',
    },
    {
      icon: 'fas fa-network-wired',
      text: 'Proficient with <strong>Eureka Server, Spring Cloud Gateway, Spring Security, JWT, OAuth2</strong> — building resilient microservice meshes with centralized authentication and role-based access control.',
    },
    {
      icon: 'fas fa-database',
      text: 'Strong database expertise across <strong>PostgreSQL, MSSQL, MySQL</strong> — stored procedures, query optimization, indexing, synonyms, and multi-schema tenant isolation strategies.',
    },
  ];

  infoCards = [
    {
      icon: 'fas fa-calendar-check',
      label: 'Experience',
      value: '1+ Year (Full Stack)',
      bg: 'rgba(124, 58, 237, 0.1)',
      color: '#8b5cf6',
    },
    {
      icon: 'fas fa-building',
      label: 'Company',
      value: 'Winfocus Solutions (since June 2024)',
      bg: 'rgba(59, 130, 246, 0.1)',
      color: '#3b82f6',
    },
    {
      icon: 'fas fa-graduation-cap',
      label: 'Education',
      value: 'Newtons Inst. of Engineering (B.Tech)',
      bg: 'rgba(16, 185, 129, 0.1)',
      color: '#10b981',
    },
    {
      icon: 'fas fa-trophy',
      label: 'Scholarship',
      value: 'JSpiders Trainee Scholarship',
      bg: 'rgba(255, 219, 112, 0.1)',
      color: '#ffdb70',
    },
  ];

  // ─── Experience Timeline ─────────────────────────────────────
  experiences: Experience[] = [
    {
      company: 'Winfocus Solutions Pvt Ltd',
      role: 'Full Stack Developer',
      period: 'Jun 2024 – Present',
      location: 'Andhra Pradesh, India',
      type: 'Full Time',
      logo: 'fas fa-capsules',
      color: '#00bcd4',
      description:
        "Delivering production-grade multi-tenant Pharma Management System and an internal Multilanguage Dynamic Converter tool used across the organization's Angular + Java Microservices stack.",
      achievements: [
        'Built <strong>multi-tenant Pharma Management System</strong> — separate microservices for inventory, billing, user management, and reporting with PostgreSQL schema-per-tenant isolation',
        'Implemented <strong>multilanguage dynamic UI</strong> — labels, button names, placeholders, and field names driven from database, switchable per user preference at runtime',
        'Created a standalone <strong>Multilanguage Converter tool</strong> (Angular + Docker) — accepts project ZIP, parses HTML/TS files, converts static text to dynamic keys, and outputs CSV + SQL INSERT queries',
        'Integrated <strong>Hugging Face AI API</strong> for batch translation of UI labels into multiple target languages',
        'Configured <strong>Spring Security + Eureka + API Gateway</strong> for centralized routing, JWT authentication, and role-based access across services',
        'Containerized microservices using <strong>Docker + Kubernetes</strong> manifests for scalable cloud deployment',
      ],
      techUsed: [
        'Angular',
        'Java',
        'Spring Boot',
        'Microservices',
        'PostgreSQL',
        'Eureka',
        'API Gateway',
        'Spring Security',
        'Docker',
        'Kubernetes',
        'Hugging Face AI',
        'Git',
      ],
    },
    {
      company: 'AMS — Asset Management System (Hyderabad Metro)',
      role: 'Full Stack Developer',
      period: '2024',
      location: 'Hyderabad, India',
      type: 'Client Project',
      logo: 'fas fa-train',
      color: '#7c3aed',
      description:
        'Enterprise asset management system for Hyderabad Metro Rail — managing station assets across locations, categories, and groups. Built with Angular frontend, MSSQL database, and Spring Boot microservices backend.',
      achievements: [
        'Designed and developed <strong>inventory screens</strong> for asset tracking by location, category, layout group type, and group — used live in Hyderabad Metro stations',
        'Written <strong>stored procedures</strong> in MSSQL for complex asset queries, batch inserts, and audit logging',
        'Built <strong>Angular screen layouts</strong> for asset registration and filtering — location-based and category-based dynamic views',
        'Created <strong>database indexes and synonyms</strong> for optimized cross-schema query performance across services',
        'Worked on <strong>microservices architecture</strong> — Auth Service, Admin Service, Asset Register Service, and Common Library DTOs',
      ],
      techUsed: [
        'Angular',
        'Java',
        'Spring Boot',
        'MSSQL',
        'Stored Procedures',
        'API Gateway',
        'Git',
      ],
    },
    {
      company: 'JSpiders Training Institute',
      role: 'Java Full Stack Trainee',
      period: 'Jun 2024 – Jan 2025',
      location: 'Bangalore, India',
      type: 'Training Scholarship',
      logo: 'fas fa-graduation-cap',
      color: '#059669',
      description:
        'Earned competitive scholarship via examination. Mastered Core Java, Spring Boot, SQL, and Angular full-stack development.',
      achievements: [
        'Awarded <strong>scholarship via competitive examination</strong>',
        'Built <strong>Bank Management System</strong> — full-stack Spring Boot + MySQL',
        'Mastered <strong>Core Java, OOP, Collections, Streams, Lambdas</strong>',
        'Learned <strong>Microservices patterns</strong>: Eureka, Feign, Circuit Breaker',
      ],
      techUsed: [
        'Java',
        'Spring Boot',
        'MySQL',
        'HTML5',
        'CSS3',
        'JavaScript',
        'Angular',
      ],
    },
  ];

  // ─── Skill Categories ───────────────────────────────────────
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: 'fas fa-laptop-code',
      color: '#00bcd4',
      skills: [
        { name: 'Angular', percentage: 85 },
        { name: 'TypeScript', percentage: 82 },
        { name: 'HTML5 / CSS3', percentage: 90 },
        { name: 'RxJS', percentage: 75 },
      ],
    },
    {
      title: 'Backend Engineering',
      icon: 'fas fa-server',
      color: '#7c3aed',
      skills: [
        { name: 'Java', percentage: 88 },
        { name: 'Spring Boot', percentage: 85 },
        { name: 'Microservices', percentage: 82 },
        { name: 'REST APIs', percentage: 88 },
      ],
    },
    {
      title: 'Microservices Architecture',
      icon: 'fas fa-network-wired',
      color: '#ffdb70',
      skills: [
        { name: 'Eureka Server', percentage: 82 },
        { name: 'API Gateway', percentage: 80 },
        { name: 'Spring Security / JWT', percentage: 78 },
        { name: 'Multi-Tenant Architecture', percentage: 84 },
      ],
    },
    {
      title: 'Databases & SQL',
      icon: 'fas fa-database',
      color: '#059669',
      skills: [
        { name: 'PostgreSQL', percentage: 86 },
        { name: 'MSSQL / Stored Procedures', percentage: 80 },
        { name: 'MySQL', percentage: 84 },
        { name: 'Query Optimization & Synonyms', percentage: 80 },
      ],
    },
    {
      title: 'Cloud & DevOps Tools',
      icon: 'fas fa-cloud',
      color: '#f59e0b',
      skills: [
        { name: 'Docker', percentage: 78 },
        { name: 'Kubernetes', percentage: 72 },
        { name: 'Git / GitHub', percentage: 88 },
        { name: 'AWS Basics', percentage: 70 },
      ],
    },
  ];

  // ─── Projects Catalog (with Visual Images & Live Links) ────
  projects: Project[] = [
    {
      title: 'Multi-Tenant Pharma Platform with Multilanguage UI',
      institution: 'Winfocus Solutions Pvt Ltd',
      timeline: 'Jun 2024 – Present',
      techStack:
        'Angular · Spring Boot · Microservices · PostgreSQL · Eureka · API Gateway · Spring Security · Docker · Kubernetes',
      description:
        'Production-grade multi-tenant Pharma Management System with full microservices architecture and dynamic multilanguage UI — labels, placeholders, button names all switchable per user preference from the database.',
      problemSolved:
        'A single-schema monolith could not serve multiple pharmacy organizations securely. Additionally, the product needed to support multiple languages without code changes — labels needed to be database-driven and user-switchable.',
      features: [
        'Built separate <strong>Spring Boot microservices</strong> for Inventory, Billing, Users, and Reporting — each independently deployable with its own schema.',
        'Implemented <strong>multi-tenant schema routing</strong> — each organization login resolves to its own private PostgreSQL schema dynamically via DataSource routing.',
        'Built <strong>multilanguage dynamic UI</strong> — all Angular labels, field names, placeholders stored in DB; user selects preferred language and the UI re-renders with zero page reload.',
      ],
      highlights: [
        'Multi-tenant schema-per-org architecture',
        'Dynamic DB-driven multilanguage UI labels',
        'Eureka + API Gateway for service discovery',
        'Spring Security JWT with role-based access',
        'Docker + Kubernetes deployment',
      ],
      tags: ['microservices', 'angular', 'database'],
      skills: [
        { name: 'Spring Boot', level: 88 },
        { name: 'Angular', level: 85 },
        { name: 'Microservices', level: 84 },
      ],
      accent: '#00bcd4',
      badge: '💊 Pharma · Live',
      image: 'assets/images/project-pharma-platform.jpg',
      architecture:
        'Angular SPA → API Gateway → [Inventory | Billing | User | Report] Services → PostgreSQL (schema-per-tenant)',
      githubUrl: 'https://github.com/Raman-8688',
      liveUrl: 'https://raman-8688.github.io/portfolio-projects/',
      backendFrontendSeparation:
        'Decoupled Angular SPA with lazy loading communicating to isolated Spring Boot services via API Gateway.',
      dockerK8sUsage:
        'All microservices containerized; Kubernetes manages rolling deployments, pod autoscaling, ConfigMaps, and Secrets.',
      securityAuth:
        'Spring Security stateless JWT filter chain with role-based method-level authorization across all services.',
      cicdWorkflow:
        'Git version control; Docker image builds with Kubernetes manifest deployments per service.',
    },
    {
      title: 'Multilanguage Dynamic Converter Tool',
      institution: 'Winfocus Solutions Pvt Ltd — Internal Tooling',
      timeline: '2024 - 2025',
      techStack:
        'Angular · Hugging Face AI API · Docker · CSV / SQL Generation',
      description:
        'An internal developer tool that converts any existing Angular project into a fully dynamic multilanguage application — accepts a project ZIP, scans all HTML and TypeScript files, replaces static text with dynamic label keys, and outputs ready-to-import CSV + SQL INSERT queries.',
      problemSolved:
        'Converting large existing Angular projects to multilanguage support manually was expensive and error-prone. This tool automates the entire conversion — the developer specifies a pattern and the tool handles scanning, replacing, and generating database entries.',
      features: [
        'Built an <strong>AI-powered backend</strong> that unzips project folders, traverses all HTML/TS files, and identifies static text using configurable pattern matching.',
        'Integrated <strong>Hugging Face AI API</strong> for batch auto-translation — one label generates values for all configured languages in a single API call.',
        'Generates <strong>ZIP output</strong> containing converted project files + CSV files + SQL INSERT queries ready to run directly in the target database.',
      ],
      highlights: [
        'Converts entire Angular project ZIP automatically',
        'AI-powered batch translation via Hugging Face',
        'Outputs SQL INSERT queries + CSV for DB import',
        'Configurable text pattern matching',
      ],
      tags: ['angular', 'microservices'],
      skills: [
        { name: 'Angular', level: 85 },
        { name: 'AI Integration', level: 80 },
      ],
      accent: '#ffdb70',
      badge: '🌐 AI · Internal Tool',
      image: 'assets/images/project-multilanguage-tool.jpg',
      architecture:
        'Angular Upload UI → Backend API → Hugging Face AI Batch Translator → CSV/SQL Generator → Output ZIP',
      githubUrl: 'https://github.com/Raman-8688',
      liveUrl: 'https://raman-8688.github.io/portfolio-projects/',
      backendFrontendSeparation:
        'Angular upload/config frontend; backend handles file scanning and Hugging Face API orchestration.',
      dockerK8sUsage:
        'Entire tool packaged as Docker container — team runs it with docker-compose.',
      securityAuth:
        'Secured within company network; input validation on uploaded ZIP contents.',
      cicdWorkflow:
        'Docker-based deployment with version controlled release branches.',
    },
    {
      title: 'AMS — Asset Management System (Hyderabad Metro)',
      institution: 'Client Project · Live Production System',
      timeline: '2024',
      techStack:
        'Angular · Java · Spring Boot · Microservices · MSSQL · Stored Procedures · API Gateway',
      description:
        'Live enterprise asset management system actively used by Hyderabad Metro Rail — tracking and managing station assets across locations, categories, layout groups and group types. Built on Java Spring Boot microservices with MSSQL and an Angular frontend.',
      problemSolved:
        'Hyderabad Metro had no centralized system to track physical assets across stations by location and category. Manual tracking caused errors and audit failures. This system is now live in production at metro stations.',
      features: [
        'Designed and implemented <strong>inventory screens</strong> for asset registration and filtering — by location, category, layout group type, and group.',
        'Written <strong>MSSQL stored procedures</strong> for complex asset queries, batch inserts, and audit trail logging. Created optimized database <strong>indexes and synonyms</strong>.',
        'Delivered <strong>production bug fixes and new screen implementations</strong> based on direct client requirements.',
      ],
      highlights: [
        '🚇 Live system used at Hyderabad Metro stations',
        'MSSQL stored procedures + indexes + synonyms',
        'Asset filtering: location, category, layout group',
        'Microservices: Auth + Admin + Asset Register',
      ],
      tags: ['angular', 'microservices', 'database'],
      skills: [
        { name: 'Angular', level: 85 },
        { name: 'MSSQL', level: 82 },
        { name: 'Stored Procedures', level: 80 },
      ],
      accent: '#7c3aed',
      badge: '🚇 Metro · Live Production',
      image: 'assets/images/project-ams-metro.jpg',
      architecture:
        'Angular UI → API Gateway → [Auth | Admin | Asset Register] Services (Spring Boot) → MSSQL',
      githubUrl: 'https://github.com/Raman-8688',
      liveUrl: 'https://raman-8688.github.io/portfolio-projects/',
      backendFrontendSeparation:
        'Angular frontend with dynamic inventory grid layouts; Java Spring Boot microservices expose REST APIs.',
      dockerK8sUsage:
        'Microservices deployed individually on server environments.',
      securityAuth:
        'Auth Service handles login; role-based access enforced at API Gateway level.',
      cicdWorkflow:
        'Git version control; services independently built and deployed to client environment.',
    },
    {
      title: 'Enterprise Order Management System',
      institution: 'Personal Project · Microservices Architecture',
      timeline: '2025',
      techStack:
        'Java · Spring Boot · Angular · Kafka · Eureka · API Gateway · Resilience4j · PostgreSQL · Docker · Kubernetes',
      description:
        'Distributed order management platform built on a full enterprise microservices stack. Separate services for Auth, Users, Products, Inventory, Orders, Payments, Notifications, and Invoices — communicating via Kafka events and Feign sync calls.',
      problemSolved:
        'A monolithic order system cannot independently scale payment processing, inventory, or notifications. This architecture isolates each domain with its own database and uses event-driven decoupling.',
      features: [
        '<strong>8 independent microservices</strong> — Auth, Users, Products, Inventory, Orders, Payments, Notifications, Invoices — with database-per-service pattern.',
        '<strong>Apache Kafka</strong> for async event streaming (order placed → inventory reserved → payment processed → notification sent).',
        '<strong>Feign clients + Resilience4j</strong> for synchronous inter-service calls with circuit breaker and fallback handling.',
      ],
      highlights: [
        '8 microservices each with own PostgreSQL DB',
        'Kafka event-driven order pipeline',
        'Feign + Resilience4j circuit breaker',
        'Eureka service discovery + Config Server',
      ],
      tags: ['microservices', 'angular', 'database'],
      skills: [
        { name: 'Spring Boot', level: 88 },
        { name: 'Microservices', level: 86 },
        { name: 'Kafka', level: 80 },
      ],
      accent: '#f59e0b',
      badge: '⚡ Kafka · Enterprise Stack',
      image: 'assets/images/project-order-management.jpg',
      architecture:
        'Angular UI → Spring Gateway (JWT) → Eureka → [8 Microservices] → Kafka + Feign → PostgreSQL',
      githubUrl: 'https://github.com/Raman-8688/enterprise-order-management-system',
      liveUrl: 'https://raman-8688.github.io/portfolio-projects/',
      backendFrontendSeparation:
        'Angular SPA communicates only through API Gateway.',
      dockerK8sUsage:
        'Dockerized services with Kubernetes manifests for Deployments and Services.',
      securityAuth:
        'Spring Cloud Gateway JWT filter validates request tokens.',
      cicdWorkflow:
        'GitHub repository with per-service modules and Docker Compose local stack.',
    },
  ];

  // ─── Actions ────────────────────────────────────────────────
  navigateTo(section: Section): void {
    this.activeSection.set(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleDarkMode(): void {
    this.isDarkMode.update((v) => !v);
    if (this.isDarkMode()) {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }

  setThemeColor(color: ThemeColor): void {
    this.themeColor.set(color);
    document.documentElement.style.setProperty('--theme-color', color);
    document.documentElement.style.setProperty('--orange-yellow-crayola', color);
    document.documentElement.style.setProperty('--accent-color', color);
  }

  toggleSettings(): void {
    this.settingsPanelOpen.update((v) => !v);
  }
}