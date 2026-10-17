import Link from "next/link";
import { Phone } from "lucide-react";
import { site, whatsappLink, defaultWhatsAppMessage } from "@/content/site";
import { LogoMark } from "./logo";
import { WhatsAppIcon } from "./icons";

// Every page ends here: one clear call to action, then the brand mark built large.
export function Footer() {
  const c = site.contact;
  return (
    <footer className="bg-secondary text-on-dark">
      {/* Closing call to action */}
      <div className="wrap grid gap-10 pb-16 pt-20 md:pb-20 md:pt-28 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7" data-reveal>
          <h2 className="display text-[clamp(40px,5.4vw,84px)] text-on-dark">
            Need A Plumber? Call Us Today.
          </h2>
          <p className="mt-6 max-w-[46ch] text-[18px] leading-[1.6] text-on-dark-muted">
            Tell us what&apos;s wrong and where you are. We&apos;ll help you get it sorted.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end" data-reveal style={{ ["--d" as string]: "90ms" }}>
          <a href={c.phoneLink} className="btn btn-primary">
            <Phone size={18} strokeWidth={2} aria-hidden="true" />
            Call {c.phoneDisplay}
          </a>
          {c.whatsappEnabled && (
            <a href={whatsappLink(defaultWhatsAppMessage)} target="_blank" rel="noopener noreferrer" className="btn bg-white text-ink hover:bg-surface">
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp us
            </a>
          )}
        </div>
      </div>

      {/* The mark, built large */}
      <div className="wrap" aria-hidden="true">
        <div className="flex items-end gap-[clamp(8px,1.5vw,20px)] overflow-hidden">
          <LogoMark className="h-[clamp(72px,14vw,200px)] w-[clamp(72px,14vw,200px)] shrink-0 [&_circle:last-child]:fill-[var(--on-dark)]" />
          <span className="display block whitespace-nowrap pb-[0.06em] text-[clamp(40px,10vw,168px)] leading-[0.82] text-on-dark">
            {site.name}
          </span>
        </div>
      </div>

      <div className="wrap grid gap-10 pb-28 pt-14 md:grid-cols-2 lg:grid-cols-12 lg:pb-12">
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-3 text-[16px] lg:col-span-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/#areas" className="hover:underline">Areas we serve</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/contact#quote" className="hover:underline">Request a quote</Link>
          <Link href="/privacy-policy" className="hover:underline">Privacy policy</Link>
          {site.social.map((s) => (
            <a key={s.href} href={s.href} className="hover:underline" target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-2 text-[16px] text-on-dark-muted lg:col-span-5 lg:col-start-8">
          <a href={c.phoneLink} className="font-semibold text-on-dark hover:underline">{c.phoneDisplay}</a>
          <a href={`mailto:${c.email}`} className="hover:underline">{c.email}</a>
          <p>{c.address || `${c.town}, South Africa`}</p>
          {c.hours ? <p>{c.hours}</p> : null}
        </div>
        <div className="flex flex-col gap-2 text-[14px] text-on-dark-muted md:col-span-2 lg:col-span-12 lg:flex-row lg:justify-between">
          <p>© {site.copyrightYear} {site.name} · {c.town}, South Africa</p>
          <p>Photos: Unsplash and Pexels contributors · Tap video: Justeraren, CC BY 4.0, via Wikimedia Commons</p>
        </div>
      </div>
    </footer>
  );
}
