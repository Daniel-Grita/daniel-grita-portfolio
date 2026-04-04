# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server at localhost:4321
- `npm run build` — Build production site to `./dist/`
- `npm run preview` — Preview production build locally

## Architecture

This is a personal portfolio site for Daniel Grita (visual artist / graphic designer) built with **Astro 6** and deployed to **Vercel** via `@astrojs/vercel`.

- **GitHub:** `github.com/Daniel-Grita/daniel-grita-portfolio`
- **Node engine:** pinned to `22.x`

### Stack

- Astro 6 with strict TypeScript (`astro/tsconfigs/strict`)
- No UI framework (pure Astro components, no React/Vue/etc.)
- Plain CSS only — no Tailwind, no CSS-in-JS
- Font: Quantico (loaded via Google Fonts in Layout)

### Pages

- `/` — Main portfolio page (hero, about, work history, contact) with sticky side navigation
- `/work/[slug]` — Dedicated project pages (one per work entry, currently minimal layout)
- `/design-system` — Living design system reference showing tokens, typography, and component previews

### Layout

`src/layouts/Layout.astro` is the single shared layout. Pages use a two-column CSS grid: main content (`1fr`) + side nav (`90px`), collapsing to single column at 768px.

### Work entries

Work data is defined in `src/data/work.ts` (shared between index and project pages). Each entry has a `slug` field for URL routing. Current entries (most recent first):

1. **PayXpert** — Lead Designer, 2024–Present (`payxpert.jpg`)
2. **Oppressus** — Photoshoot & Video Production, 2024 (`oppressus.avif`)
3. **Signature Spa Consulting** — In-House Designer, 2023–2024 (`signature-spa.avif`)
4. **Adobe & Scopio** — Creative Art Direction & Photography, April 2024 (placeholder)
5. **Lash Paris** — Content Creator & Designer, 2021–2023 (`lash-paris.avif`)

Images are stored in `public/images/`. Entries with real images use `<img>` tags; placeholder entries use a grey `work__image-placeholder` div. The template switches based on whether the image path contains `work-`.

### Animations

- **On-load cascade:** Hero (0s) → About (0.3s) → Work label + first project (0.6s) → Side nav (0.9s). These use the `.fade-in` class (opacity only, no translate).
- **Scroll-triggered:** Remaining work entries and the Contact section fade-up (opacity + translateY 25px, 500ms) via `IntersectionObserver` with `threshold: 0.15`. Each element animates once.
- Animation classes: `.fade-in` (opacity only), `.animate` (opacity + slide-up), `.is-visible` (revealed state).

### Responsive behavior

- **Desktop:** Two-column grid with sticky side nav on the right
- **Mobile (≤768px):** Single column, side nav hidden, sticky top nav bar (`.mobile-nav`) appears with section links
- Contact links stack vertically on mobile

### Styling approach

- Global design tokens are defined as CSS custom properties in `src/styles/global.css` (colors, spacing, font, layout widths)
- Global styles are imported via `<style is:global>` in Layout.astro
- Component/page-specific styles use Astro scoped `<style>` blocks
- BEM-like class naming: `.block__element` pattern (e.g., `.hero__name`, `.work__entry`, `.side-nav__link`)
- Accent color: `--color-accent: #cff500` (chartreuse/lime green)
- Mobile breakpoint: 768px

### Key design tokens

| Token | Value |
|-------|-------|
| `--color-accent` | `#cff500` |
| `--color-bg` | `#ffffff` |
| `--color-title` | `#191d1a` |
| `--color-text` | `#3a3f3b` |
| `--color-text-secondary` | `#6b716c` |
| `--space-xs` through `--space-2xl` | `0.5rem` to `10rem` |
| `--max-width` | `1000px` |

When adding new styles, use existing CSS custom properties rather than hardcoded values.

### Dark mode

- Toggle via `data-theme="dark"` attribute on `<html>`
- Dark token overrides defined in `src/styles/global.css` under `[data-theme="dark"]`
- Anti-flash inline script in `<head>` (Layout.astro) reads `localStorage` / `prefers-color-scheme` before paint
- Toggle button placed in side nav, mobile nav, and project pages
- User preference persisted to `localStorage` under key `theme`

