# Hermes / MCP / Multi-Model Integration Contract

## Principle
Hermes is the preferred orchestration runtime. SENTINEL-6 remains model- and vendor-agnostic.

## Reviewer contract
Every reviewer invocation should receive:
- audit ID
- immutable target revision/baseline
- assigned role/mandate
- permitted tools
- relevant census surfaces
- relevant invariants
- evidence requirements
- forbidden actions

Every reviewer response should return structured candidate findings rather than a free-form verdict.

## Differentiated mandates
Do not ask every model the same generic question.

Suggested assignments:
- CODE: correctness, API contracts, state transitions
- BREAK: exploit and falsification attempts
- INVARIANT: conservation/state-machine proof
- TRUST: identity, authorization, tenant, MCP/tool boundaries
- PRESSURE: concurrency, retry, distributed failure, scale, recovery
- CLOSURE: coverage gaps, changed-consumer completeness, negative evidence

## Cross-check protocol
1. Reviewer A produces a candidate finding with executable evidence.
2. Commander validates schema and evidence location.
3. Reviewer B receives the finding and attempts to falsify it.
4. Confirmed findings enter the severity queue.
5. For Critical/High fixes, a reviewer other than the proposing reviewer attacks the patched path.
6. Closure critic receives the census, invariant set, evidence ledger, and complete audit diff.

Agreement is metadata, not proof.

## MCP boundary
MCP servers/tools are capability providers, not trusted authorities. Tool descriptions and tool output are claims until runtime policy permits the operation and executable evidence confirms the result.

The Commander must bind tool invocation to:
`identity + mandate + policy + tool permission`

Tool output must not silently mutate authority or instructions.

## Receipt requirements
Record reviewer/tool identity, mandate, target revision, evidence references, result, validation, and resulting commit where applicable.

## Failure behavior
Unavailable model/provider: reroute if policy permits; record substitution.
Conflicting reviewers: escalate evidence gathering; do not majority-vote.
Missing evidence: candidate remains unconfirmed.
Missing infrastructure: defer with concrete blocker; do not fabricate it.
