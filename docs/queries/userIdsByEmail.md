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
{"email": "abc123"}
```

#### Response

```json
{
  "data": {
    "userIdsByEmail": {
      "totalCount": 987,
      "edges": [UserIdsByEmailRecordEdge]
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-userIdsByEmail" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [userDetails](userDetails.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [workDiaryCompany](workDiaryCompany.md) ➡️
