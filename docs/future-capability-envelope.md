# Future Capability Envelope

## Principle

> Do not rely on current model incompetence as a security boundary.

An agentic system can appear safe because today's model cannot reliably exploit authority, tools, shared state, or infrastructure that it already possesses. A model upgrade can convert that capability gap into an exploitable path without any application code changing.

SENTINEL-6 therefore audits both the current system and a bounded set of plausible future capability envelopes.

## Core invariant

**No composition of individually permitted actions may create authority, persistence, coordination, or external reach beyond the original mandate, including under plausible capability upgrades.**

A second invariant protects assurance itself:

**The system being evaluated must not be able to control, rewrite, suppress, impersonate, or silently influence the evidence, grader, reviewer mandate, policy authority, or closure mechanism used to evaluate it.**

## Capability exposure taxonomy

- `ACTIVE` — executable with current observed capabilities.
- `LATENT` — structural path exists, but current agents do not reliably execute it.
- `CAPABILITY-TRIGGERED` — becomes materially exploitable when a specified capability threshold changes.
- `STRUCTURAL` — unsafe independent of model generation; the architecture itself violates the invariant.

Severity is separate from capability exposure. A latent Critical issue remains Critical even if today's model cannot reliably trigger it.

## Required upgrade scenarios

S5 PRESSURE should model at least:

1. stronger reasoning and code exploitation
2. longer-horizon planning
3. larger context windows
4. persistent memory
5. improved tool selection/use
6. multi-agent coordination
7. installation of additional MCP tools
8. read-only tools gaining write operations
9. local execution gaining network reach
10. improved ability to infer and combine weak signals across sessions

These scenarios are threat-model assumptions, not predictions about exact future model performance.

## Emergent Coordination Pressure

Audit whether apparently ordinary shared resources can become unauthorized coordination infrastructure:

- files and temporary directories
- caches
- package registries and artifacts
- databases and object stores
- queues
- logs
- CI metadata
- test outputs
- MCP responses
- shared memory
- environment state
- network-accessible services

The question is not only whether an official communication API exists. The question is whether agents can create one from resources they already share.

## Capability upgrade regression

A model, tool, MCP, permission, memory, context-window, network, or orchestration upgrade must be treated as a security-relevant change even when application source code is unchanged.

Before adopting such an upgrade, re-run the Future Capability Envelope against affected mandates and surfaces.

## Assurance-plane independence

SENTINEL must test whether evaluated agents can influence:

- test definitions
- grader behavior
- audit prompts or mandates
- evidence storage
- receipt chains
- AEGIS policy inputs
- reviewer selection
- closure state

A passing result is not trustworthy if the evaluated system can manufacture the evidence that caused it to pass.

## Closure

S6 cannot close solely because current-capability tests pass. Closure requires the configured future-capability sweep and assurance-plane independence check to pass with no unresolved evidence-backed findings.

This is bounded assurance, not prophecy. SENTINEL records the capability assumptions it tested so future upgrades can invalidate and re-run the relevant assurance claims.
