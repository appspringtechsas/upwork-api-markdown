---
title: "InviteToInterview"
kind: "object"
domain: "Proposals"
gql_name: "InviteToInterview"
html_id: "definition-InviteToInterview"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-InviteToInterview"
generated_by: "scripts/convert.mjs"
---


# `InviteToInterview` (object)

## Description

invite to interview on which the proposal is created by accepting it

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Invite to interview identifier |
| `invitedBy` | [`ClientProposalInvitedBy`](ClientProposalInvitedBy.md) | Client user who created the invitation |

## Examples

### Example

```json
{"id": 4, "invitedBy": ClientProposalInvitedBy}
```
