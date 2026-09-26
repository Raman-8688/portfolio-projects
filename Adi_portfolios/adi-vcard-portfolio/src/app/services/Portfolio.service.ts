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

  // ─── Personal Profile (Source of Truth from Resume) ─────────
  name = 'Adi Sekhara Reddy Hanumanthu';
  shortName = 'Adi Sekhara Reddy';
  titles = [
    'Senior Java Full Stack Developer',
    'Microservices & Spring Boot Architect',
    'Payment Gateway Specialist (PhonePe UPI)',
    'Enterprise ERP & Angular Engineer',
  ];
  email = 'adireddy.h@gmail.com';
  phone = '+91 91823 70938';
  location = 'Hyderabad, India';
  github = '';
  linkedin = 'https://linkedin.com/in/adisekharareddy';
  yearsExp = '10+ Years';
  currentEmployer = 'My Hub Technologies Ltd';

  heroTagline = 'Building scalable enterprise applications, microservices, digital payments & ERP systems.';
  heroSub =
    'Full Stack Java Developer with <strong>10+ years of experience</strong> building scalable enterprise applications using Java, Spring Boot, Microservices, Angular, REST APIs, and SQL — experienced in E-commerce, Retail, ERP, Warehouse Management, Transportation platforms, and Digital Payment integrations including PhonePe.';

  socialLinks: SocialLink[] = [
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/adisekharareddy', label: 'LinkedIn' },
    { icon: 'fas fa-envelope', url: 'mailto:adireddy.h@gmail.com', label: 'Email' },
    { icon: 'fas fa-phone-alt', url: 'tel:+919182370938', label: 'Phone' },
  ];

  // ─── Key Achievements Counters ──────────────────────────────
  achievements: Achievement[] = [
    {
      icon: 'fas fa-award',
      value: '10+ Yrs',
      label: 'Senior Enterprise Experience',
      color: '#7c3aed',
    },
    {
      icon: 'fas fa-credit-card',
      value: 'PhonePe',
      label: 'UPI Payment & WhatsApp APIs',
      color: '#00bcd4',
    },
    {
      icon: 'fas fa-tachometer-alt',
      value: '60%',
      label: 'Performance Optimization',
      color: '#059669',
    },
    {
      icon: 'fas fa-train',
      value: 'Railways',
      label: 'OFBiz ERP & Stock Automation',
      color: '#ffdb70',
    },
  ];

  // ─── About Profile Data ──────────────────────────────────────
  aboutIntro =
    'I am a <strong>Senior Java Full Stack Developer</strong> with over <strong>10 years of experience</strong> in building scalable enterprise applications using Java, Spring Boot, Microservices, Angular, REST APIs, and SQL. I specialize in E-commerce, Retail, ERP, Warehouse Management, Transportation platforms, and digital payment integrations including <strong>PhonePe UPI</strong>.';

  aboutPoints = [
    {
      icon: 'fas fa-store',
      text: 'Developed <strong>Full-Stack E-Commerce & Retail POS Systems</strong> — built Spring Boot microservices and Angular admin dashboards with multi-role authentication, order management, and delivery tracking.',
    },
    {
      icon: 'fas fa-credit-card',
      text: 'Integrated <strong>PhonePe UPI Payment & WhatsApp APIs</strong> for secure payments, automated transaction processing, and customer notifications, reducing support load by 40%.',
    },
    {
      icon: 'fas fa-cogs',
      text: 'Customized <strong>Apache OFBiz ERP Components</strong> for warehouse, purchase, HR, and product workflows, maintaining enterprise systems supporting 200+ concurrent users.',
    },
    {
      icon: 'fas fa-video',
      text: 'Integrated <strong>Agora WebRTC Video SDK</strong> for real-time video calling and live streaming between customers and retailers.',
    },
    {
      icon: 'fas fa-chart-line',
      text: 'Boosted overall application performance by <strong>60%</strong> through comprehensive SQL, database indexing, REST API, and Angular frontend optimizations.',
    },
  ];

  infoCards = [
    {
      icon: 'fas fa-briefcase',
      label: 'Experience Level',
      value: '10+ Years (Senior Developer)',
      bg: 'rgba(124, 58, 237, 0.1)',
      color: '#8b5cf6',
    },
    {
      icon: 'fas fa-graduation-cap',
      label: 'Education',
      value: 'JNTU Anantapur (B.E. Computer Science)',
      bg: 'rgba(59, 130, 246, 0.1)',
      color: '#3b82f6',
    },
    {
      icon: 'fas fa-building',
      label: 'Current Company',
      value: 'My Hub Technologies Ltd (Senior Java Dev)',
      bg: 'rgba(16, 185, 129, 0.1)',
      color: '#10b981',
    },
    {
      icon: 'fas fa-laptop-code',
      label: 'Core Stack',
      value: 'Java, Spring Boot, Angular, Microservices',
      bg: 'rgba(255, 219, 112, 0.1)',
      color: '#ffdb70',
    },
  ];

  // ─── Experience Timeline (Exact Resume Data) ────────────────
  experiences: Experience[] = [
    {
      company: 'My Hub Technologies Ltd',
      role: 'Senior Java Developer',
      period: 'May 2023 – Present',
      location: 'Hyderabad, India',
      type: 'Full Time',
      logo: 'fas fa-building',
      color: '#00bcd4',
      description:
        'Leading end-to-end full-stack development of enterprise E-commerce, Retail, and Transportation platforms using Java Spring Boot, Microservices, and Angular.',
      achievements: [
        'Built full-stack applications using <strong>Spring Boot, Microservices, and Angular</strong> with multi-role authentication and admin dashboards',
        'Developed scalable <strong>RESTful APIs</strong> for product/vendor onboarding, order management, delivery tracking, transportation, and POS systems',
        'Integrated <strong>PhonePe UPI payment and WhatsApp APIs</strong> for secure payments, transaction processing, and automated notifications (reduced support load by 40%)',
        'Improved overall application performance by <strong>60%</strong> through SQL, database query tuning, API caching, and Angular frontend optimization',
      ],
      techUsed: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'Microservices',
        'Angular',
        'TypeScript',
        'PostgreSQL',
        'PhonePe UPI API',
        'AWS',
        'Jenkins',
      ],
    },
    {
      company: 'Winfocus Solutions Pvt. Ltd.',
      role: 'Software Engineer',
      period: 'Sep 2016 – Apr 2023',
      location: 'Hyderabad, India',
      type: 'Full Time',
      logo: 'fas fa-laptop-code',
      color: '#7c3aed',
      description:
        'Delivered enterprise modules for ERP and HR systems using Java Spring Boot and Angular, customizing Apache OFBiz for warehouse and procurement workflows.',
      achievements: [
        'Developed end-to-end enterprise modules using <strong>Spring Boot backend and Angular frontend</strong> for ERP and HR systems',
        'Customized <strong>Apache OFBiz ERP components</strong> for warehouse, purchase, HR, and product workflows',
        'Built responsive Angular UI components with HTML5, CSS3, ensuring seamless user interactions across browsers',
        'Maintained ERP systems supporting <strong>200+ concurrent users</strong> with continuous enhancements and zero-downtime releases',
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
        'RESTful APIs',
      ],
    },
  ];

  // ─── Skill Categories ───────────────────────────────────────
  skillCategories: SkillCategory[] = [
    {
      title: 'Backend Engineering',
      icon: 'fas fa-server',
      color: '#7c3aed',
      skills: [
        { name: 'Java & Spring Boot', percentage: 95 },
        { name: 'Microservices Architecture', percentage: 92 },
        { name: 'Spring Security & JPA/Hibernate', percentage: 90 },
        { name: 'RESTful Web Services & APIs', percentage: 94 },
      ],
    },
    {
      title: 'Frontend Development',
      icon: 'fas fa-laptop-code',
      color: '#00bcd4',
      skills: [
        { name: 'Angular & TypeScript', percentage: 92 },
        { name: 'HTML5, CSS3 & JavaScript', percentage: 94 },
        { name: 'Responsive Web Design', percentage: 92 },
        { name: 'Cross-Browser Compatibility', percentage: 90 },
      ],
    },
    {
      title: 'ERP & Digital Payments',
      icon: 'fas fa-credit-card',
      color: '#ffdb70',
      skills: [
        { name: 'PhonePe UPI Payment Integration', percentage: 95 },
        { name: 'Apache OFBiz & OpenTaps ERP', percentage: 90 },
        { name: 'Agora WebRTC Video Calling', percentage: 88 },
        { name: 'WhatsApp API Integration', percentage: 88 },
      ],
    },
    {
      title: 'Databases & Performance',
      icon: 'fas fa-database',
      color: '#059669',
      skills: [
        { name: 'PostgreSQL', percentage: 92 },
        { name: 'Oracle Database', percentage: 88 },
        { name: 'SQL Query Optimization', percentage: 94 },
        { name: 'Database Design & Indexing', percentage: 90 },
      ],
    },
    {
      title: 'Cloud & DevOps Tools',
      icon: 'fas fa-cloud',
      color: '#f59e0b',
      skills: [
        { name: 'AWS (EC2, S3)', percentage: 86 },
        { name: 'Git & Version Control', percentage: 90 },
        { name: 'Maven & Jenkins CI/CD', percentage: 88 },
        { name: 'Tomcat & Postman', percentage: 92 },
      ],
    },
  ];

  // ─── Projects Catalog ───────────────────────────────────────
  projects: Project[] = [
    {
      title: 'Enterprise E-Commerce & PhonePe POS Integration',
      institution: 'My Hub Technologies Ltd',
      timeline: 'May 2023 – Present',
      techStack:
        'Angular · Spring Boot · Microservices · PostgreSQL · PhonePe UPI API · WhatsApp API · AWS',
      description:
        'Scalable enterprise application featuring multi-role authentication, product/vendor onboarding, order management, delivery tracking, and PhonePe UPI payment gateway integration.',
      problemSolved:
        'Manual order reconciliation and payment verification caused customer drop-offs and high support inquiries. Integrated PhonePe UPI and automated WhatsApp notifications, reducing support load by 40%.',
      features: [
        'Built <strong>PhonePe UPI payment gateway integration</strong> for instant digital payment processing and automatic reconciliation.',
        'Engineered <strong>multi-role authentication admin dashboards</strong> for customers, vendors, drivers, and admins.',
        'Integrated <strong>WhatsApp APIs</strong> for automated instant order updates and delivery notifications.',
      ],
      highlights: [
        'PhonePe UPI payment integration',
        'Automated WhatsApp notification engine',
        '60% performance improvement across APIs & DB',
        'Multi-role admin dashboards for retail & POS',
      ],
      tags: ['microservices', 'angular', 'database'],
      skills: [
        { name: 'Spring Boot', level: 95 },
        { name: 'Angular', level: 92 },
        { name: 'PhonePe UPI', level: 92 },
      ],
      accent: '#00bcd4',
      badge: '💳 PhonePe UPI · Production',
      image: 'assets/project-phonepe-pos.jpg',
      architecture:
        'Angular SPA → Spring Gateway → [Order | Inventory | Payment] Microservices → PhonePe API → PostgreSQL',
      githubUrl: '',
      liveUrl: '',
      backendFrontendSeparation:
        'Decoupled Angular UI communicating with Spring Boot REST microservices.',
      dockerK8sUsage:
        'Deployed on AWS cloud infrastructure with Jenkins CI/CD pipelines.',
      securityAuth:
        'Spring Security JWT with multi-role access control.',
      cicdWorkflow:
        'Automated build & release management via Maven & Jenkins.',
    },
    {
      title: 'Transportation & Fleet Logistics Platform',
      institution: 'My Hub Technologies Ltd',
      timeline: '2023 – Present',
      techStack:
        'Angular · Spring Boot · Microservices · PostgreSQL · REST APIs · AWS EC2/S3',
      description:
        'Scalable transportation & delivery tracking platform featuring driver workflows, route tracking, vendor onboarding, and automated logistics dispatches.',
      problemSolved:
        'Inefficient manual dispatching led to high transit delays. Developed real-time RESTful telemetry services for driver dispatching and delivery tracking.',
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
        { name: 'Spring Boot', level: 92 },
        { name: 'Angular', level: 90 },
        { name: 'REST APIs', level: 94 },
      ],
      accent: '#059669',
      badge: '🚛 Logistics · Enterprise',
      image: 'assets/project-fleet-logistics.jpg',
      architecture:
        'Angular UI → API Gateway → [Logistics | Driver | Tracking] Microservices → PostgreSQL',
      githubUrl: '',
      liveUrl: '',
      backendFrontendSeparation:
        'Decoupled Angular UI with dynamic maps & dispatch control panels.',
      dockerK8sUsage:
        'Hosted on AWS EC2 & S3 storage.',
      securityAuth:
        'Role-based security filters for drivers and dispatch managers.',
      cicdWorkflow:
        'Git version control & Jenkins deployment pipelines.',
    },
    {
      title: 'Apache OFBiz ERP & Railway Stock Automation',
      institution: 'Winfocus Solutions Pvt. Ltd.',
      timeline: 'Sep 2016 – Apr 2023',
      techStack:
        'Apache OFBiz · OpenTaps · Java · Spring Boot · Oracle · PostgreSQL · MyBatis',
      description:
        'Enterprise ERP customization for warehouse, purchase, HR, and product workflows — including automated stock and purchase workflows for South Central & Southern Railways.',
      problemSolved:
        'Manual stock tracking caused inventory discrepancies across railway zones. Automated stock procurement and warehouse workflows for 200+ concurrent users.',
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
      badge: '🚆 Railways ERP · Production',
      image: 'assets/project-railways-ofbiz.jpg',
      architecture:
        'Angular Web Portal → Spring API Layer → Apache OFBiz Core Engine → Oracle/PostgreSQL',
      githubUrl: '',
      liveUrl: '',
      backendFrontendSeparation:
        'Angular Web & Mobile REST API interfaces for enterprise ERP modules.',
      dockerK8sUsage:
        'Enterprise Tomcat server deployment.',
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
        'Angular · Agora WebRTC SDK · Spring Boot · Microservices · PostgreSQL · AWS',
      description:
        'Interactive real-time video calling and live streaming platform between customers and retailers powered by Agora WebRTC SDK and Spring Boot.',
      problemSolved:
        'Customers needed live video consultations with retailers before purchasing high-value items online. Integrated low-latency Agora WebRTC streaming directly into the web application.',
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
        { name: 'Angular', level: 92 },
        { name: 'Agora WebRTC', level: 88 },
        { name: 'Spring Boot', level: 90 },
      ],
      accent: '#ffdb70',
      badge: '🎥 Live Video · Innovation',
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