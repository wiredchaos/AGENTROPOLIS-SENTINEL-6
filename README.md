# AGENTROPOLIS-SENTINEL-6

**Multi-model adversarial assurance for the AGENTROPOLIS Intelligence Grid.**

SENTINEL-6 audits code, agents, MCPs, authority boundaries, invariants, custody, pressure, recovery, information diversity, and audit closure. It is model-agnostic: Hermes coordinates, multiple models challenge one another, and evidence—not model confidence—determines what survives.

## Core principle

> One orchestrator. Multiple independent auditors. One evidence ledger. One closure authority.

SENTINEL-6 does not try to make software look correct. It attempts to falsify correctness until the defined closure gates stop producing new evidence-backed findings.

## Information diversity: Shannon layer

SENTINEL-6 now treats reviewer diversity as something to measure rather than assume.

For reviewer contribution probabilities `p_i`, Shannon entropy is:

`H = - sum_i p_i log2(p_i)`

The information-diversity layer records:

- Shannon contribution entropy in bits
- normalized entropy
- effective reviewer count (`2^H`)
- mutual information between aligned reviewer outcomes
- conditional entropy
- information gain

The goal is not to maximize disagreement. The goal is to detect when a supposedly diverse reviewer ensemble is informationally redundant and to recommend a materially different cognitive lens, model family, toolset, or attack strategy.

> Do not count agents. Measure whether they contribute new information.

Entropy is diagnostic evidence, **not a closure oracle**. Low information gain may mean saturation or a shared blind spot; high entropy may mean useful diversity or noise. Shannon metrics cannot independently confirm findings, change severity, grant authority, relax AEGIS posture, or close an audit.

Reviewer cognitive lenses may include hyperfocus/depth, system-pattern synthesis, literal/ambiguity sensitivity, divergent novel-path exploration, uncertainty/evidence demand, and load/loop/retry/drift/state-collapse sensitivity. These are engineering lenses, not clinical diagnoses, and never change permissions or authority.

See `docs/information-diversity.md`.

## Relationship to AEGIS

SENTINEL-6 and AEGIS are governance peers with different responsibilities.

- **AEGIS** defines policy, acceptable risk, quarantine, restriction, and human-approval requirements.
- **SENTINEL-6** pressure-tests whether code, agents, MCPs, state transitions, receipts, and authority boundaries actually obey those rules.
- **Audit Ledger** records evidence and receipts.
- **Mission Control** remains the human escalation and exception authority.

Canonical loop:

```text
Identity -> Mandate -> AEGIS Policy -> Tool Permission -> Execution -> SENTINEL Pressure -> Receipt -> Audit Ledger -> AEGIS Risk Update
```

SENTINEL-6 must remain separately auditable from AEGIS. AEGIS may consume SENTINEL evidence and change risk posture, but it may not rewrite or suppress SENTINEL evidence to make policy appear satisfied.

> AEGIS governs what should happen. SENTINEL-6 proves what actually happens.

## The six engines

| Engine | Responsibility |
|---|---|
| **S1 CARTOGRAPHER** | Census every executable surface and trust boundary. |
| **S2 CONSERVATOR** | Define and verify system invariants. |
| **S3 BREAKER** | Adversarially attack assumptions, fixes, and authority boundaries. |
| **S4 LEDGER** | Verify custody, accounting, permissions, signatures, and irreversible state. |
| **S5 PRESSURE** | Apply concurrency, retry, scale, partial-failure, restart, and recovery pressure. |
| **S6 CLOSURE** | Audit the audit, enforce coverage, inspect information diversity, and control the stop condition. |

Above them sits **SENTINEL COMMANDER**, the workflow/state orchestrator. Hermes is the preferred commander runtime, but no Tier-1 LLM is the source of truth.

## Authority corridor

```text
Identity -> Mandate -> AEGIS Policy -> Tool Permission -> Execution -> SENTINEL Pressure -> Receipt -> Audit Ledger
```

Pressure tests a boundary. It never grants authority.

## Multi-model doctrine

Different models should receive different mandates and cognitive lenses rather than six copies of the same prompt. A finding is not accepted because several models agree. It is accepted because executable evidence supports it and adversarial review fails to falsify it.

Static analyzers, test runners, MCP tools, hosted models, and local models are evidence-producing instruments alongside LLMs.

## Hard boundaries

SENTINEL-6 does not autonomously deploy on-chain code, create production infrastructure, expose secrets, delete production data, broaden privileges, or perform irreversible production migrations. Those items are surfaced with evidence and deferred to Mission Control.

AEGIS may tighten execution posture based on SENTINEL findings, but neither AEGIS nor SENTINEL may independently exceed Mission Control's explicit authority.

## Status

**Foundation/runtime scaffold phase.** Core contracts, TypeScript runtime primitives, evidence schemas, Shannon information-diversity metrics, closure rules, Hermes/MCP orchestration model, AEGIS governance contract, and Figma-to-Pages handoff are being established before production integration.

## License

Apache-2.0
