---
title: "TalentProjectContractLink"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentProjectContractLink"
html_id: "definition-TalentProjectContractLink"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProjectContractLink"
generated_by: "scripts/convert.mjs"
---


# `TalentProjectContractLink` (object)

## Description

Link between a portfolio project and an Upwork contract

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Link identifier |
| `creationDateTime` | [`String`](../scalars/String.md) | When link was created |
| `state` | [`String`](../scalars/String.md) | Current state of the link |
| `notificationDateTime` | [`String`](../scalars/String.md) | When client was notified about the link |
| `clientId` | [`ID`](../scalars/ID.md) | Client identifier |

## Examples

### Example

```json
{
  "id": "4",
  "creationDateTime": "abc123",
  "state": "abc123",
  "notificationDateTime": "xyz789",
  "clientId": "4"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProjectContractLink" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentProfileUserPreferences](TalentProfileUserPreferences.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentProjectList](TalentProjectList.md) ➡️
