---
title: "acceptOffer"
kind: "mutation"
gql_name: "acceptOffer"
returns: "OfferAcceptResponse"
html_id: "mutation-acceptOffer"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-acceptOffer"
generated_by: "scripts/convert.mjs"
---


# `acceptOffer`

## Description

Freelancer accepts an Offer and returns the corresponding contract details.

## Required Permissions

"Offer - Read And Write Access"

## Response

Returns an [`OfferAcceptResponse`](../types/OfferAcceptResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `acceptOfferInput` | [`AcceptOfferInput!`](../inputs/AcceptOfferInput.md) |  |

## Examples

### Detailed structure

#### Query

```graphql
mutation acceptOffer($acceptOfferInput: AcceptOfferInput!) {
  acceptOffer(acceptOfferInput: $acceptOfferInput) {
    contract {
      ...ContractFragment
    }
    contractDetails {
      ...ContractDetailsFragment
    }
  }
}
```

#### Variables

```json
{"acceptOfferInput": AcceptOfferInput}
```

#### Response

```json
{
  "data": {
    "acceptOffer": {
      "contract": Contract,
      "contractDetails": ContractDetails
    }
  }
}
```
