# replit.md

## Overview

This repository now contains a **frontend-only** React experience powered by Vite and Tailwind CSS. The previous Express/Drizzle backend has been removed so the site can be deployed as a static asset bundle (e.g., Vercel, Netlify, GitHub Pages). The UI mirrors a marketing homepage with product carousels, recipe cards, and Instagram-inspired content blocks.

## User Preferences

- Communicate in simple, everyday language.
- Prioritize instructions that keep the project deployable as a static site.

## System Architecture

### Directory Structure
- **`src/`** — Vite-powered React SPA source (components, hooks, lib, pages).
- **`public/`** — Static assets served as-is (Figma exports, SVGs, manifest, etc.).
- **`components.json`** — shadcn/ui configuration for generating new component boilerplate.
- **`attached_assets/`** — Optional design exports or static art referenced from the UI.

### Frontend Stack
- **Framework**: React 18 with TypeScript.
- **Bundler/Dev Server**: Vite (configured in `vite.config.ts`, root is the repo root).
- **Routing**: Wouter for lightweight client-side routing needs.
- **Data/State**: TanStack React Query handles async state (still useful even without a backend when integrating with external APIs later).
- **Forms & Validation**: React Hook Form + Zod resolvers.
- **Styling**: Tailwind CSS with project-specific tokens defined in `src/index.css`.
- **UI Kit**: shadcn/ui components (Radix UI primitives) stored under `src/components/ui/`.
- **Icons & Motion**: Lucide icons, Framer Motion, Embla Carousel, React Day Picker, etc.
- **Path Aliases**: `@/` → `src/`, `@assets/` → `attached_assets/`.

### Build & Scripts
- `npm run dev` — Start the Vite dev server for the React app.
- `npm run build` — Generate the production-ready static bundle under `dist/`.
- `npm run preview` / `npm run start` — Preview the built site locally (uses `vite preview`).
- `npm run check` — Type-check the frontend using `tsc`.

### Deployment Notes
- Because there is no backend, deployment is as simple as running `npm run build` and serving the `dist/` output via any static host.
- Environment variables are not required unless you connect to external APIs from the browser.
- React Query remains in place so you can easily wire in public APIs without retooling state management.

## Key NPM Packages
- **Core**: React, React DOM, Vite, Wouter.
- **UI/UX**: Tailwind CSS, tailwind-merge, tailwindcss-animate, Lucide React, Framer Motion, Embla Carousel, Vaul, cmdk.
- **Forms & Validation**: React Hook Form, @hookform/resolvers, Zod, zod-validation-error.
- **Data**: @tanstack/react-query.
- **Utilities**: class-variance-authority, clsx, date-fns, recharts, react-day-picker, react-resizable-panels, next-themes, input-otp.

## Fonts & Assets
- Google Fonts (Architects Daughter, DM Sans, Fira Code, Geist Mono, Plus Jakarta Sans) are loaded via CSS.
- SVG/PNG assets exported from Figma reside under `public/figmaAssets/` and optional `attached_assets/`.

## Replit Tooling
- `@replit/vite-plugin-runtime-error-modal` surfaces runtime errors with an overlay.
- `@replit/vite-plugin-cartographer` + `@replit/vite-plugin-dev-banner` enable Replit-specific DX improvements during development (automatically disabled in production builds).