// ─────────────────────────────────────────────────────────────
// ALL WEBSITE TEXT, CONTACT DETAILS AND BRAND COLOURS LIVE HERE.
// Change something in this file and the whole website updates.
// Search for "TODO" to find details that are still missing.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Plumber Near Me",
  // TODO: replace with your real domain once it's confirmed (used for Google and link previews).
  url: "https://plumbernearme.co.za",
  description:
    "Reliable plumbing for homes, businesses and schools in Krugersdorp: leak repairs, piping, toilet repairs and installations. Call 066 220 2498 or request a quote.",
  copyrightYear: 2026,

  // Brand colours (also set in app/globals.css).
  brand: {
    primary: "#F97316", // modern orange: buttons and highlights
    secondary: "#171717", // soft black: headings and text
    accent: "#FFF7ED", // warm off-white: soft backgrounds
  },

  contact: {
    phoneDisplay: "066 220 2498",
    phoneLink: "tel:+27662202498",
    phoneInternational: "+27662202498",
    // TODO: confirm 066 220 2498 is WhatsApp-enabled. If it isn't, set whatsappEnabled to false
    // (the WhatsApp buttons then disappear) or put your WhatsApp number in whatsappNumber.
    whatsappEnabled: true,
    whatsappNumber: "27662202498",
    email: "kelvin@sabroking.co.za",
    // TODO: add your exact business address once confirmed.
    address: "",
    town: "Krugersdorp",
    region: "Gauteng",
    // TODO: add your opening hours once confirmed, e.g. "Mon to Fri, 8:00 to 17:00".
    hours: "",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Krugersdorp%2C+South+Africa",
  },

  // TODO: add your Facebook, Instagram and LinkedIn links when you have them.
  social: [] as { label: string; href: string }[],

  // Numbers from the brief only.
  stats: [
    { value: "200", label: "Happy clients" },
    { value: "1+", label: "Year in service" },
    { value: "Local", label: "Team based in Krugersdorp" },
  ],

  hero: {
    line1: "Plumbing Problems?",
    line2: "Let’s Get Them Sorted.",
    sub: "From leaking taps to toilet repairs and new piping, Plumber Near Me helps homes, schools and businesses keep things running smoothly. Based in Krugersdorp, with 200 happy clients.",
    primaryCta: "Call 066 220 2498",
    secondaryCta: "Request a quote",
  },

  customers: ["homeowners", "tenants", "business owners", "schools", "property managers"],

  // TODO: confirm this service list before publishing (the brief asks for this).
  services: [
    {
      slug: "general-plumbing",
      title: "General Plumbing",
      short: "Repairs, maintenance and installations for homes, schools and businesses.",
      long: "From small repairs to new installations, we keep the plumbing in your home, school or business working the way it should. Tell us what's wrong and we'll find the cause and fix it properly.",
      points: ["Plumbing repairs", "Maintenance", "Installations"],
      image: "/images/service-plumbing.jpg",
      alt: "Plumber reaching under a sink to connect the waste pipes",
      tile: "accent",
    },
    {
      slug: "leak-repairs",
      title: "Leak Repairs",
      short: "Help with leaking taps, pipes and plumbing fittings.",
      long: "A dripping tap or a leaking pipe wastes water and money, and can damage your walls and floors. We track down the leak and repair the tap, pipe or fitting.",
      points: ["Leaking taps", "Leaking pipes", "Leaking plumbing fittings"],
      image: "/images/service-leaks.jpg",
      alt: "Brass tap dripping water",
      tile: "orange",
    },
    {
      slug: "piping",
      title: "Piping",
      short: "Installation, repairs and replacement of water pipes.",
      long: "Whether you need new water pipes, a repair, or old piping replaced, we do the job neatly so water goes where it should and nowhere else.",
      points: ["New water pipe installations", "Pipe repairs", "Replacing old water pipes"],
      image: "/images/service-piping.jpg",
      alt: "Gloved hands fitting a metal pipe connector",
      tile: "grey",
    },
    {
      slug: "toilets",
      title: "Toilet Repairs And Installations",
      short: "Leaking or running toilets, faulty flushing and replacement toilets.",
      long: "A toilet that leaks, keeps running or won't flush properly is a problem you want sorted today. We repair the flushing mechanism, stop the leak, or replace the toilet.",
      points: ["Leaking or constantly running toilets", "Faulty flushing mechanisms", "Replacement toilets"],
      image: "/images/service-toilets.jpg",
      alt: "Plumber fitting the flush panel above a wall-hung toilet",
      tile: "accent",
    },
  ],

  reasons: [
    {
      title: "Fast, Reliable Service",
      text: "We get you sorted quickly, so everyday life is back on track.",
    },
    {
      title: "A Local Team",
      text: "We're based in Krugersdorp, so you deal with real people close by.",
    },
    {
      title: "200 Happy Clients",
      text: "Over a year of service, and 200 happy clients so far.",
    },
  ],

  steps: [
    { title: "Tell Us", text: "Call us, WhatsApp us, or send the quote form with a short description of the problem." },
    { title: "Get A Quote", text: "We give you a quote based on the work required, so you know where you stand." },
    { title: "Sorted", text: "We fix the leak, the pipe or the toilet, and you get back to your day." },
  ],

  areas: {
    base: "Krugersdorp",
    text: "We're based in Krugersdorp. Nationwide enquiries are welcome, and availability depends on where you are, so ask us.",
    // TODO: list the towns and suburbs you cover regularly, e.g. ["Krugersdorp", "Mogale City", ...].
    towns: [] as string[],
  },

  // Work photos shown in the round gallery frame. These are stock photos for now.
  gallery: [
    { src: "/images/work-1.jpg", alt: "Hands tightening a pipe nut under a sink", caption: "Under-sink repairs" },
    { src: "/images/work-2.jpg", alt: "Plumber working in a modern bathroom", caption: "Bathroom plumbing" },
    { src: "/images/work-3.jpg", alt: "Water pipes and valves on a wall", caption: "Pipes and valves" },
    { src: "/images/work-4.jpg", alt: "Rows of new grey water pipes", caption: "New piping" },
    { src: "/images/work-5.jpg", alt: "Chrome bath tap and shower hose", caption: "Taps and fittings" },
    { src: "/images/work-6.jpg", alt: "Chrome tap with a drip of water", caption: "Leaking taps" },
  ],

  faqs: [
    {
      tab: "Areas",
      q: "Which Areas Do You Serve?",
      a: "We're based in Krugersdorp. Nationwide enquiries are welcome; availability depends on your location, so tell us your town or suburb and we'll let you know.",
    },
    {
      tab: "Services",
      q: "What Plumbing Work Do You Do?",
      a: "General plumbing, leak repairs, piping, and toilet repairs and installations, for homes, schools and businesses.",
    },
    {
      tab: "Prices",
      q: "How Much Will It Cost?",
      a: "Every job is different, so we give you a quote based on the work required. Call us or send the quote form to get one.",
    },
    {
      tab: "Who",
      q: "Who Do You Work For?",
      a: "Homeowners, tenants, business owners, schools and property managers who need dependable plumbing help.",
    },
    {
      tab: "Contact",
      q: "What's The Quickest Way To Reach You?",
      a: "Call us on 066 220 2498. You can also send the quote form or email kelvin@sabroking.co.za.",
    },
  ],

  about: {
    title: "Your Local Plumbing Team",
    intro:
      "Plumber Near Me is a plumbing service based in Krugersdorp. In just over a year we've helped 200 happy clients with leaks, pipes and toilets.",
    body: [
      "We work for homeowners, tenants, business owners, schools and property managers who need plumbing help they can count on.",
      "Our job is simple: fix the problem properly and get everyday life back on track. We're based in Krugersdorp and welcome enquiries from across South Africa.",
    ],
    // TODO: add your own story (who started the business, the team, any qualifications).
  },

  // TODO: add genuine customer reviews, with permission to publish each reviewer's first name.
  // The reviews section stays hidden while this list is empty.
  reviews: [] as { name: string; text: string }[],

  // TODO: add client names or logos only with their permission. Hidden while empty.
  clients: [] as string[],

  // Choices in the quote form.
  quoteServices: ["General plumbing", "Leak repairs", "Piping", "Toilet repairs or installation", "Something else"],
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const defaultWhatsAppMessage = "Hi Plumber Near Me, I need help with a plumbing problem.";
