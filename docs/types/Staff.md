---
title: "Staff"
kind: "object"
domain: "Users and teams"
gql_name: "Staff"
html_id: "definition-Staff"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Staff"
generated_by: "scripts/convert.mjs"
---


# `Staff` (object)

## Description

Staff membership details

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Staff record identifier |
| `user` | [`StaffUser`](StaffUser.md) | Related user |
| `activationStatus` | [`Int`](../scalars/Int.md) | Enum representing the activation status '1': Active '2': Inactive |
| `creationDate` | [`String`](../scalars/String.md) | Creation date |
| `staffType` | [`Int`](../scalars/Int.md) | Enum representing the type of staff within the organization. '2': Invitation '3': Ownership |

## Examples

### Example

```json
{
  "id": 4,
  "user": StaffUser,
  "activationStatus": 123,
  "creationDate": "xyz789",
  "staffType": 123
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Staff" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [SnapshotMinutes](SnapshotMinutes.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [StaffsConnection](StaffsConnection.md) ➡️
