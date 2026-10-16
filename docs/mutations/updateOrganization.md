---
title: "updateOrganization"
kind: "mutation"
gql_name: "updateOrganization"
returns: "AccountProcessInstance!"
html_id: "mutation-updateOrganization"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-updateOrganization"
generated_by: "scripts/convert.mjs"
---


# `updateOrganization`

## Description

Update organization data

## Required Permissions

"Organization - Read and Write access"

## Response

Returns an [`AccountProcessInstance!`](../types/AccountProcessInstance.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`UpdateOrganizationInput!`](../inputs/UpdateOrganizationInput.md) | Input for updating organization request |

## Examples

### Detailed structure

#### Query

```graphql
mutation updateOrganization($input: UpdateOrganizationInput!) {
  updateOrganization(input: $input) {
    id
    success
  }
}
```

#### Variables

```json
{"input": UpdateOrganizationInput}
```

#### Response

```json
{
  "data": {
    "updateOrganization": {
      "id": "4",
      "success": false
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-updateOrganization" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [updateFreelancerOtherExperience](updateFreelancerOtherExperience.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [updateRoomStoryV2](updateRoomStoryV2.md) ➡️
