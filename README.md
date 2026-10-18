# Pankaj Kumar — Portfolio

[![Live Site](https://img.shields.io/badge/Live%20Site-pankajkcodes.github.io-06b6d4?style=flat-square)](https://pankajkcodes.github.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-gray?style=flat-square)](LICENSE)

Source code for the personal engineering portfolio of **Pankaj Kumar** ([@pankajkcodes](https://github.com/pankajkcodes)) — Senior Mobile Application Engineer &amp; Systems Architect.

Built with lightweight, dependency-free vanilla web technologies for fast load times, zero framework overhead, and full responsiveness across mobile, tablet, and desktop.

---

## ⚡ Tech Stack

- **Markup &amp; Layout:** Semantic HTML5, modern CSS3 (`clamp()`, CSS Grid, Flexbox).
- **Styling:** Tailwind CSS utility layer paired with custom design tokens ([`assets/css/styles.css`](assets/css/styles.css)).
- **Logic:** Vanilla JavaScript (ES6+) for dynamic systems rendering, category filtering, and modal deep-linking ([`assets/js/apps.js`](assets/js/apps.js)).
- **Assets:** Optimized WebP screenshots and SVG iconography.
- **SEO &amp; Meta:** Schema.org JSON-LD structured data, Open Graph, Twitter Cards, `sitemap.xml`, and `robots.txt`.

---

## 📂 Project Structure

```text
├── index.html                 # Main landing page
├── 404.html                   # Custom error page
├── sitemap.xml                # Search engine URL index
├── robots.txt                 # Crawler access rules
├── AGENTS.md                  # Development guidelines for AI agents
│
├── .agents/skills/            # Quality & craft audit standards
│   ├── ui-design-anti-slop/   # UI/UX design rules
│   ├── copywriting-anti-slop/ # Technical copywriting standards
│   ├── web-performance-seo/   # Performance & SEO checklist
│   └── a11y-audit/            # WCAG 2.1 AA accessibility guidelines
│
└── assets/
    ├── css/
    │   ├── tailwind.css       # Tailwind utility stylesheet
    │   └── styles.css         # Custom layout, tokens & animations
    ├── js/
    │   └── apps.js            # Systems dataset, modal deep-linking & UI logic
    └── img/
        ├── favicon.png
        ├── apple-touch-icon.png
        ├── profile/           # Profile photo (WebP)
        └── portfolio/         # Production app screenshots (WebP)
```

---

## 🛠️ Local Development

No build steps, package managers, or `node_modules` required. Serve directly from the root using any static HTTP server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 📬 Contact & Links

- **Live Portfolio:** [pankajkcodes.github.io](https://pankajkcodes.github.io/)
- **Email:** [pankajkcodes@gmail.com](mailto:pankajkcodes@gmail.com)
- **LinkedIn:** [linkedin.com/in/pankajkcodes](https://www.linkedin.com/in/pankajkcodes/)
- **GitHub:** [@pankajkcodes](https://github.com/pankajkcodes/)
