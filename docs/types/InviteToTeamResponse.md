---
title: "InviteToTeamResponse"
kind: "object"
domain: "Users and teams"
gql_name: "InviteToTeamResponse"
html_id: "definition-InviteToTeamResponse"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-InviteToTeamResponse"
generated_by: "scripts/convert.mjs"
---


# `InviteToTeamResponse` (object)

## Description

Invite to team response details

## Fields

| Field | Type | Description |
|---|---|---|
| `succeeded` | [`[InviteToTeamSucceededResponse]!`](InviteToTeamSucceededResponse.md) | Successfully processed invitations |
| `failed` | [`[InviteToTeamFailedResponse]!`](InviteToTeamFailedResponse.md) | Failed invitations with reasons |

## Examples

### Example

```json
{
  "succeeded": [InviteToTeamSucceededResponse],
  "failed": [InviteToTeamFailedResponse]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-InviteToTeamResponse" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [InviteToTeamFailedResponse](InviteToTeamFailedResponse.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [InviteToTeamSucceededResponse](InviteToTeamSucceededResponse.md) ➡️
