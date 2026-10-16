---
title: "MarketplaceJobPostingsContents"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplaceJobPostingsContents"
html_id: "definition-MarketplaceJobPostingsContents"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceJobPostingsContents"
generated_by: "scripts/convert.mjs"
---


# `MarketplaceJobPostingsContents` (object)

## Description

Contents of a marketplace job posting by ID

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Job posting identifier |
| `ciphertext` | [`String!`](../scalars/String.md) | Encrypted identifier value |
| `title` | [`String!`](../scalars/String.md) | Job posting title |
| `description` | [`String!`](../scalars/String.md) | Job posting description |
| `publishedDateTime` | [`String!`](../scalars/String.md) | Published timestamp |
| `annotations` | [`MarketplacePostingAnnotations`](MarketplacePostingAnnotations.md) | Posting annotations |

## Examples

### Example

```json
{
  "id": 4,
  "ciphertext": "abc123",
  "title": "abc123",
  "description": "xyz789",
  "publishedDateTime": "abc123",
  "annotations": MarketplacePostingAnnotations
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceJobPostingsContents" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [MarketplaceJobPostingContent](MarketplaceJobPostingContent.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [MarketplaceJobPostingSearchClientInfo](MarketplaceJobPostingSearchClientInfo.md) ➡️
