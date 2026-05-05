# King Ice Cream — Premium Dairy Ice Cream Website

A luxury dark editorial website for **King Ice Cream**, a premium ice cream brand from Vijaykant Dairy & Food Products Ltd, Belagavi, Karnataka.

## 📋 Project Overview

This is a fully responsive, production-ready website featuring:

- **Luxury Dark Editorial Aesthetic** — Playfair Display serif + DM Sans sans-serif
- **Cinematic Animations** — Scroll reveals, custom cursor, parallax effects
- **Real Photography** — Unsplash premium images throughout
- **9 Key Sections**:
  1. Hero with floating badge & scroll hint
  2. Marquee strip with brand highlights
  3. Stats bar with animated counters
  4. Company story with timeline & image stack
  5. Owner/Leadership biography
  6. Flavours grid with live category filters
  7. What Makes King Unique (4-point competitive edge)
  8. Regional distribution band
  9. Franchise & Contact sections
  10. Professional footer

## 🚀 Getting Started

### Clone & Deploy to GitHub Pages

```bash
# 1. Clone this repo
git clone https://github.com/yourusername/king-ice-cream.git
cd king-ice-cream

# 2. Push to GitHub
git remote add origin https://github.com/yourusername/king-ice-cream.git
git branch -M main
git push -u origin main

# 3. Enable GitHub Pages
# Go to Settings → Pages → Source: Deploy from branch (main)
# Your site will be live at: https://yourusername.github.io/king-ice-cream/
```

### Local Development

Simply open `index.html` in your browser. No build tools required.

```bash
# Optional: Serve locally with Python
python -m http.server 8000
# Then visit: http://localhost:8000
```

## 📁 Project Structure

```
king-ice-cream/
├── index.html          # Main HTML file
├── css/
│   └── main.css        # All styles (responsive, luxury aesthetic)
├── js/
│   └── main.js         # All functionality (cursor, nav, filters, forms)
└── README.md           # This file
```

## 🎨 Design Features

### Colour Palette
- **Primary**: Dark ink (#09070d) — luxury background
- **Accent**: Gold (#c9a84c) — premium highlight
- **Text**: Cream (#f0e6d0) — readable on dark
- **Surface**: #131019 — subtle variation

### Typography
- **Headings**: Playfair Display (serif) — elegant, editorial
- **Body**: DM Sans (sans-serif) — clean, modern readability

### Animations
- Custom cursor with ring follow-through
- Scroll reveal animations (fade-up, slide-left, slide-right)
- Hero line reveals with staggered timing
- Animated number counters (stats bar)
- Flavour card hover effects with desc reveal
- Parallax background on hero section
- Smooth marquee scrolling

## 🔧 Customization

### Update Company Info
Edit text in `index.html`:
- Company name: Line 15
- Navigation links: Lines 50-58
- Hero section: Lines 62-84
- Contact details: Lines 296-315

### Change Colors
Edit CSS variables in `css/main.css` lines 8-22:
```css
:root {
  --gold: #c9a84c;        /* Change primary accent */
  --ink: #09070d;         /* Change background */
  --cream: #f0e6d0;       /* Change text color */
}
```

### Update Flavours
Edit flavours data in `js/main.js` lines 149-159 — add/remove items:
```javascript
const flavorsData = [
  { name: 'Your Flavour', cat: 'classic', badge: 'New', img: 'url', desc: 'description' },
  // ...
];
```

### Replace Images
All images are from **Unsplash** (free, no attribution required). Update image URLs:
- Hero background: `js/main.js` line 62
- Company images: `index.html` lines 163-165
- Owner photo: `index.html` line 189
- Flavour images: `js/main.js` lines 151-159
- Region band: `index.html` line 267

## 📱 Responsive Design

- **Desktop**: Full 2-column grids, hover effects
- **Tablet (1024px)**: Stacked layouts, adjusted spacing
- **Mobile (640px)**: Single column, optimized touch targets

## ✨ Key Features

### Navigation
- Fixed sticky nav with scroll-triggered background
- Mobile hamburger menu with smooth drawer
- Smooth scroll anchor links
- Custom cursor that grows on interaction

### Forms
- Email validation ready
- Responsive form layout
- Submit button with success feedback
- Pre-filled enquiry type selector

### Performance
- No external dependencies (pure HTML/CSS/JS)
- Optimized image loading (`loading="lazy"`)
- Smooth 60fps animations
- Small CSS file size (~50KB uncompressed)

### Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- High contrast text (WCAG AA compliant)
- Mobile-friendly touch targets

## 🔒 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is created for **King Ice Cream** — a brand of **Vijaykant Dairy & Food Products Ltd**, Belagavi, Karnataka, India.

---

**Built with ❤️ for King Ice Cream — Taste Royalty**

For questions or customization requests, contact: info@vijaykantdairy.com
