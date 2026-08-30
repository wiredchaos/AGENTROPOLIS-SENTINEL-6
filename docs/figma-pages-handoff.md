# Figma → GitHub Pages Handoff

The public SENTINEL-6 surface should use the AGENTROPOLIS visual system rather than inventing a separate security-product identity.

## Visual canon
- Base: obsidian / near-black
- Primary signal: red
- Secondary signal: cyan
- Supporting accents only when meaningful: lime, hot pink, purple
- Tone: cyber-noir command infrastructure
- Priority: legibility before spectacle

## Information architecture

### Hero
`SENTINEL-6`

**Adversarial assurance for autonomous systems.**

Support line: `One orchestrator. Multiple independent auditors. One evidence ledger. One closure authority.`

Primary status objects:
- COMMANDER
- 6 ENGINES
- EVIDENCE LEDGER
- CLOSURE STATE

### Engine grid
Six interactive cards:
1. CARTOGRAPHER — Map the surface.
2. CONSERVATOR — Prove the invariants.
3. BREAKER — Falsify assumptions.
4. LEDGER — Protect authority and value.
5. PRESSURE — Force failure safely.
6. CLOSURE — Audit the audit.

### Live audit flow
Visualize:
`DISCOVER → MODEL → AUDIT → TRIAGE → REVERIFY → PATCH → TEST → BLAST RADIUS → ADVERSARIAL → COMMIT → REAUDIT → CLOSURE`

### Authority corridor
Visualize:
`Identity → Mandate → Policy → Tool Permission → Execution → Pressure → Receipt → Audit`

Pressure must visually appear as a test/challenge stage, never as an authority-granting stage.

### Multi-model mesh
Show Hermes as COMMANDER/ROUTER, not as omniscient truth. Model nodes are interchangeable reviewers/instruments. Suggested role labels:
- CODE
- BREAK
- INVARIANT
- TRUST
- PRESSURE
- CLOSURE

Avoid hard-coding vendor/model logos into the architecture. Vendor badges may be displayed as adapters/providers separately.

### Evidence panel
Example finding card should display:
- severity
- confidence
- exposure
- triggerability
- file/symbol
- violated invariant
- evidence state
- adversarial result
- commit

### Closure panel
Prominent terminal-style final state:
`FINAL SWEEP: ZERO NEW FINDINGS`
`COVERAGE GAPS: ZERO`
`INTRODUCED FAILURES: ZERO`
`AUDIT STATUS: CLOSED`

## Interaction
- Desktop: hover engine → role summary; click → detail drawer/panel.
- Mobile: tap engine → same detail content; no hover-only information.
- Respect reduced-motion preference.
- Keyboard-visible focus and semantic controls.
- Do not encode severity/status by color alone.

## Pages implementation target
Keep the eventual Pages build static-first and portable. Figma is the visual source; repo architecture/contracts are the semantic source. The website must not become the source of truth for Sentinel policy.

Suggested Pages paths:
- `/` — command overview
- `/architecture/` — system map
- `/engines/` — six engines
- `/protocol/` — audit/closure protocol
- `/evidence/` — schemas and receipts
- `/integrations/` — Hermes/MCP/GitHub adapters

## Figma handoff checklist
Before implementation, capture:
- frame names and dimensions
- component/variant names
- typography tokens
- spacing/radius tokens
- color variables
- icon assets
- responsive behavior
- interaction states
- reduced-motion behavior

Implementation should translate Figma components into reusable web components rather than screenshotting frames.