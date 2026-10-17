import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site, whatsappLink, defaultWhatsAppMessage } from "@/content/site";
import { QuoteForm } from "@/components/quote-form";
import { CopyButton } from "@/components/copy-button";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us And Request A Quote",
  description:
    "Call Plumber Near Me on 066 220 2498, email kelvin@sabroking.co.za or request a plumbing quote online. Based in Krugersdorp, South Africa.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function ContactPage() {
  const c = site.contact;
  const rows = [
    {
      icon: <Phone size={22} strokeWidth={1.75} />,
      label: "Phone",
      content: (
        <>
          <a href={c.phoneLink} className="text-link">{c.phoneDisplay}</a>
          <div className="mt-3">
            <CopyButton text={c.phoneDisplay} label="Copy number" />
          </div>
        </>
      ),
    },
    ...(c.whatsappEnabled
      ? [
          {
            icon: <WhatsAppIcon className="h-[22px] w-[22px]" />,
            label: "WhatsApp",
            content: (
              <a href={whatsappLink(defaultWhatsAppMessage)} target="_blank" rel="noopener noreferrer" className="text-link">
                Message us on WhatsApp
              </a>
            ),
          },
        ]
      : []),
    {
      icon: <Mail size={22} strokeWidth={1.75} />,
      label: "Email",
      content: <a href={`mailto:${c.email}`} className="text-link break-all">{c.email}</a>,
    },
    {
      icon: <MapPin size={22} strokeWidth={1.75} />,
      label: "Where we are",
      content: (
        <>
          <p>{c.address || `${c.town}, South Africa. Nationwide enquiries welcome.`}</p>
          <a href={c.mapsLink} target="_blank" rel="noopener noreferrer" className="text-link mt-1 inline-block text-[15px]">
            Open in Google Maps ›
          </a>
        </>
      ),
    },
    {
      icon: <Clock size={22} strokeWidth={1.75} />,
      label: "Hours",
      content: <p>{c.hours || "Call us and we'll let you know when we can help."}</p>,
    },
  ];

  return (
    <>
      <section className="bg-accent">
        <div className="wrap grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <div className="lg:col-span-6">
            <h1 className="display text-[clamp(42px,6vw,92px)] text-ink">Get In Touch</h1>
            <p className="mt-6 max-w-[46ch] text-[18px] leading-[1.6] text-body md:text-[20px]">
              The quickest way to reach us is a phone call. You can also send the quote form below, and we&apos;ll come back to you.
            </p>
            <a href={c.phoneLink} className="btn btn-primary mt-8">
              <Phone size={18} strokeWidth={2} aria-hidden="true" />
              Call {c.phoneDisplay}
            </a>
          </div>
          <ul className="flex flex-col gap-7 lg:col-span-5 lg:col-start-8" aria-label="Contact details">
            {rows.map((r) => (
              <li key={r.label} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bg text-ink" aria-hidden="true">
                  {r.icon}
                </span>
                <div className="min-w-0 text-[17px] font-medium text-ink">
                  <p className="text-[14px] font-medium text-muted">{r.label}</p>
                  <div className="mt-0.5">{r.content}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="quote" aria-label="Request a quote" className="py-20 md:py-28">
        <div className="wrap">
          <div className="mx-auto max-w-[1180px]" data-reveal>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
