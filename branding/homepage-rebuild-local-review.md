# Homepage rebuild — local review candidate

Ground-up replacement implemented locally. Real approved crown/wordmark recovered; atmospheric centered hero with candidate headline “Better work. Built with AI.”; explicitly illustrative reporting workflow; three editorial service rows; compact approach and learning sections. No invented testimonials or client outcomes. Original approved copy file untouched; rendered copy is shortened for this review candidate, not newly claimed approved copy.

## Verification
- npm run verify: 4 tests pass, ESLint passes, Next production build passes.
- Chromium production render at 1440×900, 768×900, 390×900.
- No document horizontal overflow, broken hash destinations or decoded image failures at tested sizes; no pageerror events.
- Hero CTA block ends at y=552.6875 desktop and y=498.859375 mobile, within first viewport.
- Mobile menu opens, follows link, closes. Pointer particles emitted; after idle they clear and light deactivates; exit clears; reduced-motion emits none.
- Final mobile screenshot review: workflow labels readable, no meaningful overlaps/clipping.
- Diagram proximity border uses element-local pointer coordinates; reduced motion disables overlay.

## Not release-ready
Booking destination is missing from project records. Asked Rex for Calendly; no actual booking URL received. Conversion section honestly states pending rather than providing an invented address or fake successful booking. Candidate needs Rex visual/copy review and booking configuration before release. No push/commit/deployment performed; public alias still serves rejected v1.

## Evidence
/opt/data/deliverables/rextexh-rebuild/home-1440.png
/opt/data/deliverables/rextexh-rebuild/home-390-full.png
/opt/data/deliverables/rextexh-rebuild/verified-results.json
Runner: /opt/data/deliverables/rextexh-rebuild-verify.cjs
Local production preview: http://127.0.0.1:3031 (not a public link).
