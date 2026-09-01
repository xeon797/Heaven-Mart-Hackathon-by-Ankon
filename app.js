// Heaven Furniture Mart — mobile nav toggle + scrolled nav state

const siteHeader = document.querySelector('.site-header');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (siteHeader) {
  const toggleScrolled = () => {
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  toggleScrolled();
  window.addEventListener('scroll', toggleScrolled, { passive: true });
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Auto-advancing carousel with manual arrows/dots — used by both the
// Brand Intro filmstrip and the Social Proof showroom carousel.
function initCarousel({ rootId, trackId, dotsId, prevId, nextId, autoplayMs = 2000 }) {
  const root = document.getElementById(rootId);
  const track = document.getElementById(trackId);
  if (!root || !track) return;

  const slides = Array.from(track.children);
  const dots = Array.from(document.querySelectorAll(`#${dotsId} .filmstrip-dot`));
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);
  let index = 0;
  let timer = null;

  const goTo = (i) => {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, di) => {
      dot.classList.toggle('is-active', di === index);
      dot.setAttribute('aria-current', di === index ? 'true' : 'false');
    });
  };

  const stop = () => {
    if (timer) clearInterval(timer);
    timer = null;
  };

  const start = () => {
    stop();
    timer = setInterval(() => goTo(index + 1), autoplayMs);
  };

  prevBtn.addEventListener('click', () => { goTo(index - 1); start(); });
  nextBtn.addEventListener('click', () => { goTo(index + 1); start(); });
  dots.forEach((dot, di) => dot.addEventListener('click', () => { goTo(di); start(); }));

  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', start);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop(); else start();
  });

  start();
}

initCarousel({ rootId: 'filmstrip', trackId: 'filmstrip-track', dotsId: 'filmstrip-dots', prevId: 'filmstrip-prev', nextId: 'filmstrip-next' });
initCarousel({ rootId: 'showroom-carousel', trackId: 'showroom-track', dotsId: 'showroom-dots', prevId: 'showroom-prev', nextId: 'showroom-next' });

// Book a Consult — builds a WhatsApp deep link client-side, no backend
const consultForm = document.getElementById('consult-form');

if (consultForm) {
  consultForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('consult-name').value.trim();
    const phone = document.getElementById('consult-phone').value.trim();

    if (!name || !phone) {
      consultForm.reportValidity();
      return;
    }

    const message = `Hi, I'm ${name}, my WhatsApp number is ${phone}, I'd like to book a free design consultation.`;
    const url = `https://wa.me/8801960481983?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
  });
}

// Footer year
const footerYear = document.getElementById('footer-year');
if (footerYear) {
  footerYear.textContent = String(new Date().getFullYear());
}
