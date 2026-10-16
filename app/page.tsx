import Image from "next/image";
import Link from "next/link";
import { site, whatsappLink, defaultWhatsAppMessage } from "@/content/site";
import { CycleWords } from "@/components/cycle-words";
import { ReasonsZoom } from "@/components/reasons-zoom";
import { ProblemPicker } from "@/components/problem-picker";
import { WhatsAppIcon } from "@/components/whatsapp-float";
import { InlineVideo } from "@/components/inline-video";

const d = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

export default function Home() {
  const { hero, contact, stats, services, faqs } = site;

  return (
    <>
      {/* ── HERO: the sentence is the layout ── */}
      <section className="flex min-h-[calc(100svh-64px)] flex-col justify-center pb-12 pt-8 md:min-h-[calc(100svh-72px)] md:pb-16">
        <div className="wrap">
          <h1 className="display text-ink">
            <span className="sr-only">{hero.srHeadline}</span>
            <span aria-hidden="true" className="block">
              {/* Line one: word + photo strip */}
              <span className="flex flex-col gap-4 text-[clamp(64px,15.5vw,96px)] md:flex-row md:items-end md:gap-[0.18em] md:text-[clamp(96px,11.2vw,184px)]">
                <span className="block leading-[0.9]">{hero.before}</span>
                <span className="shutter relative block aspect-[2/1] w-full overflow-hidden rounded-[var(--radius-media)] bg-surface md:mb-[0.1em] md:aspect-auto md:h-[0.74em] md:flex-1">
                  <Image
                    src="/images/hero.jpg"
                    alt=""
                    fill
                    priority
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="object-cover object-[50%_42%]"
                  />
                </span>
              </span>
              {/* Line two */}
              <span className="mt-3 block text-[clamp(56px,14.2vw,96px)] leading-[0.95] md:mt-[0.06em] md:text-[clamp(96px,11.2vw,184px)]">
                {hero.after}
              </span>
            </span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 md:mt-14 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-[44ch] text-[18px] leading-[1.5] text-body md:text-[20px]" data-reveal style={d(500)}>
              {hero.sub}
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4" data-reveal style={d(650)}>
              <a
                href={whatsappLink(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {hero.cta}
              </a>
              <a href={contact.phoneLink} className="link-arrow text-[18px] text-ink">
                Call {contact.phoneDisplay} ›
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section aria-labelledby="trust-heading" className="bg-secondary text-on-dark">
        <h2 id="trust-heading" className="sr-only">
          Why You Can Trust Us
        </h2>
        <div className="wrap grid grid-cols-2 gap-x-6 gap-y-12 py-16 md:grid-cols-4 md:py-24">
          {[
            { big: stats.happyClients, small: "Happy clients" },
            { big: stats.yearsInService, small: "Year in service" },
            { big: "Local", small: "Based in Krugersdorp" },
            { big: "SA", small: "We work across South Africa" },
          ].map((s, i) => (
            <div key={s.small} data-reveal style={d(i * 80)}>
              <p className="display text-[clamp(48px,6.4vw,104px)] text-primary">{s.big}</p>
              <p className="mt-3 text-[16px] text-on-dark md:text-[18px]">{s.small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES: paragraph with picture words ── */}
      <section aria-labelledby="services-heading" className="py-28 md:py-44">
        <div className="wrap">
          <h2 id="services-heading" className="sr-only">
            Our Services
          </h2>
          <p
            className="max-w-[1180px] text-[clamp(22px,2.6vw,36px)] font-medium leading-[1.32] tracking-[-0.02em] text-ink"
            data-reveal
          >
            We fix leaks and blocked drains{" "}
            <InlineVideo src="/images/tap-loop.webm" poster="/images/tap-poster.jpg" label="Water running from a tap" />, burst pipes and new
            piping <InlinePic src="/images/work-6.jpg" alt="Gloved hands fitting a pipe connector" />, and broken
            toilets <InlinePic src="/images/work-3.jpg" alt="Plumber fitting a toilet" pos="50% 70%" />.
          </p>

          <ul className="mt-16 flex flex-col md:mt-24">
            {services.map((s, i) => (
              <li key={s.slug} data-reveal style={d(i * 80)}>
                <Link
                  href={`/services#${s.slug}`}
                  className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 rounded-[var(--radius-media)] px-0 py-6 transition-colors hover:bg-surface md:grid-cols-12 md:px-6 md:py-8"
                >
                  <span className="display text-[clamp(40px,5.6vw,92px)] text-ink md:col-span-6">{s.title}</span>
                  <span className="relative col-start-2 row-span-2 row-start-1 block h-20 w-20 overflow-hidden rounded-[10px] bg-surface md:col-span-2 md:col-start-7 md:row-span-1 md:h-28 md:w-full">
                    <Image src={s.image} alt="" fill sizes="200px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </span>
                  <span className="text-[16px] leading-[1.5] text-body md:col-span-3 md:col-start-9 md:text-[18px]">
                    {s.short}
                  </span>
                  <span aria-hidden="true" className="hidden text-right text-[36px] text-ink transition-transform group-hover:translate-x-1 md:col-span-1 md:block">
                    ›
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHY CHOOSE US: one frame, three distances ── */}
      <ReasonsZoom />

      {/* ── GALLERY: prints laid beside the headline ── */}
      <section aria-labelledby="work-heading" className="relative overflow-hidden bg-[#ECEAE6]">
        <div className="wrap relative grid min-h-[100svh] items-center gap-12 py-24 lg:grid-cols-12 lg:gap-8 lg:py-32">
          <div className="lg:col-span-5">
            <h2
              id="work-heading"
              className="display text-[clamp(96px,26vw,140px)] leading-[0.86] text-ink lg:text-[clamp(120px,12.5vw,210px)]"
            >
              Done
              <br />
              Right
            </h2>
            <p className="mt-8 max-w-[34ch] text-[18px] leading-[1.55] text-body" data-reveal>
              Leaks, pipes and toilets, finished properly and left clean.
            </p>
            <p className="mt-3 text-[14px] text-muted">Photos shown are illustrative.</p>
          </div>
          <div className="relative h-[118vw] lg:col-span-7 lg:h-[min(82svh,760px)]">
            <Print
              src="/images/work-1.jpg"
              alt="Plumber tightening a pipe under a sink"
              className="left-0 top-[2%] w-[58%] -rotate-[5deg] lg:left-[2%] lg:top-[4%] lg:w-[46%]"
              ratio="aspect-[3/4]"
            />
            <Print
              src="/images/work-5.jpg"
              alt="Plumber working in a bathroom next to a toilet"
              className="right-0 top-[30%] w-[56%] rotate-[4deg] lg:right-[4%] lg:top-[12%] lg:w-[44%]"
              ratio="aspect-[3/4]"
            />
            <Print
              src="/images/work-4.jpg"
              alt="Hands connecting a pipe under a basin"
              className="bottom-0 left-[14%] hidden w-[34%] rotate-[-2deg] lg:block"
              ratio="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK FOR: names as one sentence ── */}
      <section aria-labelledby="who-heading" className="py-28 md:py-40">
        <div className="wrap">
          <h2 id="who-heading" className="sr-only">
            Who We Work For
          </h2>
          <p
            className="max-w-[26ch] text-[clamp(24px,3vw,36px)] font-semibold leading-[1.2] tracking-[-0.025em] md:max-w-[44ch]"
            data-reveal
          >
            <span className="text-ink">We fix plumbing for </span>
            <CycleWords words={site.customers} />
          </p>
          <p className="mt-8 max-w-[52ch] text-[18px] leading-[1.55] text-body" data-reveal style={d(120)}>
            From Krugersdorp to anywhere in South Africa, {stats.happyClients} happy clients and counting.
          </p>
        </div>
      </section>

      {/* ── FAQ: large questions, answers beside ── */}
      <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20 bg-surface py-28 md:py-40">
        <div className="wrap">
          <div className="grid gap-x-8 md:grid-cols-12">
            <h2
              id="faq-heading"
              className="text-[clamp(24px,2.6vw,36px)] font-semibold leading-[1.1] tracking-[-0.025em] text-muted md:col-span-6"
            >
              Questions
            </h2>
          </div>
          <dl className="mt-12 flex flex-col gap-14 md:mt-20 md:gap-20">
            {faqs.map((f, i) => (
              <div key={f.q} className="grid gap-x-8 gap-y-3 md:grid-cols-12" data-reveal style={d(i * 60)}>
                <dt className="text-[clamp(24px,2.6vw,36px)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink md:col-span-6">
                  {f.q}
                </dt>
                <dd className="max-w-[42ch] text-[18px] leading-[1.55] text-body md:col-span-5 md:col-start-8 md:pt-2 md:text-[18px]">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CONTACT: the live message builder ── */}
      <section aria-labelledby="contact-heading" className="bg-secondary py-28 text-on-dark md:py-40">
        <div className="wrap grid gap-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5" data-reveal>
            <h2 id="contact-heading" className="display text-[clamp(48px,5.6vw,92px)] text-on-dark">
              What&apos;s Wrong?
            </h2>
            <p className="mt-6 max-w-[38ch] text-[18px] leading-[1.55] text-on-dark-muted md:text-[20px]">
              Tap your problem and we&apos;ll write the WhatsApp message for you. Just add your area and send.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-4" data-reveal style={d(120)}>
            <ProblemPicker tone="dark" />
          </div>
        </div>
      </section>
    </>
  );
}

function InlinePic({ src, alt, pos = "50% 50%" }: { src: string; alt: string; pos?: string }) {
  return (
    <span className="relative inline-block h-[1em] w-[1.6em] translate-y-[0.14em] overflow-hidden rounded-[0.2em] bg-surface align-baseline md:w-[1.9em]">
      <Image src={src} alt={alt} fill sizes="120px" className="object-cover" style={{ objectPosition: pos }} />
    </span>
  );
}

function Print({ src, alt, className, ratio }: { src: string; alt: string; className: string; ratio: string }) {
  return (
    <figure className={`print absolute z-10 bg-white p-2 ${className}`} tabIndex={0}>
      <span className={`relative block ${ratio} overflow-hidden`}>
        <Image src={src} alt={alt} fill sizes="(min-width: 768px) 24vw, 52vw" className="object-cover" />
      </span>
    </figure>
  );
}
