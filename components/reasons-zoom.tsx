"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

// "One frame, three distances": as you scroll, the same photo moves closer
// while each of the three reasons takes its turn. On phones it's a simple list.
const stages = [
  { scale: 1, origin: "50% 50%" },
  { scale: 1.8, origin: "48% 62%" },
  { scale: 3.1, origin: "36% 52%" },
];

export function ReasonsZoom() {
  const [stage, setStage] = useState(0);
  const markers = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setStage(Number((e.target as HTMLElement).dataset.stage));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    markers.current.forEach((m) => m && io.observe(m));
    return () => io.disconnect();
  }, []);

  const r = site.reasons;

  return (
    <section aria-labelledby="why-heading" className="bg-bg">
      {/* Desktop & tablet: pinned zoom */}
      <div className="relative hidden md:block" style={{ height: "200vh" }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            ref={(el) => {
              markers.current[i] = el;
            }}
            data-stage={i}
            className="pointer-events-none absolute left-0 w-2 opacity-0"
            style={{ top: `${i * 50}vh`, height: "50vh" }}
            aria-hidden="true"
          />
        ))}
        <div className="sticky top-[72px] flex h-[calc(100svh-72px)] items-center">
          <div className="wrap grid grid-cols-12 items-center gap-8">
            <div className="col-span-6">
              <h2 id="why-heading" className="display text-[clamp(48px,6.4vw,104px)] text-ink">
                Why People Call Us
              </h2>
              <ol className="mt-10 space-y-6">
                {r.map((reason, i) => (
                  <li key={reason.title}>
                    <h3
                      className={`text-[clamp(24px,2.2vw,34px)] font-semibold leading-tight tracking-[-0.02em] transition-colors duration-500 ${
                        stage === i ? "text-ink" : "text-[#8a8a8a]"
                      }`}
                    >
                      {reason.title}
                    </h3>
                    <p
                      className={`reason-body mt-2 max-w-[40ch] text-[18px] leading-[1.55] text-body ${
                        stage === i ? "block" : "hidden"
                      }`}
                    >
                      {reason.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="col-span-6 col-start-7 flex justify-end">
              <div className="relative aspect-[4/5] w-[min(36vw,520px)] max-h-[calc(100svh-140px)] overflow-hidden bg-surface">
                <Image
                  src="/images/work-2.jpg"
                  alt="Plumber connecting the waste pipes under a sink"
                  fill
                  sizes="(min-width: 768px) 34vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none"
                  style={{
                    transform: `scale(${stages[stage].scale})`,
                    transformOrigin: stages[stage].origin,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phones: simple stacked version */}
      <div className="wrap py-24 md:hidden">
        <h2 className="display text-[48px] text-ink" data-reveal>
          Why People Call Us
        </h2>
        <div className="relative mt-10 aspect-[4/5] w-full overflow-hidden bg-surface" data-reveal>
          <Image
            src="/images/work-2.jpg"
            alt="Plumber connecting the waste pipes under a sink"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <ol className="mt-12 space-y-10">
          {r.map((reason, i) => (
            <li key={reason.title} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
              <h3 className="text-[26px] font-semibold leading-tight tracking-[-0.02em] text-ink">
                {reason.title}
              </h3>
              <p className="mt-2 text-[18px] leading-[1.55] text-body">{reason.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
