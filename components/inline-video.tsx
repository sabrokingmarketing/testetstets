"use client";

import { useEffect, useRef } from "react";

// A tiny muted loop that sits inside a sentence like a word.
// It stays still (showing its poster) for visitors who prefer reduced motion.
export function InlineVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
      v.removeAttribute("autoplay");
    }
  }, []);

  return (
    <span className="relative inline-block h-[1em] w-[1.6em] translate-y-[0.14em] overflow-hidden rounded-[0.2em] bg-surface align-baseline md:w-[1.9em]">
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      />
    </span>
  );
}
