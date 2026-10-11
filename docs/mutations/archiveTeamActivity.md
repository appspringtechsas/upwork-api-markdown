---
title: "archiveTeamActivity"
kind: "mutation"
gql_name: "archiveTeamActivity"
returns: "ProcessUpdateResponse"
html_id: "mutation-archiveTeamActivity"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-archiveTeamActivity"
generated_by: "scripts/convert.mjs"
---


# `archiveTeamActivity`

## Description

Archive activities. A user needs to have hiring manager privileges within the team in order to create an activity at team level

## Required Permissions

"Activity Entities - Read and Write Access"

## Response

Returns a [`ProcessUpdateResponse`](../types/ProcessUpdateResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `orgId` | [`ID!`](../scalars/ID.md) | The org id where the team belongs to |
| `teamId` | [`ID`](../scalars/ID.md) | The team id where activity is being archived |
| `codes` | [`[String!]!`](../scalars/String.md) | List of activity codes to be archived |

## Examples

### Detailed structure

#### Query

```graphql
mutation archiveTeamActivity(
  $orgId: ID!,
  $teamId: ID,
  $codes: [String!]!
) {
  archiveTeamActivity(
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
  "orgId": "4",
  "teamId": 4,
  "codes": ["xyz789"]
}
```

#### Response

```json
{"data": {"archiveTeamActivity": {"success": false}}}
```
