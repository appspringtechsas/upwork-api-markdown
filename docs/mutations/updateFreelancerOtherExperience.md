---
title: "updateFreelancerOtherExperience"
kind: "mutation"
gql_name: "updateFreelancerOtherExperience"
returns: "FreelancerProfileOtherExperience"
html_id: "mutation-updateFreelancerOtherExperience"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-updateFreelancerOtherExperience"
generated_by: "scripts/convert.mjs"
---


# `updateFreelancerOtherExperience`

## Description

Update otherExperience for the freelancer given its id (userId is taken from the context)

## Required Permissions

"Freelancer Profile - Read And Write Access"

## Response

Returns a [`FreelancerProfileOtherExperience`](../types/FreelancerProfileOtherExperience.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`UpdateOtherExperienceInput!`](../inputs/UpdateOtherExperienceInput.md) | Input data for updating other experience |

## Examples

### Detailed structure

#### Query

```graphql
mutation updateFreelancerOtherExperience($input: UpdateOtherExperienceInput!) {
  updateFreelancerOtherExperience(input: $input) {
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
{"input": UpdateOtherExperienceInput}
```

#### Response

```json
{
  "data": {
    "updateFreelancerOtherExperience": {
      "id": 4,
      "user": GenericUser,
      "subject": "xyz789",
      "description": "abc123",
      "active": true,
      "createdDateTime": "abc123",
      "updatedDateTime": "abc123"
    }
  }
}
```
