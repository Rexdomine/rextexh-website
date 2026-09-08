# RexTexh Website Workspace

Public development workspace for the RexTexh website and rebrand materials.

## Current state

- Homepage implemented as the first page
- Approved homepage copy baseline: `branding/homepage-copy-approved-baseline.md`
- Core strategy work preserved across positioning, audience, messaging, offers, website architecture, and logo direction
- Approved logo direction locked as crown-left / `RexTexh` wordmark-right / no Hebrew
- GitHub repo: <https://github.com/Rexdomine/rextexh-website>
- Vercel project: `rexdomines-projects/rextexh-website`
- Public URL: <https://rextexh-website.vercel.app>

## Implemented page

- `/` — RexTexh homepage

The first homepage implementation includes:

- approved average-visitor copy
- premium RexTexh navy/charcoal/gold visual direction
- Vercel/Codex-inspired technical layout language
- cursor-reactive hero motion hooks
- binary/code particles
- Assess / Build / Automate / Improve hero system diagram
- reduced-motion CSS fallback
- responsive section layouts

## Workspace structure

- `app/` — Next.js app implementation
- `tests/` — Node contract tests for copy, scope, and app setup
- `PROJECT_CONTEXT.md` — durable project source of truth
- `.planning/` — active Rex planning-with-files lane
- `notes/intake.md` — raw intake notes from Rex
- `briefs/` — source briefs and structured requirement docs
- `research/` — market, audience, positioning, and competitor research
- `branding/` — naming, messaging, identity, copy, and visual direction work
- `execution/` — implementation plans, deliverables, and rollout tracking

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm test
npm run lint
npm run build
npm audit --audit-level=high
```

Full local gate:

```bash
npm run verify
```

## Working rule

Use `PROJECT_CONTEXT.md` plus the active `.planning/` lane as the first recovery points before any future continuation work.

Do not drift from the approved homepage copy, locked first-version page set, approved logo direction, or Vercel/Codex-inspired RexTexh motion brief unless Rex explicitly supersedes them.
