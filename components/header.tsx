"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { site, whatsappLink, defaultWhatsAppMessage } from "@/content/site";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-bg">
      <div className="wrap flex h-16 items-center justify-between md:h-[72px]">
        <Link href="/" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[14px] font-medium text-ink transition-colors hover:text-muted"
            >
              {l.label}
            </Link>
          ))}
          <a href={site.contact.phoneLink} className="text-[14px] font-semibold text-ink">
            {site.contact.phoneDisplay}
          </a>
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            className="btn btn-primary !min-h-[44px] !px-5 !text-[14px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp us
          </a>
        </nav>

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
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col bg-bg md:top-[72px] lg:hidden">
          <nav aria-label="Mobile" className="wrap flex flex-1 flex-col pt-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="display py-3 text-[44px] text-ink"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-auto flex flex-col gap-3 pb-10">
              <a
                href={whatsappLink(defaultWhatsAppMessage)}
                className="btn btn-primary w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp us
              </a>
              <a href={site.contact.phoneLink} className="btn btn-dark w-full">
                Call {site.contact.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
