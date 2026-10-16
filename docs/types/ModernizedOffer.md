---
title: "ModernizedOffer"
kind: "object"
domain: "Offers and Contracts"
gql_name: "ModernizedOffer"
html_id: "definition-ModernizedOffer"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ModernizedOffer"
generated_by: "scripts/convert.mjs"
---


# `ModernizedOffer` (object)

## Description

Modernized offer details

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
| `staffingManagerId` | [`ID`](../scalars/ID.md) | Staffing manager UID |
| `contractId` | [`ID`](../scalars/ID.md) | Contract ID associated to the offer, once offer is accepted |
| `agencyRootCompanyId` | [`ID`](../scalars/ID.md) | Agency root organization ID |
| `instanceId` | [`ID`](../scalars/ID.md) | The current offer ID |
| `client` | [`GenericOrganization!`](GenericOrganization.md) | Connection to the client associated with the offer |
| `clientCompany` | [`PublicCompanyInfo`](PublicCompanyInfo.md) | Public company information |
| `createdDateTime` | [`String`](../scalars/String.md) | The creation date of the offer |
| `lastEvent` | [`OfferLastEvent`](OfferLastEvent.md) | Last event on offer |

## Examples

### Example

```json
{
  "id": "4",
  "kind": "HourlyPack",
  "offeror": "Client",
  "clientUserId": 4,
  "clientTeamId": 4,
  "clientOrgId": 4,
  "vendorUserId": 4,
  "vendorTeamId": "4",
  "vendorOrgId": "4",
  "actors": [Actor],
  "metadata": Metadata,
  "expirationDateTime": "abc123",
  "title": "xyz789",
  "description": "xyz789",
  "attachments": ["4"],
  "contractStartDateTime": "xyz789",
  "contractEndDateTime": "abc123",
  "hourlyRateTerms": HourlyTerms,
  "stipendTerms": StipendTerms,
  "milestoneTerms": MilestoneTerms,
  "deliveryModel": "TalentMarketplace",
  "state": "Submitted",
  "staffingManagerId": 4,
  "contractId": 4,
  "agencyRootCompanyId": "4",
  "instanceId": "4",
  "client": GenericOrganization,
  "clientCompany": PublicCompanyInfo,
  "createdDateTime": "xyz789",
  "lastEvent": OfferLastEvent
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ModernizedOffer" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ModernizedContractOfferList](ModernizedContractOfferList.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ModernizedOfferFacet](ModernizedOfferFacet.md) ➡️
