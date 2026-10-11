---
title: "UserLocation"
kind: "object"
domain: "Users and teams"
gql_name: "UserLocation"
html_id: "definition-UserLocation"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UserLocation"
generated_by: "scripts/convert.mjs"
---


# `UserLocation` (object)

## Description

Location of the user

## Fields

| Field | Type | Description |
|---|---|---|
| `countryName` | [`String`](../scalars/String.md) | Country name |
| `cityName` | [`String`](../scalars/String.md) | City name |
| `zip` | [`String`](../scalars/String.md) | Postal or ZIP code |
| `timezone` | [`String!`](../scalars/String.md) | Timezone identifier |
| `timezoneName` | [`String`](../scalars/String.md) | Human-readable timezone name |
| `street` | [`String`](../scalars/String.md) | Street address |
| `stateCode` | [`String`](../scalars/String.md) | State or province code |
| `offsetToUTC` | [`Int`](../scalars/Int.md) | Offset from UTC in minutes |

## Examples

### Example

```json
{
  "countryName": "xyz789",
  "cityName": "xyz789",
  "zip": "xyz789",
  "timezone": "abc123",
  "timezoneName": "abc123",
  "street": "xyz789",
  "stateCode": "xyz789",
  "offsetToUTC": 123
}
```
