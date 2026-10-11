---
title: "createOffer"
kind: "mutation"
gql_name: "createOffer"
returns: "OfferCreationResponse"
html_id: "mutation-createOffer"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-createOffer"
generated_by: "scripts/convert.mjs"
---


# `createOffer`

## Description

Create offer mutation used for all available types of offer including Fixed price and Hourly

## Required Permissions

"Offer - Read And Write Access"

## Response

Returns an [`OfferCreationResponse`](../types/OfferCreationResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `offerInput` | [`CreationOfferInput!`](../inputs/CreationOfferInput.md) | Offer creation payload |

## Examples

### Detailed structure

#### Query

```graphql
mutation createOffer($offerInput: CreationOfferInput!) {
  createOffer(offerInput: $offerInput) {
    offer {
      ...ModernizedOfferFragment
    }
  }
}
```

#### Variables

```json
{"offerInput": CreationOfferInput}
```

#### Response

```json
{"data": {"createOffer": {"offer": ModernizedOffer}}}
```

### Real-life example

#### Query

```graphql
mutation CreateOffer($input: CreationOfferInput!) {
  createOffer(offerInput: $input) {
    offer {
      id
      title
      state
    }
  }
}
```

#### Variables

```json
{
  "input": {
    "kind": "Vanilla",
    "offeror": "Client",
    "clientTeamId": "2056499345994300718",
    "vendorUser": {
      "userId": "2056388534005908022",
      "teamId": "2056388534005908023"
    },
    "metadata": {
      "sourceType": "JobApplication",
      "sourceId": "2056554495343624193",
      "jobPostingId": "2056499367840778935"
    },
    "title": "API validation offer from proposal",
    "description": "Offer created during public API validation.",
    "deliveryModel": "TalentMarketplace",
    "hourlyRateTerms": {
      "vendorRate": {"amount": "65.00", "currency": "USD"},
      "weeklyLimit": "40",
      "manualTimeAllowed": false
    }
  }
}
```

#### Response

```json
{
    "data": {
        "createOffer": {
            "offer": {
                "id": "1056260674"
            }
        }
    }
}
```
