import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { RevealObserver } from "@/components/reveal";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Plumber In Krugersdorp | Plumbing, Piping & Toilets | Plumber Near Me",
    template: "%s | Plumber Near Me",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: site.name,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: "+27662202498",
  email: site.contact.email,
  image: `${site.url}/images/hero.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Krugersdorp",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  areaServed: [
    { "@type": "City", name: "Krugersdorp" },
    { "@type": "Country", name: "South Africa" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plumbing services",
    itemListElement: site.services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.short },
    })),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-ZA" className={`${poppins.variable} antialiased`} id="top">
      <head>
        {/* Turns on scroll animations only when JavaScript runs, so content never stays hidden. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </head>
      <body className="flex min-h-svh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-on-dark"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <RevealObserver />
      </body>
    </html>
  );
}
