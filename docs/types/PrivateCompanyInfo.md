---
title: "PrivateCompanyInfo"
kind: "object"
domain: "Users and teams"
gql_name: "PrivateCompanyInfo"
html_id: "definition-PrivateCompanyInfo"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PrivateCompanyInfo"
generated_by: "scripts/convert.mjs"
---


# `PrivateCompanyInfo` (object)

## Description

Private company info

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Company identifier |
| `name` | [`String`](../scalars/String.md) | Company name |
| `description` | [`String`](../scalars/String.md) | Company description |
| `legacyType` | [`PrivateCompanyLegacyType`](../enums/PrivateCompanyLegacyType.md) | Legacy private company type |
| `logoURL` | [`String`](../scalars/String.md) | Logo URL |
| `contactUser` | [`GenericUser`](GenericUser.md) | Contact person |
| `phone` | [`String`](../scalars/String.md) | Business phone number |
| `displayName` | [`String`](../scalars/String.md) | Display name |
| `teamsEnabled` | [`Boolean`](../scalars/Boolean.md) | Whether teams feature is enabled |
| `canHire` | [`Boolean`](../scalars/Boolean.md) | Whether the company can hire |
| `hidden` | [`Boolean`](../scalars/Boolean.md) | Whether the company is hidden |
| ⚠️ `includeInStats` | [`Boolean`](../scalars/Boolean.md) | **⚠️ Deprecated — No longer available for orgs** |
| `companyName` | [`String`](../scalars/String.md) | Legal company name |
| `country` | [`Country`](Country.md) | Country of registration |
| `state` | [`String`](../scalars/String.md) | State or region |
| `city` | [`String`](../scalars/String.md) | City |
| `address` | [`String`](../scalars/String.md) | Street address |
| `zip` | [`String`](../scalars/String.md) | Postal or ZIP code |
| `timezone` | [`String`](../scalars/String.md) | Timezone identifier |
| `accountingEntity` | [`String`](../scalars/String.md) | Accounting entity identifier |
| `billingType` | [`BillingType`](../enums/BillingType.md) | Billing type |
| `summary` | [`String`](../scalars/String.md) | Summary/description |
| ⚠️ `paymentVerificationStatus` | [`PaymentVerificationStatus`](../enums/PaymentVerificationStatus.md) | Payment verification status **⚠️ Deprecated — use paymentVerification instead** |
| `paymentVerification` | [`PaymentVerificationResult`](PaymentVerificationResult.md) | Payment verification result |
| `agencyDetails` | [`AgencyDetails`](AgencyDetails.md) | Agency details |
| `jobPosts` | [`JobPostingConnection!`](JobPostingConnection.md) | Job posts of the company |

## Field arguments

### `jobPosts`

| Argument | Type | Description |
|---|---|---|
| `jobPostsFilter` | [`JobPostsFilter`](../inputs/JobPostsFilter.md) | Filter for job posts |
| `pagination` | [`Pagination`](../inputs/Pagination.md) | Pagination options |

## Examples

### Example

```json
{
  "id": 4,
  "name": "xyz789",
  "description": "abc123",
  "legacyType": "CLIENT",
  "logoURL": "abc123",
  "contactUser": GenericUser,
  "phone": "xyz789",
  "displayName": "xyz789",
  "teamsEnabled": true,
  "canHire": false,
  "hidden": true,
  "includeInStats": true,
  "companyName": "abc123",
  "country": Country,
  "state": "abc123",
  "city": "xyz789",
  "address": "xyz789",
  "zip": "xyz789",
  "timezone": "abc123",
  "accountingEntity": "xyz789",
  "billingType": "BILL",
  "summary": "xyz789",
  "paymentVerificationStatus": "DEPOSIT_UNSUPPORTED",
  "paymentVerification": PaymentVerificationResult,
  "agencyDetails": AgencyDetails,
  "jobPosts": JobPostingConnection
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PrivateCompanyInfo" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [PiiUser](PiiUser.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ProcessAddResponse](ProcessAddResponse.md) ➡️
