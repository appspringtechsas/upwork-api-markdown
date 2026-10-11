---
title: "ClientJobInvitationCreateRequestInput"
kind: "input_object"
domain: "Proposals"
gql_name: "ClientJobInvitationCreateRequestInput"
html_id: "definition-ClientJobInvitationCreateRequestInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientJobInvitationCreateRequestInput"
generated_by: "scripts/convert.mjs"
---


# `ClientJobInvitationCreateRequestInput` (input object)

## Description

Input for creating client job invitation

## Fields

| Field | Type | Description |
|---|---|---|
| `jobPostingId` | [`ID!`](../scalars/ID.md) | ID of the associated job |
| `invitationLetter` | [`String`](../scalars/String.md) | Invitation letter from client |
| `freelancerId` | [`ID!`](../scalars/ID.md) | Freelancer ID |

## Examples

### Example

```json
{
  "jobPostingId": 4,
  "invitationLetter": "abc123",
  "freelancerId": "4"
}
```
