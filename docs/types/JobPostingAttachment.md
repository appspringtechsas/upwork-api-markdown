---
title: "JobPostingAttachment"
kind: "object"
domain: "Job Posts"
gql_name: "JobPostingAttachment"
html_id: "definition-JobPostingAttachment"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingAttachment"
generated_by: "scripts/convert.mjs"
---


# `JobPostingAttachment` (object)

## Description

Attachment metadata for a job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Attachment identifier |
| `sequenceNumber` | [`Int!`](../scalars/Int.md) | Sequence number for ordering |
| `fileName` | [`String!`](../scalars/String.md) | Original file name |
| `link` | [`String`](../scalars/String.md) | Public link to the file |
| `afsFileLink` | [`String`](../scalars/String.md) | Link to AFS storage |
| `contentLength` | [`Int`](../scalars/Int.md) | File size in bytes |
| `contentType` | [`String`](../scalars/String.md) | MIME content type |
| `createdDateTime` | [`String`](../scalars/String.md) | Creation timestamp |

## Examples

### Example

```json
{
  "id": "4",
  "sequenceNumber": 987,
  "fileName": "abc123",
  "link": "abc123",
  "afsFileLink": "abc123",
  "contentLength": 123,
  "contentType": "abc123",
  "createdDateTime": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingAttachment" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPostingAdditionalInfo](JobPostingAdditionalInfo.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostingCategory](JobPostingCategory.md) ➡️
