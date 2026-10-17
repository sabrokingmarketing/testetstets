"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./logo";
import { site } from "@/content/site";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#areas", label: "Areas We Serve" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => !href.includes("#") && pathname === href;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-bg">
      <div className="wrap flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`text-[16px] font-medium text-ink underline-offset-[10px] transition-colors hover:text-muted ${
                isActive(l.href) ? "underline decoration-primary decoration-[3px]" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={site.contact.phoneLink} className="inline-flex items-center gap-2 text-[16px] font-semibold text-ink hover:text-muted">
            <Phone size={17} strokeWidth={2} aria-hidden="true" />
            {site.contact.phoneDisplay}
          </a>
          <Link href="/contact#quote" className="btn btn-primary !min-h-[46px] !px-5">
            Request a quote
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} strokeWidth={1.75} /> : <Menu size={26} strokeWidth={1.75} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="pop-in fixed inset-x-0 bottom-0 top-[var(--header-h)] z-[60] flex flex-col overflow-y-auto bg-bg lg:hidden"
        >
          <nav aria-label="Mobile" className="wrap flex flex-1 flex-col pt-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`display py-3 text-[38px] ${isActive(l.href) ? "text-primary-text" : "text-ink"}`}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-auto flex flex-col gap-3 pb-10 pt-8">
              <a href={site.contact.phoneLink} className="btn btn-primary w-full">
                <Phone size={18} strokeWidth={2} aria-hidden="true" />
                Call {site.contact.phoneDisplay}
              </a>
              <Link href="/contact#quote" onClick={() => setOpen(false)} className="btn btn-dark w-full">
                Request a quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
