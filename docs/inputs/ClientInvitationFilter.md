---
title: "ClientInvitationFilter"
kind: "input_object"
domain: "Proposals"
gql_name: "ClientInvitationFilter"
html_id: "definition-ClientInvitationFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientInvitationFilter"
generated_by: "scripts/convert.mjs"
---


# `ClientInvitationFilter` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `organizationId_eq` | [`ID!`](../scalars/ID.md) |  |
| `jobPostingId_eq` | [`ID!`](../scalars/ID.md) |  |
| `invitationId_eq` | [`ID!`](../scalars/ID.md) |  |

## Examples

### Example

```json
{
  "organizationId_eq": "4",
  "jobPostingId_eq": 4,
  "invitationId_eq": 4
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientInvitationFilter" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ClientActiveInvitationsFilter](ClientActiveInvitationsFilter.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ClientJobInvitationCreateRequestInput](ClientJobInvitationCreateRequestInput.md) ➡️
