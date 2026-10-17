import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/content/site";
import { PageHero } from "@/components/page-parts";
import { RingBullet } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us | Local Plumbers In Krugersdorp",
  description:
    "Plumber Near Me is a local plumbing team based in Krugersdorp, with over a year of service and 200 happy clients across homes, schools and businesses.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

export default function AboutPage() {
  const { about, stats, reasons, customers, contact } = site;
  return (
    <>
      <PageHero title={about.title} sub={about.intro} image="/images/work-1.jpg" alt="Plumber's hands tightening a pipe nut under a sink">
        <div className="flex flex-wrap gap-3">
          <a href={contact.phoneLink} className="btn btn-primary">
            <Phone size={18} strokeWidth={2} aria-hidden="true" />
            Call {contact.phoneDisplay}
          </a>
          <Link href="/contact#quote" className="btn btn-light">
            Request a quote
          </Link>
        </div>
      </PageHero>

      <section aria-labelledby="story-heading" className="py-20 md:py-32">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
          <h2 id="story-heading" className="display text-[clamp(36px,4vw,60px)] text-ink lg:col-span-5" data-reveal>
            Real People, Close By
          </h2>
          <div className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7" data-reveal style={{ ["--d" as string]: "90ms" }}>
            {about.body.map((p) => (
              <p key={p} className="text-[18px] leading-[1.65] text-body md:text-[20px]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="numbers-heading" className="pb-20 md:pb-32">
        <div className="wrap">
          <h2 id="numbers-heading" className="sr-only">
            Our Numbers
          </h2>
          <div className="grid gap-3 md:grid-cols-3">
            {stats.map((s, i) => (
              <div key={s.label} className="rounded-[var(--radius-card)] bg-surface p-8" data-reveal style={{ ["--d" as string]: `${i * 70}ms` }}>
                <p className="display text-[clamp(56px,7vw,104px)] text-ink">{s.value}</p>
                <p className="mt-3 text-[17px] font-medium text-body">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="who-heading" className="bg-accent py-20 md:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5" data-reveal>
            <h2 id="who-heading" className="display text-[clamp(36px,4vw,60px)] text-ink">
              Who We Help
            </h2>
            <ul className="mt-8 flex flex-wrap gap-2">
              {customers.map((c) => (
                <li key={c} className="rounded-full bg-bg px-5 py-3 text-[16px] font-medium text-ink">
                  {c.charAt(0).toUpperCase() + c.slice(1)}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="display text-[clamp(36px,4vw,60px)] text-ink" data-reveal>
              What You Can Expect
            </h2>
            <ul className="mt-10 flex flex-col gap-8">
              {reasons.map((r, i) => (
                <li key={r.title} className="grid grid-cols-[28px_1fr] gap-x-4" data-reveal style={{ ["--d" as string]: `${80 + i * 80}ms` }}>
                  <RingBullet className="mt-1 h-7 w-7" />
                  <div>
                    <h3 className="text-[24px] font-semibold tracking-[-0.02em] text-ink">{r.title}</h3>
                    <p className="mt-2 max-w-[44ch] text-[17px] leading-[1.6] text-body">{r.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
