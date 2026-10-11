---
title: "OrganizationLocationInput"
kind: "input_object"
domain: "Users and teams"
gql_name: "OrganizationLocationInput"
html_id: "definition-OrganizationLocationInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OrganizationLocationInput"
generated_by: "scripts/convert.mjs"
---


# `OrganizationLocationInput` (input object)

## Description

Location input for organization address

## Fields

| Field | Type | Description |
|---|---|---|
| `address` | [`String`](../scalars/String.md) | Street address |
| `city` | [`String`](../scalars/String.md) | City name |
| `state` | [`String`](../scalars/String.md) | State or province |
| `country` | [`String`](../scalars/String.md) | Country code |
| `zipCode` | [`String`](../scalars/String.md) | Postal or ZIP code |

## Examples

### Example

```json
{
  "address": "xyz789",
  "city": "xyz789",
  "state": "abc123",
  "country": "xyz789",
  "zipCode": "xyz789"
}
```
