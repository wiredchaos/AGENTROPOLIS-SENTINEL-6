import assert from "node:assert/strict";
import test from "node:test";
import { evaluateFutureCapabilityEnvelope } from "../src/pressure/future-capability.js";
import type { CapabilityAssumption, Finding } from "../src/types.js";

test("fails when security depends on current model weakness", () => {
  const assumptions: CapabilityAssumption[] = [{
    dimension: "reasoning",
    current: "agent cannot reliably compose exploit",
    future: "agent can reliably compose exploit",
    securityDependsOnCurrentLimit: true,
  }];
  const result = evaluateFutureCapabilityEnvelope(assumptions, []);
  assert.equal(result.passed, false);
  assert.equal(result.unsafeDependencies.length, 1);
});

test("fails for unresolved capability-triggered finding", () => {
  const finding: Finding = {
    id: "S6-FUTURE-001",
    auditId: "audit-1",
    engine: "S5",
    severity: "high",
    confidence: 0.9,
    title: "future tool scope enables authority composition",
    evidence: [],
    affectedSurfaces: ["tool:example"],
    status: "confirmed",
    capabilityExposure: "capability-triggered",
  };
  const result = evaluateFutureCapabilityEnvelope([], [finding]);
  assert.equal(result.passed, false);
  assert.deepEqual(result.findingsByExposure["capability-triggered"], ["S6-FUTURE-001"]);
});

test("passes when capability assumptions are not security boundaries and future findings are resolved", () => {
  const assumptions: CapabilityAssumption[] = [{
    dimension: "tool-use",
    current: "limited tool skill",
    future: "expert tool skill",
    securityDependsOnCurrentLimit: false,
  }];
  const result = evaluateFutureCapabilityEnvelope(assumptions, []);
  assert.equal(result.passed, true);
});
