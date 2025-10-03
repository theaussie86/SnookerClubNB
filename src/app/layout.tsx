import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SEO_DEFAULT, SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: SEO_DEFAULT.title,
    template: `%s - ${SITE_CONFIG.name}`,
  },
  description: SEO_DEFAULT.description,
  keywords: SEO_DEFAULT.keywords,
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    title: SEO_DEFAULT.title,
    description: SEO_DEFAULT.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SEO_DEFAULT.ogImage || "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SEO_DEFAULT.title,
      },
    ],
  },
  twitter: {
    card:
      (SEO_DEFAULT.twitterCard as
        | "summary_large_image"
        | "summary"
        | "player"
        | "app") || "summary_large_image",
    title: SEO_DEFAULT.title,
    description: SEO_DEFAULT.description,
    images: [SEO_DEFAULT.ogImage || "/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={SITE_CONFIG.language} className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
