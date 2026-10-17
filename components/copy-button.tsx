"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

// Copies the phone number, for people on a computer who can't tap to call.
export function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full bg-surface px-4 text-[14px] font-semibold text-ink transition-colors hover:bg-surface-strong"
    >
      {copied ? <Check size={16} strokeWidth={2.5} aria-hidden="true" /> : <Copy size={16} strokeWidth={2} aria-hidden="true" />}
      <span aria-live="polite">{copied ? "Copied" : label}</span>
    </button>
  );
}
