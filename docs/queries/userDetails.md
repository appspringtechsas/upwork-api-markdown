---
title: "userDetails"
kind: "query"
gql_name: "userDetails"
returns: "PiiUser!"
html_id: "query-userDetails"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-userDetails"
generated_by: "scripts/convert.mjs"
---


# `userDetails`

## Description

Retrieves the user details based on their unique identifier. This query allows fetching detailed user information based on their ID. Ultimately, it returns the personal identifiable information (PII) of the user.

## Required Permissions

"View UserDetails"

## Response

Returns a [`PiiUser!`](../types/PiiUser.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | The unique identifier of the user. |

## Examples

### Detailed structure

#### Query

```graphql
query userDetails($id: ID!) {
  userDetails(id: $id) {
    id
    nid
    rid
    name
    firstName
    lastName
    photoUrl
    publicUrl
    email
    location {
      ...UserLocationFragment
    }
  }
}
```

#### Variables

```json
{"id": "4"}
```

#### Response

```json
{
  "data": {
    "userDetails": {
      "id": "4",
      "nid": "4",
      "rid": 4,
      "name": "xyz789",
      "firstName": "abc123",
      "lastName": "abc123",
      "photoUrl": "xyz789",
      "publicUrl": "xyz789",
      "email": "xyz789",
      "location": UserLocation
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-userDetails" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [teamActivities](teamActivities.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [userIdsByEmail](userIdsByEmail.md) ➡️
