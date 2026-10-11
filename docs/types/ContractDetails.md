---
title: "ContractDetails"
kind: "object"
domain: "Offers and Contracts"
gql_name: "ContractDetails"
html_id: "definition-ContractDetails"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractDetails"
generated_by: "scripts/convert.mjs"
---


# `ContractDetails` (object)

## Description

Contract details including parties, terms, and metadata

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Unique contract identifier (UID) |
| `title` | [`String`](../scalars/String.md) | Contract title shown to users |
| `status` | [`ContractStatus`](../enums/ContractStatus.md) | Current lifecycle status of the contract |
| `closingReason` | [`ClosingReason`](ClosingReason.md) | Reason explaining why the contract was closed |
| `deliveryModel` | [`DeliveryModel`](../enums/DeliveryModel.md) | Delivery model for this contract (e.g., marketplace, catalog) |
| `kind` | [`ContractKind`](../enums/ContractKind.md) | Contract kind/category (e.g., weekly retainer, payroll) |
| `isPtc` | [`Boolean`](../scalars/Boolean.md) | Indicates if the contract belongs to a Private Talent Cloud |
| `createDate` | [`String`](../scalars/String.md) | Dates Contract creation date |
| `modifyDate` | [`String`](../scalars/String.md) | Last modification date |
| `startDate` | [`String`](../scalars/String.md) | Contract start date |
| `endDate` | [`String`](../scalars/String.md) | Contract end date |
| `offer` | [`Offer`](Offer.md) | Offer and opening Offer associated with the contract |
| `offerId` | [`ID`](../scalars/ID.md) | Offer identifier (UID) associated with the contract |
| `job` | [`JobPosting`](JobPosting.md) | Job posting associated with the contract |
| `freelancer` | [`ContractUser!`](ContractUser.md) | Contract vendor/freelancer data Freelancer party on the contract |
| `vendorOrganization` | [`GenericOrganization!`](GenericOrganization.md) | Vendor organization associated with the freelancer |
| `vendorTeam` | [`GenericOrganization!`](GenericOrganization.md) | Vendor team organization associated with the freelancer |
| `clientOrganization` | [`GenericOrganization!`](GenericOrganization.md) | Contract client and agency data Client organization on the contract |
| `clientTeam` | [`GenericOrganization!`](GenericOrganization.md) | Client team organization on the contract |
| `hiringManager` | [`ContractUser`](ContractUser.md) | Hiring manager for the contract |
| `agencyManager` | [`ContractUser`](ContractUser.md) | Agency manager for the contract (if applicable) |
| `supervisor` | [`ContractUser!`](ContractUser.md) | Contract supervisor Current supervisor responsible for the contract |
| `changingUserType` | [`CreatorType`](../enums/CreatorType.md) | Contract changes Actor type of the last change (client, professional, system, etc.) |
| `changedBy` | [`ContractUser`](ContractUser.md) | User who last changed the contract |
| `endedBy` | [`ContractUser`](ContractUser.md) | User who ended the contract (if ended) |
| `metadata` | [`ContractMetadata`](ContractMetadata.md) | Additional metadata for the contract |
| `hourlyLimits` | [`[HourlyLimit]`](HourlyLimit.md) | Contract terms Weekly hourly limit history for the contract |
| `terms` | [`ContractTerms`](ContractTerms.md) | Aggregated contract terms by engagement type |
| `projectId` | [`ID`](../scalars/ID.md) | Project identifier (UID) associated with the contract |

## Examples

### Example

```json
{
  "id": 4,
  "title": "abc123",
  "status": "ACTIVE",
  "closingReason": ClosingReason,
  "deliveryModel": "TALENT_MARKETPLACE",
  "kind": "WEEKLY_RETAINER",
  "isPtc": false,
  "createDate": "abc123",
  "modifyDate": "xyz789",
  "startDate": "xyz789",
  "endDate": "abc123",
  "offer": Offer,
  "offerId": "4",
  "job": JobPosting,
  "freelancer": ContractUser,
  "vendorOrganization": GenericOrganization,
  "vendorTeam": GenericOrganization,
  "clientOrganization": GenericOrganization,
  "clientTeam": GenericOrganization,
  "hiringManager": ContractUser,
  "agencyManager": ContractUser,
  "supervisor": ContractUser,
  "changingUserType": "CLIENT",
  "changedBy": ContractUser,
  "endedBy": ContractUser,
  "metadata": ContractMetadata,
  "hourlyLimits": [HourlyLimit],
  "terms": ContractTerms,
  "projectId": 4
}
```
