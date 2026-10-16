---
title: "FreelancerProfileCapacityInput"
kind: "input_object"
domain: "Users and teams"
gql_name: "FreelancerProfileCapacityInput"
html_id: "definition-FreelancerProfileCapacityInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileCapacityInput"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileCapacityInput` (input object)

## Description

Input for updating freelancer availability

## Fields

| Field | Type | Description |
|---|---|---|
| `capacity` | [`FreelancerProfileAvailabilityCapacity`](../enums/FreelancerProfileAvailabilityCapacity.md) | Availability capacity selection |
| `availabilityDateTime` | [`String`](../scalars/String.md) | Next availability date |
| `creationDateTime` | [`String!`](../scalars/String.md) | Creation timestamp |
| `sourceInput` | [`AvailabilitySource`](../enums/AvailabilitySource.md) | Source of the availability update |

## Examples

### Example

```json
{
  "capacity": "fullTime",
  "availabilityDateTime": "xyz789",
  "creationDateTime": "abc123",
  "sourceInput": "st_assgn_e"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileCapacityInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [FreelancerProfileAvailabilityInput](FreelancerProfileAvailabilityInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [FreelancerProfileEducationRecordsFilter](FreelancerProfileEducationRecordsFilter.md) ➡️
