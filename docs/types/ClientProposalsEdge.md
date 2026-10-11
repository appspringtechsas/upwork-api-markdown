---
title: "ClientProposalsEdge"
kind: "object"
domain: "Proposals"
gql_name: "ClientProposalsEdge"
html_id: "definition-ClientProposalsEdge"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientProposalsEdge"
generated_by: "scripts/convert.mjs"
---


# `ClientProposalsEdge` (object)

## Description

Edge in client proposals connection

## Fields

| Field | Type | Description |
|---|---|---|
| `cursor` | [`String!`](../scalars/String.md) | Cursor for pagination |
| `node` | [`ClientProposal`](ClientProposal.md) | Client proposal node |

## Examples

### Example

```json
{
  "cursor": "xyz789",
  "node": ClientProposal
}
```
