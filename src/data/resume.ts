import type { ResumeConfig } from "@/types/resume";

const config: ResumeConfig = {
  meta: {
    title: "Myron Shykhov — Senior Backend Engineer",
    description:
      "Backend Software Engineer with 5+ years of experience specializing in Kotlin, Java, and Spring ecosystem.",
    url: "https://mshykhov.com",
    keywords: ["Myron Shykhov", "Backend Engineer", "Kotlin", "Java", "Spring Boot"],
    locale: "en_US",
  },

  personal: {
    name: "Myron Shykhov",
    role: "Senior Backend Engineer",
    initials: "MS",
  },

  contacts: [
    { type: "email", label: "Email", value: "myronshykhov@gmail.com" },
    { type: "telegram", label: "Telegram", value: "@mshykhov" },
    { type: "whatsapp", label: "WhatsApp", value: "+380995173706" },
    { type: "linkedin", label: "LinkedIn", value: "https://linkedin.com/in/mshykhov" },
    { type: "github", label: "GitHub", value: "https://github.com/mshykhov" },
  ],

  resume: {
    url: "/resume.pdf",
    filename: "SHYKHOV_MYRON_CV.pdf",
    label: "Download CV",
  },

  summary: [
    "Backend Software Engineer with 5+ years of experience, specializing in Kotlin and Java with the Spring ecosystem. I've worked in teams ranging from 3 to 12 people, across product and outstaff setups.",
    "Skilled in building backend services, BFF layers, API integrations, and automating business processes. Experienced across cloud marketplaces, restaurant booking platforms, invoicing & payments, and data extraction.",
    "I take initiative, own results end-to-end, and care deeply about clean architecture, performance, and developer experience.",
  ],

  experience: [
    {
      company: "Under NDA",
      title: "Senior Backend Software Engineer",
      period: "2025 — 2026",
      domain: "Cloud Services Marketplace / Platform Engineering",
      stack: ["Kotlin", "Java", "Spring Boot", "Gradle", "Axon Framework", "Mongo", "OpenFGA", "Auth0", "Terraform", "Kafka", "AWS", "Docker", "Kubernetes", "Honeycomb", "ArgoCD", "GitHub Actions"],
      highlights: [
        "Identified and resolved critical production bugs in role management — missing permissions, broken propagation across environments",
        "Architected centralized roles & permissions management system, replacing fragmented Terraform/CI pipeline with unified cross-environment solution",
        "Drove Spring 6 migration of the monolith — javax→jakarta, Spring/Security/Data upgrades across 15+ modules",
        "Contributed to RBAC→FGA authorization migration — Auth0 provisioning, permissions sync, legacy cleanup",
        "Provided cross-team platform support — code reviews and backend enablement for product teams",
      ],
    },
    {
      company: "Under NDA",
      title: "Senior Backend Software Engineer",
      period: "2023 — 2025",
      domain: "Cloud Services Marketplace / Mobile BFF",
      stack: ["Kotlin", "Java", "Spring Boot", "REST", "OpenAPI", "OpenSearch", "PactFlow", "Honeycomb", "Docker", "Kubernetes", "ArgoCD", "GitHub Actions"],
      highlights: [
        "Owned BFF layer end-to-end — 40+ endpoints, 8+ downstream microservices, serving iOS & Android clients",
        "Took on backend team lead responsibilities — task coordination, sprint demos, primary contact for cross-team requests",
        "Improved API response latency by ~40% through parallel execution of downstream service calls",
        "Architected API versioning strategy, enabling backward-compatible biweekly releases",
        "Introduced consumer-driven contract testing (PactFlow) across BFF, mobile clients, and microservices — full endpoint coverage",
        "Led Java 17 to 21 migration and OAuth2 auth layer migration",
      ],
    },
    {
      company: "Quandoo",
      title: "Backend Engineer",
      period: "2022 — 2023",
      domain: "Global Restaurant Booking Platform",
      stack: ["Kotlin", "Java", "Spring Boot", "Kotlin Coroutines", "PostgreSQL", "BigQuery", "Redis", "Salesforce", "Docker", "GCP", "Kubernetes", "Jenkins"],
      highlights: [
        "Reduced manual accounting workload by 70% by automating end-to-end invoicing pipeline — generation, delivery, reminders, reconciliation",
        "Migrated legacy invoicing system (10+ Python scripts & Excel) into production-grade Kotlin microservice processing thousands of invoices monthly",
        "Integrated Salesforce CRM via REST API, replacing ad-hoc scripts with reliable data sync",
        "Implemented async processing with Kotlin Coroutines for high-volume reconciliation workloads",
        "Built automated financial reporting modules on BigQuery, replacing manual Excel workflows",
      ],
    },
    {
      company: "DataOx",
      title: "Backend Engineer",
      period: "2020 — 2021",
      domain: "Outsourcing / Data Extraction & Automation",
      stack: ["Java", "Spring Boot", "Liquibase", "PostgreSQL", "Maven", "Selenium", "Jsoup", "Docker", "AWS (EC2, RDS)", "Bitbucket Pipelines"],
      highlights: [
        "Delivered 3 production projects end-to-end within the first year — from architecture to AWS deployment",
        "Built automated news aggregation pipeline — 8+ sources, scheduled collection, PDF & Google Sheets export",
        "Developed hybrid web scraping engine (Selenium + Jsoup) for Facebook data extraction — 50+ target groups, anti-bot handling",
        "Designed event-driven Discord automation service with configurable moderation rules and audit logging",
        "Established CI/CD pipelines and unit testing practices across all projects from day one",
      ],
    },
  ],

  skills: [
    { name: "Languages", items: ["Kotlin", "Java"] },
    { name: "Backend", items: ["Spring Boot", "Spring Framework", "Spring Security", "Axon Framework", "Kotlin Coroutines", "Project Reactor", "REST", "gRPC", "OpenAPI"] },
    { name: "Messaging", items: ["Apache Kafka"] },
    { name: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "BigQuery", "Hibernate", "Liquibase"] },
    { name: "Cloud & DevOps", items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "ArgoCD"] },
    { name: "Auth & Observability", items: ["Auth0", "OpenFGA", "Honeycomb", "Grafana", "OpenSearch"] },
    { name: "Testing", items: ["JUnit", "MockK", "Mockito", "Kotest", "TestContainers", "PactFlow"] },
    { name: "CI/CD & Tools", items: ["GitHub Actions", "Jenkins", "Git", "GitHub", "GitLab", "Jira", "Confluence"] },
  ],

  education: {
    degree: "Bachelor's degree in Computer Science & Telecommunications",
    university: "National University \"Kyiv Aviation Institute\"",
    period: "2021 — 2025",
  },
};

export default config;
