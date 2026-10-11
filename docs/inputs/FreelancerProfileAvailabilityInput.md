---
title: "FreelancerProfileAvailabilityInput"
kind: "input_object"
domain: "Users and teams"
gql_name: "FreelancerProfileAvailabilityInput"
html_id: "definition-FreelancerProfileAvailabilityInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileAvailabilityInput"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileAvailabilityInput` (input object)

## Description

Create freelancer availability input

## Fields

| Field | Type | Description |
|---|---|---|
| `userId` | [`ID!`](../scalars/ID.md) | This field must be deprecated(@unused). id will be extracted from current user context |
| `availability` | [`FreelancerProfileCapacityInput!`](FreelancerProfileCapacityInput.md) | Updated availability payload |

## Examples

### Example

```json
{
  "userId": 4,
  "availability": FreelancerProfileCapacityInput
}
```
