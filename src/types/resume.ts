/** SEO and Open Graph metadata */
export interface SiteMeta {
  /** Page title, used in <title> and OG tags (e.g. "John Doe — Software Engineer") */
  title: string;
  /** Meta description for search engines */
  description: string;
  /** Canonical site URL (e.g. "https://example.com") */
  url: string;
  /** SEO keywords */
  keywords: string[];
  /** Open Graph locale (e.g. "en_US") */
  locale: string;
}

/** Contact link type determines the icon and href format */
export type ContactType = "email" | "telegram" | "whatsapp" | "linkedin" | "github";

/** Single contact link displayed in the header */
export interface ContactLink {
  type: ContactType;
  /** Display label (e.g. "Telegram", "LinkedIn") */
  label: string;
  /** Raw value: email address, @username, phone number, or full URL */
  value: string;
}

/** CV download button configuration */
export interface ResumeDownload {
  /** Path to the PDF file (e.g. "/resume.pdf") */
  url: string;
  /** Download filename (e.g. "DOE_JOHN_CV.pdf") */
  filename: string;
  /** Button label (e.g. "Download CV") */
  label: string;
}

/** Personal information displayed in the header and metadata */
export interface PersonalInfo {
  name: string;
  role: string;
  /** Initials for auto-generated favicon (e.g. "JD") */
  initials: string;
}

/** Single work experience entry */
export interface Job {
  company: string;
  title: string;
  period: string;
  domain: string;
  stack: string[];
  highlights: string[];
}

/** Skill category with a list of technologies */
export interface TechCategory {
  name: string;
  items: string[];
}

/** Education entry */
export interface Education {
  degree: string;
  university: string;
  period: string;
}

/** OG image content — lines displayed on the auto-generated social preview */
export interface OgImageConfig {
  /** Tagline under the name (e.g. "Senior Backend Engineer · 5+ years") */
  tagline: string;
  /** Key technologies line (e.g. ["Kotlin", "Java", "Spring Boot"]) */
  technologies: string[];
  /** Domain/industry tags (e.g. ["FinTech", "AI", "Web3"]) */
  domains: string[];
}

/** Root configuration — single source of truth for the entire site */
export interface ResumeConfig {
  meta: SiteMeta;
  personal: PersonalInfo;
  contacts: ContactLink[];
  resume: ResumeDownload;
  ogImage: OgImageConfig;
  summary: string[];
  experience: Job[];
  skills: TechCategory[];
  education: Education;
}
