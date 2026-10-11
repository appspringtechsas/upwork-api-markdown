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
  "id": "4",
  "weeklyLimit": "abc123",
  "createDate": "abc123",
  "modifyDate": "xyz789",
  "startDate": "xyz789",
  "endDate": "xyz789",
  "legacyId": 987
}
```
