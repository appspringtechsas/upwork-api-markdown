---
title: "MarketplacePostingAnnotations"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplacePostingAnnotations"
html_id: "definition-MarketplacePostingAnnotations"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplacePostingAnnotations"
generated_by: "scripts/convert.mjs"
---


# `MarketplacePostingAnnotations` (object)

## Description

Annotations for a marketplace job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `tags` | [`[String!]`](../scalars/String.md) | Tags associated with the posting |
| `customFields` | [`[StringMapElement!]`](StringMapElement.md) | Custom field key-value pairs |

## Examples

### Example

```json
{
  "tags": ["abc123"],
  "customFields": [StringMapElement]
}
```
