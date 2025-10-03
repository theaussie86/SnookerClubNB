/**
 * Zentrale Konstanten für Snooker Club NB Website
 * Statische Daten für die Website
 */

import { ClubInfo, LegalInfo, NavigationItem, SEOInfo } from "./types";

export const CLUB_INFO: ClubInfo = {
  name: "Snookerclub Neubrandenburg e.V.",
  address: "Nonnenhofer Straße 60, 17033 Neubrandenburg",
  phone: "+49 123 456789",
  email: "snookertempel@gmail.com",
  website: "https://snooker-nb.de",
  description:
    "Ihr Snooker Club in der Region - für Anfänger und Profis. Wir bieten eine moderne Anlage mit mehreren Tischen und regelmäßige Turniere.",
  foundingYear: 2020,
};

export const LEGAL_INFO: LegalInfo = {
  legalName: "Snookerclub Neubrandenburg e.V.",
  address: "Nonnenhofer Straße 60, 17033 Neubrandenburg",
  phone: "+49 123 456789",
  email: "snookertempel@gmail.com",
  responsiblePerson: "Marian Dubowski",
  dataProtectionOfficer: "Marian Dubowski",
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "Home", path: "/", order: 1 },
  { label: "Impressum", path: "/impressum", order: 2 },
  { label: "Datenschutz", path: "/datenschutz", order: 3 },
];

export const SEO_DEFAULT: SEOInfo = {
  title: "Snooker Club NB - Ihr Snooker Club in der Region",
  description:
    "Snooker Club NB - Moderne Snooker-Anlage mit mehreren Tischen. Für Anfänger und Profis. Regelmäßige Turniere und Training.",
  keywords: [
    "Snooker",
    "Club",
    "NB",
    "Billard",
    "Sport",
    "Verein",
    "Training",
    "Turniere",
  ],
  ogImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
};

export const CONTACT_INFO = {
  phone: CLUB_INFO.phone,
  email: CLUB_INFO.email,
  address: CLUB_INFO.address,
  website: CLUB_INFO.website,
};

export const SITE_CONFIG = {
  name: "Snooker Club NB",
  url: "https://snooker-nb.de",
  description: "Ihr Snooker Club in der Region",
  author: "Snooker Club NB e.V.",
  language: "de",
  locale: "de_DE",
} as const;
