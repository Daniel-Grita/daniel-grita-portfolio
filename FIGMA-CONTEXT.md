# Daniel Grita Portfolio — Figma Design Context

This document is the single source of truth for designing new components or screens in Figma
for this brand. Everything described here is already live on the website. Any new work in
Figma should extend this system, not replace it.

---

## The Brand

**Daniel Grita** is a Portuguese visual artist and graphic designer based in Barcelona.
The portfolio presents his work across Photography, Design, Video, and AI disciplines.

The site lives at: https://github.com/Daniel-Grita/daniel-grita-portfolio
Deployed to Vercel. Built with Astro 6 + plain CSS.

**Aesthetic direction:** Monochromatic, minimal, editorial. The personality is precise and
quiet, with a single strong accent (chartreuse green) as the only colour pop. No gradients,
no decorative ornamentation. Typography does the heavy lifting.

---

## Colour Tokens

These are the exact values used in the codebase. Use them in Figma as your colour styles.

### Light mode (default)
| Token              | Value                       | Usage                                |
|--------------------|-----------------------------|--------------------------------------|
| `--color-bg`       | `oklch(99% 0.005 130)`      | Page background (warm near-white)    |
| `--color-title`    | `#191d1a`                   | Headings, strong text                |
| `--color-text`     | `#3a3f3b`                   | Body text                            |
| `--color-text-secondary` | `#6b716c`             | Labels, captions, secondary info     |
| `--color-border`   | `#e5e5e5`                   | Dividers, borders                    |
| `--color-hover`    | `oklch(10% 0.005 130)`      | Hover state text (near-black)        |
| `--color-accent`   | `#cff500`                   | Accent — chartreuse/lime green       |
| `--color-on-accent`| `#191d1a`                   | Text on top of accent background     |
| `--color-img-bg`   | `#ebebeb`                   | Image placeholder / loading state    |

### Dark mode (applied via `data-theme="dark"` on `<html>`)
| Token              | Value     |
|--------------------|-----------|
| `--color-bg`       | `#121412` |
| `--color-title`    | `#f0f2f0` |
| `--color-text`     | `#c5c9c6` |
| `--color-text-secondary` | `#8a8f8b` |
| `--color-border`   | `#2a2d2a` |
| `--color-hover`    | `#ffffff`  |
| `--color-img-bg`   | `#1e201e` |

Dark mode does NOT change the accent colour. `#cff500` stays the same in both modes.

---

## Typography

Two typefaces are in use. Both must be in any Figma file working on this brand.

| Role     | Family      | Source            | Weights used  |
|----------|-------------|-------------------|---------------|
| Display  | **Nippo**   | Fontshare CDN     | 700 (Bold)    |
| Body     | **Quantico**| Self-hosted woff2 | 400, 700      |

Nippo is a geometric display face. It is used for the hero name / large headings (h1).
Quantico is the workhorse: nav, body copy, labels, buttons, captions.

### Type scale (from the live CSS)
| Element | Size                               | Weight | Other                        |
|---------|------------------------------------|--------|------------------------------|
| h1      | `clamp(1.75rem, 1.25rem + 2.5vw, 2.5rem)` | 700 | Nippo, `line-height: 1.1`, `letter-spacing: -0.03em` |
| h2      | `0.875rem`                         | 500    | Uppercase, `letter-spacing: 0.08em`, secondary colour |
| h3      | `1.25rem`                          | 600    | `line-height: 1.3`           |
| p       | `1rem`                             | 400    | `line-height: 1.7`, secondary colour |

---

## Spacing Tokens

| Token              | Value    |
|--------------------|----------|
| `--space-xs`       | `0.5rem` (8px)  |
| `--space-sm`       | `1rem`   (16px) |
| `--space-md`       | `2rem`   (32px) |
| `--space-content-gap` | `2rem` (32px) |
| `--space-lg`       | `4rem`   (64px) |
| `--space-xl`       | `6rem`   (96px) |
| `--space-2xl`      | `10rem`  (160px) |

---

## Border Radius Tokens

| Token         | Value |
|---------------|-------|
| `--radius-sm` | `4px` |
| `--radius-md` | `8px` |
| `--radius-lg` | `12px`|

---

## Layout

Max content width: `1000px`, centred with auto margins.

**Desktop:** Two-column CSS grid — `1fr` main content + `90px` side nav.
Outer padding: `96px` top/bottom, `32px` left/right.

**Mobile (≤768px):** Single column. Side nav hidden. Sticky top mobile nav appears.
Padding shrinks to `64px` top/bottom, `16px` left/right.

---

## Components Already on the Web

These components are built and live. Any Figma designs for these should match what exists.

