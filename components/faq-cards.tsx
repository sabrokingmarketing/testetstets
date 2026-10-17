"use client";

import { useId, useState } from "react";
import { site } from "@/content/site";

// Questions filed like index cards: each has a tab, they overlap, one is open at a time.
const tones = ["bg-primary-soft", "bg-accent", "bg-surface"];

export function FaqCards() {
  const [open, setOpen] = useState(0);
  const id = useId();

  return (
    <div className="flex flex-col">
      {site.faqs.map((f, i) => {
        const isOpen = open === i;
        const tone = tones[i % tones.length];
        const tabStep = `calc(${i} * min(13%, 120px))`;
        return (
          <div key={f.q} className={i === 0 ? "" : "-mt-3"} style={{ zIndex: i + 1, position: "relative" }}>
            {/* Tab */}
            <div
              aria-hidden="true"
              className={`${tone} inline-flex h-10 items-center rounded-t-[18px] px-5 text-[14px] font-semibold text-ink`}
              style={{ marginLeft: tabStep }}
            >
              {f.tab}
            </div>
            <div className={`${tone} rounded-[var(--radius-card)]`} style={{ borderTopLeftRadius: i === 0 ? 0 : undefined }}>
              <h3>
                <button
                  type="button"
                  id={`${id}-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`${id}-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-6 text-left text-[18px] md:text-[22px] font-semibold leading-snug tracking-[-0.015em] text-ink md:px-8"
                >
                  {f.q}
                  <span
                    aria-hidden="true"
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bg text-[22px] leading-none transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
              </h3>
              {isOpen && (
                <div
                  id={`${id}-a-${i}`}
                  role="region"
                  aria-labelledby={`${id}-q-${i}`}
                  className="pop-in px-6 pb-8 md:px-8"
                >
                  <p className="max-w-[56ch] text-[17px] leading-[1.6] text-body md:text-[18px]">{f.a}</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
