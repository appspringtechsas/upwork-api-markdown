---
title: "File"
kind: "object"
domain: "Other"
gql_name: "File"
html_id: "definition-File"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-File"
generated_by: "scripts/convert.mjs"
---


# `File` (object)

## Description

Represents a generic file resource

## Fields

| Field | Type | Description |
|---|---|---|
| `name` | [`String!`](../scalars/String.md) | The file name |
| `uri` | [`String!`](../scalars/String.md) | Location of file |
| `encoding` | [`String`](../scalars/String.md) | File encoding |
| `size` | [`Int`](../scalars/Int.md) | File size in bytes |
| `createdDateTime` | [`String`](../scalars/String.md) | File upload date in the format 'yyyy-mm-ddThh:MM:ss.SSSZ', e.g. '2022-06-14T08:49:03.325Z' |

## Examples

### Example

```json
{
  "name": "xyz789",
  "uri": "abc123",
  "encoding": "xyz789",
  "size": 987,
  "createdDateTime": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-File" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [EngagementDuration](EngagementDuration.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobCategory](JobCategory.md) ➡️
