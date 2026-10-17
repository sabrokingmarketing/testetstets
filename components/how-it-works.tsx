import { MessageCircle, FileText, Wrench } from "lucide-react";
import { site } from "@/content/site";

// What happens after you get in touch, in three plain steps.
export function HowItWorks() {
  const icons = [MessageCircle, FileText, Wrench];
  return (
    <section aria-labelledby="how-heading" className="bg-secondary py-24 text-on-dark md:py-36">
      <div className="wrap">
        <h2 id="how-heading" className="display max-w-[14ch] text-[clamp(48px,6.4vw,104px)] text-on-dark" data-reveal>
          How It Works
        </h2>
        <ol className="mt-14 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-8">
          {site.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <li key={step.title} data-reveal style={{ ["--d" as string]: `${i * 100}ms` }}>
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-on-primary">
                  <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-[clamp(26px,2.4vw,36px)] font-semibold leading-tight tracking-[-0.02em] text-on-dark">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[34ch] text-[18px] leading-[1.55] text-on-dark-muted">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
