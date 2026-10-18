---
name: web-performance-seo
description: Audits and enforces modern web performance (Core Web Vitals, sub-second LCP, image optimization) and technical SEO (JSON-LD Schema, OpenGraph, Twitter cards, meta tags, sitemap, robots.txt). Use when creating, modifying, or reviewing HTML pages, images, metadata, scripts, or stylesheets for the portfolio.
---

# Web Performance & Technical SEO Skill

This skill governs web vitals, asset optimization, search discoverability, and social sharing metadata across the portfolio.

---

## 1. Core Web Vitals (CWV) Standards

Every page in this repository must target the following real-user metrics:

| Metric | Target | How to Enforce |
| :--- | :--- | :--- |
| **LCP** (Largest Contentful Paint) | **< 1.0s** | Preload critical hero fonts/images; avoid client-rendered heroes; zero blocking JS |
| **CLS** (Cumulative Layout Shift) | **< 0.05** | Set explicit `width` and `height` attributes on all `<img>` and `svg`; reserve space for dynamic blocks |
| **INP** (Interaction to Next Paint) | **< 100ms** | Debounce scroll/resize listeners; keep vanilla JS handlers lightweight; run work off main thread |
| **FCP** (First Contentful Paint) | **< 0.8s** | Inline critical CSS or serve streamlined utility stylesheets; preconnect to Google Fonts |

---

## 2. Asset & Image Optimization Rules

1. **Modern Formats First:**
   - Always use `.webp` or `.svg` for all imagery. Never ship uncompressed `.png` or `.jpg` assets to production.
2. **Explicit Dimensions:**
   - Every `<img>` tag must declare explicit `width` and `height` attributes or aspect-ratio classes to prevent layout shifts during image decoding:
     ```html
     <img src="assets/img/profile/profile-1.webp" width="360" height="360" alt="Pankaj Kumar" loading="lazy" decoding="async" />
     ```
3. **Smart Loading Strategies:**
   - **Hero / Above-the-fold images:** Use `fetchpriority="high"` and omit `loading="lazy"`.
   - **Below-the-fold images & project cards:** Always include `loading="lazy"` and `decoding="async"`.
4. **Font Loading:**
   - Use `preconnect` tags with `crossorigin` for `fonts.googleapis.com` and `fonts.gstatic.com`.
   - Ensure `display=swap` is declared in Google Fonts URLs to prevent flash of invisible text (FOIT).

---

## 3. Technical SEO & Social Metadata Checklist

Every public-facing HTML document (`index.html`, `404.html`) must contain:

### A. Primary Meta
- Canonical link tag: `<link rel="canonical" href="https://pankajkcodes.github.io/..." />`
- Accurate `<title>` (under 60 characters) specifying name, role, and key specialty.
- Punchy `<meta name="description">` (120–158 characters) with no fluff.
- Mobile viewport settings: `<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />`
- Browser theme color: `<meta name="theme-color" content="#07080e" />`

### B. Open Graph & Twitter Cards
- Absolute URLs for `og:url` and `og:image` (relative URLs fail on LinkedIn and Slack scrapers).
- Include `og:image:width` and `og:image:height`.
- Twitter card tags: `twitter:card` (`summary` or `summary_large_image`), `twitter:site`, `twitter:creator`, `twitter:image`.

### C. Schema.org Structured Data (JSON-LD)
- Provide rich structured data for Google Search:
  - `index.html`: `Person` with `name`, `jobTitle`, `worksFor`, `sameAs` (GitHub, LinkedIn, X profiles), and `knowsAbout`.
  - Case studies: `CreativeWork` or `SoftwareApplication`.

---

## 4. Performance & SEO Audit Workflow

Before completing any changes:
1. **Check Head Tags:** Verify meta description length, canonical URL, and favicon links.
2. **Scan Images:** Verify every `<img>` has `alt`, `width`, `height`, and appropriate `loading` attribute.
3. **Inspect Sitemaps:** Ensure any newly created HTML page is indexed in [`sitemap.xml`](file:///Users/pankaj/Web%20Projects/Pankaj%20Portfolio/sitemap.xml).
4. **Validate Zero Script Bloat:** Do not introduce heavy runtime JavaScript dependencies.
