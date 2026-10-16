---
title: "savePersonJob"
kind: "mutation"
gql_name: "savePersonJob"
returns: "PersonSavedJob!"
html_id: "mutation-savePersonJob"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-savePersonJob"
generated_by: "scripts/convert.mjs"
---


# `savePersonJob`

## Description

Saves job for the current person.

## Required Permissions

"Job Details Entities - Write Access"

## Response

Returns a [`PersonSavedJob!`](../types/PersonSavedJob.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`PersonSaveJobInput!`](../inputs/PersonSaveJobInput.md) |  |

## Examples

### Detailed structure

#### Query

```graphql
mutation savePersonJob($input: PersonSaveJobInput!) {
  savePersonJob(input: $input) {
    id
    user {
      ...GenericUserFragment
    }
    job {
      ...MarketplaceJobPostingFragment
    }
    followed
    lastUpdateTs
  }
}
```

#### Variables

```json
{"input": PersonSaveJobInput}
```

#### Response

```json
{
  "data": {
    "savePersonJob": {
      "id": "4",
      "user": GenericUser,
      "job": MarketplaceJobPosting,
      "followed": true,
      "lastUpdateTs": "abc123"
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-savePersonJob" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [createJobProposal](createJobProposal.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [submitContractMilestone](submitContractMilestone.md) ➡️
