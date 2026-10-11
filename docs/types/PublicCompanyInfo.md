---
title: "PublicCompanyInfo"
kind: "object"
domain: "Users and teams"
gql_name: "PublicCompanyInfo"
html_id: "definition-PublicCompanyInfo"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PublicCompanyInfo"
generated_by: "scripts/convert.mjs"
---


# `PublicCompanyInfo` (object)

## Description

Public-facing company info

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Company identifier |
| `name` | [`String`](../scalars/String.md) | Company name |
| `description` | [`String`](../scalars/String.md) | Company description |
| `legacyType` | [`OrganizationLegacyType`](../enums/OrganizationLegacyType.md) | Legacy organization type |
| `logoURL` | [`String`](../scalars/String.md) | Logo URL |

## Examples

### Example

```json
{
  "id": 4,
  "name": "xyz789",
  "description": "abc123",
  "legacyType": "CLIENT",
  "logoURL": "abc123"
}
```
