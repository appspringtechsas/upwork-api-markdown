---
title: "JobPostingSegmentationValue"
kind: "object"
domain: "Job Posts"
gql_name: "JobPostingSegmentationValue"
html_id: "definition-JobPostingSegmentationValue"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingSegmentationValue"
generated_by: "scripts/convert.mjs"
---


# `JobPostingSegmentationValue` (object)

## Description

Segmentation value entry for a job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Segmentation value identifier |
| `label` | [`String`](../scalars/String.md) | Display label |
| `referenceName` | [`String`](../scalars/String.md) | Reference name/code |
| `sortOrder` | [`Int`](../scalars/Int.md) | Sorting order |
| `segmentationType` | [`SegmentationType`](SegmentationType.md) | Segmentation type reference |
| `auditTime` | [`AuditTime`](AuditTime.md) | Audit timestamps |
| `skill` | [`Skill`](Skill.md) | Linked skill (if applicable) |

## Examples

### Example

```json
{
  "id": "4",
  "label": "abc123",
  "referenceName": "abc123",
  "sortOrder": 987,
  "segmentationType": SegmentationType,
  "auditTime": AuditTime,
  "skill": Skill
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingSegmentationValue" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPostingSegmentationData](JobPostingSegmentationData.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostingUpdateResponse](JobPostingUpdateResponse.md) ➡️
