---
title: "AccountAuditRecord"
kind: "object"
domain: "Users and teams"
gql_name: "AccountAuditRecord"
html_id: "definition-AccountAuditRecord"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-AccountAuditRecord"
generated_by: "scripts/convert.mjs"
---


# `AccountAuditRecord` (object)

## Description

Account audit record

## Fields

| Field | Type | Description |
|---|---|---|
| `processInstanceId` | [`ID!`](../scalars/ID.md) | Process instace Id |
| `status` | [`String`](../scalars/String.md) | Status |
| `metadata` | [`[StringMapElement!]!`](StringMapElement.md) | Metadata |

## Examples

### Example

```json
{
  "processInstanceId": 4,
  "status": "xyz789",
  "metadata": [StringMapElement]
}
```
