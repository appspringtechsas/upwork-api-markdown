---
title: "ClientInvitationAcceptanceContext"
kind: "object"
domain: "Proposals"
gql_name: "ClientInvitationAcceptanceContext"
html_id: "definition-ClientInvitationAcceptanceContext"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientInvitationAcceptanceContext"
generated_by: "scripts/convert.mjs"
---


# `ClientInvitationAcceptanceContext` (object)

## Fields

| Field | Type | Description |
|---|---|---|
| `organization` | [`GenericOrganization!`](GenericOrganization.md) |  |
| `context` | [`ClientInvitationContext`](../enums/ClientInvitationContext.md) |  |
| `acceptedBy` | [`GenericUser!`](GenericUser.md) |  |
| `acceptedDateTime` | [`String!`](../scalars/String.md) |  |

## Examples

### Example

```json
{
  "organization": GenericOrganization,
  "context": "Freelancer",
  "acceptedBy": GenericUser,
  "acceptedDateTime": "abc123"
}
```
