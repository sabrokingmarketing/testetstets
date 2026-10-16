import { site } from "@/content/site";

// TODO: replace this text logo with your real logo once it's uploaded
// (save it as public/images/logo.png and swap the mark below for an <Image>).
export function LogoMark({ className = "", reversed = false }: { className?: string; reversed?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect width="32" height="32" rx="9" fill={reversed ? "#0B0B0B" : "var(--primary)"} />
      <path
        d="M16 6.5c-.4 0-.7.2-.9.5C12.6 10.6 9.5 15 9.5 18.6a6.5 6.5 0 0 0 13 0c0-3.6-3.1-8-5.6-11.6-.2-.3-.5-.5-.9-.5Z"
        fill={reversed ? "var(--primary)" : "#0B0B0B"}
      />
    </svg>
  );
}

export function Logo({ tone = "dark", reversed = false }: { tone?: "dark" | "light"; reversed?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className="h-8 w-8 shrink-0" reversed={reversed} />
      <span
        className={`text-[18px] font-bold tracking-[-0.03em] ${tone === "light" ? "text-on-dark" : "text-ink"}`}
      >
        {site.name}
      </span>
    </span>
  );
}
