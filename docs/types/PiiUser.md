---
title: "PiiUser"
kind: "object"
domain: "Users and teams"
gql_name: "PiiUser"
html_id: "definition-PiiUser"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PiiUser"
generated_by: "scripts/convert.mjs"
---


# `PiiUser` (object)

## Description

The personal identifiable information (PII) of the user. This model is used when personal information needs to be exposed to public and enterprise clients.

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
| `publicUrl` | [`String`](../scalars/String.md) | The public user URL |
| `email` | [`String`](../scalars/String.md) | Email of user |
| `location` | [`UserLocation`](UserLocation.md) | Geographic location information of the user |

## Examples

### Example

```json
{
  "id": "4",
  "nid": "4",
  "rid": 4,
  "name": "xyz789",
  "firstName": "xyz789",
  "lastName": "xyz789",
  "photoUrl": "abc123",
  "publicUrl": "xyz789",
  "email": "xyz789",
  "location": UserLocation
}
```
