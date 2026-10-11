---
title: "FreelancerProfileProjectContractLink"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileProjectContractLink"
html_id: "definition-FreelancerProfileProjectContractLink"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileProjectContractLink"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileProjectContractLink` (object)

## Description

Project Contract link

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Unique identifier of the project-contract link |
| `contract` | [`FreelancerProfileContract`](FreelancerProfileContract.md) |  |
| `state` | [`String`](../scalars/String.md) | State of the link |
| `project` | [`FreelancerProfileProject`](FreelancerProfileProject.md) | Related project |
| `client` | [`GenericUser`](GenericUser.md) | Client user |
| `freelancer` | [`GenericUser`](GenericUser.md) | Freelancer user |
| `notificationDateTime` | [`String`](../scalars/String.md) | Notification timestamp |
| `createdDateTime` | [`String!`](../scalars/String.md) | Creation timestamp |

## Examples

### Example

```json
{
  "id": "4",
  "contract": FreelancerProfileContract,
  "state": "xyz789",
  "project": FreelancerProfileProject,
  "client": GenericUser,
  "freelancer": GenericUser,
  "notificationDateTime": "abc123",
  "createdDateTime": "abc123"
}
```
