---
title: "JobPostingSegmentationRequest"
kind: "input_object"
domain: "Job Posts"
gql_name: "JobPostingSegmentationRequest"
html_id: "definition-JobPostingSegmentationRequest"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingSegmentationRequest"
generated_by: "scripts/convert.mjs"
---


# `JobPostingSegmentationRequest` (input object)

## Description

Segmentation value assignment for job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `segmentationValueId` | [`ID!`](../scalars/ID.md) | Segmentation value identifier |
| `customValue` | [`String`](../scalars/String.md) | Custom value if applicable |

## Examples

### Example

```json
{
  "segmentationValueId": "4",
  "customValue": "xyz789"
}
```
