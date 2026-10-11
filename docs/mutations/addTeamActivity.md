---
title: "addTeamActivity"
kind: "mutation"
gql_name: "addTeamActivity"
returns: "ProcessAddResponse"
html_id: "mutation-addTeamActivity"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-addTeamActivity"
generated_by: "scripts/convert.mjs"
---


# `addTeamActivity`

## Description

Create activity at team level. A user needs to have hiring manager privileges within the team in order to create an activity at team level

## Required Permissions

"Activity Entities - Read and Write Access"

## Response

Returns a [`ProcessAddResponse`](../types/ProcessAddResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `orgId` | [`ID!`](../scalars/ID.md) | The org id where the team belongs to |
| `teamId` | [`ID`](../scalars/ID.md) | The team id where activity is being created |
| `request` | [`AddTeamActivityRequest!`](../inputs/AddTeamActivityRequest.md) | Activity object that is going to be created |

## Examples

### Detailed structure

#### Query

```graphql
mutation addTeamActivity(
  $orgId: ID!,
  $teamId: ID,
  $request: AddTeamActivityRequest!
) {
  addTeamActivity(
    orgId: $orgId,
    teamId: $teamId,
    request: $request
  ) {
    id
    success
  }
}
```

#### Variables

```json
{
  "orgId": "4",
  "teamId": "4",
  "request": AddTeamActivityRequest
}
```

#### Response

```json
{
  "data": {
    "addTeamActivity": {
      "id": "4",
      "success": false
    }
  }
}
```
