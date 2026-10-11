---
title: "UserFreelancerProfilesSearchRecord"
kind: "object"
domain: "Search"
gql_name: "UserFreelancerProfilesSearchRecord"
html_id: "definition-UserFreelancerProfilesSearchRecord"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UserFreelancerProfilesSearchRecord"
generated_by: "scripts/convert.mjs"
---


# `UserFreelancerProfilesSearchRecord` (object)

## Description

Search record for user freelancer profiles

## Fields

| Field | Type | Description |
|---|---|---|
| `shortName` | [`String`](../scalars/String.md) | Short name of the freelancer |
| `ciphertext` | [`String`](../scalars/String.md) | Freelancer's ciphertext |
| `user` | [`GenericUser`](GenericUser.md) | Freelancer user details |
| `userProfile` | [`FreelancerProfile`](FreelancerProfile.md) | Freelancer profile details |

## Examples

### Example

```json
{
  "shortName": "abc123",
  "ciphertext": "xyz789",
  "user": GenericUser,
  "userProfile": FreelancerProfile
}
```
