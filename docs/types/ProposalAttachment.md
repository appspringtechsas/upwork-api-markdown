---
title: "ProposalAttachment"
kind: "object"
domain: "Proposals"
gql_name: "ProposalAttachment"
html_id: "definition-ProposalAttachment"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProposalAttachment"
generated_by: "scripts/convert.mjs"
---


# `ProposalAttachment` (object)

## Description

attachments added for the proposal

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Attachment identifier |
| `link` | [`String!`](../scalars/String.md) | Public link to the file |
| `fileName` | [`String!`](../scalars/String.md) | Original file name |
| `fileSize` | [`Int!`](../scalars/Int.md) | File size in bytes |

## Examples

### Example

```json
{
  "id": "4",
  "link": "xyz789",
  "fileName": "xyz789",
  "fileSize": 987
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProposalAttachment" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [InviteToInterview](InviteToInterview.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ProposalAuditDetails](ProposalAuditDetails.md) ➡️
