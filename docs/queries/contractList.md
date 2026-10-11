---
title: "contractList"
kind: "query"
gql_name: "contractList"
returns: "ContractList"
html_id: "query-contractList"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-contractList"
generated_by: "scripts/convert.mjs"
---


# `contractList`

## Description

Get contract details list by contract ids

## Required Permissions

"Offer - Read-Only Access"

## Response

Returns a [`ContractList`](../types/ContractList.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `ids` | [`[ID!]`](../scalars/ID.md) | List of contract IDs. Max size is 10 |

## Examples

### Detailed structure

#### Query

```graphql
query contractList($ids: [ID!]) {
  contractList(ids: $ids) {
    contracts {
      ...ContractDetailsFragment
    }
  }
}
```

#### Variables

```json
{"ids": [4]}
```

#### Response

```json
{
  "data": {
    "contractList": {"contracts": [ContractDetails]}
  }
}
```
