---
title: "JobActivity"
kind: "object"
domain: "Job Posts"
gql_name: "JobActivity"
html_id: "definition-JobActivity"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobActivity"
generated_by: "scripts/convert.mjs"
---


# `JobActivity` (object)

## Description

Activity metrics for a job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `lastClientActivity` | [`String`](../scalars/String.md) | Last client activity timestamp |
| `invitesSent` | [`Int!`](../scalars/Int.md) | Number of invites sent |
| `totalInvitedToInterview` | [`Int!`](../scalars/Int.md) | Total invited to interview |
| `totalHired` | [`Int!`](../scalars/Int.md) | Total hired |
| `totalUnansweredInvites` | [`Int!`](../scalars/Int.md) | Total unanswered invites |
| `totalOffered` | [`Int!`](../scalars/Int.md) | Total offers made |
| `totalRecommended` | [`Int`](../scalars/Int.md) | Total recommended candidates |

## Examples

### Example

```json
{
  "lastClientActivity": "xyz789",
  "invitesSent": 987,
  "totalInvitedToInterview": 987,
  "totalHired": 123,
  "totalUnansweredInvites": 987,
  "totalOffered": 123,
  "totalRecommended": 123
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobActivity" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [HourlyContractTerms](HourlyContractTerms.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPosting](JobPosting.md) ➡️
