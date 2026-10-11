---
title: "WorkDiaryMetadata"
kind: "object"
domain: "Users and teams"
gql_name: "WorkDiaryMetadata"
html_id: "definition-WorkDiaryMetadata"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkDiaryMetadata"
generated_by: "scripts/convert.mjs"
---


# `WorkDiaryMetadata` (object)

## Description

Metadata for work diary including timezone and user information

## Fields

| Field | Type | Description |
|---|---|---|
| `timezoneOffset` | [`String!`](../scalars/String.md) | Timezone offset for displaying times |
| `archivingDateTime` | [`String!`](../scalars/String.md) | When work diary data will be archived |

## Examples

### Example

```json
{
  "timezoneOffset": "xyz789",
  "archivingDateTime": "abc123"
}
```
