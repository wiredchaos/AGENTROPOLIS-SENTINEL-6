# AGENTROPOLIS-SENTINEL-6

**Multi-model adversarial assurance for the AGENTROPOLIS Intelligence Grid.**

SENTINEL-6 audits code, agents, MCPs, authority boundaries, invariants, custody, pressure, recovery, and audit closure. It is model-agnostic: Hermes coordinates, multiple models challenge one another, and evidence—not model confidence—determines what survives.

## Core principle

> One orchestrator. Multiple independent auditors. One evidence ledger. One closure authority.

SENTINEL-6 does not try to make software look correct. It attempts to falsify correctness until the defined closure gates stop producing new evidence-backed findings.

## The six engines

| Engine | Responsibility |
|---|---|
| **S1 CARTOGRAPHER** | Census every executable surface and trust boundary. |
| **S2 CONSERVATOR** | Define and verify system invariants. |
| **S3 BREAKER** | Adversarially attack assumptions, fixes, and authority boundaries. |
| **S4 LEDGER** | Verify custody, accounting, permissions, signatures, and irreversible state. |
| **S5 PRESSURE** | Apply concurrency, retry, scale, partial-failure, restart, and recovery pressure. |
| **S6 CLOSURE** | Audit the audit, enforce coverage, and control the stop condition. |

Above them sits **SENTINEL COMMANDER**, the workflow/state orchestrator. Hermes is the preferred commander runtime, but no Tier-1 LLM is the source of truth.

## Authority corridor

```text
Identity -> Mandate -> Policy -> Tool Permission -> Execution -> Pressure -> Receipt -> Audit
```

Pressure tests a boundary. It never grants authority.

## Multi-model doctrine

Different models should receive different mandates rather than six copies of the same prompt. A finding is not accepted because several models agree. It is accepted because executable evidence supports it and adversarial review fails to falsify it.

Recommended roles:

- primary code auditor
- adversarial reviewer
- invariant / state-machine reviewer
- security / trust-boundary reviewer
- distributed-systems / performance reviewer
- closure critic

Static analyzers, test runners, MCP tools, and local models are evidence-producing instruments alongside LLMs.

## Repository layout

```text
AGENTROPOLIS-SENTINEL-6/
├── README.md
├── SKILL.md
├── sentinel.config.yaml
├── docs/
│   ├── architecture.md
│   ├── closure-protocol.md
│   ├── regression-checklist.md
│   └── figma-pages-handoff.md
├── schemas/
│   ├── finding.schema.json
│   ├── invariant.schema.json
│   └── receipt.schema.json
└── policies/
    ├── authority.yaml
    └── deployment.yaml
```

## Hard boundaries

SENTINEL-6 does not autonomously deploy on-chain code, create production infrastructure, expose secrets, delete production data, broaden privileges, or perform irreversible production migrations. Those items are surfaced with evidence and deferred to Mission Control.

## Status

**Foundation phase.** Core contracts, evidence schemas, closure rules, Hermes/MCP orchestration model, and Figma-to-Pages handoff are being established before runtime implementation.

## License

Apache-2.0
