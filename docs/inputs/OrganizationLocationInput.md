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
  "address": "abc123",
  "city": "abc123",
  "state": "xyz789",
  "country": "abc123",
  "zipCode": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OrganizationLocationInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [InviteToTeamEmailParams](InviteToTeamEmailParams.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [OrgUserPermissionFilterV2](OrgUserPermissionFilterV2.md) ➡️
