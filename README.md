# Swati Lad — UI/UX Designer Portfolio

Portfolio website for Swati Vishalkumar Lad, UI/UX Designer & UX Researcher.  
Built with Vite + React + TypeScript. Deploy-ready for Vercel.

## Local Development

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Production Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. `vercel.json` handles SPA routing.

### Option B — GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to https://vercel.com/new and import the repo
3. Framework: **Vite** (auto-detected)
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy

## Resume PDF

Place the resume PDF at:

```
public/Swati_Resume.pdf
```

The "Download Resume" button in the hero and nav already link to `/Swati_Resume.pdf`.

## Tech Stack

- Vite 6 + React 19 + TypeScript
- Framer Motion (scroll-triggered fade animations)
- Lucide React (icons)
- Pure CSS (no CSS-in-JS / Tailwind)
- Inter font via Google Fonts

## Project Structure

```
src/
  components/
    Nav.tsx            sticky nav with active-section highlighting
    Hero.tsx           landing section with profile card
    About.tsx          story + highlight cards
    Certification.tsx  IIT Roorkee cert card
    CaseStudy.tsx      Tracto Healthcare 8-phase timeline + double diamond
    Projects.tsx       Marc Dinning / CMO Global work
    Skills.tsx         grouped skill tags
    Experience.tsx     work history
    Education.tsx      academic background
    Contact.tsx        contact info + mailto form
    Footer.tsx
  hooks/
    useInView.ts       IntersectionObserver hook for scroll animations
  index.css            all global styles (CSS custom properties)
  App.tsx
public/
  favicon.svg
  Swati_Resume.pdf   <- DROP YOUR PDF HERE
vercel.json            SPA rewrite rules
```
