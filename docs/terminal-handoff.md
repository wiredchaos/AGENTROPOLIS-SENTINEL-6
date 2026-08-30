# Terminal Handoff

The chat-built foundation intentionally stops before provider credentials, live MCP registration, deployment, or production authority changes.

## Validate foundation

```bash
git pull
npm install
npm run check
npm run build
node dist/src/cli.js doctor
```

## Next implementation queue

1. Implement repository census adapter for S1 CARTOGRAPHER.
2. Implement invariant loader for S2 CONSERVATOR.
3. Add provider adapters behind `ModelReviewer`; do not couple core logic to one vendor.
4. Bind Hermes orchestration to differentiated reviewer mandates.
5. Implement MCP adapter with explicit identity + mandate + AEGIS policy + tool permission checks.
6. Implement persistent append-only receipt storage.
7. Implement AEGIS transport adapter and Mission Control escalation.
8. Implement S5 pressure harnesses in isolated test/simulation environments.
9. Implement S6 three-sweep closure runner.
10. Add JSON Schema runtime validation for findings/invariants/receipts.
11. Add integration and adversarial tests.
12. Connect the approved Figma design and build the GitHub Pages surface.

## Do not automate by default

- production deployment
- on-chain deployment
- destructive database operations
- credential rotation or exposure
- irreversible migrations
- privilege broadening
- automatic AEGIS risk relaxation

## Provider doctrine

Do not majority-vote model output. Require evidence. Cross-review Critical/High findings using a reviewer different from the proposer. Record provider/model substitutions in receipts.

## Definition of runtime-ready

Runtime-ready requires passing build/typecheck/tests plus a real end-to-end dry run against a non-production repository with evidence receipts, cross-review, AEGIS policy evaluation, blast-radius enumeration, and all three closure sweeps.
