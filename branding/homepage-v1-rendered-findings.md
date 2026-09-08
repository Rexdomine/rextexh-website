# RexTexh v1 — rendered audit addendum

Chromium successfully launched via Playwright with an explicit executable path:
`/opt/hermes/.playwright/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell`

Verified browser version: 151.0.7922.34. Existing Playwright 1.55.0 expects revision 1187; installed headless Chromium is revision 1234. The background installer eventually failed with EACCES creating /opt/hermes/.playwright/__dirlock. No new install is claimed: the existing binary is now proven usable with the explicit path. The audit script records that path and can be rerun without changing project dependencies.

## Confirmed rendered defects
- At 1440×900, hero height is 1306.875px. H1 alone is 733.75px tall in a 526.3125px-wide column. It starts at y=261 and extends below the initial viewport; the supporting description and hero actions are therefore not in that first view. The header CTA remains visible. This is actual viewport composition, not a claim of document clipping.
- At 390×900, hero height is 1461px and whole document height is 13924px. Header navigation and header CTA both compute to display:none. No replacement menu exists in source.
- Central workflow panel intersects the left and right workflow labels at both widths. Focused mobile screenshot confirms side panels are obscured by the foreground panel; main status pills remain readable. This harms the diagram's meaning rather than merely adding depth.
- After pointer movement and 5.5 seconds without movement, hero is-active remains true at both widths. Required stop-to-idle behavior fails in actual Chromium execution.
- Document scrollWidth equals viewport width at both tested sizes. No horizontal document overflow was measured; this does not excuse internal collisions.
- Desktop document height is 8362px. Combined with repeated article blocks from the earlier audit, this supports the density diagnosis; length alone is not a universal design failure.

## Reference verification limit
Vercel desktop capture timed out; mobile rendered a Vercel Security Checkpoint. ChatGPT Codex rendered a Just a moment challenge at both widths. Those screenshots are challenge pages, NOT design references. A fresh matched-viewport visual comparison is still blocked by provider access controls, not by missing Chromium. The earlier textual/reference-brief comparison remains valid within its stated limits.

## Evidence
- results.json: viewport geometry and idle test results.
- rextexh-1440.png and rextexh-390.png: initial viewport screenshots.
- rextexh-1440-full.png and rextexh-390-full.png: full-page captures.
- rextexh-1440-diagram.png and rextexh-390-diagram.png: focused workflow captures.
- Runner: /opt/data/deliverables/rextexh-browser-audit.cjs

No homepage source changes, git commits, pushes or deployments were performed.
