# RexTexh homepage v1 — failure audit

## Verdict and scope
The implementation failed the approved design brief. Technical delivery succeeded; visual, brand, editorial, interaction, and credibility acceptance did not. Audit only: no app edits, rebuild, commit, push, or deployment.

Evidence: live HTML at https://rextexh-website.vercel.app; app/page.tsx; app/globals.css; tests/homepage-contract.test.mjs; PROJECT_CONTEXT.md; branding/website-reference-translation-vercel-codex.md; fresh text extraction of Vercel and ChatGPT Codex.

Limitations: Playwright still cannot launch because its headless-shell executable is missing. This is a source/live-HTML/brief audit, not a newly completed visual screenshot review. Exact rendered overlaps and line wrapping are not asserted as observed. The stored approved logo image /opt/data/image_cache/img_f2f7920d0834.jpg is also missing; its documented architecture survives. Recover the original asset before rebuilding, rather than inventing a replacement.

## 1. Brand substitution — critical
page.tsx:104–107 and 299 replace the approved crown-left / wordmark-right logo with a Unicode diamond (◆) and plain text. The CSS name crown-glyph does not make this a crown. PROJECT_CONTEXT.md:44 explicitly prohibits drift; lines 156–165 describe the gold diamond, central negative space and double-base crown. Lack of a production vector was a prerequisite to resolve, not permission to substitute.

## 2. Reference translation became a generic decorative template — critical
The brief asks for restraint, precise grids, quiet cards, limited accents and an iconic system visual. Instead globals.css builds a floating pill header, a giant rounded hero container, broad shadows, layered gradients, translucent cards and rounded boxes throughout. Card radii of 28px and hero radius of 42px depart from the brief's 8–14px component guidance. The problem is the accumulation of effects, not any one effect being inherently wrong.

Root cause: I treated “premium” as an inventory of CSS effects instead of a disciplined composition.

## 3. Copy was transferred, not edited into a web experience — critical
Live HTML contains 9 sections, 24 article elements and approximately 1,374 regex-delimited text tokens, including navigation/footer and labels (not a precise editorial word count). Problem cards, process cards, capability rows, principles, audience pathways and learning cards repeat closely related promises. Capabilities each carry a title, description, examples and outcome.

Approved copy is a messaging baseline, not evidence that all copy should be displayed at equal weight. I should have surfaced the density conflict before implementation and proposed a shorter hierarchy for approval. The user should not be blamed for approving the underlying messaging.

## 4. Typography and composition were not fitted together — high
The long approved headline was put into a two-column hero beside a minimum-420px visual. The H1 uses clamp(3.1rem, 7vw, 6.8rem), line-height .91 and tracking -.075em. That is an aggressive display treatment in constrained space, not deliberate editorial fitting. Exact line breaks need a browser; they were never verified. Inter is named in CSS but not loaded by the app layout, leaving platform fallback typography.

## 5. Decorative UI replaced evidence — high
“RexTexh OS”, status chips and a mock engagement console illustrate activity but do not show a working business output. The Why RexTexh section contains principles, not proof of delivered work. Fresh reference extraction shows Vercel pairing capabilities with named usage evidence and Codex with product-specific explanations and attributed testimonials. RexTexh must use genuine, permissioned work or explicitly labeled demonstrations—not invented testimonials, client metrics or a fictional product presented as proof.

The phrase “calm AI implementation operating system” was an internal design metaphor; literalizing it as “RexTexh OS” risks misrepresenting the offering.

## 6. Requested motion was not implemented faithfully — high
page.tsx:90–99 sets active=true on movement and false only on pointer leave. There is no idle timer: stopping the cursor inside the hero never resets active. globals.css:281–298 positions a fixed set of particles and gives them infinite drift animation. These are not short-lived particles emitted by cursor motion. Ring illumination is a global active-state toggle, not distance-based edge illumination. Hero-wide percentages are reused inside the smaller visual, so coordinate mapping is not element-local. Reduced-motion CSS exists, but pointer-driven updates remain.

## 7. Navigation and conversion are incomplete — high
Below 980px navigation is hidden with no replacement menu; below 620px the header CTA also disappears. Live HTML contains a broken #about footer destination. Explore Learn inside Learn points back to itself. Book a Call ultimately opens mailto:hello@rextexh.com, rather than the Calendly direction recorded in project context. Mailbox validity and the intended booking destination were not verified. Homepage-only scope did not justify misleading or dead-end interactions.

## 8. QA checked implementation tokens instead of user outcomes — critical
The contract tests check source strings, labels and CSS markers. The motion test can pass merely because the file contains onPointerMove and particle-like text. They do not test idle decay, logo fidelity, legibility, real navigation, mobile behavior or visual resemblance. Build/lint/audit checks are necessary engineering checks, not design acceptance.

I proceeded despite the missing browser and called the result premium and responsive without rendered proof. The plan was marked complete with browser QA still unchecked. Disclosure of the limitation did not make the design accepted.

## 9. Continuity documents recorded decisions without enforcing them — medium
PROJECT_CONTEXT.md still begins with pre-implementation status and unknown stack while later entries record a deployed homepage. The brand and motion rules existed, but were not turned into acceptance gates. More documentation alone is not the solution; current-state consistency and enforced checks are.

## Root cause
I optimized for a deployed page containing approved text and familiar AI-site effects, rather than a reference-led, brand-faithful, visually verified experience. The workflow prioritized implementation completeness over editorial judgment and design evidence.

## Gates before a rebuild
1. Recover and inspect the exact approved logo asset; request the original if unavailable. No improvised symbol.
2. Obtain functioning rendered-browser inspection and capture the references at matched desktop/mobile widths.
3. Agree a reduced homepage information hierarchy and shorter copy before changing the approved baseline.
4. Approve a static first-screen composition using the real logo before coding the entire page.
5. Select genuine evidence or a clearly labeled illustrative workflow that shows an understandable output.
6. Define motion acceptance: movement response, local proximity, stop-to-idle decay, pointer exit, touch and reduced-motion behavior.
7. Confirm actual booking and navigation destinations; no invented contact route.
8. Verify full-page desktop/mobile renders and interactions before requesting deployment approval. No premium/complete claims based solely on build success.

Reusable: repo, deployment connection and basic app scaffold, plus underlying business positioning. Not reusable as an approved visual baseline: the current homepage composition, decorative system, placeholder logo, content density or motion implementation.
