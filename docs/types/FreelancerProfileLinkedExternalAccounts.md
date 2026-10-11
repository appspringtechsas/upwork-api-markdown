---
title: "FreelancerProfileLinkedExternalAccounts"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileLinkedExternalAccounts"
html_id: "definition-FreelancerProfileLinkedExternalAccounts"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileLinkedExternalAccounts"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileLinkedExternalAccounts` (object)

## Description

Linked external account details for a freelancer profile

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Linked external account identifier |
| `name` | [`String!`](../scalars/String.md) | Name of the social network (e.g., facebook, github, twitter etc) |
| `expiryDateTime` | [`String`](../scalars/String.md) | Expires on |
| `revokedDateTime` | [`String`](../scalars/String.md) | Revoked on |
| `authorizedDateTime` | [`String!`](../scalars/String.md) | Authorization done on |
| `userProfile` | [`String!`](../scalars/String.md) | Link to the user profile on that social network |

## Examples

### Example

```json
{
  "id": 4,
  "name": "xyz789",
  "expiryDateTime": "xyz789",
  "revokedDateTime": "xyz789",
  "authorizedDateTime": "xyz789",
  "userProfile": "xyz789"
}
```
