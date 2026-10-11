---
title: "GenericUser"
kind: "object"
domain: "Users and teams"
gql_name: "GenericUser"
html_id: "definition-GenericUser"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-GenericUser"
generated_by: "scripts/convert.mjs"
---


# `GenericUser` (object)

## Description

Information about regular user

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Unique user identifier Example: 1181921839933591552 |
| `nid` | [`ID!`](../scalars/ID.md) | Nickname ID of a user. Please, only use if really needed. Unique ID should be used when possible. Example: foofreelancer |
| `rid` | [`ID!`](../scalars/ID.md) | Record ID of a user. Please, only use if really needed. Unique ID should be used when possible. Example: 2366358 |
| `name` | [`String`](../scalars/String.md) | First name + abbreviated last name, e.g. John Smith -> John S. |
| `firstName` | [`String`](../scalars/String.md) | First name of the user. |
| `lastName` | [`String`](../scalars/String.md) | Last name of the user. |
| `photoUrl` | [`String`](../scalars/String.md) | Photo URL of the user. |
| `publicUrl` | [`String`](../scalars/String.md) | The public user url |
| `email` | [`String`](../scalars/String.md) | Email of user |
| `location` | [`UserLocation`](UserLocation.md) | User's location |
| `freelancerProfile` | [`FreelancerProfile`](FreelancerProfile.md) | Freelancer profile for the specified user |
| `ciphertext` | [`String`](../scalars/String.md) | Unique ciphertext identifier |
| `talentProfile` | [`TalentProfile`](TalentProfile.md) | Get talent profile for the user |

## Examples

### Example

```json
{
  "id": "4",
  "nid": 4,
  "rid": "4",
  "name": "abc123",
  "firstName": "abc123",
  "lastName": "abc123",
  "photoUrl": "xyz789",
  "publicUrl": "xyz789",
  "email": "abc123",
  "location": UserLocation,
  "freelancerProfile": FreelancerProfile,
  "ciphertext": "xyz789",
  "talentProfile": TalentProfile
}
```
