import Image from "next/image";
import { site } from "@/content/site";

// All three reasons visible at once, beside one large photo.
export function Reasons() {
  return (
    <section aria-labelledby="why-heading" className="bg-surface py-24 md:py-36">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <h2 id="why-heading" className="display text-[clamp(48px,6.4vw,104px)] text-ink" data-reveal>
            Why People Call Us
          </h2>
          <ul className="mt-12 flex flex-col gap-10">
            {site.reasons.map((reason, i) => (
              <li
                key={reason.title}
                className="grid grid-cols-[12px_1fr] gap-x-5"
                data-reveal
                style={{ ["--d" as string]: `${100 + i * 90}ms` }}
              >
                <span aria-hidden="true" className="mt-[0.55em] h-3 w-3 rounded-full bg-primary" />
                <div>
                  <h3 className="text-[clamp(24px,2.2vw,32px)] font-semibold leading-tight tracking-[-0.02em] text-ink">
                    {reason.title}
                  </h3>
                  <p className="mt-2 max-w-[44ch] text-[18px] leading-[1.55] text-body">{reason.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5 lg:col-start-8" data-reveal style={{ ["--d" as string]: "120ms" }}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-media)] bg-surface">
            <Image
              src="/images/work-2.jpg"
              alt="Plumber connecting the waste pipes under a sink"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="drift object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
