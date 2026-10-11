---
title: "createClientJobInvitation"
kind: "mutation"
gql_name: "createClientJobInvitation"
returns: "ID!"
html_id: "mutation-createClientJobInvitation"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-createClientJobInvitation"
generated_by: "scripts/convert.mjs"
---


# `createClientJobInvitation`

## Description

Creates a new invitation for a given freelancer, client and jobPosting parameters

## Required Permissions

"Management Job Postings"

## Response

Returns an [`ID!`](../scalars/ID.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `clientJobInvitationCreateRequest` | [`ClientJobInvitationCreateRequestInput!`](../inputs/ClientJobInvitationCreateRequestInput.md) | Input for creating client job invitation |

## Examples

### Detailed structure

#### Query

```graphql
mutation createClientJobInvitation($clientJobInvitationCreateRequest: ClientJobInvitationCreateRequestInput!) {
  createClientJobInvitation(clientJobInvitationCreateRequest: $clientJobInvitationCreateRequest)
}
```

#### Variables

```json
{
  "clientJobInvitationCreateRequest": ClientJobInvitationCreateRequestInput
}
```

#### Response

```json
{"data": {"createClientJobInvitation": 4}}
```
