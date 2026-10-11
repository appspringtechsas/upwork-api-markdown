---
title: "unarchiveTeamActivity"
kind: "mutation"
gql_name: "unarchiveTeamActivity"
returns: "ProcessUpdateResponse"
html_id: "mutation-unarchiveTeamActivity"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-unarchiveTeamActivity"
generated_by: "scripts/convert.mjs"
---


# `unarchiveTeamActivity`

## Description

Unarchive activities. A user needs to have hiring manager privileges within the team in order to create an activity at team level

## Required Permissions

"Activity Entities - Read and Write Access"

## Response

Returns a [`ProcessUpdateResponse`](../types/ProcessUpdateResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `orgId` | [`ID!`](../scalars/ID.md) | The org id where the team belongs to |
| `teamId` | [`ID`](../scalars/ID.md) | The team id where activity is being unarchived |
| `codes` | [`[String!]!`](../scalars/String.md) | List of activity codes to be unarchived |

## Examples

### Detailed structure

#### Query

```graphql
mutation unarchiveTeamActivity(
  $orgId: ID!,
  $teamId: ID,
  $codes: [String!]!
) {
  unarchiveTeamActivity(
    orgId: $orgId,
    teamId: $teamId,
    codes: $codes
  ) {
    success
  }
}
```

#### Variables

```json
{
  "orgId": 4,
  "teamId": "4",
  "codes": ["abc123"]
}
```

#### Response

```json
{"data": {"unarchiveTeamActivity": {"success": true}}}
```
