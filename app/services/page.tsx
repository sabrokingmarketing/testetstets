import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Phone } from "lucide-react";
import { site } from "@/content/site";
import { PageHero } from "@/components/page-parts";
import { RingBullet } from "@/components/icons";
import { LoopVideo } from "@/components/inline-video";

export const metadata: Metadata = {
  title: "Plumbing Services In Krugersdorp",
  description:
    "General plumbing, leak repairs, piping and toilet repairs and installations for homes, schools and businesses in Krugersdorp. Call 066 220 2498 for a quote.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
};

const tone: Record<string, string> = { accent: "bg-accent", orange: "bg-primary-soft", grey: "bg-surface" };

export default function ServicesPage() {
  const c = site.contact;
  return (
    <>
      <PageHero
        title="Our Plumbing Services"
        sub="Repairs, maintenance and installations for homes, schools and businesses. Every job is quoted on the work required."
      >
        <nav aria-label="Jump to a service">
          <ul className="flex flex-wrap gap-2">
            {site.services.map((s) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-bg px-5 text-[15px] font-semibold text-ink transition-colors hover:bg-surface"
                >
                  {s.title}
                  <ArrowDown size={15} strokeWidth={2.25} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {site.services.map((s, i) => {
        const flip = i % 2 === 1;
        return (
          <section key={s.slug} id={s.slug} aria-labelledby={`${s.slug}-heading`} className="py-20 md:py-28">
            <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
              <div className={`lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`} data-reveal>
                <div className={`flex aspect-square items-center justify-center rounded-[var(--radius-card)] ${tone[s.tile]}`}>
                  <div className="circle-photo relative aspect-square h-[76%]">
                    <Image src={s.image} alt={s.alt} fill sizes="(min-width: 1024px) 420px, 76vw" className="object-cover" />
                    {s.slug === "leak-repairs" ? (
                      <LoopVideo
                        webm="/images/tap-loop.webm"
                        mp4="/images/tap-loop.mp4"
                        label="Water running from a tap"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : null}
                  </div>
                </div>
              </div>
              <div className={`lg:col-span-6 ${flip ? "lg:order-1" : "lg:col-start-7"}`} data-reveal style={{ ["--d" as string]: "90ms" }}>
                <h2 id={`${s.slug}-heading`} className="display text-[clamp(36px,4vw,60px)] text-ink">
                  {s.title}
                </h2>
                <p className="mt-6 max-w-[48ch] text-[17px] leading-[1.6] text-body md:text-[18px]">{s.long}</p>
                <ul className="mt-8 flex flex-col gap-4">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-[17px] font-medium text-ink md:text-[18px]">
                      <RingBullet className="h-6 w-6 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <a href={c.phoneLink} className="btn btn-primary">
                    <Phone size={18} strokeWidth={2} aria-hidden="true" />
                    Call {c.phoneDisplay}
                  </a>
                  <Link href="/contact#quote" className="btn btn-light">
                    Request a quote
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
