# Information Diversity and Shannon Metrics

SENTINEL-6 uses information theory to measure whether a multi-reviewer ensemble is contributing diverse evidence rather than merely multiplying reviewer count.

## Shannon entropy

For a discrete distribution with probabilities `p_i`:

`H(X) = - sum_i p_i log2(p_i)`

Entropy is measured in bits. In SENTINEL-6 it is an observable assurance metric, not a truth oracle.

## What is measured

### Reviewer contribution entropy
Each distinct evidence-backed finding contributes one unit of credit. If several reviewers independently report the same canonical finding, that unit is divided among them. The resulting contribution distribution is measured with Shannon entropy.

This answers: **How concentrated is the observed finding contribution across reviewers?**

### Normalized entropy
`H / log2(k)` maps contribution entropy to `[0,1]` for `k` reviewers with non-zero contribution. This makes runs with different reviewer counts easier to compare.

### Effective reviewer count
`2^H` expresses entropy as the equivalent number of equally contributing reviewers.

Six configured reviewers with an effective reviewer count near two are not behaving like six informational contributors on that run.

### Mutual information
For reviewers evaluated over the same ordered census surfaces, mutual information measures statistical dependence between their binary flag/no-flag outcomes.

High mutual information is a redundancy signal. It does NOT prove identical reasoning.

### Conditional entropy / information gain
Conditional entropy asks how much uncertainty remains in one reviewer's outcomes after another reviewer's outcomes are known. Information gain measures the reduction.

These metrics help detect diminishing informational returns and correlated reviewer behavior.

## Cognitive lenses

Reviewer mandates may deliberately use different cognitive operating lenses, for example:

- hyperfocus / depth
- system-pattern synthesis
- literal / ambiguity sensitivity
- divergent / novel-path exploration
- uncertainty intolerance / evidence demand
- load, loop, retry, drift, and state-collapse sensitivity

These are engineering lenses, not clinical diagnoses. No cognitive label grants authority, increases trust, or changes policy permissions.

## Critical safety rule

**Entropy is not closure.**

Low information gain can mean:

1. the system has been thoroughly explored, OR
2. reviewers share the same blind spot.

High entropy can mean useful diversity, OR noisy disagreement.

Therefore Shannon metrics MUST NOT independently:

- confirm or reject a finding
- change severity
- grant tool permission
- lower AEGIS risk posture
- declare audit closure

Closure still requires the system census, invariant sweeps, changed-consumer sweep, independent adversarial review, receipt integrity, authority-corridor integrity, AEGIS consistency, and zero introduced failures.

## Operational use

The Commander should record information metrics per audit phase and per closure sweep. S6 CLOSURE should inspect them as diagnostic evidence.

A low-diversity or highly redundant ensemble should trigger a **lens diversification recommendation**: route an additional permitted reviewer with a materially different mandate, model family, toolset, or attack strategy.

This is a recommendation to gather new evidence, never permission to bypass governance.

## Principle

> Do not count agents. Measure whether they contribute new information.
