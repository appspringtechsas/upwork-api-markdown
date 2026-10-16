---
title: "ClosingReason"
kind: "object"
domain: "Offers and Contracts"
gql_name: "ClosingReason"
html_id: "definition-ClosingReason"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClosingReason"
generated_by: "scripts/convert.mjs"
---


# `ClosingReason` (object)

## Description

Reason why a contract was closed

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Reason identifier (UID) |
| `apiRef` | [`String`](../scalars/String.md) | External API reference code |
| `reason` | [`String`](../scalars/String.md) | Human-readable reason text |

## Examples

### Example

```json
{
  "id": "4",
  "apiRef": "abc123",
  "reason": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClosingReason" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ClientFeedback](ClientFeedback.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [Contract](Contract.md) ➡️
