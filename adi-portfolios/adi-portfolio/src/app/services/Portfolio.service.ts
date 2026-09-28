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
  themeColor = signal<ThemeColor>('#0ea5e9'); // Executive Sapphire Cyan

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
  name = 'Adi Sekhara Reddy Hanumanthu';
  shortName = 'Adi Sekhara';
  titles = [
    'Senior Java Full Stack Developer (10+ Yrs)',
    'Enterprise Solution Architect',
    'Spring Boot & Microservices Lead',
    'Payment Gateway & ERP Systems Specialist',
  ];
  email = 'adireddy.h@gmail.com';
  phone = '+91-9182370938';
  location = 'Hyderabad, Telangana, India';
  linkedin = 'https://linkedin.com/in/adisekharareddy';
  yearsExp = '10+';
  resumeUrl = 'assets/Resumes/Adi_java_full_stack.pdf';
  profileImage = 'assets/profile.png';

  // ─── Hero Intro ─────────────────────────────────────────────
  heroTagline = 'Full Stack Java Developer with 10+ years of experience in architecting and delivering scalable enterprise applications using Java, Spring Boot, Microservices, Angular, REST APIs, and SQL.';
  heroSub =
    'Senior Developer specializing in <strong>E-commerce, Retail, ERP, Warehouse Management, Transportation/Ride platforms</strong>, and digital payment integrations including <strong>PhonePe UPI</strong> and <strong>Agora Real-Time Video Streaming</strong>. Strong expertise in microservices architecture, API integration, database design, and high-availability enterprise production systems.';

  // ─── Stats / Achievements counters ──────────────────────────
  achievements: Achievement[] = [
    {
      icon: 'fas fa-briefcase',
      value: '10+ Yrs',
      label: 'Senior Full Stack Java Exp',
      color: '#0ea5e9',
    },
    {
      icon: 'fas fa-tachometer-alt',
      value: '60% Boost',
      label: 'App Performance & SQL Optimization',
      color: '#6366f1',
    },
    {
      icon: 'fas fa-shield-alt',
      value: '40% Reduction',
      label: 'Support Load via Automated APIs',
      color: '#10b981',
    },
    {
      icon: 'fas fa-users',
      value: '200+ Users',
      label: 'Concurrent ERP Enterprise Users',
      color: '#f59e0b',
    },
  ];

  // ─── About ──────────────────────────────────────────────────
  aboutIntro =
    'Senior Full Stack Java Developer with <strong>10+ years of experience</strong> in architecting, engineering, and optimizing enterprise production applications using <strong>Java, Spring Boot, Microservices, Angular, REST APIs, and SQL</strong>.<br><br>Proven track record across diverse MNC enterprise domains including <strong>E-commerce, Retail, ERP, Warehouse Logistics, Transportation/Ride platforms</strong>, and <strong>Digital Payment integrations (PhonePe UPI)</strong>. Strong expertise in end-to-end application development, microservices architecture, API integration, database design, performance optimization, and delivering secure, scalable, high-availability solutions.';

  aboutPoints: AboutPoint[] = [
    {
      icon: 'fas fa-mobile-alt',
      title: 'PhonePe UPI & WhatsApp API Integration',
      text: 'Integrated PhonePe UPI payment gateway and WhatsApp APIs for secure online transactions and automated customer notifications, reducing operational support load by 40%.',
    },
    {
      icon: 'fas fa-video',
      title: 'Agora Real-Time Video Calling & Live Streaming',
      text: 'Integrated Agora real-time video SDK and live streaming capabilities connecting online retail customers directly with store merchants.',
    },
    {
      icon: 'fas fa-subway',
      title: 'South Central & Southern Railways Automation',
      text: 'Automated stock and purchase workflows for South Central & Southern Railways using customized Apache OFBiz ERP modules and Spring Boot REST APIs.',
    },
    {
      icon: 'fas fa-chart-line',
      title: '60% Enterprise Application Performance Optimization',
      text: 'Improved end-to-end application performance by 60% through targeted SQL query optimization, database indexing, REST API payload optimization, and frontend Angular caching.',
    },
  ];

  infoCards = [
    {
      icon: 'fas fa-briefcase',
      label: 'Experience Level',
      value: '10+ Years (Senior Lead Developer)',
      bg: 'rgba(14, 165, 233, 0.12)',
      color: '#0ea5e9',
    },
    {
      icon: 'fas fa-building',
      label: 'Current Role',
      value: 'Senior Java Developer @ My Hub Technologies',
      bg: 'rgba(99, 102, 241, 0.12)',
      color: '#6366f1',
    },
    {
      icon: 'fas fa-graduation-cap',
      label: 'Education',
      value: 'JNTU University, Anantapur (B.E. CSE)',
      bg: 'rgba(16, 185, 129, 0.12)',
      color: '#10b981',
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      bg: 'rgba(245, 158, 11, 0.12)',
      color: '#f59e0b',
    },
  ];

  // ─── Experience Timeline ─────────────────────────────────────
  experiences: Experience[] = [
    {
      company: 'My Hub Technologies Ltd',
      role: 'Senior Java Developer',
      period: 'May 2023 – Present',
      location: 'Hyderabad, India',
      type: 'Full Time',
      badge: 'Current Role',
      logo: 'fas fa-briefcase',
      color: '#0ea5e9',
      description:
        'Architecting and building full-stack enterprise applications using Spring Boot, Microservices, and Angular with multi-role authentication and admin dashboards for E-commerce, Retail, and Transportation platforms.',
      achievements: [
        'Built full-stack applications using <strong>Spring Boot, Microservices, and Angular</strong> with multi-role authentication and admin dashboards for E-commerce, Retail, and Transportation platforms.',
        'Developed scalable <strong>RESTful APIs</strong> for product/vendor onboarding, order management, delivery tracking, transportation, and POS systems.',
        'Developed responsive <strong>Angular UI components</strong> for customer, vendor, driver, and admin workflows with cross-browser compatibility.',
        'Integrated <strong>PhonePe UPI payment gateway and WhatsApp APIs</strong> for secure payments, transaction processing, and automated customer notifications, reducing support load by 40%.',
        'Improved application performance by <strong>60%</strong> through SQL, database, API, and frontend optimization.',
      ],
      techUsed: [
        'Java',
        'Spring Boot',
        'Microservices',
        'Angular',
        'Spring Security',
        'PhonePe UPI',
        'WhatsApp API',
        'PostgreSQL',
        'REST APIs',
        'AWS (EC2, S3)',
        'Git',
      ],
    },
    {
      company: 'Winfocus Solutions Pvt. Ltd.',
      role: 'Software Engineer',
      period: 'Sep 2016 – Apr 2023',
      location: 'Hyderabad, India',
      type: 'Full Time',
      badge: '6.5+ Years',
      logo: 'fas fa-building',
      color: '#6366f1',
      description:
        'Developed end-to-end enterprise modules using Spring Boot backend and Angular frontend for ERP and HR management systems.',
      achievements: [
        'Developed end-to-end enterprise modules using <strong>Spring Boot backend and Angular frontend</strong> for ERP and HR systems.',
        'Built responsive UI components with <strong>HTML5, CSS3, Angular</strong> ensuring seamless user interactions and cross-browser responsiveness.',
        'Customized <strong>Apache OFBiz ERP components</strong> for warehouse, purchase, HR, and product workflows, developing documented RESTful APIs for mobile and web applications.',
        'Maintained high-availability ERP systems supporting <strong>200+ concurrent users</strong> with continuous enhancements and zero downtime.',
      ],
      techUsed: [
        'Spring Boot',
        'Angular',
        'Apache OFBiz',
        'OpenTaps',
        'MyBatis',
        'Oracle',
        'PostgreSQL',
        'RESTful Web Services',
        'HTML5',
        'CSS3',
        'Git',
      ],
    },
  ];

  // ─── Skills Matrix (Category Groups & Pills) ──────────────
  skillsMatrix: SkillCategoryGroup[] = [
    {
      category: 'Backend & Microservices (Core)',
      icon: 'fas fa-server',
      color: '#0ea5e9',
      items: [
        { name: 'Java & Spring Boot', tag: 'Enterprise & Microservices', badge: '10+ Yrs' },
        { name: 'Spring Security & JPA', tag: 'Auth & ORM', badge: 'Expert' },
        { name: 'RESTful Web Services', tag: 'API Integration', badge: 'Expert' },
        { name: 'Apache OFBiz & OpenTaps', tag: 'ERP Frameworks', badge: 'Specialist' },
        { name: 'MyBatis & Hibernate', tag: 'Data Access Layer', badge: 'Advanced' },
        { name: 'PhonePe UPI Integration', tag: 'Digital Payments', badge: 'Production' },
      ],
    },
    {
      category: 'Frontend Engineering',
      icon: 'fab fa-angular',
      color: '#6366f1',
      items: [
        { name: 'Angular Framework', tag: 'Enterprise Web Apps', badge: 'Expert' },
        { name: 'TypeScript & JavaScript', tag: 'ES6+ & Async Logic', badge: 'Expert' },
        { name: 'HTML5 & CSS3', tag: 'Responsive Layouts', badge: 'Expert' },
        { name: 'Agora Live Video SDK', tag: 'Real-time Streaming', badge: 'Production' },
        { name: 'WhatsApp Web APIs', tag: 'Customer Notifications', badge: 'Production' },
      ],
    },
    {
      category: 'Databases & Performance Tuning',
      icon: 'fas fa-database',
      color: '#10b981',
      items: [
        { name: 'PostgreSQL', tag: 'Enterprise Relational DB', badge: 'Expert' },
        { name: 'Oracle Database', tag: 'PL/SQL & Transactions', badge: 'Expert' },
        { name: 'Query Optimization', tag: 'Indexing & Execution Plans', badge: '60% Speedup' },
        { name: 'Schema & Database Design', tag: 'Normalization & ERD', badge: 'Expert' },
      ],
    },
    {
      category: 'Cloud, Tools & CI/CD',
      icon: 'fas fa-cloud-upload-alt',
      color: '#f59e0b',
      items: [
        { name: 'AWS Cloud (EC2, S3)', tag: 'Infrastructure & Storage', badge: 'Production' },
        { name: 'Git & Version Control', tag: 'Code Management', badge: 'Expert' },
        { name: 'Maven & Jenkins', tag: 'Build & CI/CD Automation', badge: 'Production' },
        { name: 'Tomcat Server', tag: 'Application Deployment', badge: 'Production' },
        { name: 'Postman', tag: 'API Testing & Documentation', badge: 'Expert' },
      ],
    },
  ];

  // ─── Skills Progress Bars ───────────────────────────────────
  skillCategories: SkillCategory[] = [
    {
      title: 'Backend Engineering',
      icon: 'fas fa-server',
      color: '#0ea5e9',
      skills: [
        { name: 'Java', percentage: 95 },
        { name: 'Spring Boot', percentage: 92 },
        { name: 'Microservices', percentage: 90 },
        { name: 'RESTful Web Services', percentage: 95 },
      ],
    },
    {
      title: 'Frontend Engineering',
      icon: 'fas fa-laptop-code',
      color: '#6366f1',
      skills: [
        { name: 'Angular', percentage: 90 },
        { name: 'TypeScript', percentage: 88 },
        { name: 'HTML5 / CSS3', percentage: 92 },
        { name: 'JavaScript', percentage: 90 },
      ],
    },
    {
      title: 'ERP & Frameworks',
      icon: 'fas fa-network-wired',
      color: '#ec4899',
      skills: [
        { name: 'Apache OFBiz', percentage: 88 },
        { name: 'OpenTaps ERP', percentage: 85 },
        { name: 'MyBatis / Hibernate', percentage: 90 },
        { name: 'Spring Security', percentage: 88 },
      ],
    },
    {
      title: 'Databases & Tuning',
      icon: 'fas fa-database',
      color: '#10b981',
      skills: [
        { name: 'PostgreSQL', percentage: 92 },
        { name: 'Oracle', percentage: 90 },
        { name: 'Query Optimization', percentage: 95 },
        { name: 'Database Design', percentage: 92 },
      ],
    },
    {
      title: 'Integrations & Payments',
      icon: 'fas fa-mobile-alt',
      color: '#f59e0b',
      skills: [
        { name: 'PhonePe UPI Gateway', percentage: 92 },
        { name: 'Agora Live Video Stream', percentage: 88 },
        { name: 'WhatsApp API', percentage: 90 },
        { name: 'REST API Integration', percentage: 95 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      color: '#0284c7',
      skills: [
        { name: 'AWS (EC2, S3)', percentage: 85 },
        { name: 'Maven', percentage: 90 },
        { name: 'Jenkins CI/CD', percentage: 85 },
        { name: 'Tomcat / Postman', percentage: 92 },
      ],
    },
  ];

  // ─── Tech Tags ──────────────────────────────────────────────
  techTags = [
    { name: 'Java', color: '#f59e0b' },
    { name: 'Spring Boot', color: '#0ea5e9' },
    { name: 'Microservices', color: '#6366f1' },
    { name: 'Angular', color: '#dd0031' },
    { name: 'TypeScript', color: '#3178c6' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'Oracle', color: '#f80000' },
    { name: 'PhonePe UPI', color: '#5f259f' },
    { name: 'Apache OFBiz', color: '#7c3aed' },
    { name: 'Agora Video', color: '#099dfd' },
    { name: 'AWS (EC2/S3)', color: '#ff9900' },
    { name: 'Spring Security', color: '#10b981' },
    { name: 'Jenkins CI/CD', color: '#d33833' },
    { name: 'MyBatis', color: '#00bcd4' },
    { name: 'REST APIs', color: '#0ea5e9' },
  ];

  // ─── Enterprise Production Projects ─────────────────────────
  projects: Project[] = [
    {
      title: 'E-Commerce & Retail Admin Hub with PhonePe UPI',
      institution: 'My Hub Technologies Ltd · Production Enterprise System',
      timeline: '2023 – Present',
      category: 'Enterprise E-Commerce & Retail POS',
      image: 'assets/projects_images/ecommerce_phonepe_pos.png',
      techStack:
        'Java · Spring Boot · Microservices · Angular · PhonePe UPI API · PostgreSQL · AWS EC2 · Spring Security',
      description:
        'Full-stack enterprise production platform with multi-role authentication (Admin, Vendor, Customer) and admin dashboards for E-commerce, Retail, and Transportation platforms. Features complete PhonePe UPI payment gateway integration.',
      problemSolved:
        'Retailers required a unified admin hub for product/vendor onboarding with automated payment collection. Integrated PhonePe UPI payment gateway and automated status webhook listeners, reducing support tickets by 40%.',
      features: [
        'Built full-stack multi-role authentication and admin dashboards for <strong>E-commerce and Retail POS</strong>.',
        'Integrated <strong>PhonePe UPI Payment Gateway</strong> for instant QR & UPI payments and automated transaction status webhooks.',
        'Developed scalable RESTful APIs for product catalog management, vendor onboarding, order management, and inventory tracking.',
        'Engineered responsive Angular UI components with cross-browser compatibility across mobile, tablet, and desktop.',
      ],
      highlights: [
        '🛍️ Live E-Commerce & Retail platform in production',
        'PhonePe UPI payment gateway integration',
        'Multi-role RBAC: Admin, Vendor, Driver, Customer',
        'Product & vendor onboarding workflows',
        'Spring Boot Microservices & PostgreSQL DB',
        '40% reduction in customer support load',
      ],
      tags: ['angular', 'microservices', 'database'],
      skills: [
        { name: 'Spring Boot', level: 95 },
        { name: 'Angular', level: 90 },
        { name: 'PhonePe UPI API', level: 92 },
      ],
      accent: '#0ea5e9',
      badge: '🛍️ Enterprise Production System',
      architecture:
        'Angular Admin UI → Spring Security JWT → Microservices Mesh → PhonePe UPI Payment Gateway → PostgreSQL DB',
      githubUrl: '',
      liveUrl: '',
      backendFrontendSeparation:
        'Responsive Angular SPA communicating with Spring Boot REST microservices via secure HTTPS payload contracts.',
      dockerK8sUsage:
        'Deploys seamlessly on AWS EC2 instances with Tomcat web application server and automated Jenkins CI/CD builds.',
      securityAuth:
        'Spring Security JWT role-based access control with multi-factor authentication for Admin and Vendor login.',
      cicdWorkflow:
        'Git version control with automated Jenkins pipeline compiling Maven builds and deploying to AWS servers.',
    },
    {
      title: 'Transportation & Ride Fleet Logistics Platform',
      institution: 'My Hub Technologies Ltd · Live Fleet Enterprise System',
      timeline: '2023 – Present',
      category: 'Transportation & Fleet Logistics',
      image: 'assets/projects_images/transportation_fleet_logistics.png',
      techStack:
        'Java · Spring Boot · Microservices · Angular · WhatsApp Web API · PostgreSQL · AWS S3',
      description:
        'Scalable transportation and ride platform providing delivery tracking, driver workflows, customer order tracking, and automated WhatsApp API notifications.',
      problemSolved:
        'Logistics operations required real-time tracking of drivers and automated customer updates. Implemented WhatsApp API integration for automated trip and dispatch notifications.',
      features: [
        'Developed RESTful APIs for <strong>transportation dispatch, driver onboarding, and delivery tracking</strong>.',
        'Integrated <strong>WhatsApp API</strong> for automated trip confirmations, driver assignment alerts, and live tracking links.',
        'Optimized database queries and API endpoints achieving <strong>60% faster response times</strong> under peak load.',
        'Designed intuitive Angular interfaces for drivers and operational dispatchers with responsive mobile support.',
      ],
      highlights: [
        '🚚 Transportation & Ride fleet dispatch system',
        'WhatsApp API automated notification engine',
        'Real-time delivery tracking & driver management',
        '60% performance improvement via query tuning',
        'AWS S3 storage for driver document verification',
      ],
      tags: ['angular', 'microservices', 'cloud'],
      skills: [
        { name: 'Spring Boot', level: 92 },
        { name: 'WhatsApp API', level: 90 },
        { name: 'PostgreSQL', level: 92 },
      ],
      accent: '#6366f1',
      badge: '🚚 Production Fleet Logistics',
      architecture:
        'Angular Dispatcher UI → Spring Cloud REST APIs → WhatsApp Notification Engine → PostgreSQL & AWS S3',
      githubUrl: '',
      liveUrl: '',
      backendFrontendSeparation:
        'Angular frontend for dispatchers and mobile web interface for drivers connected to Spring Boot backend APIs.',
      dockerK8sUsage:
        'Deployed on AWS cloud infrastructure with EC2 compute nodes and S3 object storage.',
      securityAuth:
        'Role-based permissions isolating Driver, Dispatcher, and Admin permissions.',
      cicdWorkflow:
        'Jenkins CI/CD pipeline with automated unit testing and AWS deployment scripts.',
    },
    {
      title: 'Apache OFBiz Railway ERP & Warehouse Management',
      institution: 'Winfocus Solutions Pvt. Ltd. · Live Enterprise System',
      timeline: '2016 – 2023',
      category: 'Enterprise Logistics & ERP',
      image: 'assets/projects_images/railways_ofbiz_erp.png',
      techStack:
        'Spring Boot · Angular · Apache OFBiz · OpenTaps · MyBatis · Oracle · PostgreSQL',
      description:
        'Customized Apache OFBiz ERP platform for warehouse, purchase, HR, and stock workflows automated specifically for South Central & Southern Railways, supporting 200+ concurrent users.',
      problemSolved:
        'Railways logistics required automating stock replenishment, purchase approvals, and warehouse tracking across regional depots. Customized Apache OFBiz components to streamline warehouse workflows.',
      features: [
        'Customized <strong>Apache OFBiz ERP components</strong> for warehouse stock management, purchase orders, HR, and product workflows.',
        'Automated <strong>South Central & Southern Railways</strong> stock and purchase approval workflows with custom Spring Boot backend services.',
        'Engineered high-performance database queries and stored procedures in Oracle & PostgreSQL supporting <strong>200+ concurrent enterprise users</strong>.',
        'Built documented RESTful APIs consumed by web dashboards and mobile applications.',
      ],
      highlights: [
        '🚂 Live automated ERP for South Central & Southern Railways',
        'Customized Apache OFBiz & OpenTaps ERP framework',
        'Supports 200+ concurrent enterprise operational users',
        'Warehouse, Purchase, HR & Product workflows',
        'Oracle & PostgreSQL database query optimization',
      ],
      tags: ['angular', 'database', 'microservices'],
      skills: [
        { name: 'Apache OFBiz', level: 90 },
        { name: 'Spring Boot', level: 92 },
        { name: 'Oracle DB', level: 90 },
      ],
      accent: '#10b981',
      badge: '🚂 Railways & OFBiz ERP',
      architecture:
        'Angular Web Client → Spring Boot API Layer → Apache OFBiz ERP Core Services → Oracle / PostgreSQL Database',
      githubUrl: '',
      liveUrl: '',
      backendFrontendSeparation:
        'Angular enterprise UI interacting with customized Apache OFBiz Java services exposed through Spring Boot REST APIs.',
      dockerK8sUsage:
        'Managed on enterprise Linux servers with Apache Tomcat app server clusters.',
      securityAuth:
        'Multi-level enterprise role-based authorization for depot managers, purchase officers, and station admins.',
      cicdWorkflow:
        'Version controlled with continuous staging deployments and zero-downtime maintenance releases.',
    },
    {
      title: 'Real-Time Video Shopping & Merchant Streaming Hub',
      institution: 'My Hub Technologies Ltd · Live Retail System',
      timeline: '2023 – Present',
      category: 'Real-Time Video & Streaming',
      image: 'assets/projects_images/agora_video_shopping.png',
      techStack:
        'Angular · Spring Boot · Agora Video SDK · WebSockets · PostgreSQL · AWS',
      description:
        'Interactive real-time video shopping and live streaming platform connecting online retail customers directly with store merchants for live product demonstration and instant purchasing.',
      problemSolved:
        'E-commerce buyers wanted interactive, live product viewing before purchase. Integrated Agora real-time video SDK to allow instant 1-on-1 video calls and live streaming broadcasts.',
      features: [
        'Integrated <strong>Agora Real-Time Video SDK</strong> enabling low-latency video calls between customers and store retailers.',
        'Developed <strong>Live Streaming capabilities</strong> for retail merchants to broadcast product showcases to multiple online viewers simultaneously.',
        'Built interactive Angular UI controls for video toggles, live chat overlay, and instant in-video checkout.',
        'Engineered Spring Boot backend token generation service for secure Agora channel authorization.',
      ],
      highlights: [
        '📹 Agora Real-Time Video & Live Streaming integration',
        'Live 1-on-1 video calling between customer & retailer',
        'Interactive broadcast streaming for merchant showcases',
        'Secure token generation via Spring Boot backend',
        'Angular responsive UI with video canvas controls',
      ],
      tags: ['angular', 'cloud', 'microservices'],
      skills: [
        { name: 'Agora Video SDK', level: 88 },
        { name: 'Angular', level: 90 },
        { name: 'Spring Boot', level: 92 },
      ],
      accent: '#f59e0b',
      badge: '📹 Agora Video & Live Streaming',
      architecture:
        'Angular Web Client → Agora RTC Engine → Spring Boot Token Gateway → PostgreSQL',
      githubUrl: '',
      liveUrl: '',
      backendFrontendSeparation:
        'Angular web app handles WebRTC media streams while Spring Boot backend manages channel authentication and session records.',
      dockerK8sUsage:
        'Cloud hosted on AWS with scalable WebSockets and RTC token servers.',
      securityAuth:
        'Dynamic Agora channel access token generation validated by Spring Security backend.',
      cicdWorkflow:
        'Jenkins automated build deployment on enterprise cloud.',
    },
  ];

  // ─── Architecture Nodes ─────────────────────────────────────
  archNodesReact: ArchitectureNodeDetail[] = [
    {
      id: 'angular-ui',
      title: 'Angular UI',
      sub: 'Client Application',
      category: 'FRONTEND',
      color: '#dd0031',
      details:
        'Responsive Angular UI components engineered for customer, vendor, driver, and admin workflows with cross-browser compatibility.',
    },
    {
      id: 'api-gateway',
      title: 'REST API Layer',
      sub: 'Spring Boot REST',
      category: 'ROUTING',
      color: '#6366f1',
      details:
        'Scalable RESTful APIs for product/vendor onboarding, order management, delivery tracking, transportation, POS, and ERP workflows.',
    },
    {
      id: 'microservices',
      title: 'Microservices Mesh',
      sub: 'Spring Boot + OFBiz',
      category: 'BACKEND',
      color: '#0ea5e9',
      details:
        'Microservices architecture built with Java, Spring Boot, Spring Security, Apache OFBiz ERP, OpenTaps, and MyBatis.',
    },
    {
      id: 'integrations',
      title: '3rd Party APIs',
      sub: 'PhonePe & Agora',
      category: 'INTEGRATIONS',
      color: '#ec4899',
      details:
        'PhonePe UPI Payment Gateway integration, WhatsApp automated notifications API, and Agora SDK for real-time video calling and live streaming.',
    },
    {
      id: 'databases',
      title: 'Databases & Tuning',
      sub: 'PostgreSQL & Oracle',
      category: 'DATA LAYER',
      color: '#10b981',
      details:
        'PostgreSQL and Oracle database design with 60% query performance optimization through indexing, stored procedures, and execution plan tuning.',
    },
  ];

  // ─── MNC Interview Q&A ─────────────────────────────────────
  mncPrepQnA: MncQnA[] = [
    {
      id: 'q1',
      category: 'Payment Gateway Integration',
      question: 'How did you integrate PhonePe UPI Payment Gateway in your Spring Boot application?',
      answer: 'We implemented PhonePe UPI integration by creating a dedicated <strong>Payment Microservice</strong> in Spring Boot. Incoming payment init requests are signed using SHA-256 HMAC encryption with client salt keys. The backend generates transaction payloads and retrieves PhonePe payment URLs / QR codes. We configured asynchronous <strong>Webhook listeners</strong> to handle PhonePe server-to-server callbacks, validating transaction checksums before updating order status in PostgreSQL.',
    },
    {
      id: 'q2',
      category: 'Real-Time Video Calling',
      question: 'How did you integrate Agora SDK for real-time video calling between customers and merchants?',
      answer: 'We implemented a secure Agora RTC token generator in Spring Boot using the official Agora Java SDK. When a customer initiates a call, the backend verifies user session claims, generates an encrypted channel RTC Token with specific expiration time, and returns it to the Angular UI. The Angular frontend initializes the <code>AgoraRTCClient</code>, joins the channel using the token, and renders video tracks dynamically on canvas elements.',
    },
    {
      id: 'q3',
      category: 'Database Performance Optimization',
      question: 'How did you achieve a 60% application performance improvement through database optimization?',
      answer: 'We conducted a deep audit of slow queries using PostgreSQL <code>EXPLAIN ANALYZE</code> and Oracle execution plans. Key optimizations included: 1) Creating composite B-Tree indexes on heavily filtered foreign keys, 2) Converting expensive N+1 ORM queries into optimized native SQL / MyBatis joins, 3) Implementing query result caching for static product catalog items, and 4) Normalizing database schemas while avoiding excessive joins on core transactional tables.',
    },
    {
      id: 'q4',
      category: 'ERP Customization (Apache OFBiz)',
      question: 'What experience do you have customizing Apache OFBiz ERP for Railways & Warehouse logistics?',
      answer: 'I customized Apache OFBiz components for warehouse, purchase, HR, and product inventory workflows supporting 200+ concurrent users for South Central & Southern Railways. This involved extending OFBiz entity definitions (XML models), writing custom Groovy/Java service events, configuring ECA (Entity Condition Actions), and exposing OFBiz business logic via clean RESTful APIs consumed by Angular frontends.',
    },
    {
      id: 'q5',
      category: 'Microservices & Enterprise Architecture',
      question: 'How do you design multi-role authentication across E-commerce, Retail, and Transportation workflows?',
      answer: 'We implement <strong>Role-Based Access Control (RBAC)</strong> using Spring Security and JWT bearer tokens. Upon login, the Auth service generates a signed JWT containing user claims and roles (ROLE_ADMIN, ROLE_VENDOR, ROLE_DRIVER, ROLE_CUSTOMER). Spring Security filters validate the JWT on every request, while Angular route guards and directive structural pipes dynamically restrict UI components based on the decoded token roles.',
    },
  ];

  // ─── ATS Formatted Resume Data ──────────────────────────────
  atsResume: AtsResume = {
    summary:
      'Full Stack Java Developer with 10+ years of experience in architecting and engineering scalable enterprise applications using Java, Spring Boot, Microservices, Angular, REST APIs, PostgreSQL, and Oracle. Experienced across E-commerce, Retail, ERP, Warehouse Management, Transportation/Ride platforms, and Digital Payment integrations including PhonePe UPI and Agora Live RTC streaming. Strong expertise in end-to-end application architecture, microservices design, API integration, database performance optimization (60% boost), and delivering high-availability production solutions.',
    skillsCategorized: [
      {
        category: 'Backend & Microservices',
        items:
          'Java, Spring Boot, Spring Security, JPA/Hibernate, Apache OFBiz, OpenTaps, MyBatis, RESTful Web Services, Microservices, API Integration, Payment Gateway Integration (PhonePe UPI)',
      },
      {
        category: 'Frontend Engineering',
        items:
          'Angular, TypeScript, HTML5, CSS3, JavaScript, Responsive Design, Agora Video SDK, WhatsApp Web API',
      },
      {
        category: 'Databases & Performance',
        items:
          'PostgreSQL, Oracle, Query Optimization, Database Indexing, Schema Design',
      },
      {
        category: 'Tools & Cloud Infrastructure',
        items:
          'AWS (EC2, S3), Git, Maven, Postman, Tomcat, CI/CD, Jenkins',
      },
    ],
    experience: [
      {
        company: 'My Hub Technologies Ltd',
        role: 'Senior Java Developer',
        period: 'May 2023 – Present',
        location: 'Hyderabad, India',
        bullets: [
          'Built full-stack applications using Spring Boot, Microservices, and Angular with multi-role authentication and admin dashboards for E-commerce, Retail, and Transportation platforms.',
          'Developed scalable RESTful APIs for product/vendor onboarding, order management, delivery tracking, transportation, and POS systems.',
          'Developed responsive Angular UI components for customer, vendor, driver, and admin workflows with cross-browser compatibility.',
          'Integrated PhonePe UPI payment and WhatsApp APIs for secure payments, transaction processing, and automated customer notifications, reducing support load by 40%.',
          'Improved application performance by 60% through SQL, database, API, and frontend optimization.',
        ],
      },
      {
        company: 'Winfocus Solutions Pvt. Ltd.',
        role: 'Software Engineer',
        period: 'Sep 2016 – Apr 2023',
        location: 'Hyderabad, India',
        bullets: [
          'Developed end-to-end enterprise modules using Spring Boot backend and Angular frontend for ERP, HR systems.',
          'Built responsive UI components with HTML5, CSS3, Angular ensuring seamless user interactions.',
          'Customized OFBiz ERP components for warehouse, purchase, HR, and product workflows, and developed documented RESTful APIs for mobile and web applications.',
          'Maintained ERP systems supporting 200+ concurrent users with continuous enhancements.',
        ],
      },
    ],
    education:
      'Bachelor of Engineering (B.E.) in Computer Science — JNTU University, Anantapur (Graduated)',
    certifications:
      'Senior Enterprise Full Stack Java Architect & Payment Systems Specialist',
  };

  // ─── Architecture Nodes ─────────────────────────────────────
  architectureNodes: ArchitectureNode[] = [
    {
      type: 'Frontend',
      title: 'Angular UI Client',
      icon: 'fab fa-angular',
      color: '#dd0031',
      purpose:
        'Responsive Angular UI components engineered for customer, vendor, driver, and admin workflows.',
      techStack: [
        'Angular',
        'TypeScript',
        'HTML5 / CSS3',
        'JavaScript',
        'RxJS',
        'Agora RTC SDK',
      ],
      responsibilities: [
        'Responsive UI workflows for Admin, Vendor, Driver, and Customer roles',
        'Cross-browser compatibility and mobile-first touch optimization',
        'Agora Real-Time Video calling and live streaming canvas views',
        'Form validations and REST API integration',
      ],
    },
    {
      type: 'Backend',
      title: 'Spring Boot Microservices',
      icon: 'fas fa-server',
      color: '#0ea5e9',
      purpose:
        'Scalable microservices architecture managing enterprise business logic, auth, and POS APIs.',
      techStack: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'Apache OFBiz',
        'OpenTaps',
        'REST APIs',
      ],
      responsibilities: [
        'RESTful APIs for onboarding, orders, transportation, and POS',
        'Spring Security RBAC multi-role authentication',
        'Apache OFBiz ERP component customization for warehouse & HR',
        'High-availability application architecture supporting 200+ concurrent users',
      ],
    },
    {
      type: 'Integrations',
      title: 'PhonePe & Agora Gateway',
      icon: 'fas fa-mobile-alt',
      color: '#ec4899',
      purpose:
        'Digital payment gateway, automated messaging, and low-latency real-time video channels.',
      techStack: [
        'PhonePe UPI API',
        'WhatsApp Web API',
        'Agora Video SDK',
        'HMAC SHA-256',
      ],
      responsibilities: [
        'Secure PhonePe UPI payment gateway transaction processing',
        'Automated WhatsApp customer notification alerts',
        'Agora RTC token generation and real-time video stream management',
        'Reduced operational support load by 40%',
      ],
    },
    {
      type: 'Data Layer',
      title: 'PostgreSQL & Oracle DB',
      icon: 'fas fa-database',
      color: '#10b981',
      purpose:
        'High-performance enterprise relational databases with 60% query speed optimization.',
      techStack: [
        'PostgreSQL',
        'Oracle DB',
        'JPA / Hibernate',
        'MyBatis',
        'Query Optimization',
      ],
      responsibilities: [
        'Database schema design for E-commerce, Retail, and ERP',
        'Query execution plan tuning and B-Tree index optimization',
        '60% application performance improvement via SQL tuning',
        'Data isolation and transaction management',
      ],
    },
    {
      type: 'Cloud & DevOps',
      title: 'AWS Cloud & CI/CD',
      icon: 'fas fa-cloud',
      color: '#f59e0b',
      purpose:
        'AWS cloud deployment infrastructure with automated Jenkins build pipelines.',
      techStack: [
        'AWS EC2',
        'AWS S3',
        'Jenkins CI/CD',
        'Maven',
        'Git',
        'Tomcat',
      ],
      responsibilities: [
        'AWS EC2 virtual server hosting and S3 asset storage',
        'Automated Jenkins CI/CD compilation and deployment pipelines',
        'Tomcat app server deployment and monitoring',
        'Git version control and multi-environment build configuration',
      ],
    },
  ];

  // ─── Social Links ────────────────────────────────────────────
  socialLinks: SocialLink[] = [
    {
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/in/adisekharareddy',
      label: 'LinkedIn',
    },
    { icon: 'fas fa-envelope', url: 'mailto:adireddy.h@gmail.com', label: 'Email' },
    { icon: 'fas fa-phone', url: 'tel:+919182370938', label: 'Phone' },
  ];

  themeColors = [
    '#0ea5e9',
    '#6366f1',
    '#10b981',
    '#f59e0b',
    '#ec4899',
    '#7c3aed',
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