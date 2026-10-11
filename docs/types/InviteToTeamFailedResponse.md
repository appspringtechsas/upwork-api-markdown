---
title: "InviteToTeamFailedResponse"
kind: "object"
domain: "Users and teams"
gql_name: "InviteToTeamFailedResponse"
html_id: "definition-InviteToTeamFailedResponse"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-InviteToTeamFailedResponse"
generated_by: "scripts/convert.mjs"
---


# `InviteToTeamFailedResponse` (object)

## Description

Failed response for invite to team

## Fields

| Field | Type | Description |
|---|---|---|
| `code` | [`String`](../scalars/String.md) | Failure code |
| `message` | [`String`](../scalars/String.md) | Human-readable failure message |
| `invitation` | [`FailedInvitation`](FailedInvitation.md) | Failed invitation payload |

## Examples

### Example

```json
{
  "code": "xyz789",
  "message": "abc123",
  "invitation": FailedInvitation
}
```
