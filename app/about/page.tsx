import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { PageHero, PageCta } from "@/components/page-parts";

export const metadata: Metadata = {
  title: "About Us | Local Plumbers In Krugersdorp",
  description:
    "Plumber Near Me is a local plumbing service based in Krugersdorp with 200 happy clients, working for homes, schools and businesses across South Africa.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

export default function AboutPage() {
  const { about, stats, reasons } = site;
  return (
    <>
      <PageHero title={about.title} sub={about.intro} image="/images/work-4.jpg" alt="Plumber's hands connecting a pipe under a basin" />

      <section aria-labelledby="story-heading" className="py-20 md:py-32">
        <div className="wrap grid gap-12 md:grid-cols-12 md:gap-8">
          <h2 id="story-heading" className="display text-[clamp(44px,5vw,80px)] text-ink md:col-span-5">
            Real People, Close By
          </h2>
          <div className="flex flex-col gap-6 md:col-span-6 md:col-start-7" data-reveal>
            {about.body.map((p) => (
              <p key={p} className="text-[18px] leading-[1.6] text-body md:text-[20px]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="numbers-heading" className="bg-surface py-20 md:py-28">
        <div className="wrap">
          <h2 id="numbers-heading" className="sr-only">
            Our Numbers
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div data-reveal>
              <p className="display text-[clamp(88px,12vw,200px)] text-ink">{stats.happyClients}</p>
              <p className="mt-2 text-[18px] text-body">Happy clients so far</p>
            </div>
            <div data-reveal style={{ ["--d" as string]: "100ms" }}>
              <p className="display text-[clamp(88px,12vw,200px)] text-ink">{stats.yearsInService}</p>
              <p className="mt-2 text-[18px] text-body">Year of plumbing in Krugersdorp and beyond</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="py-20 md:py-32">
        <div className="wrap grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-media)] bg-surface md:col-span-5" data-reveal>
            <Image src="/images/work-5.jpg" alt="Plumber working in a bathroom" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
          </div>
          <div className="md:col-span-6 md:col-start-7 md:self-center">
            <h2 id="values-heading" className="display text-[clamp(44px,5vw,80px)] text-ink">
              What You Can Expect
            </h2>
            <ul className="mt-10 flex flex-col gap-8">
              {reasons.map((r, i) => (
                <li key={r.title} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
                  <h3 className="text-[24px] font-semibold tracking-[-0.02em] text-ink md:text-[28px]">{r.title}</h3>
                  <p className="mt-2 max-w-[44ch] text-[18px] leading-[1.55] text-body md:text-[18px]">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PageCta title="Let's Fix It Together" />
    </>
  );
}
