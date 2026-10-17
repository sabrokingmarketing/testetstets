import { site } from "@/content/site";

// The mark is the site's motif: a ring (a pipe end) with a dot in the middle ("near me").
// TODO: when your real logo arrives, save it as public/images/logo.png (or .svg)
// and swap <LogoMark /> below for it.
export function LogoMark({ className = "", tone = "default" }: { className?: string; tone?: "default" | "dark" }) {
  const ring = tone === "dark" ? "#171717" : "var(--primary)";
  const dot = tone === "dark" ? "#171717" : "var(--secondary)";
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <circle cx="16" cy="16" r="12.5" fill="none" stroke={ring} strokeWidth="5" />
      <circle cx="16" cy="16" r="3.2" fill={dot} />
    </svg>
  );
}

export function Logo({ tone = "default" }: { tone?: "default" | "dark" }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className="h-8 w-8 shrink-0" tone={tone} />
      <span className="text-[18px] font-bold tracking-[-0.03em] text-ink">{site.name}</span>
    </span>
  );
}
