---
title: "TalentWorkFeedback"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentWorkFeedback"
html_id: "definition-TalentWorkFeedback"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentWorkFeedback"
generated_by: "scripts/convert.mjs"
---


# `TalentWorkFeedback` (object)

## Description

Feedback details including comment, score, and visibility

## Fields

| Field | Type | Description |
|---|---|---|
| `comment` | [`String`](../scalars/String.md) | Feedback comment text |
| `response` | [`String`](../scalars/String.md) | Response to feedback |
| `score` | [`Float`](../scalars/Float.md) | Overall feedback score |
| `scores` | [`[TalentFeedbackScore]`](TalentFeedbackScore.md) | Detailed scores by category |
| `feedbackSuppressed` | [`Boolean`](../scalars/Boolean.md) | Whether feedback is suppressed |
| `isPublic` | [`Boolean`](../scalars/Boolean.md) | Whether feedback is public |
| `commentPublic` | [`Boolean`](../scalars/Boolean.md) | Whether comment is public |
| `point` | [`String`](../scalars/String.md) | Feedback point value |

## Examples

### Example

```json
{
  "comment": "xyz789",
  "response": "xyz789",
  "score": 123.45,
  "scores": [TalentFeedbackScore],
  "feedbackSuppressed": true,
  "isPublic": true,
  "commentPublic": true,
  "point": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentWorkFeedback" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentVegaJobOpening](TalentVegaJobOpening.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentWorkHistory](TalentWorkHistory.md) ➡️
