import type { ModelReviewer, ReviewerRequest, ReviewerResult } from "../types.js";

export class ReviewerRouter {
  constructor(private readonly reviewers: readonly ModelReviewer[]) {}

  async dispatch(request: ReviewerRequest, excludeProviderModel?: string): Promise<ReviewerResult[]> {
    const eligible = this.reviewers.filter((reviewer) => `${reviewer.provider}/${reviewer.model}` !== excludeProviderModel);
    return Promise.all(eligible.map((reviewer) => reviewer.review(request)));
  }

  async crossReview(request: ReviewerRequest, proposer: ReviewerResult): Promise<ReviewerResult[]> {
    return this.dispatch(request, `${proposer.provider}/${proposer.model}`);
  }
}

export const reviewerMandates = Object.freeze({
  CODE: "Correctness, API contracts, state transitions and call-site behavior",
  BREAK: "Falsify assumptions and reproduce forbidden outcomes",
  INVARIANT: "Prove conservation rules and state-machine invariants",
  TRUST: "Identity, authorization, tenant, MCP and tool boundaries",
  PRESSURE: "Concurrency, retries, replay, partial failure, scale and recovery",
  CLOSURE: "Coverage gaps, changed-consumer completeness and negative evidence"
});
