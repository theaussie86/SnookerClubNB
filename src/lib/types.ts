/**
 * TypeScript Interfaces für Snooker Club NB Website
 * Einfache, pragmatische Interfaces für statische Website
 */

export interface ClubInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  description: string;
  foundingYear?: number;
}

export interface LegalInfo {
  legalName: string;
  address: string;
  phone: string;
  email: string;
  taxId?: string;
  registerNumber?: string;
  responsiblePerson: string;
  dataProtectionOfficer?: string;
}

export interface NavigationItem {
  label: string;
  path: string;
  order: number;
}

export interface SEOInfo {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  website: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: string;
  canonical?: string;
}
