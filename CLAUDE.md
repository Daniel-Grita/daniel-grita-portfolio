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

## Session Recap (2026-04-24)

### What landed this session

**PayXpert whitepaper link.** Moved `White Paper - Beyond the forms.pdf` to `public/docs/payxpert-whitepaper-beyond-the-forms.pdf`. Added optional `link?: { text: string; href: string }` field to `CaseStudySection` interface. Wired up "Read the whitepaper here" (opens in new tab) in the Print section of the PayXpert case study. Added `.cs__link` style in `[slug].astro`.

**Signature Spa copy expanded.** Updated two `gallerySections` text blocks in `src/data/work.ts`:
- Social media section now covers full channel management (Instagram, LinkedIn), paid ad strategies, and seasonal campaigns.
- Photography section now calls out model sourcing, casting, and on-set direction.

**Image background darkened.** `--color-img-bg` nudged from `#f5f5f5` → `#ebebeb` in `global.css` (light mode only; dark mode unchanged).

**MobileNav scroll fix.** Removed `justify-content: center` from `.mobile-nav` — it was fighting `overflow-x: auto` on long nav bars (e.g. PayXpert's 9 items), clipping items off-screen. Items now left-align and scroll. Added `scrollbar-width: none` + `::-webkit-scrollbar { display: none }` to keep the bar visually clean.

### Outstanding (priority order)

1. **[P2] Alt text upgrade.** Replace `src/data/image-alt.ts` filename-derived function with a hand-written lookup map keyed by image path. Fallback to derived form for undescribed images. Example: `'/images/payxpert.webp': 'PayXpert payment terminal on a warm-lit retail counter'`. Every image in `src/data/image-dimensions.ts` is a candidate.

2. **[P3] Favicon.** User to author chartreuse monogram SVG, drop at `public/favicon.svg`. `<link rel="icon">` already wired up in `Layout.astro:26`.

3. **OG image.** User designing in Figma. Target: 1200×630 JPG at `public/og-default.jpg`, then update `Layout.astro` `ogImage` default (currently falls back to `/images/payxpert.webp`).

### Carryover

- **Page transitions (deferred).** Fresh attempt options when revisited: chartreuse wipe panel, blocky grid reveal, monospace scramble for titles.
- **Disconnect Google Drive MCP** via claude.ai settings (can't remove via CLI).
