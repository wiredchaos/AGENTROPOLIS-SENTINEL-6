# Sentinel-6: OMH Verification Contract

Oh My Hermes (OMH), Hermes, and downstream executors are execution-side evidence producers. They are not final verifiers of their own work.

## State machine

`PLAN_NOT_RUN -> RUNNING -> REPORTED_DONE -> VERIFIED`

Alternative terminal states: `DENIED`, `FAILED`.

`REPORTED_DONE` is explicitly untrusted completion testimony until Sentinel-6 validates the objective against evidence outside the executor/provider trust boundary where feasible.

## Verification receipt

A verification record should bind:
- request_id / mandate_id
- provider + provider version
- executor + model/runtime
- objective hash
- evidence references/hashes
- changed resource references
- verifier identity/version
- verification method
- result and timestamp
- entropy/drift indicators

## Denial proof

DENIED requires an affirmative denial record containing the policy decision, attempted capability, dispatch status, and verifier-observable evidence. No scene/file/state change is not sufficient proof: never-dispatched, denied, and silently-failed operations can otherwise look identical.

## Independence rule

The same agent/process that executes an action must not be the sole authority that promotes its state to VERIFIED. When physical/runtime separation is unavailable, record the reduced assurance level explicitly rather than claiming independence.

## Drift

Track provider version, workflow/skill manifest hash, evidence schema version and verification-policy version so changes in OMH cannot silently change the meaning of historical receipts.