import Link from "next/link";
import { Phone } from "lucide-react";
import { site, whatsappLink, defaultWhatsAppMessage } from "@/content/site";
import { WhatsAppIcon } from "./icons";

// Floating WhatsApp button (all screens) plus, on phones and tablets,
// a bar that keeps "Call" and "Request a quote" one tap away.
export function FloatingContact() {
  return (
    <>
      {site.contact.whatsappEnabled && (
        <a
          href={whatsappLink(defaultWhatsAppMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="float-btn fixed right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#0b0b0b] ring-4 ring-white transition-transform duration-150 hover:scale-105 active:scale-95 lg:right-8 lg:h-16 lg:w-16"
        >
          <WhatsAppIcon className="h-7 w-7 lg:h-8 lg:w-8" />
        </a>
      )}

      <div
        className="bar-lift fixed inset-x-0 bottom-0 z-40 bg-bg px-[var(--gutter)] pt-3 lg:hidden"
        style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto grid max-w-[560px] grid-cols-2 gap-3">
          <a href={site.contact.phoneLink} className="btn btn-primary !min-h-[50px] w-full !px-3" aria-label={`Call now on ${site.contact.phoneDisplay}`}>
            <Phone size={18} strokeWidth={2} aria-hidden="true" />
            Call now
          </a>
          <Link href="/contact#quote" className="btn btn-dark !min-h-[50px] w-full !px-3">
            Get a quote
          </Link>
        </div>
      </div>
    </>
  );
}
