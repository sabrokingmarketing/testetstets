"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { site, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./icons";

// Visitors type their town or suburb and ask, in one tap, whether we can help there.
export function AreaChecker({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const [area, setArea] = useState("");
  const place = area.trim();
  const message = place
    ? `Hi ${site.name}, do you work in ${place}? I need help with a plumbing problem.`
    : `Hi ${site.name}, do you work in my area? I need help with a plumbing problem.`;
  const c = site.contact;

  return (
    <div>
      <label htmlFor="area-input" className={`text-[16px] font-semibold ${dark ? "text-on-dark" : "text-ink"}`}>
        Where do you need a plumber?
      </label>
      <input
        id="area-input"
        type="text"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        placeholder="Your town or suburb"
        autoComplete="address-level2"
        className="mt-3 block h-14 w-full rounded-full bg-bg px-6 text-[16px] text-ink placeholder:text-muted focus:outline-none focus-visible:outline-3 focus-visible:outline-primary"
      />
      <div className="mt-4 flex flex-wrap gap-3">
        {c.whatsappEnabled ? (
          <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className={`btn ${dark ? "btn-primary" : "btn-dark"}`}>
            <WhatsAppIcon className="h-5 w-5" />
            {place ? `Ask about ${place.length > 18 ? "your area" : place}` : "Ask about your area"}
          </a>
        ) : null}
        <a href={c.phoneLink} className={`btn ${dark ? "bg-white text-ink hover:bg-surface" : "btn-light"}`}>
          <Phone size={18} strokeWidth={2} aria-hidden="true" />
          Call {c.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
