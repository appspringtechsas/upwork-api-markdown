---
title: "VendorProposalsConnection"
kind: "object"
domain: "Proposals"
gql_name: "VendorProposalsConnection"
html_id: "definition-VendorProposalsConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorProposalsConnection"
generated_by: "scripts/convert.mjs"
---


# `VendorProposalsConnection` (object)

## Description

Connection to the vendor proposal list

## Fields

| Field | Type | Description |
|---|---|---|
| `totalCount` | [`Int`](../scalars/Int.md) | Total number of proposals matching filters |
| `edges` | [`[VendorProposalsEdge]`](VendorProposalsEdge.md) | Edges containing vendor proposals and cursors |
| `pageInfo` | [`PageInfo`](PageInfo.md) | Contains information about pagination, such as whether there are more results to fetch. |

## Examples

### Example

```json
{
  "totalCount": 987,
  "edges": [VendorProposalsEdge],
  "pageInfo": PageInfo
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorProposalsConnection" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [VendorProposal](VendorProposal.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [VendorProposalsEdge](VendorProposalsEdge.md) ➡️
