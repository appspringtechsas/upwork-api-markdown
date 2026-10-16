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
  "segmentName": "xyz789",
  "data": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VisitorSegment" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [VisitorI18NSettings](VisitorI18NSettings.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [Actor](Actor.md) ➡️
