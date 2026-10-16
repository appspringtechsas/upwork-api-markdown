---
title: "ContractUser"
kind: "object"
domain: "Offers and Contracts"
gql_name: "ContractUser"
html_id: "definition-ContractUser"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractUser"
generated_by: "scripts/convert.mjs"
---


# `ContractUser` (object)

## Description

Person referenced in a contract context

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | User identifier (UID) |
| `rid` | [`ID!`](../scalars/ID.md) | User record identifier (RID) |
| `name` | [`String`](../scalars/String.md) | Display name (e.g., John S.) |
| `photoUrl` | [`String`](../scalars/String.md) | URL to the user's profile photo |
| `firstName` | [`String`](../scalars/String.md) | First name |
| `lastName` | [`String`](../scalars/String.md) | Last name |
| `address` | [`UserLocation`](UserLocation.md) | Postal address |
| `email` | [`String`](../scalars/String.md) | Email address |

## Examples

### Example

```json
{
  "id": 4,
  "rid": 4,
  "name": "xyz789",
  "photoUrl": "xyz789",
  "firstName": "xyz789",
  "lastName": "xyz789",
  "address": UserLocation,
  "email": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractUser" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ContractTerms](ContractTerms.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [CustomFields](CustomFields.md) ➡️
