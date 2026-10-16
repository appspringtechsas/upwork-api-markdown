---
title: "OfferByRootCompanyFilter"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "OfferByRootCompanyFilter"
html_id: "definition-OfferByRootCompanyFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferByRootCompanyFilter"
generated_by: "scripts/convert.mjs"
---


# `OfferByRootCompanyFilter` (input object)

## Description

Filter for offers by root company

## Fields

| Field | Type | Description |
|---|---|---|
| `freelancerId_any` | [`[ID!]`](../scalars/ID.md) | Filter by freelancer IDs |
| `agencyTeamOrgId_any` | [`[ID!]`](../scalars/ID.md) | Filter by agency team organization IDs |
| `clientOrgId_any` | [`[ID!]`](../scalars/ID.md) | Filter by client organization IDs |
| `commonFilter` | [`OfferSearchCommonFilter`](OfferSearchCommonFilter.md) | Common filter criteria |

## Examples

### Example

```json
{
  "freelancerId_any": ["4"],
  "agencyTeamOrgId_any": ["4"],
  "clientOrgId_any": ["4"],
  "commonFilter": OfferSearchCommonFilter
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferByRootCompanyFilter" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [OfferByClientFilter](OfferByClientFilter.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [OfferForFreelancerFilter](OfferForFreelancerFilter.md) ➡️
