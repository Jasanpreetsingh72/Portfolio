# Developer Portfolio (React + TypeScript + Vite)

Production-ready portfolio with scalable architecture, reusable UI, Framer Motion interactions, and SCSS design system.

## Stack

- React + TypeScript + Vite
- SCSS modular architecture
- React Router
- Framer Motion
- React Helmet Async
- Context API + custom hooks
- ESLint + Prettier

## Features

- Dark/light theme with persistence
- Sticky navbar with active section highlighting
- Hero/About/Skills/Projects/Experience/Services/Testimonials/Contact sections
- Project filtering + reusable modal
- Skeleton loading states
- Scroll progress indicator + scroll-to-top button
- Lazy-loaded routes + ErrorBoundary
- SEO meta tags and responsive layouts

## Structure

```text
src/
├── components/
├── config/
├── constants/
├── context/
├── data/
├── hooks/
├── pages/
├── routes/
├── sections/
├── styles/
├── types/
└── utils/
```

## Setup

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` - local development
- `npm run build` - production build
- `npm run lint` - run ESLint
- `npm run format` - run Prettier
- `npm run preview` - preview production build

## Environment Variables

Create `.env` from `.env.example`:

```bash
cp .env.example .env
```

```env
VITE_SITE_URL=https://your-domain.com
```

## Deployment

1. Build project: `npm run build`
2. Deploy `dist/` to Vercel/Netlify or any static host
3. Configure `VITE_SITE_URL` to your live domain for accurate SEO metadata
