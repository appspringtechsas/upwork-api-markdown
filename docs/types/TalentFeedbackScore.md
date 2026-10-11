---
title: "TalentFeedbackScore"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentFeedbackScore"
html_id: "definition-TalentFeedbackScore"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentFeedbackScore"
generated_by: "scripts/convert.mjs"
---


# `TalentFeedbackScore` (object)

## Description

Individual feedback score by category

## Fields

| Field | Type | Description |
|---|---|---|
| `label` | [`String`](../scalars/String.md) | Category label |
| `score` | [`Int`](../scalars/Int.md) | Score value |
| `weight` | [`Float`](../scalars/Float.md) | Weight of this score |

## Examples

### Example

```json
{
  "label": "xyz789",
  "score": 123,
  "weight": 987.65
}
```
