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

## Session Recap (2026-04-12)

### What landed this session

**Animation system overhaul across all pages.**
- **Trigger timing:** IntersectionObserver `rootMargin` switched to `0px 0px -15% 0px` with `threshold: 0`. Elements now fade in when they're 15% of viewport-height into view instead of firing on the first pixel or requiring 15% of their own height. Applied in `index.astro`, `work/[slug].astro`, and `design-system.astro`.
- **Granular scroll animations on simple project layout** (`work/[slug].astro`): instead of animating whole `project__content-block` containers, each `project__gallery-text` paragraph, gallery/video block, caption, and description paragraph gets its own `.animate` class. On-load cascade added: back link (0s) → header (0.15s) → hero/video (0.3s) via `fade-in`.
- **Projects section no longer stalls 600ms on scroll-in:** `.work { transition-delay: 0.6s }` was leaking onto `#projects` because both had `class="section work"`. Scoped to `#work` only.
- **Design system granularity:** `.animate` moved from `.ds__section` containers down to each title, note, color card, type row, spacing row, layout row, component block, and state row.

**New field `WorkEntry.galleryAspectRatio?: string`** in `src/data/work.ts`. When set, every `<img>` in the entry's `galleryImages` gets an inline `aspect-ratio` style (relies on existing global `object-fit: cover`). `364` uses `4/5` to force matched heights across its paired rows. Different from the existing per-section `GallerySection.aspectRatio` (gallerySections) and from `uniformImages` (which forces `3/4`).

**Placeholder branch removed.** `GallerySection.placeholder?: boolean` and the `.project__placeholder` render path + CSS are gone. Sections with empty `images` and no `video` now render as text-only (used by Chut's recap section). Also dropped orphan CSS.

**Copy updates.**
- About paragraph rewritten (`src/pages/index.astro`): "over 10 years" (was 5), added a generalist paragraph mentioning AI, Web Design, Photography, Video. Street Art origin moved to second paragraph.
- Concession Perpetuelle homepage card image → `concession-mistery-section.webp` (the "The Mistery 4" spiral-bound spread). `concession-hero-thumb.webp` is now unused except for its `image-dimensions.ts` entry.
- Lash Paris homepage card image → `lash-paris-gallery-03.webp` (Yazmin box).

**Chut image audit:** left alone. All six webp files are 85–131 KB at 1920w quality 82, which is appropriate for the ~1000px column display. Going lower would risk banding on fruit/liquid gradients.

**Commit:** `158b4b2` — pushed to `master`.

### Outstanding

1. **SEO pass.** Personalized meta, OG tags, sitemap via `@astrojs/sitemap`, `robots.txt`, canonical URLs. Not started.
2. **Cleanup candidate:** `concession-hero-thumb.webp` is now unused as a display image. The file and its `image-dimensions.ts` entry could be deleted — didn't do it this session to avoid scope creep.
3. **Chut:** flesh out the page further with more images from the brand guidelines PDF if desired.
4. **364 aspect-ratio tuning:** set to `4/5` this session. May want to revisit after looking at the live page — easy to bump to `3/4`, `5/6`, `1/1`.
5. **Page transitions:** add animations between pages (home ↔ project pages). Astro's `<ClientRouter />` view transitions are the natural fit — would smooth the current hard cuts on navigation.
