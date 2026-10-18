---
name: a11y-audit
description: Audits, tests, and enforces web accessibility (WCAG 2.1 AA compliance) across HTML, CSS, and JavaScript. Covers semantic landmarks, screen reader attributes (ARIA), keyboard navigation, focus management, minimum tap targets, and color contrast. Use when building, refactoring, or auditing UI components, forms, navigation drawers, or interactive elements.
---

# Accessibility (a11y) Audit & Enforcement Skill

This skill ensures that all pages and components within the portfolio achieve WCAG 2.1 Level AA compliance, providing an inclusive experience for screen reader users, keyboard-only navigators, and mobile touch interactions.

---

## 1. Non-Negotiable WCAG AA Requirements

### A. Color Contrast Ratios
- **Normal text (< 18pt or < 14pt bold):** Minimum contrast ratio of **4.5:1** against its background.
- **Large text (>= 18pt or >= 14pt bold):** Minimum contrast ratio of **3:1**.
- **Interactive UI components & icons:** Minimum contrast ratio of **3:1** against adjacent background colors.
- *Rule of thumb:* Never use low-opacity gray text (e.g. `text-white/30` or `#6b7280`) for informative copy. Use `text-white/70` or brighter on dark `#07080e` backgrounds.

### B. Keyboard Operability & Focus Traps
- **Full Tabability:** Every link, button, and form input must be reachable using standard `Tab` and `Shift+Tab`.
- **Visible Focus Indicator (`:focus-visible`):** Never apply `outline: none` without providing an equivalent, high-contrast custom outline (e.g. `ring-2 ring-cyan-400 ring-offset-2 ring-offset-[#07080e]`).
- **Interactive Modals & Drawers:**
  - Pressing `Escape` must close open mobile menus or modals.
  - When a menu opens, focus must move into the container; when closed, focus must return to the trigger button.

### C. Touch Target Sizing (Mobile)
- All interactive controls (buttons, links, hamburger toggles, filter chips) must have an effective bounding touch target of at least **44 × 44 CSS pixels**.
- If visual design requires a smaller icon (e.g., 20px icon), use padding or an invisible hit-box to satisfy the 44px requirement:
  ```html
  <!-- Visual button is small, but tap target is 44px -->
  <button class="inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-2 ...">
  ```

---

## 2. Semantic HTML & ARIA Discipline

### Rule: Prefer Native HTML over Custom ARIA
Use native elements (`<button>`, `<a>`, `<nav>`, `<header>`, `<main>`, `<footer>`, `<section>`) before adding ARIA roles. Only use ARIA when native HTML cannot express the state.

### Critical ARIA Patterns for the Portfolio:

1. **Icon-Only Buttons:**
   Every button without visible text must have an explicit `aria-label`:
   ```html
   <button type="button" aria-label="Toggle navigation menu" id="mobile-menu-toggle">
     <svg aria-hidden="true" ...></svg>
   </button>
   ```

2. **Decorative Icons & Ambient Graphics:**
   All purely decorative SVG icons, background mesh gradients, and glow circles must include `aria-hidden="true"` so screen readers do not announce empty graphical noise:
   ```html
   <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 ..."></div>
   ```

3. **Expandable Navigation Menus:**
   Mobile drawers or expandable accordions must synchronize their state via `aria-expanded` and `aria-controls`:
   ```html
   <button aria-expanded="false" aria-controls="mobile-menu" id="mobile-menu-toggle">...</button>
   <div id="mobile-menu" class="hidden" role="region" aria-label="Mobile navigation">...</div>
   ```

4. **Dynamic Filter Tabs:**
   Interactive category filters (e.g., in Shipped Systems) must indicate selection using `aria-pressed="true|false"` or `aria-selected`:
   ```html
   <button type="button" class="filter-tab is-active" aria-pressed="true" data-category="all">
   ```

---

## 3. a11y Audit Verification Checklist

Before reporting any frontend work as done, run this checklist:

- [ ] **Headings Hierarchy:** Does the page have exactly one `<h1>`? Are `<h2>`, `<h3>` nested logically without skipping levels (e.g. `<h1>` followed by `<h3>`)?
- [ ] **Image Descriptions:** Does every meaningful image have a descriptive `alt` attribute? (Purely decorative icons must have `aria-hidden="true"`).
- [ ] **Keyboard Only Run:** Can the user tab through the entire page from top to bottom, open the mobile menu, select filters, and reach the footer links using only the keyboard?
- [ ] **Contrast Check:** Does all text on badges, cards, and buttons pass WCAG AA (4.5:1)?
- [ ] **Reduced Motion Support:** Does the CSS respect user preferences via `@media (prefers-reduced-motion: reduce)` by disabling aggressive parallax or infinite animations?
