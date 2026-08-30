import type { Finding, RiskPosture } from "../types.js";

export interface AegisDecision {
  posture: RiskPosture;
  reasons: string[];
  requiresHumanApproval: boolean;
}

export interface AegisAdapter {
  evaluate(findings: readonly Finding[]): Promise<AegisDecision>;
}

const rank: Record<RiskPosture, number> = {
  ALLOW: 0,
  OBSERVE: 1,
  RESTRICT: 2,
  QUARANTINE: 3,
  HUMAN_APPROVAL: 4
};

export function mayTighten(current: RiskPosture, proposed: RiskPosture): boolean {
  return rank[proposed] >= rank[current];
}

export function enforceNoAutomaticRelaxation(current: RiskPosture, proposed: RiskPosture): RiskPosture {
  return mayTighten(current, proposed) ? proposed : current;
}
