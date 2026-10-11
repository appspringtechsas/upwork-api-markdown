---
title: "VendorContractSearchFilter"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "VendorContractSearchFilter"
html_id: "definition-VendorContractSearchFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorContractSearchFilter"
generated_by: "scripts/convert.mjs"
---


# `VendorContractSearchFilter` (input object)

## Description

Filter to search vendor contracts by date and status

## Fields

| Field | Type | Description |
|---|---|---|
| `vendorId` | [`ID!`](../scalars/ID.md) | Vendor identifier (required) |
| `startDateBefore` | [`String`](../scalars/String.md) | Contracts starting before this date (ISO format yyyy-MM-ddThh:mm+HHmm or yyyy-MM-dd) |
| `endDateAfter` | [`String`](../scalars/String.md) | Contracts ending after this date (ISO format yyyy-MM-ddThh:mm+HHmm or yyyy-MM-dd) |
| `contractStatuses` | [`[ContractStatus]`](../enums/ContractStatus.md) | Filter by contract statuses |

## Examples

### Example

```json
{
  "vendorId": 4,
  "startDateBefore": "xyz789",
  "endDateAfter": "abc123",
  "contractStatuses": ["ACTIVE"]
}
```
