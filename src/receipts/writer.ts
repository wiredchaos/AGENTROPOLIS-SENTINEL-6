import { createHash } from "node:crypto";

export interface AuditReceipt {
  auditId: string;
  action: string;
  actor: string;
  mandate: string;
  targetRevision: string;
  evidence: string[];
  result: string;
  previousHash?: string;
  timestamp: string;
}

export interface SealedReceipt extends AuditReceipt {
  hash: string;
}

export function sealReceipt(receipt: AuditReceipt): SealedReceipt {
  const canonical = JSON.stringify(receipt);
  const hash = createHash("sha256").update(canonical).digest("hex");
  return { ...receipt, hash };
}

export function verifyChain(receipts: readonly SealedReceipt[]): boolean {
  for (let i = 0; i < receipts.length; i += 1) {
    const current = receipts[i];
    if (!current) return false;
    const { hash, ...unsigned } = current;
    if (sealReceipt(unsigned).hash !== hash) return false;
    if (i > 0 && current.previousHash !== receipts[i - 1]?.hash) return false;
  }
  return true;
}
