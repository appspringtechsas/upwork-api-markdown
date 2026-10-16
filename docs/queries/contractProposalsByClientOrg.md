---
title: "contractProposalsByClientOrg"
kind: "query"
gql_name: "contractProposalsByClientOrg"
returns: "ContractProposalsResult!"
html_id: "query-contractProposalsByClientOrg"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-contractProposalsByClientOrg"
generated_by: "scripts/convert.mjs"
---


# `contractProposalsByClientOrg`

## Description

Get contract proposals by client organization id

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
query contractProposalsByClientOrg(
  $state: ContractProposalStateV2,
  $page: Int
) {
  contractProposalsByClientOrg(
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
{"state": "ACTIVE", "page": 987}
```

#### Response

```json
{
  "data": {
    "contractProposalsByClientOrg": {
      "contracts": [ContractProposalsListItem],
      "paging": ContractProposalsPaging
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-contractProposalsByClientOrg" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [contractProposalsByAgency](contractProposalsByAgency.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [contractProposalsByFreelancer](contractProposalsByFreelancer.md) ➡️
