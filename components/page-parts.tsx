import Image from "next/image";
import { site, whatsappLink, defaultWhatsAppMessage } from "@/content/site";
import { WhatsAppIcon } from "./whatsapp-float";

export function PageHero({
  title,
  sub,
  image,
  alt,
}: {
  title: string;
  sub: string;
  image?: string;
  alt?: string;
}) {
  return (
    <section className="pb-16 pt-14 md:pb-24 md:pt-24">
      <div className="wrap">
        <h1 className="display max-w-[14ch] text-[clamp(52px,8.4vw,136px)] text-ink">{title}</h1>
        <p className="mt-8 max-w-[52ch] text-[18px] leading-[1.55] text-body md:text-[20px]" data-reveal>
          {sub}
        </p>
        {image ? (
          <div className="shutter relative mt-14 aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-media)] bg-surface md:mt-20 md:aspect-[21/9]">
            <Image src={image} alt={alt ?? ""} fill priority sizes="100vw" className="object-cover" />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function PageCta({ title = "Need A Plumber Today?" }: { title?: string }) {
  return (
    <section aria-labelledby="cta-heading" className="bg-secondary py-24 text-on-dark md:py-36">
      <div className="wrap flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div data-reveal>
          <h2 id="cta-heading" className="display max-w-[12ch] text-[clamp(48px,6.4vw,104px)] text-on-dark">
            {title}
          </h2>
          <p className="mt-6 max-w-[40ch] text-[18px] leading-[1.55] text-on-dark-muted md:text-[20px]">
            WhatsApp us a photo or a short message, or give us a call.
          </p>
        </div>
        <div className="flex flex-wrap gap-3" data-reveal style={{ ["--d" as string]: "120ms" }}>
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp us
          </a>
          <a href={site.contact.phoneLink} className="btn btn-light">
            Call {site.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
