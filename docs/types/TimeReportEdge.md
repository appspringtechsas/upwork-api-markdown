---
title: "TimeReportEdge"
kind: "object"
domain: "Reporting"
gql_name: "TimeReportEdge"
html_id: "definition-TimeReportEdge"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TimeReportEdge"
generated_by: "scripts/convert.mjs"
---


# `TimeReportEdge` (object)

## Description

Edge type containing a time report node and cursor for pagination

## Fields

| Field | Type | Description |
|---|---|---|
| `node` | [`TimeReport!`](TimeReport.md) | Time report data |
| `cursor` | [`String!`](../scalars/String.md) | Cursor for pagination |

## Examples

### Example

```json
{
  "node": TimeReport,
  "cursor": "abc123"
}
```
