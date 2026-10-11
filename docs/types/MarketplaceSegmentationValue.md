---
title: "MarketplaceSegmentationValue"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplaceSegmentationValue"
html_id: "definition-MarketplaceSegmentationValue"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceSegmentationValue"
generated_by: "scripts/convert.mjs"
---


# `MarketplaceSegmentationValue` (object)

## Description

Segmentation value for a marketplace job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `customValue` | [`String`](../scalars/String.md) | Custom value entered by client |
| `segmentationInfo` | [`MarketplaceSegmentationInfo`](MarketplaceSegmentationInfo.md) | Segmentation metadata |

## Examples

### Example

```json
{
  "customValue": "xyz789",
  "segmentationInfo": MarketplaceSegmentationInfo
}
```
