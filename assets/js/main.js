/**
* Template Name: Personal
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '#navbar .nav-link', function(e) {
    let section = select(this.hash)
    if (section) {
      e.preventDefault()

      let navbar = select('#navbar')
      let header = select('#header')
      let sections = select('section', true)
      let navlinks = select('#navbar .nav-link', true)

      navlinks.forEach((item) => {
        item.classList.remove('active')
      })

      this.classList.add('active')

      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }

      if (this.hash == '#header') {
        header.classList.remove('header-top')
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        return;
      }

      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top')
        setTimeout(function() {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }

      scrollto(this.hash)
    }
  }, true)

  /**
   * Activate/show sections on load with hash links
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      let initial_nav = select(window.location.hash)

      if (initial_nav) {
        let header = select('#header')
        let navlinks = select('#navbar .nav-link', true)

        header.classList.add('header-top')

        navlinks.forEach((item) => {
          if (item.getAttribute('href') == window.location.hash) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })

        setTimeout(function() {
          initial_nav.classList.add('section-show')
        }, 350);

        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Porfolio isotope and filter - initialized when portfolio section is shown
   */

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

  /**
   * Handle header on normal scrolling
   */
  window.addEventListener('scroll', () => {
    const header = select('#header');
    const isSectionActive = select('section.section-show'); if (window.scrollY > 0 || isSectionActive) {
      header.classList.add('header-top');
    } else {
      header.classList.remove('header-top');
    }
  });

  /**
   * Single Page Scroll - Load each section one at a time
   */
  const sections = select('section', true);
  const navlinks = select('#navbar .nav-link', true);
  const header = select('#header');
  let currentSectionIndex = 0;
  let isScrolling = false;
  const ANIMATION_DURATION = 1000; // Total animation time including transition

  // Array of section IDs in order
  const sectionIds = ['header', 'about', 'resume', 'services', 'portfolio', 'contact'];

  function showSection(index) {
    // Prevent out of bounds or if already scrolling
    if (index < 0 || index >= sectionIds.length || isScrolling) return;

    isScrolling = true;

    // Remove active class from all nav links
    navlinks.forEach((link) => {
      link.classList.remove('active');
    });

    // Add active class to current nav link
    const currentNavLink = select(`#navbar a[href="#${sectionIds[index]}"]`);
    if (currentNavLink) {
      currentNavLink.classList.add('active');
    }

    // Handle header
    if (index === 0) {
      // Show header
      header.classList.remove('header-top');
      sections.forEach((section) => {
        section.classList.remove('section-show');
      });
    } else {
      // Show section
      header.classList.add('header-top');
      sections.forEach((section) => {
        section.classList.remove('section-show');
      });
      // Use setTimeout to ensure smooth transition
      setTimeout(() => {
        sections[index - 1].classList.add('section-show');

        // Initialize portfolio isotope when portfolio section is shown
        if (sectionIds[index] === 'portfolio') {
          let portfolioContainer = select('.portfolio-container');
          if (portfolioContainer && typeof Isotope !== 'undefined') {
            let portfolioIsotope = new Isotope(portfolioContainer, {
              itemSelector: '.portfolio-item',
              layoutMode: 'fitRows'
            });

            let portfolioFilters = select('#portfolio-flters li', true);

            on('click', '#portfolio-flters li', function(e) {
              e.preventDefault();
              portfolioFilters.forEach(function(el) {
                el.classList.remove('filter-active');
              });
              this.classList.add('filter-active');

              portfolioIsotope.arrange({
                filter: this.getAttribute('data-filter')
              });
            }, true);
          }
        }
      }, 50);
    }

    currentSectionIndex = index;

    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Allow scrolling after full animation completes
    setTimeout(() => {
      isScrolling = false;
    }, ANIMATION_DURATION);
  }

  // Scroll up function
  function scrollToUp() {
    if (!isScrolling && currentSectionIndex > 0) {
      showSection(currentSectionIndex - 1);
    }
  }

  // Scroll down function
  function scrollToDown() {
    if (!isScrolling && currentSectionIndex < sectionIds.length - 1) {
      showSection(currentSectionIndex + 1);
    }
  }

  // Keyboard navigation with debounce
  let lastKeyPressTime = 0;
  document.addEventListener('keydown', (e) => {
    const now = Date.now();
    if (now - lastKeyPressTime < ANIMATION_DURATION) return;

    if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
      lastKeyPressTime = now;
      scrollToUp();
    } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
      lastKeyPressTime = now;
      scrollToDown();
    }
  });

  // Mouse wheel scroll with debounce
  let lastWheelTime = 0;
  document.addEventListener('wheel', (e) => {
    const now = Date.now();
    if (now - lastWheelTime < ANIMATION_DURATION || isScrolling) return;

    lastWheelTime = now;
    if (e.deltaY < 0) {
      scrollToUp();
    } else if (e.deltaY > 0) {
      scrollToDown();
    }
  }, { passive: true });

  // Create scroll navigation buttons
  function createScrollButtons() {
    const scrollContainer = document.createElement('div');
    scrollContainer.className = 'scroll-navigation';
    scrollContainer.innerHTML = `
      <button class="scroll-btn scroll-up" title="Scroll Up (↑)">
        <i class="bi bi-chevron-up"></i>
      </button>
      <button class="scroll-btn scroll-down" title="Scroll Down (↓)">
        <i class="bi bi-chevron-down"></i>
      </button>
    `;
    document.body.appendChild(scrollContainer);

    const upBtn = select('.scroll-up');
    const downBtn = select('.scroll-down');

    if (upBtn) {
      upBtn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToUp();
      });
    }
    if (downBtn) {
      downBtn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToDown();
      });
    }
  }

  // Initialize scroll buttons
  createScrollButtons();

  // Initialize with first section
  showSection(0);

})();
