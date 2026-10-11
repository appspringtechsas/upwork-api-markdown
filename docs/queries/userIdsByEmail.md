---
title: "userIdsByEmail"
kind: "query"
gql_name: "userIdsByEmail"
returns: "UserIdsByEmailResponse"
html_id: "query-userIdsByEmail"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-userIdsByEmail"
generated_by: "scripts/convert.mjs"
---


# `userIdsByEmail`

## Description

Returns a list of user identifiers matching the provided email address

## Required Permissions

"Freelancer Profile - Read And Write Access"

## Response

Returns a [`UserIdsByEmailResponse`](../types/UserIdsByEmailResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `email` | [`String!`](../scalars/String.md) | Email address to search for |

## Examples

### Detailed structure

#### Query

```graphql
query userIdsByEmail($email: String!) {
  userIdsByEmail(email: $email) {
    totalCount
    edges {
      ...UserIdsByEmailRecordEdgeFragment
    }
  }
}
```

#### Variables

```json
{"email": "xyz789"}
```

#### Response

```json
{
  "data": {
    "userIdsByEmail": {
      "totalCount": 123,
      "edges": [UserIdsByEmailRecordEdge]
    }
  }
}
```
