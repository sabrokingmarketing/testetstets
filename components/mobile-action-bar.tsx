import { Phone } from "lucide-react";
import { site, whatsappLink, defaultWhatsAppMessage } from "@/content/site";
import { WhatsAppIcon } from "./whatsapp-float";

// Phones and tablets: Call and WhatsApp always one tap away at the bottom of the screen.
export function MobileActionBar() {
  return (
    <div
      className="bar-shadow fixed inset-x-0 bottom-0 z-40 bg-bg px-[var(--gutter)] pt-3 lg:hidden"
      style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto grid max-w-[560px] grid-cols-2 gap-3">
        <a href={site.contact.phoneLink} className="btn btn-dark !min-h-[50px] w-full" aria-label={`Call now on ${site.contact.phoneDisplay}`}>
          <Phone size={18} strokeWidth={2} aria-hidden="true" />
          Call now
        </a>
        <a
          href={whatsappLink(defaultWhatsAppMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary !min-h-[50px] w-full"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
