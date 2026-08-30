# AEGIS <-> SENTINEL-6 Governance Contract

## Purpose

AEGIS and SENTINEL-6 are independent Layer-1 governance services in the AGENTROPOLIS Intelligence Grid.

AEGIS answers: **What is permitted, restricted, quarantined, or human-gated?**

SENTINEL-6 answers: **What does the system demonstrably do under adversarial pressure?**

Neither service is allowed to collapse these responsibilities into one authority.

## Canonical loop

```text
Identity
  -> Mandate
  -> AEGIS Policy
  -> Tool Permission
  -> Execution
  -> SENTINEL Pressure
  -> Receipt
  -> Audit Ledger
  -> AEGIS Risk Update
  -> Mission Control when escalation is required
```

Pressure is an assurance operation. It does not grant runtime authority.

## AEGIS -> SENTINEL inputs

AEGIS may provide:
- policy identifier and version
- risk posture
- explicit prohibited outcomes
- human-approval requirements
- tool/capability restrictions
- tenant or district boundaries
- financial/custody limits
- required invariants
- quarantine conditions

SENTINEL treats policy text as an assertion to test, not proof that enforcement exists.

## SENTINEL -> AEGIS outputs

SENTINEL may provide:
- evidence-backed finding IDs
- violated invariant IDs
- severity and confidence
- exposure and triggerability
- affected identities, tools, MCPs, agents, surfaces, and consumers
- reproduction evidence
- pressure dimension that exposed the behavior
- remediation status
- regression/adversarial verification status
- receipt references
- closure status

SENTINEL does not directly decide business risk acceptance.

## Risk posture

Recommended AEGIS postures:

| Posture | Meaning |
|---|---|
| ALLOW | Policy permits execution under normal controls. |
| OBSERVE | Execution remains permitted with increased evidence collection. |
| RESTRICT | Capabilities or limits are reduced. |
| QUARANTINE | Execution is isolated or disabled pending review. |
| HUMAN_APPROVAL | Explicit Mission Control authorization is required. |

A SENTINEL finding may trigger a stricter posture when AEGIS policy explicitly permits that transition.

**Automatic relaxation is forbidden by default.** Evidence that a defect was fixed may support relaxation, but AEGIS or Mission Control must authorize the posture change according to policy.

## Independence rules

1. AEGIS cannot delete, rewrite, downgrade, or suppress SENTINEL evidence.
2. SENTINEL cannot grant permissions, expand mandates, or declare risk acceptable.
3. LLM consensus cannot override executable evidence.
4. MCP/tool output cannot alter identity, mandate, or policy.
5. A model cannot change its own audit mandate.
6. A finding's severity and current deployment exposure are separate fields.
7. Mission Control remains final authority for exceptions and irreversible actions.
8. Every cross-system decision produces a receipt.

## Failure modes

### AEGIS unavailable
SENTINEL may continue read-only evidence gathering where existing mandate permits. It must not infer a more permissive policy.

### SENTINEL unavailable
AEGIS may continue enforcing established policy, but absence of assurance must not be represented as a clean audit.

### Conflicting evidence
Do not majority-vote. Gather more evidence, reproduce, isolate the disputed invariant, and escalate if unresolved.

### Audit indicates active critical violation
SENTINEL emits evidence and recommended escalation. AEGIS evaluates the applicable policy and may restrict/quarantine/human-gate if pre-authorized. SENTINEL itself does not seize authority.

## Closure handshake

SENTINEL closure requires:
- audit queue empty
- independent closure sweeps complete
- zero unexplained census gaps
- zero introduced failures
- authority corridor verified
- receipt integrity verified
- current AEGIS policy version identified
- no known contradiction between tested behavior and applicable AEGIS policy

AEGIS may then record the SENTINEL closure receipt as assurance evidence. Closure is not a permanent safety guarantee; changes to code, policy, models, MCPs, dependencies, permissions, or deployment can invalidate previous assurance.

## Prime separation

> AEGIS governs what should happen. SENTINEL-6 proves what actually happens.
