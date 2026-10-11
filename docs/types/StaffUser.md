---
title: "StaffUser"
kind: "object"
domain: "Users and teams"
gql_name: "StaffUser"
html_id: "definition-StaffUser"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-StaffUser"
generated_by: "scripts/convert.mjs"
---


# `StaffUser` (object)

## Description

Information about staff user

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
| `email` | [`String`](../scalars/String.md) | email of user |

## Examples

### Example

```json
{
  "id": 4,
  "nid": 4,
  "rid": "4",
  "name": "abc123",
  "firstName": "xyz789",
  "lastName": "abc123",
  "photoUrl": "xyz789",
  "publicUrl": "abc123",
  "email": "xyz789"
}
```
