"use client";

import { useEffect, useRef } from "react";

// A short muted loop. It only downloads once it scrolls near the screen,
// and stays as a still photo for visitors who prefer reduced motion.
// It sits on top of a photo, so the photo shows until the video starts.
export function LoopVideo({
  webm,
  mp4,
  label,
  className = "",
}: {
  webm: string;
  mp4: string;
  label: string;
  className?: string;
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
    <video ref={ref} className={className} muted loop playsInline preload="none" aria-label={label}>
      <source data-src={webm} type="video/webm" />
      <source data-src={mp4} type="video/mp4" />
    </video>
  );
}
