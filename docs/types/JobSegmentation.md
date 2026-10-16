---
title: "JobSegmentation"
kind: "object"
domain: "Other"
gql_name: "JobSegmentation"
html_id: "definition-JobSegmentation"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobSegmentation"
generated_by: "scripts/convert.mjs"
---


# `JobSegmentation` (object)

## Description

Job segmentation

## Fields

| Field | Type | Description |
|---|---|---|
| `label` | [`String`](../scalars/String.md) | Segmentation label or display name |
| `name` | [`String`](../scalars/String.md) | Segmentation name identifier |
| `skill` | [`SegmentationSkill`](SegmentationSkill.md) | Associated skill information for this segment |

## Examples

### Example

```json
{
  "label": "abc123",
  "name": "abc123",
  "skill": SegmentationSkill
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobSegmentation" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobQualifications](JobQualifications.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [PaymentsReport](PaymentsReport.md) ➡️
