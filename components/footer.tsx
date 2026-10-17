import Link from "next/link";
import { ArrowUp, Phone } from "lucide-react";
import { site, whatsappLink, defaultWhatsAppMessage } from "@/content/site";
import { Logo } from "./logo";
import { WhatsAppIcon } from "./whatsapp-float";

export function Footer() {
  const year = site.copyrightYear;
  return (
    <footer className="bg-primary text-on-primary">
      <div className="wrap flex flex-col pb-8 pt-10 md:pt-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-4 text-[16px] lg:flex-row lg:gap-12">
            <Logo reversed />
            <p className="max-w-[30ch]">Local plumbers in {site.contact.city}, working across South Africa.</p>
            <p>
              {site.contact.address || site.contact.city}
              {site.contact.hours ? (
                <>
                  <br />
                  {site.contact.hours}
                </>
              ) : null}
            </p>
          </div>
          <a href="#top" className="inline-flex items-center gap-2 text-[16px] font-semibold underline underline-offset-4">
            Back to top <ArrowUp size={16} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

        <div className="pt-20 md:pt-28">
          <p className="text-[18px] font-semibold">Call or WhatsApp us</p>
          <a
            href={site.contact.phoneLink}
            className="display mt-2 block whitespace-nowrap text-[clamp(52px,11.5vw,184px)] text-on-primary transition-opacity hover:opacity-80"
          >
            {site.contact.phoneDisplay}
          </a>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={whatsappLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp us
            </a>
            <a href={site.contact.phoneLink} className="btn bg-white text-ink hover:bg-surface">
              <Phone size={18} strokeWidth={2} aria-hidden="true" />
              Call now
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="ml-1 text-[18px] font-semibold underline underline-offset-4"
            >
              {site.contact.email}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 text-[14px] lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-[16px]">
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            {site.social.map((s) => (
              <a key={s.href} href={s.href} className="hover:underline" target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </nav>
          <p>Photos: Unsplash and Pexels contributors · Tap video: Justeraren, CC BY 4.0, via Wikimedia Commons</p>
          <p>
            © {year} {site.name} · {site.contact.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
