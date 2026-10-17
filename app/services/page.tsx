import type { Metadata } from "next";
import Image from "next/image";
import { site, whatsappLink } from "@/content/site";
import { PageHero, PageCta } from "@/components/page-parts";
import { ArrowDown, Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-float";

export const metadata: Metadata = {
  title: "Plumbing, Piping & Toilets In Krugersdorp",
  description:
    "General plumbing, piping and toilet repairs and installations from local plumbers in Krugersdorp, for homes, schools and businesses across South Africa.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Plumbing, Piping And Toilets"
        sub="Three things we do every day, for homes, schools and businesses in Krugersdorp and across South Africa."
      />

      <nav aria-label="Jump to a service" className="wrap -mt-6 pb-12 md:-mt-10 md:pb-16">
        <ul className="flex flex-wrap gap-3">
          {site.services.map((s) => (
            <li key={s.slug}>
              <a
                href={`#${s.slug}`}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-surface px-5 text-[16px] font-semibold text-ink transition-colors hover:bg-surface-strong"
              >
                {s.title}
                <ArrowDown size={16} strokeWidth={2.25} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {site.services.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          aria-labelledby={`${s.slug}-heading`}
          className={`scroll-mt-20 py-20 md:py-32 ${i % 2 === 1 ? "bg-surface" : "bg-bg"}`}
        >
          <div className="wrap grid items-center gap-10 md:grid-cols-12 md:gap-8">
            <div
              className={`relative aspect-[4/3] overflow-hidden rounded-[var(--radius-media)] bg-surface-strong md:col-span-6 ${
                i % 2 === 1 ? "md:order-2 md:col-start-7" : ""
              }`}
              data-reveal
            >
              <Image src={s.image} alt={s.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1" : "md:col-start-8"}`} data-reveal style={{ ["--d" as string]: "100ms" }}>
              <h2 id={`${s.slug}-heading`} className="display text-[clamp(44px,5vw,80px)] text-ink">
                {s.title}
              </h2>
              <p className="mt-6 max-w-[44ch] text-[18px] leading-[1.55] text-body">{s.text}</p>
              <ul className="mt-8 flex flex-col gap-3">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[18px] text-ink">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary">
                      <Check size={16} strokeWidth={2.5} className="text-on-primary" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href={whatsappLink(`Hi ${site.name}, I need help with ${s.title.toLowerCase()}. My area is: `)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Ask on WhatsApp
                </a>
                <a href={site.contact.phoneLink} className="link-arrow text-[18px] text-ink">
                  Or call {site.contact.phoneDisplay} ›
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      <PageCta />
    </>
  );
}
