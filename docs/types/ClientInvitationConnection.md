---
title: "ClientInvitationConnection"
kind: "object"
domain: "Proposals"
gql_name: "ClientInvitationConnection"
html_id: "definition-ClientInvitationConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientInvitationConnection"
generated_by: "scripts/convert.mjs"
---


# `ClientInvitationConnection` (object)

## Fields

| Field | Type | Description |
|---|---|---|
| `totalCount` | [`Int`](../scalars/Int.md) |  |
| `edges` | [`[ClientInvitationEdge]!`](ClientInvitationEdge.md) |  |
| `pageInfo` | [`PageInfo`](PageInfo.md) |  |

## Examples

### Example

```json
{
  "totalCount": 123,
  "edges": [ClientInvitationEdge],
  "pageInfo": PageInfo
}
```
