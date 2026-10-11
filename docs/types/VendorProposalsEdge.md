---
title: "VendorProposalsEdge"
kind: "object"
domain: "Proposals"
gql_name: "VendorProposalsEdge"
html_id: "definition-VendorProposalsEdge"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorProposalsEdge"
generated_by: "scripts/convert.mjs"
---


# `VendorProposalsEdge` (object)

## Description

Edge in vendor proposals connection

## Fields

| Field | Type | Description |
|---|---|---|
| `cursor` | [`String`](../scalars/String.md) | Cursor for pagination |
| `node` | [`VendorProposal`](VendorProposal.md) | Vendor proposal node |

## Examples

### Example

```json
{
  "cursor": "abc123",
  "node": VendorProposal
}
```
