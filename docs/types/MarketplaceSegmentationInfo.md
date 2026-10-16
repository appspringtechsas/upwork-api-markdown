---
title: "MarketplaceSegmentationInfo"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplaceSegmentationInfo"
html_id: "definition-MarketplaceSegmentationInfo"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceSegmentationInfo"
generated_by: "scripts/convert.mjs"
---


# `MarketplaceSegmentationInfo` (object)

## Description

Segmentation info metadata

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Segmentation info identifier |
| `label` | [`String`](../scalars/String.md) | Display label |
| `referenceName` | [`String`](../scalars/String.md) | Reference name/code |
| `sortOrder` | [`Int`](../scalars/Int.md) | Sort order |
| `segmentationType` | [`SegmentationType`](SegmentationType.md) | Segmentation type reference |
| `skill` | [`Skill`](Skill.md) | Linked skill (if applicable) |

## Examples

### Example

```json
{
  "id": "4",
  "label": "xyz789",
  "referenceName": "abc123",
  "sortOrder": 987,
  "segmentationType": SegmentationType,
  "skill": Skill
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceSegmentationInfo" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [MarketplaceSegmentationData](MarketplaceSegmentationData.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [MarketplaceSegmentationValue](MarketplaceSegmentationValue.md) ➡️
