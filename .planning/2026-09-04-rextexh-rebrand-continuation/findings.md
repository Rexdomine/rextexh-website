# Findings & Decisions

## Requirements
- User asked for a proper project continuation using the `planning-with-files` skill.
- The goal is to help future sessions fully understand the RexTexh rebranding project without depending on fragile conversational memory.
- The continuation must be durable, evidence-backed, and grounded in project files plus prior-session recovery.
- User supplied Vercel and Codex/ChatGPT as website references and wants their design, layout, and animation feel translated into RexTexh.
- User explicitly clarified that the site must not feel flat and should include intentional cursor-reactive hero animation gestures: ChatGPT/Codex-like binary/code particles that appear during cursor movement and gracefully dissolve, plus Vercel-like triangle/diagram illumination around the hero visual.
- User explicitly asked that Rex planning-with-files be used so RexTexh project content is not forgotten.
- User approved the first-version website page set as: Home, Services, Learn, About, and Book a Call.

## Research Findings
- The active project is `/opt/data/projects/rextexh-rebrand`.
- `PROJECT_CONTEXT.md` already contained substantial strategy history across positioning, audience, messaging, offers, website architecture, and logo direction.
- Prior-session evidence recovered via `session_search` confirmed that the project had progressed beyond “workspace ready” and had already produced logo and brand-story work.
- The approved no-Hebrew logo direction matches the user re-sent image at `/opt/data/image_cache/img_f2f7920d0834.jpg`.
- The older stored approval-anchor path `/opt/data/image_cache/img_2348e0a312cb.jpg` is currently missing, but that does not invalidate the approval decision itself.
- A surviving exploratory concept image exists at `/opt/data/cache/images/openai_codex_gpt-image-2-medium_20260831_082456_b981e0f0.png`.
- Brand-story deliverables already exist at `/opt/data/deliverables/rextexh-logo-brand-story/exports/rextexh-logo-brand-story.pdf` and `/opt/data/deliverables/rextexh-logo-brand-story/exports/rextexh-logo-brand-story-package.zip`.
- Historical discovery initially found no git repo; subsequently initialized and deployed as Rexdomine/rextexh-website. Do not treat initial no-git result as current state.
- Vercel reference translation: use monochrome precision, generous whitespace, Geist-like typography, shadow-border components, technical diagrams, restrained functional color, and cursor-reactive diagram illumination.
- Codex/ChatGPT reference translation: use soft blue/violet intelligence gradients, floating workflow/interface cards, sequential agent-status storytelling, and cursor-reactive binary/code gestures that appear and decay elegantly.
- RexTexh-specific synthesis: the site should feel like a calm AI implementation operating system, grounded in RexTexh navy/gold crown authority rather than becoming a Vercel or ChatGPT clone.
- First-version IA synthesis: keep the public site lean with five pages; embed proof/work content across core pages initially rather than adding a dedicated Work/Case Studies page too early.

## Technical Decisions
| Decision | Rationale |
|----------|-----------|
| Initialize a fresh plan lane instead of using legacy root planning files | Isolates this continuation pass and makes the active plan explicit |
| Consolidate context into a master brief under `briefs/` | Future sessions need one authoritative recovery document |
| Update stale workspace readmes and context records | Prevents false “not started” recovery paths |
| Keep approved logo direction and asset status separate | Approval validity and file durability are different facts |
| Treat cursor-reactive hero motion as a core design contract, not optional decoration | Rex wants the interaction detail to prevent flatness and make the hero feel alive |
| Keep motion semantically tied to RexTexh implementation work | Particles/glow should express systems, automation, code, and business workflow activation rather than generic tech decoration |
| Use `Book a Call` instead of `Contact` for the primary conversion page | Rex chose `Book a Call`; it supports Calendly-led conversion and direct commercial action |

## Issues Encountered
| Issue | Resolution |
|-------|------------|
| Missing earlier approval anchor file | Re-verified the approved logo from the re-sent image and documented the continuity gap |
| Workspace docs were stale | Updated README, branding README, execution README, and PROJECT_CONTEXT.md |
| Browser click-through blocked by unavailable Chromium harness | Recorded limitation; used page extraction, reference design-system template, and visual analysis of public Vercel/Codex images |

## Resources
- `PROJECT_CONTEXT.md`
- `briefs/rextexh-rebrand-master-brand-context-2026-09-04.md`
- `branding/logo-approved-direction-no-hebrew.md`
- `branding/positioning.md`
- `branding/audience-segmentation.md`
- `branding/messaging-hierarchy.md`
- `branding/offer-architecture.md`
- `branding/website-information-architecture.md`
- `branding/homepage-messaging-and-core-page-copy-framework.md`
- `branding/website-reference-translation-vercel-codex.md`
- `@session:default/20260831_105650_c9a859`
- `@session:default/20260831_080617_e0be94`

## 2026-09-08 — Current truth after rejection and reference recording
- Live homepage v1 is technically deployed but explicitly REJECTED by Rex: generic AI appearance, excessive copy, weak credibility and missing approved logo. This supersedes earlier premium/complete language. No rebuild has begun.
- Exact references: https://vercel.com and https://openai.com/codex/ (not the older chatgpt.com route).
- Chromium 151.0.7922.34 works via explicit path `/opt/hermes/.playwright/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell`. Playwright 1.55 expects an older revision; installer failed EACCES creating __dirlock. Do not claim new installation or repeat blind downloads.
- Rendered desktop/mobile audit: at 1440×900 hero height 1306.875px and H1 height 733.75px; at 390×900 hero height 1461px and document height 13924px; mobile header nav/CTA hidden, diagram side panels obscured, hero still active after 5.5 seconds idle. No document horizontal overflow at tested widths.
- Vercel typography/header/proof inspected, but illustrations partly failed. Codex live browser returned HTTP 403; user recording resolves desktop visual gap instead. Mobile/reference interaction timing remains unverified.
- Recording: Drive file `1yXD7DVwg4tLcIaO9B9fUKiNsd5qa9AcU`; original `/opt/data/deliverables/codex-recording/source`, 30.811459s, 2880×1800. Reviewed sequential 1fps sheets, full-resolution hero and first four seconds at 4fps; audio not reviewed.
- Corrected design: clean does NOT mean colorless/static. Codex has an atmospheric gradient scene, concise centered identity/action, subtle transient ASCII clusters, a substantial meaningful UI preview, alternating dark feature sections, evidence and a spacious final CTA. Avoid repetitive glass cards and fictional RexTexh OS.
- Preserve real crown/wordmark, plain business positioning, no homepage founder bridge, five-page v1 scope and required movement/proximity/idle/reduced-motion behavior. Do not copy reference logos/claims/testimonials.
- Approved copy baseline is preserved; shorter presentation/copy needs review, not silent replacement.
- Earlier approval image `/opt/data/image_cache/img_f2f7920d0834.jpg` is now missing; recover original before rebuilding. Documented approval remains valid, missing asset is not permission to improvise.
- Repo-local evidence: `branding/homepage-v1-failure-audit.md`, `branding/homepage-v1-rendered-findings.md`, `branding/website-reference-restudy.md`, `branding/codex-recording-reference-findings.md`. Screenshots/recording remain in their linked deliverable directories; large media not copied into repo.

## Rebuild authorization and logo recovery
Rex explicitly authorized ground-up homepage rebuild following the reference study. Approved cropped logo survives at /opt/data/deliverables/rextexh-logo-brand-story/assets/approved-logo-cropped.jpg despite missing image-cache anchor. Visually verified and converted via ffmpeg to public/brand/rextexh-logo.png, dimensions 1441×323. No identity redesign.
