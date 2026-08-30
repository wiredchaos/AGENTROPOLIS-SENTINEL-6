import assert from "node:assert/strict";
import test from "node:test";
import {
  binaryConditionalEntropy,
  binaryInformationGain,
  binaryMutualInformation,
  effectiveReviewerCount,
  normalizedShannonEntropy,
  reviewerContributionDiversity,
  shannonEntropy,
} from "../src/information/shannon.js";

test("fair binary distribution has one bit of entropy", () => {
  assert.equal(shannonEntropy([1, 1]), 1);
  assert.equal(normalizedShannonEntropy([1, 1]), 1);
  assert.equal(effectiveReviewerCount([1, 1]), 2);
});

test("certain distribution has zero entropy", () => {
  assert.equal(shannonEntropy([10, 0]), 0);
  assert.equal(normalizedShannonEntropy([10, 0]), 0);
  assert.equal(effectiveReviewerCount([10, 0]), 1);
});

test("invalid weights are rejected", () => {
  assert.throws(() => shannonEntropy([1, -1]), RangeError);
  assert.throws(() => shannonEntropy([1, Number.NaN]), RangeError);
});

test("reviewer contribution diversity rewards distributed unique evidence", () => {
  const summary = reviewerContributionDiversity({
    literal: ["F-1"],
    pattern: ["F-2"],
    breaker: ["F-3"],
  });
  assert.ok(Math.abs(summary.entropyBits - Math.log2(3)) < 1e-12);
  assert.ok(Math.abs(summary.normalizedEntropy - 1) < 1e-12);
  assert.ok(Math.abs(summary.effectiveReviewerCount - 3) < 1e-12);
});

test("shared findings receive fractional credit", () => {
  const summary = reviewerContributionDiversity({
    a: ["F-1", "F-2"],
    b: ["F-1"],
  });
  const a = summary.contributions.find((item) => item.reviewer === "a");
  const b = summary.contributions.find((item) => item.reviewer === "b");
  assert.equal(a?.credit, 1.5);
  assert.equal(b?.credit, 0.5);
});

test("identical balanced reviewer vectors have one bit of mutual information", () => {
  const a = [false, false, true, true];
  assert.equal(binaryMutualInformation(a, a), 1);
  assert.equal(binaryConditionalEntropy(a, a), 0);
  assert.equal(binaryInformationGain(a, a), 1);
});

test("independent balanced vectors have zero mutual information", () => {
  const a = [false, false, true, true];
  const b = [false, true, false, true];
  assert.ok(Math.abs(binaryMutualInformation(a, b)) < 1e-12);
  assert.ok(Math.abs(binaryInformationGain(a, b)) < 1e-12);
});
