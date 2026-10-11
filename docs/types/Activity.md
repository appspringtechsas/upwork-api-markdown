---
title: "Activity"
kind: "object"
domain: "Users and teams"
gql_name: "Activity"
html_id: "definition-Activity"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Activity"
generated_by: "scripts/convert.mjs"
---


# `Activity` (object)

## Description

Represents a task/activity available for time tracking

## Fields

| Field | Type | Description |
|---|---|---|
| `totalContracts` | [`Int!`](../scalars/Int.md) | Defines the total number of associated contracts Example: "0" |
| `url` | [`String`](../scalars/String.md) | Defines associated URL |
| `codeOrder` | [`String`](../scalars/String.md) | Defines code order Example: "team_task_01" |
| `status` | [`String!`](../scalars/String.md) | Defines activity status Example: "active" |
| `level` | [`String`](../scalars/String.md) | Defines activity level Example: "team" |
| `contracts` | [`[ActivityContract]`](ActivityContract.md) | Defines list of related contracts Example: "[12345, 67890]" |
| `userId` | [`ID`](../scalars/ID.md) | Defines the user, which the activity is assigned to |
| `code` | [`String!`](../scalars/String.md) | Defines activity code |
| `createdTime` | [`String`](../scalars/String.md) | Defines the exact time when the activity was created Example: "2023-01-16 09:12:57" |
| `companyId` | [`String`](../scalars/String.md) | Defines the company ID, which the activity belongs to Example: "mycompanyid" |
| `recordId` | [`ID!`](../scalars/ID.md) | Defines unique record ID |
| `teamId` | [`ID`](../scalars/ID.md) | Defines the team ID, which the activity belongs to Example: "myteamid" |
| `description` | [`String`](../scalars/String.md) | Defines activity description Example: "my test activity" |

## Examples

### Example

```json
{
  "totalContracts": 987,
  "url": "xyz789",
  "codeOrder": "abc123",
  "status": "xyz789",
  "level": "xyz789",
  "contracts": [ActivityContract],
  "userId": "4",
  "code": "xyz789",
  "createdTime": "xyz789",
  "companyId": "xyz789",
  "recordId": "4",
  "teamId": 4,
  "description": "abc123"
}
```
