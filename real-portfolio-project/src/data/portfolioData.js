export const portfolioData = {
  personal: {
    name: 'Ramanjaneyulu Boya',
    shortName: 'Raman',
    titles: [
      'Java Full Stack Developer',
      'Microservices Architecture Specialist',
      'Angular + Spring Boot Engineer',
      'PostgreSQL Multitenancy Developer'
    ],
    email: 'ramanms8688@gmail.com',
    phone: '+91 8688505451',
    location: 'Kurnool, Andhra Pradesh, India',
    github: 'https://github.com/Raman-8688',
    linkedin: 'https://linkedin.com/in/b-ramanjaneyulu-155021258',
    yearsExp: '1',
    company: 'Winfocus Solutions Pvt Ltd',
    heroSub: 'Full Stack Engineer specializing in <strong>Microservices Architecture</strong>, <strong>Spring Boot 3.x</strong>, <strong>Angular 19</strong>, and <strong>Multi-Tenant PostgreSQL Systems</strong> — delivering real production software for enterprise clients.'
  },

  achievements: [
    { icon: 'fas fa-train', value: 'Live Client', label: 'Hyderabad Metro AMS', color: '#8b5cf6' },
    { icon: 'fas fa-layer-group', value: '10+', label: 'Microservices Mesh', color: '#3b82f6' },
    { icon: 'fas fa-database', value: '3 Engines', label: 'Postgres · MSSQL · MySQL', color: '#10b981' },
    { icon: 'fas fa-robot', value: 'AI Powered', label: 'Hugging Face Translation', color: '#ec4899' }
  ],

  about: {
    intro: 'I am a <strong>Java Full Stack & Microservices Developer</strong> with 1 year of production experience engineering scalable enterprise solutions. My expertise ranges from deploying <strong>live asset tracking for Hyderabad Metro Rail</strong> to constructing <strong>dynamic schema-per-tenant multi-tenant SaaS platforms</strong> at Winfocus Solutions.',
    points: [
      {
        icon: 'fas fa-train',
        title: 'Hyderabad Metro Asset Management System (AMS)',
        text: 'Engineered inventory tracking screens, MSSQL stored procedures, database indexes & synonyms, and decoupled microservices for high-volume transit infrastructure assets.'
      },
      {
        icon: 'fas fa-capsules',
        title: 'Multi-Tenant Pharma SaaS Platform',
        text: 'Built PostgreSQL dynamic schema-per-tenant isolation using custom Hibernate resolvers, Spring Cloud Gateway, and Eureka Discovery Server.'
      },
      {
        icon: 'fas fa-language',
        title: 'Multilanguage AI Converter Tool',
        text: 'Created an automated internal developer tool that scans Angular codebases, leverages Hugging Face AI for multi-locale translation, and generates SQL migration scripts.'
      },
      {
        icon: 'fas fa-shield-halved',
        title: 'Enterprise Security & Resilience',
        text: 'Configured Spring Security, JWT authentication, OAuth2 role-based access control, global exception handlers, and API Gateway route guards.'
      }
    ],
    infoCards: [
      { label: 'Experience', value: '1 Year (Java Full Stack)', icon: 'fas fa-briefcase', color: '#8b5cf6' },
      { label: 'Current Employer', value: 'Winfocus Solutions Pvt Ltd', icon: 'fas fa-building', color: '#3b82f6' },
      { label: 'Education', value: 'Newtons Inst. of Engineering', icon: 'fas fa-graduation-cap', color: '#10b981' },
      { label: 'Merit Award', value: 'JSpiders Exam Scholarship', icon: 'fas fa-award', color: '#f59e0b' }
    ]
  },

  experiences: [
    {
      company: 'Winfocus Solutions Pvt Ltd',
      role: 'Full Stack Developer',
      period: 'Jun 2025 – Present',
      location: 'Andhra Pradesh, India',
      type: 'Full-Time',
      color: '#00bcd4',
      badge: 'Current Role',
      description: 'Lead developer on production multi-tenant Pharma SaaS platform and internal AI translation developer tooling.',
      achievements: [
        'Built <strong>Multi-Tenant Pharma Management Platform</strong> — separate Spring Boot microservices (Inventory, Billing, User Management, Reports) with PostgreSQL dynamic schema-per-tenant isolation.',
        'Implemented <strong>Dynamic Multilanguage UI</strong> in Angular — all labels, table headers, form inputs, and buttons switch dynamically at runtime based on DB tenant language settings.',
        'Engineered <strong>Multilanguage Converter Tool</strong> — accepts Angular ZIP files, parses HTML/TS templates, integrates Hugging Face AI for batch translation, and outputs CSV + SQL INSERT statements.',
        'Configured <strong>Spring Cloud API Gateway + Eureka Server + Spring Security JWT</strong> for centralized routing and granular role-based access control (RBAC).',
        'Deployed containerized applications using <strong>Docker & Kubernetes</strong> on enterprise VMs.'
      ],
      tech: ['Angular 19', 'Java 17', 'Spring Boot', 'Microservices', 'PostgreSQL', 'Eureka', 'Spring Cloud Gateway', 'Docker', 'Kubernetes', 'Hugging Face AI', 'Git']
    },
    {
      company: 'AMS — Asset Management System (Hyderabad Metro Rail)',
      role: 'Full Stack Developer',
      period: '2024',
      location: 'Hyderabad, India',
      type: 'Live Client Project',
      color: '#8b5cf6',
      badge: 'Production Client',
      description: 'Enterprise transit asset tracking platform deployed live across Hyderabad Metro Rail stations and operational hubs.',
      achievements: [
        'Developed interactive <strong>Angular Inventory Screens</strong> for station asset tracking across locations, categories, layout group types, and sub-groups.',
        'Authored high-performance <strong>MSSQL Stored Procedures</strong> for complex batch queries, location audits, and historical logging.',
        'Created database **Indexes & Synonyms** to optimize cross-schema query execution speed by over 45%.',
        'Built decoupled microservices (Auth Service, Admin Service, Asset Register Service) connected via Spring API Gateway and a shared Common DTO Library.'
      ],
      tech: ['Angular', 'Java', 'Spring Boot', 'MSSQL', 'Stored Procedures', 'Indexes & Synonyms', 'API Gateway', 'Git']
    },
    {
      company: 'JSpiders Training Institute',
      role: 'Java Full Stack Specialist Trainee',
      period: 'Jun 2024 – Jan 2025',
      location: 'Bangalore, India',
      type: 'Advanced Certification',
      color: '#10b981',
      badge: 'Scholarship Recipient',
      description: 'Rigorous 6-month hands-on training in Core/Advanced Java, Data Structures, Spring Boot, Hibernate, Angular, and SQL.',
      achievements: [
        'Awarded <strong>JSpiders Merit Scholarship</strong> for top percentile scoring in Java & SQL technical evaluations.',
        'Constructed 15+ full-stack mini projects demonstrating clean code patterns, MVC architecture, and REST API design.'
      ],
      tech: ['Java 17', 'Spring Boot', 'Hibernate', 'SQL', 'Angular', 'OOP', 'Data Structures']
    }
  ],

  skills: [
    {
      category: 'Backend & Microservices',
      icon: 'fas fa-server',
      color: '#6db33f',
      items: [
        { name: 'Java 17 / 21', level: 92, tag: 'Core & Enterprise' },
        { name: 'Spring Boot 3.x', level: 90, tag: 'REST & MVC' },
        { name: 'Microservices Mesh', level: 88, tag: 'Eureka & Gateway' },
        { name: 'Spring Security & JWT', level: 85, tag: 'OAuth2 & RBAC' },
        { name: 'Spring Data JPA / Hibernate', level: 88, tag: 'ORM & Querying' }
      ]
    },
    {
      category: 'Frontend Development',
      icon: 'fab fa-angular',
      color: '#dd0031',
      items: [
        { name: 'Angular 19 / 18', level: 90, tag: 'Standalone & Signals' },
        { name: 'TypeScript & JavaScript', level: 88, tag: 'ES6+ & Async' },
        { name: 'RxJS & Reactive Forms', level: 85, tag: 'State Management' },
        { name: 'HTML5 / Modern CSS3', level: 92, tag: 'Glassmorphism & Flex' },
        { name: 'React.js Basics', level: 80, tag: 'Hooks & Components' }
      ]
    },
    {
      category: 'Databases & Multitenancy',
      icon: 'fas fa-database',
      color: '#4169E1',
      items: [
        { name: 'PostgreSQL (Multitenancy)', level: 88, tag: 'Schema-per-Tenant' },
        { name: 'MSSQL Enterprise', level: 85, tag: 'Stored Procs & Synonyms' },
        { name: 'MySQL Database', level: 86, tag: 'Indexing & Tuning' },
        { name: 'SQL Query Optimization', level: 90, tag: 'Execution Plans' }
      ]
    },
    {
      category: 'DevOps, Cloud & AI',
      icon: 'fas fa-cloud-upload-alt',
      color: '#2496ED',
      items: [
        { name: 'Docker Containerization', level: 82, tag: 'Dockerfiles & Compose' },
        { name: 'Kubernetes (K8s)', level: 78, tag: 'Pods & Services' },
        { name: 'Git & SVN Version Control', level: 90, tag: 'Branching & Merging' },
        { name: 'Hugging Face AI API', level: 84, tag: 'Batch AI Translation' },
        { name: 'Linux / Bash Scripting', level: 80, tag: 'CLI & Automation' }
      ]
    }
  ],

  projects: [
    {
      id: 'hyderabad-metro-ams',
      title: 'Hyderabad Metro Asset Management System (AMS)',
      category: 'Client Enterprise Project',
      subtitle: 'Live transit asset tracking deployed for Hyderabad Metro Rail stations.',
      badge: 'Live Client Deployment',
      color: '#8b5cf6',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Live Client Project actively used across Hyderabad Metro Rail stations.',
        'Built Angular inventory screens with location-based, category-based, and group-based filtering.',
        'Authored custom MSSQL Stored Procedures for audit tracking and rapid query execution.',
        'Configured non-clustered database indexes and synonyms for cross-service database access.',
        'Spring Cloud API Gateway integration for Auth, Admin, and Asset Register microservices.'
      ],
      techSpecs: {
        frontend: 'Angular 19, Reactive Forms, SCSS Grid',
        backend: 'Java 17, Spring Boot 3, Microservices Architecture',
        database: 'MSSQL Enterprise (Stored Procedures, Indexing, Synonyms)',
        security: 'Spring Security, JWT Token Validation, Gateway Route Guards',
        deployment: 'Spring Cloud Gateway, Shared Common Library, Client VM Server'
      },
      codeSnippet: `// Spring Cloud API Gateway Route Config
@Configuration
public class GatewayConfig {
    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("asset-service", r -> r.path("/api/v1/assets/**")
                .filters(f -> f.filter(new JwtAuthenticationFilter()))
                .uri("lb://ASSET-REGISTER-SERVICE"))
            .build();
    }
}`
    },
    {
      id: 'winfocus-pharma-multitenant',
      title: 'Multi-Tenant Pharma SaaS Platform',
      category: 'Microservices & Multitenancy',
      subtitle: 'Dynamic PostgreSQL schema-per-tenant pharmaceutical enterprise platform.',
      badge: 'Enterprise SaaS',
      color: '#00bcd4',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Dynamic PostgreSQL schema-per-tenant data isolation using Hibernate custom connection providers.',
        'Database-driven dynamic multilanguage UI — switchable per user preference at runtime.',
        'Centralized Netflix Eureka service discovery & Spring Cloud API Gateway.',
        'Role-based access control (RBAC) with JWT auth across Inventory, Billing, and User Management services.',
        'Docker containerized deployment with Kubernetes pod management.'
      ],
      techSpecs: {
        frontend: 'Angular 19, Dynamic Multilanguage Pipes, RxJS Signal State',
        backend: 'Java 17, Spring Boot, Netflix Eureka, Spring Cloud Gateway',
        database: 'PostgreSQL (Dynamic Schema-per-Tenant Routing)',
        security: 'Spring Security, OAuth2, JWT Refresh Tokens',
        devops: 'Docker, Kubernetes, Git, SVN, Nginx'
      },
      codeSnippet: `// Dynamic PostgreSQL Schema Resolver
@Component
public class HeaderTenantResolver implements CurrentTenantIdentifierResolver {
    @Override
    public String resolveCurrentTenantIdentifier() {
        RequestAttributes attribs = RequestContextHolder.getRequestAttributes();
        if (attribs instanceof ServletRequestAttributes) {
            HttpServletRequest request = ((ServletRequestAttributes) attribs).getRequest();
            String tenantId = request.getHeader("X-Tenant-ID");
            return tenantId != null ? tenantId : "public";
        }
        return "public";
    }
}`
    },
    {
      id: 'multilanguage-ai-converter',
      title: 'Multilanguage AI Converter Tool',
      category: 'Internal AI Tooling',
      subtitle: 'Automated developer tool parsing Angular projects and translating static labels via AI.',
      badge: 'Internal Developer Tool',
      color: '#ec4899',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Accepts Angular ZIP packages and parses HTML/TS templates for static text strings.',
        'Integrates Hugging Face AI Translation API for batch localization into multiple languages.',
        'Auto-converts plain text into Angular dynamic translation pipes (`{{ "key" | translate }}`).',
        'Generates CSV translation matrices and production SQL `INSERT` scripts for immediate database import.'
      ],
      techSpecs: {
        frontend: 'Angular 19, File Reader API, Progress Stream',
        backend: 'Spring Boot REST Engine, AST Template Parser',
        aiIntegration: 'Hugging Face Neural Translation API',
        output: 'Dynamic SQL Migration Scripts, Localized CSV Tables'
      },
      codeSnippet: `// Hugging Face AI Translation API Client
@Service
public class AiTranslationService {
    @Value("\${huggingface.api.url}")
    private String apiUrl;
    
    public String translateText(String sourceText, String targetLang) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(apiKey);
        headers.setContentType(MediaType.APPLICATION_JSON);
        
        Map<String, Object> body = Map.of("inputs", sourceText, "parameters", Map.of("target_lang", targetLang));
        ResponseEntity<String> response = restTemplate.postForEntity(apiUrl, new HttpEntity<>(body, headers), String.class);
        return parseTranslatedResponse(response.getBody());
    }
}`
    }
  ],

  mncPrepQnA: [
    {
      id: 'q1',
      category: 'System Architecture & Multitenancy',
      question: 'How do you handle multi-tenancy with PostgreSQL in a Spring Boot microservice?',
      answer: 'In enterprise SaaS applications, we implement **Schema-per-Tenant isolation**. We implement `CurrentTenantIdentifierResolver` to pull the `X-Tenant-ID` from the incoming HTTP request header validated by the API Gateway. Then, a `MultiTenantConnectionProvider` acquires a DB connection and issues `SET search_path TO tenant_schema`. This guarantees zero data leakage between enterprise tenants without needing separate database server hardware.'
    },
    {
      id: 'q2',
      category: 'Database Optimization',
      question: 'How did you optimize MSSQL database queries for the Hyderabad Metro AMS project?',
      answer: 'For high-volume asset tracking, we replaced standard ORM entity scans with **MSSQL Stored Procedures** for complex multi-table joins and batch inserts. We created **non-clustered indexes** on heavily searched fields like `StationID` and `AssetCategoryID`. Furthermore, we created **Database Synonyms** to allow fast cross-schema references between the Auth, Admin, and Asset Register service schemas.'
    },
    {
      id: 'q3',
      category: 'Microservices Resilience',
      question: 'What is the role of Spring Cloud API Gateway and Eureka Service Discovery?',
      answer: 'Netflix Eureka acts as a dynamic service registry where every microservice instance auto-registers its IP and port on startup. Spring Cloud Gateway acts as a reverse proxy single entry point. It fetches instance locations from Eureka, performs client-side load balancing via Spring Cloud LoadBalancer, validates incoming JWT tokens, and routes traffic securely.'
    },
    {
      id: 'q4',
      category: 'Frontend Performance',
      question: 'How do Angular Signals and OnPush Change Detection improve application speed?',
      answer: 'Angular 19 Signals provide fine-grained reactivity. Unlike traditional zone.js change detection which re-evaluates the entire component tree on any event, Signals directly notify only the specific DOM nodes bound to that signal. Combining Signals with `ChangeDetectionStrategy.OnPush` eliminates unnecessary re-renders, reducing CPU overhead and keeping frame rates at a smooth 60fps.'
    },
    {
      id: 'q5',
      category: 'Security & Auth',
      question: 'How is JWT authentication structured across multiple microservices?',
      answer: 'The client authenticates against the Auth Service, which verifies credentials and signs a JWT containing user roles, tenant ID, and expiration timestamp. On subsequent requests, the API Gateway intercepts the request, validates the RSA signature of the JWT, extracts user claims, and injects clean user headers (`X-User-Id`, `X-User-Roles`, `X-Tenant-Id`) downstream to inner microservices.'
    }
  ],

  atsResume: {
    summary: 'Java Full Stack & Microservices Developer with 1 year of hands-on production experience engineering enterprise systems for live client environments (Hyderabad Metro Rail Asset Management System) and multi-tenant SaaS platforms (Winfocus Solutions). Specializing in Java 17, Spring Boot 3, Microservices Mesh (Netflix Eureka, Spring Cloud Gateway), Angular 19, PostgreSQL multitenancy schema routing, and MSSQL database performance tuning.',
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
        location: 'Andhra Pradesh, India',
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
  }
};
