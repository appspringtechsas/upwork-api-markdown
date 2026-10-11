---
title: "EndContractInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "EndContractInput"
html_id: "definition-EndContractInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-EndContractInput"
generated_by: "scripts/convert.mjs"
---


# `EndContractInput` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `endDate` | [`String`](../scalars/String.md) | End contract date (timestamp) defaults to the current day |
| `feedbackInfo` | [`FeedbackInfoInput`](FeedbackInfoInput.md) | Feedback provided as part of end-of-contract action |
| `reasonRef` | [`String!`](../scalars/String.md) | Contract end reason ID. Optional. See Query.reasons(reasonType: CONTRACT_END_HOURLY) and Query.reasons(reasonType: CONTRACT_END_FIXED) for the list of possible reasons. |

## Examples

### Example

```json
{
  "endDate": "abc123",
  "feedbackInfo": FeedbackInfoInput,
  "reasonRef": "xyz789"
}
```
