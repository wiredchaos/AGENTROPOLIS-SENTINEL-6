# APCP Compliance — SENTINEL-6

SENTINEL-6 is the evidence verifier for the AGENTROPOLIS Polyglot Construction Protocol (APCP).

## Assurance questions

For every claimed capability, SENTINEL asks:

1. Where is it implemented?
2. Which language/runtime owns it?
3. Why was that runtime selected?
4. Is the native toolchain actually present?
5. Are native tests, fixtures, analyzers, or workers present?
6. Does executable evidence support the claim?
7. Is the capability still safe under future-capability pressure?

## Required classifications

- `CAPABILITY_CLAIM_WITHOUT_IMPLEMENTATION`
- `UNSUPPORTED_LANGUAGE_COVERAGE_GAP`
- `UNEXPLAINED_RUNTIME`
- `POLYGLOT_THEATER`
- `IMPLEMENTATION_MONOCULTURE_RISK` when broad claims materially exceed the stack's demonstrated coverage

A monoculture is not automatically a defect. It becomes a finding only when evidence shows the claimed domain requires capabilities the current stack does not provide adequately.

## Closure rule

Unsupported required coverage cannot silently pass. S6 must either:

- obtain qualified coverage,
- narrow the repository's claim,
- or leave an explicit unresolved coverage gap.

## Routing matrix

Review assignments should combine:

`LANGUAGE x MINDSET x DOMAIN x MODEL x TOOLING`

Examples:

- Rust x BREAK x concurrency x independent model x cargo/clippy
- Python x TRUST x agent-tool boundary x independent model x AST/security tools
- Java x PRESSURE x distributed-state x independent model x JVM tooling
- C++ x BREAK x native-memory x independent model x compiler/sanitizer tooling

Model consensus is not proof. Language diversity is not proof. Evidence is proof.
