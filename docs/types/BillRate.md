---
title: "BillRate"
kind: "object"
domain: "Reporting"
gql_name: "BillRate"
html_id: "definition-BillRate"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-BillRate"
generated_by: "scripts/convert.mjs"
---


# `BillRate` (object)

## Description

Billing rate information for a time report

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Bill rate id |
| `value` | [`Float!`](../scalars/Float.md) | Bill rate value |
| `code` | [`String!`](../scalars/String.md) | Bill rate code |
| `offerRef` | [`ID!`](../scalars/ID.md) | Offer reference id of the bill rate |

## Examples

### Example

```json
{
  "id": 4,
  "value": 123.45,
  "code": "abc123",
  "offerRef": 4
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-BillRate" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [VendorProposalStatus](VendorProposalStatus.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [Cell](Cell.md) ➡️
