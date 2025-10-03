# Quickstart Guide: Snooker Club NB Website

**Feature**: Statische Next.js Website  
**Date**: 2025-10-03  
**Phase**: 1 - Design & Contracts

## Overview

Diese Anleitung führt Sie durch die Einrichtung und den ersten Start der Snooker Club NB Website. Die Website ist eine statische Next.js Anwendung, die auf Vercel gehostet wird.

## Prerequisites

- Node.js 20+ installiert (empfohlen für Next.js 15)
- Git installiert
- Vercel Account (für Deployment)

## Local Development Setup

### 1. Repository klonen

```bash
git clone <repository-url>
cd SnookerClubNB
```

### 2. Dependencies installieren

```bash
npm install
```

### 3. Development Server starten

```bash
npm run dev
```

Die Website ist dann unter `http://localhost:3000` erreichbar.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Landingpage
│   ├── impressum/
│   │   └── page.tsx       # Impressum Seite
│   ├── datenschutz/
│   │   └── page.tsx       # Datenschutz Seite
│   └── layout.tsx         # Root Layout
├── components/            # React Komponenten
│   ├── ui/               # Basis UI Komponenten
│   ├── layout/           # Layout Komponenten
│   └── sections/         # Seiten-spezifische Komponenten
├── lib/                  # Utilities und Konfiguration
└── styles/               # CSS/Tailwind Styles

public/
├── images/               # Statische Bilder
└── icons/                # Favicons, etc.
```

## Available Scripts

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

### Testing

```bash
npm test             # Run all tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

### Contract Tests

```bash
npm run test:contracts # Run API contract tests
```

## Configuration

### Environment Variables

Erstellen Sie eine `.env.local` Datei:

```env
# Optional: API Base URL für Contract Tests
API_BASE_URL=http://localhost:3000

# Optional: Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

### Tailwind CSS

Die Website verwendet Tailwind CSS für Styling. Konfiguration in `tailwind.config.js`.

### TypeScript

TypeScript ist für Type Safety konfiguriert. Konfiguration in `tsconfig.json`.

## Content Management

### Statische Inhalte

Alle Inhalte sind in React-Komponenten definiert:

- **Landingpage**: `src/app/page.tsx`
- **Impressum**: `src/app/impressum/page.tsx`
- **Datenschutz**: `src/app/datenschutz/page.tsx`

### Kontaktinformationen

Kontaktdaten sind in `src/lib/constants.ts` zentralisiert:

```typescript
export const CLUB_INFO = {
  name: "Snooker Club NB",
  address: "Musterstraße 123, 12345 Musterstadt",
  phone: "+49 123 456789",
  email: "info@snooker-nb.de",
  website: "https://snooker-nb.de",
};
```

## Testing

### Unit Tests

```bash
npm test
```

Tests befinden sich in `tests/__tests__/` und testen:

- React Komponenten
- Utility Functions
- Data Validation

### Integration Tests

```bash
npm run test:integration
```

Testen die vollständige User Journey:

- Navigation zwischen Seiten
- Responsive Design
- SEO Meta Tags

### Contract Tests

```bash
npm run test:contracts
```

Testen API-Endpunkte:

- Health Check Endpoint

## Deployment

### Vercel Deployment

1. **Automatisches Deployment**:

   - Push zu main branch löst automatisches Deployment aus
   - Vercel erkennt Next.js Projekt automatisch

2. **Manuelles Deployment**:

   ```bash
   npm run build
   vercel --prod
   ```

3. **Environment Variables**:
   - In Vercel Dashboard konfigurieren
   - Keine sensiblen Daten erforderlich (statische Website)

### Build Process

```bash
npm run build
```

Erstellt optimierte statische Dateien in `out/` Verzeichnis.

## Performance Optimization

### Next.js 15 Optimizations

- **Turbopack**: Standard-Bundler für Entwicklung mit erheblichen Performance-Verbesserungen
- **Async Request APIs**: Verbesserte APIs für `cookies`, `headers` und `params`
- **React 19 Support**: Vollständige Unterstützung für React 19 mit neuen Hooks
- **Image Optimization**: Automatische Bildoptimierung
- **Font Optimization**: Optimierte Schriftarten
- **Code Splitting**: Automatisches Code Splitting
- **Static Generation**: Statische Generierung für beste Performance

### Core Web Vitals

- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

## SEO Configuration

### Meta Tags

Jede Seite hat optimierte Meta Tags:

- Title
- Description
- Open Graph Tags
- Twitter Cards

### Sitemap

Automatische Sitemap-Generierung in `public/sitemap.xml`.

### Robots.txt

Konfiguriert in `public/robots.txt`.

## Monitoring

### Vercel Analytics

- Automatische Performance-Metriken
- User Experience Tracking
- Error Monitoring

### Custom Monitoring

- Health Check Endpoint: `/api/health`

## Troubleshooting

### Common Issues

1. **Build Fehler**:

   ```bash
   npm run type-check  # TypeScript Fehler prüfen
   npm run lint        # ESLint Fehler prüfen
   ```

2. **Styling Probleme**:

   ```bash
   npm run dev         # Tailwind CSS neu kompilieren
   ```

3. **Test Fehler**:
   ```bash
   npm test -- --verbose  # Detaillierte Test-Ausgabe
   ```

### Debug Mode

```bash
DEBUG=* npm run dev
```

## Legal Compliance

### DSGVO Compliance

- Datenschutzerklärung in `/datenschutz`
- Keine Tracking-Cookies ohne Zustimmung
- Transparente Datenverarbeitung

### Impressum

- Vollständige rechtliche Informationen in `/impressum`
- Alle erforderlichen Angaben nach TMG

## Support

### Development Support

- Dokumentation in `/docs`
- Code-Kommentare in kritischen Bereichen
- TypeScript für bessere Entwicklererfahrung

### Production Support

- Vercel Support für Hosting-Probleme
- GitHub Issues für Bug Reports
- Automatische Error-Benachrichtigungen

## Next Steps

Nach dem ersten Start:

1. **Content anpassen**: Bearbeiten Sie die Inhalte in den entsprechenden Komponenten
2. **Styling anpassen**: Modifizieren Sie Tailwind-Klassen oder fügen Sie Custom CSS hinzu
3. **Tests erweitern**: Fügen Sie weitere Tests für neue Features hinzu
4. **Performance optimieren**: Überwachen Sie Core Web Vitals und optimieren Sie bei Bedarf
5. **SEO verbessern**: Optimieren Sie Meta Tags und Content für bessere Suchmaschinen-Rankings
