import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { site, whatsappLink, defaultWhatsAppMessage } from "@/content/site";
import { ProblemPicker } from "@/components/problem-picker";
import { WhatsAppIcon } from "@/components/whatsapp-float";
import { PageCta } from "@/components/page-parts";
import { CopyButton } from "@/components/copy-button";

export const metadata: Metadata = {
  title: "Contact A Plumber In Krugersdorp",
  description:
    "WhatsApp or call Plumber Near Me on 066 220 2498, or email kelvin@sabroking.co.za. Local plumbers in Krugersdorp, working across South Africa.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function ContactPage() {
  const c = site.contact;
  const rows = [
    {
      icon: <WhatsAppIcon className="h-6 w-6" />,
      label: "WhatsApp",
      value: c.phoneDisplay,
      href: whatsappLink(defaultWhatsAppMessage),
      external: true,
    },
    { icon: <Phone size={24} strokeWidth={1.5} />, label: "Phone", value: c.phoneDisplay, href: c.phoneLink, copy: c.phoneDisplay },
    { icon: <Mail size={24} strokeWidth={1.5} />, label: "Email", value: c.email, href: `mailto:${c.email}` },
    {
      icon: <MapPin size={24} strokeWidth={1.5} />,
      label: "Where",
      value: c.address || `${c.city}. We work across South Africa.`,
      href: c.mapsLink,
      external: true,
      linkText: "Open in Google Maps",
    },
    {
      icon: <Clock size={24} strokeWidth={1.5} />,
      label: "Hours",
      value: c.hours || "WhatsApp us any time and we'll reply as soon as we can.",
    },
  ];

  return (
    <>
      <section className="pb-20 pt-14 md:pb-32 md:pt-24">
        <div className="wrap grid gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <h1 className="display text-[clamp(52px,7.6vw,124px)] text-ink">Get In Touch</h1>
            <p className="mt-8 max-w-[40ch] text-[18px] leading-[1.55] text-body md:text-[20px]">
              The fastest way to reach us is WhatsApp. Tell us what&apos;s wrong and where, and we&apos;ll get back to you.
            </p>

            <ul className="mt-12 flex flex-col gap-7" aria-label="Contact details">
              {rows.map((r) => (
                <li key={r.label} className="flex gap-4">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface text-ink">
                    {r.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[14px] font-medium text-muted">{r.label}</p>
                    <div className="mt-0.5 text-[18px] font-medium text-ink">
                      {r.href && r.linkText ? (
                        <>
                          {r.value}
                          <a
                            href={r.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-arrow mt-1 block w-fit text-[14px]"
                          >
                            {r.linkText} ›
                          </a>
                        </>
                      ) : r.href ? (
                        <a
                          href={r.href}
                          {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="underline decoration-primary decoration-2 underline-offset-4 hover:decoration-ink"
                        >
                          {r.value}
                        </a>
                      ) : (
                        r.value
                      )}
                    </div>
                    {r.copy ? (
                      <div className="mt-3">
                        <CopyButton text={r.copy} label="Copy number" />
                      </div>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] bg-surface p-6 md:col-span-6 md:col-start-7 md:self-start md:p-10">
            <h2 className="text-[clamp(28px,2.6vw,40px)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
              Send Us Your Problem
            </h2>
            <p className="mb-8 mt-3 text-[18px] leading-[1.55] text-body">
              Pick what&apos;s wrong and where. We&apos;ll write the WhatsApp message for you.
            </p>
            <ProblemPicker />
          </div>
        </div>
      </section>

      <PageCta title="Prefer To Talk?" />
    </>
  );
}
