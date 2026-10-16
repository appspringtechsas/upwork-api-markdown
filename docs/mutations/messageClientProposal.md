---
title: "messageClientProposal"
kind: "mutation"
gql_name: "messageClientProposal"
returns: "UpdateClientProposalResult!"
html_id: "mutation-messageClientProposal"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-messageClientProposal"
generated_by: "scripts/convert.mjs"
---


# `messageClientProposal`

## Description

Message client proposal

## Required Permissions

"Client Proposals - Read And Write Access"

## Response

Returns an [`UpdateClientProposalResult!`](../types/UpdateClientProposalResult.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `clientProposalMessageRequest` | [`ClientProposalMessageRequest`](../inputs/ClientProposalMessageRequest.md) | Client proposal message request |

## Examples

### Detailed structure

#### Query

```graphql
mutation messageClientProposal($clientProposalMessageRequest: ClientProposalMessageRequest) {
  messageClientProposal(clientProposalMessageRequest: $clientProposalMessageRequest) {
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
  "clientProposalMessageRequest": ClientProposalMessageRequest
}
```

#### Response

```json
{
  "data": {
    "messageClientProposal": {
      "proposal": ClientProposal,
      "status": "SUCCESS"
    }
  }
}
```

### Real-life example

#### Query

```graphql
mutation MessageClientProposal($clientProposalMessageRequest: ClientProposalMessageRequest!) {
  messageClientProposal(clientProposalMessageRequest: $clientProposalMessageRequest) {
    status
    proposal {
      id
      room {
        id
      }
    }
  }
}
```

#### Variables

```json
{
  "clientProposalMessageRequest": {
    "jobPostingId": "2056499367840778935",
    "proposalId": "2056554407241740289",
    "message": "Hello!"
  }
}
```

#### Response

```json
{
    "data": {
        "messageClientProposal": {
            "status": "SUCCESS",
            "proposal": {
                "id": "2056554407241740289",
                "room": {
                    "id": "room_a48df862a63217a25b83eb49ec457b71"
                }
            }
        }
    }
}
```

## Used in sample flows

- Step **3** (Message client proposal) in [Working with Proposals as a client](../operations/examples/proposals.md)

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-messageClientProposal" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [markClientProposalAsRead](markClientProposalAsRead.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [shortlistClientProposal](shortlistClientProposal.md) ➡️
