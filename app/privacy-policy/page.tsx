import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Plumber Near Me collects, uses and protects your personal information under POPIA.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: { url: "/privacy-policy" },
};

// TODO: have this policy checked against how your business actually handles information.
const sections = [
  {
    h: "Who We Are",
    p: [
      `${site.name} is a plumbing service based in ${site.contact.town}, South Africa. This policy explains how we handle your personal information under the Protection of Personal Information Act, 2013 (POPIA).`,
    ],
  },
  {
    h: "What We Collect",
    p: [
      "We only collect what you choose to give us when you call, email, WhatsApp us or send the quote form: usually your name, phone number, email address, your town or suburb, the service you need and a description of the problem.",
      "The quote form on this website does not store anything. It prepares a message that you send to us yourself, through WhatsApp or email. This website uses no tracking cookies and has no user accounts.",
    ],
  },
  {
    h: "Why We Use It",
    p: [
      "We use your information to reply to you, give you a quote, arrange and do the work, and send invoices. We do not sell your information or use it for anything you haven't asked for.",
    ],
  },
  {
    h: "Who We Share It With",
    p: [
      "We only share your information when it's needed to do the job, or when the law requires it. Messages you send through WhatsApp or email are also handled by those services under their own privacy policies.",
    ],
  },
  {
    h: "How Long We Keep It",
    p: ["We keep your information only as long as we need it for the job, our records and tax purposes, and then delete it safely."],
  },
  {
    h: "Your Rights Under POPIA",
    p: [
      "You may ask what personal information we hold about you, and ask us to correct or delete it, or object to how we use it. You may also complain to the Information Regulator of South Africa (inforegulator.org.za).",
    ],
  },
  {
    h: "Contact Us",
    p: [`For privacy questions, email ${site.contact.email} or call ${site.contact.phoneDisplay}.`],
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-14 md:py-24">
      <div className="wrap">
        <h1 className="display text-[clamp(42px,6vw,92px)] text-ink">Privacy Policy</h1>
        <p className="mt-5 text-[16px] text-muted">Last updated: October 2026</p>
        <div className="mt-14 flex max-w-[68ch] flex-col gap-12">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-[clamp(24px,2.4vw,30px)] font-semibold tracking-[-0.02em] text-ink">{s.h}</h2>
              {s.p.map((p) => (
                <p key={p} className="mt-4 text-[17px] leading-[1.7] text-body md:text-[18px]">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
