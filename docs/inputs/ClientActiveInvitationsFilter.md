---
title: "ClientActiveInvitationsFilter"
kind: "input_object"
domain: "Proposals"
gql_name: "ClientActiveInvitationsFilter"
html_id: "definition-ClientActiveInvitationsFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientActiveInvitationsFilter"
generated_by: "scripts/convert.mjs"
---


# `ClientActiveInvitationsFilter` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `freelancerIds_any` | [`[ID!]`](../scalars/ID.md) | List of freelancers' ids for whom invitations to be searched |
| `freelancerOrgId_eq` | [`ID`](../scalars/ID.md) | Orgid of the freelancer for which invitations to be searched |
| `freelancerSubOrgId_eq` | [`ID`](../scalars/ID.md) |  |
| `status_any` | [`[ClientActiveInvitationStatusFilter]`](../enums/ClientActiveInvitationStatusFilter.md) | Filter by status of invitation (only active) |

## Examples

### Example

```json
{
  "freelancerIds_any": ["4"],
  "freelancerOrgId_eq": 4,
  "freelancerSubOrgId_eq": "4",
  "status_any": ["Drafted"]
}
```
