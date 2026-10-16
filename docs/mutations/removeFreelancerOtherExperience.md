---
title: "removeFreelancerOtherExperience"
kind: "mutation"
gql_name: "removeFreelancerOtherExperience"
returns: "Boolean"
html_id: "mutation-removeFreelancerOtherExperience"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-removeFreelancerOtherExperience"
generated_by: "scripts/convert.mjs"
---


# `removeFreelancerOtherExperience`

## Description

Delete other experience of the freelancer by other experience's id (userId is taken from the context)

## Required Permissions

"Freelancer Profile - Read And Write Access"

## Response

Returns a [`Boolean`](../scalars/Boolean.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | ID of the other experience to be deleted |

## Examples

### Detailed structure

#### Query

```graphql
mutation removeFreelancerOtherExperience($id: ID!) {
  removeFreelancerOtherExperience(id: $id)
}
```

#### Variables

```json
{"id": 4}
```

#### Response

```json
{"data": {"removeFreelancerOtherExperience": false}}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-removeFreelancerOtherExperience" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [removeFreelancerEmploymentRecord](removeFreelancerEmploymentRecord.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [removeRoom](removeRoom.md) ➡️
