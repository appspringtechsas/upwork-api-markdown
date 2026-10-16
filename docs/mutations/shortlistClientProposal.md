---
title: "shortlistClientProposal"
kind: "mutation"
gql_name: "shortlistClientProposal"
returns: "UpdateClientProposalResult!"
html_id: "mutation-shortlistClientProposal"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-shortlistClientProposal"
generated_by: "scripts/convert.mjs"
---


# `shortlistClientProposal`

## Description

Shortlist client proposal

## Required Permissions

"Client Proposals - Read And Write Access"

## Response

Returns an [`UpdateClientProposalResult!`](../types/UpdateClientProposalResult.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `clientProposalShortlistRequest` | [`ClientProposalShortlistRequest`](../inputs/ClientProposalShortlistRequest.md) | Client proposal shortlist request |

## Examples

### Detailed structure

#### Query

```graphql
mutation shortlistClientProposal($clientProposalShortlistRequest: ClientProposalShortlistRequest) {
  shortlistClientProposal(clientProposalShortlistRequest: $clientProposalShortlistRequest) {
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
  "clientProposalShortlistRequest": ClientProposalShortlistRequest
}
```

#### Response

```json
{
  "data": {
    "shortlistClientProposal": {
      "proposal": ClientProposal,
      "status": "SUCCESS"
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-shortlistClientProposal" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [messageClientProposal](messageClientProposal.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [invoiceDownloadBulkAsyncV2](invoiceDownloadBulkAsyncV2.md) ➡️
