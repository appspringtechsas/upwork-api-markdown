---
title: "ReasonType"
kind: "enum"
domain: "Users and teams"
gql_name: "ReasonType"
html_id: "definition-ReasonType"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ReasonType"
generated_by: "scripts/convert.mjs"
---


# `ReasonType` (enum)

## Values

| Values | Description |
|---|---|
| `PROPOSAL_DECLINE` | Reject invite to apply to a job posting by freelancer |
| `PROPOSAL_WITHDRAW` | Withdraw application for job posting by freelancer |
| `CONTRACT_END_HOURLY` | End contract by either client or freelancer, hourly contract |
| `CONTRACT_END_FIXED` | End contract by either client or freelancer, fixed price contract |
| `CONTRACT_FEEDBACK_NOT_STARTED_CLIENT` | When client ends contract which for which work hasn't started and provides low score, we ask for reason |
| `CONTRACT_FEEDBACK_STARTED_CLIENT` | When client ends contract which for which work has been started and provides low score, we ask for reason |
| `CONTRACT_FEEDBACK_NOT_STARTED_FREELANCER` | When freelancer ends contract which for which work hasn't started and provides low score, we ask for reason |
| `CONTRACT_FEEDBACK_STARTED_FREELANCER` | When freelancer ends contract which for which work has been started and provides low score, we ask for reason |
| `PROPOSAL_REJECT` | Reject job application by a client |
| `JOB_POSTING_CLOSE` | Close job posting by a client |
| `OFFER_DECLINE` | Decline offer by freelancer |
| `INVITATION_WITHDRAW` | Withdraw invitation to apply to a job posting by client |
| `END_PROVIDER_CONTRACT` |  |
| `END_CUSTOMER_CONTRACT` |  |
| `DEACTIVATION_ACCOUNT` | Deactivation account by freelancer |

## Examples

### Example

```graphql
"PROPOSAL_DECLINE"
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ReasonType" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ProfileActivityStepType](ProfileActivityStepType.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ResourceType](ResourceType.md) ➡️
