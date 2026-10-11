---
title: "FeedbackInfoInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "FeedbackInfoInput"
html_id: "definition-FeedbackInfoInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FeedbackInfoInput"
generated_by: "scripts/convert.mjs"
---


# `FeedbackInfoInput` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `availabilityScore` | [`Int`](../scalars/Int.md) | Availability score |
| `comment` | [`String`](../scalars/String.md) | Comment |
| `communicationScore` | [`Int`](../scalars/Int.md) | Communication score |
| `cooperationScore` | [`Int`](../scalars/Int.md) | Cooperation score |
| `deadlinesScore` | [`Int`](../scalars/Int.md) | Deadlines score |
| `qualityScore` | [`Int`](../scalars/Int.md) | Quality score |
| `skillsScore` | [`Int`](../scalars/Int.md) | Skills score |

## Examples

### Example

```json
{
  "availabilityScore": 123,
  "comment": "abc123",
  "communicationScore": 123,
  "cooperationScore": 987,
  "deadlinesScore": 123,
  "qualityScore": 123,
  "skillsScore": 123
}
```
