---
title: "JobPostingContractTerms"
kind: "object"
domain: "Job Posts"
gql_name: "JobPostingContractTerms"
html_id: "definition-JobPostingContractTerms"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingContractTerms"
generated_by: "scripts/convert.mjs"
---


# `JobPostingContractTerms` (object)

## Description

Contract terms for a job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `contractStartDate` | [`String`](../scalars/String.md) | Start date for the contract terms formatted according to ISO-8601 |
| `contractEndDate` | [`String`](../scalars/String.md) | End date for the contract terms formatted according to ISO-8601 |
| `contractType` | [`ContractType!`](../enums/ContractType.md) | Type of contract (hourly or fixed-price) |
| `onSiteType` | [`OnSiteType`](../enums/OnSiteType.md) | On-site work requirement type |
| `personsToHire` | [`Int`](../scalars/Int.md) | Number of persons to hire |
| `experienceLevel` | [`ExperienceLevel`](../enums/ExperienceLevel.md) | Required experience level |
| `fixedPriceContractTerms` | [`FixedPriceContractTerms`](FixedPriceContractTerms.md) | Fixed-price specific terms |
| `hourlyContractTerms` | [`HourlyContractTerms`](HourlyContractTerms.md) | Hourly specific terms |

## Examples

### Example

```json
{
  "contractStartDate": "abc123",
  "contractEndDate": "abc123",
  "contractType": "HOURLY",
  "onSiteType": "REMOTE",
  "personsToHire": 987,
  "experienceLevel": "ENTRY_LEVEL",
  "fixedPriceContractTerms": FixedPriceContractTerms,
  "hourlyContractTerms": HourlyContractTerms
}
```
