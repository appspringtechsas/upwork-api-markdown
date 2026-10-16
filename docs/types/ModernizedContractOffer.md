---
title: "ModernizedContractOffer"
kind: "object"
domain: "Offers and Contracts"
gql_name: "ModernizedContractOffer"
html_id: "definition-ModernizedContractOffer"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ModernizedContractOffer"
generated_by: "scripts/convert.mjs"
---


# `ModernizedContractOffer` (object)

## Description

Modernized contract offer details

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Offer identifier |
| `kind` | [`OfferKind`](../enums/OfferKind.md) | Kind of offer |
| `offeror` | [`Offeror`](../enums/Offeror.md) | Who creates the offer |
| `clientUserId` | [`ID!`](../scalars/ID.md) | Client user identifier |
| `clientTeamId` | [`ID!`](../scalars/ID.md) | Client team unique identifier |
| `clientOrgId` | [`ID`](../scalars/ID.md) | Client organization unique identifier |
| `vendorUserId` | [`ID!`](../scalars/ID.md) | Vendor user unique identifier |
| `vendor` | [`GenericUser`](GenericUser.md) | Vendor user associated with the offer |
| `vendorTeamId` | [`ID`](../scalars/ID.md) | Vendor team unique identifier (in case of agency) |
| `vendorOrgId` | [`ID`](../scalars/ID.md) | Vendor organization unique identifier (could be the sole proprietor) |
| `actors` | [`[Actor]`](Actor.md) | Other participants in the offer |
| `metadata` | [`Metadata`](Metadata.md) | Metadata associated with the offer |
| `expirationDateTime` | [`String`](../scalars/String.md) | Expiration date and time |
| `title` | [`String!`](../scalars/String.md) | Offer title |
| `description` | [`String`](../scalars/String.md) | Offer description |
| `attachments` | [`[ID]`](../scalars/ID.md) | Attachment identifiers |
| `contractStartDateTime` | [`String`](../scalars/String.md) | Contract start date and time |
| `contractEndDateTime` | [`String`](../scalars/String.md) | Contract end date and time |
| `hourlyRateTerms` | [`HourlyTerms`](HourlyTerms.md) | Hourly terms |
| `stipendTerms` | [`StipendTerms`](StipendTerms.md) | Stipend terms |
| `milestoneTerms` | [`MilestoneTerms`](MilestoneTerms.md) | Milestone terms |
| `deliveryModel` | [`OfferDeliveryModel`](../enums/OfferDeliveryModel.md) | Delivery model |
| `state` | [`WorkflowOfferState!`](../enums/WorkflowOfferState.md) | Offer state |
| `instanceId` | [`ID`](../scalars/ID.md) | The current offer ID |
| `staffingManagerId` | [`ID`](../scalars/ID.md) | Staffing manager UID |
| `contractId` | [`ID`](../scalars/ID.md) | Contract ID associated to the offer, once offer is accepted |
| `agencyRootCompanyId` | [`ID`](../scalars/ID.md) | Agency root organization ID |
| `type` | [`ContractOfferType`](../enums/ContractOfferType.md) | Type of the offer |
| `vendorType` | [`ContractOfferVendorType`](../enums/ContractOfferVendorType.md) | Vendor type of offer |
| `termsVersion` | [`ContractOfferTermsVersion`](../enums/ContractOfferTermsVersion.md) | Term Version of offer |
| `legacyState` | [`ContractOfferLegacyState`](../enums/ContractOfferLegacyState.md) | Legacy state of offer |
| `previousOfferId` | [`ID`](../scalars/ID.md) | Previous offer id |
| `newOfferId` | [`ID`](../scalars/ID.md) | New Offer Id |
| `closePostingUponAccept` | [`Boolean`](../scalars/Boolean.md) | Close Posting upon to Accept |
| `lastEvent` | [`ContractOfferLastEvent`](ContractOfferLastEvent.md) | Last event on offer |
| `createdDateTime` | [`String`](../scalars/String.md) | The creation date of the offer |
| `facets` | [`[ModernizedOfferFacet]`](ModernizedOfferFacet.md) | Facets of the offer |

## Examples

### Example

```json
{
  "id": "4",
  "kind": "HourlyPack",
  "offeror": "Client",
  "clientUserId": 4,
  "clientTeamId": "4",
  "clientOrgId": 4,
  "vendorUserId": "4",
  "vendor": GenericUser,
  "vendorTeamId": 4,
  "vendorOrgId": "4",
  "actors": [Actor],
  "metadata": Metadata,
  "expirationDateTime": "abc123",
  "title": "xyz789",
  "description": "abc123",
  "attachments": ["4"],
  "contractStartDateTime": "xyz789",
  "contractEndDateTime": "xyz789",
  "hourlyRateTerms": HourlyTerms,
  "stipendTerms": StipendTerms,
  "milestoneTerms": MilestoneTerms,
  "deliveryModel": "TalentMarketplace",
  "state": "Submitted",
  "instanceId": 4,
  "staffingManagerId": 4,
  "contractId": 4,
  "agencyRootCompanyId": "4",
  "type": "Hourly",
  "vendorType": "FREELANCER",
  "termsVersion": "V1",
  "legacyState": "Draft",
  "previousOfferId": 4,
  "newOfferId": "4",
  "closePostingUponAccept": false,
  "lastEvent": ContractOfferLastEvent,
  "createdDateTime": "abc123",
  "facets": [ModernizedOfferFacet]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ModernizedContractOffer" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [MilestoneTerms](MilestoneTerms.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ModernizedContractOfferList](ModernizedContractOfferList.md) ➡️
