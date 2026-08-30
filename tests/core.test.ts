import test from "node:test";
import assert from "node:assert/strict";
import { transition } from "../src/commander/state-machine.js";
import { EvidenceGraph } from "../src/evidence/graph.js";
import { enforceNoAutomaticRelaxation } from "../src/aegis/adapter.js";
import { sealReceipt, verifyChain } from "../src/receipts/writer.js";

test("Commander rejects skipped phases", () => {
  assert.throws(() => transition("DISCOVER", "PATCH"));
  assert.equal(transition("DISCOVER", "MODEL"), "MODEL");
});

test("Evidence graph computes transitive blast radius", () => {
  const graph = new EvidenceGraph();
  graph.connect("parseAmount", "paymentWorker");
  graph.connect("paymentWorker", "ledgerMutation");
  assert.deepEqual(graph.blastRadius("parseAmount"), ["ledgerMutation", "paymentWorker"]);
});

test("AEGIS posture cannot automatically relax", () => {
  assert.equal(enforceNoAutomaticRelaxation("QUARANTINE", "ALLOW"), "QUARANTINE");
  assert.equal(enforceNoAutomaticRelaxation("OBSERVE", "RESTRICT"), "RESTRICT");
});

test("receipt chain detects tampering", () => {
  const first = sealReceipt({ auditId: "a1", action: "audit", actor: "S3", mandate: "break", targetRevision: "abc", evidence: ["x"], result: "ok", timestamp: "2026-08-29T00:00:00Z" });
  const second = sealReceipt({ auditId: "a1", action: "review", actor: "S6", mandate: "close", targetRevision: "abc", evidence: ["y"], result: "ok", previousHash: first.hash, timestamp: "2026-08-29T00:01:00Z" });
  assert.equal(verifyChain([first, second]), true);
  assert.equal(verifyChain([{ ...first, result: "tampered" }, second]), false);
});
