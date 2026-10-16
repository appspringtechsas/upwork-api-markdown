---
title: "EndContractAtomicFeedbacksInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "EndContractAtomicFeedbacksInput"
html_id: "definition-EndContractAtomicFeedbacksInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-EndContractAtomicFeedbacksInput"
generated_by: "scripts/convert.mjs"
---


# `EndContractAtomicFeedbacksInput` (input object)

## Description

Feedbacks payload for atomic end-contract flow

## Fields

| Field | Type | Description |
|---|---|---|
| `feedbackInfo` | [`FeedbackInfoInput`](FeedbackInfoInput.md) | Public feedback details |
| `noStartFeedback` | [`NoStartSubmitFeedbackInput`](NoStartSubmitFeedbackInput.md) | No-start feedback details |
| `privateFeedbackAnswer` | [`PrivateFeedbackAnswerInput`](PrivateFeedbackAnswerInput.md) | Private feedback answer payload |
| `privateFeedbackQuestion` | [`ID`](../scalars/ID.md) | Private feedback question id (must be provided with privateFeedbackAnswer) |

## Examples

### Example

```json
{
  "feedbackInfo": FeedbackInfoInput,
  "noStartFeedback": NoStartSubmitFeedbackInput,
  "privateFeedbackAnswer": PrivateFeedbackAnswerInput,
  "privateFeedbackQuestion": "4"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-EndContractAtomicFeedbacksInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [EditMilestoneInput](EditMilestoneInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [EndContractAtomicInput](EndContractAtomicInput.md) ➡️
