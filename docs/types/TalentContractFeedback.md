---
title: "TalentContractFeedback"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentContractFeedback"
html_id: "definition-TalentContractFeedback"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentContractFeedback"
generated_by: "scripts/convert.mjs"
---


# `TalentContractFeedback` (object)

## Description

Feedback given and received for a contract

## Fields

| Field | Type | Description |
|---|---|---|
| `feedbackToFreelancer` | [`TalentWorkFeedback`](TalentWorkFeedback.md) | Feedback from client to freelancer |
| `feedbackToClient` | [`TalentWorkFeedback`](TalentWorkFeedback.md) | Feedback from freelancer to client |

## Examples

### Example

```json
{
  "feedbackToFreelancer": TalentWorkFeedback,
  "feedbackToClient": TalentWorkFeedback
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentContractFeedback" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentContractAggregate](TalentContractAggregate.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentContractTerms](TalentContractTerms.md) ➡️
