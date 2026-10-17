"use client";

import { useEffect, useRef } from "react";

// A tiny muted loop that sits inside a sentence like a word.
// It only downloads once it scrolls into view (keeps the page fast),
// and stays still (showing its poster) for visitors who prefer reduced motion.
export function InlineVideo({
  webm,
  mp4,
  poster,
  label,
}: {
  webm: string;
  mp4: string;
  poster: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        v.querySelectorAll("source").forEach((s) => {
          if (s.dataset.src) s.src = s.dataset.src;
        });
        v.load();
        v.play().catch(() => {});
      },
      { rootMargin: "200px" },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <span className="relative inline-block h-[1em] w-[1.6em] translate-y-[0.14em] overflow-hidden rounded-[0.2em] bg-surface align-baseline md:w-[1.9em]">
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
      >
        <source data-src={webm} type="video/webm" />
        <source data-src={mp4} type="video/mp4" />
      </video>
    </span>
  );
}
