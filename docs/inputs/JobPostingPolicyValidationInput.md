---
title: "JobPostingPolicyValidationInput"
kind: "input_object"
domain: "Job Posts"
gql_name: "JobPostingPolicyValidationInput"
html_id: "definition-JobPostingPolicyValidationInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingPolicyValidationInput"
generated_by: "scripts/convert.mjs"
---


# `JobPostingPolicyValidationInput` (input object)

## Description

Input for Trust & Safety policy validation on a job posting update. Validation state (session ID, attempt counter) is maintained server-side by tns-policy-orchestrator and does not need to be forwarded by the client.

## Fields

| Field | Type | Description |
|---|---|---|
| `policyCoachIntent` | [`Boolean`](../scalars/Boolean.md) | When true, triggers a non-English content check via tns-policy-orchestrator and populates the policyValidation field on the response. When false or omitted, validation is skipped. |

## Examples

### Example

```json
{"policyCoachIntent": true}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingPolicyValidationInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPostingLocationRequest](JobPostingLocationRequest.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostingPtcInfoRequest](JobPostingPtcInfoRequest.md) ➡️
