---
title: "HourlyLimit"
kind: "object"
domain: "Offers and Contracts"
gql_name: "HourlyLimit"
html_id: "definition-HourlyLimit"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-HourlyLimit"
generated_by: "scripts/convert.mjs"
---


# `HourlyLimit` (object)

## Description

Weekly hourly limit period and identifiers

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Hourly limit record identifier (UID) |
| `weeklyLimit` | [`String`](../scalars/String.md) | Maximum weekly hours permitted |
| `createDate` | [`String`](../scalars/String.md) | Record creation date |
| `modifyDate` | [`String`](../scalars/String.md) | Last modification date |
| `startDate` | [`String`](../scalars/String.md) | Period start date |
| `endDate` | [`String`](../scalars/String.md) | Period end date |
| `legacyId` | [`Int`](../scalars/Int.md) | Legacy identifier (integer) |

## Examples

### Example

```json
{
  "id": 4,
  "weeklyLimit": "abc123",
  "createDate": "xyz789",
  "modifyDate": "xyz789",
  "startDate": "xyz789",
  "endDate": "abc123",
  "legacyId": 123
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-HourlyLimit" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [HourlyContractTerm](HourlyContractTerm.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [HourlyTerms](HourlyTerms.md) ➡️
