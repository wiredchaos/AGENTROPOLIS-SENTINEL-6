# Thermodynamic + Information-Theoretic Ontology

AGENTROPOLIS uses thermodynamics-inspired system variables to reason about drift, pressure, stability, recovery, and state change. SENTINEL-6 extends that ontology with classical information theory so the system can measure not only the state under observation, but also the informational diversity of the observers.

## Two distinct measurement domains

### Thermodynamic / systems domain
Use thermodynamics-inspired variables as engineering observables or proxies for:
- drift
- disorder
- stability
- recovery cost
- state pressure
- operational load
- transition friction

These variables describe system behavior. Unless a subsystem is literally physical, they are not claims of physical thermodynamic measurement.

### Information-theoretic domain
Use information theory for:
- uncertainty
- reviewer contribution diversity
- redundancy
- mutual information
- conditional entropy
- information gain
- effective reviewer count

Shannon entropy:

`H(X) = - sum_i p_i log2(p_i)`

Gibbs/Boltzmann-style entropy has a related mathematical form:

`S = -k_B sum_i p_i ln(p_i)`

The structural analogy is useful, but these quantities have different meanings and units. SENTINEL-6 must never present Shannon entropy as literal thermodynamic entropy.

## Joint assurance view

Track dimensions separately rather than collapsing them into a single magic score.

Conceptual assurance state:

`A = f(D, S_sys, H_info, I, G, C)`

Where:
- `D` = measured system drift
- `S_sys` = system disorder/stability proxy
- `H_info` = Shannon entropy of reviewer contribution
- `I` = mutual-information/redundancy signals
- `G` = new information gain
- `C` = census/coverage completeness

No one variable is sufficient to close an audit or lower AEGIS risk posture.

## Interpretation examples

### High drift + low reviewer diversity
Danger signal. The system is moving while observers may be sharing a blind spot. Route a materially different cognitive lens/model/tool and increase pressure testing.

### High drift + high information diversity
The system is unstable or changing, but the ensemble is observing it through materially different evidence paths. Continue pressure and reconciliation; do not equate diversity with correctness.

### Low drift + low information gain + complete census
Possible convergence signal. Closure still requires all normal S6 gates.

### Low information gain + incomplete census
Not convergence. Treat as a coverage failure or shared-blind-spot risk.

## AEGIS coupling

SENTINEL-6 may provide thermo-information evidence to AEGIS. AEGIS may tighten posture based on evidence-backed risk.

Allowed posture flow:

`ALLOW -> OBSERVE -> RESTRICT -> QUARANTINE -> HUMAN_APPROVAL`

Information diversity alone must never:
- grant authority
- lower severity
- automatically relax posture
- suppress findings
- satisfy closure

## Canonical principle

> Measure the system. Measure the minds observing the system. Measure the distance between the two.
