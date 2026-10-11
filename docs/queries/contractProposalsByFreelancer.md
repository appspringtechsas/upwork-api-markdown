---
title: "contractProposalsByFreelancer"
kind: "query"
gql_name: "contractProposalsByFreelancer"
returns: "ContractProposalsResult!"
html_id: "query-contractProposalsByFreelancer"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-contractProposalsByFreelancer"
generated_by: "scripts/convert.mjs"
---


# `contractProposalsByFreelancer`

## Description

Get contract proposals by freelancer id

## Required Permissions

"Offer - Read-Only Access"

## Response

Returns a [`ContractProposalsResult!`](../types/ContractProposalsResult.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `state` | [`ContractProposalStateV2`](../enums/ContractProposalStateV2.md) | Proposal state |
| `page` | [`Int`](../scalars/Int.md) | Page Number |

## Examples

### Detailed structure

#### Query

```graphql
query contractProposalsByFreelancer(
  $state: ContractProposalStateV2,
  $page: Int
) {
  contractProposalsByFreelancer(
    state: $state,
    page: $page
  ) {
    contracts {
      ...ContractProposalsListItemFragment
    }
    paging {
      ...ContractProposalsPagingFragment
    }
  }
}
```

#### Variables

```json
{"state": "ACTIVE", "page": 123}
```

#### Response

```json
{
  "data": {
    "contractProposalsByFreelancer": {
      "contracts": [ContractProposalsListItem],
      "paging": ContractProposalsPaging
    }
  }
}
```
