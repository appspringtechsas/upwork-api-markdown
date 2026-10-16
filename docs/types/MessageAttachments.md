---
title: "MessageAttachments"
kind: "object"
domain: "Users and teams"
gql_name: "MessageAttachments"
html_id: "definition-MessageAttachments"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MessageAttachments"
generated_by: "scripts/convert.mjs"
---


# `MessageAttachments` (object)

## Description

Attachments associated with a message in a room

## Fields

| Field | Type | Description |
|---|---|---|
| `objectReferenceId` | [`ID`](../scalars/ID.md) | Reference ID of the attached object |
| `objectType` | [`String`](../scalars/String.md) | Type of the attached object |
| `metadata` | [`[StringMapElement!]`](StringMapElement.md) | Additional metadata for the attachment |
| `createdDateTime` | [`String`](../scalars/String.md) | When the attachment was created |
| `author` | [`RoomUser`](RoomUser.md) | User who created the attachment |
| `downloadableLink` | [`String`](../scalars/String.md) | Presigned download link resolved from fileStorageDS when fileId is present |

## Examples

### Example

```json
{
  "objectReferenceId": "4",
  "objectType": "xyz789",
  "metadata": [StringMapElement],
  "createdDateTime": "abc123",
  "author": RoomUser,
  "downloadableLink": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MessageAttachments" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [InviteToTeamSucceededResponse](InviteToTeamSucceededResponse.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [OrganizationFlag](OrganizationFlag.md) ➡️
