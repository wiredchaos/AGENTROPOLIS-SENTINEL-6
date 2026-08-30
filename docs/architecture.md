# SENTINEL-6 Architecture

## Position in AGENTROPOLIS
SENTINEL-6 is a Layer-1 assurance service of the Intelligence Grid. Districts supply domain invariants; SENTINEL-6 supplies common evidence, adversarial pressure, verification, and closure machinery.

```text
Mission Control
      |
      v
Sentinel Commander (Hermes preferred)
      |
  +---+---+-------------------+
  |       |                   |
  v       v                   v
 S1      S2                   S3
Census  Invariants          Breaker
  |       |                   |
  +-------+---------+---------+
                    |
              +-----+-----+
              |           |
              v           v
             S4           S5
           Ledger       Pressure
              |           |
              +-----+-----+
                    |
                    v
                   S6
                Closure
                    |
                    v
             Evidence Ledger
```

## Commander
The Commander owns workflow state, not truth. It records baseline, census, invariants, finding queue, evidence graph, changes, validation, adversarial results, and closure state.

State machine:

```text
DISCOVER -> MODEL -> AUDIT -> TRIAGE -> REVERIFY -> PATCH -> TEST
   -> BLAST_RADIUS -> ADVERSARIAL -> COMMIT -> REAUDIT -> CLOSURE
```

Natural-language persuasion must not skip required states.

## Multi-model topology
Use heterogeneous reviewers where available. Different reviewers receive different jobs. Example topology:

1. Primary code auditor
2. Adversarial reviewer
3. Invariant/state-machine reviewer
4. Security/trust-boundary reviewer
5. Performance/distributed-systems reviewer
6. Closure critic

The Commander may route these roles to different Tier-1 LLMs, local models, or specialized analyzers. Model identity is metadata in the receipt, never a substitute for evidence.

## Evidence graph
Findings are connected to the symbols and surfaces they depend on. A change to a shared symbol invalidates assurance for its affected downstream consumers and requeues those surfaces for verification.

## AGENTROPOLIS authority corridor

```text
Identity -> Mandate -> Policy -> Tool Permission -> Execution -> Pressure -> Receipt -> Audit
```

Pressure challenges the corridor under retries, concurrency, hostile context, partial failure, stale state, and scale. It never expands the mandate.

## District integration
Examples of domain invariants supplied to the common engine:

- Fiscal systems: monetary conservation, settlement, solvency, custody.
- NTRU/trust systems: signatures, cryptographic identity, chain-state correctness.
- Creator/media: provenance, licensing, publication authority.
- 789 systems: age/child-safety and publishing boundaries.
- Hermes City: tool authority, MCP delegation, execution receipts.

AEGIS decides acceptable risk/policy. SENTINEL-6 determines whether observed executable reality satisfies the asserted rules.