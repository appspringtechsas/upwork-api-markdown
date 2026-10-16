---
title: "MarketplaceQualification"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplaceQualification"
html_id: "definition-MarketplaceQualification"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceQualification"
generated_by: "scripts/convert.mjs"
---


# `MarketplaceQualification` (object)

## Description

Qualification constraints for marketplace

## Fields

| Field | Type | Description |
|---|---|---|
| `contractorType` | [`ContractorType`](../enums/ContractorType.md) | Type of contractor |
| `englishProficiency` | [`EnglishProficiency`](../enums/EnglishProficiency.md) | Required English proficiency |
| `hasPortfolio` | [`Boolean`](../scalars/Boolean.md) | Whether portfolio is required |
| `hoursWorked` | [`Int`](../scalars/Int.md) | Minimum hours worked on platform |
| `risingTalent` | [`Boolean`](../scalars/Boolean.md) | Whether rising talent is preferred |
| `jobSuccessScore` | [`Int`](../scalars/Int.md) | Minimum job success score |
| `minEarning` | [`Earning`](../enums/Earning.md) | Minimum earnings requirement |
| `preferredGroups` | [`[PreferredGroup!]`](PreferredGroup.md) | Preferred freelancer groups |
| `preferenceTests` | [`[PreferredTest]`](PreferredTest.md) | Preferred tests or certifications |

## Examples

### Example

```json
{
  "contractorType": "ALL",
  "englishProficiency": "ANY",
  "hasPortfolio": false,
  "hoursWorked": 987,
  "risingTalent": false,
  "jobSuccessScore": 123,
  "minEarning": "ANY",
  "preferredGroups": [PreferredGroup],
  "preferenceTests": [PreferredTest]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceQualification" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [MarketplacePublicCompanyInfo](MarketplacePublicCompanyInfo.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [MarketplaceQuestion](MarketplaceQuestion.md) ➡️
