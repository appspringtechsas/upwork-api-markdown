---
title: "markClientProposalAsRead"
kind: "mutation"
gql_name: "markClientProposalAsRead"
returns: "UpdateClientProposalResult!"
html_id: "mutation-markClientProposalAsRead"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-markClientProposalAsRead"
generated_by: "scripts/convert.mjs"
---


# `markClientProposalAsRead`

## Description

Mark client proposal as read

## Required Permissions

"Client Proposals - Read And Write Access"

## Response

Returns an [`UpdateClientProposalResult!`](../types/UpdateClientProposalResult.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `clientProposalReadRequest` | [`ClientProposalReadRequest`](../inputs/ClientProposalReadRequest.md) | Client proposal read request |

## Examples

### Detailed structure

#### Query

```graphql
mutation markClientProposalAsRead($clientProposalReadRequest: ClientProposalReadRequest) {
  markClientProposalAsRead(clientProposalReadRequest: $clientProposalReadRequest) {
    proposal {
      ...ClientProposalFragment
    }
    status
  }
}
```

#### Variables

```json
{"clientProposalReadRequest": ClientProposalReadRequest}
```

#### Response

```json
{
  "data": {
    "markClientProposalAsRead": {
      "proposal": ClientProposal,
      "status": "SUCCESS"
    }
  }
}
```
