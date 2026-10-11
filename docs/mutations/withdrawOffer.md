---
title: "withdrawOffer"
kind: "mutation"
gql_name: "withdrawOffer"
returns: "Boolean!"
html_id: "mutation-withdrawOffer"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-withdrawOffer"
generated_by: "scripts/convert.mjs"
---


# `withdrawOffer`

## Description

Withdraw an offer.

## Required Permissions

"Offer - Read And Write Access"

## Response

Returns a [`Boolean!`](../scalars/Boolean.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`WithdrawOfferInput!`](../inputs/WithdrawOfferInput.md) | Withdraw request payload |

## Examples

### Detailed structure

#### Query

```graphql
mutation withdrawOffer($input: WithdrawOfferInput!) {
  withdrawOffer(input: $input)
}
```

#### Variables

```json
{"input": WithdrawOfferInput}
```

#### Response

```json
{"data": {"withdrawOffer": true}}
```
