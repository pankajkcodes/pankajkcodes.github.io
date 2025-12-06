# Copilot Instructions for pankajkcodes.github.io

## Project Overview
This is a static portfolio website built with HTML, CSS, and JavaScript. It uses Bootstrap and several third-party JS/CSS libraries for UI components and effects. The site is deployed via GitHub Pages at https://pankajkcodes.github.io.

## Key Structure
- `index.html`, `portfolio-details.html`: Main entry points for the site.
- `assets/`: Contains all static resources.
  - `css/style.css`: Custom styles.
  - `js/main.js`: Custom scripts.
  - `vendor/`: Third-party libraries (Bootstrap, icons, glightbox, isotope, etc.).
- `forms/contact.php`: Handles contact form submissions (server-side PHP).

## Developer Workflows
- **No build step required**: All files are static and directly served.
- **Testing**: Manual browser testing is standard. No automated test framework is present.
- **Debugging**: Use browser dev tools for JS/CSS/HTML debugging.
- **Deployment**: Push to `master` branch; site is auto-published via GitHub Pages.

## Patterns & Conventions
- **Custom code lives in `assets/css/style.css` and `assets/js/main.js`**. Avoid editing files in `vendor/` unless updating libraries.
- **HTML structure**: Follows Bootstrap grid and utility classes. Custom sections are marked with clear comments.
- **JS patterns**: Vanilla JS and library initialization (e.g., GLightbox, Isotope) in `main.js`. Keep third-party code separate.
- **Images**: Stored in `assets/img/portfolio/`.
- **Contact form**: Submits to `forms/contact.php`. Validate client-side in JS, server-side in PHP.

## Integration Points
- **Bootstrap**: UI framework, loaded from `assets/vendor/bootstrap/`.
- **Other libraries**: See `assets/vendor/` for icons, lightbox, isotope, swiper, etc.
- **PHP**: Only used for contact form backend.

## Examples
- To add a new portfolio item: Add HTML in `index.html` and images in `assets/img/portfolio/`.
- To update styles: Edit `assets/css/style.css`.
- To add JS features: Edit `assets/js/main.js`.

## Recommendations for AI Agents
- Respect the separation between custom and vendor code.
- Use Bootstrap classes for layout and responsiveness.
- Reference existing HTML/JS patterns for new features.
- Manual testing is expected; document any new features in the README if needed.

---
If any section is unclear or missing, please provide feedback for improvement.
