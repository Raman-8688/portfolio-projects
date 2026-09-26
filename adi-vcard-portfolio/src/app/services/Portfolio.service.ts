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
  name = 'Aditya V.';
  shortName = 'Adi';
  titles = [
    'Principal Software Engineer',
    'Senior Microservices Architect',
    'Java & Angular Technical Lead',
    'Enterprise Solutions Architect',
  ];
  email = 'aditya.dev.lead@gmail.com';
  phone = '+91 98765 43210';
  location = 'Hyderabad, Telangana, India';
  github = '';
  linkedin = 'https://linkedin.com/in/aditya-software-lead';
  yearsExp = '10+ Years';
  currentEmployer = 'Global MNC Enterprise Solutions';

  heroTagline = 'Architecting high-scale enterprise microservices, omni-channel platforms & cloud systems.';
  heroSub =
    'Senior Software Engineer & Tech Lead with <strong>10+ years of experience</strong> delivering mission-critical enterprise platforms — from <strong>PhonePe POS E-Commerce integrations</strong> and <strong>Transportation TMS Logistics</strong> to <strong>Indian Railways ERP</strong> and <strong>Real-Time Video Shopping</strong>.';

  socialLinks: SocialLink[] = [
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/aditya-software-lead', label: 'LinkedIn' },
    { icon: 'fas fa-envelope', url: 'mailto:aditya.dev.lead@gmail.com', label: 'Email' },
    { icon: 'fas fa-phone-alt', url: 'tel:+919876543210', label: 'Phone' },
  ];

  // ─── Key Achievements Counters ──────────────────────────────
  achievements: Achievement[] = [
    {
      icon: 'fas fa-shield-alt',
      value: '10+ Yrs',
      label: 'Senior Enterprise Experience',
      color: '#7c3aed',
    },
    {
      icon: 'fas fa-shopping-cart',
      value: '50K+',
      label: 'Daily POS Transactions',
      color: '#00bcd4',
    },
    {
      icon: 'fas fa-truck-monster',
      value: 'Cloud',
      label: 'TMS & Logistics Engine',
      color: '#059669',
    },
    {
      icon: 'fas fa-train',
      value: 'ERP',
      label: 'Indian Railways OFBiz System',
      color: '#ffdb70',
    },
  ];

  // ─── About Profile Data ──────────────────────────────────────
  aboutIntro =
    'I am a <strong>Principal Software Engineer & Technical Lead</strong> with over <strong>10 years of hands-on experience</strong> architecting, building, and operating high-throughput production systems for Tier-1 enterprises. My expertise spans cloud-native Spring Boot microservices, Angular SPAs, omni-channel retail POS systems, and real-time streaming architectures.';

  aboutPoints = [
    {
      icon: 'fas fa-store',
      text: 'Led the architecture for <strong>Enterprise E-Commerce & PhonePe POS Integration</strong> — engineered Spring Boot microservices and Angular interfaces processing <strong>50k+ daily live transactions</strong> with zero downtime.',
    },
    {
      icon: 'fas fa-truck',
      text: 'Architected <strong>Transportation Fleet Logistics & TMS</strong> — built real-time GPS telemetry pipelines, automated route optimization algorithms, driver dispatching, and multi-tenant billing.',
    },
    {
      icon: 'fas fa-train',
      text: 'Spearheaded <strong>Indian Railways Apache OFBiz ERP Customization</strong> — scaled inventory tracking, procurement workflows, and maintenance schedules across regional railway zones on MSSQL & Spring.',
    },
    {
      icon: 'fas fa-video',
      text: 'Developed <strong>Agora Real-Time Video Shopping App</strong> — integrated Agora WebRTC SDK and WebSockets with Angular 19 for interactive live commerce streaming.',
    },
    {
      icon: 'fas fa-cubes',
      text: 'Expert in <strong>Microservices & Cloud Infrastructure</strong> — Kafka event streaming, Spring Cloud Gateway, Redis, Docker, Kubernetes pod autoscaling, and resilient CI/CD pipelines.',
    },
  ];

  infoCards = [
    {
      icon: 'fas fa-briefcase',
      label: 'Experience Level',
      value: '10+ Years (Senior MNC Lead)',
      bg: 'rgba(124, 58, 237, 0.1)',
      color: '#8b5cf6',
    },
    {
      icon: 'fas fa-building',
      label: 'Domain Expertise',
      value: 'E-Commerce, Logistics, ERP & Video AI',
      bg: 'rgba(59, 130, 246, 0.1)',
      color: '#3b82f6',
    },
    {
      icon: 'fas fa-award',
      label: 'Architecture',
      value: 'Microservices & Event Streaming',
      bg: 'rgba(16, 185, 129, 0.1)',
      color: '#10b981',
    },
    {
      icon: 'fas fa-layer-group',
      label: 'Production Systems',
      value: '4 Enterprise Platform Deployments',
      bg: 'rgba(255, 219, 112, 0.1)',
      color: '#ffdb70',
    },
  ];

  // ─── Experience Timeline ─────────────────────────────────────
  experiences: Experience[] = [
    {
      company: 'Enterprise Software Solutions MNC',
      role: 'Principal Software Engineer & Technical Lead',
      period: '2021 – Present',
      location: 'Hyderabad, India',
      type: 'Full Time',
      logo: 'fas fa-user-tie',
      color: '#00bcd4',
      description:
        'Heading end-to-end technical architecture, microservices design, and frontend engineering across high-impact enterprise clients.',
      achievements: [
        'Architected <strong>Enterprise E-Commerce & PhonePe POS Integration</strong> handling 50,000+ daily transactions across retail outlets',
        'Designed <strong>Transportation Fleet Logistics & TMS</strong> with real-time GPS tracking and dynamic routing engines',
        'Engineered <strong>Agora Real-Time Video Shopping App</strong> using WebRTC SDK and Angular 19 for live interactive shopping',
        'Mentored cross-functional team of 12+ developers and implemented automated CI/CD pipelines using Jenkins, Docker, and Kubernetes',
      ],
      techUsed: [
        'Java 21',
        'Spring Boot 3',
        'Angular 19',
        'Microservices',
        'Kafka',
        'PostgreSQL',
        'Redis',
        'Docker',
        'Kubernetes',
        'AWS',
      ],
    },
    {
      company: 'Global Technology Systems',
      role: 'Senior Microservices & Full Stack Developer',
      period: '2017 – 2021',
      location: 'Hyderabad, India',
      type: 'Full Time',
      logo: 'fas fa-laptop-code',
      color: '#7c3aed',
      description:
        'Delivered large-scale ERP solutions and cloud migration projects for enterprise public sector and corporate clients.',
      achievements: [
        'Led Indian Railways <strong>Apache OFBiz ERP Customization</strong> — built inventory modules and MSSQL stored procedures',
        'Migrated monolithic backend systems to <strong>Spring Cloud Microservices</strong> architecture with API Gateway and Eureka',
        'Optimized SQL queries and database indexes, reducing report generation times by 65%',
      ],
      techUsed: [
        'Java',
        'Spring Boot',
        'Angular',
        'Apache OFBiz',
        'MSSQL',
        'Spring Cloud Gateway',
        'Eureka',
      ],
    },
    {
      company: 'Enterprise Solutions Corp',
      role: 'Software Engineer',
      period: '2014 – 2017',
      location: 'Bangalore, India',
      type: 'Full Time',
      logo: 'fas fa-code',
      color: '#059669',
      description:
        'Developed core web applications and RESTful APIs for inventory and business workflow platforms.',
      achievements: [
        'Developed core web applications using Java Spring MVC and Angular JS/Angular 2+',
        'Implemented secure REST APIs with OAuth2 authentication',
      ],
      techUsed: [
        'Java',
        'Spring Framework',
        'REST APIs',
        'MySQL',
        'JavaScript',
        'HTML5/CSS3',
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
        { name: 'Angular 19', percentage: 95 },
        { name: 'TypeScript', percentage: 92 },
        { name: 'HTML5 / CSS3 / SCSS', percentage: 95 },
        { name: 'RxJS & Signals', percentage: 90 },
      ],
    },
    {
      title: 'Backend Engineering',
      icon: 'fas fa-server',
      color: '#7c3aed',
      skills: [
        { name: 'Java 17 / 21', percentage: 95 },
        { name: 'Spring Boot 3', percentage: 94 },
        { name: 'Microservices Architecture', percentage: 95 },
        { name: 'REST APIs & WebSockets', percentage: 92 },
      ],
    },
    {
      title: 'Microservices & Integration',
      icon: 'fas fa-network-wired',
      color: '#ffdb70',
      skills: [
        { name: 'Apache Kafka Event Streaming', percentage: 90 },
        { name: 'Spring Cloud Gateway & Eureka', percentage: 92 },
        { name: 'PhonePe POS & Payment SDKs', percentage: 90 },
        { name: 'Agora WebRTC SDK', percentage: 88 },
      ],
    },
    {
      title: 'Databases & Performance',
      icon: 'fas fa-database',
      color: '#059669',
      skills: [
        { name: 'PostgreSQL Multi-Tenancy', percentage: 94 },
        { name: 'MSSQL / Stored Procedures', percentage: 90 },
        { name: 'Redis In-Memory Cache', percentage: 88 },
        { name: 'Query Optimization & Indexing', percentage: 92 },
      ],
    },
    {
      title: 'Cloud & DevOps Tools',
      icon: 'fas fa-cloud',
      color: '#f59e0b',
      skills: [
        { name: 'Docker & Containerization', percentage: 90 },
        { name: 'Kubernetes Pod Scaling', percentage: 88 },
        { name: 'CI/CD Pipelines (Jenkins/GitLab)', percentage: 88 },
        { name: 'AWS Cloud Services', percentage: 85 },
      ],
    },
  ];

  // ─── Projects Catalog ───────────────────────────────────────
  projects: Project[] = [
    {
      title: 'Enterprise E-Commerce & PhonePe POS Integration',
      institution: 'Retail MNC Enterprise System',
      timeline: '2023 - Present',
      techStack:
        'Angular 19 · Spring Boot · Microservices · PostgreSQL · PhonePe POS SDK · Redis · Kafka · Docker',
      description:
        'High-availability omni-channel retail backend with Spring Boot microservices, Angular frontend, and PhonePe payment terminal integration processing over 50,000 daily transactions.',
      problemSolved:
        'Legacy POS terminals suffered from transaction latency and inventory mismatches during peak sales. Integrated a real-time event pipeline and automated payment verification.',
      features: [
        'Built <strong>real-time POS terminal sync</strong> with PhonePe hardware terminals for instant payment reconciliation.',
        'Engineered <strong>multi-store inventory microservice</strong> with Redis caching for instant stock updates.',
        'Developed <strong>Angular cashier dashboard</strong> with responsive offline-first fallback capability.',
      ],
      highlights: [
        '50k+ daily transactions with 99.99% uptime',
        'PhonePe POS hardware SDK integration',
        'Redis caching for sub-millisecond stock checks',
        'Kafka event streaming for order events',
      ],
      tags: ['microservices', 'angular', 'database'],
      skills: [
        { name: 'Spring Boot', level: 95 },
        { name: 'Angular 19', level: 92 },
        { name: 'PhonePe POS', level: 90 },
      ],
      accent: '#00bcd4',
      badge: '🛍️ Retail POS · Production',
      image: 'assets/project-phonepe-pos.jpg',
      architecture:
        'Angular POS UI → API Gateway → [Inventory | Payment | Order] Microservices → PhonePe Gateway → PostgreSQL',
      githubUrl: '',
      liveUrl: '',
      backendFrontendSeparation:
        'Decoupled Angular 19 SPA communicating to Spring Boot microservices mesh via REST & WebSockets.',
      dockerK8sUsage:
        'Containerized with Docker; managed via Kubernetes cluster with auto-scaling during high-traffic events.',
      securityAuth:
        'PCI-DSS compliant security flow with OAuth2/JWT token verification.',
      cicdWorkflow:
        'Automated CI/CD via Jenkins & Docker registry.',
    },
    {
      title: 'Transportation Fleet Logistics & TMS',
      institution: 'Logistics Enterprise System',
      timeline: '2022 - 2023',
      techStack:
        'Angular 19 · Spring Boot · Microservices · PostgreSQL · GPS Telemetry · WebSockets · Docker · AWS',
      description:
        'Cloud-native transportation & fleet management software with real-time GPS telemetry tracking, automated route optimization, driver dispatching, and multi-tenant billing.',
      problemSolved:
        'Manual fleet tracking caused delivery delays and high fuel costs. Built an automated telemetry engine that calculates optimal routes and tracks vehicles live on map view.',
      features: [
        'Implemented <strong>live WebSocket telemetry stream</strong> tracking 1,000+ active fleet vehicles.',
        'Engineered <strong>automated route optimization algorithms</strong> reducing fuel consumption by 18%.',
        'Built <strong>multi-tenant freight billing engine</strong> supporting customizable rate cards per client.',
      ],
      highlights: [
        'Real-time GPS tracking for 1,000+ fleet vehicles',
        'Automated route optimization engine',
        'Multi-tenant billing & invoice generation',
        'Responsive map-based Angular dashboard',
      ],
      tags: ['angular', 'microservices'],
      skills: [
        { name: 'Spring Boot', level: 92 },
        { name: 'Angular 19', level: 90 },
        { name: 'WebSockets', level: 88 },
      ],
      accent: '#059669',
      badge: '🚛 Logistics · Enterprise',
      image: 'assets/project-fleet-logistics.jpg',
      architecture:
        'Angular Telemetry UI → WebSockets Gateway → [GPS Streamer | Route Engine | Billing] Services → PostgreSQL',
      githubUrl: '',
      liveUrl: '',
      backendFrontendSeparation:
        'Angular frontend with Leaflet/OpenStreetMap rendering driven by Spring Boot WebSocket streams.',
      dockerK8sUsage:
        'Deploys as containerized microservices on AWS EKS.',
      securityAuth:
        'Role-based access for Dispatchers, Drivers, and Admin Managers.',
      cicdWorkflow:
        'GitLab CI pipeline deploying to Kubernetes.',
    },
    {
      title: 'Indian Railways OFBiz ERP Customization',
      institution: 'Railway Enterprise Client',
      timeline: '2021 - 2022',
      techStack:
        'Apache OFBiz · Java · Spring Boot · MSSQL · Stored Procedures · Angular · REST APIs',
      description:
        'Large-scale ERP customization for railway inventory, procurement, asset tracking, and maintenance schedules built on Apache OFBiz, Java Spring, and MSSQL.',
      problemSolved:
        'Legacy paper-based railway maintenance led to delays. Digitized asset maintenance records and automated procurement workflows across railway zones.',
      features: [
        'Customized <strong>Apache OFBiz ERP modules</strong> for railway inventory & asset tracking.',
        'Authored <strong>MSSQL stored procedures</strong> for complex audit logs and batch inventory reconciliation.',
        'Designed <strong>Angular management portal</strong> for station engineers and procurement officers.',
      ],
      highlights: [
        'Digitized maintenance workflows for railway zones',
        'MSSQL stored procedures & query optimization',
        'Apache OFBiz framework extension',
        'High-security enterprise audit logging',
      ],
      tags: ['angular', 'microservices', 'database'],
      skills: [
        { name: 'Java / OFBiz', level: 90 },
        { name: 'MSSQL', level: 92 },
        { name: 'Angular', level: 88 },
      ],
      accent: '#7c3aed',
      badge: '🚆 Railways · Enterprise',
      image: 'assets/project-railways-ofbiz.jpg',
      architecture:
        'Angular UI → Spring API Layer → Apache OFBiz Core Engine → MSSQL Stored Procedures',
      githubUrl: '',
      liveUrl: '',
      backendFrontendSeparation:
        'Custom Angular UI communicating via REST APIs to Apache OFBiz Java backend.',
      dockerK8sUsage:
        'Deployed on high-security enterprise Linux servers.',
      securityAuth:
        'Enterprise Single Sign-On (SSO) integration.',
      cicdWorkflow:
        'Enterprise deployment scripts with automated rollback support.',
    },
    {
      title: 'Agora Real-Time Video Shopping App',
      institution: 'E-Commerce Innovation Project',
      timeline: '2023 - 2024',
      techStack:
        'Angular 19 · Agora WebRTC SDK · WebSockets · Spring Boot · Microservices · Redis · PostgreSQL',
      description:
        'Interactive live-video commerce application powered by Agora WebRTC SDK, WebSockets, Angular 19, and Spring Boot for live broadcast product showcases and instant checkout.',
      problemSolved:
        'Standard e-commerce static photos lack engagement. Created a low-latency live video streaming experience where hosts can demo products live while viewers buy in real-time.',
      features: [
        'Integrated <strong>Agora WebRTC Video SDK</strong> for ultra-low latency (<200ms) live streaming.',
        'Built <strong>real-time chat & live product overlay</strong> allowing viewers to buy during the live video.',
        'Engineered <strong>Spring Boot WebSocket gateway</strong> managing thousands of concurrent viewers.',
      ],
      highlights: [
        'Ultra-low latency Agora WebRTC video streaming',
        'In-stream instant checkout overlay',
        'Real-time chat & host interactions',
        'Spring Boot WebSocket mesh',
      ],
      tags: ['angular', 'microservices'],
      skills: [
        { name: 'Angular 19', level: 94 },
        { name: 'Agora WebRTC', level: 90 },
        { name: 'Spring Boot', level: 90 },
      ],
      accent: '#ffdb70',
      badge: '🎥 Live Stream · Innovation',
      image: 'assets/project-video-shopping.jpg',
      architecture:
        'Angular Video App → Agora WebRTC Cloud + Spring WebSocket Gateway → [Live Commerce Service] → Redis',
      githubUrl: '',
      liveUrl: '',
      backendFrontendSeparation:
        'Angular 19 SPA with custom video player overlays connected to Spring Boot video backend.',
      dockerK8sUsage:
        'Docker containers running on cloud infrastructure with auto-scaling streams.',
      securityAuth:
        'Secure token generation via Agora authentication service.',
      cicdWorkflow:
        'Automated build pipeline with CDN media distribution.',
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