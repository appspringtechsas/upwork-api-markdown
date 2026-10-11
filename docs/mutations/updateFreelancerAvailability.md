---
title: "updateFreelancerAvailability"
kind: "mutation"
gql_name: "updateFreelancerAvailability"
returns: "FreelancerProfileAvailability"
html_id: "mutation-updateFreelancerAvailability"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-updateFreelancerAvailability"
generated_by: "scripts/convert.mjs"
---


# `updateFreelancerAvailability`

## Description

Update freelancer's availability given its id and userId

## Required Permissions

"Freelancer Profile - Read And Write Access"

## Response

Returns a [`FreelancerProfileAvailability`](../types/FreelancerProfileAvailability.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`FreelancerProfileAvailabilityInput!`](../inputs/FreelancerProfileAvailabilityInput.md) | Input data for updating availability |

## Examples

### Detailed structure

#### Query

```graphql
mutation updateFreelancerAvailability($input: FreelancerProfileAvailabilityInput!) {
  updateFreelancerAvailability(input: $input) {
    id
    user {
      ...GenericUserFragment
    }
    capacity
    availabilityDateTime
    name
    createdDateTime
  }
}
```

#### Variables

```json
{"input": FreelancerProfileAvailabilityInput}
```

#### Response

```json
{
  "data": {
    "updateFreelancerAvailability": {
      "id": "4",
      "user": GenericUser,
      "capacity": "fullTime",
      "availabilityDateTime": "xyz789",
      "name": "xyz789",
      "createdDateTime": "abc123"
    }
  }
}
```
