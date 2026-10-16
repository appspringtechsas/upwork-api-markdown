---
title: "createJobProposal"
kind: "mutation"
gql_name: "createJobProposal"
returns: "CreateJobProposalResponse!"
html_id: "mutation-createJobProposal"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-createJobProposal"
generated_by: "scripts/convert.mjs"
---


# `createJobProposal`

## Description

Create a new proposal using the new flow

## Required Permissions

"Submit Proposal"

## Response

Returns a [`CreateJobProposalResponse!`](../types/CreateJobProposalResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`CreateJobProposalInput!`](../inputs/CreateJobProposalInput.md) | input |

## Examples

### Detailed structure

#### Query

```graphql
mutation createJobProposal($input: CreateJobProposalInput!) {
  createJobProposal(input: $input) {
    newProposalId
    status
    error
  }
}
```

#### Variables

```json
{"input": CreateJobProposalInput}
```

#### Response

```json
{
  "data": {
    "createJobProposal": {
      "newProposalId": 4,
      "status": "SUCCESS",
      "error": "OK"
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-createJobProposal" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [createDirectUploadLinkForJPAttachment](createDirectUploadLinkForJPAttachment.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [savePersonJob](savePersonJob.md) ➡️
