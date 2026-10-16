import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { site } from "@/content/site";
import { Logo } from "./logo";

export function Footer() {
  const year = site.copyrightYear;
  return (
    <footer className="bg-primary text-on-primary">
      <div className="wrap flex min-h-[78svh] flex-col pb-8 pt-10 md:min-h-[88svh]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-4 text-[14px] lg:flex-row lg:gap-12">
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
          <a href="#top" className="inline-flex items-center gap-2 text-[14px] font-semibold underline underline-offset-4">
            Back to top <ArrowUp size={16} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-auto pt-24">
          <p className="text-[16px] font-semibold md:text-[18px]">Call or WhatsApp us</p>
          <a
            href={site.contact.phoneLink}
            className="display mt-2 block whitespace-nowrap text-[clamp(52px,11.5vw,184px)] text-on-primary transition-opacity hover:opacity-80"
          >
            {site.contact.phoneDisplay}
          </a>
          <a
            href={`mailto:${site.contact.email}`}
            className="mt-4 inline-block text-[18px] font-semibold underline underline-offset-4 md:text-[20px]"
          >
            {site.contact.email}
          </a>
        </div>

        <div className="mt-14 flex flex-col gap-3 text-[14px] lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
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
