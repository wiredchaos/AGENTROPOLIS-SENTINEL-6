import type { AuditPhase } from "../types.js";

const transitions: Record<AuditPhase, readonly AuditPhase[]> = {
  DISCOVER: ["MODEL"],
  MODEL: ["AUDIT"],
  AUDIT: ["TRIAGE"],
  TRIAGE: ["REVERIFY", "CLOSURE"],
  REVERIFY: ["PATCH", "TRIAGE"],
  PATCH: ["TEST"],
  TEST: ["BLAST_RADIUS"],
  BLAST_RADIUS: ["ADVERSARIAL"],
  ADVERSARIAL: ["COMMIT", "PATCH"],
  COMMIT: ["REAUDIT"],
  REAUDIT: ["TRIAGE", "CLOSURE"],
  CLOSURE: ["AUDIT", "CLOSED"],
  CLOSED: []
};

export function canTransition(from: AuditPhase, to: AuditPhase): boolean {
  return transitions[from].includes(to);
}

export function transition(from: AuditPhase, to: AuditPhase): AuditPhase {
  if (!canTransition(from, to)) {
    throw new Error(`SENTINEL_STATE_VIOLATION: ${from} -> ${to} is not permitted`);
  }
  return to;
}

export const auditTransitions = transitions;
