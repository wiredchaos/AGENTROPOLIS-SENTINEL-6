import type { AuditContext } from "../types.js";

export interface ClosureEvidence {
  entryPointSweepNewFindings: number;
  invariantSweepNewFindings: number;
  consumerSweepNewFindings: number;
  futureCapabilitySweepNewFindings: number;
  unexplainedCensusGaps: number;
  introducedFailures: number;
  authorityCorridorPassed: boolean;
  receiptIntegrityPassed: boolean;
  aegisConsistencyPassed: boolean;
  futureCapabilityEnvelopePassed: boolean;
  assurancePlaneIndependencePassed: boolean;
  criticalHighCrossReviewed: boolean;
  changedConsumersEnumerated: boolean;
}

export interface ClosureDecision {
  closed: boolean;
  blockers: string[];
}

export function judgeClosure(context: Readonly<AuditContext>, evidence: ClosureEvidence): ClosureDecision {
  const blockers: string[] = [];
  if (context.findings.some((finding) => finding.status === "candidate" || finding.status === "confirmed")) blockers.push("finding queue is not empty");
  if (evidence.entryPointSweepNewFindings) blockers.push("entry-point sweep produced findings");
  if (evidence.invariantSweepNewFindings) blockers.push("invariant sweep produced findings");
  if (evidence.consumerSweepNewFindings) blockers.push("consumer sweep produced findings");
  if (evidence.futureCapabilitySweepNewFindings) blockers.push("future-capability sweep produced findings");
  if (evidence.unexplainedCensusGaps) blockers.push("system census contains unexplained gaps");
  if (evidence.introducedFailures) blockers.push("audit introduced failures");
  if (!evidence.authorityCorridorPassed) blockers.push("authority corridor failed");
  if (!evidence.receiptIntegrityPassed) blockers.push("receipt integrity failed");
  if (!evidence.aegisConsistencyPassed) blockers.push("AEGIS policy consistency failed");
  if (!evidence.futureCapabilityEnvelopePassed) blockers.push("future capability envelope failed");
  if (!evidence.assurancePlaneIndependencePassed) blockers.push("assurance plane can be influenced by evaluated system");
  if (!evidence.criticalHighCrossReviewed) blockers.push("critical/high cross-review incomplete");
  if (!evidence.changedConsumersEnumerated) blockers.push("changed-symbol consumer enumeration incomplete");
  return { closed: blockers.length === 0, blockers };
}
