"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { site } from "@/content/site";

// One round frame stays put while the photos inside it slowly change.
// Tap the frame to see the next one. A pause button stops the change,
// and visitors who prefer reduced motion get a still first photo.
export function GalleryFrame() {
  const items = site.gallery;
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!playing || reduced) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % items.length), 3000);
    return () => window.clearInterval(id);
  }, [playing, reduced, items.length]);

  return (
    <figure className="flex flex-col items-center">
      <button
        type="button"
        onClick={() => setI((n) => (n + 1) % items.length)}
        className="circle-photo relative aspect-square w-[min(72vw,460px)] cursor-pointer bg-surface"
        aria-label={`Show next photo. Now showing: ${items[i].caption}`}
      >
        {items.map((it, n) => (
          <Image
            key={it.src}
            src={it.src}
            alt={it.alt}
            fill
            sizes="(min-width: 768px) 460px, 72vw"
            className={`fade-slide object-cover ${n === i ? "opacity-100" : "opacity-0"}`}
            aria-hidden={n !== i}
          />
        ))}
      </button>
      <figcaption className="mt-5 flex items-center gap-4">
        <span className="min-w-[16ch] text-center text-[16px] font-medium text-ink" aria-live="polite">
          {items[i].caption}
        </span>
        {!reduced && (
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-surface text-ink transition-colors hover:bg-surface-strong"
            aria-label={playing ? "Pause the photos" : "Play the photos"}
          >
            {playing ? <Pause size={18} strokeWidth={2} aria-hidden="true" /> : <Play size={18} strokeWidth={2} aria-hidden="true" />}
          </button>
        )}
      </figcaption>
    </figure>
  );
}
