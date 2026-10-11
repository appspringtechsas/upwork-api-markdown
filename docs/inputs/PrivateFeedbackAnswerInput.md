---
title: "PrivateFeedbackAnswerInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "PrivateFeedbackAnswerInput"
html_id: "definition-PrivateFeedbackAnswerInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PrivateFeedbackAnswerInput"
generated_by: "scripts/convert.mjs"
---


# `PrivateFeedbackAnswerInput` (input object)

## Description

Input for private feedback answer payload

## Fields

| Field | Type | Description |
|---|---|---|
| `reason` | [`String`](../scalars/String.md) | Reason code (end_contract_reason \| no_start_reason) |
| `subReason` | [`String`](../scalars/String.md) | Sub-reason code |
| `multiLevelReason` | [`[PrivateFeedbackMultiLevelReasonInput]`](PrivateFeedbackMultiLevelReasonInput.md) | Multi-level reason entries |
| `answers` | [`[String]`](../scalars/String.md) | Selected answers list |
| `tellUsMore` | [`String`](../scalars/String.md) | Free-form feedback text |
| `additionalQuestions` | [`[PrivateFeedbackAdditionalQuestionInput]`](PrivateFeedbackAdditionalQuestionInput.md) | Additional nested question answers |

## Examples

### Example

```json
{
  "reason": "xyz789",
  "subReason": "xyz789",
  "multiLevelReason": [
    PrivateFeedbackMultiLevelReasonInput
  ],
  "answers": ["abc123"],
  "tellUsMore": "xyz789",
  "additionalQuestions": [
    PrivateFeedbackAdditionalQuestionInput
  ]
}
```
