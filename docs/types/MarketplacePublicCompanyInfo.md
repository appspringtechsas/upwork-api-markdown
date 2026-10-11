---
title: "MarketplacePublicCompanyInfo"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplacePublicCompanyInfo"
html_id: "definition-MarketplacePublicCompanyInfo"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplacePublicCompanyInfo"
generated_by: "scripts/convert.mjs"
---


# `MarketplacePublicCompanyInfo` (object)

## Description

Public-facing company information used in marketplace search

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Company identifier |
| `legacyType` | [`OrganizationLegacyType`](../enums/OrganizationLegacyType.md) | Legacy organization type |
| `teamsEnabled` | [`Boolean`](../scalars/Boolean.md) | Teams feature enabled flag |
| `canHire` | [`Boolean`](../scalars/Boolean.md) | Whether the company can hire |
| `hidden` | [`Boolean`](../scalars/Boolean.md) | Whether the company is hidden |
| ⚠️ `includeInStats` | [`Boolean`](../scalars/Boolean.md) | Include company in statistics (deprecated) **⚠️ Deprecated — No longer available for orgs** |
| `country` | [`Country`](Country.md) | Country |
| `state` | [`String`](../scalars/String.md) | State |
| `city` | [`String`](../scalars/String.md) | City |
| `timezone` | [`String`](../scalars/String.md) | Timezone |
| `accountingEntity` | [`String`](../scalars/String.md) | Accounting entity code |
| `billingType` | [`BillingType`](../enums/BillingType.md) | Billing type |
| `paymentVerification` | [`PaymentVerificationResult`](PaymentVerificationResult.md) | Payment verification details |
| `agencyDetails` | [`AgencyDetails`](AgencyDetails.md) | Agency details if applicable |
| `businessPlus` | [`Boolean`](../scalars/Boolean.md) | Whether the company currently has Business Plus (mid-tier plans 36/37). Public company attribute (same visibility class as payment verification). Null when the company uid is missing or the membership lookup fails. |

## Examples

### Example

```json
{
  "id": "4",
  "legacyType": "CLIENT",
  "teamsEnabled": true,
  "canHire": false,
  "hidden": true,
  "includeInStats": true,
  "country": Country,
  "state": "xyz789",
  "city": "abc123",
  "timezone": "xyz789",
  "accountingEntity": "xyz789",
  "billingType": "BILL",
  "paymentVerification": PaymentVerificationResult,
  "agencyDetails": AgencyDetails,
  "businessPlus": true
}
```
