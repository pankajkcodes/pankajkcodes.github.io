# Agent Guidelines: Pankaj Portfolio

This repository contains the source code for Pankaj's personal portfolio website. All agents and subagents working on this project must strictly adhere to the standards and skills referenced below.

---

## 1. Project Overview & Tech Stack

- **Stack:** Clean semantic HTML5, modern CSS3, vanilla JavaScript.
- **Goal:** Showcase projects, technical skills, services, and achievements with high aesthetic craft and authentic human messaging.
- **Key Files:**
  - `index.html`: Main landing page (hero, systems, architecture, experience, stack, about, contact).
  - `404.html`: Custom route-not-found error page.
  - `assets/`: Static styles, scripts, and WebP images.

---

## 2. Core Agent Skills (Mandatory Standards)

Whenever you edit, design, write, or refactor any part of this portfolio, you **must** follow the active workspace skills:

### 🎨 1. UI & Frontend Design: [UI Design Anti-Slop](.agents/skills/ui-design-anti-slop/SKILL.md)
- **Path:** `.agents/skills/ui-design-anti-slop/SKILL.md`
- **When to Apply:** Any task involving HTML layout, CSS styling, UI components, animations, or responsive adjustments.
- **Key Mandates:**
  - **No AI Aesthetic Tropes:** Strictly avoid generic purple/blue gradients, nested cards, overused Inter font defaults, and fake glowing borders.
  - **Visual Hierarchy & Whitespace:** Let sections breathe with deliberate spacing rather than boxing everything in cards.
  - **Tactile States:** Distinct `:focus-visible`, `:hover`, and active states on all interactive elements.

### ✍️ 2. Copywriting & Content: [Copywriting Anti-Slop](.agents/skills/copywriting-anti-slop/SKILL.md)
- **Path:** `.agents/skills/copywriting-anti-slop/SKILL.md`
- **When to Apply:** Any task creating, updating, or reviewing text, headlines, bios, case studies, project descriptions, or calls to action.
- **Key Mandates:**
  - **Zero AI Clichés:** Ban typical LLM buzzwords (*"delve"*, *"testament"*, *"tapestry"*, *"beacon"*, *"seamless"*, *"in today's digital landscape"*).
  - **No Binary Contrasts or Fake Depth:** Cut phrases like *"It's not just X, it's Y"* or pseudo-philosophical conclusions.
  - **Punchy, Human, & Specific:** Speak like a passionate engineer. Lead directly with real tools, concrete metrics, and tangible accomplishments.

### ⚡ 3. Web Performance & SEO: [Web Performance & SEO](.agents/skills/web-performance-seo/SKILL.md)
- **Path:** `.agents/skills/web-performance-seo/SKILL.md`
- **When to Apply:** Any task touching `<head>` metadata, images, fonts, scripts, stylesheets, or page structure.
- **Key Mandates:**
  - **Core Web Vitals:** Sub-second LCP (<1.0s), zero CLS (<0.05) by setting explicit `width`/`height` on images.
  - **Modern Assets:** WebP/SVG formats only; lazy loading below the fold, high fetch priority on hero assets.
  - **Technical SEO:** Schema.org JSON-LD structured data, complete OpenGraph/Twitter cards, and valid `sitemap.xml`.

### ♿ 4. Accessibility & Inclusivity: [a11y Audit](.agents/skills/a11y-audit/SKILL.md)
- **Path:** `.agents/skills/a11y-audit/SKILL.md`
- **When to Apply:** Creating or reviewing any UI controls, navigation menus, buttons, forms, or color palettes.
- **Key Mandates:**
  - **WCAG 2.1 AA:** Strict minimum 4.5:1 text contrast for body copy and 3:1 for large headers/icons.
  - **Keyboard Navigable:** Tab reachable with clear focus rings; `Escape` closes open drawers/modals.
  - **Touch Target Sizing:** Minimum 44×44px bounding box for all interactive mobile targets.
  - **ARIA Discipline:** Native semantic elements first; explicit `aria-label` for icon-only buttons; `aria-hidden="true"` for decorative SVGs.

---

## 3. General Development Guidelines

1. **Keep Code Lightweight & Maintainable:**
   - Prefer clean CSS variables and modern layout primitives (`flexbox`, `grid`, `clamp()`) over external dependencies.
   - Retain semantic tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
2. **Preserve Integrity:**
   - Preserve existing custom styling, semantic structure, and responsive behaviors.
   - Do not break mobile responsiveness (ensure full functionality down to 360px screen width).
3. **Verification Before Completion:**
   - Cross-check modified files against all four skill checklists before reporting tasks as completed.
