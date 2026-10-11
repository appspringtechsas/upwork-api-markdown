---
title: "JobPostingAdditionalInfo"
kind: "object"
domain: "Job Posts"
gql_name: "JobPostingAdditionalInfo"
html_id: "definition-JobPostingAdditionalInfo"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingAdditionalInfo"
generated_by: "scripts/convert.mjs"
---


# `JobPostingAdditionalInfo` (object)

## Description

Additional metadata captured at job creation

## Fields

| Field | Type | Description |
|---|---|---|
| `clientNumberOfHiresOnCreate` | [`Int`](../scalars/Int.md) | Client's hire count at posting creation |
| `clientTotalSpentOnCreate` | [`Money`](Money.md) | Client's total spend at posting creation |
| `directHire` | [`Boolean`](../scalars/Boolean.md) | Whether direct hire is enabled |
| `invitePost` | [`Boolean`](../scalars/Boolean.md) | Whether this is an invite-only post |
| `lastBuyerActivity` | [`String`](../scalars/String.md) | Last buyer activity timestamp |

## Examples

### Example

```json
{
  "clientNumberOfHiresOnCreate": 987,
  "clientTotalSpentOnCreate": Money,
  "directHire": true,
  "invitePost": false,
  "lastBuyerActivity": "xyz789"
}
```
