import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageCta } from "@/components/page-parts";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Plumber Near Me collects, uses and protects your personal information under POPIA.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: { url: "/privacy-policy" },
};

// TODO: have this policy checked against your actual business practices.
const sections = [
  {
    h: "Who We Are",
    p: [
      `${site.name} is a plumbing service based in ${site.contact.city}, South Africa. This policy explains how we handle your personal information in line with the Protection of Personal Information Act, 2013 (POPIA).`,
    ],
  },
  {
    h: "What We Collect",
    p: [
      "We only collect what you choose to send us when you contact us by WhatsApp, phone or email: usually your name, phone number, email address, the address of the job, and details or photos of the plumbing problem.",
      "This website does not use contact forms, accounts or tracking cookies.",
    ],
  },
  {
    h: "Why We Use It",
    p: [
      "We use your information to reply to you, give you a quote, arrange and carry out the work, and send invoices. We do not sell your information or use it for anything you haven't asked for.",
    ],
  },
  {
    h: "Who We Share It With",
    p: [
      "We only share your information when we need to in order to do the job (for example with a supplier delivering parts to your address), or when the law requires it. Messages you send on WhatsApp are also handled by WhatsApp under its own privacy policy.",
    ],
  },
  {
    h: "How Long We Keep It",
    p: [
      "We keep your information only as long as we need it for the job, for our records and for tax purposes, and then delete it safely.",
    ],
  },
  {
    h: "Your Rights Under POPIA",
    p: [
      "You may ask us what personal information we hold about you, ask us to correct or delete it, or object to us using it. You can also lodge a complaint with the Information Regulator of South Africa (inforegulator.org.za).",
    ],
  },
  {
    h: "Contact Us",
    p: [
      `For any privacy questions, email ${site.contact.email} or call ${site.contact.phoneDisplay}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="pb-24 pt-14 md:pb-36 md:pt-24">
        <div className="wrap">
          <h1 className="display text-[clamp(52px,7.6vw,124px)] text-ink">Privacy Policy</h1>
          <p className="mt-6 text-[16px] text-muted">Last updated: October 2026</p>
          <div className="mt-16 flex max-w-[68ch] flex-col gap-12">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[30px]">{s.h}</h2>
                {s.p.map((p) => (
                  <p key={p} className="mt-4 text-[18px] leading-[1.65] text-body md:text-[18px]">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <PageCta />
    </>
  );
}
