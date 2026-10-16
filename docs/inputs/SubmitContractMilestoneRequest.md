---
title: "SubmitContractMilestoneRequest"
kind: "input_object"
domain: "Other"
gql_name: "SubmitContractMilestoneRequest"
html_id: "definition-SubmitContractMilestoneRequest"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SubmitContractMilestoneRequest"
generated_by: "scripts/convert.mjs"
---


# `SubmitContractMilestoneRequest` (input object)

## Description

Submit Milestone request input

## Fields

| Field | Type | Description |
|---|---|---|
| `milestoneId` | [`ID!`](../scalars/ID.md) | The milestone id to submit |
| `amount` | [`WMMoneyInput`](WMMoneyInput.md) | The amount being submitted |
| `message` | [`String!`](../scalars/String.md) | Message describing the submission |
| `attachments` | [`[ID]`](../scalars/ID.md) | Optional array of attachment URLs or identifiers |

## Examples

### Example

```json
{
  "milestoneId": "4",
  "amount": WMMoneyInput,
  "message": "xyz789",
  "attachments": [4]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SubmitContractMilestoneRequest" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [PersonSaveJobInput](PersonSaveJobInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [DateTimeRange](DateTimeRange.md) ➡️
