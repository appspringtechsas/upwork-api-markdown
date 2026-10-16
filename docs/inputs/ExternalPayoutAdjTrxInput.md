---
title: "ExternalPayoutAdjTrxInput"
kind: "input_object"
domain: "Other"
gql_name: "ExternalPayoutAdjTrxInput"
html_id: "definition-ExternalPayoutAdjTrxInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ExternalPayoutAdjTrxInput"
generated_by: "scripts/convert.mjs"
---


# `ExternalPayoutAdjTrxInput` (input object)

## Description

Input for individual credit data transaction

## Fields

| Field | Type | Description |
|---|---|---|
| `extTrxRefId` | [`ID!`](../scalars/ID.md) | External transaction reference ID |
| `amount` | [`String!`](../scalars/String.md) | Transaction amount |
| `type` | [`String!`](../scalars/String.md) | Transaction type (e.g., APInvoice/APAdjustment) |
| `subtype` | [`String!`](../scalars/String.md) | Transaction subtype (e.g., Adjustment/Bonus/Fixed Price/Hourly etc) |
| `glAccount` | [`String`](../scalars/String.md) | General ledger account |
| `description` | [`String`](../scalars/String.md) | Transaction description |
| `fees` | [`[ExternalPayoutAdjTrxInput!]`](ExternalPayoutAdjTrxInput.md) | List of fee transactions |
| `taxes` | [`[ExternalPayoutAdjTrxInput!]`](ExternalPayoutAdjTrxInput.md) | List of tax transactions |

## Examples

### Example

```json
{
  "extTrxRefId": "4",
  "amount": "abc123",
  "type": "abc123",
  "subtype": "abc123",
  "glAccount": "xyz789",
  "description": "xyz789",
  "fees": [ExternalPayoutAdjTrxInput],
  "taxes": [ExternalPayoutAdjTrxInput]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ExternalPayoutAdjTrxInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [DateTimeRange](DateTimeRange.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [FloatRange](FloatRange.md) ➡️
