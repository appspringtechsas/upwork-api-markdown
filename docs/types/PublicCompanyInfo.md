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
  "name": "abc123",
  "description": "xyz789",
  "legacyType": "CLIENT",
  "logoURL": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PublicCompanyInfo" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ProfileActivityMetricsLastUpdated](ProfileActivityMetricsLastUpdated.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [Room](Room.md) ➡️
