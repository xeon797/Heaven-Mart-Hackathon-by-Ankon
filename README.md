# Heaven Furniture Mart — Landing Page Build

Tonight's build runbook. `DESIGN_BRIEF.md` and `design.md` are the source of truth for content/design decisions — this file is the sequence of steps to actually execute them.

## Phase 0 — Before you open Claude Code

1. **Assets in place.** Every generated/cleaned image sorted into its `assets/` subfolder, named clearly and consistently (e.g. `hero-bedroom.jpg`, `hero-office.jpg`, `hero-dining.jpg`, `filmstrip-01.jpg`...`04.jpg`, `collections-living.jpg`, etc.). Double-check none still have baked-in text/logos, and that filenames are lowercase with no spaces — saves you the Windows→Linux case-sensitivity bug later.
2. **Font is free, no purchase needed.** Marcellus is on Google Fonts — just need the embed link, nothing to buy or self-host.
3. **Two open decisions** from `design.md` — the hero triptych vs. a single image, and the CTA wording ("Book a Free Design Consultation" vs. the brief's example wording) — make the call now if you haven't, so it's not a mid-build distraction.

## Phase 1 — Environment & git, before any content exists

Do this first, not at the end — deploying early means you're debugging the *pipeline* while the stakes are low, not at 1am with a judge deadline.

1. `node --version` — need 18+. `claude --version` — install with `npm install -g @anthropic-ai/claude-code` if missing.
2. Terminal open in the `project/` folder.
3. `git init`, then commit what already exists (the docs and assets) as a clean starting point:
   ```
   git add .
   git commit -m "Project docs and assets"
   ```
4. Create a GitHub repo and push (`gh repo create` if you have the CLI, or via github.com).
5. Connect Vercel now, before writing code: sign in with GitHub, import the repo, framework preset "Other." You'll get a live URL immediately — it'll be blank, that's fine. The point is confirming the pipeline works end to end before you've invested hours in content.

## Phase 2 — Build order

Run `claude` in the project folder. First message: point it at `DESIGN_BRIEF.md` and `design.md` and ask for the skeleton first — HTML structure, CSS custom properties from the design tokens, font loading, no section content yet. Check it renders (right fonts, right colors) and commit before going further.

Then build in this order — matches the brief's own section order, which is also roughly hero-first-impression to footer-last-detail:

1. Nav + Hero
2. Brand Intro (split layout + filmstrip)
3. Why Choose Heaven (fast-scan icon grid)
4. Collections Snapshot (2×2 grid)
5. Bespoke Highlight (dark section, icons, one image)
6. Social Proof (quote + showroom photo)
7. Book a Consult (form → WhatsApp deep link)
8. Footer

**Priority call for tonight specifically: breadth before depth.** Get all 8 sections existing at a rough-but-correct level before you polish any one of them further. A page that's 100% complete at a basic level beats a hero that's pixel-perfect sitting above seven empty sections at 2am — you can always come back and refine section 2 once section 8 exists, but you can't submit a beautiful hero with no footer.

**Review checkpoint after each section**, but keep it quick — a glance to confirm the tokens/layout weren't ignored, not a full critique each time. Commit after every section. Small, frequent commits mean if section 6 accidentally breaks something in section 2, you have an easy rollback point instead of hunting through one giant diff.

If the Claude Code session starts feeling sluggish or loses track of earlier context after many sections, it's fine to start a fresh session — just point it at the current `index.html`/`styles.css` plus the two doc files again, rather than trying to force one unbroken multi-hour session.

## Phase 3 — Two things to functionally test, not just eyeball

- **Book a Consult button**: actually type a name and number in and click it. Confirm it opens WhatsApp with the correct number and a correctly pre-filled message. This is the one interactive piece on the page — it needs a real test, not a glance.
- **Every footer link**: click Facebook, Instagram, the phone number, the email, and the address/maps link — each one, for real. Dead footer links are one of the fastest "unfinished" tells to a judge.

## Phase 4 — Cross-cutting passes, after all 8 sections exist

1. **Mobile pass** — test at real widths (375px, 390px, 768px), not just an arbitrarily resized desktop window.
2. **Performance pass** — compress/lazy-load images, run Lighthouse on the *live* Vercel URL (not localhost), target 90+ mobile.
3. **Accessibility pass** — the gold-on-ivory contrast rule from `design.md`, alt text on every image, real `<label>` elements on the form fields (not placeholder-only).
4. **Proofread** — spelling, the MD quote transcribed exactly, no leftover placeholder text.
5. **Live-site link check** — open the deployed URL, not a local file, and confirm every image renders (filename-case gotcha) and every link resolves.
6. **The 30-second stranger test** — show the live link to someone who hasn't seen the brief. If they hesitate on what the business is, tighten the hero.

## Phase 5 — Ship it

Final `git push` (auto-redeploys Vercel), open the live URL on an actual phone one more time, then share the link in the RACDOX WhatsApp group per the brief's submission instructions. Keep the Vercel dashboard open until judging closes in case a last-minute fix is needed.

## Appendix — exact prompts to paste into Claude Code (token-conscious: 4 messages, not 15)

Every round trip resends the growing conversation history, not just the new instruction — that's where usage actually adds up, not the code generation itself. So this version batches the 8 per-section messages into one, at the cost of fewer safety checkpoints along the way. Do a quick visual glance after message 2 (not a deep review) to keep at least one checkpoint in place.

Terminal, before launching: `cd` into this folder, then `claude`. (Run `gh auth login` once beforehand if you want automatic GitHub repo creation.)

**1 — setup + skeleton:**
> This is a static landing page project. First: run `git init` and make an initial commit of the existing files (DESIGN_BRIEF.md, design.md, README.md, assets/). Then read DESIGN_BRIEF.md and design.md fully — design.md is the current source of truth wherever the two differ. Set up the project skeleton: index.html, styles.css, a small app.js, the Google Fonts link for Marcellus and Inter, and CSS custom properties for the color tokens from design.md. No section content yet — just the page shell with fonts and colors wired up correctly. Show me when it's ready so I can check before we build anything.

Then, separately: create a GitHub repo and push (ask Claude Code to do it with `gh`, or walk you through it manually), and finish the Vercel import yourself in the browser (vercel.com → sign in with GitHub → Add New Project → import the repo → framework preset "Other" → Deploy) — get the live blank URL working before content exists.

**2 — every section, in one pass:**
> Now build every section in order, in one pass, without stopping between them: nav, hero (design.md section 1), Brand Intro (section 2), Why Choose Heaven (section 2a), Collections Snapshot (section 3), Bespoke Highlight (section 4), Social Proof (section 5), Book a Consult (section 6 — no backend, the button builds a WhatsApp deep link client-side), and the footer (section 7, all five real links). When you're done, give me a summary of what you built and flag anything you weren't sure about.

Glance at the live preview here before moving on — just confirm nothing's badly broken, not a full review.

**3 — test + polish, in one pass:**
> Now: (1) actually test the Book a Consult button and confirm the WhatsApp link is correct, (2) confirm every footer link resolves, (3) do a mobile pass at 375px/390px/768px, (4) compress and lazy-load images and estimate the Lighthouse mobile score, (5) check the gold-on-ivory contrast issue from design.md and confirm every image has alt text and the form uses real `<label>` elements. Fix anything you find, then commit and push.

**4 — ship it:**
> Walk me through the QA checklist in this file one item at a time so we can confirm each before I submit.

**If the session starts feeling heavy or slow**: run `/compact` to shrink the conversation history — the actual code lives in your files on disk, not in the chat, so compacting doesn't lose any work. `/cost` (if your Claude Code version has it) shows usage so far, worth a check after message 2.

This is also exactly why "breadth before depth" matters more under a tight token budget, not less: message 2 alone gets you a complete, if rough, 8-section page. If you run low partway through, that's a far better place to get stuck than mid-polish on just the hero with nothing built below it.
