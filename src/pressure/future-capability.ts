import type { CapabilityAssumption, Finding } from "../types.js";

export interface CapabilityEnvelopeResult {
  assumptions: CapabilityAssumption[];
  unsafeDependencies: CapabilityAssumption[];
  findingsByExposure: Record<"active" | "latent" | "capability-triggered" | "structural", string[]>;
  passed: boolean;
}

export function evaluateFutureCapabilityEnvelope(
  assumptions: readonly CapabilityAssumption[],
  findings: readonly Finding[],
): CapabilityEnvelopeResult {
  const unsafeDependencies = assumptions.filter((item) => item.securityDependsOnCurrentLimit);
  const findingsByExposure: CapabilityEnvelopeResult["findingsByExposure"] = {
    active: [],
    latent: [],
    "capability-triggered": [],
    structural: [],
  };

  for (const finding of findings) {
    if (finding.capabilityExposure) findingsByExposure[finding.capabilityExposure].push(finding.id);
  }

  const unresolvedFutureFindings = findings.some(
    (finding) =>
      (finding.capabilityExposure === "latent" ||
        finding.capabilityExposure === "capability-triggered" ||
        finding.capabilityExposure === "structural") &&
      (finding.status === "candidate" || finding.status === "confirmed"),
  );

  return {
    assumptions: [...assumptions],
    unsafeDependencies,
    findingsByExposure,
    passed: unsafeDependencies.length === 0 && !unresolvedFutureFindings,
  };
}
