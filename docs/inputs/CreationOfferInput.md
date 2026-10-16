---
title: "CreationOfferInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "CreationOfferInput"
html_id: "definition-CreationOfferInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CreationOfferInput"
generated_by: "scripts/convert.mjs"
---


# `CreationOfferInput` (input object)

## Description

Input for creating an offer

## Fields

| Field | Type | Description |
|---|---|---|
| `interactive` | [`Boolean`](../scalars/Boolean.md) | `true` |
| `idempotencyKey` | [`String`](../scalars/String.md) | Idempotency key for request deduplication |
| `ignoreTestAccount` | [`Boolean`](../scalars/Boolean.md) | Whether to ignore test account checks |
| `kind` | [`OfferKindInput!`](../enums/OfferKindInput.md) | Kind of offer being created |
| `offeror` | [`OfferorInput!`](../enums/OfferorInput.md) | Who is making the offer |
| `clientTeamId` | [`ID!`](../scalars/ID.md) | Client team identifier |
| `vendorUser` | [`VendorUserInput!`](VendorUserInput.md) | Vendor user information |
| `metadata` | [`OfferMetadataInput!`](OfferMetadataInput.md) | Offer metadata |
| `attachments` | [`[String!]`](../scalars/String.md) | `[]` |
| `title` | [`String!`](../scalars/String.md) | Offer title |
| `description` | [`String`](../scalars/String.md) | Offer description |
| `contractStartDateTime` | [`String`](../scalars/String.md) | required for Enterprise offers, optional for marketplace offers |
| `contractEndDateTime` | [`String`](../scalars/String.md) | required for Enterprise Compliance offers (and must not be more than 180 days into the future from the start date); optional (and ignored) for others |
| `hourlyRateTerms` | [`OfferHourlyRateTerms`](OfferHourlyRateTerms.md) | Hourly rate terms |
| `stipendTerms` | [`OfferStipendTerms`](OfferStipendTerms.md) | Stipend terms |
| `milestoneTerms` | [`OfferMilestoneTerms`](OfferMilestoneTerms.md) | Milestone terms |
| `deliveryModel` | [`CreateOfferDeliveryModelInput!`](../enums/CreateOfferDeliveryModelInput.md) | Delivery model |
| `closeOnAccept` | [`Boolean`](../scalars/Boolean.md) | `false` |
| `scheduledRateIncrease` | [`OfferScheduledRateIncreaseInput`](OfferScheduledRateIncreaseInput.md) | only allowed for Marketplace offers |
| `customFields` | [`[StringMapElementInput]`](StringMapElementInput.md) | Custom fields |
| `offerLocation` | [`OfferLocationInput`](OfferLocationInput.md) | Offer location details |
| `offerPayroll` | [`OfferPayrollInput`](OfferPayrollInput.md) | Offer payroll details |

## Examples

### Example

```json
{
  "interactive": true,
  "idempotencyKey": "abc123",
  "ignoreTestAccount": false,
  "kind": "Vanilla",
  "offeror": "Client",
  "clientTeamId": 4,
  "vendorUser": VendorUserInput,
  "metadata": OfferMetadataInput,
  "attachments": ["abc123"],
  "title": "xyz789",
  "description": "abc123",
  "contractStartDateTime": "abc123",
  "contractEndDateTime": "xyz789",
  "hourlyRateTerms": OfferHourlyRateTerms,
  "stipendTerms": OfferStipendTerms,
  "milestoneTerms": OfferMilestoneTerms,
  "deliveryModel": "TalentMarketplace",
  "closeOnAccept": true,
  "scheduledRateIncrease": OfferScheduledRateIncreaseInput,
  "customFields": [StringMapElementInput],
  "offerLocation": OfferLocationInput,
  "offerPayroll": OfferPayrollInput
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CreationOfferInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [CreateMilestoneInput](CreateMilestoneInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [CustomFieldsInput](CustomFieldsInput.md) ➡️
