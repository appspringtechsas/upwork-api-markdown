---
title: "OfferByClientFilter"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "OfferByClientFilter"
html_id: "definition-OfferByClientFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferByClientFilter"
generated_by: "scripts/convert.mjs"
---


# `OfferByClientFilter` (input object)

## Description

Filter for offers by client

## Fields

| Field | Type | Description |
|---|---|---|
| `teamId_any` | [`[ID!]`](../scalars/ID.md) | Filter by team IDs |
| `contactPersonId_any` | [`[ID!]`](../scalars/ID.md) | Filter by contact person IDs |
| `offerType_any` | [`[ContractOfferType!]`](../enums/ContractOfferType.md) | Filter by offer types |
| `milestoneState_any` | [`[OfferMilestoneState!]`](../enums/OfferMilestoneState.md) | Filter by milestone states |
| `escrowRefundStatus_any` | [`[EscrowRefundStatus!]`](../enums/EscrowRefundStatus.md) | Filter by escrow refund statuses |
| `freelancerId_any` | [`[ID!]`](../scalars/ID.md) | Filter by freelancer IDs |
| `agreementKind_any` | [`[AgreementKind!]`](../enums/AgreementKind.md) | Filter by agreement kinds |
| `commonFilter` | [`OfferSearchCommonFilter`](OfferSearchCommonFilter.md) | Common filter criteria |

## Examples

### Example

```json
{
  "teamId_any": [4],
  "contactPersonId_any": [4],
  "offerType_any": ["Hourly"],
  "milestoneState_any": ["NotFunded"],
  "escrowRefundStatus_any": ["Open"],
  "freelancerId_any": [4],
  "agreementKind_any": ["Offer"],
  "commonFilter": OfferSearchCommonFilter
}
```
