# Regression Checklist A–H

Run against every behavioral change before commit.

## A — Assumption
Open the executable implementation. Does the endpoint/function/tool actually return the value the finding assumes?

## B — Boundary
Does the fix preserve authentication, authorization, tenant, mandate, policy, and tool-permission boundaries before protected side effects?

## C — Consumer
Enumerate every producer, caller, consumer, serializer, deserializer, worker, migration, and test for the changed identifier. Open each relevant use.

## D — Data representation
Does the changed branch receive the real parsed/normalized production representation? Do tests feed that representation rather than a convenient raw string or impossible mock?

## E — Execution pressure
Test duplicate execution, retry after unknown outcome, replay, concurrency, stale state, and relevant ordering behavior.

## F — Failure and recovery
Test partial success, timeout after side effect/commit, process restart, poison input/message behavior, and reconciliation where applicable.

## G — Guard against regression
Verify the patch does not re-enable an overcharge, suppress a legitimate raise, zero a ledger/balance, weaken authority, create duplicate settlement, break a working feature, or create a live-lock/retry storm.

## H — Hard evidence
A comment, docblock, enum, type, test name, previous audit, or model assertion is not evidence. Open the code and verify executable behavior.

## Validation record
Record project-native formatter/lint/typecheck/tests/build results and separate PRE-EXISTING_FAILURE from INTRODUCED_FAILURE. Introduced failures must equal zero before landing.