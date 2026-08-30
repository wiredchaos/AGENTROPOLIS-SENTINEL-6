# Closure Protocol

An empty finding queue is not proof of completion.

## Required final sweeps

### Sweep A — Entry points
Walk every executable entry point in the system census. Ask what a user, attacker, agent, worker, webhook, scheduler, operator, or external provider can cause from that surface.

### Sweep B — State and invariants
Walk every important persistent model and privileged state transition. Verify authorization, valid source/destination states, duplicate behavior, concurrency, replay, ordering, partial failure, restart, and reconciliation.

### Sweep C — Changed symbols and consumers
Walk the full audit diff. For every changed symbol enumerate all callers, producers, consumers, serializers, deserializers, workers, tests, migrations, and external clients.

## Negative evidence
`grep found nothing` is not sufficient evidence of absence.

A valid absence claim identifies the search space and how it was exhausted. Example: repository symbol search returned four references; all four were opened and inspected.

## Closure gates
The Commander may emit `AUDIT CLOSED` only when all are true:

1. Finding queue is empty.
2. Every Critical and High finding has resolution evidence or a concrete external blocker.
3. Every Critical/High patch passed adversarial review.
4. Every changed identifier received complete consumer enumeration.
5. Sweep A returns zero new findings.
6. Sweep B returns zero new findings.
7. Sweep C returns zero new findings.
8. The census has zero unexplained surfaces.
9. Build/typecheck/tests contain zero newly introduced failures.
10. The authority corridor passes.
11. Receipt integrity passes.

Final state:

```text
FINAL SWEEP: ZERO NEW FINDINGS
COVERAGE GAPS: ZERO
INTRODUCED FAILURES: ZERO
AUDIT STATUS: CLOSED
```

If a surface cannot be verified, closure must report the exact blocker. Unknown is not pass.