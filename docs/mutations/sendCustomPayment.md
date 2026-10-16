---
title: "sendCustomPayment"
kind: "mutation"
gql_name: "sendCustomPayment"
returns: "CustomPaymentResponse"
html_id: "mutation-sendCustomPayment"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-sendCustomPayment"
generated_by: "scripts/convert.mjs"
---


# `sendCustomPayment`

## Description

Send custom payment

## Required Permissions

"Payments - Read and Write Access"

## Response

Returns a [`CustomPaymentResponse`](../types/CustomPaymentResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`CustomPaymentInput`](../inputs/CustomPaymentInput.md) | Payment details |

## Examples

### Detailed structure

#### Query

```graphql
mutation sendCustomPayment($input: CustomPaymentInput) {
  sendCustomPayment(input: $input) {
    invoiceId
  }
}
```

#### Variables

```json
{"input": CustomPaymentInput}
```

#### Response

```json
{
  "data": {
    "sendCustomPayment": {"invoiceId": "4"}
  }
}
```

### Real-life example

#### Query

```graphql
mutation SendCustomPayment($input: CustomPaymentInput!) {
  sendCustomPayment(input: $input) {
    invoiceId
  }
}
```

#### Variables

```json
{
  "input": {
    "contractId": "32325107",
    "amount": 50,
    "comment": "Great work on the release — API validation",
    "notes": "Q2 bonus test",
    "type": "BONUS"
  }
}
```

#### Response

```json
{
  "data": {
    "sendCustomPayment": {
      "invoiceId": "2164098439"
    }
  }
}
```

## Used in sample flows

- Step **1** (Send custom payment) in [Custom Payments Sample Flow](../operations/examples/payments.md)

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-sendCustomPayment" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [updateContractHourlyLimit](updateContractHourlyLimit.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [confirmFiles](confirmFiles.md) ➡️
