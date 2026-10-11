---
title: "BuyerWorkHistoryFeedback"
kind: "object"
domain: "Other"
gql_name: "BuyerWorkHistoryFeedback"
html_id: "definition-BuyerWorkHistoryFeedback"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-BuyerWorkHistoryFeedback"
generated_by: "scripts/convert.mjs"
---


# `BuyerWorkHistoryFeedback` (object)

## Description

Feedback

## Fields

| Field | Type | Description |
|---|---|---|
| `comment` | [`String`](../scalars/String.md) | Comment |
| `feedbackSuppressed` | [`Boolean`](../scalars/Boolean.md) | Is feedback suppressed |
| `score` | [`Float`](../scalars/Float.md) | Score |

## Examples

### Example

```json
{
  "comment": "abc123",
  "feedbackSuppressed": false,
  "score": 987.65
}
```
