# Task Plan: RexTexh Rebrand Continuation

## Goal
Consolidate and preserve the RexTexh rebrand direction in durable file-based planning artifacts so future sessions can resume with full verified context, including the Vercel/Codex-inspired website direction and Rex's intentional cursor-reactive motion requirements.

## Next Step
Development workspace preparation is complete. Next step: when Rex authorizes implementation, create the actual website app scaffold and build the homepage from `branding/homepage-copy-approved-baseline.md` plus the locked Vercel/Codex motion brief.

## Current Phase
Phase 9

## Phases

### Phase 1: Discovery Recovery
- [x] Identify the active RexTexh workspace and source-of-truth files
- [x] Verify whether planning files already existed
- [x] Recover prior-session evidence relevant to the rebrand
- [x] Document findings in durable artifacts
- **Status:** complete

### Phase 2: Strategy Corpus Audit
- [x] Read the current project context and key branding documents
- [x] Distinguish locked decisions from open questions
- [x] Verify the approved logo direction from current artifact evidence
- **Status:** complete

### Phase 3: Continuity Normalization
- [x] Correct stale workspace statements that still said the project had not started
- [x] Record the missing older anchor path versus the newly verified approved image
- [x] Update `PROJECT_CONTEXT.md` with the recovered state
- **Status:** complete

### Phase 4: Master Continuation Brief
- [x] Create a single founder-ready master context brief consolidating strategy and logo status
- [x] Record existing deliverable evidence and open gaps
- [x] Point future sessions to the correct continuation artifacts
- **Status:** complete

### Phase 5: Handoff and Next-Lane Readiness
- [x] Initialize and maintain `planning-with-files` artifacts
- [x] Record what was done in `progress.md`
- [x] Prepare a concise user-facing continuity handoff
- **Status:** complete

### Phase 6: Website Reference and Motion Direction Lock
- [x] Capture Vercel and Codex as website design references
- [x] Translate reference grammar into RexTexh-specific website direction
- [x] Record cursor-reactive hero motion requirements inspired by ChatGPT/Codex binary/code gestures and Vercel triangle illumination
- [x] Confirm Rex planning-with-files remains the active continuity method for the project
- **Status:** complete

### Phase 7: First-Version Page Set Alignment
- [x] Align with Rex on first-version website pages
- [x] Lock pages as Home, Services, Learn, About, and Book a Call
- [x] Defer dedicated Proof/Work/Case Studies page until stronger proof inventory exists
- [x] Record page-set decision in project context, website IA, findings, and progress
- **Status:** complete

### Phase 8: Homepage Copy Baseline
- [x] Read current homepage messaging, IA, and Vercel/Codex reference direction
- [x] Draft first homepage copy for review
- [x] Save draft at `branding/homepage-draft-copy-v1.md`
- [x] Remove Founder / Brand Bridge section per Rex feedback
- [x] Assess whether average AI-aware visitors would understand and want to book
- [x] Revise draft for clearer average-visitor examples and booking motivation
- [x] Promote v2 to approved homepage copy baseline at `branding/homepage-copy-approved-baseline.md`
- **Status:** complete

### Phase 9: Repository and Vercel Workspace Preparation
- [x] Discover local git/auth/tooling state
- [x] Create or reuse public GitHub repository for RexTexh website development
- [x] Push current workspace as the initial baseline
- [x] Create/link default Vercel project if authenticated credentials are available
- [x] Read back GitHub/Vercel state and record verification
- **Status:** complete

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| Use a dedicated `.planning/2026-09-04-rextexh-rebrand-continuation/` lane | Gives the project a durable continuation path instead of relying on expired session memory |
| Create a master continuation brief in `briefs/` | The project context and branding notes were strong but scattered across many files |
| Update stale README and branding status files | Earlier “not started” language was no longer accurate and would mislead future recovery |
| Preserve the missing old anchor path as historical evidence instead of deleting it | Distinguishes continuity defects from changes in the actual approval decision |
| Use Rex planning-with-files for RexTexh continuation | Rex explicitly asked that project content not be forgotten and that Rex plan-with-files govern continuity |
| Lock intentional cursor-reactive hero motion as a design requirement | Rex does not want a flat site; hero interaction should feel detailed, purposeful, and comparable in refinement to ChatGPT/Codex and Vercel |
| Lock first-version site pages as Home, Services, Learn, About, and Book a Call | Keeps the site focused while making conversion more direct than a generic Contact page |
| Defer Work/Proof/Case Studies as a standalone page | Current proof inventory should be embedded across core pages first, then expanded when enough strong evidence exists |
| Treat `homepage-draft-copy-v1.md` as review draft, not final copy | Rex asked to see a draft; approval/revision is still required before design implementation |
| Remove Founder / Brand Bridge from homepage | Rex said the homepage does not need that section; About can carry deeper founder/brand relationship content |
| Add average-visitor clarity layer before final copy | Current copy is strategically sound but still too abstract for a non-technical business visitor |
| Lock `homepage-copy-approved-baseline.md` as the homepage copy source | Rex explicitly approved the revised v2 homepage copy |
| Limit current pass to workspace preparation only | Rex explicitly said no page building yet |

## External Setup Boundary Map
| Boundary | Initiator | Authoritative State | Independent Success / Risk | Read-back Proof |
|----------|-----------|---------------------|----------------------------|-----------------|
| Local workspace → Git | Groot CLI | Local repo history and tracked files | Commit can succeed before remote exists | `git status`, `git log`, `git remote -v` |
| GitHub CLI/API → GitHub repo | Groot via authenticated `gh` | GitHub repository metadata, visibility, remote URL | Repo creation can succeed even if push fails | `gh repo view`, public repo metadata |
| Git push → GitHub branch | Groot via git HTTPS credentials | Remote `main` branch head | Push can fail after local commit | `git ls-remote`, `gh repo view` |
| Vercel CLI/API → Vercel project | Groot via Vercel auth/token if available | Vercel project and Git link | Vercel project can exist even if deploy/build not triggered | `vercel project ls/inspect` or CLI output |

## Workspace Prep Verification
| Check | Result |
|-------|--------|
| GitHub repo | `https://github.com/Rexdomine/rextexh-website` |
| Visibility | Public |
| Default branch | `main` |
| Remote HEAD | Verified with `git ls-remote --heads origin main` during closeout |
| Vercel project | `rexdomines-projects/rextexh-website` |
| Vercel Git link | GitHub `Rexdomine/rextexh-website`, production branch `main` |
| Scope guard | No website pages scaffolded or built; no deployment command run |

## Errors Encountered
| Error | Resolution |
|-------|------------|
| Earlier approval-anchor image path `/opt/data/image_cache/img_2348e0a312cb.jpg` was missing | Verified the re-sent approved logo image at `/opt/data/image_cache/img_f2f7920d0834.jpg` and recorded both states in context |
| Early workspace docs still claimed the project had not started | Normalized README/context files to reflect the real strategic work already completed |
| Browser click-through unavailable for reference review because Chromium was not running in the browser harness | Used page extraction, design-system template, and visual analysis of public reference imagery; recorded limitation in the reference brief |
