---
title: "MarketplaceContractTerms"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplaceContractTerms"
html_id: "definition-MarketplaceContractTerms"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceContractTerms"
generated_by: "scripts/convert.mjs"
---


# `MarketplaceContractTerms` (object)

## Description

Contract terms for a marketplace job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `contractStartDate` | [`String`](../scalars/String.md) | Start date for the contract terms formatted according to ISO-8601 |
| `contractEndDate` | [`String`](../scalars/String.md) | End date for the contract terms formatted according to ISO-8601 |
| `contractType` | [`ContractType!`](../enums/ContractType.md) | Type of contract |
| `onSiteType` | [`OnSiteType`](../enums/OnSiteType.md) | On-site work requirement |
| `personsToHire` | [`Int!`](../scalars/Int.md) | Number of persons to hire |
| `experienceLevel` | [`ExperienceLevel`](../enums/ExperienceLevel.md) | Required experience level |
| `fixedPriceContractTerms` | [`FixedPriceContractTerms`](FixedPriceContractTerms.md) | Fixed-price terms |
| `hourlyContractTerms` | [`HourlyContractTerms`](HourlyContractTerms.md) | Hourly terms |
| `notSurePersonsToHire` | [`Boolean`](../scalars/Boolean.md) | Client unsure about number of persons |
| `notSureExperiencelevel` | [`Boolean`](../scalars/Boolean.md) | Client unsure about experience level |

## Examples

### Example

```json
{
  "contractStartDate": "xyz789",
  "contractEndDate": "xyz789",
  "contractType": "HOURLY",
  "onSiteType": "REMOTE",
  "personsToHire": 987,
  "experienceLevel": "ENTRY_LEVEL",
  "fixedPriceContractTerms": FixedPriceContractTerms,
  "hourlyContractTerms": HourlyContractTerms,
  "notSurePersonsToHire": false,
  "notSureExperiencelevel": false
}
```
