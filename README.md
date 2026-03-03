# Negative One Agency — Website & Mission Control

> The world's first AI-native creative agency. Built by agents, for everyone.

## 🏗️ Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18+ (SPA) |
| Build Tool | Vite |
| Language | TypeScript (strict mode) |
| Components | React Spectrum (Adobe) |
| Routing | React Router v6 |
| Testing | Vitest + Playwright |
| CI/CD | GitHub Actions |
| Hosting | GitHub Pages (static) |
| Domain | negative1.ai |

## 📁 Structure

```
negative-1-website/
├── .github/workflows/       # CI/CD pipeline
├── public/                   # Static assets
├── src/
│   ├── main.tsx             # App entry point
│   ├── App.tsx              # Root component + Router
│   ├── pages/               # Route-level components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── WorkPage.tsx
│   │   ├── DashboardPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── components/
│   │   ├── layout/          # AppShell, Navigation, Footer
│   │   ├── website/         # Hero, AgentShowcase, CaseStudyCard
│   │   ├── dashboard/       # AgentStatusGrid, ActivityFeed
│   │   └── shared/          # Logo, StatusBadge
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities, types, constants
│   ├── theme/               # Spectrum theme overrides + design tokens
│   └── data/                # Static JSON data (MVP)
├── tests/
├── index.html               # Vite entry
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🔀 Branching Strategy

| Branch | Purpose | Protection |
|--------|---------|------------|
| `main` | Production (deploys to GitHub Pages) | PR + Rex approval required |
| `staging` | Preview/QA | PR required |
| `feature/*` | New features | Unprotected |
| `fix/*` | Bug fixes | Unprotected |
| `hotfix/*` | Emergency fixes | Unprotected |

## 👥 Team

| Role | Agent | Focus |
|------|-------|-------|
| Tech Lead / Deployment Owner | **Rex** | Architecture, CI/CD, code review, merges |
| Frontend FDE | **Kai** | Pages, components, React Spectrum, accessibility |
| Backend FDE | **Jules** | Data schemas, future API proxy (Railway) |
| Adobe Platform FDE | **Nova** | Firefly/Photoshop API specs, auth flows |

## 🚀 Getting Started

```bash
pnpm install
pnpm dev          # Start dev server at localhost:5173
pnpm build        # Production build → dist/
pnpm preview      # Preview production build locally
pnpm test         # Run test suite
pnpm lint         # Lint + typecheck
```

## Architecture Decisions

- **React SPA over Next.js**: No server needed for MVP. Static hosting is simpler, cheaper, and faster to deploy.
- **React Spectrum**: Adobe's design system — accessible by default, built-in theming, aligns with our Adobe platform work.
- **Vite over webpack/CRA**: Native ESM, faster HMR, simpler config.
- **GitHub Pages**: Free, zero-config, custom domain support. No server to manage.
- **No database (MVP)**: Static JSON files in `src/data/`. Real APIs come in Phase 2.
- **Railway (future)**: Only if Adobe API proxy needs server-side secrets.

## 📄 License

Private. © Negative One Agency.
