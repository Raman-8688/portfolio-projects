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
  InfoCard,
  Certification,
  Testimonial,
  AtsResume,
} from '../models/Portfolio';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  // ─── Reactive Signals & Navigation ──────────────────────────
  activeSection = signal<Section>('about');
  isDarkMode = signal<boolean>(true);
  themeColor = signal<ThemeColor>('#ffdb70');
  settingsPanelOpen = signal<boolean>(false);

  readonly navItems: NavItem[] = NAV_ITEMS;

  // ─── Personal Profile (Source of Truth from Resume & Portfolio) ─────────
  name = 'Adi Sekhara Reddy Hanumanthu';
  shortName = 'Adi Sekhara Reddy';
  titles = [
    'Senior Java Full Stack Developer (10+ Yrs)',
    'Enterprise Solutions & Microservices Architect',
    'Payment Gateway & Event Streaming Specialist',
    'Cloud & DevOps Engineer (AWS, Docker, K8s)',
  ];
  email = 'adireddy.h@gmail.com';
  phone = '+91 91823 70938';
  location = 'Hyderabad, India';
  github = '';
  linkedin = 'https://linkedin.com/in/adisekharareddy';
  yearsExp = '10+ Years';
  currentEmployer = 'My Hub Technologies Ltd';
  resumeUrl = 'assets/Resumes/Adi_java_full_stack.pdf';

  heroTagline =
    'Building high-availability microservices, event-driven architectures (Kafka), digital payment gateways (PhonePe UPI), and enterprise Angular applications.';
  heroSub =
    'Senior Full Stack Java Developer with <strong>10+ years of experience</strong> engineering scalable enterprise production applications using <strong>Java 21, Spring Boot 3, Microservices, Angular 19, Kafka, Redis, Docker, Kubernetes (EKS), AWS, and SQL</strong>. Proven leadership in E-commerce, Retail POS, Railway ERPs, and Digital Payment integrations.';

  socialLinks: SocialLink[] = [
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/adisekharareddy', label: 'LinkedIn' },
    { icon: 'fas fa-envelope', url: 'mailto:adireddy.h@gmail.com', label: 'Email' },
    { icon: 'fas fa-phone-alt', url: 'tel:+919182370938', label: 'Phone' },
  ];

  // ─── Key Achievements Counters ──────────────────────────────
  achievements: Achievement[] = [
    {
      icon: 'fas fa-briefcase',
      value: '10+ Yrs',
      label: 'Senior Enterprise Java Experience',
      color: '#7c3aed',
    },
    {
      icon: 'fas fa-credit-card',
      value: 'PhonePe',
      label: 'UPI Payment & WhatsApp Webhooks',
      color: '#00bcd4',
    },
    {
      icon: 'fas fa-tachometer-alt',
      value: '60% Boost',
      label: 'Performance & SQL Optimization',
      color: '#059669',
    },
    {
      icon: 'fas fa-users',
      value: '200+ Users',
      label: 'Concurrent ERP Active Users',
      color: '#ffdb70',
    },
  ];

  // ─── About Profile Data ──────────────────────────────────────
  aboutIntro =
    'Senior Full Stack Java Developer with <strong>10+ years of enterprise experience</strong> architecting, engineering, and deploying scalable microservices applications using <strong>Java 21, Spring Boot 3, Microservices, Angular 19, Apache Kafka, Redis, Docker, Kubernetes (EKS), AWS, PostgreSQL, and Oracle</strong>.<br><br>Proven track record delivering high-impact solutions across <strong>E-commerce, Retail POS, Apache OFBiz Railway ERPs, Transportation Fleet Logistics, and Digital Payments (PhonePe UPI)</strong>.';

  aboutPoints = [
    {
      icon: 'fas fa-mobile-alt',
      text: 'Integrated <strong>PhonePe UPI Payment Gateway & WhatsApp Webhook APIs</strong> for instant digital transactions and automated customer notifications, reducing operational support load by 40%.',
    },
    {
      icon: 'fas fa-server',
      text: 'Architected <strong>Event-Driven Microservices Mesh</strong> with Java 21, Spring Boot 3, Apache Kafka event streams, Redis in-memory caching, and Spring Security JWT.',
    },
    {
      icon: 'fas fa-cogs',
      text: 'Customized <strong>Apache OFBiz & OpenTaps ERP Systems</strong> for Indian Railways warehouse, procurement, HR, and product workflows, supporting 200+ concurrent enterprise users with zero downtime.',
    },
    {
      icon: 'fas fa-video',
      text: 'Integrated <strong>Agora WebRTC Video Calling SDK</strong> for ultra-low latency customer-to-retailer video consultations and live stream purchasing.',
    },
    {
      icon: 'fas fa-tachometer-alt',
      text: 'Boosted overall application performance by <strong>60%</strong> through comprehensive SQL query tuning, database indexing, REST API response caching, and Angular UI rendering optimization.',
    },
  ];

  // ─── Overview Highlights Cards ──────────────────────────────
  infoCards: InfoCard[] = [
    {
      icon: 'fas fa-briefcase',
      label: 'Total Experience',
      value: '10+ Years (Senior Developer)',
      subText: 'My Hub Technologies (2023–Present) & Winfocus Solutions (2016–2023)',
      bg: 'rgba(124, 58, 237, 0.1)',
      color: '#8b5cf6',
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location & Contact',
      value: 'Hyderabad, India',
      subText: 'Email: adireddy.h@gmail.com | Phone: +91-9182370938',
      bg: 'rgba(239, 68, 68, 0.1)',
      color: '#ef4444',
    },
    {
      icon: 'fas fa-chart-line',
      label: 'Career Progression',
      value: 'Software Engineer → Senior Java Developer',
      subText: '10 Years continuous enterprise experience',
      bg: 'rgba(16, 185, 129, 0.1)',
      color: '#10b981',
    },
    {
      icon: 'fas fa-laptop-code',
      label: 'Core Architecture',
      value: 'Java 21 · Spring Boot 3 · Angular 19',
      subText: 'Kafka, Redis, Docker, Kubernetes (EKS) & AWS',
      bg: 'rgba(255, 219, 112, 0.1)',
      color: '#ffdb70',
    },
  ];

  // ─── Experience Timeline (Exact 10-Year Career Progression) ────────────────
  experiences: Experience[] = [
    {
      company: 'My Hub Technologies Ltd',
      role: 'Senior Java Full Stack Developer',
      period: 'May 2023 – Present',
      location: 'Hyderabad, India',
      type: 'Full Time',
      logo: 'fas fa-building',
      color: '#00bcd4',
      description:
        'Leading end-to-end full-stack development of enterprise E-commerce, Retail POS, Transportation logistics, and live video consultation platforms using Java 21, Spring Boot 3, Microservices, Angular 19, Kafka, and AWS.',
      achievements: [
        'Built full-stack microservices applications using <strong>Spring Boot 3, Apache Kafka, Redis, and Angular 19</strong> with multi-role RBAC security and real-time management dashboards.',
        'Developed scalable <strong>RESTful APIs</strong> for vendor onboarding, order management, vehicle dispatching, and PhonePe POS integration.',
        'Integrated <strong>PhonePe UPI payment gateway and WhatsApp APIs</strong> for automated payments and customer transaction alerts (reduced support load by 40%).',
        'Optimized overall application throughput by <strong>60%</strong> through SQL query tuning, Redis caching, and Angular rendering optimizations.',
        'Containerized services using <strong>Docker & Kubernetes (EKS)</strong> with automated Jenkins CI/CD pipelines.',
      ],
      techUsed: [
        'Java 21',
        'Spring Boot 3',
        'Microservices',
        'Angular 19',
        'Apache Kafka',
        'Redis',
        'PhonePe UPI',
        'PostgreSQL',
        'Docker',
        'Kubernetes (EKS)',
        'AWS',
        'Jenkins',
      ],
    },
    {
      company: 'Winfocus Solutions Pvt. Ltd.',
      role: 'Software Engineer → Module Lead',
      period: 'Sep 2016 – Apr 2023',
      location: 'Hyderabad, India',
      type: 'Full Time (6.5+ Years)',
      logo: 'fas fa-laptop-code',
      color: '#7c3aed',
      description:
        'Engineered enterprise ERP and HR management modules using Java Spring Boot and Angular, customizing Apache OFBiz for Indian Railways warehouse and procurement workflows.',
      achievements: [
        'Promoted from <strong>Software Engineer to Module Lead</strong> over 6.5 years of consistent delivery across complex ERP domains.',
        'Customized <strong>Apache OFBiz & OpenTaps ERP components</strong> for warehouse, purchase, HR, and inventory workflows for South Central & Southern Railways.',
        'Developed documented <strong>RESTful APIs</strong> using Spring Boot, MyBatis, Oracle, and PostgreSQL.',
        'Maintained high-availability production ERP systems supporting <strong>200+ concurrent enterprise users</strong> with zero downtime.',
      ],
      techUsed: [
        'Java',
        'Spring Boot',
        'Apache OFBiz',
        'OpenTaps',
        'MyBatis',
        'Angular',
        'Oracle',
        'PostgreSQL',
        'REST APIs',
        'Tomcat',
      ],
    },
  ];

  // ─── Standardized Tech Stack Matrix ─────────────────────────
  skillCategories: SkillCategory[] = [
    {
      title: 'Backend Engineering',
      icon: 'fas fa-server',
      color: '#7c3aed',
      skills: [
        { name: 'Java 21 & Core Java', percentage: 95 },
        { name: 'Spring Boot 3 & Spring Security', percentage: 95 },
        { name: 'Microservices Architecture & REST APIs', percentage: 94 },
        { name: 'Spring Data JPA & Hibernate ORM', percentage: 92 },
      ],
    },
    {
      title: 'Frontend Engineering',
      icon: 'fas fa-laptop-code',
      color: '#00bcd4',
      skills: [
        { name: 'Angular 19 Framework', percentage: 92 },
        { name: 'TypeScript, JavaScript & RxJS', percentage: 92 },
        { name: 'HTML5, CSS3 & Responsive UI Design', percentage: 95 },
        { name: 'Cross-Browser Compatibility & Web APIs', percentage: 90 },
      ],
    },
    {
      title: 'Event-Driven, Caching & Integration',
      icon: 'fas fa-bolt',
      color: '#ef4444',
      skills: [
        { name: 'Apache Kafka Event Streams', percentage: 88 },
        { name: 'Redis In-Memory Caching', percentage: 88 },
        { name: 'PhonePe UPI & WhatsApp Webhook APIs', percentage: 95 },
        { name: 'Agora WebRTC Low-Latency Video SDK', percentage: 88 },
      ],
    },
    {
      title: 'Cloud Infrastructure & DevOps',
      icon: 'fas fa-cloud',
      color: '#f59e0b',
      skills: [
        { name: 'AWS (EC2, S3, IAM)', percentage: 86 },
        { name: 'Docker Containerization & Kubernetes (EKS)', percentage: 86 },
        { name: 'Jenkins CI/CD Pipelines & Maven', percentage: 88 },
        { name: 'Git Version Control & Postman API Testing', percentage: 92 },
      ],
    },
    {
      title: 'Databases & Performance Tuning',
      icon: 'fas fa-database',
      color: '#059669',
      skills: [
        { name: 'PostgreSQL Relational DB', percentage: 92 },
        { name: 'Oracle Database & PL/SQL', percentage: 90 },
        { name: 'Apache OFBiz & OpenTaps ERP DB', percentage: 90 },
        { name: 'SQL Query Performance Tuning & Indexing', percentage: 94 },
      ],
    },
  ];

  // ─── Professional Certifications ──────────────────────────
  certifications: Certification[] = [
    {
      title: 'Oracle Certified Professional: Java SE Developer',
      issuer: 'Oracle Corporation',
      year: 'Verified Credential',
      icon: 'fab fa-java',
      color: '#ef4444',
    },
    {
      title: 'AWS Certified Developer – Associate',
      issuer: 'Amazon Web Services',
      year: 'Cloud Credential',
      icon: 'fab fa-aws',
      color: '#f59e0b',
    },
    {
      title: 'Spring Certified Professional (Microservices)',
      issuer: 'VMware Tanzu / Spring.io',
      year: 'Framework Credential',
      icon: 'fas fa-leaf',
      color: '#10b981',
    },
  ];

  // ─── Colleague & Leadership Recommendations ──────────────────────────
  testimonials: Testimonial[] = [
    {
      quote:
        'Adi is an exceptional Senior Java Developer. His integration of PhonePe UPI and optimization of our backend microservices reduced support tickets by 40% and drastically enhanced our transaction throughput.',
      name: 'Director of Engineering',
      role: 'Engineering Lead',
      company: 'My Hub Technologies Ltd',
      avatar: 'assets/images/avatar-1.png',
    },
    {
      quote:
        'Over his 6.5 years at Winfocus Solutions, Adi was instrumental in customizing Apache OFBiz ERP for Indian Railways. His expertise in Java, Oracle, and complex database workflows was vital to our team.',
      name: 'Technical Lead',
      role: 'Enterprise Systems Manager',
      company: 'Winfocus Solutions Pvt. Ltd.',
      avatar: 'assets/images/avatar-2.png',
    },
  ];

  // ─── Enterprise Case Studies (STAR Method Projects) ───────────────────────
  projects: Project[] = [
    {
      title: 'Enterprise E-Commerce & PhonePe POS Automation',
      institution: 'My Hub Technologies Ltd',
      timeline: 'May 2023 – Present',
      techStack:
        'Java 21 · Spring Boot 3 · Microservices · Angular 19 · Kafka · Redis · PostgreSQL · PhonePe UPI API · AWS',
      description:
        'Scalable retail e-commerce application featuring multi-role authentication, product/vendor onboarding, order management, delivery tracking, and PhonePe UPI payment gateway integration.',
      situation:
        'Manual order reconciliation and payment verification caused customer drop-offs and high support ticket volume during peak sale hours.',
      task:
        'Engineered an automated digital payment processing pipeline with instant webhook reconciliation and automated customer notification engine.',
      action:
        'Integrated PhonePe UPI payment gateway APIs and WhatsApp Webhook APIs using Spring Boot 3 microservices, Redis session caching, and Angular 19 admin dashboards.',
      result:
        'Achieved a <strong>40% reduction in customer support load</strong>, instant payment reconciliation, and 60% boost in overall API throughput.',
      problemSolved:
        'Manual order reconciliation caused payment drop-offs. Integrated PhonePe UPI & WhatsApp APIs, cutting support load by 40%.',
      features: [
        'Integrated <strong>PhonePe UPI payment gateway</strong> for instant digital payment processing and automatic reconciliation.',
        'Engineered <strong>multi-role authentication admin dashboards</strong> for customers, vendors, drivers, and admins.',
        'Integrated <strong>WhatsApp APIs</strong> for automated instant order updates and delivery notifications.',
      ],
      highlights: [
        'PhonePe UPI payment integration',
        '40% reduction in support tickets',
        '60% performance boost across DB & APIs',
        'Multi-role admin dashboards for POS',
      ],
      tags: ['microservices', 'angular', 'database'],
      skills: [
        { name: 'Spring Boot 3', level: 95 },
        { name: 'Angular 19', level: 92 },
        { name: 'PhonePe UPI', level: 92 },
      ],
      accent: '#00bcd4',
      badge: '💳 STAR Case Study 1 · PhonePe UPI',
      image: 'assets/project-phonepe-pos.jpg',
      architecture:
        'Angular 19 SPA → Spring Gateway → [Order | Inventory | Payment] Microservices → Kafka/Redis → PhonePe API → PostgreSQL',
      githubUrl: '',
      liveUrl: '',
      backendFrontendSeparation:
        'Decoupled Angular 19 UI communicating with Spring Boot 3 REST microservices.',
      dockerK8sUsage:
        'Containerized with Docker & deployed on Kubernetes (EKS) via Jenkins CI/CD.',
      securityAuth:
        'Spring Security 6 with OAuth2 & JWT role-based access control.',
      cicdWorkflow:
        'Automated build & release management via Maven & Jenkins.',
    },
    {
      title: 'Apache OFBiz ERP & Railway Stock Automation',
      institution: 'Winfocus Solutions Pvt. Ltd.',
      timeline: 'Sep 2016 – Apr 2023',
      techStack:
        'Apache OFBiz · OpenTaps · Java · Spring Boot · Oracle · PostgreSQL · MyBatis · REST APIs',
      description:
        'Enterprise ERP customization for warehouse, procurement, HR, and product workflows — including automated stock procurement for South Central & Southern Railways.',
      situation:
        'Manual stock tracking across multiple railway zones resulted in inventory discrepancies and delayed procurement approvals.',
      task:
        'Customize core Apache OFBiz ERP workflows to automate stock requisition, purchase approvals, and warehouse tracking for high-concurrency enterprise environments.',
      action:
        'Developed custom OFBiz Java components, optimized Oracle/PostgreSQL SQL queries using MyBatis, and built documented RESTful APIs for web/mobile interfaces.',
      result:
        'Successfully deployed automated ERP workflows supporting <strong>200+ concurrent enterprise users</strong> with zero downtime and 100% audit compliance.',
      problemSolved:
        'Manual stock tracking caused inventory discrepancies. Automated Railway stock procurement for 200+ active enterprise users.',
      features: [
        'Customized <strong>Apache OFBiz ERP components</strong> for warehouse, procurement, HR, and product workflows.',
        'Automated <strong>stock & purchase workflows</strong> for South Central & Southern Railways.',
        'Built documented <strong>RESTful APIs</strong> supporting mobile and web application integrations.',
      ],
      highlights: [
        'Automated Railway stock & purchase workflows',
        'Apache OFBiz & OpenTaps customization',
        '200+ concurrent active enterprise users',
        'Oracle & PostgreSQL query optimization',
      ],
      tags: ['angular', 'microservices', 'database'],
      skills: [
        { name: 'Java / OFBiz', level: 92 },
        { name: 'Oracle / SQL', level: 90 },
        { name: 'Spring Boot', level: 88 },
      ],
      accent: '#7c3aed',
      badge: '🚆 STAR Case Study 2 · Railways ERP',
      image: 'assets/project-railways-ofbiz.jpg',
      architecture:
        'Angular Web Portal → Spring API Layer → Apache OFBiz Core Engine → Oracle/PostgreSQL',
      githubUrl: '',
      liveUrl: '',
      backendFrontendSeparation:
        'Angular Web & Mobile REST API interfaces for enterprise ERP modules.',
      dockerK8sUsage:
        'Enterprise Tomcat server deployment with load balancer.',
      securityAuth:
        'Role-based permissions & audit trail logging.',
      cicdWorkflow:
        'Maven build automation & version control.',
    },
    {
      title: 'Agora Real-Time Video Calling & Live Streaming',
      institution: 'My Hub Technologies Ltd',
      timeline: '2023 – 2024',
      techStack:
        'Angular 19 · Agora WebRTC SDK · Spring Boot 3 · Microservices · Redis · PostgreSQL · AWS',
      description:
        'Interactive real-time video calling and live streaming platform between customers and retailers powered by Agora WebRTC SDK and Spring Boot 3.',
      situation:
        'Online shoppers lacked live consultation capability with retailers before buying high-value items, leading to high product returns.',
      task:
        'Integrate ultra-low latency live video streaming and interactive consultation directly into the Angular web shopping interface.',
      action:
        'Integrated Agora WebRTC Video SDK, built Spring Boot session token authorization microservice, and designed interactive video overlay components in Angular.',
      result:
        'Delivered low-latency video consultations enabling instant in-call purchase actions and direct customer-to-retailer engagement.',
      problemSolved:
        'Customers needed live video consultations before purchasing. Integrated low-latency Agora WebRTC streaming into the web platform.',
      features: [
        'Integrated <strong>Agora WebRTC Video SDK</strong> for real-time customer-retailer video consultations.',
        'Built <strong>live streaming product showcase overlay</strong> allowing instant in-call purchase actions.',
        'Integrated high-concurrency Spring Boot backend for channel token generation and session management.',
      ],
      highlights: [
        'Real-time Agora video calling & live streaming',
        'Customer-to-retailer video consultation',
        'Ultra-low latency streaming',
        'Spring Boot token authorization',
      ],
      tags: ['angular', 'microservices'],
      skills: [
        { name: 'Angular 19', level: 92 },
        { name: 'Agora WebRTC', level: 88 },
        { name: 'Spring Boot 3', level: 90 },
      ],
      accent: '#ffdb70',
      badge: '🎥 STAR Case Study 3 · Live Video',
      image: 'assets/project-video-shopping.jpg',
      architecture:
        'Angular Video App → Agora Cloud RTC + Spring Security Token Gateway → PostgreSQL',
      githubUrl: '',
      liveUrl: '',
      backendFrontendSeparation:
        'Angular frontend with video overlays calling Spring Boot token generation endpoints.',
      dockerK8sUsage:
        'AWS EC2 cloud instances.',
      securityAuth:
        'Dynamic channel encryption tokens.',
      cicdWorkflow:
        'Jenkins automated deployments.',
    },
    {
      title: 'Transportation & Fleet Logistics Telemetry Platform',
      institution: 'My Hub Technologies Ltd',
      timeline: '2023 – Present',
      techStack:
        'Angular 19 · Spring Boot 3 · Microservices · Kafka · PostgreSQL · REST APIs · AWS EC2/S3',
      description:
        'Scalable transportation & delivery tracking platform featuring driver workflows, route tracking, vendor onboarding, and automated logistics dispatches.',
      situation:
        'Manual logistics dispatching caused transit delays and lack of real-time route visibility.',
      task:
        'Build real-time RESTful telemetry services and dispatch management interfaces for drivers and vendors.',
      action:
        'Developed responsive Angular UI components, Spring Boot microservices, Kafka status events, and optimized SQL spatial indexes.',
      result:
        'Reduced transit status update latencies by <strong>60%</strong> and streamlined multi-role vehicle dispatches.',
      problemSolved:
        'Manual dispatching caused delays. Built real-time RESTful telemetry services, cutting status update latencies by 60%.',
      features: [
        'Developed <strong>responsive Angular UI components</strong> for driver, vendor, customer, and admin workflows.',
        'Engineered <strong>scalable RESTful APIs</strong> for delivery tracking and vehicle route assignments.',
        'Optimized database queries, cutting transit status update latencies by 60%.',
      ],
      highlights: [
        'Real-time delivery tracking & route dispatching',
        'Cross-browser responsive Angular UI',
        'Multi-role driver & vendor portal',
        'AWS cloud deployment',
      ],
      tags: ['angular', 'microservices'],
      skills: [
        { name: 'Spring Boot 3', level: 92 },
        { name: 'Angular 19', level: 90 },
        { name: 'REST APIs', level: 94 },
      ],
      accent: '#059669',
      badge: '🚛 STAR Case Study 4 · Logistics',
      image: 'assets/project-fleet-logistics.jpg',
      architecture:
        'Angular UI → API Gateway → [Logistics | Driver | Tracking] Microservices → Kafka → PostgreSQL',
      githubUrl: '',
      liveUrl: '',
      backendFrontendSeparation:
        'Decoupled Angular UI with dynamic dispatch control panels.',
      dockerK8sUsage:
        'Hosted on AWS EC2 & S3 storage.',
      securityAuth:
        'Role-based security filters for drivers and dispatch managers.',
      cicdWorkflow:
        'Git version control & Jenkins deployment pipelines.',
    },
  ];

  // ─── ATS Formatted Resume Data ──────────────────────────────
  atsResume: AtsResume = {
    summary:
      'Senior Full Stack Java Developer with 10+ years of experience in architecting and engineering scalable enterprise applications using Java 21, Spring Boot 3, Microservices, Angular 19, Apache Kafka, Redis, PostgreSQL, Oracle, Docker, Kubernetes (EKS), and AWS. Proven track record across E-commerce, Retail POS, Apache OFBiz Railway ERPs, Transportation Fleet Logistics, and Digital Payment integrations including PhonePe UPI and Agora Live RTC streaming.',
    skillsCategorized: [
      {
        category: 'Backend & Microservices',
        items:
          'Java 21, Spring Boot 3, Spring Security, JPA/Hibernate, Apache Kafka, Redis, Apache OFBiz, OpenTaps, MyBatis, RESTful Web Services, Microservices, PhonePe UPI API Integration',
      },
      {
        category: 'Frontend Engineering',
        items:
          'Angular 19, TypeScript, RxJS, HTML5, CSS3, JavaScript, Responsive Design, Agora Video SDK, WhatsApp Web API',
      },
      {
        category: 'Databases & Performance',
        items:
          'PostgreSQL, Oracle Database, PL/SQL, Query Optimization (60% boost), Database Indexing, Schema Design',
      },
      {
        category: 'Cloud Infrastructure & DevOps',
        items:
          'AWS (EC2, S3, IAM), Docker, Kubernetes (EKS), Git, Maven, Postman, Tomcat, CI/CD, Jenkins',
      },
    ],
    experience: [
      {
        company: 'My Hub Technologies Ltd',
        role: 'Senior Java Full Stack Developer',
        period: 'May 2023 – Present',
        location: 'Hyderabad, India',
        bullets: [
          'Built full-stack microservices applications using Spring Boot 3, Apache Kafka, Redis, and Angular 19 with multi-role RBAC security and real-time management dashboards.',
          'Integrated PhonePe UPI payment gateway and WhatsApp APIs, reducing support load by 40%.',
          'Improved overall application performance by 60% through SQL query tuning, Redis caching, and Angular rendering optimizations.',
          'Containerized microservices with Docker and deployed to Kubernetes (EKS) via Jenkins CI/CD pipelines.',
        ],
      },
      {
        company: 'Winfocus Solutions Pvt. Ltd.',
        role: 'Software Engineer → Module Lead',
        period: 'Sep 2016 – Apr 2023',
        location: 'Hyderabad, India',
        bullets: [
          'Promoted from Software Engineer to Module Lead over 6.5 years of continuous enterprise development.',
          'Customized Apache OFBiz & OpenTaps ERP components for warehouse, procurement, HR, and inventory workflows for South Central & Southern Railways.',
          'Maintained high-availability production ERP systems supporting 200+ concurrent enterprise users with zero downtime.',
        ],
      },
    ],
    education:
      'Bachelor of Engineering (B.E.) in Computer Science — JNTU University, Anantapur',
    certifications:
      'Oracle Certified Professional: Java SE Developer | AWS Certified Developer – Associate | Spring Certified Professional',
  };

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

  toastMessage = signal<string | null>(null);

  copyContactInfo(text: string, label: string): void {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      this.toastMessage.set(`Copied ${label} (${text}) to clipboard!`);
      setTimeout(() => {
        this.toastMessage.set(null);
      }, 3000);
    }
  }

  toggleSettings(): void {
    this.settingsPanelOpen.update((v) => !v);
  }
}