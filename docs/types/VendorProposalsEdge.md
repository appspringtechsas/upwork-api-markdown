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

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorProposalsEdge" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [VendorProposalsConnection](VendorProposalsConnection.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [VendorProposalStatus](VendorProposalStatus.md) ➡️
