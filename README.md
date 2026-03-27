# Bistro Central Ljubljana

Modern restaurant landing page focused on menu presentation and table reservations. Optimized for mobile devices and fast loading performance.

Built as a portfolio piece and reusable template for future client work.

---

## Live Preview

>  Vercel deployment URL once deployed.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Scroll animations & page transitions |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark/light mode toggle |

---

## Features

- **Dark/Light Theme** — Toggle between a moody dark palette with gold accents and a clean warm light mode. Smooth color transitions, no flash on reload.
- **Sticky Navigation** — Transparent navbar that solidifies on scroll. Smooth scroll anchor links to every section. Mobile hamburger menu.
- **Hero Section** — Full-viewport background image with gradient overlay, animated entrance, and dual CTAs.
- **Menu Display** — 8 dishes in a responsive grid with images, descriptions, and prices. "Chef's Pick" and "Special" badges on featured items.
- **About Section** — Split layout with restaurant story and interior photo. Slide-in animations.
- **Image Gallery** — Responsive grid with hover zoom effects on all images.
- **Reservation Form** — Name, phone, date, and time fields. Client-side form with animated toast confirmation on submit.
- **Location & Hours** — Google Maps embed, working hours table, clickable phone and email links.
- **Scroll Animations** — Fade-in, slide-in, and stagger effects triggered as sections enter the viewport.
- **Fully Responsive** — Mobile-first design tested across phone, tablet, and desktop breakpoints.
- **SEO Optimized** — Proper metadata, Open Graph tags, semantic HTML, and optimized images via `next/image`.
- **Accessible** — ARIA labels, keyboard navigation, proper heading hierarchy, focus indicators.

---

## Project Structure

```
src/
  app/
    layout.tsx              Root layout (fonts, metadata, OG tags)
    page.tsx                Main page (assembles all sections)
    globals.css             Tailwind theme config + global styles
  components/
    layout/
      Navbar.tsx            Sticky navbar with scroll links + mobile menu
      Footer.tsx            Contact info, social links, copyright
    sections/
      Hero.tsx              Full-viewport hero with CTA
      Menu.tsx              Menu grid with cards
      About.tsx             Restaurant story + image
      Gallery.tsx           Image grid with hover effects
      Reservation.tsx       Booking form with toast
      Location.tsx          Map embed + working hours
    ui/
      Button.tsx            Reusable CTA button (primary/outline)
      ThemeToggle.tsx       Dark/light mode switch
      SectionWrapper.tsx    Shared section wrapper with scroll animation
      MenuCard.tsx          Individual menu item card
      Badge.tsx             "Chef's Pick" / "Special" label
      GalleryImage.tsx      Gallery image with hover zoom
      Toast.tsx             Animated confirmation toast
  lib/
    data.ts                 All static content (menu, hours, about text)
    animations.ts           Reusable Framer Motion variants
    providers.tsx           ThemeProvider wrapper
  types/
    index.ts                TypeScript interfaces
public/
  images/
    hero/                   Hero background image
    menu/                   Dish photos (8 images)
    gallery/                Gallery photos (8 images)
    about/                  Restaurant interior photo
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.x or later
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/restaurant-portfolio.git
cd restaurant-portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Create optimized build
npm run build

# Serve the production build
npm run start
```

### Linting

```bash
npm run lint
```

---

## Email Notifications (Reservation Form)

The reservation form sends email notifications via [Resend](https://resend.com) when a guest submits a booking request.

### How It Works

1. Guest fills out the reservation form (name, phone, date, time)
2. Form submits to the `/api/reservation` API route
3. The API sends a styled HTML email to your configured notification address
4. Guest sees a success or error toast

### Setup

1. Create a free account at [resend.com](https://resend.com) (100 emails/day on the free tier)
2. Get your API key from the [Resend dashboard](https://resend.com/api-keys)
3. Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

4. Edit `.env.local`:

```env
# Your Resend API key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# The "from" address for reservation emails
# Use "onboarding@resend.dev" for testing, or your verified domain for production
RESEND_FROM_EMAIL=Bistro Central <onboarding@resend.dev>

# Where reservation notifications are sent
NOTIFICATION_EMAIL=your-email@example.com
```

5. Start the dev server and test the form

### Production (Vercel)

Add the same three environment variables in your Vercel project settings under **Settings > Environment Variables**. No code changes needed.

### Without Email

If you don't set up Resend, the form still works — it just shows an error toast on submit instead of sending an email. The UI is fully functional either way.

---

## Images

The project ships with SVG placeholder images. To get the full visual effect, replace them with real photos:

1. Download free food/restaurant images from [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com)
2. Replace the files in `public/images/` matching the existing filenames:

| Folder | Files | Recommended Size |
|---|---|---|
| `hero/` | `hero-bg.jpg` | 1920x1080 |
| `menu/` | `truffle-risotto.jpg`, `sea-bass.jpg`, `beef-tenderloin.jpg`, `mushroom-pasta.jpg`, `caprese-salad.jpg`, `tiramisu.jpg`, `bruschetta.jpg`, `panna-cotta.jpg` | 800x600 |
| `gallery/` | `interior-1.jpg`, `dish-1.jpg`, `bar.jpg`, `terrace.jpg`, `dish-2.jpg`, `interior-2.jpg`, `dish-3.jpg`, `wine.jpg` | 1200x800 |
| `about/` | `restaurant-interior.jpg` | 1200x800 |

All images are served through `next/image` for automatic optimization and lazy loading.

---

## Color Palette

### Dark Mode (Default)

| Token | Color | Usage |
|---|---|---|
| `--bg-primary` | `#1a1a1a` | Page background |
| `--bg-secondary` | `#2a2a2a` | Card backgrounds, navbar |
| `--bg-accent` | `#0f0f0f` | Alternate section backgrounds |
| `--text-primary` | `#f5f5f5` | Main body text |
| `--text-secondary` | `#a3a3a3` | Muted text |
| `--accent` | `#d4a853` | Gold — CTAs, badges, highlights |

### Light Mode

| Token | Color | Usage |
|---|---|---|
| `--bg-primary` | `#faf9f6` | Page background |
| `--bg-secondary` | `#ffffff` | Card backgrounds |
| `--bg-accent` | `#f0ede6` | Alternate section backgrounds |
| `--text-primary` | `#1a1a1a` | Main body text |
| `--text-secondary` | `#6b6b6b` | Muted text |
| `--accent` | `#b8912e` | Darker gold for light backgrounds |

---

## Typography

| Element | Font | Classes |
|---|---|---|
| Headings | Playfair Display | `font-heading` |
| Body text | Inter | `font-body` |

---

## Customization

All restaurant content is centralized in a single file for easy editing:

**[src/lib/data.ts](src/lib/data.ts)** — Change the restaurant name, tagline, menu items, gallery images, working hours, contact info, and about text all in one place.

**[src/app/globals.css](src/app/globals.css)** — Modify the color palette, fonts, and global styles via CSS custom properties and Tailwind's `@theme` config.

---

## Deployment

Deploy to [Vercel](https://vercel.com) with one click:

1. Push your repo to GitHub
2. Import the project on [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no configuration needed
4. Your site is live

---

## License

This project is open source and available for personal and commercial use.

---

## Author

Built by Nikola Glavonjic as a portfolio project.
