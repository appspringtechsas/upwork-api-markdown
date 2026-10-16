---
title: "hideClientProposal"
kind: "mutation"
gql_name: "hideClientProposal"
returns: "UpdateClientProposalResult!"
html_id: "mutation-hideClientProposal"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-hideClientProposal"
generated_by: "scripts/convert.mjs"
---


# `hideClientProposal`

## Description

Toggle hide status on the client proposal.

## Required Permissions

"Client Proposals - Read And Write Access"

## Response

Returns an [`UpdateClientProposalResult!`](../types/UpdateClientProposalResult.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `clientProposalHideRequest` | [`ClientProposalHideRequest!`](../inputs/ClientProposalHideRequest.md) | Client proposal hide request |

## Examples

### Detailed structure

#### Query

```graphql
mutation hideClientProposal($clientProposalHideRequest: ClientProposalHideRequest!) {
  hideClientProposal(clientProposalHideRequest: $clientProposalHideRequest) {
    proposal {
      ...ClientProposalFragment
    }
    status
  }
}
```

#### Variables

```json
{"clientProposalHideRequest": ClientProposalHideRequest}
```

#### Response

```json
{
  "data": {
    "hideClientProposal": {
      "proposal": ClientProposal,
      "status": "SUCCESS"
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-hideClientProposal" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [declineClientProposal](declineClientProposal.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [markClientProposalAsRead](markClientProposalAsRead.md) ➡️
