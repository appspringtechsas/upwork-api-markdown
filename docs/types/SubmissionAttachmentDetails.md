---
title: "SubmissionAttachmentDetails"
kind: "object"
domain: "Offers and Contracts"
gql_name: "SubmissionAttachmentDetails"
html_id: "definition-SubmissionAttachmentDetails"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SubmissionAttachmentDetails"
generated_by: "scripts/convert.mjs"
---


# `SubmissionAttachmentDetails` (object)

## Description

Attachment details associated with a Milestone Submission

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | ID of the file |
| `fileName` | [`String!`](../scalars/String.md) | Name of the file |
| `fileUrl` | [`String!`](../scalars/String.md) | Download URL of the file |
| `fileSize` | [`Int!`](../scalars/Int.md) | Size of the file |
| `orgId` | [`ID`](../scalars/ID.md) | ID of the file uploading organization |
| `organization` | [`GenericOrganization`](GenericOrganization.md) | File Uploading Organization |

## Examples

### Example

```json
{
  "id": "4",
  "fileName": "abc123",
  "fileUrl": "abc123",
  "fileSize": 987,
  "orgId": 4,
  "organization": GenericOrganization
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SubmissionAttachmentDetails" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [Submission](Submission.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [SubmissionEvent](SubmissionEvent.md) ➡️
