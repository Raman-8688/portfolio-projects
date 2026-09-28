# 🚀 Enterprise Java Full Stack & Microservices Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Angular-19.2-dd0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular 19" />
  <img src="https://img.shields.io/badge/Java-17%2B-007396?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
  <img src="https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/Microservices-Eureka%20%7C%20Gateway-6DB33F?style=for-the-badge&logo=spring" alt="Microservices" />
  <img src="https://img.shields.io/badge/PostgreSQL-Multi--Tenant-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/MSSQL-Enterprise_DB-CC292B?style=for-the-badge&logo=microsoftsqlserver&logoColor=white" alt="MSSQL" />
  <img src="https://img.shields.io/badge/Docker-Containers-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/Kubernetes-K8s-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes" />
</p>

---

## 📌 Executive Summary

Welcome to the interactive portfolio codebase of **Ramanjaneyulu Boya** — a **Java Full Stack & Microservices Developer** with **1 year of hands-on enterprise experience** delivering production-grade software for client environments. 

This repository houses a high-performance **Angular 19 Single Page Application (SPA)** designed with glassmorphism, responsive design, smooth scroll animations, and interactive architectural showcases built to demonstrate **MNC (Multinational Corporation) level technical competency**.

> **Email**: [ramanms8688@gmail.com](mailto:ramanms8688@gmail.com)  
> **Phone**: +91 8688505451  
> **LinkedIn**: [linkedin.com/in/b-ramanjaneyulu-155021258](https://linkedin.com/in/b-ramanjaneyulu-155021258)  
> **GitHub**: [github.com/Raman-8688](https://github.com/Raman-8688)  
> **Location**: Kurnool, Andhra Pradesh, India  

---

## 🌟 Production Client Projects Featured

### 1. 🚆 Hyderabad Metro Rail — Asset Management System (AMS)
* **Client**: Hyderabad Metro Rail (Live Production Client Project)
* **Domain**: Transit Infrastructure & Enterprise Asset Tracking
* **Architecture**: Microservices Mesh (Auth Service, Admin Service, Asset Register Service, Common Shared Library)
* **Key Contributions**:
  * Designed and built core **inventory tracking screens** in Angular for station assets filtered by location, category, layout group type, and group.
  * Authored complex **MSSQL Stored Procedures** for high-volume asset query execution, batch inserts, and audit logs.
  * Optimized database query execution speed by creating **MSSQL Indexes & Synonyms** across multi-schema service boundaries.
  * Connected all decoupled microservices behind a centralized **Spring Cloud API Gateway** with JWT authorization.

### 2. 💊 Multi-Tenant Pharma Management Platform
* **Company**: Winfocus Solutions Pvt Ltd
* **Domain**: Pharmaceutical SaaS & Inventory Platform
* **Architecture**: Spring Boot Microservices + Dynamic Schema-per-Tenant PostgreSQL Multitenancy
* **Key Contributions**:
  * Implemented dynamic **PostgreSQL schema routing** per tenant using custom Hibernate `CurrentTenantIdentifierResolver` and `MultiTenantConnectionProvider`.
  * Designed a **dynamic database-driven multilanguage UI** in Angular — all button labels, form fields, and placeholders are switchable per user language at runtime.
  * Configured **Spring Security + Eureka Discovery Server + API Gateway** for role-based access control (RBAC) and centralized routing across Inventory, Billing, User Management, and Reporting services.

### 3. 🌐 Standalone Multilanguage AI Converter Tool
* **Company**: Winfocus Solutions Pvt Ltd
* **Type**: Internal Enterprise Developer Tool (Angular + Docker + AI Integration)
* **Key Contributions**:
  * Engineered an automated tool that takes any standard Angular application project ZIP and auto-converts static text into dynamic translation key pipes.
  * Integrated **Hugging Face AI Translation API** to perform batch language translation across target locales.
  * Auto-generates structured **CSV files and SQL `INSERT` statements** for instant database import.

---

## 🏗️ System Architecture & Technology Topology

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          ANGULAR 19 FRONTEND LAYER                          │
│     (Signals · Reactive Forms · Dynamic Multilanguage Pipes · Glass UI)     │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ HTTP / REST APIs (JWT Token)
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         SPRING CLOUD API GATEWAY                            │
│           (Global Routing · Rate Limiting · JWT Token Validation)           │
└──────────────────────┬──────────────────────────────────────┬───────────────┘
                       │                                      │
                       ▼                                      ▼
┌──────────────────────────────┐                      ┌───────────────────────┐
│     EUREKA SERVICE DISCOVERY │                      │ SPRING SECURITY / AUTH│
└──────────────────────────────┘                      └───────────────────────┘
                       │
       ┌───────────────┼──────────────────────┬──────────────────────┐
       ▼               ▼                      ▼                      ▼
┌──────────────┐ ┌───────────┐         ┌────────────┐         ┌────────────┐
│ AUTH SERVICE │ │   ASSET   │         │ INVENTORY  │         │  BILLING   │
│              │ │ REGISTER  │         │  SERVICE   │         │  SERVICE   │
└──────┬───────┘ └─────┬─────┘         └─────┬──────┘         └─────┬──────┘
       │               │                     │                      │
       ▼               ▼                     ▼                      ▼
┌────────────────────────────┐         ┌───────────────────────────────────┐
│    MSSQL ENTERPRISE DB     │         │   POSTGRESQL MULTI-TENANT DB      │
│  (Stored Proc · Synonyms)  │         │   (Schema-per-Tenant Isolation)   │
└────────────────────────────┘         └───────────────────────────────────┘
                                       
                             DEPLOYMENT PIPELINE
     ┌───────────────────────────────────────────────────────────────────┐
     │  Docker Containers · Kubernetes (K8s) · CI/CD · SVN / Git · VMs  │
     └───────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Full Technical Skillset Matrix

| Category | Enterprise Technologies & Tools |
| :--- | :--- |
| **Frontend Engineering** | Angular 19, TypeScript, RxJS, Signals, HTML5, CSS3, Glassmorphic UI, Angular Router, HTTP Interceptors |
| **Backend Engineering** | Java 17/21, Spring Boot 3.x, RESTful Microservices, Spring Data JPA, Hibernate, Common Libraries |
| **Microservices Mesh** | Netflix Eureka Discovery, Spring Cloud API Gateway, Spring Security, JWT Auth, OAuth2 |
| **Database Engines** | PostgreSQL (Multitenancy), MSSQL (Stored Procedures, Indexing, Synonyms), MySQL |
| **DevOps & Cloud** | Docker Containerization, Kubernetes Pod Deployment, Linux/Bash, Git, SVN, Virtual Machines |
| **AI Integration** | Hugging Face AI API, Automated Translation Pipelines |

---

## 🎯 MNC Interview Key Technical Highlights (Q&A Topics)

### 1. How do you implement Schema-per-Tenant Multitenancy in Spring Boot & PostgreSQL?
> *We configure Spring Boot with a custom `CurrentTenantIdentifierResolver` that extracts the Tenant ID from the incoming HTTP request header (validated by the API Gateway). Hibernate's `MultiTenantConnectionProvider` then dynamically sets the PostgreSQL schema search path (`SET search_path TO tenant_schema`), ensuring 100% data isolation between corporate clients without needing separate database instances.*

### 2. How did you optimize MSSQL queries for the Hyderabad Metro AMS project?
> *We replaced heavy ORM joins with customized **MSSQL Stored Procedures** for high-volume asset registration and category grouping. Additionally, we created **non-clustered indexes** on frequently queried columns (Station ID, Asset Category) and defined **Database Synonyms** to streamline cross-schema queries across microservices.*

### 3. What is the role of Spring Cloud API Gateway and Eureka in your architecture?
> *Eureka acts as the central service registry where all microservices auto-register on boot. The API Gateway acts as the single entry point for client requests, handling CORS, JWT token authentication, request routing to registered Eureka instances, and circuit breaking.*

---

## 📂 Project Structure

```
my-portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── hero/                  # Hero section with animated typewriter & social bar
│   │   │   ├── about/                 # Executive summary & key milestone cards
│   │   │   ├── skills/                # Categorized skill badges with level indicators
│   │   │   ├── experience/            # Work experience timeline (Winfocus, Metro AMS, JSpiders)
│   │   │   ├── architecture-showcase/ # Interactive SVG Microservice flow diagram & node inspector
│   │   │   ├── projects/              # Enterprise project showcases & github links
│   │   │   ├── devops-deployment/     # Docker/Kubernetes container pipeline simulator
│   │   │   ├── github-stats/          # Live GitHub contribution metrics & repositories
│   │   │   ├── contact/               # Contact form with EmailJS & location details
│   │   │   ├── navbar/                # Floating sticky navbar with active section scroll-spy
│   │   │   ├── footer/                # Clean footer with copyright & quick links
│   │   │   └── settings-panel/        # Interactive theme color picker & dark/light mode toggle
│   │   ├── services/
│   │   │   ├── Portfolio.service.ts   # Central reactive signals state store
│   │   │   └── Typewriter.service.ts  # Dynamic text animation service
│   │   ├── models/
│   │   │   └── Portfolio.ts           # TypeScript interfaces & domain types
│   │   ├── app.component.ts           # Main root component & IntersectionObservers
│   │   ├── app.component.html         # Application layout template
│   │   └── app.config.ts              # Angular app provider configuration
│   ├── assets/                        # Profile images, logos, resume PDF
│   ├── index.html                     # HTML5 entry with Google Fonts & Font Awesome 6
│   └── styles.css                     # Global design tokens, CSS reset & AOS animations
├── angular.json                       # Angular CLI workspace config
├── package.json                       # NPM dependencies
└── README.md                          # Project documentation
```

---

## ⚡ Local Development Setup

Follow these steps to run the portfolio locally:

### Prerequisites
* **Node.js**: v18.x or higher
* **Angular CLI**: v19.x (`npm install -g @angular/cli`)

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Raman-8688/portfolio-projects.git
   cd portfolio-projects/my-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm start
   ```

4. **Access the application**:
   Open your browser and navigate to `http://localhost:4200/`.

5. **Build for production**:
   ```bash
   npm run build
   ```
   The compiled production output will be generated in `dist/my-portfolio`.

---

## 👤 Contact & Connect

**Ramanjaneyulu Boya**  
*Java Full Stack Developer | Spring Boot & Microservices Specialist*

* 📧 **Email**: [ramanms8688@gmail.com](mailto:ramanms8688@gmail.com)
* 📞 **Phone**: [+91 8688505451](tel:+918688505451)
* 💼 **LinkedIn**: [linkedin.com/in/b-ramanjaneyulu-155021258](https://linkedin.com/in/b-ramanjaneyulu-155021258)
* 🐙 **GitHub**: [github.com/Raman-8688](https://github.com/Raman-8688)

---

<p align="center">
  Crafted with ❤️ for MNC Full Stack Developer Interview Preparation.
</p>
