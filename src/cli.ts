#!/usr/bin/env node
import { auditTransitions } from "./commander/state-machine.js";
import { reviewerMandates } from "./models/router.js";

const [command = "help"] = process.argv.slice(2);

switch (command) {
  case "doctor":
    console.log(JSON.stringify({
      sentinel: "SENTINEL-6",
      runtime: "foundation",
      node: process.version,
      sourceOfTruth: "evidence",
      commander: "hermes-preferred",
      deployAuthority: false,
      reviewerMandates: Object.keys(reviewerMandates),
      phases: Object.keys(auditTransitions)
    }, null, 2));
    break;
  case "phases":
    console.log(JSON.stringify(auditTransitions, null, 2));
    break;
  default:
    console.log(`SENTINEL-6\n\nCommands:\n  doctor   Inspect runtime contract\n  phases   Print permitted state transitions\n\nRuntime adapters for providers, MCPs and repositories are intentionally configured separately.`);
}
