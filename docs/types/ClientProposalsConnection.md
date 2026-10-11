---
title: "ClientProposalsConnection"
kind: "object"
domain: "Proposals"
gql_name: "ClientProposalsConnection"
html_id: "definition-ClientProposalsConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientProposalsConnection"
generated_by: "scripts/convert.mjs"
---


# `ClientProposalsConnection` (object)

## Description

Connection to the client proposal list

## Fields

| Field | Type | Description |
|---|---|---|
| `totalCount` | [`Int`](../scalars/Int.md) | Total number of client proposals matching filters |
| `edges` | [`[ClientProposalsEdge]`](ClientProposalsEdge.md) | Edges containing client proposals and cursors |
| `pageInfo` | [`PageInfo`](PageInfo.md) |  |

## Examples

### Example

```json
{
  "totalCount": 987,
  "edges": [ClientProposalsEdge],
  "pageInfo": PageInfo
}
```
