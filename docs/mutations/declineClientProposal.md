---
title: "declineClientProposal"
kind: "mutation"
gql_name: "declineClientProposal"
returns: "UpdateClientProposalResult!"
html_id: "mutation-declineClientProposal"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-declineClientProposal"
generated_by: "scripts/convert.mjs"
---


# `declineClientProposal`

## Description

Decline client proposal

## Required Permissions

"Client Proposals - Read And Write Access"

## Response

Returns an [`UpdateClientProposalResult!`](../types/UpdateClientProposalResult.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `clientProposalDeclineRequest` | [`ClientProposalDeclineRequest`](../inputs/ClientProposalDeclineRequest.md) | Client proposal decline request |

## Examples

### Detailed structure

#### Query

```graphql
mutation declineClientProposal($clientProposalDeclineRequest: ClientProposalDeclineRequest) {
  declineClientProposal(clientProposalDeclineRequest: $clientProposalDeclineRequest) {
    proposal {
      ...ClientProposalFragment
    }
    status
  }
}
```

#### Variables

```json
{
  "clientProposalDeclineRequest": ClientProposalDeclineRequest
}
```

#### Response

```json
{
  "data": {
    "declineClientProposal": {
      "proposal": ClientProposal,
      "status": "SUCCESS"
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-declineClientProposal" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [createDirectUploadLinkForRoomMessage](createDirectUploadLinkForRoomMessage.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [hideClientProposal](hideClientProposal.md) ➡️
