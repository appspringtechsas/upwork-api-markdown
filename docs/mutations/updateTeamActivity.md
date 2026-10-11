---
title: "updateTeamActivity"
kind: "mutation"
gql_name: "updateTeamActivity"
returns: "ProcessUpdateResponse"
html_id: "mutation-updateTeamActivity"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-updateTeamActivity"
generated_by: "scripts/convert.mjs"
---


# `updateTeamActivity`

## Description

Update activity at team level. A user needs to have hiring manager privileges within the team in order to create an activity at team level

## Required Permissions

"Activity Entities - Read and Write Access"

## Response

Returns a [`ProcessUpdateResponse`](../types/ProcessUpdateResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `orgId` | [`ID!`](../scalars/ID.md) | The org id where the team belongs to |
| `teamId` | [`ID`](../scalars/ID.md) | The team id where activity is being updated |
| `request` | [`UpdateTeamActivityRequest!`](../inputs/UpdateTeamActivityRequest.md) | The request object containing the updated activity details |

## Examples

### Detailed structure

#### Query

```graphql
mutation updateTeamActivity(
  $orgId: ID!,
  $teamId: ID,
  $request: UpdateTeamActivityRequest!
) {
  updateTeamActivity(
    orgId: $orgId,
    teamId: $teamId,
    request: $request
  ) {
    success
  }
}
```

#### Variables

```json
{
  "orgId": "4",
  "teamId": "4",
  "request": UpdateTeamActivityRequest
}
```

#### Response

```json
{"data": {"updateTeamActivity": {"success": true}}}
```
