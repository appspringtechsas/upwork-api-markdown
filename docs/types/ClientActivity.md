---
title: "ClientActivity"
kind: "object"
domain: "Other"
gql_name: "ClientActivity"
html_id: "definition-ClientActivity"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientActivity"
generated_by: "scripts/convert.mjs"
---


# `ClientActivity` (object)

## Description

Client activity

## Fields

| Field | Type | Description |
|---|---|---|
| `lastBuyerActivity` | [`String`](../scalars/String.md) | Timestamp of the buyer's last activity on the job |
| `totalHired` | [`Int`](../scalars/Int.md) | Number of applicants the client has hired |
| `totalInvitedToInterview` | [`Int`](../scalars/Int.md) | Number of applicants invited for interview |

## Examples

### Example

```json
{
  "lastBuyerActivity": "abc123",
  "totalHired": 123,
  "totalInvitedToInterview": 987
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientActivity" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [CategoryInfo](CategoryInfo.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ConnectsSummaryResult](ConnectsSummaryResult.md) ➡️