## Session Recap (2026-04-03 evening)

### What exists
- **Main page** (`/`) — Hero, about, work entries, contact with sticky side nav and mobile nav. All text spans full content width. Fixed "Design System" button (bottom-right).
- **Project pages** (`/work/[slug]`) — Two layout modes:
  - **Case study layout** (PayXpert) — Full flowing page with hero image, 8 content sections, image galleries, cards, accent highlight banner, and Connect section matching the index page.
  - **Simple layout** (all other projects) — Title, role, period, description + back link.
- **Case study data** in `src/data/case-studies.ts` — Structured per-section content (title, body, cards, highlight, images). Keyed by slug; `[slug].astro` checks for case study data and renders accordingly.
- **Design system** (`/design-system`) — Full living reference with same two-column layout as portfolio (side nav, mobile nav, scroll-spy, scroll animations). Shows all 8 color tokens with light/dark values, typography, spacing, layout diagram, component previews (section label, work entry, side nav with active state, case study card, highlight banner, contact links, theme toggle), and interactive states. Fixed "← Portfolio" button (bottom-right). Dark mode fully supported.
- **Dark mode** — Full implementation with toggle, localStorage persistence, system preference fallback

### Shared modules
- **`src/scripts/scroll-spy.ts`** — Shared scroll-spy with floating dot, used by index, slug, and design-system pages. Named constants for magic numbers, pre-computed href-to-id mapping.
- **`global.css`** — Contains shared styles: `.section__label`, `.contact__content`, `.contact__links`, `.fade-in`, `.animate`, `.is-visible`, `.nav-dot`, `.is-active`, `.theme-toggle`. New `--color-on-accent` token for text on accent backgrounds.

### Active nav indicator (global)
- **Scroll-spy** on index, project, and design-system pages highlights the current section in side nav and mobile nav
- Active link gets `font-weight: 900` + `color: var(--color-hover)` for strong contrast
- A **floating dot** (`span.nav-dot`) animates smoothly between links using CSS transitions (`cubic-bezier`). Positioned absolutely so it doesn't shift text.
- Bottom-of-page detection activates the last nav item
- Styles defined globally in `global.css`; scroll-spy logic in shared `src/scripts/scroll-spy.ts`

### PayXpert case study sections
1. **Overview** — Intro text + 3 goal cards. No image.
2. **The Challenge** — Text + 2 need cards + 4-image gallery (`payxpert-old-*.jpg`) + accent "Problem to Solve" highlight banner
3. **Research & Strategy** — Text + 2-image gallery (`payxpert-research-*.png`)
4. **Web Design** — Labeled section + text + 3 cards + 2-image gallery (`payxpert-web-*.jpg`)
5. **Social Media** — Labeled + text + 3 cards + image placeholder
6. **Print & Technical Materials** — Labeled + text + 3 cards + image placeholder
7. **The Design System** — Labeled + text + 2 cards + image placeholder
8. **Key Takeaways** — 3 cards + image placeholder
9. **Connect** — Matches index page contact section exactly

### Image galleries
- Sections can have `images?: string[]` in case study data
- `images: []` (empty) = no image, no placeholder
- `images` undefined = shows grey placeholder
- `images` with entries = horizontal gallery grid (`repeat(auto-fit, minmax(0, 1fr))`), original aspect ratios, `object-fit: cover`
- Mobile: stacks to single column

### Work entries
1. PayXpert — Lead Designer, 2024–Present (has image, **has case study**)
2. Oppressus — Photoshoot & Video Production, 2024 (has image)
3. Signature Spa Consulting — In-House Designer, 2023–2024 (has image)
4. Adobe & Scopio — Creative Art Direction & Photography, April 2024 (**placeholder image**)
5. Lash Paris — Content Creator & Designer, 2021–2023 (has image)

### Still to do
- Add real images for remaining PayXpert placeholder sections (Social, Print, Design System, Takeaways)
- Add meaningful alt text to gallery images (deferred until all images are in)
- Build case studies for other projects (Oppressus, Signature Spa, etc.)
- Replace Adobe & Scopio placeholder image with a real one
- SEO audit and optimization
