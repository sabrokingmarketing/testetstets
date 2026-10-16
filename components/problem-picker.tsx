"use client";

import { useId, useState } from "react";
import { site, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./whatsapp-float";

// Visitors tap their problem and place, and the WhatsApp button writes the message for them.
// Without JavaScript the button still opens WhatsApp with the default first choices.
export function ProblemPicker({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [problem, setProblem] = useState(site.problems[0]);
  const [place, setPlace] = useState(site.places[0]);
  const id = useId();

  const message = `Hi ${site.name}, I need help with: ${problem.toLowerCase()} at my ${place}. My area is: `;
  const dark = tone === "dark";

  const chip = (active: boolean) =>
    `inline-flex min-h-[44px] cursor-pointer items-center rounded-full px-4 text-[14px] font-medium transition-colors ${
      active
        ? "bg-primary text-on-primary"
        : dark
          ? "bg-white/10 text-on-dark hover:bg-white/20"
          : "bg-surface text-ink hover:bg-surface-strong"
    }`;

  return (
    <div>
      <fieldset>
        <legend className={`mb-3 text-[16px] font-semibold ${dark ? "text-on-dark" : "text-ink"}`}>
          Pick your problem
        </legend>
        <div className="flex flex-wrap gap-2">
          {site.problems.map((p) => (
            <label key={p} className={chip(p === problem)}>
              <input
                type="radio"
                name={`${id}-problem`}
                value={p}
                checked={p === problem}
                onChange={() => setProblem(p)}
                className="sr-only"
              />
              {p}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className={`mb-3 text-[16px] font-semibold ${dark ? "text-on-dark" : "text-ink"}`}>
          Where is it?
        </legend>
        <div className="flex flex-wrap gap-2">
          {site.places.map((p) => (
            <label key={p} className={chip(p === place)}>
              <input
                type="radio"
                name={`${id}-place`}
                value={p}
                checked={p === place}
                onChange={() => setPlace(p)}
                className="sr-only"
              />
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </label>
          ))}
        </div>
      </fieldset>

      <p
        className={`mt-6 max-w-[46ch] text-[16px] leading-relaxed ${dark ? "text-on-dark-muted" : "text-muted"}`}
        aria-live="polite"
      >
        Your message: &ldquo;{message}&hellip;&rdquo;
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Send on WhatsApp
        </a>
        <a href={site.contact.phoneLink} className={`btn ${dark ? "btn-light" : "btn-dark"}`}>
          Call {site.contact.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
