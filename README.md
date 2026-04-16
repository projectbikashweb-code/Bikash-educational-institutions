# 🏫 Millennium Coaching Centre — Website

A **high-conversion, premium coaching institute website** built with React + Vite + Tailwind CSS + Framer Motion.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
src/
├── assets/            # images, icons, videos
├── components/
│   ├── animations/    # FadeIn, SlideUp, StaggerContainer, ParallaxWrapper
│   ├── common/        # Navbar, Footer, FloatingCTA, SectionHeader, Loader
│   ├── forms/         # EnquiryForm, DemoBookingForm
│   └── ui/            # Button, Card, Input, Modal
├── data/              # coursesData, testimonialsData, resultsData, galleryData
├── hooks/             # useScrollAnimation, useParallax, useForm
├── layouts/           # MainLayout
├── pages/             # Home, Courses, About, Results, Testimonials, Batches, Gallery, Contact
├── routes/            # AppRoutes
├── sections/
│   └── home/          # Hero, Highlights, CoursesPreview, ResultsPreview, TestimonialsPreview, CTASection
├── styles/            # global.css
└── utils/             # constants.js, helpers.js
```

---

## 📄 Pages

| Route            | Page         | Description                              |
|------------------|--------------|------------------------------------------|
| `/`              | Home         | Full conversion page with all sections   |
| `/courses`       | Courses      | All 3 course cards with details          |
| `/about`         | About        | History, timeline, mission, faculty      |
| `/results`       | Results      | Stats counters, toppers, ratings         |
| `/testimonials`  | Testimonials | All reviews with ratings display         |
| `/batches`       | Batches      | Batch schedule with status badges        |
| `/gallery`       | Gallery      | Filterable grid with lightbox            |
| `/contact`       | Contact      | Enquiry form, map, contact info          |

---

## 🎨 Design System

### Colors
- **Primary**: Blue (#2575e9 → #1d5fd6)
- **Teal**: Teal (#14b8a6 → #0d9488)
- **Accent**: Amber (#f59e0b)

### Typography
- **Display / Headings**: Playfair Display (serif)
- **Body**: DM Sans (sans-serif)

### Key CSS Classes
```css
.btn-primary       /* Blue CTA button */
.btn-secondary     /* White/outlined button */
.btn-outline-white /* White outlined (for dark bg) */
.card              /* Standard card with hover */
.badge             /* Small pill/badge */
.section-pad       /* Vertical padding: py-16 md:py-24 */
.container-main    /* Max-width centered container */
.glass             /* Glassmorphism panel */
.skeleton          /* Animated skeleton loader */
```

---

## ⚡ Animations

- **FadeIn** — scroll-triggered fade + slide from any direction
- **SlideUp** — slide up on scroll
- **StaggerContainer / StaggerItem** — cascading child animations
- **ParallaxWrapper** — subtle scroll parallax
- **CountUp** — animated number counters (Results page)
- **FloatingCTA** — WhatsApp button with tooltip pop-in

---

## 📝 Customisation

### Update institute info
Edit `src/utils/constants.js`:
```js
export const INSTITUTE = {
  name: 'Millennium Coaching Centre',
  phone: '094373 11973',
  whatsapp: 'https://wa.me/919437311973',
  address: '...',
  ...
}
```

### Update courses / testimonials / results
Edit `src/data/index.js` — all data is centralised here.

### Add real images
Replace emoji placeholders in Gallery and cards by importing images into `src/assets/images/` and using `<img src={...} />` tags.

### Connect the enquiry form
In `src/components/forms/EnquiryForm.jsx`, replace the mock `onSubmit` with:
- **EmailJS**: `emailjs.send(serviceId, templateId, data)`
- **Backend API**: `fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(data) })`

### Replace Google Maps embed
In `src/pages/Contact.jsx`, replace the `<iframe>` `src` with your actual Google Maps embed URL from [maps.google.com](https://maps.google.com).

---

## 📦 Dependencies

| Package                     | Purpose                        |
|-----------------------------|--------------------------------|
| react-router-dom            | Client-side routing            |
| framer-motion               | Animations & transitions       |
| gsap                        | Advanced scroll animations     |
| react-hook-form             | Form state & validation        |
| react-countup               | Animated number counters       |
| react-intersection-observer | Viewport detection for counters|
| swiper                      | Testimonial sliders (optional) |
| lucide-react                | Icon library                   |

---

## 🚀 Deployment

### Vercel (recommended)
```bash
npm run build
# Push to GitHub → import in vercel.com → auto-deploy
```

### Netlify
```bash
npm run build
# Drag & drop the /dist folder to netlify.com/drop
```

### Manual (nginx / Apache)
```bash
npm run build
# Upload /dist contents to your web server root
```

> ⚠️ Since this uses React Router, configure your host to redirect all routes to `index.html`:
> - **Netlify**: add `public/_redirects` with `/* /index.html 200`
> - **Vercel**: handled automatically
> - **nginx**: add `try_files $uri /index.html;`

---

## 📞 Institute Details

- **Name**: Millennium Coaching Centre
- **Location**: Cuttack - Paradeep Rd, Naya Bazaar, Cuttack, Odisha 753004
- **Phone**: 094373 11973
- **Rating**: 4.9★ Google (149+ reviews) · 4.9★ Justdial (172 votes)
- **Est.**: 2000

---

Built with ❤️ for Millennium Coaching Centre.
