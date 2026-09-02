# Heaven Furniture Mart — Landing Page

A single-page marketing site for Heaven Furniture Mart, a bespoke furniture and
interior studio based in Chattogram, Bangladesh. The page introduces the brand,
shows collections and craftsmanship, and drives visitors to book a free design
consultation.

**Live site:** deployed on Vercel (auto-deploys from `main`).

## Tech stack

| Layer      | Choice                                                                 |
| ---------- | --------------------------------------------------------------------- |
| Markup     | Hand-written semantic HTML5 — one page, `index.html`                  |
| Styling    | Plain CSS3 in `styles.css`, driven by CSS custom-property design tokens |
| Behaviour  | Vanilla JavaScript in `app.js` — no framework, no bundler            |
| Build      | None. Zero dependencies, no `package.json`, no build step            |
| Fonts      | Marcellus + Alex Brush (Google Fonts); Satoshi (Fontshare CDN)       |
| Hosting    | Vercel static hosting, framework preset **Other**                    |

The whole site is static files served as-is. There is no backend.

## Project structure

```
index.html          Single-page markup: header, hero, brand intro, collections,
                    bespoke, social proof, milestones roadmap, consult form, footer
styles.css          Design tokens (:root) + all component styles, mobile-first
app.js              Progressive-enhancement scripts (see below)
design elements/    Image assets (JPEG), referenced with loading="lazy"
design.md           Design decisions and visual source of truth
Heaven-Furniture-Mart-Company-Brief.pdf   Original brief
```

## Design system

All colours, fonts, and layout constants live as custom properties in `:root`
in `styles.css`:

- **Palette** — deep charcoal-teal `#14252A`, warm ivory `#F6F1E8`, muted brass
  `#B98D4C`, wood tan `#C9A877`, deep brown text `#2E2016`.
- **Type** — `--font-serif` (Marcellus) for headlines, `--font-sans` (Satoshi)
  for everything else, `--font-script` (Alex Brush) for accent kickers.
- **Layout** — `--container-width`, `--header-height`, `--section-padding-y`
  (responsive via one `min-width: 861px` media query), `--radius-image`.

The site opts out of OS dark-mode colour synthesis (`color-scheme: light only`)
because it ships one fixed palette by design.

## JavaScript (`app.js`)

Everything is progressive enhancement — the page is fully readable with JS
disabled.

- **Mobile nav** — hamburger toggle with `aria-expanded`; closes on link tap.
- **Scrolled header** — adds `.is-scrolled` past 40px for the condensed nav.
- **Carousels** — one reusable `initCarousel()` powers both the brand-intro
  filmstrip and the showroom carousel: autoplay, arrows, dots, pause on hover /
  focus / tab-hidden.
- **Book a Consultation form** — client-side only. Validates email format and an
  11-digit Bangladeshi mobile number, then opens a pre-filled `wa.me` WhatsApp
  deep link. No form data is sent to a server.
- **Footer year** — set from `new Date()`.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) with
  `aria-label` / `aria-labelledby`.
- Real `<label>` elements on every form field; `novalidate` form with custom
  validity messages.
- `alt` text on all images; carousels expose `aria-roledescription="carousel"`
  and labelled controls.

## Running locally

No toolchain required — serve the folder with any static file server:

```bash
# Python 3
py -m http.server 8000        # Windows
python3 -m http.server 8000   # macOS / Linux

# then open http://localhost:8000
```

## Deployment

The Vercel project is connected to this GitHub repository. Every push to `main`
triggers a new production deployment automatically — there is nothing to build,
Vercel just publishes the static files.
