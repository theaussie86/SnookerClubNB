# Data Model: Snooker Club NB Website

**Feature**: Statische Next.js Website  
**Date**: 2024-12-19  
**Phase**: 1 - Design & Contracts

## Vereinfachtes Datenmodell für statische Website

Da es sich um eine **statische Website** mit nur 3 Seiten handelt, verwenden wir einfache TypeScript-Konstanten statt komplexer Datenmodelle.

## TypeScript Interfaces

### ClubInfo Interface

```typescript
interface ClubInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  description: string;
  foundingYear?: number;
}
```

### LegalInfo Interface

```typescript
interface LegalInfo {
  legalName: string;
  address: string;
  phone: string;
  email: string;
  taxId?: string;
  registerNumber?: string;
  responsiblePerson: string;
  dataProtectionOfficer?: string;
}
```

### NavigationItem Interface

```typescript
interface NavigationItem {
  label: string;
  path: string;
  order: number;
}
```

## Konstanten-Dateien

### src/lib/constants.ts

```typescript
export const CLUB_INFO: ClubInfo = {
  name: "Snooker Club NB",
  address: "...", // Von snooker-nb.de übernehmen
  phone: "...",
  email: "...",
  website: "https://snooker-nb.de",
  description: "...",
  foundingYear: 2020,
};

export const LEGAL_INFO: LegalInfo = {
  legalName: "...",
  address: "...",
  phone: "...",
  email: "...",
  responsiblePerson: "...",
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "Home", path: "/", order: 1 },
  { label: "Impressum", path: "/impressum", order: 2 },
  { label: "Datenschutz", path: "/datenschutz", order: 3 },
];
```

## Datenquellen

### 1. Bestehende Website (snooker-nb.de)

- Kontaktinformationen extrahieren
- Vereinsinformationen übernehmen
- Rechtliche Daten sammeln

### 2. Manuelle Ergänzung

- Impressum-Details vervollständigen
- DSGVO-konforme Datenschutzerklärung
- Aktuelle Kontaktdaten validieren

## Vereinfachte Validierung

### Build-Time Validation

- TypeScript-Typen für alle Konstanten
- ESLint-Regeln für Konsistenz
- Keine Runtime-Validierung erforderlich

### Content Management

- Statische Inhalte in React-Komponenten
- Einfache Text-Updates durch Code-Änderungen
- Keine CMS erforderlich

## Vorteile des vereinfachten Ansatzes

✅ **Einfachheit**: Keine komplexe Datenbank oder State Management  
✅ **Performance**: Statische Generierung zur Build-Zeit  
✅ **Wartbarkeit**: Zentrale Konstanten-Dateien  
✅ **Sicherheit**: Keine sensiblen Daten in statischen Dateien  
✅ **DSGVO-konform**: Minimale Datensammlung durch statische Website
