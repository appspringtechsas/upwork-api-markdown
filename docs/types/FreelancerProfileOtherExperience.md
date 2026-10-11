---
title: "FreelancerProfileOtherExperience"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileOtherExperience"
html_id: "definition-FreelancerProfileOtherExperience"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileOtherExperience"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileOtherExperience` (object)

## Description

Other experience record for a freelancer

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Other experience record identifier |
| `user` | [`GenericUser!`](GenericUser.md) | User who owns this experience record |
| `subject` | [`String!`](../scalars/String.md) | Subject of the experience |
| `description` | [`String!`](../scalars/String.md) | Description of experience |
| `active` | [`Boolean`](../scalars/Boolean.md) | If this experience is still active |
| `createdDateTime` | [`String!`](../scalars/String.md) | Date time formatted according to ISO-8601 |
| `updatedDateTime` | [`String!`](../scalars/String.md) | Date time formatted according to ISO-8601 |

## Examples

### Example

```json
{
  "id": "4",
  "user": GenericUser,
  "subject": "xyz789",
  "description": "xyz789",
  "active": true,
  "createdDateTime": "abc123",
  "updatedDateTime": "xyz789"
}
```
