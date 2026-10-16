---
title: "rejectSubmittedMilestone"
kind: "mutation"
gql_name: "rejectSubmittedMilestone"
returns: "MilestoneRejectionResponse"
html_id: "mutation-rejectSubmittedMilestone"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-rejectSubmittedMilestone"
generated_by: "scripts/convert.mjs"
---


# `rejectSubmittedMilestone`

## Description

Allows client to reject a milestone submission from a freelancer

## Required Permissions

"Offer - Read And Write Access"

## Response

Returns a [`MilestoneRejectionResponse`](../types/MilestoneRejectionResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`RejectMilestoneSubmissionInput`](../inputs/RejectMilestoneSubmissionInput.md) | Milestone rejection details |

## Examples

### Detailed structure

#### Query

```graphql
mutation rejectSubmittedMilestone($input: RejectMilestoneSubmissionInput) {
  rejectSubmittedMilestone(input: $input) {
    response
  }
}
```

#### Variables

```json
{"input": RejectMilestoneSubmissionInput}
```

#### Response

```json
{"data": {"rejectSubmittedMilestone": {"response": false}}}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-rejectSubmittedMilestone" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [pauseContract](pauseContract.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [restartContract](restartContract.md) ➡️
