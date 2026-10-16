import type { Metadata } from "next";
import Image from "next/image";
import { site, whatsappLink } from "@/content/site";
import { PageHero, PageCta } from "@/components/page-parts";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Plumbing, Piping & Toilet Services In Krugersdorp",
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
              <a
                href={whatsappLink(`Hi ${site.name}, I need help with ${s.title.toLowerCase()}. My area is: `)}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow mt-10 inline-block text-[18px] text-ink"
              >
                Ask about {s.title.toLowerCase()} on WhatsApp ›
              </a>
            </div>
          </div>
        </section>
      ))}

      <PageCta />
    </>
  );
}
