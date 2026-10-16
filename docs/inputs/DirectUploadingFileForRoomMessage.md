---
title: "DirectUploadingFileForRoomMessage"
kind: "input_object"
domain: "Proposals"
gql_name: "DirectUploadingFileForRoomMessage"
html_id: "definition-DirectUploadingFileForRoomMessage"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-DirectUploadingFileForRoomMessage"
generated_by: "scripts/convert.mjs"
---


# `DirectUploadingFileForRoomMessage` (input object)

## Description

Direct uploading file model for Room Message

## Fields

| Field | Type | Description |
|---|---|---|
| `name` | [`String!`](../scalars/String.md) | File name (used in Content-Disposition header) |
| `contentType` | [`String`](../scalars/String.md) | Content type (used in Content-Type header) |
| `thumbnail` | [`Boolean`](../scalars/Boolean.md) | `false` |

## Examples

### Example

```json
{
  "name": "abc123",
  "contentType": "abc123",
  "thumbnail": true
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-DirectUploadingFileForRoomMessage" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [CreateDirectUploadLinkInput](CreateDirectUploadLinkInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [InvitationsSortAttribute](InvitationsSortAttribute.md) ➡️
