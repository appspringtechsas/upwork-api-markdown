---
title: "Submission"
kind: "object"
domain: "Offers and Contracts"
gql_name: "Submission"
html_id: "definition-Submission"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Submission"
generated_by: "scripts/convert.mjs"
---


# `Submission` (object)

## Description

Milestone submission record

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Submission identifier |
| `createdDateTime` | [`String`](../scalars/String.md) | Creation timestamp |
| `modifiedDateTime` | [`String`](../scalars/String.md) | Modification timestamp |
| `amount` | [`Money`](Money.md) | Submission amount |
| `sequenceId` | [`Int`](../scalars/Int.md) | Sequence identifier |

## Examples

### Example

```json
{
  "id": 4,
  "createdDateTime": "xyz789",
  "modifiedDateTime": "abc123",
  "amount": Money,
  "sequenceId": 123
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Submission" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [StipendTerms](StipendTerms.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [SubmissionAttachmentDetails](SubmissionAttachmentDetails.md) ➡️
