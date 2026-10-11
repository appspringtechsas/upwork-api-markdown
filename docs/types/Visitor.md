---
title: "Visitor"
kind: "object"
domain: "Metadata"
gql_name: "Visitor"
html_id: "definition-Visitor"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Visitor"
generated_by: "scripts/convert.mjs"
---


# `Visitor` (object)

## Description

Anonymous visitor data and segmentation information

## Fields

| Field | Type | Description |
|---|---|---|
| `i18n` | [`VisitorI18N`](VisitorI18N.md) | Internationalization settings for a visitor based on country |
| `segment` | [`VisitorSegment`](VisitorSegment.md) | Query to look up visitor segment data based on visitorId and the respective segment name |

## Field arguments

### `i18n`

| Argument | Type | Description |
|---|---|---|
| `countryName` | [`String!`](../scalars/String.md) | Country display name |
| `visitorId` | [`ID`](../scalars/ID.md) | Optional visitor identifier |

### `segment`

| Argument | Type | Description |
|---|---|---|
| `visitorId` | [`ID!`](../scalars/ID.md) | Visitor identifier |
| `segmentName` | [`String!`](../scalars/String.md) | Segment name |

## Examples

### Example

```json
{
  "i18n": VisitorI18N,
  "segment": VisitorSegment
}
```
