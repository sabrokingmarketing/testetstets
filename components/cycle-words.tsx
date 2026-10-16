"use client";

import { useEffect, useState } from "react";

// Lights up one word at a time in a sentence. Stays still for reduced-motion users.
export function CycleWords({ words }: { words: string[] }) {
  const [lit, setLit] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setLit((i) => (i + 1) % words.length), 2000);
    return () => window.clearInterval(id);
  }, [words.length]);

  return (
    <>
      {words.map((w, i) => (
        <span key={w}>
          <span className={`cycle-word ${i === lit ? "is-lit" : ""}`}>{w}</span>
          {i < words.length - 2 ? ", " : i === words.length - 2 ? " and " : "."}
        </span>
      ))}
    </>
  );
}
