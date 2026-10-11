---
title: "ReasonsMetadata"
kind: "object"
domain: "Metadata"
gql_name: "ReasonsMetadata"
html_id: "definition-ReasonsMetadata"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ReasonsMetadata"
generated_by: "scripts/convert.mjs"
---


# `ReasonsMetadata` (object)

## Description

Metadata for action reasons

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | ID of the reason for proposal to switch to current status. |
| `reason` | [`String`](../scalars/String.md) | Reason description text |
| `alias` | [`String`](../scalars/String.md) | Reason alias or code |

## Examples

### Example

```json
{
  "id": "4",
  "reason": "abc123",
  "alias": "xyz789"
}
```
