---
title: "MarketplacePostingAttachment"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplacePostingAttachment"
html_id: "definition-MarketplacePostingAttachment"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplacePostingAttachment"
generated_by: "scripts/convert.mjs"
---


# `MarketplacePostingAttachment` (object)

## Description

Attachment metadata for marketplace job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Attachment identifier |
| `sequenceNumber` | [`Int!`](../scalars/Int.md) | Sequence number for ordering |
| `fileName` | [`String!`](../scalars/String.md) | Original file name |
| `fileSize` | [`Int!`](../scalars/Int.md) | File size in bytes |
| `link` | [`String`](../scalars/String.md) | Presigned download link resolved from fileStorageDS via the attachment id |

## Examples

### Example

```json
{
  "id": "4",
  "sequenceNumber": 123,
  "fileName": "xyz789",
  "fileSize": 987,
  "link": "abc123"
}
```
