---
title: "submitContractMilestone"
kind: "mutation"
gql_name: "submitContractMilestone"
returns: "SubmitContractMilestoneResponse!"
html_id: "mutation-submitContractMilestone"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-submitContractMilestone"
generated_by: "scripts/convert.mjs"
---


# `submitContractMilestone`

## Description

Submit a contract milestone for review/approval

## Required Permissions

"Contract - Read and Write Access"

## Response

Returns a [`SubmitContractMilestoneResponse!`](../types/SubmitContractMilestoneResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `request` | [`SubmitContractMilestoneRequest!`](../inputs/SubmitContractMilestoneRequest.md) | Submit request |

## Examples

### Detailed structure

#### Query

```graphql
mutation submitContractMilestone($request: SubmitContractMilestoneRequest!) {
  submitContractMilestone(request: $request) {
    submissionId
  }
}
```

#### Variables

```json
{"request": SubmitContractMilestoneRequest}
```

#### Response

```json
{
  "data": {
    "submitContractMilestone": {
      "submissionId": "4"
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-submitContractMilestone" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [savePersonJob](savePersonJob.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [withdrawContractProposal](withdrawContractProposal.md) ➡️
