# AGENTROPOLIS-SENTINEL-6

**Multi-model adversarial assurance for the AGENTROPOLIS Intelligence Grid.**

SENTINEL-6 audits code, agents, MCPs, authority boundaries, invariants, custody, pressure, recovery, information diversity, future capability, emergent coordination, and audit closure. Hermes coordinates, multiple models challenge one another, and evidence—not model confidence—determines what survives.

## Core principles

> One orchestrator. Multiple independent auditors. One evidence ledger. One closure authority.

> Do not rely on current model incompetence as a security boundary.

SENTINEL-6 does not try to make software look correct. It attempts to falsify correctness across current and bounded future capability envelopes until defined closure gates stop producing evidence-backed findings.

## Future Capability Envelope

Agentic assurance cannot certify only what a model can exploit today. Model, memory, context, tool, MCP, network, and orchestration upgrades can make an existing authority path newly exploitable without changing application source code.

SENTINEL therefore records capability assumptions and classifies exposure separately from severity:

- **ACTIVE** — exploitable with current observed capabilities.
- **LATENT** — path exists but current agents do not reliably execute it.
- **CAPABILITY-TRIGGERED** — becomes materially exploitable when a capability threshold changes.
- **STRUCTURAL** — unsafe independent of model generation.

Canonical invariant:

> No composition of individually permitted actions may create authority, persistence, coordination, or external reach beyond the original mandate, including under plausible capability upgrades.

S5 PRESSURE includes **future-capability pressure** and **emergent-coordination pressure**. Shared files, caches, package artifacts, queues, logs, test outputs, databases, object storage, MCP responses, CI metadata, and other ordinary resources must be tested as potential unauthorized coordination channels.

SENTINEL also protects the assurance plane itself: the evaluated system must not be able to control, rewrite, suppress, impersonate, or silently influence the evidence, grader, reviewer mandate, policy authority, or closure mechanism used to evaluate it.

See `docs/future-capability-envelope.md`.

## Information diversity: Shannon layer

SENTINEL-6 treats reviewer diversity as something to measure rather than assume. It can record Shannon contribution entropy, normalized entropy, effective reviewer count, mutual information, conditional entropy, and information gain.

The goal is not to maximize disagreement. It is to detect when a supposedly diverse reviewer ensemble is informationally redundant and request a materially different cognitive lens, model family, toolset, or attack strategy.

> Do not count agents. Measure whether they contribute new information.

Entropy is diagnostic evidence, not a closure oracle. It cannot independently confirm findings, change severity, grant authority, relax AEGIS posture, or close an audit.

See `docs/information-diversity.md`.

## Relationship to AEGIS

SENTINEL-6 and AEGIS are governance peers with different responsibilities.

- **AEGIS** defines policy, acceptable risk, quarantine, restriction, and human-approval requirements.
- **SENTINEL-6** pressure-tests whether code, agents, MCPs, state transitions, receipts, and authority boundaries actually obey those rules under current and bounded future capability.
- **Audit Ledger** records evidence and receipts.
- **Mission Control** remains the human escalation and exception authority.

Canonical loop:

```text
Identity -> Mandate -> AEGIS Policy -> Tool Permission -> Execution -> SENTINEL Pressure -> Receipt -> Audit Ledger -> AEGIS Risk Update
```

> AEGIS governs what should happen. SENTINEL-6 proves what actually happens.

AEGIS may consume SENTINEL evidence and tighten risk posture, but it may not rewrite or suppress SENTINEL evidence. SENTINEL cannot grant authority.

## The six engines

| Engine | Responsibility |
|---|---|
| **S1 CARTOGRAPHER** | Census every executable surface and trust boundary. |
| **S2 CONSERVATOR** | Define and verify system invariants. |
| **S3 BREAKER** | Adversarially attack assumptions, fixes, and authority boundaries. |
| **S4 LEDGER** | Verify custody, accounting, permissions, signatures, and irreversible state. |
| **S5 PRESSURE** | Apply temporal, concurrency, authority, context, state, economic, scale, adversarial, emergent-coordination, and future-capability pressure. |
| **S6 CLOSURE** | Audit the audit, enforce coverage, inspect information diversity, future-capability assumptions, assurance-plane independence, and control the stop condition. |

Above them sits **SENTINEL COMMANDER**. Hermes is the preferred commander runtime, but no Tier-1 LLM is the source of truth.

## Multi-model doctrine

Different models receive differentiated mandates and cognitive lenses rather than copies of the same generic prompt. A finding is not accepted because several models agree. It is accepted because executable evidence supports it and adversarial review fails to falsify it.

Static analyzers, test runners, MCP tools, hosted models, and local models are evidence-producing instruments alongside LLMs.

## Closure

SENTINEL cannot report CLOSED merely because current-capability tests pass. Closure requires the entry-point, state/invariant, changed-consumer, and future-capability sweeps; zero unexplained census gaps; zero introduced failures; authority-corridor integrity; receipt integrity; AEGIS policy consistency; and assurance-plane independence.

Future-capability assurance is bounded, not prophetic. Every assurance claim records its capability assumptions so a future model/tool/MCP/permission upgrade can invalidate and re-run affected claims.

## Hard boundaries

SENTINEL-6 does not autonomously deploy on-chain code, create production infrastructure, expose secrets, delete production data, broaden privileges, or perform irreversible production migrations. Those items are surfaced with evidence and deferred to Mission Control.

## Status

**Foundation/runtime scaffold phase.** Core contracts, TypeScript runtime primitives, evidence schemas, information-diversity metrics, future-capability primitives, closure rules, Hermes/MCP orchestration model, AEGIS governance contract, and Figma-to-Pages handoff are being established before production integration.

## License

Apache-2.0
