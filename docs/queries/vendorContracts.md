---
title: "vendorContracts"
kind: "query"
gql_name: "vendorContracts"
returns: "ContractSearchResults"
html_id: "query-vendorContracts"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-vendorContracts"
generated_by: "scripts/convert.mjs"
---


# `vendorContracts`

## Description

Get list of contracts associated with a specific vendor

## Required Permissions

"Offer - Read-Only Access"

## Response

Returns a [`ContractSearchResults`](../types/ContractSearchResults.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `filter` | [`VendorContractSearchFilter!`](../inputs/VendorContractSearchFilter.md) | Vendor contract search filter |
| `options` | [`ContractOptionsInput`](../inputs/ContractOptionsInput.md) | Contract options |
| `paging` | [`ContractPagingInput`](../inputs/ContractPagingInput.md) | Paging input |

## Examples

### Detailed structure

#### Query

```graphql
query vendorContracts(
  $filter: VendorContractSearchFilter!,
  $options: ContractOptionsInput,
  $paging: ContractPagingInput
) {
  vendorContracts(
    filter: $filter,
    options: $options,
    paging: $paging
  ) {
    paging {
      ...ContractPagingFragment
    }
    contracts {
      ...ContractDetailsFragment
    }
  }
}
```

#### Variables

```json
{
  "filter": VendorContractSearchFilter,
  "options": ContractOptionsInput,
  "paging": ContractPagingInput
}
```

#### Response

```json
{
  "data": {
    "vendorContracts": {
      "paging": ContractPaging,
      "contracts": [ContractDetails]
    }
  }
}
```
