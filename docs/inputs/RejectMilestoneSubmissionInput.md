---
title: "RejectMilestoneSubmissionInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "RejectMilestoneSubmissionInput"
html_id: "definition-RejectMilestoneSubmissionInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RejectMilestoneSubmissionInput"
generated_by: "scripts/convert.mjs"
---


# `RejectMilestoneSubmissionInput` (input object)

## Description

Input for rejecting a milestone submission

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Milestone Submission ID |
| `noteToContractor` | [`String`](../scalars/String.md) | Note to contractor |
| `attachments` | [`[ID!]`](../scalars/ID.md) | The list of attachments' IDs (For Internal Usage Only) |

## Examples

### Example

```json
{
  "id": 4,
  "noteToContractor": "abc123",
  "attachments": ["4"]
}
```
