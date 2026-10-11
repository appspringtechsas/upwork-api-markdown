---
title: "OfferForFreelancerFilter"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "OfferForFreelancerFilter"
html_id: "definition-OfferForFreelancerFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferForFreelancerFilter"
generated_by: "scripts/convert.mjs"
---


# `OfferForFreelancerFilter` (input object)

## Description

Filter for offers for freelancer

## Fields

| Field | Type | Description |
|---|---|---|
| `agencyRootCompanyOrgId_any` | [`[ID!]`](../scalars/ID.md) | Filter by agency root company organization IDs |
| `agencyTeamOrgId_any` | [`[ID!]`](../scalars/ID.md) | Filter by agency team organization IDs |
| `clientOrgId_any` | [`[ID!]`](../scalars/ID.md) | Filter by client organization IDs |
| `commonFilter` | [`OfferSearchCommonFilter`](OfferSearchCommonFilter.md) | Common filter criteria |

## Examples

### Example

```json
{
  "agencyRootCompanyOrgId_any": ["4"],
  "agencyTeamOrgId_any": [4],
  "clientOrgId_any": ["4"],
  "commonFilter": OfferSearchCommonFilter
}
```
