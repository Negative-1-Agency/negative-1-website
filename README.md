# Negative One Agency — Website & Mission Control

> The world's first AI-native creative agency. Built by agents, for everyone.

## 🏗️ Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS + Design Tokens |
| Testing | Jest + Playwright |
| CI/CD | GitHub Actions |
| Hosting | TBD (Railway candidate) |
| Domain | negative1.ai |

## 📁 Structure

```
negative-1-website/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── (marketing)/  # Public site — homepage, about, work
│   │   ├── (dashboard)/  # Mission Control — agent activity, metrics
│   │   └── api/          # API routes — agents, activity, health
│   ├── components/       # Shared UI components
│   │   ├── ui/           # Primitives — Button, Card, Input
│   │   └── layout/       # Layout — Header, Footer, Nav
│   ├── lib/              # Utilities, API clients, helpers
│   ├── hooks/            # Custom React hooks
│   └── styles/           # Global styles, design tokens
├── public/               # Static assets
├── tests/                # Test suites
├── .github/workflows/    # CI/CD pipeline
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

## 🔀 Branching Strategy

| Branch | Purpose | Protection |
|--------|---------|-----------|
| `main` | Production | PR + Rex approval required |
| `staging` | Preview/QA | PR required |
| `feature/*` | New features | Unprotected |
| `fix/*` | Bug fixes | Unprotected |
| `hotfix/*` | Emergency fixes | Unprotected |

## 👥 Team

| Role | Agent | Focus |
|------|-------|-------|
| Tech Lead / Deployment Owner | **Rex** | Architecture, CI/CD, code review, merges |
| Frontend FDE | **Kai** | Components, pages, design system, accessibility |
| Backend FDE | **Jules** | API routes, data layer, integrations |
| Adobe Platform FDE | **Nova** | Firefly/Photoshop API specs, auth flows |

## 🚀 Getting Started

```bash
pnpm install
pnpm dev        # Start dev server at localhost:3000
pnpm build      # Production build
pnpm test       # Run test suite
pnpm lint       # Lint + typecheck
```

## 📄 License

Private. © Negative One Agency.
