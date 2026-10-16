---
title: "CreateDirectFileAttachmentUploadLinkInput"
kind: "input_object"
domain: "Proposals"
gql_name: "CreateDirectFileAttachmentUploadLinkInput"
html_id: "definition-CreateDirectFileAttachmentUploadLinkInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CreateDirectFileAttachmentUploadLinkInput"
generated_by: "scripts/convert.mjs"
---


# `CreateDirectFileAttachmentUploadLinkInput` (input object)

## Description

Input for generate direct upload link for file attachments

## Fields

| Field | Type | Description |
|---|---|---|
| `attachmentType` | [`FileAttachmentType!`](../enums/FileAttachmentType.md) | Attachment type indicate the business entity attachment being uploaded |
| `fileName` | [`String!`](../scalars/String.md) | file name |
| `fileSize` | [`Long!`](../scalars/Long.md) | file size in bytes |
| `contentType` | [`String!`](../scalars/String.md) | file contentType example: image/png, application/pdf |

## Examples

### Example

```json
{
  "attachmentType": "OFFER",
  "fileName": "abc123",
  "fileSize": {},
  "contentType": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CreateDirectFileAttachmentUploadLinkInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ClientProposalSortAttribute](ClientProposalSortAttribute.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [CreateDirectUploadLinkInput](CreateDirectUploadLinkInput.md) ➡️
