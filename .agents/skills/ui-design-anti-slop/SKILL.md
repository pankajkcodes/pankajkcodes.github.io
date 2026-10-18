---
name: ui-design-anti-slop
description: Audits, guides, and enforces high-craft frontend UI/UX design while eliminating generic AI design tropes (cliché purple gradients, card-inside-card syndrome, overused Inter font defaults, low contrast, missing interactive states). Use when creating, modifying, reviewing, or styling HTML/CSS/JS frontend components for the portfolio.
---

# UI Design & Anti-Slop Skill

This skill guides the design and implementation of frontend UI components, ensuring the portfolio looks custom-crafted, intentional, and free of generic AI aesthetic patterns ("AI slop").

---

## 1. AI Design Tropes to Avoid ("The Slop Catalog")

Never introduce or default to these uninspired AI-generated patterns:

- ❌ **Generic "AI Purple/Indigo" Gradients:** Defaulting to `#6366f1` / `#a855f7` radial or linear gradient backgrounds and glow borders.
- ❌ **Card-in-Card Syndrome:** Wrapping every element in its own rounded border box with a soft drop shadow, creating visual clutter and nested containers.
- ❌ **Low-Contrast Gray Typography:** Using light gray text (`#9ca3af` or lighter on dark/white backgrounds) that fails WCAG AA readability.
- ❌ **Inter-Only Fallback:** Defaulting every heading and body font to generic Inter or Roboto with no typography personality or scale.
- ❌ **Predictable "SaaS Hero" Formula:** Centered headline + pill badge with a star icon + 2 identical CTA buttons + floating app preview mockup.
- ❌ **Missing Interactive Feedback:** Interactive elements lacking hover, `:focus-visible`, active, and disabled states.

---

## 2. Core Design Principles for the Portfolio

### A. Intentional Typography & Hierarchy
- Pair an expressive headline font (with character) with a clean, readable body typeface.
- Maintain a disciplined type scale with clear contrast between section headers, subheadings, and body copy.
- Set comfortable line heights (`line-height: 1.5` to `1.7` for body, `1.1` to `1.2` for display headers).

### B. Color & Visual Contrast
- Pick a distinctive, cohesive color palette tailored to Pankaj's personal brand.
- Reserve accent colors for high-value actions (primary CTAs, key highlights, active states).
- Ensure all text passes WCAG AA contrast (minimum 4.5:1 for normal text, 3:1 for large headings).

### C. Layout, Whitespace & Rhythm
- Let content breathe: prioritize deliberate whitespace over artificial borders and card containers.
- Use alignment grids and asymmetrical rhythm where appropriate to make sections feel human-designed.
- Keep mobile responsiveness fluid using `clamp()`, CSS Grid, and Flexbox without awkward breakpoints.

### D. Tactile Micro-Interactions
- Every clickable element must have a distinct `:hover` and `:focus-visible` state.
- Keep transitions snappy and natural (`150ms` to `250ms`, `cubic-bezier(0.16, 1, 0.3, 1)` or `ease-out`). Avoid sluggish, floaty animations.

---

## 3. UI Audit & Polish Workflow

When modifying or adding UI components, execute these steps:

1. **Audit:** Scan the target HTML/CSS for:
   - Redundant border boxes or nesting.
   - Hardcoded arbitrary hex colors instead of CSS variables / palette tokens.
   - Poor contrast or inaccessible click targets (< 44x44px on mobile).
2. **Refine:**
   - Simplify layout hierarchy by replacing unnecessary cards with clean spacing and dividers.
   - Enhance typography contrast (weight, size, letter-spacing).
3. **Verify:**
   - Test responsive layout across standard widths (375px mobile, 768px tablet, 1280px+ desktop).
   - Verify keyboard navigability and outline indicators.
