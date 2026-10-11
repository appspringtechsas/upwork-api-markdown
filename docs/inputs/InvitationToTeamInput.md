---
title: "InvitationToTeamInput"
kind: "input_object"
domain: "Users and teams"
gql_name: "InvitationToTeamInput"
html_id: "definition-InvitationToTeamInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-InvitationToTeamInput"
generated_by: "scripts/convert.mjs"
---


# `InvitationToTeamInput` (input object)

## Description

Input for inviting a user to a team

## Fields

| Field | Type | Description |
|---|---|---|
| `flow` | [`InviteToTeamFlow!`](../enums/InviteToTeamFlow.md) | Invite flow type |
| `inviteeEmail` | [`String`](../scalars/String.md) | Email of the invitee |
| `invitedToTopLevelOrganizationId` | [`ID`](../scalars/ID.md) | Top level organization ID to which invitee is invited (deprecated, argument is not used anymore) |
| `invitedToOrganizationsIds` | [`[ID!]`](../scalars/ID.md) | List of team IDs to which invitee is invited (optional, invitedToTopLevelOrganizationId could be enough) |
| `inviterUserId` | [`ID`](../scalars/ID.md) | Inviter user ID (personUid) |
| `landingUrl` | [`String!`](../scalars/String.md) | Landing URL (to which user will be redirected after accepting invitation) |
| `emailParams` | [`InviteToTeamEmailParams`](InviteToTeamEmailParams.md) | Parameters that will be attached to email template |
| `metadata` | [`[StringMapElementInput!]`](StringMapElementInput.md) | Map of metadata |
| `frankoRolesToBeAssigned` | [`[String]`](../scalars/String.md) | List of roles to be granted to invitee |
| `hierarchical` | [`Boolean`](../scalars/Boolean.md) | Flag to assign roles to org and all its descendant teams |
| `includeFirstOrgIdAsParticipant` | [`Boolean`](../scalars/Boolean.md) | flag to include first org uid from invitedToOrganizationsIds as participant in IDBC check |

## Examples

### Example

```json
{
  "flow": "HELP_ME_HIRE",
  "inviteeEmail": "abc123",
  "invitedToTopLevelOrganizationId": "4",
  "invitedToOrganizationsIds": ["4"],
  "inviterUserId": 4,
  "landingUrl": "xyz789",
  "emailParams": InviteToTeamEmailParams,
  "metadata": [StringMapElementInput],
  "frankoRolesToBeAssigned": ["abc123"],
  "hierarchical": true,
  "includeFirstOrgIdAsParticipant": false
}
```
