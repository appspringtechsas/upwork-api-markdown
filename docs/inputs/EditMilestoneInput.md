---
title: "EditMilestoneInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "EditMilestoneInput"
html_id: "definition-EditMilestoneInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-EditMilestoneInput"
generated_by: "scripts/convert.mjs"
---


# `EditMilestoneInput` (input object)

## Description

Input for editing a milestone

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Milestone ID |
| `description` | [`String`](../scalars/String.md) | Milestone description |
| `instructions` | [`String`](../scalars/String.md) | Application instructions |
| `depositAmount` | [`String`](../scalars/String.md) | Amount is in cents. For example 1000 represents 10 USD |
| `dueDate` | [`String`](../scalars/String.md) | Due date requirement |
| `attachments` | [`[ID!]`](../scalars/ID.md) | The list of attachments' IDs (For Internal Usage Only) |
| `message` | [`String`](../scalars/String.md) | Attached message |
| `sequenceId` | [`Int`](../scalars/Int.md) | Sequence ID |

## Examples

### Example

```json
{
  "id": 4,
  "description": "xyz789",
  "instructions": "xyz789",
  "depositAmount": "abc123",
  "dueDate": "abc123",
  "attachments": ["4"],
  "message": "abc123",
  "sequenceId": 123
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-EditMilestoneInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [DeleteMilestoneInput](DeleteMilestoneInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [EndContractAtomicFeedbacksInput](EndContractAtomicFeedbacksInput.md) ➡️
