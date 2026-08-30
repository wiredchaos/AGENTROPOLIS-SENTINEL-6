export type Severity = "critical" | "high" | "medium" | "low";
export type RiskPosture = "ALLOW" | "OBSERVE" | "RESTRICT" | "QUARANTINE" | "HUMAN_APPROVAL";
export type EngineId = "S1" | "S2" | "S3" | "S4" | "S5" | "S6";
export type AuditPhase = "DISCOVER" | "MODEL" | "AUDIT" | "TRIAGE" | "REVERIFY" | "PATCH" | "TEST" | "BLAST_RADIUS" | "ADVERSARIAL" | "COMMIT" | "REAUDIT" | "CLOSURE" | "CLOSED";
export type CapabilityExposure = "active" | "latent" | "capability-triggered" | "structural";

export interface CapabilityAssumption {
  dimension: "reasoning" | "planning-horizon" | "context" | "memory" | "tool-use" | "coordination" | "network" | "tool-scope" | "other";
  current: string;
  future: string;
  securityDependsOnCurrentLimit: boolean;
}

export interface EvidenceRef {
  kind: "source" | "test" | "runtime" | "tool" | "receipt";
  location: string;
  detail: string;
  immutableRef?: string;
}

export interface Finding {
  id: string;
  auditId: string;
  engine: EngineId;
  severity: Severity;
  confidence: number;
  title: string;
  invariant?: string;
  evidence: EvidenceRef[];
  affectedSurfaces: string[];
  status: "candidate" | "confirmed" | "fixed" | "deferred" | "rejected";
  capabilityExposure?: CapabilityExposure;
  capabilityAssumptions?: CapabilityAssumption[];
}

export interface Invariant {
  id: string;
  statement: string;
  domain: string;
  proofObligations: string[];
}

export interface AuditContext {
  auditId: string;
  repository: string;
  baselineCommit: string;
  targetBranch: string;
  phase: AuditPhase;
  mandate: string;
  surfaces: string[];
  invariants: Invariant[];
  findings: Finding[];
  changedSymbols: string[];
  capabilityEnvelope?: CapabilityAssumption[];
}

export interface EngineResult {
  engine: EngineId;
  findings: Finding[];
  evidence: EvidenceRef[];
  coverage: string[];
}

export interface SentinelEngine {
  readonly id: EngineId;
  readonly role: string;
  inspect(context: Readonly<AuditContext>): Promise<EngineResult>;
}

export interface ReviewerRequest {
  auditId: string;
  role: string;
  mandate: string;
  targetRevision: string;
  surfaces: string[];
  invariants: Invariant[];
  forbiddenActions: string[];
  capabilityEnvelope?: CapabilityAssumption[];
}

export interface ReviewerResult {
  provider: string;
  model: string;
  findings: Finding[];
  evidence: EvidenceRef[];
}

export interface ModelReviewer {
  readonly provider: string;
  readonly model: string;
  review(request: ReviewerRequest): Promise<ReviewerResult>;
}
