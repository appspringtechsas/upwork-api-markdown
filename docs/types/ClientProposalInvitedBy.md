---
title: "ClientProposalInvitedBy"
kind: "object"
domain: "Proposals"
gql_name: "ClientProposalInvitedBy"
html_id: "definition-ClientProposalInvitedBy"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientProposalInvitedBy"
generated_by: "scripts/convert.mjs"
---


# `ClientProposalInvitedBy` (object)

## Description

Information about who invited the freelancer to apply

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | User ID |
| `user` | [`GenericUser`](GenericUser.md) | User details |

## Examples

### Example

```json
{"id": 4, "user": GenericUser}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientProposalInvitedBy" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ClientProposal](ClientProposal.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ClientProposalsConnection](ClientProposalsConnection.md) ➡️
