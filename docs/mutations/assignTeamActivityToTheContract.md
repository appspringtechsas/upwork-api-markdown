---
title: "assignTeamActivityToTheContract"
kind: "mutation"
gql_name: "assignTeamActivityToTheContract"
returns: "ProcessUpdateResponse"
html_id: "mutation-assignTeamActivityToTheContract"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-assignTeamActivityToTheContract"
generated_by: "scripts/convert.mjs"
---


# `assignTeamActivityToTheContract`

## Description

Assign and unassign contract to the list of activities. A user needs to have hiring manager privileges within the team in order to create an activity at team level. Activity appears in freelancer's team client only if his contract is assigned to the activity and activities are activated for the ongoing contract. This mutation overrides assigned contracts for the given activities. For example, if you pass empty list of `codes`, freelancer's contract is unassigned from all the activities it is assigned to

## Required Permissions

"Activity Entities - Read and Write Access"

## Response

Returns a [`ProcessUpdateResponse`](../types/ProcessUpdateResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `orgId` | [`ID!`](../scalars/ID.md) | The org id where the team belongs to |
| `teamId` | [`ID`](../scalars/ID.md) | The team id where activity is being assigned |
| `contractId` | [`ID!`](../scalars/ID.md) | The contract id where activity is being assigned |
| `codes` | [`[String]!`](../scalars/String.md) | List of activity codes to be assigned |

## Examples

### Detailed structure

#### Query

```graphql
mutation assignTeamActivityToTheContract(
  $orgId: ID!,
  $teamId: ID,
  $contractId: ID!,
  $codes: [String]!
) {
  assignTeamActivityToTheContract(
    orgId: $orgId,
    teamId: $teamId,
    contractId: $contractId,
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
  "contractId": "4",
  "codes": ["xyz789"]
}
```

#### Response

```json
{"data": {"assignTeamActivityToTheContract": {"success": true}}}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-assignTeamActivityToTheContract" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [archiveTeamActivity](archiveTeamActivity.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [createOrganization](createOrganization.md) ➡️
