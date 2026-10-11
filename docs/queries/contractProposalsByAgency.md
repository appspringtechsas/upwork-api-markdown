---
title: "contractProposalsByAgency"
kind: "query"
gql_name: "contractProposalsByAgency"
returns: "ContractProposalsResult!"
html_id: "query-contractProposalsByAgency"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-contractProposalsByAgency"
generated_by: "scripts/convert.mjs"
---


# `contractProposalsByAgency`

## Description

Get contract proposal by contractorId and teamId

## Required Permissions

"Offer - Read-Only Access"

## Response

Returns a [`ContractProposalsResult!`](../types/ContractProposalsResult.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `agencyTeamId` | [`ID!`](../scalars/ID.md) | Agency Team Id |
| `freelancerId` | [`ID`](../scalars/ID.md) | Freelancer Id |
| `page` | [`Int`](../scalars/Int.md) | Page Number |

## Examples

### Detailed structure

#### Query

```graphql
query contractProposalsByAgency(
  $agencyTeamId: ID!,
  $freelancerId: ID,
  $page: Int
) {
  contractProposalsByAgency(
    agencyTeamId: $agencyTeamId,
    freelancerId: $freelancerId,
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
{"agencyTeamId": 4, "freelancerId": 4, "page": 987}
```

#### Response

```json
{
  "data": {
    "contractProposalsByAgency": {
      "contracts": [ContractProposalsListItem],
      "paging": ContractProposalsPaging
    }
  }
}
```
