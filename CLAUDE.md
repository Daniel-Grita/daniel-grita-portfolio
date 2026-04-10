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

## Session Recap (2026-04-10)

### What exists
- **Main page** (`/`) — Hero, about, two content sections (Work + Projects), contact with sticky side nav and mobile nav. Nav links: Top, About, Work, Projects, Connect. Fixed "Design System" button (bottom-right). Work entry images have `border-radius: var(--radius-md)`.
- **Project pages** (`/work/[slug]`) — Three layout modes:
  - **Case study layout** (PayXpert) — Full flowing page with hero image, 8 content sections, image galleries with lightbox, cards, accent highlight banner, and Connect section. Link text: "View use case →".
  - **Project layout** (Oppressus, Signature Spa, Lash Paris, Concession Perpetuelle, Toombstone Tavern, 364) — Header (title/date/role) above hero image, narrative gallery sections with interleaved text, Connect section, side nav + mobile nav + theme toggle.
  - **Minimal layout** (Adobe & Scopio) — Same structure as project layout but no hero, gallery, or extended description since those fields are absent.
- **Case study data** in `src/data/case-studies.ts` — Structured per-section content. Keyed by slug; `[slug].astro` checks for case study data and renders accordingly.
- **Design system** (`/design-system`) — Full living reference page with Mobile Navigation component sample. Dark mode fully supported.
- **Dark mode** — Full implementation with toggle, localStorage persistence, system preference fallback

### Data architecture
- **`src/data/work.ts`** exports three arrays:
  - `work` — Professional entries shown in the Work section on the landing page
  - `projects` — Personal/side projects shown in the Projects section
  - `allEntries` — Combined array used by `[slug].astro` for `getStaticPaths()`
- **`WorkEntry` interface** fields: `period`, `title`, `company`, `slug`, `description`, `image`, and optionally `projectDescription`, `projectHero`, `heroLandscape` (boolean, displays hero at natural aspect ratio), `uniformImages` (boolean, forces 3:4 on gallery images), `galleryImages` (flat gallery array), `gallerySections` (grouped galleries with optional `title`, `text`, `images`, `alts`, `aspectRatio`), `galleryLayout` (`'stacked-right'`)
- **`GallerySection` interface** fields: `title?`, `text?`, `images`, `alts?`, `aspectRatio?` (inline CSS aspect-ratio per section, e.g. `'1/1'`)
- `image` is used for the landing page thumbnail. Entries with `work-` in the image path are treated as placeholders (no image shown, no link in Projects section)
- `projectDescription` falls back to `description` on the project page via `displayDescription`
- Helper functions in index frontmatter: `hasProjectPage()` checks `projectDescription || projectHero`; `linkLabel()` returns "View use case →" or "View project →" based on case study data
- **Important:** In `[slug].astro`, complex fields (`gallerySections`, `uniformImages`, `heroLandscape`, `galleryLayout`) must be read via `allEntries.find()`, NOT destructured from `Astro.props` (Astro prop serialization silently drops them)

### Image utilities
- **`src/data/image-dimensions.ts`** — Static map of image path → `[width, height]`. Exports `imgDims(src)` returning `{ width, height }`. Used by both `index.astro` and `[slug].astro` to add `width`/`height` attributes to all `<img>` tags (prevents CLS). Must be updated when adding new images.
- **`src/data/image-alt.ts`** — Exports `imgAlt(src)` which converts image filenames into alt text (e.g. `/images/concession-holding-book.webp` → "Concession Holding Book"). Used as default alt across all templates. Explicit `alts` arrays in gallery sections take priority.

### Work section entries (landing page)
1. **PayXpert** — Lead Designer, 2024–Present (`payxpert.webp`, **has case study**, "View use case →")
2. **Signature Spa Consulting** — In-House Designer, 2023–2024 (`signature-spa-gallery-01.webp`, project page with hero + gallerySections: 3 sections with narrative text, descriptive captions)
3. **Lash Paris** — Content Creator & Designer, 2021–2023 (`lash-paris-hero.webp`, project page with hero + gallerySections: 3 narrative blocks with interleaved text and galleries)

