---
title: "PersonSavedJob"
kind: "object"
domain: "Other"
gql_name: "PersonSavedJob"
html_id: "definition-PersonSavedJob"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PersonSavedJob"
generated_by: "scripts/convert.mjs"
---


# `PersonSavedJob` (object)

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) |  |
| `user` | [`GenericUser!`](GenericUser.md) |  |
| `job` | [`MarketplaceJobPosting!`](MarketplaceJobPosting.md) |  |
| `followed` | [`Boolean!`](../scalars/Boolean.md) |  |
| `lastUpdateTs` | [`String!`](../scalars/String.md) |  |

## Examples

### Example

```json
{
  "id": 4,
  "user": GenericUser,
  "job": MarketplaceJobPosting,
  "followed": true,
  "lastUpdateTs": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PersonSavedJob" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [PaymentsReport](PaymentsReport.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [PrefLocation](PrefLocation.md) ➡️
