---
title: "VendorInvitationConnection"
kind: "object"
domain: "Proposals"
gql_name: "VendorInvitationConnection"
html_id: "definition-VendorInvitationConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorInvitationConnection"
generated_by: "scripts/convert.mjs"
---


# `VendorInvitationConnection` (object)

## Description

Connection type for vendor invitations

## Fields

| Field | Type | Description |
|---|---|---|
| `totalCount` | [`Int`](../scalars/Int.md) | Total number of vendor invitations matching the filter |
| `edges` | [`[VendorInvitationEdge]!`](VendorInvitationEdge.md) | Connection edges containing vendor invitation nodes |
| `pageInfo` | [`PageInfo`](PageInfo.md) | Pagination information |

## Examples

### Example

```json
{
  "totalCount": 987,
  "edges": [VendorInvitationEdge],
  "pageInfo": PageInfo
}
```
