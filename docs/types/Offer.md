---
title: "Offer"
kind: "object"
domain: "Offers and Contracts"
gql_name: "Offer"
html_id: "definition-Offer"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Offer"
generated_by: "scripts/convert.mjs"
---


# `Offer` (object)

## Description

Details information about offer

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | ID of the offer |
| `title` | [`String!`](../scalars/String.md) | Title of the offer |
| `description` | [`String`](../scalars/String.md) | Description of the offer |
| `type` | [`OfferType!`](../enums/OfferType.md) | Type of the offer like Hourley/Fixed price etc. |
| `job` | [`MarketplaceJobPosting`](MarketplaceJobPosting.md) | Job post associated with the offer |
| `vendorProposal` | [`VendorProposal`](VendorProposal.md) | Job Application associated with the offer |
| `closeJobPostingOnAccept` | [`Boolean!`](../scalars/Boolean.md) | Flag to indicate whether posting will be closed when offer is accepted |
| `client` | [`GenericOrganization!`](GenericOrganization.md) | Connection to the client associated with the offer |
| `offerTerms` | [`OfferTerms!`](OfferTerms.md) | Terms associated with the offer |
| `messageToContractor` | [`String`](../scalars/String.md) | Message for the contractor |
| `state` | [`OfferState`](../enums/OfferState.md) | Current sate of the offer like, new, accepted, declined etc. |
| `offerFeatures` | [`OfferFeatures`](OfferFeatures.md) | Different features of the enterprise related offer |
| `clientCompany` | [`PublicCompanyInfo`](PublicCompanyInfo.md) | Public company information |
| `milestones` | [`[Milestone]`](Milestone.md) | Milestones associated with the offer. |
| `createdUsingBYOFlow` | [`Boolean!`](../scalars/Boolean.md) | Was this offer created via the Bring Your Own Freelancer flow |
| `freelancer` | [`FreelancerProfile!`](FreelancerProfile.md) | Freelancer profile associated to the offer |
| `payrollOffer` | [`Boolean`](../scalars/Boolean.md) | Flag to indicate whether this is a payroll offer |
| `deliveryModel` | [`OfferDeliveryModel`](../enums/OfferDeliveryModel.md) | Delivery model |
| `customFields` | [`CustomFieldsConnection`](CustomFieldsConnection.md) | Custom fields attached to this particular Offer. The response can optionally be filtered by organizationIds. If organizationIds are specified, only responses of custom fields accessible by hiring managers in the specified teams will be returned. These organizationIds can be 'team OrganizationIds' or 'root organizationId'. Custom fields that are accessible/visible through out the COMPANY are always included in the response. |

## Field arguments

### `milestones`

| Argument | Type | Description |
|---|---|---|
| `includeAttachments` | [`Boolean`](../scalars/Boolean.md) | Flag to indicate whether attachment details will be included in the response. |

### `customFields`

| Argument | Type | Description |
|---|---|---|
| `organizationIds` | [`[ID!]`](../scalars/ID.md) | Filter responses by accessible organizations |
| `pagination` | [`Pagination`](../inputs/Pagination.md) | Pagination options |

## Examples

### Example

```json
{
  "id": 4,
  "title": "xyz789",
  "description": "xyz789",
  "type": "MARKET_PLACE_HOURLY",
  "job": MarketplaceJobPosting,
  "vendorProposal": VendorProposal,
  "closeJobPostingOnAccept": false,
  "client": GenericOrganization,
  "offerTerms": OfferTerms,
  "messageToContractor": "abc123",
  "state": "DRAFT",
  "offerFeatures": OfferFeatures,
  "clientCompany": PublicCompanyInfo,
  "milestones": [Milestone],
  "createdUsingBYOFlow": true,
  "freelancer": FreelancerProfile,
  "payrollOffer": true,
  "deliveryModel": "TalentMarketplace",
  "customFields": CustomFieldsConnection
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Offer" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ModernizedOfferFacet](ModernizedOfferFacet.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [OfferAcceptResponse](OfferAcceptResponse.md) ➡️
