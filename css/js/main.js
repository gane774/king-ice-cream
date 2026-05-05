// ═══════════════════════════════════════════════
// KING ICE CREAM — MAIN JAVASCRIPT
// ═══════════════════════════════════════════════

// ── LOADER ──
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
    setTimeout(() => document.getElementById('loader').style.display = 'none', 900);
  }, 1800);
});

// ── CUSTOM CURSOR ──
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

const interactives = document.querySelectorAll('a, button, .fl-card, .r-card, .f-btn, .cred-item, .soc-btn, input, select, textarea');
interactives.forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-grow'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-grow'));
});

// ── NAVIGATION ──
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const mobDrawer = document.getElementById('mobDrawer');
const mobLinks = document.querySelectorAll('.mob-link');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobDrawer.classList.toggle('open');
});

mobLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobDrawer.classList.remove('open');
  });
});

// ── SCROLL REVEAL ──
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('vis');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach(el => revealObserver.observe(el));

// ── COUNTER ANIMATION ──
const statNums = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    
    const el = entry.target;
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const display = el.dataset.display || null;
    const duration = 1600;
    let start = null;
    
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);
      
      if (display && progress < 1) {
        el.textContent = display;
      } else {
        el.textContent = current.toLocaleString('en-IN') + suffix;
      }
      
      if (progress < 1) requestAnimationFrame(step);
    }
    
    requestAnimationFrame(step);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

statNums.forEach(el => counterObserver.observe(el));

// ── FLAVOURS DATA ──
const flavorsData = [
  { name: 'Butterscotch Royale', cat: 'classic', badge: 'Bestseller', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80', desc: 'Golden butterscotch swirled into silky cream — the flavour that built our reputation.' },
  { name: 'Belgian Chocolate', cat: 'premium', badge: 'Award Finalist', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80', desc: 'Rich, complex Belgian cocoa churned into velvet-smooth ice cream. For the true connoisseur.' },
  { name: 'Alphonso Mango', cat: 'tropical', badge: 'Seasonal', img: 'https://images.unsplash.com/photo-1590315892456-bc6abb6e4f48?w=600&q=80', desc: 'Ratnagiri Alphonso at its peak — pure fruit, pure summer, pure indulgence.' },
  { name: 'Classic Vanilla', cat: 'classic', badge: '', img: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&q=80', desc: 'Madagascar vanilla bean in real dairy milk. The benchmark by which all others are judged.' },
  { name: 'Kesar Pista Kulfi', cat: 'indian', badge: 'Heritage', img: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80', desc: 'Kesari saffron and Irani pistachio — a regal kulfi that echoes centuries of tradition.' },
  { name: 'Strawberry Fields', cat: 'classic', badge: '', img: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=600&q=80', desc: 'Garden-fresh strawberries folded into a cream base — bright, fruity, and irresistible.' },
  { name: 'Tender Coconut', cat: 'tropical', badge: 'New', img: 'https://images.unsplash.com/photo-1498060526090-97bc3b5e2eca?w=600&q=80', desc: 'Real tender coconut water and flesh — tropical bliss in every spoonful.' },
  { name: 'Cookies & Cream', cat: 'premium', badge: '', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80', desc: 'Classic Oreo crumble folded through clouds of cream. Pure joy, no apologies.' },
  { name: 'Rajbhog Kulfi', cat: 'indian', badge: 'Bestseller', img: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80', desc: 'Inspired by the legendary Bengali sweet — rich milk solids, rose water, and cardamom.' },
];

function renderFlavors(filter) {
  const grid = document.getElementById('flavorsGrid');
  const filtered = filter === 'all' ? flavorsData : flavorsData.filter(f => f.cat === filter);
  
  grid.innerHTML = filtered.map(f => `
    <div class="fl-card">
      <img src="${f.img}" alt="${f.name}" loading="lazy" />
      ${f.badge ? `<span class="fl-badge">${f.badge}</span>` : ''}
      <div class="fl-overlay">
        <span class="fl-cat">${f.cat.replace('indian', 'Indian Heritage')}</span>
        <h3 class="fl-name">${f.name}</h3>
        <p class="fl-desc">${f.desc}</p>
      </div>
    </div>
  `).join('');
}

renderFlavors('all');

const filterBtns = document.querySelectorAll('.f-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.cat;
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderFlavors(filter);
  });
});

// ── FORM SUBMIT ──
document.getElementById('formSubmit').addEventListener('click', function() {
  this.textContent = '✓ Message Sent — We\'ll be in touch!';
  this.classList.add('sent');
  setTimeout(() => {
    this.textContent = 'Send Message';
    this.classList.remove('sent');
  }, 3000);
});

// ── PARALLAX HERO BG ──
window.addEventListener('scroll', () => {
  const heroBg = document.querySelector('.hero-bg img');
  if (heroBg) heroBg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
});

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = link.getAttribute('href');
    if (target !== '#') {
      const el = document.querySelector(target);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

console.log('🍨 King Ice Cream — Premium Dairy Craftsmanship');
