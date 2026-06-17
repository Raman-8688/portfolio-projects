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
} from '../models/Portfolio';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  // ─── Reactive Signals ───────────────────────────────────────
  activeSection = signal<Section>('home');
  isDarkMode = signal<boolean>(true);
  themeColor = signal<ThemeColor>('#3b82f6');

  settingsPanelOpen = signal<boolean>(false);

  // ─── Personal Info ──────────────────────────────────────────
  name = 'Ramanjaneyulu Boya';
  shortName = 'Raman';
  titles = [
    'Java Full Stack Developer',
    'Microservices Developer',
    'Angular + Spring Boot Engineer',
  ];
  email = 'ramanms8688@gmail.com';
  phone = '8688505451';
  location = 'Kurnool, Andhra Pradesh';
  github = 'https://github.com/Raman-8688';
  linkedin = 'https://linkedin.com/in/b-ramanjaneyulu-155021258';
  yearsExp = '1';

  // ─── Hero Intro (concise, powerful) ─────────────────────────
  heroTagline = 'Building enterprise-grade systems that scale.';
  heroSub =
    'Full Stack Developer specializing in <strong>Microservices Architecture</strong>, <strong>Spring Boot</strong>, <strong>Angular</strong> and <strong>Cloud Deployments</strong> — currently crafting a multi-tenant Pharma platform at Winfocus Solutions.';

  // ─── Stats / Achievements counters ──────────────────────────
  achievements: Achievement[] = [
    {
      icon: 'fas fa-train',
      value: 'Live',
      label: 'Metro Client Project',
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
      label: 'DB Technologies',
      color: '#059669',
    },
    {
      icon: 'fas fa-robot',
      value: 'AI',
      label: 'AI Tools Integrated',
      color: '#ec4899',
    },
  ];

  // ─── About ──────────────────────────────────────────────────
  aboutIntro =
    'I am a <strong>Java Full Stack Developer</strong> with 1 year of hands-on experience delivering real production systems — from a <strong>live Hyderabad Metro asset management platform</strong> to a <strong>multi-tenant Pharma microservices product</strong> — using Angular, Spring Boot, and enterprise databases.';

  aboutPoints = [
    {
      icon: 'fas fa-train',
      text: 'Contributed to <strong>AMS (Asset Management System)</strong> — a live client project actively used by <strong>Hyderabad Metro Rail</strong>. Built inventory screens, MSSQL stored procedures, database indexes/synonyms, and implemented new screens based on direct client requirements. Tech: <strong>Angular · Java · Spring Boot · MSSQL</strong>.',
    },
    {
      icon: 'fas fa-capsules',
      text: 'Currently at <strong>Winfocus Solutions</strong> building a production <strong>multi-tenant Pharma platform</strong> — separate Spring Boot microservices (Inventory, Billing, Users, Reports) with dynamic PostgreSQL schema-per-tenant routing and <strong>multilanguage dynamic UI</strong>.',
    },
    {
      icon: 'fas fa-language',
      text: 'Built an internal <strong>Multilanguage Converter Tool</strong> (Angular + AI) that auto-converts any Angular project to multilanguage — scans HTML/TS files, uses <strong>Hugging Face AI</strong> for batch translation, and generates SQL INSERT queries ready for database import.',
    },
    {
      icon: 'fas fa-network-wired',
      text: 'Experienced with <strong>Eureka Server, API Gateway, Spring Security, JWT, OAuth2</strong> — building resilient microservice meshes with global exception handling and role-based access control.',
    },
    {
      icon: 'fas fa-database',
      text: 'Strong database skills across <strong>PostgreSQL, MSSQL, MySQL</strong> — stored procedures, query optimization, index design, synonyms, and multi-schema data isolation strategies.',
    },
  ];

  infoCards = [
    {
      icon: 'fas fa-calendar-check',
      label: 'Experience',
      value: '1 Year (Java Full Stack)',
      bg: 'rgba(124, 58, 237, 0.1)',
      color: '#8b5cf6',
    },
    {
      icon: 'fas fa-building',
      label: 'Company',
      value: 'Winfocus Solutions Pvt Ltd',
      bg: 'rgba(59, 130, 246, 0.1)',
      color: '#3b82f6',
    },
    {
      icon: 'fas fa-graduation-cap',
      label: 'Education',
      value: 'Newtons Inst. of Engineering',
      bg: 'rgba(16, 185, 129, 0.1)',
      color: '#10b981',
    },
    {
      icon: 'fas fa-trophy',
      label: 'Scholarship',
      value: 'JSpiders Exam Scholarship',
      bg: 'rgba(245, 158, 11, 0.1)',
      color: '#f59e0b',
    },
  ];

  // ─── Experience Timeline ─────────────────────────────────────
  experiences: Experience[] = [
    {
      company: 'Winfocus Solutions Pvt Ltd',
      role: 'Full Stack Developer',
      period: 'Jun 2025 – Present',
      location: 'Andhra Pradesh, India',
      type: 'Full Time',
      logo: 'fas fa-capsules',
      color: '#00bcd4',
      description:
        "Delivering production-grade multi-tenant Pharma Management System and a pioneering Multilanguage Dynamic Converter tool used across the organization's Angular + Java Microservices platform.",
      achievements: [
        'Built <strong>multi-tenant Pharma Management System</strong> — separate microservices for inventory, billing, user management, and reporting with PostgreSQL schema-per-tenant isolation',
        'Implemented <strong>multilanguage dynamic UI</strong> — labels, button names, placeholders, and field names all driven from the database, switchable per user preference at runtime',
        'Created a standalone <strong>Multilanguage Converter tool</strong> (Angular + Docker, backend built with AI assistance) — accepts a project ZIP, scans HTML/TS files, converts all static text to dynamic label keys, and outputs CSV + SQL INSERT queries',
        'Integrated <strong>Hugging Face AI API</strong> in the converter tool to auto-translate labels into multiple languages in batch',
        'Configured <strong>Spring Security + Eureka + API Gateway</strong> for centralized routing, JWT authentication, and role-based access across all services',
        'Deployed all services using <strong>Docker containers + Kubernetes</strong>; used VMs and Git/SVN for version control',
        'Worked on <strong>Angular frontend</strong> with lazy-loaded modules, reactive forms, HTTP interceptors, and route guards',
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
        'SVN',
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
        'Enterprise asset management system for Hyderabad Metro Rail — managing station assets across locations, categories, and groups. Built with Angular frontend, MSSQL database, and a Spring Boot microservices backend with Auth, Admin, and Asset Register services.',
      achievements: [
        'Designed and developed <strong>inventory screens</strong> for asset tracking by location, category, layout group type, and group — used live in Hyderabad Metro stations',
        'Written <strong>stored procedures</strong> in MSSQL for complex asset query operations, batch inserts, and audit logging',
        'Built <strong>Angular screen layouts</strong> for asset registration and filtering — location-based and category-based views with dynamic grid layouts',
        'Created <strong>database indexes and synonyms</strong> for optimized cross-schema query performance across services',
        'Worked on <strong>microservices architecture</strong> — Auth Service, Admin Service, Asset Register Service, and a Common Library for shared interfaces and DTOs',
        'Deployed each <strong>microservice individually</strong> and connected through an API Gateway — manual deployment workflow per service',
        'Collaborated on <strong>client system integration</strong> — regularly interfaced with client environments and adapted the system to their operational requirements',
      ],
      techUsed: [
        'Angular',
        'Java',
        'Spring Boot',
        'MSSQL',
        'Stored Procedures',
        'API Gateway',
        'Common Library',
        'Git',
      ],
    },
    {
      company: 'JSpiders Training Institute',
      role: 'Java Full Stack Trainee',
      period: 'Jun 2024 – Jan 2025',
      location: 'Bangalore, India',
      type: 'Training',
      logo: 'fas fa-graduation-cap',
      color: '#059669',
      description:
        'Earned competitive scholarship. Built Bank Management System as capstone project. Mastered Java, Spring Boot, SQL, and Angular full-stack development.',
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
        'HTML',
        'CSS',
        'JavaScript',
        'Angular',
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
      title: 'Multi-Tenant Pharma Platform with Multilanguage UI',
      institution: 'Winfocus Solutions Pvt Ltd',
      timeline: 'Jun 2025 – Present',
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
      title: 'Multilanguage Dynamic Converter Tool',
      institution: 'Winfocus Solutions Pvt Ltd — Internal Tooling',
      timeline: '2025',
      techStack:
        'Angular · Hugging Face AI API · Docker · CSV / SQL Generation',
      description:
        'An internal developer tool that converts any existing Angular project into a fully dynamic multilanguage application — accepts a project ZIP, scans all HTML and TypeScript files, replaces static text with dynamic label keys, and outputs ready-to-import CSV + SQL INSERT queries.',
      problemSolved:
        'Converting large existing Angular projects to multilanguage support manually was expensive and error-prone. This tool automates the entire conversion — the developer specifies a pattern and the tool handles scanning, replacing, and generating database entries.',
      features: [
        'Built an <strong>AI-powered backend</strong> (developed with AI assistance) that unzips project folders, traverses all HTML/TS files, and identifies static text using configurable pattern matching.',
        'Integrated <strong>Hugging Face AI API</strong> for batch auto-translation — one label generates values for all configured languages in a single API call.',
        'Generates <strong>ZIP output</strong> containing converted project files + CSV files + SQL INSERT queries ready to run directly in the target database.',
      ],
      highlights: [
        'Converts entire Angular project ZIP automatically',
        'AI-powered batch translation via Hugging Face',
        'Outputs SQL INSERT queries + CSV for DB import',
        'Configurable text pattern matching',
        'Angular frontend for upload and config UI',
        'Docker deployment for consistent cross-env use',
      ],
      tags: ['angular', 'microservices'],
      skills: [
        { name: 'Angular', level: 80 },
        { name: 'Angular', level: 82 },
        { name: 'AI Integration', level: 78 },
      ],
      accent: '#f59e0b',
      badge: '🌐 AI · Internal Tool',
      architecture:
        'Angular Upload UI → Backend API → Hugging Face AI Batch Translator → CSV/SQL Generator → Output ZIP',
      githubUrl: 'https://github.com/Raman-8688',
      liveUrl: '',
      backendFrontendSeparation:
        'Angular upload/config frontend; AI-assisted backend handles file scanning and Hugging Face API orchestration.',
      dockerK8sUsage:
        'Entire tool packaged as Docker container — team runs it with a single docker-compose up command.',
      securityAuth:
        'Internal tool; secured within company network. Input validation on all uploaded ZIP contents.',
      cicdWorkflow:
        'Docker-based deployment; Git version controlled with release branches per major conversion pattern update.',
    },
    {
      title: 'AMS — Asset Management System (Hyderabad Metro)',
      institution: 'Client Project · Live Production System',
      timeline: '2024',
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
        'MSSQL stored procedures + indexes + synonyms',
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
      title: 'Enterprise Order Management System',
      institution: 'Personal Project · Microservices & Kafka',
      timeline: '2025',
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
      title: 'Secure AI Assistant',
      institution: 'Personal Full Stack Project',
      timeline: '2025',
      techStack:
        'Angular · Spring Boot · Spring Security · JWT · Hugging Face API · PostgreSQL · BCrypt',
      description:
        'A production-quality full-stack AI chat application with complete user authentication lifecycle — registration, email OTP verification, JWT-protected APIs, and Hugging Face AI integration.',
      problemSolved:
        'AI tools are typically unsecured or require API keys exposed on the frontend. This project demonstrates a secure backend proxy pattern where AI calls are protected behind authenticated Spring Security filters.',
      features: [
        'Implemented full user lifecycle — registration, email OTP verification, and JWT login — using Spring Security stateless sessions.',
        'Proxied Hugging Face Router API calls through Spring Boot backend, ensuring API keys are never exposed to the client.',
        'Built Angular Route Guards and HTTP Interceptors to protect the AI chat UI from unauthenticated access.',
      ],
      highlights: [
        'Email OTP verification on user registration',
        'JWT Bearer token authentication on all AI endpoints',
        'BCrypt password encryption with Spring Security',
        'Angular guards + interceptors for frontend protection',
        'Hugging Face AI model integration via secure backend proxy',
        'PostgreSQL persistence for users and chat sessions',
      ],
      tags: ['angular', 'microservices', 'database'],
      skills: [
        { name: 'Spring Security', level: 82 },
        { name: 'Angular', level: 80 },
        { name: 'AI Integration', level: 75 },
      ],
      accent: '#ec4899',
      badge: '🔐 AI + Security',
      architecture:
        'Angular Client → HTTP Interceptor → Spring Boot API → JWT Filter → Hugging Face AI Router → PostgreSQL',
      githubUrl: 'https://github.com/Raman-8688/secure-ai-assistant',
      liveUrl: '',
      backendFrontendSeparation:
        'Decoupled Angular SPA with Route Guards communicating to a Spring Boot REST backend via JWT-authenticated requests.',
      dockerK8sUsage:
        'Docker Compose file included — spins up Spring Boot app + PostgreSQL in a single command for local dev.',
      securityAuth:
        'Full Spring Security filter chain: email OTP → JWT generation → Bearer token validation on every protected route.',
      cicdWorkflow:
        'GitHub repository with structured frontend/backend split, docker-compose.yml, and documented README for reproducible setup.',
    },
  ];
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