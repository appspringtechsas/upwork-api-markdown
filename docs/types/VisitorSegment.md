---
title: "VisitorSegment"
kind: "object"
domain: "Metadata"
gql_name: "VisitorSegment"
html_id: "definition-VisitorSegment"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VisitorSegment"
generated_by: "scripts/convert.mjs"
---


# `VisitorSegment` (object)

## Description

Visitor segmentation data for behavioral or demographic categorization

## Fields

| Field | Type | Description |
|---|---|---|
| `visitorId` | [`ID!`](../scalars/ID.md) | Unique visitor identifier |
| `segmentName` | [`String`](../scalars/String.md) | Name of the segment |
| `data` | [`String`](../scalars/String.md) | Segment data payload |

## Examples

### Example

```json
{
  "visitorId": "4",
  "segmentName": "abc123",
  "data": "abc123"
}
```
