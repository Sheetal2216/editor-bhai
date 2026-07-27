# Editor Bhai — Premium Portfolio Website

A single-page, front-end-only, agency-quality portfolio site for a senior
video editor & graphic designer. Built with **React + Vite + Tailwind CSS +
Framer Motion + Swiper + lucide-react**. No backend — every contact action
opens WhatsApp, LinkedIn, a phone dialer, or a Google Form in a new tab.

## 1. Run it locally

You need [Node.js](https://nodejs.org) 18+ installed. Then, inside this folder:

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## 2. Before you go live — things to change

All real content lives in **one file**, `src/data.js`. Edit it without
touching any component code.

1. **Google Form link** — replace:
   ```js
   googleFormUrl: 'https://forms.gle/REPLACE-WITH-YOUR-FORM-LINK',
   ```
   Every "Let's Talk" / "Book Consultation" button uses this one value.

2. **LinkedIn link** — replace `linkedinLink` with the real profile URL.

3. **Testimonials** — `TESTIMONIALS` in `data.js` has 3 placeholder quotes
   (with placeholder ratings). Swap in real client quotes, names and
   companies when you have them.

4. **Hero carousel, portfolio & floating shapes** — the coverflow carousel
   (`CoverflowCarousel.jsx`), the masonry portfolio (`Portfolio.jsx`) and the
   client photo in `About.jsx` currently use styled color cards and icons,
   not real photos — I can't generate real photography or client logos
   here. Swap the card/tile content for real `<img>` tags whenever you have
   final assets; the layout, sizing and hover animations stay the same
   either way.

5. **World map pin positions** — `WORLD_MAP_PINS` in `data.js` uses
   approximate `x`/`y` percentages on a stylized (not geographically
   accurate) map panel. Nudge the percentages if you want pins repositioned.

## 3. Build for deployment

```bash
npm run build
```

This creates a `dist/` folder with plain HTML/CSS/JS — no server required.
Drag-and-drop that `dist/` folder onto:
- **Netlify** (netlify.com/drop)
- **Vercel**
- **GitHub Pages**
- Or any static file host / cPanel `public_html`

## 4. Project structure

```
src/
  data.js                  ← all real content (edit this first)
  index.css                ← Tailwind + Swiper theming + glass utility
  App.jsx                  ← page layout / section order
  components/
    Reveal.jsx             Framer Motion scroll-reveal wrapper (used everywhere)
    Navbar.jsx             Glassmorphism, sticky, scrollspy active-link underline
    Hero.jsx               Left CTA column + right coverflow carousel
    CoverflowCarousel.jsx  Swiper Apple-style coverflow (autoplay, drag, arrows)
    FloatingShapes.jsx     Floating decorative icons/blobs behind the carousel
    Clients.jsx            Premium client cards + infinite logo marquee + map
    WorldMap.jsx           Interactive pins with hover tooltips
    Stats.jsx              Animated CountUp stat cards
    About.jsx              Asymmetrical layout, floating badge, checklist, timeline
    Services.jsx           8 premium service cards with gradient hover
    Portfolio.jsx          Masonry layout with hover-reveal overlay
    Testimonials.jsx       Swiper horizontal slider with ratings
    Pricing.jsx            3 plans
    Process.jsx            "How We Work" animated 4-step timeline
    Contact.jsx            Premium CTA (WhatsApp/LinkedIn/Call/Book Consultation)
    FAQ.jsx                Accordion with rotating icon
    Footer.jsx              Minimal footer
    FloatingWhatsApp.jsx    Persistent floating WhatsApp widget (see below)
    icons/LinkedinIcon.jsx  Custom LinkedIn glyph (lucide-react dropped brand icons)
```

## 5. Design notes

- **Colors**: your green palette (`#f7fcf5` → `#41ab5d`) is registered as the
  `mint` color scale in `tailwind.config.js`, with dark grey `charcoal`
  instead of black — no dark section backgrounds anywhere on the site.
- **Fonts**: `Outfit` for headings, `Urbanist` for body text.
- **Animations**: every section fades/slides into view on scroll via
  Framer Motion (`Reveal.jsx`), stat numbers count up, cards lift/glow on
  hover, the navbar blurs on scroll with an animated active-link underline.
- Fully responsive — carousels become swipeable, cards stack on mobile.

## 6. Floating WhatsApp widget

`FloatingWhatsApp.jsx` slides in from the bottom-left 3 seconds after page
load, pulses gently every ~13 seconds, and can be dismissed with the ×
button — it reappears on refresh (there's no backend to persist that choice
permanently across sessions). Update the WhatsApp link in `PROFILE.whatsappLink`
in `data.js`.

## 7. Minor revisions

Since content is centralized in `src/data.js`, small changes (text, stats,
links, colors) are quick edits — no rebuild logic needed beyond
`npm run dev` / `npm run build`.
