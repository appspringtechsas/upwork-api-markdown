---
title: "removeFreelancerEmploymentRecord"
kind: "mutation"
gql_name: "removeFreelancerEmploymentRecord"
returns: "Boolean"
html_id: "mutation-removeFreelancerEmploymentRecord"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-removeFreelancerEmploymentRecord"
generated_by: "scripts/convert.mjs"
---


# `removeFreelancerEmploymentRecord`

## Description

Delete employment record of the freelancer by employment record's id (provided userId is ignored and taken from the context)

## Required Permissions

"Freelancer Profile - Read And Write Access"

## Response

Returns a [`Boolean`](../scalars/Boolean.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | ID of the employment record to be deleted |
| `userId` | [`ID!`](../scalars/ID.md) | User ID of the freelancer |

## Examples

### Detailed structure

#### Query

```graphql
mutation removeFreelancerEmploymentRecord(
  $id: ID!,
  $userId: ID!
) {
  removeFreelancerEmploymentRecord(
    id: $id,
    userId: $userId
  )
}
```

#### Variables

```json
{"id": 4, "userId": 4}
```

#### Response

```json
{"data": {"removeFreelancerEmploymentRecord": false}}
```
