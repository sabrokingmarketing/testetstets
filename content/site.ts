// ─────────────────────────────────────────────────────────────
// ALL WEBSITE TEXT, CONTACT DETAILS AND BRAND COLOURS LIVE HERE.
// Change something in this file and the whole website updates.
// Look for "TODO" to find details that are still missing.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Plumber Near Me",
  shortName: "Plumber Near Me",
  // TODO: replace with the real domain once you have it (used for SEO links).
  url: "https://plumbernearme.co.za",
  tagline: "Local plumbing service in Krugersdorp",
  copyrightYear: 2026,
  description:
    "Plumber Near Me is a local plumbing service in Krugersdorp, helping homes, schools and businesses across South Africa with plumbing, piping and toilets.",

  // Brand colours. "primary" is used for buttons and small highlights only.
  brand: {
    primary: "#FF6A13", // modern orange
    primaryHover: "#E85A05",
    secondary: "#0B0B0B", // black
    ink: "#0B0B0B",
  },

  contact: {
    phoneDisplay: "066 220 2498",
    phoneLink: "tel:+27662202498",
    // TODO: confirm 066 220 2498 is also your WhatsApp number (the brief left WhatsApp empty).
    whatsappNumber: "27662202498",
    email: "kelvin@sabroking.co.za",
    // TODO: add your street address (left empty in the brief).
    address: "",
    city: "Krugersdorp, Gauteng",
    serviceArea: "Krugersdorp and across South Africa",
    // TODO: add your opening hours (left empty in the brief).
    hours: "",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Krugersdorp%2C+Gauteng",
  },

  // TODO: add Facebook / Instagram / LinkedIn links when you have them.
  social: [] as { label: string; href: string }[],

  // Numbers from the brief only.
  stats: {
    happyClients: "200",
    yearsInService: "1+",
  },

  hero: {
    // The photo strip sits between these two parts of the headline.
    before: "Plumbing",
    after: "Sorted Fast",
    srHeadline: "Plumbing Sorted Fast In Krugersdorp",
    sub: "Local plumbers from Krugersdorp for homes, schools and businesses across South Africa.",
    cta: "WhatsApp us now",
  },

  // Who you work for (from the brief).
  customers: ["schools", "business owners", "homeowners", "anyone with a plumbing problem"],

  reasons: [
    {
      title: "Fast And Reliable",
      text: "A leak or a blocked toilet can't wait. Message us and we get moving, then we turn up when we say we will.",
    },
    {
      title: "We Are Local",
      text: "We're based in Krugersdorp, so you deal with real people close by, not a call centre.",
    },
    {
      title: "Over A Year Of Service",
      text: "More than a year of fixing plumbing, with 200 happy clients so far.",
    },
  ],

  services: [
    {
      slug: "plumbing",
      title: "General Plumbing",
      short: "Leaks, drips, blockages and repairs, fixed properly.",
      text: "From a dripping tap to a blocked drain, we find the cause and fix it so it stays fixed. Tell us what's wrong and we'll sort it out for your home, school or business.",
      items: ["Leaking taps and pipes", "Blocked drains and sinks", "General repairs and maintenance"],
      image: "/images/work-1.jpg",
      alt: "Plumber tightening a waste pipe under a kitchen sink",
    },
    {
      slug: "piping",
      title: "Piping",
      short: "New pipes, burst pipes and pipe repairs.",
      text: "Burst or old pipes cause damage fast. We repair, replace and install piping so water goes where it should, and nowhere else.",
      items: ["Burst pipe repairs", "New pipe installations", "Replacing old or damaged piping"],
      image: "/images/work-6.jpg",
      alt: "Gloved hands fitting a metal pipe connector",
    },
    {
      slug: "toilets",
      title: "Toilets",
      short: "Blocked, running or broken toilets, sorted.",
      text: "A toilet that won't flush, keeps running or leaks is a problem you want gone today. We repair and install toilets for homes, schools and businesses.",
      items: ["Blocked toilets", "Running or leaking toilets", "Toilet repairs and installations"],
      image: "/images/work-3.jpg",
      alt: "Plumber installing a wall-hung toilet in a tiled bathroom",
    },
  ],

  // Choices for the "What's wrong?" WhatsApp message builder.
  problems: ["Blocked toilet", "Leaking tap or pipe", "Burst pipe", "New piping", "Something else"],
  places: ["home", "school", "business"],

  faqs: [
    {
      q: "Which Areas Do You Cover?",
      a: "We're based in Krugersdorp and work across South Africa. Send us your area on WhatsApp and we'll tell you how we can help.",
    },
    {
      q: "What Kind Of Jobs Do You Do?",
      a: "General plumbing, piping and toilets: leaks, blockages, burst pipes, new pipes, and toilet repairs or installations.",
    },
    {
      q: "Do You Work For Schools And Businesses?",
      a: "Yes. We work for schools, business owners and homeowners, and anyone with a plumbing problem.",
    },
    {
      q: "How Do I Get A Quote?",
      a: "WhatsApp us a short description or a photo of the problem, or call us on 066 220 2498, and we'll give you a quote.",
    },
    {
      q: "What's The Quickest Way To Reach You?",
      a: "WhatsApp is fastest. You can also call 066 220 2498 or email kelvin@sabroking.co.za.",
    },
  ],

  about: {
    title: "Your Local Plumbers",
    intro:
      "Plumber Near Me is a local plumbing service based in Krugersdorp. We've been fixing plumbing for over a year and have 200 happy clients so far.",
    body: [
      "We work for schools, business owners, homeowners, and anyone with a plumbing problem. Being local means you get real people close by who answer, turn up and do the job properly.",
      "From Krugersdorp we also help customers across South Africa with plumbing, piping and toilets.",
    ],
    // TODO: add your own story here (who started the business, your team, qualifications).
  },

  // TODO: add 3–6 real customer reviews (first name + what they said). None were in the brief, so the reviews section is hidden.
  reviews: [] as { name: string; text: string }[],
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const defaultWhatsAppMessage = "Hi Plumber Near Me, I need help with a plumbing problem.";
