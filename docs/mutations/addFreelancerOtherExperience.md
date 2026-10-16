---
title: "addFreelancerOtherExperience"
kind: "mutation"
gql_name: "addFreelancerOtherExperience"
returns: "FreelancerProfileOtherExperience"
html_id: "mutation-addFreelancerOtherExperience"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-addFreelancerOtherExperience"
generated_by: "scripts/convert.mjs"
---


# `addFreelancerOtherExperience`

## Description

Add a new otherExperience for the freelancer (userId is taken from the context)

## Required Permissions

"Freelancer Profile - Read And Write Access"

## Response

Returns a [`FreelancerProfileOtherExperience`](../types/FreelancerProfileOtherExperience.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`OtherExperienceInput!`](../inputs/OtherExperienceInput.md) | Input data for creating other experience |

## Examples

### Detailed structure

#### Query

```graphql
mutation addFreelancerOtherExperience($input: OtherExperienceInput!) {
  addFreelancerOtherExperience(input: $input) {
    id
    user {
      ...GenericUserFragment
    }
    subject
    description
    active
    createdDateTime
    updatedDateTime
  }
}
```

#### Variables

```json
{"input": OtherExperienceInput}
```

#### Response

```json
{
  "data": {
    "addFreelancerOtherExperience": {
      "id": 4,
      "user": GenericUser,
      "subject": "xyz789",
      "description": "abc123",
      "active": false,
      "createdDateTime": "abc123",
      "updatedDateTime": "xyz789"
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-addFreelancerOtherExperience" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [addFreelancerEmploymentRecord](addFreelancerEmploymentRecord.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [addTeamActivity](addTeamActivity.md) ➡️
