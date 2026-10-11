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
