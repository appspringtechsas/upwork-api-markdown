---
title: "inviteToTeam"
kind: "mutation"
gql_name: "inviteToTeam"
returns: "InviteToTeamResponse!"
html_id: "mutation-inviteToTeam"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-inviteToTeam"
generated_by: "scripts/convert.mjs"
---


# `inviteToTeam`

## Description

Invite someone by email or username to an existing team

## Required Permissions

"Organization - Read and Write access"

## Response

Returns an [`InviteToTeamResponse!`](../types/InviteToTeamResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `invitations` | [`[InvitationToTeamInput!]!`](../inputs/InvitationToTeamInput.md) | Invitations payload |

## Examples

### Detailed structure

#### Query

```graphql
mutation inviteToTeam($invitations: [InvitationToTeamInput!]!) {
  inviteToTeam(invitations: $invitations) {
    succeeded {
      ...InviteToTeamSucceededResponseFragment
    }
    failed {
      ...InviteToTeamFailedResponseFragment
    }
  }
}
```

#### Variables

```json
{"invitations": [InvitationToTeamInput]}
```

#### Response

```json
{
  "data": {
    "inviteToTeam": {
      "succeeded": [InviteToTeamSucceededResponse],
      "failed": [InviteToTeamFailedResponse]
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-inviteToTeam" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [createRoomV2](createRoomV2.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [removeFreelancerEmploymentRecord](removeFreelancerEmploymentRecord.md) ➡️