### SideNav
Sticky right-hand navigation (desktop only). Contains section links (About, Work, Projects,
Exhibitions, Connect), a moving dot indicator that follows the active section, and a dark
mode toggle at the bottom. Width: 90px. Disappears at 768px.

### MobileNav
Sticky top bar on mobile. Contains the same section links as SideNav (no dot) plus a
dark mode toggle on the right. Height roughly 44px (touch target minimum).

### ThemeToggle
A button with a sun/moon icon. Lives inside both nav variants. Reads/writes `localStorage`
key `"theme"`. Toggles `data-theme="dark"` on `<html>`.

### Contact
A section with a heading, a short paragraph, and a row of underlined links (email, LinkedIn,
Instagram). On mobile the links stack vertically.

### WorkFilter
A row of pill/chip buttons that filter the work list by discipline tag: All, Photography,
Design, Video, AI. Active pill uses the accent colour (`#cff500`) as background with
`--color-on-accent` text.

### Section Label (`.section__label`)
An accent-coloured pill that labels each section (e.g. "Work", "Projects"). Background:
`#cff500`. Text: `#191d1a`. Font size: `0.75rem`. Weight: 700. Radius: `--radius-sm`.
Padding: `0.25rem 0.75rem`.

### Design System Link (`.ds-link`)
A floating chip button fixed to the bottom-right corner. Dark background (`--color-title`),
light text, all-caps, `0.75rem`, `--radius-sm`. Links to the `/design-system` page.

---

## Pages

| URL               | Description                                          |
|-------------------|------------------------------------------------------|
| `/`               | Main portfolio — hero, about, work history, contact  |
| `/work/[slug]`    | Individual project pages with gallery sections       |
| `/design-system`  | Living design system reference (internal/dev use)    |

---

## Work Entries (Portfolio Content)

### Work (employment history)
1. **PayXpert** — Lead Designer, 2024–Present. Omnichannel payment company, France/Spain.
2. **Signature Spa Consulting** — In-House Designer & Content Creator, 2023–2024. Luxury spa chain.
3. **Lash Paris** — In-House Designer & Content Creator, 2021–2023. Beauty products, Netherlands.

### Projects (personal & freelance work)
1. **Chut** — Brand Identity & Commercial Ad, 2026. Fictitious juice brand, AI-assisted.
2. **Cuerpo Habitable** — Video, 2026. Fashion film for Argentinian designer in Barcelona.
3. **Oakley** — Video, 2025. First AI video exercise, sunglasses commercial.
4. **Concession Perpetuelle** — Photography & Editorial Design, 2024. Cemetery photography book.
5. **Oppressus** — Photoshoot & Video Production, 2024. Shoe brand launch.
6. **UxU** — Modular Type Design, 2024. Experimental geometric typeface.
7. **Anonymous Cocina** — Visual Identity, 2024. Home-cook catering brand, scrappy/punk tone.
8. **Adobe & Scopio** — Creative Art Direction & Photography, April 2024.
9. **Toombstone Tavern** — Branding & Identity Design, 2023. Fictitious 70s-style restaurant.
10. **364** — Art Direction, Photoshoot & Editorial, 2023. Editorial magazine about breakups.

Work entries are tagged with discipline categories: Photography, Design, Video, AI.

---

## Animations (for motion reference)

**On-load cascade:** Hero (0s delay) → About (0.3s) → Work label + first entry (0.6s) →
Side nav (0.9s). Opacity only, no translate.

**Scroll-triggered:** Everything else fades up — `opacity 0 → 1` + `translateY 25px → 0`,
500ms ease, fires once via IntersectionObserver at 15% threshold.

---

## What Does Not Exist Yet (Figma opportunities)

These are things identified as outstanding or planned but not built:

- **Favicon** — A chartreuse monogram SVG. Target: `public/favicon.svg`. Placeholder wired up.
- **OG image** — 1200×630 social share image. Target: `public/og-default.jpg`. Currently
  falls back to a PayXpert photo.
- **Page transitions** — Not built yet. Discussed options: chartreuse wipe panel, blocky
  grid reveal, monospace text scramble for titles.

---

## Rules for Designing New Components

1. Use the tokens above — no hardcoded hex values outside the token set.
2. Fontshare (Nippo) for display/hero text only. Quantico for everything else.
3. The accent (`#cff500`) is used sparingly: section labels, filter pills, focus rings,
   text selection. Do not scatter it across the UI.
4. No gradients. No decorative shadows. Borders use `--color-border` only.
5. Minimum touch target size: 44px tall/wide on mobile.
6. Copy rule: no em dashes (--). Use commas, colons, or line breaks instead.
7. Dark mode must be accounted for in every new component — use the token pairs above.
8. Mobile breakpoint is 768px. Design for both desktop and mobile.
