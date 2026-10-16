---
title: "createOrganization"
kind: "mutation"
gql_name: "createOrganization"
returns: "AccountProcessInstance!"
html_id: "mutation-createOrganization"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-createOrganization"
generated_by: "scripts/convert.mjs"
---


# `createOrganization`

## Description

Create a new child organization

## Required Permissions

"Organization - Read and Write access"

## Response

Returns an [`AccountProcessInstance!`](../types/AccountProcessInstance.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`CreateOrganizationInput!`](../inputs/CreateOrganizationInput.md) | Input for creating organization request |

## Examples

### Detailed structure

#### Query

```graphql
mutation createOrganization($input: CreateOrganizationInput!) {
  createOrganization(input: $input) {
    id
    success
  }
}
```

#### Variables

```json
{"input": CreateOrganizationInput}
```

#### Response

```json
{"data": {"createOrganization": {"id": 4, "success": true}}}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-createOrganization" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [assignTeamActivityToTheContract](assignTeamActivityToTheContract.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [createRoomStoryV2](createRoomStoryV2.md) ➡️
