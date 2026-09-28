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
  resumeUrl = 'assets/resumes/Raman_full_stack_java.pdf';

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
      title: 'AMS — Asset Management System (Hyderabad Metro)',
      institution: 'Client Project · Live Production System (Hyderabad Metro Rail)',
      timeline: '2024',
      techStack:
        'Angular · Java · Spring Boot · Microservices · MSSQL · Stored Procedures · API Gateway',
      description:
        'Live enterprise asset management system actively used by Hyderabad Metro Rail — tracking and managing physical station assets across locations, categories, layout groups, and group types. Built on Java Spring Boot microservices with MSSQL and Angular frontend.',
      problemSolved:
        'Hyderabad Metro required a centralized platform to track physical assets across stations by location and category. Built station inventory screens, stored procedures, and indexes to handle high-concurrency station audit operations.',
      features: [
        'Designed and implemented <strong>inventory screens</strong> for asset registration and filtering — location-based, category-based, and layout group views.',
        'Engineered <strong>MSSQL stored procedures</strong> for complex asset batch inserts and audit trail logging; optimized queries using database indexes and synonyms.',
        'Delivered <strong>production features & bug fixes</strong> based on direct client requirements for Hyderabad Metro Rail stations.',
      ],
      highlights: [
        '🚇 Live production system at Hyderabad Metro stations',
        'MSSQL stored procedures + indexes + synonyms',
        'Asset tracking by station, location, category, layout group',
        'Microservices: Auth + Admin + Asset Register',
      ],
      tags: ['angular', 'microservices', 'database'],
      skills: [
        { name: 'Angular', level: 88 },
        { name: 'MSSQL', level: 85 },
        { name: 'Spring Boot', level: 85 },
      ],
      accent: '#7c3aed',
      badge: '🚇 Metro · Production Project',
      image: 'assets/images/project-ams-metro.jpg',
      architecture:
        'Angular UI → API Gateway → [Auth | Admin | Asset Register] Services (Spring Boot) → MSSQL',
      githubUrl: '',
      liveUrl: '',
      backendFrontendSeparation:
        'Angular frontend with dynamic inventory grid layouts; Java Spring Boot microservices expose REST APIs.',
      dockerK8sUsage:
        'Microservices deployed individually on client server environments.',
      securityAuth:
        'Auth Service handles station login; role-based access enforced at API Gateway level.',
      cicdWorkflow:
        'Git version control; services independently built and deployed to client environment.',
    },
    {
      title: 'Multi-Tenant Pharma Platform with Multilanguage UI',
      institution: 'Winfocus Solutions Pvt Ltd · Enterprise SaaS',
      timeline: 'Jun 2024 – Present',
      techStack:
        'Angular · Spring Boot · Microservices · PostgreSQL · Eureka · API Gateway · Spring Security · Docker · Kubernetes',
      description:
        'Production-grade multi-tenant Pharma Management System with microservices architecture and dynamic multilanguage UI — labels, placeholders, button names all switchable per user preference directly from the database.',
      problemSolved:
        'Single-schema monoliths could not isolate pharmacy client data or support dynamic runtime localization without code redeployments. Implemented schema-per-tenant PostgreSQL routing and DB-driven UI label translation.',
      features: [
        'Built separate <strong>Spring Boot microservices</strong> for Inventory, Billing, Users, and Reporting with schema isolation.',
        'Implemented <strong>multi-tenant schema routing</strong> — each organization login resolves to its own private PostgreSQL schema dynamically via DataSource routing.',
        'Built <strong>multilanguage dynamic UI</strong> — all Angular labels and placeholders stored in DB; user selects language and UI re-renders instantly.',
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
      badge: '💊 Pharma · Enterprise SaaS',
      image: 'assets/images/project-pharma-platform.jpg',
      architecture:
        'Angular SPA → API Gateway → [Inventory | Billing | User | Report] Services → PostgreSQL (schema-per-tenant)',
      githubUrl: '',
      liveUrl: '',
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
      title: 'Enterprise Order Management System (EMS)',
      institution: 'Personal Open Source Project',
      timeline: '2025 - 2026',
      techStack:
        'Java · Spring Boot · Angular · Kafka · Eureka · API Gateway · Resilience4j · PostgreSQL · Docker · Kubernetes',
      description:
        'Distributed order management platform built on a full enterprise microservices stack. Separate services for Auth, Users, Products, Inventory, Orders, Payments, Notifications, and Invoices — communicating via Kafka events and Feign sync calls.',
      problemSolved:
        'Monolithic order systems suffer from cascading failures during flash sales. This system uses Apache Kafka event streaming to asynchronously process payment, inventory reservation, and notification pipelines.',
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
      badge: '⚡ EMS · Microservices',
      image: 'assets/images/project-order-management.jpg',
      architecture:
        'Angular UI → Spring Gateway (JWT) → Eureka → [8 Microservices] → Kafka + Feign → PostgreSQL',
      githubUrl: 'https://github.com/Raman-8688/enterprise-order-management-system',
      liveUrl: '',
      backendFrontendSeparation:
        'Angular SPA communicates only through API Gateway via JWT authentication headers.',
      dockerK8sUsage:
        'Dockerized services with Kubernetes manifests for Deployments, Pods, ConfigMaps, and Services.',
      securityAuth:
        'Spring Cloud Gateway JWT filter validates request tokens and forwards claims.',
      cicdWorkflow:
        'GitHub repository with per-service modules and Docker Compose orchestration.',
    },
    {
      title: 'Memory Verse App',
      institution: 'Personal Project · Live Web Platform',
      timeline: '2026',
      techStack:
        'Java · Spring Boot · Angular · PostgreSQL · Vercel · REST API',
      description:
        'A private digital storytelling and memory preservation platform allowing users to curate personal milestones, journal reflections, and media galleries in an interactive timeline.',
      problemSolved:
        'Traditional blogging apps lack structured timeline views, tag filtering, and fast cloud delivery. Memory Verse combines an Angular UI with Spring Boot backend services.',
      features: [
        'Interactive timeline view for personal stories, milestones, and verse memories.',
        'RESTful API backend for story creation, categorization, searching, and media attachments.',
        'Deployed live on Vercel with responsive dark/light mode experience.',
      ],
      highlights: [
        'Live deployed Web App on Vercel',
        'Interactive story timeline with media galleries',
        'Tag-based filtering and instant search',
        'Spring Boot backend REST APIs',
      ],
      tags: ['angular', 'microservices'],
      skills: [
        { name: 'Angular', level: 86 },
        { name: 'Spring Boot', level: 84 },
      ],
      accent: '#10b981',
      badge: '📖 Memory App · Live',
      image: 'assets/images/project-memory-verse.jpg',
      architecture:
        'Angular SPA (Vercel) → Spring Boot REST API → PostgreSQL',
      githubUrl: 'https://github.com/Raman-8688/memory-verse',
      liveUrl: 'https://memory-verse-ashy.vercel.app',
      backendFrontendSeparation:
        'Angular frontend hosted on Vercel communicating via CORS-enabled REST APIs.',
      dockerK8sUsage:
        'Containerized Spring Boot backend services.',
      securityAuth:
        'Session token authentication and endpoint protection.',
      cicdWorkflow:
        'Automated Vercel deployment pipeline triggered on GitHub push to main.',
    },
    {
      title: 'ERP Nexus Core Work Hub',
      institution: 'Personal Open Source Project',
      timeline: '2026',
      techStack:
        'Java · Spring Boot · Angular 17 · JPA/Hibernate · PostgreSQL · REST API · RBAC',
      description:
        'Full-stack Employee Management and Enterprise Resource Planning Work Hub. Features comprehensive CRUD operations, multi-field search and pagination, role-based access control (RBAC), and validation filters.',
      problemSolved:
        'SME businesses need lightweight ERP platforms for workforce allocation without heavy licensing costs. Nexus Core provides employee onboarding, department hierarchies, and audit logging.',
      features: [
        'Spring Boot REST APIs with Spring Data JPA and Hibernate query optimization.',
        'Angular 17 standalone components with reactive forms and server-side pagination.',
        'Role-Based Access Control (RBAC) separating Admin, Manager, and Employee access levels.',
      ],
      highlights: [
        'Full-stack ERP & Employee Hub',
        'Spring Boot REST API + JPA/Hibernate',
        'Angular 17 frontend with pagination & search',
        'Role-Based Access Control (RBAC)',
      ],
      tags: ['angular', 'database', 'microservices'],
      skills: [
        { name: 'Spring Boot', level: 86 },
        { name: 'Angular 17', level: 85 },
        { name: 'PostgreSQL', level: 84 },
      ],
      accent: '#3b82f6',
      badge: '💼 ERP Hub · Open Source',
      image: 'assets/images/project-nexus-core.jpg',
      architecture:
        'Angular 17 SPA → Spring Boot REST Controller → JPA / Hibernate → PostgreSQL',
      githubUrl: 'https://github.com/Raman-8688/NexusCore-ERP-Work-Hub',
      liveUrl: '',
      backendFrontendSeparation:
        'Decoupled Angular 17 client interacting via RESTful endpoints.',
      dockerK8sUsage:
        'Containerized application images for local and cloud server environments.',
      securityAuth:
        'Spring Security authentication with RBAC role authorization guards.',
      cicdWorkflow:
        'Git branch management and GitHub Actions automated build checks.',
    },
    {
      title: 'Security AI Assistant (NVIDIA AI Guard)',
      institution: 'Personal Project · Live AI Platform',
      timeline: '2026',
      techStack:
        'Java · Spring Boot · Angular · NVIDIA AI API / Hugging Face · Python AI Sidecar · Vercel',
      description:
        'AI-driven security guardrail and code auditing assistant that inspects REST API endpoints, detects OWASP vulnerability vectors, and performs intelligent prompt sanitization before model execution.',
      problemSolved:
        'Generative AI integrations in enterprise APIs require strict prompt injection filtering and real-time security auditing. This tool intercepts API payloads and validates security compliance.',
      features: [
        'Real-time prompt injection detection and OWASP vulnerability scanner.',
        'Integrated NVIDIA AI Guard and Hugging Face inference APIs for security classification.',
        'Angular interactive dashboard with live scan results and severity flags.',
      ],
      highlights: [
        'Live deployed AI Assistant on Vercel',
        'NVIDIA AI Guard & Hugging Face LLM integration',
        'OWASP API security audit & prompt sanitization',
        'Spring Boot + Angular full-stack implementation',
      ],
      tags: ['angular', 'microservices'],
      skills: [
        { name: 'AI Integration', level: 86 },
        { name: 'Spring Boot', level: 84 },
        { name: 'Angular', level: 85 },
      ],
      accent: '#ec4899',
      badge: '🤖 Security AI · Live',
      image: 'assets/images/project-security-ai.jpg',
      architecture:
        'Angular UI (Vercel) → Spring Boot AI Gateway → NVIDIA AI API / Hugging Face → Security Logger',
      githubUrl: 'https://github.com/Raman-8688/secure-ai-assistant',
      liveUrl: 'https://secure-ai-assistant.vercel.app',
      backendFrontendSeparation:
        'Angular client communicates with AI Gateway REST endpoints.',
      dockerK8sUsage:
        'Docker containerized AI gateway service.',
      securityAuth:
        'API Key validation and rate-limiting security filters.',
      cicdWorkflow:
        'Continuous deployment via Vercel integration with GitHub main branch.',
    },
    {
      title: 'Full-Stack Enterprise Portfolio Platform',
      institution: 'Personal Open Source Platform',
      timeline: '2026',
      techStack:
        'Angular 19 · TypeScript · CSS Grid/Flexbox · GitHub Pages · CI/CD',
      description:
        'Production portfolio platform showcasing microservices topologies, interactive SVG architecture diagrams, STAR method case studies, and real-time tech stack search filters.',
      problemSolved:
        'Traditional resume documents cannot visually demonstrate dynamic microservice data flow, interactive architecture nodes, or live pod health telemetry. Built an enterprise Angular 19 SPA platform.',
      features: [
        'Interactive SVG topology diagram with animated data packet flow and node inspector.',
        'Real-time search bar filtering projects by tech stack, keywords, and domain categories.',
        'Light/Dark theme switcher, accessible tab navigation, and mobile-first responsive layout.',
      ],
      highlights: [
        'Live deployed on GitHub Pages',
        'Interactive SVG architecture flow diagram',
        'Real-time tech stack search filtering',
        'Angular 19 Standalone Signals architecture',
      ],
      tags: ['angular'],
      skills: [
        { name: 'Angular 19', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'CSS3', level: 90 },
      ],
      accent: '#6366f1',
      badge: '🚀 Portfolio · Live System',
      image: 'assets/images/project-portfolio-platform.jpg',
      architecture:
        'Angular 19 SPA → RxJS Signals → Service State → GitHub Pages CDN',
      githubUrl: 'https://github.com/Raman-8688/portfolio-projects',
      liveUrl: 'https://raman-8688.github.io/portfolio-projects/',
      backendFrontendSeparation:
        'Client-side Angular 19 SPA using signal-driven architecture.',
      dockerK8sUsage:
        'Static production bundle served globally via CDN.',
      securityAuth:
        'HTTPS encryption and safe sanitization of innerHTML contents.',
      cicdWorkflow:
        'GitHub Actions automated deployment to gh-pages branch upon main push.',
    },
    {
      title: 'Mini Bank Application',
      institution: 'Personal Open Source Project',
      timeline: '2025 - 2026',
      techStack:
        'Java · Spring Boot · Spring Security · JWT · PostgreSQL · Angular',
      description:
        'Full-featured Banking Application supporting user registration, login, account creation, fund transfers, transaction history, and balance inquiries with real-time updates.',
      problemSolved:
        'Demonstrates secure financial transaction processing with ACID compliance, Spring Security JWT authentication, and relational database schema design.',
      features: [
        'Account registration and login with Spring Security stateless JWT authentication.',
        'Fund transfer module with transaction isolation and balance validation.',
        'Transaction history ledger with filterable statements and balance breakdown.',
      ],
      highlights: [
        'Spring Boot + Spring Security JWT authentication',
        'ACID compliant fund transfer transaction engine',
        'PostgreSQL database with indexed statement queries',
        'Angular frontend with transaction history table',
      ],
      tags: ['angular', 'microservices', 'database'],
      skills: [
        { name: 'Spring Boot', level: 86 },
        { name: 'Spring Security', level: 84 },
        { name: 'Angular', level: 82 },
      ],
      accent: '#14b8a6',
      badge: '🏦 Banking App · Open Source',
      image: 'assets/images/project-mini-bank.jpg',
      architecture:
        'Angular SPA → Spring Boot REST API (Spring Security JWT) → PostgreSQL',
      githubUrl: 'https://github.com/Raman-8688/mini-bank-application',
      liveUrl: '',
      backendFrontendSeparation:
        'Angular SPA communicating via secure REST APIs.',
      dockerK8sUsage:
        'Docker containerized deployment.',
      securityAuth:
        'Spring Security JWT bearer token authentication.',
      cicdWorkflow:
        'Git version control repository.',
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