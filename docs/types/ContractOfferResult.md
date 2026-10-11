---
title: "ContractOfferResult"
kind: "object"
domain: "Offers and Contracts"
gql_name: "ContractOfferResult"
html_id: "definition-ContractOfferResult"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractOfferResult"
generated_by: "scripts/convert.mjs"
---


# `ContractOfferResult` (object)

## Description

An intermediate search result that contains common information about contract and offer. It contains connection to respective contract / offer additional fields.

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Result identifier |
| `company` | [`GenericOrganization!`](GenericOrganization.md) | Owner company |
| `team` | [`GenericOrganization!`](GenericOrganization.md) | Owner team |
| `contactPerson` | [`GenericUser!`](GenericUser.md) | Client side contact person for the offer |
| `freelancer` | [`GenericUser!`](GenericUser.md) | Freelancer associated with the offer |
| `agency` | [`GenericOrganization`](GenericOrganization.md) | Agency associated with the offer |
| `startDateTime` | [`String!`](../scalars/String.md) | ContractOffer start date time |
| `endDateTime` | [`String`](../scalars/String.md) | ContractOffer end date time |
| `type` | [`ContractOfferType!`](../enums/ContractOfferType.md) | Type of the offer |
| `state` | [`ContractOfferState!`](../enums/ContractOfferState.md) | Current state of the offer |
| `milestoneState` | [`OfferMilestoneState`](../enums/OfferMilestoneState.md) | Current milestone state for fixed price offers |
| `escrowRefundStatus` | [`EscrowRefundStatus`](../enums/EscrowRefundStatus.md) | Status of the escrow refund |
| `title` | [`String!`](../scalars/String.md) | Title of the offer |
| `lastUpdatedDateTime` | [`String!`](../scalars/String.md) | Date Time when the offer updated for the last time |
| `lastPublishedDateTime` | [`String`](../scalars/String.md) | Date Time when the offer was published |
| `inPrivateTalentCloud` | [`Boolean!`](../scalars/Boolean.md) | Whether in PTC |
| `offerCreatedDateTime` | [`String!`](../scalars/String.md) | Date Time when the offer was created |
| `offer` | [`Offer`](Offer.md) | Details of the associated Offer |
| `contractDetails` | [`ContractDetails`](ContractDetails.md) | ContractDetails of the associated Contract |
| `catalogProject` | [`Boolean`](../scalars/Boolean.md) | Whether this is a catalog project |

## Examples

### Example

```json
{
  "id": "4",
  "company": GenericOrganization,
  "team": GenericOrganization,
  "contactPerson": GenericUser,
  "freelancer": GenericUser,
  "agency": GenericOrganization,
  "startDateTime": "xyz789",
  "endDateTime": "xyz789",
  "type": "Hourly",
  "state": "Pending",
  "milestoneState": "NotFunded",
  "escrowRefundStatus": "Open",
  "title": "xyz789",
  "lastUpdatedDateTime": "abc123",
  "lastPublishedDateTime": "abc123",
  "inPrivateTalentCloud": true,
  "offerCreatedDateTime": "abc123",
  "offer": Offer,
  "contractDetails": ContractDetails,
  "catalogProject": true
}
```
