---
title: "CustomPaymentInput"
kind: "input_object"
domain: "Other"
gql_name: "CustomPaymentInput"
html_id: "definition-CustomPaymentInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CustomPaymentInput"
generated_by: "scripts/convert.mjs"
---


# `CustomPaymentInput` (input object)

## Description

Input for creating a custom payment (e.g., bonus)

## Fields

| Field | Type | Description |
|---|---|---|
| `contractId` | [`ID!`](../scalars/ID.md) | Contract identifier for the payment |
| `amount` | [`Float!`](../scalars/Float.md) | Payment amount |
| `comment` | [`String!`](../scalars/String.md) | Payment comment visible to recipient |
| `notes` | [`String!`](../scalars/String.md) | Internal notes about the payment |
| `type` | [`CustomPaymentType`](../enums/CustomPaymentType.md) | `BONUS` |
| `allowSubsequent` | [`Boolean`](../scalars/Boolean.md) | `true` |

## Examples

### Example

```json
{
  "contractId": 4,
  "amount": 123.45,
  "comment": "xyz789",
  "notes": "abc123",
  "type": "BONUS",
  "allowSubsequent": true
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CustomPaymentInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [CreateProposalSri](CreateProposalSri.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostDirectUploadLinkInput](JobPostDirectUploadLinkInput.md) ➡️
