---
title: "clientProposals"
kind: "query"
gql_name: "clientProposals"
returns: "ClientProposalsConnection"
html_id: "query-clientProposals"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-clientProposals"
generated_by: "scripts/convert.mjs"
---


# `clientProposals`

## Description

Search client proposal

## Required Permissions

"Client Proposals - Read And Write Access"

## Response

Returns a [`ClientProposalsConnection`](../types/ClientProposalsConnection.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `jobPostingId` | [`ID!`](../scalars/ID.md) | Job posting identifier |
| `filter` | [`ClientProposalFilter`](../inputs/ClientProposalFilter.md) | Filter for client proposals |
| `sortAttribute` | [`ClientProposalSortAttribute`](../inputs/ClientProposalSortAttribute.md) | Sort attribute |
| `pagination` | [`Pagination`](../inputs/Pagination.md) | Pagination options |

## Examples

### Detailed structure

#### Query

```graphql
query clientProposals(
  $jobPostingId: ID!,
  $filter: ClientProposalFilter,
  $sortAttribute: ClientProposalSortAttribute,
  $pagination: Pagination
) {
  clientProposals(
    jobPostingId: $jobPostingId,
    filter: $filter,
    sortAttribute: $sortAttribute,
    pagination: $pagination
  ) {
    totalCount
    edges {
      ...ClientProposalsEdgeFragment
    }
    pageInfo {
      ...PageInfoFragment
    }
  }
}
```

#### Variables

```json
{
  "jobPostingId": 4,
  "filter": ClientProposalFilter,
  "sortAttribute": ClientProposalSortAttribute,
  "pagination": Pagination
}
```

#### Response

```json
{
  "data": {
    "clientProposals": {
      "totalCount": 123,
      "edges": [ClientProposalsEdge],
      "pageInfo": PageInfo
    }
  }
}
```

### Real-life example

#### Query

```graphql
query ListClientProposals(
  $jobPostingId: ID!
  $pagination: Pagination
  $filter: ClientProposalFilter
) {
  clientProposals(
    jobPostingId: $jobPostingId
    filter: $filter
    sortAttribute: { field: CREATEDDATETIME, sortOrder: DESC }
    pagination: $pagination
  ) {
    totalCount
    edges {
      cursor
      node {
        id
        status {
          status
        }
        user {
          id
        }
        terms {
          chargeRate {
            displayValue
            currency
          }
        }
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

#### Variables

```json
{
  "jobPostingId": "2056499367840778935",
  "pagination": {"after": "", "first": 20},
  "filter": ""
}
```

#### Response

```json
{
  "data": {
    "clientProposals": {
      "totalCount": 5,
      "edges": [
        {
          "cursor": "1:GBV3ZTV0fnJ1NSp9ejJrdyRxYXAyQFsWAEQf",
          "node": {
            "id": "2056554495343624193",
            "status": {
              "status": "Created"
            },
            "user": {
              "id": "2056388534005908022"
            },
            "terms": {
              "chargeRate": {
                "displayValue": "USD 308.92",
                "currency": "USD"
              }
            }
          }
        },
        {
          "cursor": "1:GBV3ZTV0fnJ1NSp9ejJrdyRxYXAyQFsWA0Qf",
          "node": {
            "id": "2056554468005150721",
            "status": {
              "status": "Created"
            },
            "user": {
              "id": "2056380672542427571"
            },
            "terms": {
              "chargeRate": {
                "displayValue": "USD 650.11",
                "currency": "USD"
              }
            }
          }
        },
        {
          "cursor": "1:GBV3ZTV0fnJ1NSp9ejJrdyRxYXAyQFsWAkQf",
          "node": {
            "id": "2056554440469544961",
            "status": {
              "status": "Created"
            },
            "user": {
              "id": "2056366878434691827"
            },
            "terms": {
              "chargeRate": {
                "displayValue": "USD 133.44",
                "currency": "USD"
              }
            }
          }
        },
        {
          "cursor": "1:GBV3ZTV0fnJ1NSp9ejJrdyRxYXAyQFsWBUQf",
          "node": {
            "id": "2056554434974478337",
            "status": {
              "status": "Created"
            },
            "user": {
              "id": "2056363167874730419"
            },
            "terms": {
              "chargeRate": {
                "displayValue": "USD 949.85",
                "currency": "USD"
              }
            }
          }
        },
        {
          "cursor": "1:GBV3ZTV0fnJ1NSp9ejJrdyRxYXAyQFsWBEQf",
          "node": {
            "id": "2056554407241740289",
            "status": {
              "status": "Created"
            },
            "user": {
              "id": "2056363161889260086"
            },
            "terms": {
              "chargeRate": {
                "displayValue": "USD 679.71",
                "currency": "USD"
              }
            }
          }
        }
      ],
      "pageInfo": {
        "hasNextPage": false,
        "endCursor": "1:GBV3ZTV0fnJ1NSp9ejJrdyRxYXAyQFsWBEQf"
      }
    }
  }
}
```

## Used in sample flows

- Step **1** (List proposals) in [Working with Proposals as a client](../operations/examples/proposals.md)

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-clientProposals" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [clientProposal](clientProposal.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [contractTimeReport](contractTimeReport.md) ➡️
