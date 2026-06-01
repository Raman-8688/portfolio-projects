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
  yearsExp = '2';

  // ─── Hero Intro (concise, powerful) ─────────────────────────
  heroTagline = 'Building enterprise-grade systems that scale.';
  heroSub =
    'Full Stack Developer specializing in <strong>Microservices Architecture</strong>, <strong>Spring Boot</strong>, <strong>Angular</strong> and <strong>Cloud Deployments</strong> — currently crafting a multi-tenant Pharma platform at Winfocus Solutions.';

  // ─── Stats / Achievements counters ──────────────────────────
  achievements: Achievement[] = [
    {
      icon: 'fas fa-code-branch',
      value: '5+',
      label: 'Projects Delivered',
      color: '#00bcd4',
    },
    {
      icon: 'fas fa-layer-group',
      value: '10+',
      label: 'Microservices Built',
      color: '#7c3aed',
    },
    {
      icon: 'fas fa-database',
      value: '5+',
      label: 'DB Schemas Designed',
      color: '#059669',
    },
    {
      icon: 'fas fa-robot',
      value: 'AI',
      label: 'AI App Built',
      color: '#ec4899',
    },
  ];

  // ─── About ──────────────────────────────────────────────────
  aboutIntro =
    'I am a <strong>Full Stack Developer</strong> with hands-on experience building production-grade <strong>Microservices architectures</strong> deployed on <strong>AWS</strong> using <strong>Docker & Kubernetes</strong>.';

  aboutPoints = [
    {
      icon: 'fas fa-building',
      text: 'Working at <strong>Winfocus Solutions Pvt Ltd</strong> — architecting a full-fledged multi-tenant Pharma platform with Angular + Java microservices + PostgreSQL.',
    },
    {
      icon: 'fas fa-network-wired',
      text: 'Implemented <strong>Eureka Server, API Gateway, Spring Security, OAuth2</strong> — building resilient service meshes with global exception handling.',
    },
    {
      icon: 'fas fa-users-cog',
      text: 'Designed a <strong>Multi-Tenant architecture</strong> — single application serving multiple organizations via dynamic schema routing (public/private schema isolation).',
    },
    {
      icon: 'fas fa-cloud-upload-alt',
      text: 'Deployed applications using <strong>Docker, Kubernetes</strong> and <strong>AWS</strong> — containerized microservices with CI/CD pipelines.',
    },
    {
      icon: 'fas fa-database',
      text: 'Deep expertise in <strong>PostgreSQL, MySQL, PL/SQL</strong> — stored procedures, query optimization, multi-schema data isolation strategies.',
    },
  ];

  infoCards = [
    {
      icon: 'fas fa-calendar-check',
      label: 'Experience',
      value: '2 Years (Java Full Stack)',
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
      period: 'Jan 2025 – Present',
      location: 'Andhra Pradesh, India',
      type: 'Full Time',
      logo: 'fas fa-capsules',
      color: '#00bcd4',
      description:
        'Architecting and delivering a production-grade multi-tenant Pharma Management System using Angular + Java Microservices + PostgreSQL.',
      achievements: [
        'Built <strong>full-fledged microservices</strong> Pharma application — separate services for inventory, billing, users, reporting',
        'Implemented <strong>Multi-Tenant architecture</strong> — dynamic schema routing per organization login (public DB for config, private schema per tenant)',
        'Integrated <strong>Eureka Server + API Gateway</strong> for service discovery and centralized routing',
        'Configured <strong>Spring Security + Auth</strong> with role-based access control across all services',
        'Implemented <strong>Global Exception Handling</strong> across all microservices for consistent error responses',
        'Deployed application using <strong>Docker containers</strong> and managed with <strong>Kubernetes</strong>',
        'Angular frontend with lazy-loaded modules, reactive forms, interceptors, guards',
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
        'AWS',
      ],
    },
    {
      company: 'Metro Project',
      role: 'Full Stack Developer',
      period: '2024',
      location: 'India',
      type: 'Project',
      logo: 'fas fa-train',
      color: '#7c3aed',
      description:
        'Developed metro operations management system with real-time tracking, scheduling and backend API integrations.',
      achievements: [
        'Built <strong>real-time schedule management</strong> with Spring Boot REST APIs',
        'Developed Angular frontend with <strong>dynamic dashboards</strong> and route visualization',
        'Integrated <strong>PostgreSQL</strong> for fare and schedule data management',
        'Implemented <strong>role-based dashboards</strong> for admin, operator and passenger portals',
      ],
      techUsed: ['Angular', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Java'],
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
        'Earned competitive scholarship. Built Bank Management System as capstone project. Mastered Java, Spring Boot, SQL, and Angular.',
      achievements: [
        'Awarded <strong>scholarship via competitive examination</strong>',
        'Built <strong>Bank Management System</strong> — full-stack Spring Boot + SQL',
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
        { name: 'PL/SQL', percentage: 75 },
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
      title: 'Multi-Tenant Pharma Platform & Label Generator',
      institution: 'Winfocus Solutions Pvt Ltd',
      timeline: 'Jan 2025 – Present',
      techStack:
        'Angular · Java · Spring Boot · Microservices · PostgreSQL · Docker · Kubernetes',
      description:
        'An enterprise-grade, high-concurrency pharmaceutical portal operating on a multi-tenant framework with complete dynamic schema data isolation.',
      problemSolved:
        'Hardcoded labels and localized text strings required continuous developer builds for multi-lingual deployments, coupled with data security challenges between tenant clinics.',
      features: [
        "Designed dynamic multi-tenant schema routing matching each organization's secure database schema.",
        'Created a dynamic localization label generator caching UI strings in a PostgreSQL cache buffer to enable live label hot-swaps.',
        'Built reactive Angular lazy-loaded modules, centralized request interceptors, and robust route guards.',
      ],
      highlights: [
        'Dynamic multi-tenant schema isolation routing',
        'Hot-swappable real-time translation label generator',
        '10+ Spring Boot containerized microservices',
        'Secure token validation via Angular HTTP interceptor',
        'Global centralized Exception Handling controller',
      ],
      tags: ['microservices', 'angular', 'cloud', 'database'],
      skills: [
        { name: 'Angular', level: 82 },
        { name: 'Spring Boot', level: 85 },
        { name: 'PostgreSQL', level: 80 },
      ],
      accent: '#3b82f6',
      badge: '🏆 Production SaaS',
      architecture:
        'Angular UI ➔ API Gateway ➔ Localization & Schema Router ➔ PostgreSQL Tenant DB',
      githubUrl: 'https://github.com/Raman-8688/pharma-tenant-localization',
      liveUrl: '',
      backendFrontendSeparation:
        'Decoupled Angular 19 SPA communicating with Spring Boot REST endpoints.',
      dockerK8sUsage:
        'Multi-stage Dockerfiles packaged and deployed to Kubernetes cluster with horizontal pod autoscalers.',
      securityAuth:
        'Centralized Spring Security context checking dynamic tenant parameters via Custom Request Filters.',
      cicdWorkflow:
        'GitHub Actions running tests, building Docker images, and triggering Kubernetes rollouts.',
    },
    {
      title: 'Employee Management System',
      institution: 'Winfocus Solutions Pvt Ltd',
      timeline: 'Jul 2024 – Jan 2025',
      techStack:
        'Angular · Java · Spring Boot · Spring Security · SQL Server · REST APIs',
      description:
        'A professional employee command console managing user hierarchies, profiles, audit records, and role-based permissions for internal staff administration.',
      problemSolved:
        'Inconsistent staff credential management and heavy database performance lag during hierarchical organizational directory lookups.',
      features: [
        'Implemented fine-grained Role-Based Access Control (RBAC) securing REST endpoints via Spring Security.',
        'Constructed custom SQL stored procedures and optimized indices to speed up reporting queries by 45%.',
        'Developed an interactive org chart layout using Angular structural directives and flexbox components.',
      ],
      highlights: [
        'Secure RBAC with customized Spring Security filter chains',
        'Stored procedures for rapid batch history auditing',
        'Dynamic frontend routing for different management tiers',
        'Optimized database queries with 45% lag reduction',
      ],
      tags: ['angular', 'database'],
      skills: [
        { name: 'Angular', level: 80 },
        { name: 'Spring Boot', level: 78 },
        { name: 'SQL Server', level: 82 },
      ],
      accent: '#06b6d4',
      badge: '🏢 Enterprise Tool',
      architecture:
        'Angular 19 ➔ Spring Security Context ➔ Spring Boot App ➔ SQL Server DB',
      githubUrl: 'https://github.com/Raman-8688/employee-management-system',
      liveUrl: '',
      backendFrontendSeparation:
        'Modular Angular admin portal consuming a secure, monolithic Java Spring Boot REST API.',
      dockerK8sUsage:
        'Dockerized application run locally in a multi-container Docker Compose environment alongside SQL Server.',
      securityAuth:
        'Strict Role-Based Access Control (RBAC) and method-level pre-authorization guards.',
      cicdWorkflow:
        'Git validation workflow building JAR package and verifying Angular production compilation.',
    },
    {
      title: 'Microservices Architecture Project',
      institution: 'Personal Deep-Dive & Open Source Prototype',
      timeline: '2024',
      techStack:
        'Spring Boot · Eureka · Spring Cloud Gateway · JWT · Docker · Kubernetes',
      description:
        'A cloud-native, robust prototype illustrating fault-tolerant microservices coordination featuring service mesh registry, auth filters, and container configurations.',
      problemSolved:
        'Monolith applications suffer from tight coupling and single points of failure; containerized distributed services are required for horizontal scaling.',
      features: [
        'Configured Eureka Server for robust service registration, health-checks, and client load-balancing.',
        'Created a Spring Cloud API Gateway utilizing custom pre-filters for global JWT authentication checks.',
        'Designed Dockerfiles and Kubernetes deployment scripts for seamless cluster orchestration.',
      ],
      highlights: [
        'Eureka Server node registry & active health tracking',
        'API Gateway centralized router with filter interceptors',
        'Stateless session management via JWT signing validation',
        'Kubernetes pod orchestration manifests',
      ],
      tags: ['microservices', 'cloud'],
      skills: [
        { name: 'Microservices', level: 85 },
        { name: 'Docker/K8s', level: 78 },
        { name: 'Eureka Gateway', level: 80 },
      ],
      accent: '#a855f7',
      badge: '⚙️ Cloud-Native',
      architecture:
        'Client Requests ➔ API Gateway (JWT Filter) ➔ Eureka Service Discovery ➔ Spring Boot Pods',
      githubUrl: 'https://github.com/Raman-8688/spring-boot-microservice-mesh',
      liveUrl: '',
      backendFrontendSeparation:
        'Standalone Spring Cloud Gateway distributing load dynamically to back-end services.',
      dockerK8sUsage:
        'Each service has a multi-stage Dockerfile deployed inside Kubernetes local/remote cluster.',
      securityAuth:
        'Gateway acts as authentication barrier, verifying JWT signature and appending claims to requests.',
      cicdWorkflow:
        'GitHub actions compiling modules, building Docker images, and deploying to Kubernetes.',
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
    {
      title: 'Metro Rail Operations System',
      institution: 'Personal Project',
      timeline: '2024',
      techStack: 'Angular · Spring Boot · PostgreSQL · REST APIs · Java',
      description:
        'A metro operations management portal with real-time schedule tracking, fare management, and role-based dashboards for admin, operator, and passenger portals.',
      problemSolved:
        'Manual schedule management across metro routes was error-prone and lacked real-time visibility for operators and passengers.',
      features: [
        'Built real-time schedule management with Spring Boot REST APIs and dynamic Angular dashboards.',
        'Implemented role-based dashboards — admin, operator, and passenger — with separate routing and access controls.',
        'Integrated PostgreSQL for structured fare, route, and schedule data with optimized query patterns.',
      ],
      highlights: [
        'Real-time schedule management APIs',
        'Role-based portals for 3 user types',
        'Dynamic Angular route visualization',
        'PostgreSQL fare and schedule data layer',
        'Reactive Angular frontend with modular layout',
      ],
      tags: ['angular', 'database'],
      skills: [
        { name: 'Angular', level: 78 },
        { name: 'Spring Boot', level: 80 },
        { name: 'PostgreSQL', level: 78 },
      ],
      accent: '#7c3aed',
      badge: '🚆 Operations',
      architecture:
        'Angular Portal → Spring Boot REST → PostgreSQL Schedule & Fare DB',
      githubUrl: 'https://github.com/Raman-8688',
      liveUrl: '',
      backendFrontendSeparation:
        'Modular Angular portal with role-based routing consuming Spring Boot REST APIs.',
      dockerK8sUsage:
        'Dockerized backend for consistent local environment setup.',
      securityAuth:
        'Role-based access control with separate secured endpoints per user type.',
      cicdWorkflow:
        'Git-based workflow with Maven build validation on each commit.',
    },
    {
      title: 'AI Support Assistant & Semantic Search',
      institution: 'Personal Capstone & JSpiders Project',
      timeline: '2024',
      techStack:
        'Angular · Spring Boot · Hugging Face API · PostgreSQL · RxJS WebSockets',
      description:
        'An AI-driven customer feedback parser that extracts support queries, executes semantic vector indexing, and autocompletes suggested responses.',
      problemSolved:
        'Support operators spent significant time digging through documentation files to resolve recurring tech inquiries.',
      features: [
        'Integrated Hugging Face Router API for streaming automated query answers.',
        'Implemented live web-socket notifications for message streams in the Angular frontend.',
        'Designed database schemas in PostgreSQL to archive conversation streams for performance auditing.',
      ],
      highlights: [
        'Sleek reactive chat client using RxJS streams',
        'Contextual prompts built via dynamic Spring Boot templates',
        'Archiving system logging request auditing records',
        'Asynchronous notifications via active WebSockets',
      ],
      tags: ['angular', 'database'],
      skills: [
        { name: 'Angular', level: 75 },
        { name: 'Spring Boot', level: 80 },
        { name: 'AI Integration', level: 70 },
      ],
      accent: '#ec4899',
      badge: '🤖 AI & Automation',
      architecture:
        'Angular Client ➔ WebSocket Controller ➔ Spring Boot Core ➔ Hugging Face API / DB Log',
      githubUrl: 'https://github.com/Raman-8688/ai-support-assistant',
      liveUrl: '',
      backendFrontendSeparation:
        'Angular SPA utilizing WebSocket connections to stream real-time chat with Spring Boot server.',
      dockerK8sUsage:
        'Spring Boot server and PostgreSQL DB packaged as containers for quick setup.',
      securityAuth:
        'OAuth2 authentication controls with security parameters validation.',
      cicdWorkflow:
        'Pipeline validating Maven compilation dependencies and executing Unit tests.',
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
