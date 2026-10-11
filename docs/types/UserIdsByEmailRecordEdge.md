---
title: "UserIdsByEmailRecordEdge"
kind: "object"
domain: "Users and teams"
gql_name: "UserIdsByEmailRecordEdge"
html_id: "definition-UserIdsByEmailRecordEdge"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UserIdsByEmailRecordEdge"
generated_by: "scripts/convert.mjs"
---


# `UserIdsByEmailRecordEdge` (object)

## Description

Edge in users-by-email response

## Fields

| Field | Type | Description |
|---|---|---|
| `cursor` | [`String`](../scalars/String.md) | Cursor for pagination |
| `node` | [`UserIdsByEmailRecordNode`](UserIdsByEmailRecordNode.md) | Record node |

## Examples

### Example

```json
{
  "cursor": "xyz789",
  "node": UserIdsByEmailRecordNode
}
```
