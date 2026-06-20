import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: {
    default: `${SITE.name} | Contractors Choice Agency`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "insulation contractor insurance",
    "spray foam insurance",
    "spray foam liability insurance",
    "insulation company insurance",
    "blown in insulation insurance",
    "SPF installer insurance",
    "insulation workers comp",
    "contractor pollution liability insulation",
    "insulation general liability",
    "spray foam off-gassing liability",
    "insulation surety bond",
    "weatherization contractor insurance",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${SITE.domain}`,
    siteName: SITE.name,
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Specialist insurance for insulation contractors and spray foam installers — general liability, spray foam liability, contractor pollution liability, workers' comp, tools & equipment, and surety bonds. Licensed all 50 states. 15-minute quotes.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: `${SITE.name} — insulation contractor coverage` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Specialist insurance for insulation contractors and spray foam installers. GL, spray foam liability, CPL, workers' comp, tools & equipment. 15-minute quotes.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: `https://${SITE.domain}` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.agency,
    description: SITE.description,
    url: `https://${SITE.domain}`,
    telephone: "+18449675247",
    email: SITE.email,
    image: `https://${SITE.domain}/images/og-image.jpg`,
    logo: `https://${SITE.domain}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "12220 E Riggs Road, Suite #105",
      addressLocality: "Chandler",
      addressRegion: "AZ",
      postalCode: "85249",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.2622, longitude: -111.7826 },
    employee: { "@type": "Person", name: "Josh Cotner", jobTitle: "Founder & Insurance Agent" },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "General Liability Insurance for Insulation Contractors",
      "Spray Foam Liability Insurance",
      "Contractor Pollution Liability for Insulation Contractors",
      "Workers' Compensation for Insulation Crews",
      "Tools & Equipment Insurance for Insulation Contractors",
      "Commercial Auto Insurance for Insulation Contractors",
      "Umbrella & Excess Liability for Insulation Contractors",
      "Surety Bonds for Insulation Contractors",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
