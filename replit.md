# replit.md

## Overview

This is a full-stack web application built with a React frontend and Express backend. It appears to be a product/brand website (likely for a food/beverage company) featuring product categories, recipes, and a "where to buy" section. The homepage is based on a Figma design with product imagery, category tabs (Hot Bev, Cold Bev, Baking, Cooking, etc.), and navigation. The project uses a monorepo structure with shared code between client and server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Directory Structure
- **`client/`** — React frontend (Vite-powered SPA)
- **`server/`** — Express backend API server
- **`shared/`** — Shared code (database schema, types) used by both client and server
- **`migrations/`** — Drizzle ORM database migrations
- **`attached_assets/`** — Static assets (Figma exports, images)

### Frontend Architecture
- **Framework**: React with TypeScript (no RSC/SSR — client-side only)
- **Bundler**: Vite with HMR in development
- **Routing**: Wouter (lightweight client-side router)
- **State/Data Fetching**: TanStack React Query for server state management
- **Styling**: Tailwind CSS with CSS variables for theming (custom brand colors defined in `index.css`)
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives. Components live in `client/src/components/ui/`. The component configuration is in `components.json` — use this when adding new shadcn components.
- **Forms**: React Hook Form with Zod resolvers (via `@hookform/resolvers`)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Backend Architecture
- **Framework**: Express.js running on Node with TypeScript (via `tsx` in dev, `esbuild` bundle for production)
- **API Convention**: All API routes should be prefixed with `/api`
- **Storage Layer**: Abstracted behind an `IStorage` interface in `server/storage.ts`. Currently uses `MemStorage` (in-memory Map-based storage). This can be swapped to a database-backed implementation.
- **Server Setup**: In development, Vite middleware is integrated into Express for HMR. In production, the Express server serves the static build from `dist/public/`.
- **Build Process**: `vite build` for frontend → `dist/public/`, `esbuild` for server → `dist/index.js`

### Database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Connection**: Uses `@neondatabase/serverless` (Neon Postgres) via `DATABASE_URL` environment variable
- **Schema**: Defined in `shared/schema.ts` using Drizzle's `pgTable` helpers. Currently has a `users` table with `id` (UUID), `username`, and `password` columns.
- **Validation**: Zod schemas generated from Drizzle schemas via `drizzle-zod`
- **Migrations**: Run `npm run db:push` to push schema changes to the database (uses `drizzle-kit push`)
- **Note**: The storage layer currently defaults to in-memory. When connecting to Postgres, create a `DatabaseStorage` class implementing `IStorage` and use `drizzle-orm` with the Neon client.

### Session Management
- **`connect-pg-simple`** is listed as a dependency, indicating PostgreSQL-backed session storage is intended (likely with `express-session`, though not yet wired up).

### Key Design Patterns
- **Shared types**: Database types (`User`, `InsertUser`) and Zod schemas are defined once in `shared/schema.ts` and consumed by both frontend and backend
- **Storage interface**: The `IStorage` interface decouples business logic from data persistence, making it easy to swap between in-memory and database backends
- **API client**: `client/src/lib/queryClient.ts` provides `apiRequest()` for mutations and `getQueryFn()` for queries, both handling credentials and error states consistently

## External Dependencies

### Database
- **PostgreSQL** via **Neon** (`@neondatabase/serverless`) — requires `DATABASE_URL` environment variable

### Key NPM Packages
- **Frontend**: React, Vite, Wouter, TanStack React Query, Tailwind CSS, Radix UI, shadcn/ui components, Embla Carousel, Recharts, React Day Picker, React Hook Form, Zod, Vaul (drawer), cmdk (command palette)
- **Backend**: Express, Drizzle ORM, Drizzle Kit, connect-pg-simple, nanoid
- **Shared**: drizzle-zod, zod

### Fonts (External CDN)
- Google Fonts: Architects Daughter, DM Sans, Fira Code, Geist Mono, Plus Jakarta Sans

### Replit-specific Plugins
- `@replit/vite-plugin-runtime-error-modal` — always active
- `@replit/vite-plugin-cartographer` and `@replit/vite-plugin-dev-banner` — active only in development on Replit