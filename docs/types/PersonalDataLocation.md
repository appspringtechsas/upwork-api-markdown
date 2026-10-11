---
title: "PersonalDataLocation"
kind: "object"
domain: "Users and teams"
gql_name: "PersonalDataLocation"
html_id: "definition-PersonalDataLocation"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PersonalDataLocation"
generated_by: "scripts/convert.mjs"
---


# `PersonalDataLocation` (object)

## Description

Personal data location

## Fields

| Field | Type | Description |
|---|---|---|
| `country` | [`String`](../scalars/String.md) | Country name |
| `state` | [`String`](../scalars/String.md) | State or region name |
| `city` | [`String`](../scalars/String.md) | City name |
| `zip` | [`String`](../scalars/String.md) | Postal or ZIP code |
| `timezone` | [`String`](../scalars/String.md) | IANA timezone identifier (e.g., America/Los_Angeles) |

## Examples

### Example

```json
{
  "country": "abc123",
  "state": "xyz789",
  "city": "xyz789",
  "zip": "abc123",
  "timezone": "xyz789"
}
```
