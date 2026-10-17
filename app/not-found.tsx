import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "This page doesn't exist. Go back to the home page, or call Plumber Near Me on 066 220 2498.",
  robots: { index: false },
};

// Shown when someone opens a link that doesn't exist, so they can still reach you.
export default function NotFound() {
  return (
    <section className="py-20 md:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="display max-w-[14ch] text-[clamp(42px,6vw,92px)] text-ink">This Page Has Sprung A Leak</h1>
          <p className="mt-6 max-w-[46ch] text-[18px] leading-[1.6] text-body md:text-[20px]">
            The page you&apos;re looking for isn&apos;t here. Head back to the home page, or call us if you need a plumber.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.contact.phoneLink} className="btn btn-primary">
              <Phone size={18} strokeWidth={2} aria-hidden="true" />
              Call {site.contact.phoneDisplay}
            </a>
            <Link href="/" className="btn btn-light">
              Go to the home page
            </Link>
          </div>
        </div>
        <div className="mx-auto w-[min(60vw,340px)] lg:col-span-4 lg:col-start-9" aria-hidden="true">
          <div className="flex aspect-square items-center justify-center rounded-full bg-primary p-[16%]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-bg">
              <span className="display text-[clamp(48px,7vw,96px)] text-ink">404</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
