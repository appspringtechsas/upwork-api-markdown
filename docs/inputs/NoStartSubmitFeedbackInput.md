---
title: "NoStartSubmitFeedbackInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "NoStartSubmitFeedbackInput"
html_id: "definition-NoStartSubmitFeedbackInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-NoStartSubmitFeedbackInput"
generated_by: "scripts/convert.mjs"
---


# `NoStartSubmitFeedbackInput` (input object)

## Description

Input for no-start feedback submission

## Fields

| Field | Type | Description |
|---|---|---|
| `comment` | [`String`](../scalars/String.md) | Optional comment |
| `willWorkAgain` | [`Boolean`](../scalars/Boolean.md) | Whether user would work again |
| `reasonApi` | [`String`](../scalars/String.md) | No-start reason API code |
| `submitterUid` | [`String`](../scalars/String.md) | Submitter user uid |

## Examples

### Example

```json
{
  "comment": "abc123",
  "willWorkAgain": true,
  "reasonApi": "xyz789",
  "submitterUid": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-NoStartSubmitFeedbackInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [FeedbackInfoInput](FeedbackInfoInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [NotificationsInput](NotificationsInput.md) ➡️
