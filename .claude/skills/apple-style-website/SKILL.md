---
name: apple-style-website
description: Rules for building a modern, Apple-inspired business website. Use for every page, section, layout, copy or design change on this website.
---
# Apple-inspired website rules
Feel: calm, premium, confident. One idea per section. Let the work and the photos breathe.

## Layout
- Mobile first: design at 390px wide first, then scale up to 1440px.
- Content max width 1200px. Paragraphs max about 65 characters per line.
- Generous whitespace on an 8px grid: section padding 96-160px desktop, 64-96px mobile.
- Alternate section backgrounds between white, light grey (#F5F5F7) and near-black for rhythm.
- Each section: one headline, one short supporting line, at most one primary action.

## Typography
- Font stack: -apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, "Segoe UI", Roboto, sans-serif. Load Inter with next/font as the fallback.
- Big, tight headlines: 48-96px desktop, 36-48px mobile, weight 600-700, letter-spacing -0.02em to -0.04em, line-height 1.05.
- Body 17-21px, line-height 1.5, secondary text in grey (#6E6E73 on white).
- Headlines under 8 words. Short sentences. Speak to the customer ("you").

## Colour
- Mostly neutral: white, #F5F5F7, #1D1D1F, black.
- Use the brand colour only for buttons, links and small highlights.
- All text meets WCAG AA contrast (4.5:1).

## Components
- Navigation: sticky, translucent (white at 72% opacity with 20px backdrop blur), thin bottom border, logo left, 4-5 links, one pill button right, clean full-screen menu on mobile.
- Buttons: pill shaped, at least 44px tall. Primary = solid brand colour. Secondary = text link ending in "›".
- Cards: 20-28px corner radius, soft grey fill, no heavy shadows.
- Images: large, edge-to-edge or in rounded cards, from /public/images, using next/image with real alt text. No clip art, no emoji as icons.
- Icons: one thin-line set only (lucide-react).

## Motion
- Subtle fade-and-rise on scroll (translateY 24px to 0, 600ms, ease-out). Content stays visible without JavaScript. Respect prefers-reduced-motion.
- Hover: tiny scale (1.02) or colour change. No bouncing, spinning or heavy parallax.

## Sections for a business site (adapt the order)
Hero (headline, subline, primary button, hero photo) · Trust strip (years, ratings, client logos) · Services or products · Why choose us · Work / gallery · Testimonials · About · FAQ · Contact (WhatsApp, phone, email, address, hours, Google Maps link) · Footer with Privacy Policy link.

## South Africa essentials
- Floating WhatsApp button using https://wa.me/27XXXXXXXXX (international format, no leading 0).
- Phone numbers as tap-to-call links. Prices in Rand, written like R1 500.
- A simple Privacy Policy page that mentions POPIA.

## Quality bar (check before you finish)
- npm run build passes with zero errors.
- Correct at 390px, 768px and 1440px. No sideways scrolling.
- Every page has a unique title, meta description, Open Graph image and favicon. Add sitemap.xml and robots.txt.
- Lighthouse performance, accessibility and SEO 90+.
- No lorem ipsum, no invented reviews, prices, awards or clients. If something is missing, add a clear TODO in content/site.ts and list it in your reply.
