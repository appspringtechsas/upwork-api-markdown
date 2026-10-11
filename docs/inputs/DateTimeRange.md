---
title: "DateTimeRange"
kind: "input_object"
domain: "Other"
gql_name: "DateTimeRange"
html_id: "definition-DateTimeRange"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-DateTimeRange"
generated_by: "scripts/convert.mjs"
---


# `DateTimeRange` (input object)

## Description

Input range for date-time values (ISO-8601 strings)

## Fields

| Field | Type | Description |
|---|---|---|
| `rangeStart` | [`String`](../scalars/String.md) | Start timestamp |
| `rangeEnd` | [`String`](../scalars/String.md) | End timestamp |

## Examples

### Example

```json
{
  "rangeStart": "abc123",
  "rangeEnd": "xyz789"
}
```
