---
title: "Feedback"
kind: "object"
domain: "Offers and Contracts"
gql_name: "Feedback"
html_id: "definition-Feedback"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Feedback"
generated_by: "scripts/convert.mjs"
---


# `Feedback` (object)

## Description

Client and freelancer feedback for a contract

## Fields

| Field | Type | Description |
|---|---|---|
| `clientFeedback` | [`ClientFeedback`](ClientFeedback.md) | Feedback provided by the client about the freelancer |
| `freelancerFeedback` | [`FreelancerFeedback`](FreelancerFeedback.md) | Feedback provided by the freelancer about the client |

## Examples

### Example

```json
{
  "clientFeedback": ClientFeedback,
  "freelancerFeedback": FreelancerFeedback
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Feedback" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [CustomFieldsEdge](CustomFieldsEdge.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [FixedPriceContractTerm](FixedPriceContractTerm.md) ➡️
