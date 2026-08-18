import secureAiImg from '../assets/secure_ai_preview.png';

export const portfolioData = {
  personal: {
    name: 'Ramanjaneyulu Boya',
    shortName: 'Raman',
    titles: [
      'Java Full Stack Developer',
      'Microservices Architecture Specialist',
      'Angular + Spring Boot Engineer',
      'PostgreSQL Multitenancy & AI Developer'
    ],
    email: 'ramanms8688@gmail.com',
    phone: '+91 8688505451',
    location: 'Kurnool, Andhra Pradesh, India',
    github: 'https://github.com/Raman-8688',
    linkedin: 'https://linkedin.com/in/b-ramanjaneyulu-155021258',
    yearsExp: '1',
    company: 'Winfocus Solutions Pvt Ltd',
    heroSub: 'Full Stack Engineer specializing in <strong>Microservices Architecture</strong>, <strong>Spring Boot 3.x</strong>, <strong>Angular 19</strong>, <strong>PostgreSQL Multitenancy</strong>, and <strong>AI Integration</strong> — delivering real production software for enterprise clients.'
  },

  achievements: [
    { icon: 'fas fa-train', value: 'Live Client', label: 'Hyderabad Metro AMS', color: '#8b5cf6' },
    { icon: 'fas fa-layer-group', value: '10+', label: 'Microservices Mesh', color: '#3b82f6' },
    { icon: 'fas fa-database', value: '3 Engines', label: 'Postgres · MSSQL · MySQL', color: '#10b981' },
    { icon: 'fas fa-robot', value: 'AI Integrated', label: 'NVIDIA AI & Hugging Face', color: '#ec4899' }
  ],

  about: {
    intro: 'I am a <strong>Java Full Stack & Microservices Developer</strong> with 1 year of production experience engineering enterprise systems. My expertise ranges from deploying <strong>live asset tracking for Hyderabad Metro Rail</strong> to constructing <strong>dynamic schema-per-tenant SaaS platforms</strong> and <strong>AI-integrated microservices</strong>.',
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
        icon: 'fas fa-brain',
        title: 'NexusCore ERP Work Hub (Nexus 360)',
        text: 'Constructed an enterprise ERP microservices ecosystem (Auth, Employee, Department, Notification) integrated with NVIDIA AI Models for automated workflow intelligence.'
      },
      {
        icon: 'fas fa-shield-halved',
        title: 'Secure AI Assistant (Deployed Live Monolith)',
        text: 'Built and deployed a full-stack Security & AI assistant featuring Angular 19, Spring Boot, Spring Security, JWT, Google & GitHub OAuth2 login, voice input, and real-time AI streaming.'
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
        'Created database <strong>Indexes & Synonyms</strong> to optimize cross-schema query execution speed by over 45%.',
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
        { name: 'Java 17 / 21', tag: 'Core & Enterprise', badge: 'Expert' },
        { name: 'Spring Boot 3.x', tag: 'REST & MVC', badge: 'Production' },
        { name: 'Microservices Mesh', tag: 'Eureka & Gateway', badge: 'Enterprise' },
        { name: 'Spring Security & JWT', tag: 'OAuth2 & RBAC', badge: 'Security' },
        { name: 'Spring Data JPA / Hibernate', tag: 'ORM & Querying', badge: 'Core' }
      ]
    },
    {
      category: 'Frontend Engineering',
      icon: 'fab fa-angular',
      color: '#dd0031',
      items: [
        { name: 'Angular 19 / 18', tag: 'Standalone & Signals', badge: 'Production' },
        { name: 'TypeScript & JavaScript', tag: 'ES6+ & Async', badge: 'Expert' },
        { name: 'RxJS & Reactive Forms', tag: 'State Management', badge: 'Advanced' },
        { name: 'HTML5 / Modern CSS3', tag: 'Glassmorphism & Flex', badge: 'UI/UX' },
        { name: 'React.js', tag: 'Hooks & Components', badge: 'Modern' }
      ]
    },
    {
      category: 'Databases & Multitenancy',
      icon: 'fas fa-database',
      color: '#4169E1',
      items: [
        { name: 'PostgreSQL (Multitenancy)', tag: 'Schema-per-Tenant', badge: 'Enterprise' },
        { name: 'MSSQL Enterprise', tag: 'Stored Procs & Synonyms', badge: 'Production' },
        { name: 'MySQL Database', tag: 'Indexing & Tuning', badge: 'Advanced' },
        { name: 'SQL Query Optimization', tag: 'Execution Plans', badge: 'Tuning' }
      ]
    },
    {
      category: 'DevOps, Cloud & AI',
      icon: 'fas fa-cloud-upload-alt',
      color: '#2496ED',
      items: [
        { name: 'Docker Containerization', tag: 'Dockerfiles & Compose', badge: 'DevOps' },
        { name: 'Kubernetes (K8s)', tag: 'Pods & Services', badge: 'Cloud' },
        { name: 'NVIDIA AI & Hugging Face', tag: 'AI Models Integration', badge: 'AI/ML' },
        { name: 'Git & SVN Version Control', tag: 'Branching & Merging', badge: 'Workflow' },
        { name: 'Linux / Bash Scripting', tag: 'CLI & Automation', badge: 'System' }
      ]
    }
  ],

  projects: [
    {
      id: 'hyderabad-metro-ams',
      title: 'Hyderabad Metro Asset Management System (AMS)',
      category: 'Live Client Projects',
      subtitle: 'Live transit asset tracking deployed for Hyderabad Metro Rail stations.',
      badge: 'Live Client Deployment',
      color: '#8b5cf6',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/Raman-8688',
      liveUrl: null,
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
      codeSnippet: `// Spring Cloud API Gateway Route Config (Hyderabad Metro AMS)
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
      category: 'Live Client Projects',
      subtitle: 'Dynamic PostgreSQL schema-per-tenant pharmaceutical enterprise platform.',
      badge: 'Live Production SaaS',
      color: '#00bcd4',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/Raman-8688',
      liveUrl: null,
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
      codeSnippet: `// Dynamic PostgreSQL Schema Resolver (Pharma SaaS)
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
      id: 'enterprise-oms',
      title: 'Enterprise Order Management System (OMS)',
      category: 'Full-Stack Microservices',
      subtitle: 'High-throughput event-driven microservices order processing pipeline.',
      badge: 'Microservices Mesh',
      color: '#3b82f6',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/Raman-8688/enterprise-order-management-system',
      liveUrl: null,
      highlights: [
        'Built decoupled Order Service, Inventory Service, and Payment Service with Spring Boot 3.',
        'Integrated Spring Cloud API Gateway for rate limiting and central routing.',
        'Used Netflix Eureka Server for dynamic service registration and client-side load balancing.',
        'Implemented event-driven messaging with Kafka for async order fulfillment status updates.',
        'Containerized all microservices with Docker Compose for seamless environment provisioning.'
      ],
      techSpecs: {
        backend: 'Java 17, Spring Boot 3, Spring Cloud Gateway, Eureka',
        messaging: 'Apache Kafka Event Bus, Asynchronous Processing',
        database: 'PostgreSQL, Spring Data JPA, Liquibase Migrations',
        security: 'Spring Security, JWT Token Claims Verification',
        container: 'Docker, Docker Compose, Health Check Actuators'
      },
      codeSnippet: `// Kafka Order Event Publisher (Enterprise OMS)
@Service
public class OrderEventProducer {
    private final KafkaTemplate<String, OrderCreatedEvent> kafkaTemplate;

    public void publishOrderCreated(OrderCreatedEvent event) {
        kafkaTemplate.send("order-created-topic", event.getOrderId(), event);
    }
}`
    },
    {
      id: 'nexuscore-erp-workhub',
      title: 'NexusCore ERP Work Hub (Nexus 360)',
      category: 'Full-Stack Microservices',
      subtitle: 'Enterprise ERP microservices ecosystem integrated with NVIDIA AI models.',
      badge: 'Microservices + NVIDIA AI',
      color: '#10b981',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/Raman-8688/NexusCore-ERP-Work-Hub',
      liveUrl: null,
      highlights: [
        'Enterprise microservices hub featuring Auth, Employee, Department, and Notification services.',
        'Integrated NVIDIA AI Models for automated workflow analysis and smart task dispatch.',
        'Built unified Angular dashboard with real-time employee activity and department analytics.',
        'Configured Spring Cloud API Gateway with global exception handlers and JWT auth.',
        'Designed database schemas with relational constraints and optimized index structures.'
      ],
      techSpecs: {
        frontend: 'Angular 19, TypeScript, RxJS Event Streams, Charting',
        backend: 'Java 17, Spring Boot, Spring Security, JWT, Eureka',
        aiIntegration: 'NVIDIA AI API Models Integration',
        database: 'PostgreSQL & MySQL Multi-Database Connectors',
        devops: 'Docker Containers, Git Workflow, CI/CD Pipeline'
      },
      codeSnippet: `// NVIDIA AI Integration Service (NexusCore ERP)
@Service
public class NvidiaAiIntegrationService {
    @Value("\${nvidia.ai.api.key}")
    private String apiKey;

    public AiAnalysisResponse analyzeWorkflow(WorkflowPayload payload) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(apiKey);
        headers.setContentType(MediaType.APPLICATION_JSON);
        
        HttpEntity<WorkflowPayload> entity = new HttpEntity<>(payload, headers);
        return restTemplate.postForObject("https://api.nvidia.com/v1/ai/analyze", entity, AiAnalysisResponse.class);
    }
}`
    },
    {
      id: 'secure-ai-assistant',
      title: 'Secure AI Assistant',
      category: 'AI & Deployed Apps',
      subtitle: 'Full-Stack Security & AI Assistant with OAuth2, voice input, and streaming responses.',
      badge: 'Live Deployed App',
      color: '#10b981',
      image: secureAiImg,
      githubUrl: 'https://github.com/Raman-8688',
      liveUrl: 'https://secure-ai-assistant-roan.vercel.app/login',
      highlights: [
        'Deployed live at https://secure-ai-assistant-roan.vercel.app/login.',
        'Built with Angular 19 frontend and Spring Boot backend monolith architecture.',
        'Supports OAuth2 Login with Google & GitHub alongside standard JWT Email/Password auth.',
        'Features real-time AI responses, chat history persistence, voice input speech recognition, and theme toggling.'
      ],
      techSpecs: {
        frontend: 'Angular 19, TypeScript, Voice Speech API, Glass UI',
        backend: 'Spring Boot, Spring Security, OAuth2 Client, JWT',
        deployment: 'Live Deployed on Vercel & Cloud App Hosting',
        aiEngine: 'Real-time Streaming AI API Responses'
      },
      codeSnippet: `// OAuth2 Security Configuration (Secure AI Assistant)
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .cors(Customizer.withDefaults())
            .csrf(CsrfConfigurer::disable)
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**", "/oauth2/**").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2Login(oauth2 -> oauth2.defaultSuccessUrl("/chat"));
        return http.build();
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
      category: 'AI Models Integration',
      question: 'How did you integrate NVIDIA AI Models in NexusCore ERP Work Hub?',
      answer: 'We created an asynchronous AI Service layer in Spring Boot that authenticates with NVIDIA AI APIs via bearer tokens. Incoming workflow metrics are serialized into structured JSON payloads, dispatched to NVIDIA AI endpoints, and parsed into actionable employee productivity insights displayed on the Angular dashboard.'
    },
    {
      id: 'q3',
      category: 'Database Optimization',
      question: 'How did you optimize MSSQL database queries for the Hyderabad Metro AMS project?',
      answer: 'For high-volume asset tracking, we replaced standard ORM entity scans with **MSSQL Stored Procedures** for complex multi-table joins and batch inserts. We created **non-clustered indexes** on heavily searched fields like `StationID` and `AssetCategoryID`. Furthermore, we created **Database Synonyms** to allow fast cross-schema references between the Auth, Admin, and Asset Register service schemas.'
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
      answer: 'The application configures Spring Security `oauth2Login()`. When a user signs in via Google or GitHub, Spring Security processes the authorization code code-exchange, verifies the OAuth2 token claims, creates or fetches the user in PostgreSQL, and issues a custom JWT token back to the Angular 19 frontend for session state management.'
    }
  ],

  atsResume: {
    summary: 'Java Full Stack & Microservices Developer with 1 year of hands-on production experience engineering enterprise systems for live client environments (Hyderabad Metro Rail Asset Management System) and multi-tenant SaaS platforms (Winfocus Solutions). Specializing in Java 17, Spring Boot 3, Microservices Mesh (Netflix Eureka, Spring Cloud Gateway), Angular 19, PostgreSQL multitenancy schema routing, and MSSQL database performance tuning.',
    skillsCategorized: [
      { category: 'Backend & Microservices', items: 'Java 17/21, Spring Boot 3.x, REST APIs, Netflix Eureka, Spring Cloud API Gateway, Spring Security, JWT, OAuth2, Spring Data JPA, Hibernate' },
      { category: 'Frontend Development', items: 'Angular 19/18, TypeScript, RxJS, Signals, Reactive Forms, Dynamic Multilanguage Pipes, HTML5, Modern CSS3, SCSS, React.js' },
      { category: 'Databases & Multitenancy', items: 'PostgreSQL (Dynamic Schema-per-Tenant Isolation), MSSQL Enterprise (Stored Procedures, Indexing, Synonyms), MySQL' },
      { category: 'DevOps, Cloud & AI', items: 'Docker Containerization, Kubernetes Pod Management, NVIDIA AI, Hugging Face AI API, Git, SVN, Linux/Bash Scripting, CI/CD Pipelines' }
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
