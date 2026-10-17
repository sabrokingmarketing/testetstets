"use client";

import { useId, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { site, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./icons";

type Fields = { name: string; phone: string; email: string; area: string; service: string; details: string };
const empty: Fields = { name: "", phone: "", email: "", area: "", service: "", details: "" };

// The website has no server, so the form writes a ready-made message
// and sends it through WhatsApp (or email), where you'll see it straight away.
export function QuoteForm() {
  const [f, setF] = useState<Fields>(empty);
  const [sent, setSent] = useState(false);
  const id = useId();
  const c = site.contact;

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((prev) => ({ ...prev, [k]: e.target.value }));

  const message = [
    `Hi ${site.name}, I'd like a quote.`,
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    f.email ? `Email: ${f.email}` : "",
    `Town or suburb: ${f.area}`,
    `Service: ${f.service}`,
    `Problem: ${f.details}`,
  ]
    .filter(Boolean)
    .join("\n");

  const mailto = `mailto:${c.email}?subject=${encodeURIComponent(`Quote request: ${f.service || "plumbing"}, ${f.area}`)}&body=${encodeURIComponent(message)}`;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    const url = c.whatsappEnabled ? whatsappLink(message) : mailto;
    if (c.whatsappEnabled) window.open(url, "_blank", "noopener");
    else window.location.href = url;
  }

  const field =
    "mt-2 block w-full rounded-[14px] bg-bg px-4 text-[16px] text-ink placeholder:text-muted focus:outline-none focus-visible:outline-3 focus-visible:outline-secondary";
  const label = "text-[15px] font-semibold text-ink";

  return (
    <div className="relative">
      {/* Coupon notches: the ring motif, cut out of the card */}
      <span aria-hidden="true" className="absolute left-1/2 top-0 z-10 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bg lg:left-[40%] lg:block" />
      <span aria-hidden="true" className="absolute bottom-0 left-1/2 z-10 hidden h-9 w-9 -translate-x-1/2 translate-y-1/2 rounded-full bg-bg lg:left-[40%] lg:block" />

      <div className="grid overflow-hidden rounded-[var(--radius-card)] bg-primary lg:grid-cols-[40%_60%]">
        {/* Left: the coupon's printed side */}
        <div className="relative flex flex-col justify-between gap-8 p-7 md:p-10 lg:p-12">
          <div>
            <h2 id={`${id}-title`} className="display text-[clamp(34px,3.6vw,56px)] text-on-primary">
              Request A Quote
            </h2>
            <p className="mt-5 max-w-[34ch] text-[17px] leading-[1.6] text-on-primary">
              Tell us what&apos;s wrong and where you are. We&apos;ll come back to you with a quote based on the work required.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-[16px] text-on-primary">
            <p className="font-semibold">Rather talk to us?</p>
            <a href={c.phoneLink} className="inline-flex w-fit items-center gap-2 font-semibold underline underline-offset-4">
              <Phone size={17} strokeWidth={2} aria-hidden="true" />
              {c.phoneDisplay}
            </a>
          </div>
          {/* perforation (vertical on desktop, horizontal on phones) */}
          <span aria-hidden="true" className="perforation absolute inset-x-6 bottom-0 h-2 lg:inset-x-auto lg:inset-y-6 lg:bottom-auto lg:right-0 lg:h-auto lg:w-2" />
        </div>

        {/* Right: the form */}
        <form onSubmit={onSubmit} aria-labelledby={`${id}-title`} className="grid gap-4 bg-primary-tint p-7 sm:grid-cols-2 md:p-10 lg:bg-primary lg:p-12 lg:pl-14">
          <div>
            <label htmlFor={`${id}-name`} className={label}>Name</label>
            <input id={`${id}-name`} required autoComplete="name" value={f.name} onChange={set("name")} className={`${field} h-13`} />
          </div>
          <div>
            <label htmlFor={`${id}-phone`} className={label}>Phone number</label>
            <input id={`${id}-phone`} required type="tel" inputMode="tel" autoComplete="tel" value={f.phone} onChange={set("phone")} className={`${field} h-13`} />
          </div>
          <div>
            <label htmlFor={`${id}-email`} className={label}>
              Email <span className="font-normal">(optional)</span>
            </label>
            <input id={`${id}-email`} type="email" autoComplete="email" value={f.email} onChange={set("email")} className={`${field} h-13`} />
          </div>
          <div>
            <label htmlFor={`${id}-area`} className={label}>Town or suburb</label>
            <input id={`${id}-area`} required autoComplete="address-level2" value={f.area} onChange={set("area")} className={`${field} h-13`} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor={`${id}-service`} className={label}>Service needed</label>
            <select id={`${id}-service`} required value={f.service} onChange={set("service")} className={`${field} h-13 cursor-pointer`}>
              <option value="" disabled>
                Choose a service
              </option>
              {site.quoteServices.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor={`${id}-details`} className={label}>Short description of the problem</label>
            <textarea
              id={`${id}-details`}
              required
              rows={4}
              value={f.details}
              onChange={set("details")}
              placeholder="For example: the kitchen tap keeps dripping"
              className={`${field} resize-y py-3`}
            />
          </div>
          <div className="flex flex-col gap-3 sm:col-span-2">
            <button type="submit" className="btn btn-dark h-14 w-full text-[17px]">
              {c.whatsappEnabled ? <WhatsAppIcon className="h-5 w-5" /> : <Mail size={18} strokeWidth={2} aria-hidden="true" />}
              {c.whatsappEnabled ? "Send my quote request on WhatsApp" : "Send my quote request by email"}
            </button>
            {c.whatsappEnabled && (
              <a href={mailto} className="text-center text-[15px] font-semibold text-on-primary underline underline-offset-4">
                Or send it by email instead
              </a>
            )}
          </div>
          {sent && (
            <p role="status" className="pop-in rounded-[14px] bg-bg p-4 text-[15px] leading-[1.5] text-ink sm:col-span-2">
              Your message is ready in {c.whatsappEnabled ? "WhatsApp" : "your email app"}. Just press send there. If nothing opened, call us on{" "}
              <a href={c.phoneLink} className="font-semibold underline">{c.phoneDisplay}</a>.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
