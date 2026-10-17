import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/content/site";
import { RingBullet } from "@/components/icons";
import { StepsDiagram } from "@/components/steps-diagram";
import { GalleryFrame } from "@/components/gallery-frame";
import { AreaChecker } from "@/components/area-checker";
import { FaqCards } from "@/components/faq-cards";
import { QuoteForm } from "@/components/quote-form";

const d = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

const tileTone: Record<string, string> = {
  accent: "bg-accent hover:bg-accent-strong",
  orange: "bg-primary-soft hover:bg-primary-tint",
  grey: "bg-surface hover:bg-surface-strong",
};

export default function Home() {
  const { hero, contact, stats, services, reasons, steps, areas, faqs, reviews } = site;

  // Lets Google show the FAQ answers in search results.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO: the giant ring, with the photo in its centre ── */}
      <section className="relative overflow-hidden">
        <div className="wrap relative lg:flex lg:min-h-[min(calc(100svh-var(--header-h)),860px)] lg:items-center">
          <div className="relative z-10 pb-10 pt-10 md:pt-16 lg:w-[56%] lg:py-20">
            <h1 className="display text-[clamp(31px,8.2vw,54px)] text-ink lg:text-[clamp(48px,4.15vw,74px)]">
              <span className="block whitespace-nowrap">{hero.line1}</span>
              <span className="block whitespace-nowrap">{hero.line2}</span>
            </h1>
            <p className="mt-6 max-w-[50ch] text-[17px] leading-[1.6] text-body md:text-[19px]">{hero.sub}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={contact.phoneLink} className="btn btn-primary">
                <Phone size={18} strokeWidth={2} aria-hidden="true" />
                {hero.primaryCta}
              </a>
              <Link href="/contact#quote" className="btn btn-light">
                {hero.secondaryCta}
              </Link>
            </div>
          </div>

          {/* The motif at full size: cropped by the edge of the screen */}
          <div
            className="relative -mx-[var(--gutter)] h-[78vw] overflow-hidden md:h-[62vw] lg:absolute lg:inset-y-0 lg:right-[calc(-1*var(--gutter))] lg:mx-0 lg:h-auto lg:w-[52%]"
            aria-hidden="false"
          >
            <div className="absolute left-1/2 top-0 aspect-square w-[118vw] -translate-x-1/2 rounded-full bg-primary p-[14%] md:w-[96vw] lg:left-auto lg:right-[-22%] lg:top-1/2 lg:w-[min(118svh,62vw,1040px)] lg:translate-x-0 lg:-translate-y-1/2">
              <div className="shutter circle-photo relative h-full w-full bg-surface">
                <Image
                  src="/images/hero.jpg"
                  alt="Smiling plumber fixing the pipes under a kitchen sink"
                  fill
                  fetchPriority="high"
                  loading="eager"
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover object-[62%_40%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST: large figures on tiles ── */}
      <section aria-labelledby="trust-heading" className="pb-20 pt-6 md:pb-28 md:pt-10">
        <div className="wrap grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-3">
          <div className="col-span-3 flex items-end rounded-[var(--radius-card)] bg-secondary p-6 md:col-span-1 md:min-h-[200px] md:p-7" data-reveal>
            <h2 id="trust-heading" className="display text-[clamp(26px,2.4vw,36px)] text-on-dark">
              Trusted Locally
            </h2>
          </div>
          {stats.map((s, i) => (
            <div key={s.label} className="flex flex-col justify-between gap-6 rounded-[var(--radius-card)] bg-surface p-5 md:min-h-[200px] md:p-7" data-reveal style={d(80 + i * 70)}>
              <p className="display text-[clamp(34px,5.2vw,80px)] text-ink">{s.value}</p>
              <p className="text-[15px] font-medium leading-snug text-body md:text-[17px]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES: each one on its own colour tile ── */}
      <section aria-labelledby="services-heading" className="pb-24 md:pb-36">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3" data-reveal>
            <h2 id="services-heading" className="display text-[clamp(40px,4vw,60px)] text-ink">
              Our Services
            </h2>
            <p className="mt-5 max-w-[34ch] text-[17px] leading-[1.6] text-body">
              Four things we do every day, for homes, schools and businesses. Prices are quoted on the work required.
            </p>
            <Link href="/services" className="text-link mt-6 inline-block text-[17px] text-ink">
              See all services ›
            </Link>
          </div>
          <ul className="grid gap-x-3 gap-y-8 sm:grid-cols-2 lg:col-span-9">
            {services.map((s, i) => (
              <li key={s.slug} data-reveal style={d(i * 70)}>
                <Link href={`/services#${s.slug}`} className="group block">
                  <span className={`flex aspect-[5/4] items-center justify-center rounded-[var(--radius-card)] transition-colors duration-200 ${tileTone[s.tile]}`}>
                    <span className="circle-photo relative block aspect-square h-[72%]">
                      <Image src={s.image} alt={s.alt} fill sizes="(min-width: 1024px) 280px, (min-width: 640px) 34vw, 62vw" className="object-cover" />
                    </span>
                  </span>
                  <h3 className="mt-4 text-[20px] font-semibold leading-snug tracking-[-0.015em] text-ink group-hover:underline group-hover:decoration-primary group-hover:decoration-2 group-hover:underline-offset-4">
                    {s.title}
                  </h3>
                  <p className="mt-1 max-w-[40ch] text-[16px] leading-[1.55] text-muted">{s.short}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section aria-labelledby="why-heading" className="bg-accent py-24 md:py-36">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="mx-auto w-[min(80vw,480px)] lg:col-span-5 lg:mx-0 lg:w-full" data-reveal>
            <div className="aspect-square rounded-full bg-primary p-[10%]">
              <div className="circle-photo relative h-full w-full">
                <Image src="/images/work-2.jpg" alt="Plumber at work in a modern bathroom" fill sizes="(min-width: 1024px) 400px, 70vw" className="object-cover object-[65%_50%]" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 id="why-heading" className="display text-[clamp(40px,4.6vw,72px)] text-ink" data-reveal>
              Why Choose Us
            </h2>
            <ul className="mt-10 flex flex-col gap-9">
              {reasons.map((r, i) => (
                <li key={r.title} className="grid grid-cols-[28px_1fr] gap-x-4" data-reveal style={d(90 + i * 80)}>
                  <RingBullet className="mt-1 h-7 w-7" />
                  <div>
                    <h3 className="text-[clamp(22px,2vw,28px)] font-semibold leading-tight tracking-[-0.02em] text-ink">{r.title}</h3>
                    <p className="mt-2 max-w-[42ch] text-[17px] leading-[1.6] text-body md:text-[18px]">{r.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS: many into one ── */}
      <section aria-labelledby="how-heading" className="py-24 md:py-36">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12" data-reveal>
            <h2 id="how-heading" className="display text-[clamp(40px,4.6vw,72px)] text-ink lg:col-span-5">
              How It Works
            </h2>
            <p className="max-w-[44ch] self-end text-[17px] leading-[1.6] text-body md:text-[18px] lg:col-span-5 lg:col-start-8">
              Three simple steps from &ldquo;something&apos;s leaking&rdquo; to &ldquo;sorted&rdquo;.
            </p>
          </div>
          <div className="mt-12 md:mt-16" data-reveal style={d(100)}>
            <StepsDiagram />
          </div>
          <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((s, i) => (
              <li key={s.title} data-reveal style={d(160 + i * 80)}>
                <h3 className="text-[clamp(24px,2.2vw,30px)] font-semibold tracking-[-0.02em] text-ink">{s.title}</h3>
                <p className="mt-2 max-w-[34ch] text-[17px] leading-[1.6] text-body">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── OUR WORK: one round frame, the photos inside it change ── */}
      <section aria-labelledby="work-heading" className="bg-surface py-24 md:py-36">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5" data-reveal>
            <h2 id="work-heading" className="display text-[clamp(40px,4.6vw,72px)] text-ink">
              Our Work
            </h2>
            <p className="mt-6 max-w-[40ch] text-[17px] leading-[1.6] text-body md:text-[18px]">
              The kind of work we do every day: under-sink repairs, taps, new piping and bathroom plumbing. Tap the photo to see the next one.
            </p>
            <p className="mt-4 text-[15px] text-muted">Photos shown are illustrative.</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7" data-reveal style={d(100)}>
            <GalleryFrame />
          </div>
        </div>
      </section>

      {/* ── REVIEWS: only shown once real reviews are added in content/site.ts ── */}
      {reviews.length > 0 && (
        <section aria-labelledby="reviews-heading" className="py-24 md:py-36">
          <div className="wrap">
            <h2 id="reviews-heading" className="display text-[clamp(40px,4.6vw,72px)] text-ink" data-reveal>
              What Our Clients Say
            </h2>
            <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <li key={r.name} className="rounded-[var(--radius-card)] bg-accent p-8" data-reveal>
                  <blockquote className="text-[18px] leading-[1.6] text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                  <p className="mt-4 font-semibold text-ink">{r.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── AREAS WE SERVE: the ring as a "near me" radius ── */}
      <section id="areas" aria-labelledby="areas-heading" className="overflow-hidden bg-secondary py-24 text-on-dark md:py-36">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="relative mx-auto w-[min(86vw,520px)] lg:col-span-6 lg:w-full lg:max-w-[600px]" data-reveal>
            <svg viewBox="0 0 400 400" className="block h-auto w-full" role="img" aria-label="Map-style rings spreading out from Krugersdorp, our base">
              <circle cx="200" cy="200" r="190" fill="none" stroke="#404040" strokeWidth="18" />
              <circle cx="200" cy="200" r="132" fill="none" stroke="#7c2d12" strokeWidth="18" />
              <circle cx="200" cy="200" r="74" fill="none" stroke="var(--primary)" strokeWidth="18" />
              <circle cx="200" cy="200" r="11" fill="var(--on-dark)" />
            </svg>
            <p className="absolute left-1/2 top-[57%] -translate-x-1/2 whitespace-nowrap text-[15px] font-semibold text-on-dark">{areas.base}</p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 id="areas-heading" className="display text-[clamp(40px,4.6vw,72px)] text-on-dark" data-reveal>
              Areas We Serve
            </h2>
            <p className="mt-6 max-w-[42ch] text-[17px] leading-[1.6] text-on-dark-muted md:text-[18px]" data-reveal style={d(80)}>
              {areas.text}
            </p>
            {areas.towns.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {areas.towns.map((t) => (
                  <li key={t} className="rounded-full bg-white/10 px-4 py-2 text-[15px]">{t}</li>
                ))}
              </ul>
            )}
            <div className="mt-10" data-reveal style={d(140)}>
              <AreaChecker tone="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ: index cards ── */}
      <section aria-labelledby="faq-heading" className="py-24 md:py-36">
        <div className="wrap">
          <div className="mx-auto max-w-[920px]">
            <h2 id="faq-heading" className="display mb-12 text-[clamp(40px,4.6vw,72px)] text-ink" data-reveal>
              Questions, Answered
            </h2>
            <div data-reveal style={d(80)}>
              <FaqCards />
            </div>
          </div>
        </div>
      </section>

      {/* ── REQUEST A QUOTE: the cut-out coupon ── */}
      <section id="quote" aria-label="Request a quote" className="pb-24 md:pb-36">
        <div className="wrap">
          <div className="mx-auto max-w-[1180px]" data-reveal>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
