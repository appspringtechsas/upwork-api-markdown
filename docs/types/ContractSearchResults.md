---
title: "ContractSearchResults"
kind: "object"
domain: "Offers and Contracts"
gql_name: "ContractSearchResults"
html_id: "definition-ContractSearchResults"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractSearchResults"
generated_by: "scripts/convert.mjs"
---


# `ContractSearchResults` (object)

## Description

Results of a contract search with paging information

## Fields

| Field | Type | Description |
|---|---|---|
| `paging` | [`ContractPaging`](ContractPaging.md) | Pagination details |
| `contracts` | [`[ContractDetails]`](ContractDetails.md) | Contracts returned by the search |

## Examples

### Example

```json
{
  "paging": ContractPaging,
  "contracts": [ContractDetails]
}
```
