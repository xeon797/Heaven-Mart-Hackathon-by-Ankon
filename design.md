# Heaven Furniture Mart — Visual Design System (design.md)

**Gold standard reference: [delaespada.com](https://www.delaespada.com)** — a bespoke solid-wood furniture atelier, the closest real-world positioning match to Heaven. Everything below is De La Espada's restraint and structure, filtered through the brief's own rules (see `DESIGN_BRIEF.md`) and adjusted everywhere the two conflict — never copied wholesale. This file is the single current source of truth for layout/visual decisions; it replaces all earlier drafts.

## Fonts

- **Headline: Marcellus** (Google Fonts, free) — replaces Monteci Serif. Monteci is a paid marketplace font (Pista Mova, via Font Bundles / Creative Fabrica) described as a minimalist, classic, single-weight modern display serif for logos/quotes/editorial use. Marcellus is the closest free match on that exact profile: minimalist, classic, single-weight, built for large display moments rather than body text. (If you want something a touch more delicate/fashion-editorial, **Italiana** is the free alternate — more fragile at small sizes, so only use it if the headline sizes stay large throughout.)
- **Body: Inter or Manrope** (unchanged) — everything that isn't a headline: nav, buttons, labels, body copy, contact info.
- **Rule, unchanged**: the serif is a display face, headline-only. Never body text, never UI chrome, never small sizes.

```css
--font-serif: 'Marcellus', 'Playfair Display', Georgia, serif; /* headlines only */
--font-sans: 'Inter', 'Manrope', -apple-system, sans-serif;    /* everything else */
```

## Palette (unchanged)

```css
--color-bg-dark: #14252A;   /* deep charcoal-teal */
--color-bg-light: #F6F1E8;  /* warm ivory */
--color-accent: #B98D4C;    /* muted gold/brass — fills, dividers, icons ONLY */
--color-text-dark: #2E2016; /* deep brown */
--color-wood-tan: #C9A877;  /* secondary accent, borders, hover */
```

**Accessibility rule, unchanged**: gold `#B98D4C` on ivory `#F6F1E8` fails WCAG AA for normal text (~2.5:1). Gold is for button fills (with light text on top), dividers, and icon strokes — never small readable text on a light background.

## Cross-page visual grammar

One rule ties every photo on the site together, so it doesn't need to be re-decided per section:

- **Square (1:1)** = a catalog tile. Used only in the Collections Snapshot grid.
- **Portrait (4:5)** = an editorial supporting photo. Used everywhere else a photo pairs with text: the Brand Intro filmstrip, the Bespoke Highlight image, the Social Proof showroom photo.

## Page structure, section by section

### 1. Hero

Static, bold image — no video, confirmed, for mobile reliability. A generated triptych: bedroom / office / dining panels side by side, brand intro content sitting across the middle. Confirmed and locked.

*Open watch-item, not yet resolved*: the office panel (bright, mint-toned, Scandinavian conference room) reads as a different brand than the bedroom and dining panels (warm, dark, jewel-tone velvet, gold trim). Worth a final look before shipping — either regenerate that panel warmer/more ornate to match, or accept the contrast as intentional.

### 2. Brand Intro

Split layout, not a standalone centered block:

- **Left column**: kicker (small caps, gold) + the 2-sentence intro below, left-aligned (not centered — centering only reads right for a lone block of text, not a column sitting beside an image), narrow measure within the column.
- **Right column**: a horizontal scroll-snap filmstrip of 3–4 tightly-cropped furniture detail shots (warm off-white/oatmeal grade, shallow depth of field, consistent aspect ratio and color grade across all of them so they read as one shoot). On mobile: text stacks first, filmstrip breaks full-bleed below it.

**Brand Intro copy (2 sentences):**

> Heaven Furniture Mart designs and crafts bespoke furniture and interiors from the heart of Chattogram — every piece built around your space, your taste, and how you actually live. Nothing is pulled off a shelf; each one is shaped by hand, in premium materials, by our own in-house craftsmen.

(The "nothing... pulled off a shelf" phrase deliberately echoes the Bespoke Highlight headline below — same idea stated twice, in two different voices, at two different points in the page.)

### 2a. Why Choose Heaven

Missed in earlier passes — brief section #3, sitting between Brand Intro and Collections Snapshot. Its job per the brief is speed: "the trust bullets above, laid out fast to scan," not another considered moment — Bespoke Highlight already owns that role further down the page, so this section should be quick and light-touch on purpose, not competing with it.

Light ivory background, same padding rhythm as the rest of the page for the section itself, but the content inside is compact: the 7 trust points as a scannable grid, not prose — 2 columns on mobile, 4 across on desktop (wrapping to two rows). Each item: one small gold line-icon (checkmark, or a simple glyph per point) + a short label, not a full sentence. No photos here — this is the one section on the page that's pure fast-scan utility, and that's fine; it doesn't need to visually compete, it needs to be read in two seconds.

The 7 points, condensed to label length:
- Free design consultation
- Fully bespoke, not mass-produced
- Premium materials, in-house craftsmanship
- Large Agrabad showroom
- Delivery & installation included
- Easy payment options
- Trusted by hundreds of homeowners

### 3. Collections Snapshot

**2×2 grid — Living, Bedroom, Dining, Bespoke.** (Not five tiles/not Office & Study — this matches the brief's own suggested category list exactly.) Square 1:1 crops, one consistent camera treatment across all four: eye-level, slight 3/4 angle, rule-of-thirds placement, subject occupying the same proportion of frame in every tile, warm golden-hour light (amber, ~3000K, not a literal yellow filter). Generated from real Heaven photos wherever possible — consistency comes from matched crop/light/grade, not from forcing identical camera geometry onto four different real source photos.

The **Bespoke** tile is conceptually different from the other three, not a fourth finished-product shot — a design/sketch moment (a pencil sketch beside a finished wood corner) representing the "designed for you" half of the differentiator.

### 4. Bespoke Highlight

**Its own moment, deliberately not another photo grid.** Full-bleed dark charcoal-teal section — the first section on the page that breaks from photography-led content, which is exactly what makes it feel distinct rather than "more of the same."

- Kicker: `THE HEAVEN DIFFERENCE`
- Headline: **"Nothing Off the Shelf"**
- One sentence (below)
- Three-step process row — **Consult → Design → Craft & Deliver** — as simple gold line icons with a one-line label each, built directly in CSS/SVG, no image generation needed.
- Optional one portrait (4:5) supporting image: a materials/tools-only macro shot of gilding in progress (gold leaf partially applied over carved wood, a soft brush and burnisher nearby, raw wood still visible beside the gilded section). **No hands, no people** — this is the craft half of the differentiator (design/sketch already covered in the Collections "Bespoke" tile), and hands are both the highest-risk thing to generate and a specific factual claim about process best left to real photography if one exists.

**Bespoke Highlight copy (1 sentence):**

> Every piece starts as a conversation, not a catalog page — designed around your space, shaped by hand in our own workshop, and finished to your taste alone.

### 5. Social Proof

Placed directly before Book a Consult, split layout (continuing the same pattern as Bespoke Highlight — text/quote on one side, one photo on the other):

- The MD quote, set large in Marcellus, with one oversized gold quotation mark as the section's single accent.
- Attribution below in small caps sans: "— Abul Kalam Bhuiyan, Managing Director."
- One trust stat near the quote (plain text, not a bullet list) — e.g. "6 Years · Hundreds of Homes Furnished."
- Milestone strip (2020 → 2026) — optional, only if there's time; the quote and stat already carry the section without it.
- Showroom photo (4:5 portrait): generated only if no real wide showroom shot exists in their social media — check there first. If generating: spacious and deliberately uncrowded (2–3 hero pieces with real room between them, not a packed showroom floor), warm golden-hour light, no people, careful check for warped walls/ceiling lines (the most common failure mode on wide interior generations).

### 6. Book a Consult

Dark charcoal-teal section — the "do it now" moment, same visual weight as Bespoke Highlight.

- Two fields: **Name**, **WhatsApp number** — labels above each field in small caps, thin bottom-border-only inputs (no boxes, no shadows). Phone field `type="tel"` for a numeric mobile keyboard.
- **No backend.** The Book button assembles a WhatsApp deep link client-side from what's typed in and opens it directly:
  `https://wa.me/8801960481983?text=Hi, I'm [Name], my WhatsApp number is [Number], I'd like to book a free design consultation.`
  This is a static site with no server — a form that tries to submit somewhere real risks failing silently in front of judges. This mechanism can't fail that way.
- Button label matches the CTA used everywhere else on the page — never a new label just because it's a form.
- One reassurance line under the button: "We'll reply on WhatsApp within the day."

### 7. Footer

Dark, thin gold rule at the top separating it from Book a Consult above (both sections are dark and sit back to back — the rule keeps them from reading as one undifferentiated block). Three groups only — address, contact, socials — matching the brief's minimal footer ask, not De La Espada's sprawling multi-column version. Every link is real and clickable, not a placeholder:

- Facebook → `https://facebook.com/HeavenFurnitureMart`
- Instagram → `https://instagram.com/heaven_furniture_ltd`
- Phone → `tel:+8801960481983`
- WhatsApp → `https://wa.me/8801960481983`
- Email → `mailto:heavenfurnituremart@gmail.com`
- Address (clickable to Maps) → `https://www.google.com/maps/search/?api=1&query=Heaven+Furniture+Mart+Agrabad+Access+Road+Chattogram`

Social icons: monochrome (wood-tan or ivory), never each platform's default brand color — a colorful icon pair right at the very end of the page would break the one-accent rule on the last thing a visitor sees.

## Open / not yet decided

Flagging these separately so nothing gets lost before the deadline — they were raised in discussion but aren't locked:

- Hero office panel color/style mismatch (see Hero note above).
- Whether to add YouTube to the footer alongside Facebook and Instagram (brief lists it; current plan only has the two you specified).
- Whether to include the milestone strip in Social Proof.
- A sticky bottom CTA bar on mobile once scrolled past the hero — suggested earlier as a way to hit both the mobile and one-clear-action judging criteria at once, not yet confirmed either way.

## QA reminder specific to this file

Every footer link must actually resolve — dead or `#` links are one of the fastest "unfinished" tells for a judge scanning quickly. Test all five on the live deployed site, not just locally.
