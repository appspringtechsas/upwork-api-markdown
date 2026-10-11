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
  "link": "abc123",
  "fileName": "abc123",
  "fileSize": 123
}
```
