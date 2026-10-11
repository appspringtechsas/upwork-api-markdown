---
title: "AuditTime"
kind: "object"
domain: "Other"
gql_name: "AuditTime"
html_id: "definition-AuditTime"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-AuditTime"
generated_by: "scripts/convert.mjs"
---


# `AuditTime` (object)

## Description

Type to represent both entity creation and modified time

## Fields

| Field | Type | Description |
|---|---|---|
| `createdDateTime` | [`String`](../scalars/String.md) | Creation date time formatted according to ISO-8601 |
| `modifiedDateTime` | [`String`](../scalars/String.md) | Modified date time formatted according to ISO-8601 |

## Examples

### Example

```json
{
  "createdDateTime": "abc123",
  "modifiedDateTime": "abc123"
}
```
