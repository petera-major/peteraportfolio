# Tera Major — Portfolio

Stranger Things-themed developer portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it.

## Personalize It

### 1. Add your photo
- Remove the background from a photo using [remove.bg](https://remove.bg) or Canva
- Save it as `/public/tera.png`
- Open `src/app/components/Hero.tsx`
- Find the comment block and follow the instructions to swap in the `<Image>` tag

### 2. Update your projects
- Open `src/app/components/Projects.tsx`
- Edit the `PROJECTS` array at the top — each project has name, desc, tags, link, status

### 3. Update your skills
- Open `src/app/components/Skills.tsx`
- Edit the `SKILL_GROUPS` array

### 4. Update contact links
- Open `src/app/components/Contact.tsx`
- Update `CONTACT_LINKS` and the `EMAIL` variable

### 5. Update metadata (for SEO + link previews)
- Open `src/app/layout.tsx`
- Update the `metadata` object with your name and bio

## Deploy to Vercel (free)

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect at [vercel.com](https://vercel.com) — auto-deploys on every push.

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (ready to use for extra animations)

## Fonts used
- Libre Baskerville — name / headings
- VT323 — labels, nav, tags (the 80s CRT feel)
- Special Elite — body text
