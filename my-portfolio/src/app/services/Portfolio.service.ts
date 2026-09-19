import { Injectable, signal } from '@angular/core';
import {
  Section,
  ThemeColor,
  Achievement,
  Experience,
  SkillCategory,
  Project,
  SocialLink,
  ArchitectureNode,
  AboutPoint,
  SkillItem,
  SkillCategoryGroup,
  ArchitectureNodeDetail,
  MncQnA,
  AtsResume,
} from '../models/Portfolio';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  // ─── Reactive Signals ───────────────────────────────────────
  activeSection = signal<Section>('home');
  isDarkMode = signal<boolean>(true);
  themeColor = signal<ThemeColor>('#3b82f6');

  settingsPanelOpen = signal<boolean>(false);
  mncModalOpen = signal<boolean>(false);
  resumeModalOpen = signal<boolean>(false);

  openMncModal(): void {
    this.mncModalOpen.set(true);
  }
  closeMncModal(): void {
    this.mncModalOpen.set(false);
  }
  openResumeModal(): void {
    this.resumeModalOpen.set(true);
  }
  closeResumeModal(): void {
    this.resumeModalOpen.set(false);
  }

  // ─── Personal Info ──────────────────────────────────────────
  name = 'Ramanjaneyulu Boya';
  shortName = 'Raman';
  titles = [
    'Java Full Stack Developer',
    'Microservices Developer',
    'Angular + Spring Boot Engineer',
  ];
  email = 'ramanms8688@gmail.com';
  phone = '+91 8688505451';
  location = 'Kurnool, Andhra Pradesh, India';
  github = 'https://github.com/Raman-8688';
  linkedin = 'https://linkedin.com/in/b-ramanjaneyulu-155021258';
  yearsExp = '1+';
  resumeUrl = 'assets/resume.pdf';
  profileImage = 'assets/profile.png?v=2';

  // ─── Hero Intro (concise, powerful) ─────────────────────────
  heroTagline = 'Building enterprise applications with Java, Spring Boot, Microservices, Angular and SQL.';
  heroSub =
    'Java Full Stack Developer with hands-on enterprise experience building and maintaining applications using <strong>Java 17</strong>, <strong>Spring Boot 3.x</strong>, <strong>REST APIs</strong>, <strong>Microservices</strong>, <strong>Angular 19</strong>, and <strong>relational databases (PostgreSQL & MSSQL)</strong> — delivering clean backend services and production reliability.';

  // ─── Stats / Achievements counters ──────────────────────────
  achievements: Achievement[] = [
    {
      icon: 'fas fa-train',
      value: 'Live Client',
      label: 'Hyderabad Metro AMS',
      color: '#7c3aed',
    },
    {
      icon: 'fas fa-layer-group',
      value: '10+',
      label: 'Microservices Mesh',
      color: '#00bcd4',
    },
    {
      icon: 'fas fa-database',
      value: '3 Engines',
      label: 'Postgres · MSSQL · MySQL',
      color: '#059669',
    },
    {
      icon: 'fas fa-rocket',
      value: 'Live Deployed',
      label: 'Production & Cloud Apps',
      color: '#ec4899',
    },
  ];

  // ─── About ──────────────────────────────────────────────────
  aboutIntro =
    'I’m a <strong>Java Full Stack Developer</strong> with hands-on experience building, enhancing, and maintaining enterprise applications using <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>REST APIs</strong>, <strong>Microservices</strong>, <strong>Angular</strong>, and <strong>relational databases</strong>.<br><br>My experience includes working on real-world enterprise applications (including the <strong>Hyderabad Metro Rail Asset Management System</strong>), investigating and resolving production defects, optimizing database stored procedures, and developing clean backend services. I also build independent distributed systems to strengthen expertise in <strong>Apache Kafka</strong>, <strong>Docker</strong>, and <strong>event-driven architectures</strong>.';

  aboutPoints: AboutPoint[] = [
    {
      icon: 'fas fa-train',
      title: 'Hyderabad Metro Asset Management System (AMS)',
      text: 'Delivered station inventory tracking screens, high-performance MSSQL stored procedures, database indexes & synonyms, and resolved production bug tickets for live transit infrastructure.',
    },
    {
      icon: 'fas fa-server',
      title: 'Enterprise Microservices & REST APIs',
      text: 'Developed and maintained Java 17 / Spring Boot 3 backend services with Spring Cloud Gateway routing, Eureka service discovery, and role-based access control.',
    },
    {
      icon: 'fas fa-database',
      title: 'Multi-Tenant Database Architecture',
      text: 'Implemented dynamic schema-per-tenant PostgreSQL database routing, ensuring strict organizational data isolation across multi-tenant SaaS environments.',
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Modern Angular & Full-Stack PWA',
      text: 'Engineered responsive interfaces in Angular 19 using standalone components, reactive signals, and Progressive Web App (PWA) offline capabilities (MemoryVerse).',
    },
  ];

  infoCards = [
    {
      icon: 'fas fa-briefcase',
      label: 'Experience',
      value: '1+ Years (Java Full Stack)',
      bg: 'rgba(139, 92, 246, 0.12)',
      color: '#8b5cf6',
    },
    {
      icon: 'fas fa-building',
      label: 'Current Employer',
      value: 'Winfocus Solutions Pvt Ltd',
      bg: 'rgba(59, 130, 246, 0.12)',
      color: '#3b82f6',
    },
    {
      icon: 'fas fa-graduation-cap',
      label: 'Education',
      value: 'Newtons Inst. of Engineering',
      bg: 'rgba(16, 185, 129, 0.12)',
      color: '#10b981',
    },
    {
      icon: 'fas fa-award',
      label: 'Merit Award',
      value: 'JSpiders Exam Scholarship',
      bg: 'rgba(245, 158, 11, 0.12)',
      color: '#f59e0b',
    },
  ];

  // ─── Experience Timeline ─────────────────────────────────────
  experiences: Experience[] = [
    {
      company: 'Winfocus Solutions Pvt Ltd',
      role: 'Java Full Stack Developer',
      period: 'Jun 2025 – Present',
      location: 'Secunderabad, Telangana, India',
      type: 'Full Time',
      badge: 'Current Role',
      logo: 'fas fa-briefcase',
      color: '#00bcd4',
      description:
        "Developing and maintaining multi-tenant enterprise software and backend microservices using Java 17, Spring Boot 3, PostgreSQL, and Angular 19.",
      achievements: [
        'Developed and maintained <strong>Java 17 & Spring Boot 3 application components</strong> (Inventory, Billing, User Management) communicating via REST APIs.',
        'Implemented <strong>PostgreSQL dynamic schema-per-tenant isolation</strong> using custom DataSource routing to ensure organizational data boundaries.',
        'Built responsive <strong>Angular 19 user interface screens</strong> with reactive forms, data tables, and database-driven multilanguage labels.',
        'Investigated and resolved <strong>production defect tickets</strong>, API latency bottlenecks, and customer-reported issues.',
        'Configured <strong>Spring Cloud API Gateway</strong> with JWT filter chains for centralized routing and role-based access control (RBAC).',
        'Containerized services using <strong>Docker</strong> with automated continuous deployment across Linux VMs.',
      ],
      techUsed: [
        'Java 17',
        'Spring Boot 3',
        'Microservices',
        'Angular 19',
        'PostgreSQL',
        'REST APIs',
        'Spring Cloud Gateway',
        'Spring Security JWT',
        'Docker',
        'Git',
      ],
    },
    {
      company: 'AMS — Asset Management System (Hyderabad Metro Rail)',
      role: 'Java Full Stack Developer',
      period: '2024',
      location: 'Hyderabad, India',
      type: 'Live Client Project',
      badge: 'Production Client',
      logo: 'fas fa-train',
      color: '#8b5cf6',
      description:
        'Enterprise transit asset tracking platform deployed live across Hyderabad Metro Rail stations and operational maintenance hubs.',
      achievements: [
        'Contributed to the <strong>Hyderabad Metro Asset Management System</strong> — developed station inventory tracking and layout management screens.',
        'Authored high-performance <strong>MSSQL Stored Procedures</strong> for complex batch queries, location audits, and historical logging.',
        'Created database <strong>Indexes & Synonyms</strong> optimizing query execution speed by over 45% across large transit asset tables.',
        'Investigated and resolved <strong>application bugs and layout enhancements</strong> based directly on client stakeholder requirements.',
        'Integrated Angular frontend screens with decoupled Spring Boot backend services via API Gateway.',
      ],
      techUsed: [
        'Java',
        'Spring Boot',
        'Angular',
        'MSSQL',
        'Stored Procedures',
        'Indexes & Synonyms',
        'API Gateway',
        'Git',
      ],
    },
    {
      company: 'JSpiders Training Institute',
      role: 'Java Full Stack Specialist Trainee',
      period: 'Jun 2024 – Jan 2025',
      location: 'Bangalore, India',
      type: 'Advanced Certification',
      badge: 'Scholarship Recipient',
      logo: 'fas fa-graduation-cap',
      color: '#10b981',
      description:
        'Rigorous 6-month hands-on training in Core/Advanced Java, Data Structures, Spring Boot, Hibernate, Angular, and SQL.',
      achievements: [
        'Awarded <strong>JSpiders Merit Scholarship</strong> for top percentile scoring in Java & SQL technical evaluations in Bangalore.',
        'Constructed 15+ full-stack mini projects demonstrating clean code patterns, MVC architecture, and REST API design.',
        'Mastered Core Java, OOP, Collections Framework, Streams API, and Lambdas.',
        'Implemented Microservices design patterns: Eureka Discovery, Feign Clients, and API Gateway routing.',
      ],
      techUsed: [
        'Java 17',
        'Spring Boot',
        'Hibernate',
        'SQL',
        'Angular',
        'OOP',
        'Data Structures',
        'REST APIs',
      ],
    },
  ];

  // ─── Skills Matrix (Category Groups & Pills) ──────────────
  skillsMatrix: SkillCategoryGroup[] = [
    {
      category: 'Backend & Microservices (Core)',
      icon: 'fas fa-server',
      color: '#6db33f',
      items: [
        { name: 'Java 17 / 21', tag: 'Core & Enterprise', badge: 'Expert' },
        { name: 'Spring Boot 3.x', tag: 'REST & MVC', badge: 'Production' },
        { name: 'Microservices Mesh', tag: 'Eureka & Gateway', badge: 'Enterprise' },
        { name: 'Spring Security & JWT', tag: 'OAuth2 & RBAC', badge: 'Security' },
        { name: 'Spring Data JPA / Hibernate', tag: 'ORM & Querying', badge: 'Core' },
        { name: 'Apache Kafka', tag: 'Event-Driven & Saga', badge: 'Messaging' },
      ],
    },
    {
      category: 'Frontend Engineering',
      icon: 'fab fa-angular',
      color: '#dd0031',
      items: [
        { name: 'Angular 19 / 18', tag: 'Standalone & Signals', badge: 'Production' },
        { name: 'TypeScript & JavaScript', tag: 'ES6+ & Async', badge: 'Expert' },
        { name: 'RxJS & Reactive Forms', tag: 'State Management', badge: 'Advanced' },
        { name: 'HTML5 & Modern CSS3', tag: 'Glassmorphism & Flex', badge: 'UI/UX' },
        { name: 'PWA & Service Workers', tag: 'Offline Caching', badge: 'Mobile' },
      ],
    },
    {
      category: 'Databases & SQL Tuning',
      icon: 'fas fa-database',
      color: '#4169E1',
      items: [
        { name: 'PostgreSQL (Multitenancy)', tag: 'Schema-per-Tenant', badge: 'Enterprise' },
        { name: 'MSSQL Server', tag: 'Stored Procs & Synonyms', badge: 'Production' },
        { name: 'MySQL Database', tag: 'Relational Modeling', badge: 'Advanced' },
        { name: 'SQL Query Optimization', tag: 'Indexes & Execution Plans', badge: 'Tuning' },
      ],
    },
    {
      category: 'DevOps & Tooling',
      icon: 'fas fa-cloud-upload-alt',
      color: '#2496ED',
      items: [
        { name: 'Docker Containerization', tag: 'Dockerfiles & Compose', badge: 'Hands-on' },
        { name: 'Git & GitHub Workflows', tag: 'CI/CD & Version Control', badge: 'Hands-on' },
        { name: 'Linux / Bash Scripting', tag: 'CLI & Automation', badge: 'Hands-on' },
        { name: 'Kubernetes (K8s)', tag: 'Pods & Services', badge: 'Working Knowl.' },
        { name: 'AWS Cloud Basics', tag: 'EC2 & S3', badge: 'Learning' },
      ],
    },
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
        { name: 'RxJS', percentage: 70 },
      ],
    },
    {
      title: 'Backend',
      icon: 'fas fa-server',
      color: '#7c3aed',
      skills: [
        { name: 'Java', percentage: 85 },
        { name: 'Spring Boot', percentage: 82 },
        { name: 'Microservices', percentage: 78 },
        { name: 'REST APIs', percentage: 85 },
      ],
    },
    {
      title: 'Microservices & Architecture',
      icon: 'fas fa-network-wired',
      color: '#e91e63',
      skills: [
        { name: 'Eureka Server', percentage: 80 },
        { name: 'API Gateway', percentage: 78 },
        { name: 'Spring Security', percentage: 75 },
        { name: 'Multi-Tenant Design', percentage: 80 },
      ],
    },
    {
      title: 'Database',
      icon: 'fas fa-database',
      color: '#059669',
      skills: [
        { name: 'PostgreSQL', percentage: 85 },
        { name: 'MySQL', percentage: 82 },
        { name: 'MSSQL', percentage: 78 },
        { name: 'PL/SQL / Stored Procedures', percentage: 78 },
        { name: 'Query Optimization', percentage: 78 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      color: '#f59e0b',
      skills: [
        { name: 'Docker', percentage: 75 },
        { name: 'Kubernetes', percentage: 70 },
        { name: 'AWS', percentage: 72 },
        { name: 'Git / GitHub', percentage: 85 },
      ],
    },
    {
      title: 'Architecture Patterns',
      icon: 'fas fa-sitemap',
      color: '#ff5722',
      skills: [
        { name: 'Microservices', percentage: 78 },
        { name: 'Multi-Tenancy', percentage: 80 },
        { name: 'Design Patterns', percentage: 75 },
        { name: 'CI/CD Concepts', percentage: 70 },
      ],
    },
  ];

  // ─── Tech Tags (for skills visual) ──────────────────────────
  techTags = [
    { name: 'Java', color: '#f59e0b' },
    { name: 'Spring Boot', color: '#6db33f' },
    { name: 'Angular', color: '#dd0031' },
    { name: 'TypeScript', color: '#3178c6' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'MySQL', color: '#00758f' },
    { name: 'Docker', color: '#2496ed' },
    { name: 'Kubernetes', color: '#326ce5' },
    { name: 'AWS', color: '#ff9900' },
    { name: 'Eureka', color: '#6db33f' },
    { name: 'API Gateway', color: '#7c3aed' },
    { name: 'Spring Security', color: '#6db33f' },
    { name: 'Microservices', color: '#e91e63' },
    { name: 'PL/SQL', color: '#f80000' },
    { name: 'Git', color: '#f05032' },
    { name: 'REST APIs', color: '#00bcd4' },
  ];

  // ─── Projects ───────────────────────────────────────────────
  projects: Project[] = [
    {
      title: 'MemoryVerse — Digital Storytelling & Memory Platform',
      institution: 'Independent Full-Stack Project · Live on Vercel',
      timeline: '2025',
      category: 'Live Deployed & PWA',
      image: 'assets/projects_images/memory_verse_dashboard.png',
      techStack:
        'Angular 19 · Java · Spring Boot · Leaflet Maps · PWA · SCSS · Vercel',
      description:
        'A private digital storytelling and memory journey platform built as an installable Progressive Web App (PWA) with interactive geospatial timeline mapping, curated photo narratives, and offline support.',
      problemSolved:
        'Traditional social media platforms lack intimate, chronological storytelling and geospatial memory tracking for private personal journeys. MemoryVerse provides a dedicated, beautifully crafted space to preserve memories mapped by location and time.',
      features: [
        'Built installable <strong>Progressive Web App (PWA)</strong> with service workers for offline caching and native app-like mobile experience.',
        'Integrated <strong>Leaflet interactive maps</strong> to visualize journey locations, routes, and memory milestones dynamically.',
        'Engineered responsive storytelling layout with Cormorant Garamond typography, photo carousels, and milestone reflections.',
        'Designed full-stack REST API communication with Spring Boot backend services.',
      ],
      highlights: [
        '🚀 Deployed live on Vercel at memory-verse-ashy.vercel.app',
        'Progressive Web App (PWA) installable on mobile & desktop',
        'Leaflet JS interactive map integration for location tagging',
        'Angular standalone components & reactive state management',
        'Backend REST API integration with Java / Spring Boot',
      ],
      tags: ['angular', 'cloud'],
      skills: [
        { name: 'Angular 19', level: 90 },
        { name: 'Spring Boot', level: 85 },
        { name: 'Leaflet Maps', level: 82 },
      ],
      accent: '#ec4899',
      badge: '🚀 Live Deployed PWA',
      architecture:
        'Angular PWA Client → Leaflet Geospatial Engine → Spring Boot REST API → Cloud Database',
      githubUrl: 'https://github.com/Raman-8688/memory-verse',
      liveUrl: 'https://memory-verse-ashy.vercel.app/',
      backendFrontendSeparation:
        'Angular 19 PWA client deployed on Vercel with responsive mobile-first UI communicating with Java Spring Boot backend.',
      dockerK8sUsage:
        'Packaged with production optimization and automated continuous edge deployment via Vercel.',
      securityAuth:
        'Secure private access control with session token validation and protected routes.',
      cicdWorkflow:
        'Automated GitHub CI/CD continuous deployment pipeline directly connected to Vercel.',
    },
    {
      title: 'Enterprise Order Management System',
      institution: 'Personal Project · Microservices & Kafka',
      timeline: '2025',
      category: 'Full-Stack Microservices',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      techStack:
        'Java · Spring Boot · Angular · Apache Kafka · Eureka · API Gateway · Config Server · Feign · Resilience4j · PostgreSQL · Docker · Kubernetes · JWT',
      description:
        'Production-level distributed order management platform built on a full enterprise microservices stack. Separate services for Auth, Users, Products, Inventory, Orders, Payments, Notifications, and Invoices — communicating via Kafka async events and Feign sync calls, with Saga pattern for distributed transaction management.',
      problemSolved:
        'A monolithic order system cannot independently scale payment processing, inventory, or notifications. This architecture isolates each domain with its own database, uses Kafka for event-driven decoupling, and implements the Saga pattern to handle distributed transactions safely across services.',
      features: [
        '<strong>8 independent microservices</strong> — Auth, Users, Products, Inventory, Orders, Payments, Notifications, Invoices — each with its own PostgreSQL database (database-per-service pattern).',
        '<strong>Apache Kafka</strong> for async event streaming (order placed → inventory reserved → payment processed → invoice generated → notification sent).',
        '<strong>Feign clients + Resilience4j</strong> for synchronous inter-service calls with circuit breaker, retry, and fallback handling to prevent cascade failures.',
        '<strong>Saga pattern</strong> for distributed transaction management — compensating transactions ensure data consistency across services without 2PC locks.',
        '<strong>Spring Cloud Gateway</strong> with JWT validation; <strong>Eureka Server</strong> for service discovery; <strong>Config Server</strong> for centralized configuration management.',
        '<strong>Angular frontend</strong> with real-time order tracking dashboard, product browsing, and order management consuming APIs through the Gateway.',
        '<strong>Docker + Kubernetes</strong> — all services containerized, K8s manifests prepared for deployment, scaling, and rolling updates.',
      ],
      highlights: [
        '8 microservices each with own PostgreSQL DB',
        'Kafka event-driven order processing pipeline',
        'Saga pattern for distributed transactions',
        'Feign + Resilience4j circuit breaker & fallback',
        'Eureka service discovery + Config Server',
        'Spring Cloud Gateway with JWT auth filter',
        'Angular frontend order tracking dashboard',
        'Docker + Kubernetes deployment ready',
      ],
      tags: ['angular', 'microservices', 'database'],
      skills: [
        { name: 'Apache Kafka', level: 82 },
        { name: 'Spring Boot', level: 88 },
        { name: 'Microservices', level: 87 },
      ],
      accent: '#f59e0b',
      badge: '⚡ Kafka · Saga · Enterprise',
      architecture:
        'Angular UI → Spring Cloud Gateway (JWT) → Eureka → [Auth | Users | Products | Inventory | Orders | Payments | Notifications | Invoices] → Kafka + Feign → PostgreSQL (per service) | Config Server',
      githubUrl: 'https://github.com/Raman-8688/enterprise-order-management-system',
      liveUrl: '',
      backendFrontendSeparation:
        'Angular SPA communicates only through the API Gateway. All 8 backend services are isolated behind the Gateway with JWT-authenticated routes.',
      dockerK8sUsage:
        'All services Dockerized with multi-stage builds. Kubernetes manifests prepared for Deployments, Services, ConfigMaps, and HPA for auto-scaling.',
      securityAuth:
        '<strong>Spring Cloud Gateway JWT filter</strong> validates every request. Auth Service issues JWT; downstream services trust gateway-forwarded claims with role-based access per service.',
      cicdWorkflow:
        'GitHub repository with per-service module structure. Docker Compose for full local stack (Kafka + Zookeeper + all 8 services + DBs). Kubernetes manifests for production.',
    },
    {
      title: 'AMS — Asset Management System (Hyderabad Metro)',
      institution: 'Client Project · Live Production System',
      timeline: '2024',
      category: 'Live Client Projects',
      image: 'assets/projects_images/metro_1.jpg',
      techStack:
        'Angular · Java · Spring Boot · Microservices · MSSQL · Stored Procedures · API Gateway',
      description:
        'Live enterprise asset management system actively used by Hyderabad Metro Rail — tracking and managing station assets across locations, categories, layout groups and group types. Built on Java Spring Boot microservices with MSSQL and an Angular frontend. Contributed as Full Stack developer handling frontend screens, database layer, and production bug fixes.',
      problemSolved:
        'Hyderabad Metro had no centralized system to track physical assets across stations by location and category. Manual tracking caused errors and audit failures. This system is now live in production at metro stations.',
      features: [
        'Designed and implemented <strong>inventory screens</strong> for asset registration and filtering — by location, category, layout group type, and group. Screens actively used at Hyderabad Metro stations.',
        'Written <strong>MSSQL stored procedures</strong> for complex asset queries, batch inserts, and audit trail logging. Created optimized database <strong>indexes and synonyms</strong> for cross-schema query performance.',
        'Delivered <strong>production bug fixes and new screen implementations</strong> based on direct client requirements — worked closely with the client system environment for testing and deployment.',
      ],
      highlights: [
        '🚇 Live system used at Hyderabad Metro stations',
        'MSSQL stored procedures + indexes + synonyms (45% speedup)',
        'Asset filtering: location, category, layout group',
        'AssetPMWork scheduler module implementation',
        'Production bug fixes from client requirements',
        'Microservices: Auth + Admin + Asset Register + Common Library',
      ],
      tags: ['angular', 'microservices', 'database'],
      skills: [
        { name: 'Angular', level: 82 },
        { name: 'MSSQL', level: 80 },
        { name: 'Stored Procedures', level: 80 },
      ],
      accent: '#7c3aed',
      badge: '🚇 Metro · Live Production',
      architecture:
        'Angular UI → API Gateway → [Auth | Admin | Asset Register] Services (Spring Boot) → MSSQL + Common Library',
      githubUrl: 'https://github.com/Raman-8688',
      liveUrl: '',
      backendFrontendSeparation:
        'Angular frontend with dynamic inventory grid layouts; Java Spring Boot microservices expose REST APIs consumed through API Gateway.',
      dockerK8sUsage:
        'Each microservice deployed individually on VMs — manual deployment per service with per-environment configuration files.',
      securityAuth:
        'Auth Service handles login and session management; role-based access enforced at API Gateway level.',
      cicdWorkflow:
        'Git version control; services independently built and deployed to client environment after QA verification.',
    },
    {
      title: 'Secure AI Assistant',
      institution: 'Full Stack Deployed Project · Live on Vercel',
      timeline: '2025',
      category: 'AI & Deployed Apps',
      image: 'assets/secure_ai_preview.png',
      techStack:
        'Angular 19 · Spring Boot 3 · Spring Security · OAuth2 · JWT · Hugging Face API · PostgreSQL · Vercel',
      description:
        'A production-quality full-stack AI chat application with complete authentication lifecycle — OAuth2 Google & GitHub sign-in, email OTP verification, JWT-protected APIs, voice speech input, and Hugging Face AI integration.',
      problemSolved:
        'AI tools often expose API keys directly in client code or lack proper access controls. This project implements a secure backend proxy architecture where AI calls and chat sessions are protected behind authenticated Spring Security filters.',
      features: [
        'Supports <strong>OAuth2 social login (Google & GitHub)</strong> alongside standard JWT Email/Password authentication.',
        'Proxied Hugging Face AI Router calls through Spring Boot backend, ensuring API keys remain completely secure.',
        'Integrated <strong>Voice input speech recognition</strong> and real-time streaming response states in the Angular UI.',
        'Built Angular Route Guards and HTTP Interceptors for seamless session persistence.',
      ],
      highlights: [
        '🚀 Live deployed on Vercel with cloud backend hosting',
        'OAuth2 Social Login (Google & GitHub) + JWT Auth',
        'Voice input speech recognition & theme toggling',
        'Angular 19 standalone components + HTTP interceptors',
        'Secure backend proxy protecting AI API credentials',
        'PostgreSQL persistence for users and chat histories',
      ],
      tags: ['angular', 'cloud', 'database'],
      skills: [
        { name: 'Spring Security', level: 85 },
        { name: 'Angular 19', level: 84 },
        { name: 'OAuth2 / JWT', level: 85 },
      ],
      accent: '#10b981',
      badge: '🔐 Live Deployed App',
      architecture:
        'Angular 19 SPA (Vercel) → HTTP Interceptor → Spring Boot API (OAuth2 + JWT) → Hugging Face AI → PostgreSQL',
      githubUrl: 'https://github.com/Raman-8688',
      liveUrl: 'https://secure-ai-assistant-roan.vercel.app/login',
      backendFrontendSeparation:
        'Decoupled Angular 19 SPA with Route Guards communicating to a Spring Boot REST backend via JWT-authenticated requests.',
      dockerK8sUsage:
        'Containerized with Docker Compose for local dev; deployed on Vercel & cloud hosting for production.',
      securityAuth:
        'Full Spring Security filter chain: OAuth2 (Google/GitHub), email OTP verification, and JWT Bearer tokens on protected routes.',
      cicdWorkflow:
        'Automated GitHub-triggered builds and production deployment pipelines.',
    },
    {
      title: 'Multi-Tenant Pharma Platform with Multilanguage UI',
      institution: 'Winfocus Solutions Pvt Ltd',
      timeline: 'Jun 2025 – Present',
      category: 'Live Production SaaS',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      techStack:
        'Angular 19 · Spring Boot 3 · Microservices · PostgreSQL · Eureka · API Gateway · Spring Security · Docker · Kubernetes',
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
        'Angular lazy-loaded modules + interceptors',
      ],
      tags: ['angular', 'microservices', 'database'],
      skills: [
        { name: 'Spring Boot', level: 88 },
        { name: 'Angular', level: 85 },
        { name: 'Microservices', level: 84 },
      ],
      accent: '#00bcd4',
      badge: '💊 Pharma · Live',
      architecture:
        'Angular SPA → API Gateway → [Inventory | Billing | User | Report] Services → PostgreSQL (schema-per-tenant)',
      githubUrl: 'https://github.com/Raman-8688',
      liveUrl: '',
      backendFrontendSeparation:
        'Decoupled Angular SPA with module-level lazy loading communicating to isolated Spring Boot services via API Gateway.',
      dockerK8sUsage:
        'All microservices containerized; Kubernetes manages rolling deployments, pod autoscaling, ConfigMaps, and Secrets.',
      securityAuth:
        'Spring Security stateless JWT filter chain with role-based method-level authorization across all services.',
      cicdWorkflow:
        'Git + SVN version control; Docker image builds with manual K8s rollout per service.',
    },
    {
      title: 'NexusCore ERP Work Hub (Nexus 360)',
      institution: 'Full-Stack Microservices Project',
      timeline: '2025',
      category: 'Full-Stack Microservices',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      techStack:
        'Java 17 · Spring Boot 3 · Angular 19 · Eureka · Spring Cloud Gateway · PostgreSQL · MySQL · Docker',
      description:
        'Enterprise ERP microservices ecosystem featuring decoupled Auth, Employee, Department, and Notification services with unified dashboard analytics.',
      problemSolved:
        'Monolithic ERP systems cause bottleneck deployments and inter-department data entanglement. NexusCore decouples core business units into autonomous microservices with unified gateway routing and central discovery.',
      features: [
        'Built <strong>decoupled microservices</strong>: Auth Service, Employee Service, Department Service, and Notification Service.',
        'Configured <strong>Spring Cloud API Gateway</strong> with global exception handling, route filtering, and JWT token validation.',
        'Unified <strong>Angular 19 dashboard</strong> with real-time employee activity and department analytics.',
        'Designed database schemas with relational constraints across PostgreSQL and MySQL connectors.',
      ],
      highlights: [
        'Autonomous microservices mesh (Auth, Employee, Dept, Notification)',
        'Spring Cloud API Gateway centralized routing',
        'Netflix Eureka dynamic service registration & discovery',
        'Angular 19 responsive dashboard with state signals',
        'PostgreSQL & MySQL multi-database connectors',
      ],
      tags: ['angular', 'microservices', 'database'],
      skills: [
        { name: 'Microservices', level: 86 },
        { name: 'Spring Boot 3', level: 88 },
        { name: 'Angular 19', level: 84 },
      ],
      accent: '#8b5cf6',
      badge: '🏢 Enterprise ERP',
      architecture:
        'Angular 19 UI → Spring Cloud Gateway → Eureka Server → [Auth | Employee | Department | Notification] Services → PostgreSQL / MySQL',
      githubUrl: 'https://github.com/Raman-8688/NexusCore-ERP-Work-Hub',
      liveUrl: '',
      backendFrontendSeparation:
        'Angular SPA interacts only via API Gateway; all microservice instances remain private behind the gateway perimeter.',
      dockerK8sUsage:
        'All microservice modules packaged as Docker containers with multi-stage build optimization.',
      securityAuth:
        'Spring Security stateless JWT authentication enforced at Gateway and validated across internal services.',
      cicdWorkflow:
        'GitHub repository with modular Maven multi-module configuration and Docker build automation.',
    },
    {
      title: 'Multilanguage Dynamic Converter Tool',
      institution: 'Winfocus Solutions Pvt Ltd — Internal Tooling',
      timeline: '2025',
      category: 'Developer Tooling',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      techStack:
        'Angular · Hugging Face API · Docker · CSV / SQL Generation',
      description:
        'An internal developer tool that converts any existing Angular project into a fully dynamic multilanguage application — accepts a project ZIP, scans all HTML and TypeScript files, replaces static text with dynamic label keys, and outputs ready-to-import CSV + SQL INSERT queries.',
      problemSolved:
        'Converting large existing Angular projects to multilanguage support manually was expensive and error-prone. This tool automates the entire conversion — the developer specifies a pattern and the tool handles scanning, replacing, and generating database entries.',
      features: [
        'Built a backend file processing service that unzips project folders, traverses all HTML/TS files, and identifies static text using configurable pattern matching.',
        'Integrated batch translation service to auto-translate labels into multiple target languages in one pass.',
        'Generates <strong>ZIP output</strong> containing converted project files + CSV files + SQL INSERT queries ready to run directly in the target database.',
      ],
      highlights: [
        'Converts entire Angular project ZIP automatically',
        'Batch translation integration for multiple locales',
        'Outputs SQL INSERT queries + CSV for DB import',
        'Configurable text pattern matching',
        'Angular frontend for upload and config UI',
        'Docker deployment for consistent cross-env use',
      ],
      tags: ['angular', 'microservices'],
      skills: [
        { name: 'Angular', level: 80 },
        { name: 'TypeScript', level: 82 },
        { name: 'Automation Tooling', level: 80 },
      ],
      accent: '#64748b',
      badge: '⚙️ Developer Tool',
      architecture:
        'Angular Upload UI → File Scanner Engine → Batch Translation Service → CSV/SQL Generator → Output ZIP',
      githubUrl: 'https://github.com/Raman-8688',
      liveUrl: '',
      backendFrontendSeparation:
        'Angular upload/config frontend; backend handles file scanning, parsing, and database script generation.',
      dockerK8sUsage:
        'Entire tool packaged as Docker container — team runs it with a single docker-compose up command.',
      securityAuth:
        'Internal tool; secured within company network. Input validation on all uploaded ZIP contents.',
      cicdWorkflow:
        'Docker-based deployment; Git version controlled with release branches per major conversion pattern update.',
    },
  ];
  // ─── Architecture Nodes (Interactive Topology) ─────────────
  archNodesReact: ArchitectureNodeDetail[] = [
    {
      id: 'angular-ui',
      title: 'Angular UI',
      sub: 'Client App',
      category: 'FRONTEND',
      color: '#dd0031',
      details:
        'Built with Angular 19 Standalone Components, Signal State Management, Dynamic Multilanguage Pipes, and Reactive Forms. Intercepts HTTP requests to inject JWT Auth Headers and Tenant Context headers.',
    },
    {
      id: 'api-gateway',
      title: 'API Gateway',
      sub: 'Spring Cloud Gateway',
      category: 'ROUTING',
      color: '#8b5cf6',
      details:
        'Centralized edge gateway performing CORS configuration, Global Exception Handling, JWT token validation, rate limiting, and dynamic load-balanced request forwarding to microservice instances.',
    },
    {
      id: 'microservices',
      title: 'Microservices',
      sub: 'Spring Boot + Eureka',
      category: 'BACKEND',
      color: '#10b981',
      details:
        'Decoupled Spring Boot microservices (Auth, Employee, Department, Notification, Order, Inventory) incorporating Spring Data JPA, Spring Security RBAC, NVIDIA AI integration, and Eureka discovery.',
    },
    {
      id: 'postgres-db',
      title: 'PostgreSQL',
      sub: 'Multi-tenant Schema',
      category: 'DATA LAYER',
      color: '#3b82f6',
      details:
        'PostgreSQL dynamic Schema-per-Tenant isolation for Winfocus Pharma SaaS, alongside MSSQL enterprise databases equipped with Stored Procedures, Non-Clustered Indexes, and Synonyms for Hyderabad Metro AMS.',
    },
    {
      id: 'docker-k8s',
      title: 'Docker / K8s',
      sub: 'Orchestration',
      category: 'CONTAINERS',
      color: '#0284c7',
      details:
        'Containerized Docker microservice images orchestrated across Kubernetes pods with rolling updates, environment secret injection, and automated health checks.',
    },
  ];

  // ─── MNC Interview Cheat Sheet Q&A ─────────────────────────
  mncPrepQnA: MncQnA[] = [
    {
      id: 'q1',
      category: 'System Architecture & Multitenancy',
      question: 'How do you handle multi-tenancy with PostgreSQL in a Spring Boot microservice?',
      answer: 'In enterprise SaaS applications, we implement <strong>Schema-per-Tenant isolation</strong>. We implement <code>CurrentTenantIdentifierResolver</code> to pull the <code>X-Tenant-ID</code> from the incoming HTTP request header validated by the API Gateway. Then, a <code>MultiTenantConnectionProvider</code> acquires a DB connection and issues <code>SET search_path TO tenant_schema</code>. This guarantees zero data leakage between enterprise tenants without needing separate database server hardware.'
    },
    {
      id: 'q2',
      category: 'AI Models Integration',
      question: 'How did you integrate Hugging Face & AI Models in production workflows?',
      answer: 'We created an asynchronous AI Service layer in Spring Boot that authenticates with Hugging Face and AI APIs via bearer tokens. Incoming workflow metrics and texts are serialized into structured JSON payloads, dispatched to AI endpoints, and parsed into automated multilingual translations and analysis insights displayed dynamically on the Angular dashboard.'
    },
    {
      id: 'q3',
      category: 'Database Optimization',
      question: 'How did you optimize MSSQL database queries for the Hyderabad Metro AMS project?',
      answer: 'For high-volume transit asset tracking, we replaced standard ORM entity scans with <strong>MSSQL Stored Procedures</strong> for complex multi-table joins and batch inserts. We created <strong>non-clustered indexes</strong> on heavily searched fields like <code>StationID</code> and <code>AssetCategoryID</code>. Furthermore, we created <strong>Database Synonyms</strong> to allow fast cross-schema references between the Auth, Admin, and Asset Register service schemas.'
    },
    {
      id: 'q4',
      category: 'Microservices Resilience',
      question: 'What is the role of Spring Cloud API Gateway and Eureka Service Discovery?',
      answer: 'Netflix Eureka acts as a dynamic service registry where every microservice instance auto-registers its IP and port on startup. Spring Cloud Gateway acts as a reverse proxy single entry point. It fetches instance locations from Eureka, performs client-side load balancing via Spring Cloud LoadBalancer, validates incoming JWT tokens, and routes traffic securely.'
    },
    {
      id: 'q5',
      category: 'Security & Auth',
      question: 'How does Secure AI Assistant handle Google & GitHub OAuth2 alongside JWT?',
      answer: 'The application configures Spring Security <code>oauth2Login()</code>. When a user signs in via Google or GitHub, Spring Security processes the authorization code exchange, verifies the OAuth2 token claims, creates or fetches the user in PostgreSQL, and issues a custom JWT token back to the Angular 19 frontend for session state management.'
    }
  ];

  // ─── ATS Formatted Resume Data ──────────────────────────────
  atsResume: AtsResume = {
    summary: 'Java Full Stack & Microservices Developer with 1+ years of hands-on production experience engineering enterprise systems for live client environments (Hyderabad Metro Rail Asset Management System) and multi-tenant SaaS platforms (Winfocus Solutions). Specializing in Java 17, Spring Boot 3, Microservices Mesh (Netflix Eureka, Spring Cloud Gateway), Angular 19, PostgreSQL multitenancy schema routing, and MSSQL database performance tuning.',
    skillsCategorized: [
      { category: 'Backend & Microservices', items: 'Java 17/21, Spring Boot 3.x, REST APIs, Netflix Eureka, Spring Cloud API Gateway, Spring Security, JWT, OAuth2, Spring Data JPA, Hibernate' },
      { category: 'Frontend Development', items: 'Angular 19/18, TypeScript, RxJS, Signals, Reactive Forms, Dynamic Multilanguage Pipes, HTML5, Modern CSS3, SCSS, React.js' },
      { category: 'Databases & Multitenancy', items: 'PostgreSQL (Dynamic Schema-per-Tenant Isolation), MSSQL Enterprise (Stored Procedures, Indexing, Synonyms), MySQL' },
      { category: 'DevOps, Cloud & AI', items: 'Docker Containerization, Kubernetes Pod Management, Hugging Face AI API, Git, SVN, Linux/Bash Scripting, CI/CD Pipelines' }
    ],
    experience: [
      {
        company: 'Winfocus Solutions Pvt Ltd',
        role: 'Full Stack Developer',
        period: 'Jun 2025 – Present',
        location: 'Secunderabad, Telangana, India',
        bullets: [
          'Engineered multi-tenant Pharma SaaS microservices platform using Spring Boot 3 and PostgreSQL dynamic schema-per-tenant data isolation.',
          'Developed dynamic database-driven multilanguage UI in Angular 19 — button labels, form fields, and placeholders switch switchable per user locale at runtime.',
          'Created standalone internal Multilanguage AI Converter Tool accepting Angular project ZIPs, parsing templates, and integrating Hugging Face AI for batch translation.',
          'Configured Spring Cloud API Gateway, Eureka Discovery Server, and Spring Security JWT role-based access control (RBAC) across decoupled services.',
          'Containerized application microservices using Docker and deployed across Kubernetes pods on enterprise virtual machines.'
        ]
      },
      {
        company: 'Hyderabad Metro Rail — Asset Management System (AMS)',
        role: 'Full Stack Developer (Client Project)',
        period: '2024',
        location: 'Hyderabad, India',
        bullets: [
          'Developed live station asset tracking inventory screens in Angular used actively across Hyderabad Metro Rail stations and operational centers.',
          'Authored high-volume MSSQL Stored Procedures for complex batch queries, location audits, and historical asset tracking logs.',
          'Optimized cross-schema database query performance by over 45% by constructing non-clustered indexes and MSSQL database synonyms.',
          'Built decoupled microservices (Auth, Admin, Asset Register) connected via Spring Cloud API Gateway with shared common DTO libraries.'
        ]
      }
    ],
    education: 'Bachelor of Technology (B.Tech) — Newtons Institute of Engineering (JSpiders Exam Scholarship Awardee)',
    certifications: 'Java Full Stack Developer Specialist Certification — JSpiders Training Institute, Bangalore (Merit Scholarship Winner)'
  };

  // ─── Architecture Nodes ─────────────────────────────────────
  architectureNodes: ArchitectureNode[] = [
    {
      type: 'Frontend',
      title: 'Angular UI Client',
      icon: 'fab fa-angular',
      color: '#dd0031',
      purpose:
        'Modern, highly responsive client frontend featuring lazy-loaded routes, state signals, and reactive forms.',
      techStack: [
        'Angular 19',
        'TypeScript',
        'RxJS',
        'HTTP Interceptors',
        'Route Guards',
        'Reactive Forms',
      ],
      responsibilities: [
        'Lazy-loaded feature modules for optimized bundle sizes',
        'Centralized <strong>HTTP Interceptors</strong> for JWT token injection',
        'Route Guards enforcing role-based navigation access',
        'Reactive form validation with custom validators',
        'Signal-based state management for real-time UI updates',
      ],
    },
    {
      type: 'Routing Layer',
      title: 'API Gateway',
      icon: 'fas fa-route',
      color: '#a78bfa',
      purpose:
        'Central entrance routing client requests. Applies custom JWT authentication filters, CORS, and request rate-limiting.',
      techStack: [
        'Spring Cloud Gateway',
        'JWT Filter',
        'CORS Config',
        'Rate Limiter',
        'Load Balancer',
      ],
      responsibilities: [
        'Global <strong>JWT authentication filter</strong> intercepting all inbound requests',
        'Dynamic route configuration resolving service instances via Eureka',
        'CORS policy enforcement across all microservice endpoints',
        'Request rate-limiting to prevent API abuse',
        'Forwarding authenticated claims to downstream services',
      ],
    },
    {
      type: 'Backend Services',
      title: 'Spring Boot Microservices',
      icon: 'fas fa-server',
      color: '#6db33f',
      purpose:
        'Resilient Microservices registry via Eureka. Includes separate Inventory, Billing, and Core Auth services interacting via OpenFeign.',
      techStack: [
        'Spring Boot',
        'Eureka Server',
        'OpenFeign',
        'Spring Security',
        'Global Exception Handler',
        'REST APIs',
      ],
      responsibilities: [
        '<strong>Eureka Server</strong> for dynamic service registration and health tracking',
        'Inter-service communication via <strong>OpenFeign</strong> declarative HTTP clients',
        'Global exception handling with standardized error response DTOs',
        'Spring Security context enforcing role-based method-level authorization',
        'Separate services for Inventory, Billing, User Auth, and Reporting domains',
      ],
    },
    {
      type: 'Data Layer',
      title: 'Database Schema Router',
      icon: 'fas fa-database',
      color: '#336791',
      purpose:
        'Dynamic PostgreSQL connection routing. Isolates clinics into isolated private schemas per tenant organization.',
      techStack: [
        'PostgreSQL',
        'Multi-Tenant Schema',
        'Dynamic DataSource',
        'PL/SQL',
        'Connection Pool',
        'Query Optimization',
      ],
      responsibilities: [
        '<strong>Multi-tenant schema isolation</strong> — public schema for config, private schemas per tenant',
        'Dynamic DataSource routing resolving tenant context from request headers',
        'PL/SQL stored procedures for high-performance batch operations',
        'Connection pooling via HikariCP for optimal throughput',
        'Query optimization and index strategies reducing query lag by 45%',
      ],
    },
    {
      type: 'Containerization',
      title: 'Docker & Kubernetes',
      icon: 'fab fa-docker',
      color: '#326ce5',
      purpose:
        'Microservices containerized as Docker layers and orchestrated within a highly fault-tolerant local Kubernetes pod network.',
      techStack: [
        'Docker',
        'Kubernetes',
        'Multi-stage Dockerfile',
        'K8s Deployments',
        'Pod Autoscaler',
        'Docker Compose',
      ],
      responsibilities: [
        'Multi-stage <strong>Dockerfiles</strong> minimizing final image sizes for each microservice',
        'Kubernetes Deployments with replica sets for high availability',
        'Horizontal Pod Autoscaler (HPA) responding to CPU/memory thresholds',
        'ConfigMaps and Secrets managing environment-specific configurations',
        'Docker Compose for local development multi-service orchestration',
      ],
    },
    {
      type: 'CI/CD Pipeline',
      title: 'GitHub Actions CI/CD',
      icon: 'fab fa-github-alt',
      color: '#f05032',
      purpose:
        'Automated continuous integration pipeline testing compile status, compiling images, and pushing to secure deployment registries.',
      techStack: [
        'GitHub Actions',
        'Maven Build',
        'Docker Build',
        'K8s Rollout',
        'Test Automation',
        'Registry Push',
      ],
      responsibilities: [
        '<strong>Automated Maven builds</strong> compiling all microservice modules on every push',
        'Unit and integration test execution gate before image builds',
        'Docker image building and pushing to container registry',
        'Kubernetes rolling update deployment triggered on merge to main',
        'Angular production build validation with lint and test checks',
      ],
    },
  ];

  // ─── Social Links ────────────────────────────────────────────
  socialLinks: SocialLink[] = [
    {
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/in/b-ramanjaneyulu-155021258',
      label: 'LinkedIn',
    },
    {
      icon: 'fab fa-github',
      url: 'https://github.com/Raman-8688',
      label: 'GitHub',
    },
    { icon: 'fab fa-twitter', url: '#', label: 'Twitter' },
    { icon: 'fab fa-youtube', url: '#', label: 'YouTube' },
  ];

  themeColors = [
    '#00bcd4',
    '#4db6ac',
    '#2196F3',
    '#7c3aed',
    '#e91e63',
    '#FF5722',
    '#009688',
    '#3F51B5',
    '#f59e0b',
    '#059669',
  ];

  // ─── Actions ────────────────────────────────────────────────
  navigateTo(section: Section): void {
    this.activeSection.set(section);
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode.update((v) => !v);
  }

  setThemeColor(color: ThemeColor): void {
    this.themeColor.set(color);
    document.documentElement.style.setProperty('--theme-color', color);
  }

  toggleSettings(): void {
    this.settingsPanelOpen.update((v) => !v);
  }
}