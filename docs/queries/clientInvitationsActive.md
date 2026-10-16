---
title: "clientInvitationsActive"
kind: "query"
gql_name: "clientInvitationsActive"
returns: "ClientInvitationConnection"
html_id: "query-clientInvitationsActive"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-clientInvitationsActive"
generated_by: "scripts/convert.mjs"
---


# `clientInvitationsActive`

## Description

Returns client active invitations for a given job posting

## Required Permissions

"List Invitation Entities as a client - Read-Only Access"

## Response

Returns a [`ClientInvitationConnection`](../types/ClientInvitationConnection.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `jobPostingId` | [`ID!`](../scalars/ID.md) | Job posting identifier |
| `filter` | [`ClientActiveInvitationsFilter`](../inputs/ClientActiveInvitationsFilter.md) | Filter for active invitations |
| `sortAttribute` | [`InvitationsSortAttribute`](../inputs/InvitationsSortAttribute.md) | Sort options |
| `pagination` | [`Pagination`](../inputs/Pagination.md) | Pagination options |

## Examples

### Detailed structure

#### Query

```graphql
query clientInvitationsActive(
  $jobPostingId: ID!,
  $filter: ClientActiveInvitationsFilter,
  $sortAttribute: InvitationsSortAttribute,
  $pagination: Pagination
) {
  clientInvitationsActive(
    jobPostingId: $jobPostingId,
    filter: $filter,
    sortAttribute: $sortAttribute,
    pagination: $pagination
  ) {
    totalCount
    edges {
      ...ClientInvitationEdgeFragment
    }
    pageInfo {
      ...PageInfoFragment
    }
  }
}
```

#### Variables

```json
{
  "jobPostingId": 4,
  "filter": ClientActiveInvitationsFilter,
  "sortAttribute": InvitationsSortAttribute,
  "pagination": Pagination
}
```

#### Response

```json
{
  "data": {
    "clientInvitationsActive": {
      "totalCount": 123,
      "edges": [ClientInvitationEdge],
      "pageInfo": PageInfo
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-clientInvitationsActive" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [clientInvitation](clientInvitation.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [proposalMetadata](proposalMetadata.md) ➡️
