import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { site, whatsappLink, defaultWhatsAppMessage } from "@/content/site";
import { WhatsAppIcon } from "@/components/whatsapp-float";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "This page doesn't exist. Head back home, or call or WhatsApp Plumber Near Me.",
  robots: { index: false },
};

// Shown when someone opens a link that doesn't exist, so they can still reach you.
export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center py-20">
      <div className="wrap">
        <p className="display text-[clamp(96px,16vw,220px)] text-primary">404</p>
        <h1 className="display mt-4 max-w-[14ch] text-[clamp(44px,6vw,96px)] text-ink">This Page Sprung A Leak</h1>
        <p className="mt-6 max-w-[46ch] text-[18px] leading-[1.55] text-body md:text-[20px]">
          The page you&apos;re looking for isn&apos;t here. Go back to the home page, or get in touch if you need a plumber.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href={whatsappLink(defaultWhatsAppMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp us
          </a>
          <a href={site.contact.phoneLink} className="btn btn-dark">
            <Phone size={18} strokeWidth={2} aria-hidden="true" />
            Call {site.contact.phoneDisplay}
          </a>
          <Link href="/" className="link-arrow ml-2 text-[18px] text-ink">
            Go to the home page ›
          </Link>
        </div>
      </div>
    </section>
  );
}
