---
title: "ClientFeedback"
kind: "object"
domain: "Offers and Contracts"
gql_name: "ClientFeedback"
html_id: "definition-ClientFeedback"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientFeedback"
generated_by: "scripts/convert.mjs"
---


# `ClientFeedback` (object)

## Description

Client's feedback details

## Fields

| Field | Type | Description |
|---|---|---|
| `score` | [`Float`](../scalars/Float.md) | Numeric rating provided by the client |
| `comment` | [`String`](../scalars/String.md) | Client's written comment |
| `freelancerResponse` | [`String`](../scalars/String.md) | Freelancer's response to the client's feedback |

## Examples

### Example

```json
{
  "score": 123.45,
  "comment": "xyz789",
  "freelancerResponse": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientFeedback" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [Actor](Actor.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ClosingReason](ClosingReason.md) ➡️
