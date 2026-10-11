---
title: "FreelancerProfileAvailability"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileAvailability"
html_id: "definition-FreelancerProfileAvailability"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileAvailability"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileAvailability` (object)

## Description

Freelancer's Availability

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Availability record identifier |
| `user` | [`GenericUser!`](GenericUser.md) | User this availability belongs to |
| `capacity` | [`FreelancerProfileAvailabilityCapacity`](../enums/FreelancerProfileAvailabilityCapacity.md) | Availability capacity (e.g., More than 30 hours/week, less than 30 hours, As needed - Open to Offers) |
| `availabilityDateTime` | [`String`](../scalars/String.md) | If freelancer's not available, their next availability date |
| `name` | [`String!`](../scalars/String.md) | Availability status name |
| `createdDateTime` | [`String!`](../scalars/String.md) | Creation timestamp |

## Examples

### Example

```json
{
  "id": "4",
  "user": GenericUser,
  "capacity": "fullTime",
  "availabilityDateTime": "xyz789",
  "name": "abc123",
  "createdDateTime": "abc123"
}
```
