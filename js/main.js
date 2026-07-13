// ── Footer year ───────────────────────────────────────────────
document.querySelectorAll('.footer-year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// ── Mobile nav toggle ─────────────────────────────────────────
const menuToggle = document.getElementById('menu-toggle');
const navLinks   = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      navLinks.classList.remove('open');
      menuToggle.textContent = '☰';
    }
  });
}

// ── Scroll: navbar shadow + active nav link ───────────────────
const siteHeader = document.getElementById('site-header');
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  if (siteHeader) {
    siteHeader.classList.toggle('scrolled', window.scrollY > 50);
  }

  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
});

// ── Time-based greeting ───────────────────────────────────────
(function greetByTime() {
  const hour     = new Date().getHours();
  const greeting = hour < 12 ? "Good morning, I'm"
                 : hour < 18 ? "Good afternoon, I'm"
                 :             "Good evening, I'm";
  const el = document.getElementById('hero-greeting');
  if (el) el.textContent = greeting;
})();

// ── Typing animation ──────────────────────────────────────────
(function typewriter() {
  const el = document.getElementById('typed-role');
  if (!el) return;

  const roles   = ['Front-End Developer', 'UI Designer', 'Problem Solver'];
  let rIdx = 0, cIdx = 0, deleting = false;

  function tick() {
    const current = roles[rIdx];
    el.textContent = deleting
      ? current.slice(0, cIdx--)
      : current.slice(0, cIdx++);

    if (!deleting && cIdx > current.length) {
      setTimeout(() => { deleting = true; tick(); }, 1800);
      return;
    }
    if (deleting && cIdx < 0) {
      deleting = false;
      rIdx = (rIdx + 1) % roles.length;
    }
    setTimeout(tick, deleting ? 60 : 100);
  }
  tick();
})();

// ── Scroll reveal (IntersectionObserver) ─────────────────────
(function scrollReveal() {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(el => observer.observe(el));
})();

// ── Contact form validation ───────────────────────────────────
const contactForm = document.getElementById('contact-form');

function showError(id, message) {
  const el = document.getElementById(id);
  if (el) el.textContent = message;
}

function clearErrors() {
  ['name-error', 'email-error', 'message-error'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '';
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    clearErrors();

    const name    = document.getElementById('name')?.value.trim()    ?? '';
    const email   = document.getElementById('email')?.value.trim()   ?? '';
    const message = document.getElementById('message')?.value.trim() ?? '';
    let hasErrors = false;

    if (!name) {
      showError('name-error', 'Please enter your name.');
      hasErrors = true;
    }
    if (!email || !email.includes('@')) {
      showError('email-error', 'Please enter a valid email address.');
      hasErrors = true;
    }
    if (message.length < 10) {
      showError('message-error', 'Message must be at least 10 characters.');
      hasErrors = true;
    }

    if (!hasErrors) {
      const submitBtn = document.getElementById('submit-btn');
      if (submitBtn) {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
      }
      setTimeout(() => {
        document.getElementById('form-success')?.classList.remove('hidden');
        contactForm.reset();
        if (submitBtn) {
          submitBtn.textContent = 'Send Message';
          submitBtn.disabled = false;
        }
      }, 1500);
    }
  });
}
