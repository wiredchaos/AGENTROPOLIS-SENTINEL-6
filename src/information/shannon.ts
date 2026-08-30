export interface ReviewerContribution {
  reviewer: string;
  credit: number;
  share: number;
}

export interface DiversitySummary {
  entropyBits: number;
  normalizedEntropy: number;
  effectiveReviewerCount: number;
  contributions: ReviewerContribution[];
}

function assertFiniteNonNegative(values: readonly number[]): void {
  for (const value of values) {
    if (!Number.isFinite(value) || value < 0) {
      throw new RangeError("Shannon inputs must be finite and non-negative");
    }
  }
}

export function shannonEntropy(weights: readonly number[]): number {
  if (weights.length === 0) return 0;
  assertFiniteNonNegative(weights);

  const total = weights.reduce((sum, value) => sum + value, 0);
  if (total === 0) return 0;

  let entropy = 0;
  for (const weight of weights) {
    if (weight === 0) continue;
    const p = weight / total;
    entropy -= p * Math.log2(p);
  }
  return entropy;
}

export function normalizedShannonEntropy(weights: readonly number[]): number {
  const nonZero = weights.filter((value) => value > 0).length;
  if (nonZero <= 1) return 0;
  return shannonEntropy(weights) / Math.log2(nonZero);
}

export function effectiveReviewerCount(weights: readonly number[]): number {
  return 2 ** shannonEntropy(weights);
}

/**
 * Gives fractional credit for each unique finding across reviewers.
 * If three reviewers independently report the same finding ID, each gets 1/3 credit.
 * This measures concentration of observed contribution, not cognitive identity.
 */
export function reviewerContributionDiversity(
  findingsByReviewer: Readonly<Record<string, readonly string[]>>,
): DiversitySummary {
  const reviewers = Object.keys(findingsByReviewer).sort();
  if (reviewers.length === 0) {
    return { entropyBits: 0, normalizedEntropy: 0, effectiveReviewerCount: 0, contributions: [] };
  }

  const owners = new Map<string, Set<string>>();
  for (const reviewer of reviewers) {
    const findings = new Set(findingsByReviewer[reviewer] ?? []);
    for (const finding of findings) {
      const current = owners.get(finding) ?? new Set<string>();
      current.add(reviewer);
      owners.set(finding, current);
    }
  }

  const credits = new Map<string, number>(reviewers.map((reviewer) => [reviewer, 0]));
  for (const findingOwners of owners.values()) {
    if (findingOwners.size === 0) continue;
    const credit = 1 / findingOwners.size;
    for (const reviewer of findingOwners) {
      credits.set(reviewer, (credits.get(reviewer) ?? 0) + credit);
    }
  }

  const weights = reviewers.map((reviewer) => credits.get(reviewer) ?? 0);
  const total = weights.reduce((sum, value) => sum + value, 0);
  const contributions = reviewers.map((reviewer, index) => {
    const credit = weights[index] ?? 0;
    return { reviewer, credit, share: total === 0 ? 0 : credit / total };
  });

  return {
    entropyBits: shannonEntropy(weights),
    normalizedEntropy: normalizedShannonEntropy(weights),
    effectiveReviewerCount: total === 0 ? 0 : effectiveReviewerCount(weights),
    contributions,
  };
}

function assertAlignedBinaryVectors(a: readonly boolean[], b: readonly boolean[]): void {
  if (a.length !== b.length) {
    throw new RangeError("Reviewer vectors must cover the same census surfaces");
  }
}

/**
 * Mutual information between two reviewers' binary outcomes over the SAME ordered
 * census surfaces. High MI means their flag/no-flag behavior is statistically dependent.
 * It is a redundancy signal, not proof that the reviewers reasoned identically.
 */
export function binaryMutualInformation(
  a: readonly boolean[],
  b: readonly boolean[],
): number {
  assertAlignedBinaryVectors(a, b);
  if (a.length === 0) return 0;

  const joint = [0, 0, 0, 0]; // 00, 01, 10, 11
  for (let i = 0; i < a.length; i += 1) {
    const av = a[i] ?? false;
    const bv = b[i] ?? false;
    const index = (av ? 2 : 0) + (bv ? 1 : 0);
    joint[index] = (joint[index] ?? 0) + 1;
  }

  const n = a.length;
  const pA = [((joint[0] ?? 0) + (joint[1] ?? 0)) / n, ((joint[2] ?? 0) + (joint[3] ?? 0)) / n];
  const pB = [((joint[0] ?? 0) + (joint[2] ?? 0)) / n, ((joint[1] ?? 0) + (joint[3] ?? 0)) / n];

  let mi = 0;
  for (let av = 0; av <= 1; av += 1) {
    for (let bv = 0; bv <= 1; bv += 1) {
      const index = av * 2 + bv;
      const pJoint = (joint[index] ?? 0) / n;
      const denominator = (pA[av] ?? 0) * (pB[bv] ?? 0);
      if (pJoint === 0 || denominator === 0) continue;
      mi += pJoint * Math.log2(pJoint / denominator);
    }
  }
  return mi;
}

export function binaryConditionalEntropy(
  target: readonly boolean[],
  given: readonly boolean[],
): number {
  assertAlignedBinaryVectors(target, given);
  if (target.length === 0) return 0;

  const targetWeights = [0, 0];
  const givenWeights = [0, 0];
  const jointWeights = [0, 0, 0, 0];

  for (let i = 0; i < target.length; i += 1) {
    const tv = target[i] ?? false;
    const gv = given[i] ?? false;
    const ti = tv ? 1 : 0;
    const gi = gv ? 1 : 0;
    targetWeights[ti] = (targetWeights[ti] ?? 0) + 1;
    givenWeights[gi] = (givenWeights[gi] ?? 0) + 1;
    const ji = ti * 2 + gi;
    jointWeights[ji] = (jointWeights[ji] ?? 0) + 1;
  }

  // H(Target|Given) = H(Target,Given) - H(Given)
  return Math.max(0, shannonEntropy(jointWeights) - shannonEntropy(givenWeights));
}

export function binaryInformationGain(
  target: readonly boolean[],
  given: readonly boolean[],
): number {
  assertAlignedBinaryVectors(target, given);
  const targetWeights = [
    target.filter((value) => !value).length,
    target.filter(Boolean).length,
  ];
  return Math.max(0, shannonEntropy(targetWeights) - binaryConditionalEntropy(target, given));
}
