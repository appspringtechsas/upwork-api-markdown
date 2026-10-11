---
title: "WorkDiaryCompanyContract"
kind: "object"
domain: "Users and teams"
gql_name: "WorkDiaryCompanyContract"
html_id: "definition-WorkDiaryCompanyContract"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkDiaryCompanyContract"
generated_by: "scripts/convert.mjs"
---


# `WorkDiaryCompanyContract` (object)

## Description

Contract information in work diary context

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Contract identifier |
| `userId` | [`String`](../scalars/String.md) | User identifier associated with contract |
| `contractTitle` | [`String`](../scalars/String.md) | Contract title |

## Examples

### Example

```json
{
  "id": 4,
  "userId": "abc123",
  "contractTitle": "xyz789"
}
```