### Projects section entries (landing page)
1. **Concession Perpetuelle** — Photography & Editorial Design, 2024 (`concession-hero-thumb.webp` 800x533 14KB, project page with landscape hero `concession-hero-cover-r.webp` rotated 90° CW, gallerySections: Editorial design (4 images) + The printed book (4 images, `aspectRatio: '1/1'`))
2. **Oppressus** — Photoshoot & Video Production, 2024 (`oppressus.webp`, project page with hero + 6 gallery images, `uniformImages: true` → 3:4 aspect ratio)
3. **Adobe & Scopio** — Creative Art Direction & Photography, April 2024 (**placeholder image**, no link, no project page content)
4. **Toombstone Tavern** — Branding & Identity Design, 2023 (`tombstone-hero.webp`, project page with hero + 5 gallery images)
5. **364** — Art Direction, Photoshoot & Editorial, 2023 (`364-hero.webp`, project page with hero + 6 gallery images)

### Shared components
- **`src/components/Contact.astro`** — Connect section (email, phone, LinkedIn, Instagram)
- **`src/components/SideNav.astro`** — Desktop side nav, takes `items: { id, label }[]`, fade-in delay 0.9s
- **`src/components/MobileNav.astro`** — Mobile top nav, takes `items: { id, label }[]`
- **`src/components/ThemeToggle.astro`** — Dark mode toggle button (used by SideNav, MobileNav, and design system). Sun icon uses `U+FE0E` variation selector to prevent emoji rendering on iPad/iOS.

### Shared modules
- **`src/scripts/scroll-spy.ts`** — Shared scroll-spy with floating dot, used by index, slug, and design-system pages
- **`global.css`** — Self-hosted Quantico font (`public/fonts/`), shared styles, design tokens

### Animations
- **On-load cascade:** Hero (0s) → About (0.3s) → Work label + first project (0.6s) → Side nav (0.9s). Uses `.fade-in` class (opacity only, no translate).
- **Scroll-triggered:** Remaining work entries and the Contact section fade-up (opacity + translateY 25px, 500ms) via `IntersectionObserver` with `threshold: 0.15`. Each element animates once.

### Image galleries (case study)
- Sections can have `images?: string[]` in case study data
- `images: []` (empty) = no image, no placeholder
- `images` undefined = shows grey placeholder
- `images` with entries = horizontal gallery grid inside a light grey box, wrapped in `<figure>` with optional `<figcaption>`
- `uniformImages?: boolean` = forces `aspect-ratio: 4/3`
- `galleryLayout?: 'stacked-right'` = first image spans full height on the left
- **Lightbox** — clicking any gallery or hero image opens fullscreen overlay. Close via X, backdrop click, or Escape

### Image galleries (project layout)
- 2-column grid with `--color-img-bg` background and `--radius-lg` border radius
- Single-image galleries (`--single`) use `grid-template-columns: 1fr` to fill full width
- Per-section `aspectRatio` applied via inline style (e.g. `'1/1'` for square)
- `uniformImages` on entry applies `aspect-ratio: 3/4` to all gallery images
- Stacks to single column on mobile
- **Lightbox** supported on project pages
- **`gallerySections`** — grouped galleries with optional `text` (paragraph above gallery), `title` (caption below gallery using `.cs__caption`), `alts`, and `aspectRatio`
- When `gallerySections` is used, the description section is hidden (text lives in the gallery sections instead)
- Internal spacing uses `--space-content-gap` (2rem) between elements within a section

### Content style
- No em dashes in prose/descriptions. Use commas, periods, or sentence restructuring instead.

### Still to do
- SEO improvements (personalized meta, OG tags, sitemap via `@astrojs/sitemap`, robots.txt, canonical URLs)
- Add `<meta name="robots" content="noindex">` to `/design-system`
