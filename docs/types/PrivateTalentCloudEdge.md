---
title: "PrivateTalentCloudEdge"
kind: "object"
domain: "Talent Clouds"
gql_name: "PrivateTalentCloudEdge"
html_id: "definition-PrivateTalentCloudEdge"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PrivateTalentCloudEdge"
generated_by: "scripts/convert.mjs"
---


# `PrivateTalentCloudEdge` (object)

## Description

Edge type containing a private talent cloud node and its cursor

## Fields

| Field | Type | Description |
|---|---|---|
| `cursor` | [`String`](../scalars/String.md) | Cursor for this edge used in pagination |
| `node` | [`PrivateTalentCloud`](PrivateTalentCloud.md) | The private talent cloud at this edge |

## Examples

### Example

```json
{
  "cursor": "xyz789",
  "node": PrivateTalentCloud
}
```
