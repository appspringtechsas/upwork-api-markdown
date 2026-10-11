---
title: "ApproveMilestoneInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "ApproveMilestoneInput"
html_id: "definition-ApproveMilestoneInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ApproveMilestoneInput"
generated_by: "scripts/convert.mjs"
---


# `ApproveMilestoneInput` (input object)

## Description

Input for approving a milestone

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Milestone ID |
| `paidAmount` | [`String!`](../scalars/String.md) | Amount is in cents. For example 1000 represents 10 USD |
| `bonusAmount` | [`String`](../scalars/String.md) | Amount is in cents. For example 1000 represents 10 USD |
| `paymentComment` | [`String`](../scalars/String.md) | A comment attached to the payment |
| `underpaymentReason` | [`String`](../scalars/String.md) | The reason for underpayment |
| `noteToContractor` | [`String`](../scalars/String.md) | Note to contractor |

## Examples

### Example

```json
{
  "id": 4,
  "paidAmount": "xyz789",
  "bonusAmount": "xyz789",
  "paymentComment": "abc123",
  "underpaymentReason": "abc123",
  "noteToContractor": "abc123"
}
```
